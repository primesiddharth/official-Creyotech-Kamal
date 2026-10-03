import crypto from "crypto";
import jwt from "jsonwebtoken";

export const managerLogin = async (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ success: false, message: "Password is required." });
  }

  const inputHash = crypto.createHash("sha256").update(password).digest("hex");

  if (inputHash !== process.env.MANAGER_PASSWORD_HASH) {
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