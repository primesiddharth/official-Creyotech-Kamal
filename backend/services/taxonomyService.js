import { pool } from "../db/pool.js";

const TABLES = { skill: "skills", service: "services" };

export async function getOrCreateTaxonomy(type, name) {
  const table = TABLES[type];
  const existing = await pool.query(`SELECT id FROM ${table} WHERE name = $1`, [name]);
  if (existing.rows.length > 0) return existing.rows[0].id;

  const inserted = await pool.query(
    `INSERT INTO ${table} (name) VALUES ($1) RETURNING id`,
    [name],
  );
  return inserted.rows[0].id;
}

export async function linkTaxonomy(junctionTable, ownerColumn, ownerId, taxonomyColumn, taxonomyId) {
  await pool.query(
    `INSERT INTO ${junctionTable} (${ownerColumn}, ${taxonomyColumn}) VALUES ($1, $2)
     ON CONFLICT DO NOTHING`,
    [ownerId, taxonomyId],
  );
}