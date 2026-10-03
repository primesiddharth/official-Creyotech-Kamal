import crypto from "crypto";
import { pool } from "../db/pool.js";
import { getOrCreateAcademic } from "../services/academicService.js";
import { generateVerificationToken } from "../services/tokenService.js";
import { uploadImageToDropbox } from "../services/dropboxService.js";
import { encryptAadhaar } from "../services/aadhaarCryptoService.js";
function slugify(text) {
  return text.toString().trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

async function generateUniqueSlug(name) {
  const base = slugify(name) || "student";
  let slug = base, counter = 2;
  while (true) {
    const { rows } = await pool.query("SELECT 1 FROM students WHERE slug = $1", [slug]);
    if (rows.length === 0) return slug;
    slug = `${base}-${counter}`;
    counter++;
  }
}

export const createStudent = async (req, res) => {
  const client = await pool.connect();
  try {
    const {
      name, email, phone_number, aadhar_number,
      address_line_1, address_line_2, post_office_name, police_station_name,
      city_name, district_name, state_name, country_name, postal_code,
      college_name, university_name, university_roll_no, course_name,
      skills,
    } = req.body;

    const image = req.file;
    const skillList = (Array.isArray(skills) ? skills : [skills]).filter((s) => s && s.trim());

    if (!name || !email || !phone_number || !aadhar_number || !image ||
        !address_line_1 || !post_office_name || !police_station_name ||
        !city_name || !district_name || !state_name || !postal_code ||
        !college_name || !university_name || !university_roll_no || !course_name) {
      return res.status(400).json({ success: false, message: "Please fill all required fields." });
    }

    if (skillList.length < 1 || skillList.length > 4) {
      return res.status(400).json({ success: false, message: "Please provide 1 to 4 skills." });
    }

    const slug = await generateUniqueSlug(name);
    const imageLink = await uploadImageToDropbox(image);

    const collegeId = await getOrCreateAcademic("college", college_name.trim());
    const universityId = await getOrCreateAcademic("university", university_name.trim());
    const courseId = await getOrCreateAcademic("course", course_name.trim());

    const aadhaarHash = crypto.createHash("sha256").update(aadhar_number.trim()).digest("hex");
    const aadhaarLast4 = aadhar_number.trim().slice(-4);
    const aadhaarEncrypted = encryptAadhaar(aadhar_number.trim());

    await client.query("BEGIN");

    const { rows } = await client.query(
      `INSERT INTO students (
         slug, name, email, phone_number,
         address_line_1, address_line_2, post_office_name, police_station_name,
         city_name, district_name, state_name, country_name, postal_code,
         aadhar_encrypted, aadhar_hash, aadhar_last4,
         image_path, college_id, university_id, university_roll_no, course_id
       ) VALUES (
         $1, $2, $3, $4,
         $5, $6, $7, $8,
         $9, $10, $11, $12, $13,
         $14, $15, $16,
         $17, $18, $19, $20, $21
       ) RETURNING id, slug`,
      [
        slug, name.trim(), email.trim(), phone_number.trim(),
        address_line_1.trim(), address_line_2?.trim() || null, post_office_name.trim(), police_station_name.trim(),
        city_name.trim(), district_name.trim(), state_name.trim(), (country_name || "India").trim(), postal_code.trim(),
        aadhaarEncrypted, aadhaarHash, aadhaarLast4,
        imageLink, collegeId, universityId, university_roll_no.trim(), courseId,
      ],
    );
    const studentId = rows[0].id;

    for (const skillName of skillList) {
      const existing = await client.query("SELECT id FROM skills WHERE name = $1", [skillName.trim()]);
      let skillId;
      if (existing.rows.length > 0) {
        skillId = existing.rows[0].id;
      } else {
        const inserted = await client.query("INSERT INTO skills (name) VALUES ($1) RETURNING id", [skillName.trim()]);
        skillId = inserted.rows[0].id;
      }
      await client.query(
        "INSERT INTO student_skills (student_id, skill_id) VALUES ($1, $2) ON CONFLICT DO NOTHING",
        [studentId, skillId],
      );
    }

    const { token, tokenHash } = generateVerificationToken();
    await client.query(
      "INSERT INTO verification_access (student_id, token_hash) VALUES ($1, $2)",
      [studentId, tokenHash],
    );

    await client.query("COMMIT");

    res.status(201).json({
      success: true,
      slug: rows[0].slug,
      verificationLink: `/intern-information-verification/${rows[0].slug}?token=${token}`,
    });
  } catch (error) {
    await client.query("ROLLBACK");
    if (error.code === "23505") {
      return res.status(400).json({ success: false, message: "This Aadhaar number or email is already registered." });
    }
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to create student." });
  } finally {
    client.release();
  }
};
export const updateStudent = async (req, res) => {
  const { id } = req.params;
  const {
    name, email, phone_number,
    address_line_1, address_line_2, post_office_name, police_station_name,
    city_name, district_name, state_name, country_name, postal_code,
    college_name, university_name, university_roll_no, course_name,
  } = req.body;

  const collegeId = await getOrCreateAcademic("college", college_name.trim());
  const universityId = await getOrCreateAcademic("university", university_name.trim());
  const courseId = await getOrCreateAcademic("course", course_name.trim());

  let imageClause = "";
  const values = [
    name.trim(), email.trim(), phone_number.trim(),
    address_line_1.trim(), address_line_2?.trim() || null, post_office_name.trim(), police_station_name.trim(),
    city_name.trim(), district_name.trim(), state_name.trim(), (country_name || "India").trim(), postal_code.trim(),
    collegeId, universityId, university_roll_no.trim(), courseId, id,
  ];

  if (req.file) {
    const imageLink = await uploadImageToDropbox(req.file);
    imageClause = ", image_path = $18";
    values.push(imageLink);
  }

  await pool.query(
    `UPDATE students SET
       name = $1, email = $2, phone_number = $3,
       address_line_1 = $4, address_line_2 = $5, post_office_name = $6, police_station_name = $7,
       city_name = $8, district_name = $9, state_name = $10, country_name = $11, postal_code = $12,
       college_id = $13, university_id = $14, university_roll_no = $15, course_id = $16,
       updated_at = now() ${imageClause}
     WHERE id = $17`,
    values,
  );

  res.json({ success: true, message: "Student updated." });
};

// Hard delete ki jagah ab soft delete (schema mein is_active/deleted_at hai)
export const deleteStudent = async (req, res) => {
  const { id } = req.params;
  await pool.query(
    "UPDATE students SET is_active = false, deleted_at = now() WHERE id = $1",
    [id],
  );
  res.json({ success: true, message: "Student removed." });
};

export const regenerateAccess = async (req, res) => {
  const { id } = req.params;
  const { token, tokenHash } = generateVerificationToken();

  await pool.query(
    `INSERT INTO verification_access (student_id, token_hash, expires_at, regenerated_at)
     VALUES ($1, $2, now() + INTERVAL '14 days', now())
     ON CONFLICT (student_id)
     DO UPDATE SET token_hash = $2, expires_at = now() + INTERVAL '14 days', regenerated_at = now()`,
    [id, tokenHash],
  );

  const { rows } = await pool.query("SELECT slug FROM students WHERE id = $1", [id]);

  res.json({
    success: true,
    message: "Access regenerated for 14 more days.",
    verificationLink: `/intern-information-verification/${rows[0].slug}?token=${token}`,
  });
};

export const listStudentsForManager = async (req, res) => {
  const { rows } = await pool.query(`
    SELECT s.id, s.slug, s.name, s.email, s.phone_number, s.image_path,
           s.address_line_1, s.address_line_2, s.post_office_name, s.police_station_name,
           s.city_name, s.district_name, s.state_name, s.country_name, s.postal_code,
           c.name AS college_name, u.name AS university_name, co.name AS course_name,
           s.university_roll_no, s.created_at, v.expires_at
    FROM students s
    JOIN colleges c ON c.id = s.college_id
    JOIN universities u ON u.id = s.university_id
    JOIN courses co ON co.id = s.course_id
    LEFT JOIN verification_access v ON v.student_id = s.id
    WHERE s.is_active = true
    ORDER BY s.created_at DESC
  `);
  res.json({ success: true, data: rows });
};