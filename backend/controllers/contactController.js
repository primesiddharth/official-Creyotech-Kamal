import { sendEmail } from "../services/mailService.js";

import { contactTemplate } from "../templates/contactTemplate.js";

export const submitContactForm = async (req, res) => {
  try {
    const { name, email, whatsapp_number, problem_faced, solution_required } =
      req.body;

    if (
      !name ||
      !email ||
      !whatsapp_number ||
      !problem_faced ||
      !solution_required
    ) {
      return res.status(400).json({
        success: false,

        message: "All fields are required.",
      });
    }

    const html = contactTemplate({
      name,

      email,

      whatsapp_number,

      problem_faced,

      solution_required,
    });

    await sendEmail({
      to: process.env.GMAIL_RECEIVER_EMAIL,
      senderName: name,
      replyTo: email,
      subject: `Solution required for - ${solution_required}`,
      html,
    });

    return res.status(200).json({
      success: true,

      message: "Contact form submitted successfully.",
    });
  } catch (error) {
    console.error("Contact Form Error:", {
      message: error.message,
      code: error.code,
      response: error.response,
      command: error.command,
    });

    return res.status(500).json({
      success: false,
      message: "Failed to submit contact form.",
    });
  }
};
