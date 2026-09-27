import { pool } from "../db/pool.js";

export async function cleanupExpiredAccess() {
  await pool.query("DELETE FROM verification_access WHERE expires_at <= now()");
}