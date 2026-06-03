"use server";

import nodemailer from "nodemailer";
import { Resend } from "resend";

export async function submitContactForm(formData: FormData) {
  const resendKey = process.env.RESEND_API_KEY;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const recipient = process.env.CONTACT_RECIPIENT_EMAIL || "spallaltd@gmail.com";

  const firstName = formData.get("firstName")?.toString().trim() ?? "";
  const lastName = formData.get("lastName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!firstName || !lastName || !email || !message) {
    return { error: "All fields except phone are required." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  const emailSubject = `New Contact Request from ${firstName} ${lastName}`;
  const emailText = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nMessage: ${message}`;
  const emailHtml = `
    <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
      <h2 style="color: #16a34a;">New Contact Request</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    </div>
  `;

  try {
    if (resendKey) {
      const resend = new Resend(resendKey);
      await resend.emails.send({
        from: `Spalla Ltd <hello@spallaltd.com>`,
        to: recipient,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
        replyTo: email,
      });
    } else if (user && pass) {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${user}>`,
        replyTo: email,
        to: recipient,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      });
    } else {
      console.error("CONTACT_FORM_ERROR: No email provider configured.");
      return {
        error:
          "Email sending is not configured. Set RESEND_API_KEY or valid Gmail SMTP credentials in .env.local.",
      };
    }

    return { success: "Message sent successfully!" };
  } catch (error) {
    console.error("Nodemailer/Resend error:", error);
    return {
      error:
        "Failed to send the message. Check your email provider settings and server logs.",
    };
  }
}
