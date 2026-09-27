import jwt from "jsonwebtoken";
import { pool } from "../db/pool.js";

export const managerLogin = async (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ success: false, message: "Password is required." });
  }

  const { rows } = await pool.query(
    "SELECT (password_hash = crypt($1, password_hash)) AS matches FROM page_access WHERE page_name = $2",
    [password, "intern-information-creation"],
  );

  if (rows.length === 0 || !rows[0].matches) {
    return res.status(401).json({ success: false, message: "Incorrect password." });
  }

  const token = jwt.sign({ role: "manager" }, process.env.JWT_SECRET, { expiresIn: "12h" });

  res.cookie("manager_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 12 * 60 * 60 * 1000,
  });

  res.json({ success: true, message: "Logged in." });
};

export const managerLogout = (req, res) => {
  res.clearCookie("manager_token");
  res.json({ success: true });
};