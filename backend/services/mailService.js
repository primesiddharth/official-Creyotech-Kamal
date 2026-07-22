import { google } from "googleapis";

export const sendEmail = async ({
  to,
  replyTo,
  subject,
  senderName="Creyotech Career",
  html,
  attachments = [],
}) => {
  try {
    // Create OAuth2 client
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI,
    );

    // Set refresh token
    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    // Create Gmail API client
    const gmail = google.gmail({
      version: "v1",
      auth: oauth2Client,
    });

    const boundary = `boundary_${Date.now()}`;

    const messageParts = [
      `From: "${senderName}" <${process.env.GMAIL_USER}>`,
      `To: ${to}`,
      `Reply-To: "${senderName}" ${replyTo}`,
      `Subject: ${subject}`,
      "MIME-Version: 1.0",
    ];

    // If there are attachments, use multipart MIME
    if (attachments.length > 0) {
      messageParts.push(
        `Content-Type: multipart/mixed; boundary="${boundary}"`,
        "",
        `--${boundary}`,
        'Content-Type: text/html; charset="UTF-8"',
        "Content-Transfer-Encoding: 7bit",
        "",
        html,
      );

      for (const attachment of attachments) {
        const filename = attachment.filename || "attachment";

        const contentType =
          attachment.contentType || "application/octet-stream";

        let content = attachment.content;

        // Convert Buffer to base64
        if (Buffer.isBuffer(content)) {
          content = content.toString("base64");
        }

        messageParts.push(
          `--${boundary}`,
          `Content-Type: ${contentType}; name="${filename}"`,
          "Content-Transfer-Encoding: base64",
          `Content-Disposition: attachment; filename="${filename}"`,
          "",
          content,
        );
      }

      messageParts.push(`--${boundary}--`);
    } else {
      // No attachments
      messageParts.push('Content-Type: text/html; charset="UTF-8"', "", html);
    }

    const email = messageParts.join("\r\n");

    // Gmail API requires base64url encoding
    const encodedMessage = Buffer.from(email)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    const response = await gmail.users.messages.send({
      userId: "me",

      requestBody: {
        raw: encodedMessage,
      },
    });

    console.log("Email sent successfully via Gmail API:", response.data.id);

    return response.data;
  } catch (error) {
    console.error("Gmail API Error:", {
      message: error.message,
      code: error.code,
      status: error.response?.status,
      data: error.response?.data,
    });

    throw error;
  }
};
