import nodemailer from "nodemailer";
import { google } from "googleapis";

export const sendEmail = async ({
  to,
  replyTo,
  subject,
  html,
  attachments = [],
}) => {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const accessTokenResponse = await oauth2Client.getAccessToken();

    const accessToken = accessTokenResponse.token;

    if (!accessToken) {
      throw new Error("Failed to generate Google OAuth access token");
    }

    console.log("OAuth Access Token Generated:", Boolean(accessToken));

    console.log("Sending email as:", process.env.GMAIL_USER);

    const transporter = nodemailer.createTransport({
      service: "gmail",

      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken,
      },
    });

    // Test authentication
    await transporter.verify();

    console.log("Nodemailer Gmail authentication successful");

    const info = await transporter.sendMail({
      from: `"Creyotech Website" <${process.env.GMAIL_USER}>`,
      to,
      replyTo,
      subject,
      html,
      attachments,
    });

    console.log("Email sent successfully:", info.messageId);

    return info;
  } catch (error) {
    console.error("Nodemailer Error:", error);

    throw error;
  }
};
