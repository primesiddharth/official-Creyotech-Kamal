import { sendEmail } from "../services/mailService.js";
import { careerTemplate } from "../templates/careerTemplate.js";

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

    // Generate email template
    const html = careerTemplate({
      name,
      email,
      whatsapp_number,
      position,
    });

    // Prepare attachments
    const attachments = [
      {
        filename: resume.originalname,
        content: resume.buffer,
      },
      {
        filename: addressProof.originalname,
        content: addressProof.buffer,
      },
      {
        filename: marksheet.originalname,
        content: marksheet.buffer,
      },
    ];

    // Send email
    await sendEmail({
      to: process.env.GMAIL_RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Career Application - ${position}`,
      html,
      attachments,
    });

    console.log(`Career application received from ${email} for ${position}`);

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
