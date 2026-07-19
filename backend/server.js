import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { google } from "googleapis";

import contactRoutes from "./routes/contactRoutes.js";
import careerRoutes from "./routes/careerRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.FRONTEND_URL],
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    app: "Creyotech Backend",
    version: "2.0.0",
    status: "Running",
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
  });
});

// Google OAuth

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI,
);

app.get("/auth/google", (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: ["https://www.googleapis.com/auth/gmail.send"],
  });

  res.redirect(authUrl);
});

app.get("/auth/google/callback", async (req, res) => {
  try {
    const { code } = req.query;

    const { tokens } = await oauth2Client.getToken(code);

    console.log("GOOGLE REFRESH TOKEN:", tokens.refresh_token);

    res.json({
      success: true,
      message:
        "Google authentication successful. Check backend terminal for refresh token.",
    });
  } catch (error) {
    console.error("Google OAuth Error:", error);

    res.status(500).json({
      success: false,
      message: "Google authentication failed.",
    });
  }
});

app.use("/contact", contactRoutes);
app.use("/career", careerRoutes);

app.use((err, req, res, next) => {
  console.error("Server Error:", err);

  if (err.code === "LIMIT_FILE_SIZE") {
    return res.status(400).json({
      success: false,

      message: "File size cannot exceed 5 MB.",
    });
  }

  return res.status(400).json({
    success: false,

    message: err.message || "Something went wrong.",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
