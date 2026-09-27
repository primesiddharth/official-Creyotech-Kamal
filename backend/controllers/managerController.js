import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "../db/pool.js";
import { generateUniqueSlug } from "../services/slugService.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UPLOAD_DIR = path.join(__dirname, "../uploads/students");

function saveImage(file) {
    if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });
    const filename = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}${path.extname(file.originalname)}`;
    fs.writeFileSync(path.join(UPLOAD_DIR, filename), file.buffer);
    return { path: `/uploads/students/${filename}`, size: file.size };
}

async function getOrCreateLookup(table, name) {
    const existing = await pool.query(`SELECT id FROM ${table} WHERE name = $1`, [name]);
    if (existing.rows.length > 0) return existing.rows[0].id;

    const inserted = await pool.query(
        `INSERT INTO ${table} (name) VALUES ($1) RETURNING id`,
        [name],
    );
    return inserted.rows[0].id;
}

export const createStudent = async (req, res) => {
    try {
        const {
            name, phone_number, address, aadhar_number,
            college_name, university_name, university_roll_no, course_name,
        } = req.body;

        const cleanPhone = phone_number?.trim();
        const cleanAadhaar = aadhar_number?.trim();

        const image = req.file;

        if (!name || !phone_number || !address || !aadhar_number || !image ||
            !college_name || !university_name || !university_roll_no || !course_name) {
            return res.status(400).json({ success: false, message: "All fields are required." });
        }

        const slug = await generateUniqueSlug(name);
        const savedImage = saveImage(image);

        const collegeId = await getOrCreateLookup("colleges", college_name.trim());
        const universityId = await getOrCreateLookup("universities", university_name.trim());
        const courseId = await getOrCreateLookup("courses", course_name.trim());

        const aadhaarHash = crypto.createHash("sha256").update(cleanAadhaar).digest("hex");

        const { rows } = await pool.query(
            `INSERT INTO students (
         slug, name, phone_number, address,
         aadhar_number_encrypted, aadhar_number_hash,
         image_path, image_size_bytes,
         college_id, university_id, university_roll_no, course_id
       ) VALUES (
         $1, $2, $3, $4,
         pgp_sym_encrypt($5, $6), $7,
         $8, $9, $10, $11, $12, $13
       ) RETURNING id, slug`,
            [
                slug, name, cleanPhone, address,
                cleanAadhaar, process.env.AADHAAR_ENCRYPTION_KEY, aadhaarHash,
                savedImage.path, savedImage.size,
                collegeId, universityId, university_roll_no, courseId,
            ],
        );

        await pool.query(
            "INSERT INTO verification_access (student_id) VALUES ($1)",
            [rows[0].id],
        );

        res.status(201).json({ success: true, slug: rows[0].slug });
    } catch (error) {
        if (error.code === "23505") {
            return res.status(400).json({ success: false, message: "This Aadhaar number is already registered." });
        }
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to create student." });
    }
};

export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const {
        name, phone_number, address,
        college_name, university_name, university_roll_no, course_name,
    } = req.body;

    const collegeId = await getOrCreateLookup("colleges", college_name.trim());
    const universityId = await getOrCreateLookup("universities", university_name.trim());
    const courseId = await getOrCreateLookup("courses", course_name.trim());

    let imageClause = "";
    const values = [
        name, phone_number, address,
        collegeId, universityId, university_roll_no, courseId, id,
    ];

    if (req.file) {
        const savedImage = saveImage(req.file);
        imageClause = ", image_path = $9, image_size_bytes = $10";
        values.push(savedImage.path, savedImage.size);
    }

    await pool.query(
        `UPDATE students SET
       name = $1, phone_number = $2, address = $3,
       college_id = $4, university_id = $5, university_roll_no = $6, course_id = $7,
       updated_at = now() ${imageClause}
     WHERE id = $8`,
        values,
    );

    res.json({ success: true, message: "Student updated." });
};

export const deleteStudent = async (req, res) => {
    const { id } = req.params;
    await pool.query("DELETE FROM students WHERE id = $1", [id]);
    res.json({ success: true, message: "Student deleted." });
};

export const regenerateAccess = async (req, res) => {
    const { id } = req.params;

    await pool.query(
        `INSERT INTO verification_access (student_id, expires_at, regenerated_at)
     VALUES ($1, now() + INTERVAL '14 days', now())
     ON CONFLICT (student_id)
     DO UPDATE SET expires_at = now() + INTERVAL '14 days', regenerated_at = now()`,
        [id],
    );

    res.json({ success: true, message: "Access regenerated for 14 more days." });
};

export const listStudentsForManager = async (req, res) => {
    const { rows } = await pool.query(`
    SELECT s.*, c.name AS college_name, u.name AS university_name, co.name AS course_name,
           v.expires_at
    FROM students s
    JOIN colleges c ON c.id = s.college_id
    JOIN universities u ON u.id = s.university_id
    JOIN courses co ON co.id = s.course_id
    LEFT JOIN verification_access v ON v.student_id = s.id
    ORDER BY s.created_at DESC
  `);

    res.json({ success: true, data: rows });
};