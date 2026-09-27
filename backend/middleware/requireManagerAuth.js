import jwt from "jsonwebtoken";

export function requireManagerAuth(req, res, next) {
  const token = req.cookies?.manager_token;

  if (!token) {
    return res.status(401).json({ success: false, message: "Login required." });
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ success: false, message: "Session expired, please login again." });
  }
}