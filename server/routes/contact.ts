import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { ContactFormData } from "@shared/api";

// Configure your SMTP transporter (replace with your credentials)
const transporter = nodemailer.createTransport({
  service: "gmail", // Or your SMTP provider
  auth: {
    user: process.env.EMAIL_USER, // Your email (e.g., ayatullahqamar@gmail.com)
    pass: process.env.EMAIL_PASS, // App password or SMTP password
  },
});

export const handleContactSubmit: RequestHandler = async (req, res) => {
  const { name, email, message }: ContactFormData = req.body;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "ayatullahqamar@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
};