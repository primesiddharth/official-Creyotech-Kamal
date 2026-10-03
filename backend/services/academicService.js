import { pool } from "../db/pool.js";

const TABLES = { college: "colleges", university: "universities", course: "courses" };

export async function getOrCreateAcademic(type, name) {
  const table = TABLES[type];
  const existing = await pool.query(`SELECT id FROM ${table} WHERE name = $1`, [name]);
  if (existing.rows.length > 0) return existing.rows[0].id;

  const inserted = await pool.query(
    `INSERT INTO ${table} (name) VALUES ($1) RETURNING id`,
    [name],
  );
  return inserted.rows[0].id;
}