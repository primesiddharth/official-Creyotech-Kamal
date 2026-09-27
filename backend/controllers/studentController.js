import { pool } from "../db/pool.js";

export const listStudents = async (req, res) => {
  const { rows } = await pool.query(`
    SELECT s.id, s.slug, s.name, s.phone_number, s.address,
           c.name AS college_name, u.name AS university_name,
           s.university_roll_no, co.name AS course_name,
           s.image_path, s.created_at
    FROM students s
    JOIN colleges c ON c.id = s.college_id
    JOIN universities u ON u.id = s.university_id
    JOIN courses co ON co.id = s.course_id
    ORDER BY s.created_at DESC
  `);

  res.json({ success: true, data: rows });
};

export const getStudentBySlug = async (req, res) => {
  const { slug } = req.params;

  const { rows } = await pool.query(
    `
    SELECT s.id, s.slug, s.name, s.phone_number, s.address,
           c.name AS college_name, u.name AS university_name,
           s.university_roll_no, co.name AS course_name,
           s.image_path, v.expires_at
    FROM students s
    JOIN verification_access v ON v.student_id = s.id
    JOIN colleges c ON c.id = s.college_id
    JOIN universities u ON u.id = s.university_id
    JOIN courses co ON co.id = s.course_id
    WHERE s.slug = $1 AND v.expires_at > now()
    `,
    [slug],
  );

  if (rows.length === 0) {
    return res.status(404).json({
      success: false,
      message: "This link has expired. Please contact your manager to regenerate it.",
    });
  }

  res.json({ success: true, data: rows[0] });
};