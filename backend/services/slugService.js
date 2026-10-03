import { pool } from "../db/pool.js";

function slugify(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateUniqueSlug(name) {
  const base = slugify(name) || "student";
  let slug = base;
  let counter = 2;

  while (true) {
    const { rows } = await pool.query(
      "SELECT 1 FROM students WHERE slug = $1",
      [slug],
    );
    if (rows.length === 0) return slug;
    slug = `${base}-${counter}`;
    counter++;
  }
}