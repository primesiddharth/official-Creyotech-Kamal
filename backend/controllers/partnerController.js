import { pool } from "../db/pool.js";

const CONFIG = {
  vendor: {
    table: "vendors",
    maxItems: 8,
    itemsColumn: "services_offered",
    required: ["company_name", "brand_name", "address", "email", "concerned_person_1", "phone_number_1"],
  },
  freelancer: {
    table: "freelancers",
    maxItems: 6,
    itemsColumn: "services_offered",
    required: ["name", "address", "phone_number", "email"],
  },
  associate: {
    table: "associates",
    maxItems: 4,
    itemsColumn: "skills",
    required: ["name", "address", "phone_number", "personal_email"],
  },
};

export const listPartners = async (req, res) => {
  const { type } = req.params;
  const config = CONFIG[type];
  if (!config) return res.status(400).json({ success: false, message: "Invalid type." });

  const { rows } = await pool.query(`SELECT * FROM ${config.table} ORDER BY created_at DESC`);
  res.json({ success: true, data: rows });
};

export const createPartner = async (req, res) => {
  const { type } = req.params;
  const config = CONFIG[type];
  if (!config) return res.status(400).json({ success: false, message: "Invalid type." });

  const body = { ...req.body };
  const items = (body[config.itemsColumn] || []).filter((v) => v && v.trim());

  if (items.length === 0 || items.length > config.maxItems) {
    return res.status(400).json({
      success: false,
      message: `Please provide 1 to ${config.maxItems} entries.`,
    });
  }

  for (const field of config.required) {
    if (!body[field] || !body[field].trim()) {
      return res.status(400).json({ success: false, message: `${field} is required.` });
    }
  }

  const columns = [...config.required, config.itemsColumn];
  const values = [...config.required.map((f) => body[f].trim()), items];
  const placeholders = columns.map((_, i) => `$${i + 1}`).join(", ");

  try {
    await pool.query(
      `INSERT INTO ${config.table} (${columns.join(", ")}) VALUES (${placeholders})`,
      values,
    );
    res.status(201).json({ success: true, message: "Saved." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to save." });
  }
};

export const deletePartner = async (req, res) => {
  const { type, id } = req.params;
  const config = CONFIG[type];
  if (!config) return res.status(400).json({ success: false, message: "Invalid type." });

  await pool.query(`DELETE FROM ${config.table} WHERE id = $1`, [id]);
  res.json({ success: true, message: "Deleted." });
};