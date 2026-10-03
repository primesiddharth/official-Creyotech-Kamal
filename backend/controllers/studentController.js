import { pool } from "../db/pool.js";
import { hashToken } from "../services/tokenService.js";

const STUDENT_SELECT_BASE = `
  SELECT s.id, s.slug, s.name, s.email, s.phone_number, s.image_path,
         s.address_line_1, s.address_line_2, s.post_office_name, s.police_station_name,
         s.city_name, s.district_name, s.state_name, s.country_name, s.postal_code,
         c.name AS college_name, u.name AS university_name, co.name AS course_name,
         s.university_roll_no, s.created_at
  FROM students s
  JOIN colleges c ON c.id = s.college_id
  JOIN universities u ON u.id = s.university_id
  JOIN courses co ON co.id = s.course_id
  WHERE s.is_active = true
`;

export const listStudents = async (req, res) => {
  try {
    const { rows } = await pool.query(`${STUDENT_SELECT_BASE} ORDER BY s.created_at DESC`);
    res.json({ success: true, data: rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to load directory." });
  }
};

export const getStudentBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({ success: false, message: "Verification token is required." });
    }

    const { rows } = await pool.query(
      `SELECT s.id, s.slug, s.name, s.email, s.phone_number, s.image_path,
              s.address_line_1, s.address_line_2, s.post_office_name, s.police_station_name,
              s.city_name, s.district_name, s.state_name, s.country_name, s.postal_code,
              c.name AS college_name, u.name AS university_name, co.name AS course_name,
              s.university_roll_no, v.expires_at
       FROM students s
       JOIN verification_access v ON v.student_id = s.id
       JOIN colleges c ON c.id = s.college_id
       JOIN universities u ON u.id = s.university_id
       JOIN courses co ON co.id = s.course_id
       WHERE s.slug = $1 AND s.is_active = true AND v.expires_at > now() AND v.token_hash = $2`,
      [slug, hashToken(token)],
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "This link is invalid or has expired. Please contact your manager to regenerate it.",
      });
    }

    res.json({ success: true, data: rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong." });
  }
};