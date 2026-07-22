import { sendEmail } from "../services/mailService.js";
import { careerTemplate } from "../templates/careerTemplate.js";
import crypto from "crypto";

export const submitCareerForm = async (req, res) => {
  try {
    const { name, email, whatsapp_number, position } = req.body;

    // Validate required fields
    if (!name || !email || !whatsapp_number || !position) {
      return res.status(400).json({
        success: false,
        message: "All application fields are required.",
      });
    }

    // Get uploaded files
    const resume = req.files?.resume?.[0];

    const addressProof = req.files?.address_proof?.[0];

    const marksheet = req.files?.marksheet?.[0];

    // Validate required documents
    if (!resume || !addressProof || !marksheet) {
      return res.status(400).json({
        success: false,
        message: "Resume, government ID and education proof are required.",
      });
    }

    // Generate hash from actual file content
    const getFileHash = (file) => {
      return crypto.createHash("sha256").update(file.buffer).digest("hex");
    };

    const resumeHash = getFileHash(resume);
    const addressProofHash = getFileHash(addressProof);
    const marksheetHash = getFileHash(marksheet);

    // Check for duplicate files
    const hashes = [resumeHash, addressProofHash, marksheetHash];

    if (new Set(hashes).size !== hashes.length) {
      return res.status(400).json({
        success: false,
        message:
          "Duplicate files are not allowed. Please upload correct PDF files.",
      });
    }

    // Make filename safe
    const safeName = name
      .trim()
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_-]/g, "");

    // Generate email template
    const html = careerTemplate({
      name,
      email,
      whatsapp_number,
      position,
    });

    // Prepare attachments with structured filenames
    const attachments = [
      {
        filename: `${safeName}_Resume.pdf`,
        content: resume.buffer,
        contentType: "application/pdf",
      },
      {
        filename: `${safeName}_Address_Proof.pdf`,
        content: addressProof.buffer,
        contentType: "application/pdf",
      },
      {
        filename: `${safeName}_Marksheet.pdf`,
        content: marksheet.buffer,
        contentType: "application/pdf",
      },
    ];

    // Send email
    await sendEmail({
      to: process.env.GMAIL_RECEIVER_EMAIL,
      senderName: name,
      replyTo: email,
      subject: `Application for - ${position}`,
      html,
      attachments,
    });

    return res.status(200).json({
      success: true,
      message: "Career application submitted successfully.",
    });
  } catch (error) {
    console.error("Career Form Error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to submit career application.",
    });
  }
};
