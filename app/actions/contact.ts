"use server";

import { Resend } from "resend";
import nodemailer from "nodemailer";
import { getEnv } from "../lib/env";

export async function submitContactForm(formData: FormData) {
  const {
    RESEND_API_KEY,
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_FROM,
    CONTACT_RECIPIENT_EMAIL,
    NODE_ENV,
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    USE_RESEND,
  } = getEnv();

  const emailFrom = EMAIL_FROM || "Spalla Ltd <hello@spallaltd.com>";
  const recipient = CONTACT_RECIPIENT_EMAIL || "spallaltd@gmail.com";

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
    const useResend = Boolean(RESEND_API_KEY) && (NODE_ENV === "production" || USE_RESEND === "true");

    if (useResend) {
      const resend = new Resend(RESEND_API_KEY!);
      const sendResult = await resend.emails.send({
        from: emailFrom,
        to: recipient,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
        replyTo: email,
      });

      console.log("CONTACT_EMAIL_RESULT", {
        provider: "resend",
        recipient,
        messageId: sendResult.data?.id,
        sendData: sendResult.data,
        headers: sendResult.headers,
      });

      if (!sendResult?.data?.id) {
        console.error("CONTACT_EMAIL_NO_ID", sendResult);
        return {
          error:
            "Email service did not return a message ID. Check server logs for Resend response.",
        };
      }

      return { success: "Message sent successfully!" };
    }

    if (EMAIL_USER && EMAIL_PASS) {
      const transporter = nodemailer.createTransport(
        SMTP_HOST
          ? {
              host: SMTP_HOST,
              port: Number(SMTP_PORT) || 587,
              secure: SMTP_SECURE === "true",
              auth: { user: EMAIL_USER, pass: EMAIL_PASS },
            }
          : {
              service: "gmail",
              auth: { user: EMAIL_USER, pass: EMAIL_PASS },
            }
      );

      await transporter.sendMail({
        from: emailFrom,
        replyTo: email,
        to: recipient,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
      });

      console.log("CONTACT_EMAIL_RESULT", { provider: "smtp", recipient });
      return { success: "Message sent successfully!" };
    }

    // Development fallback: log to server console and return success message so UI doesn't break
    console.log("CONTACT_EMAIL_DEV_FALLBACK", { emailFrom, recipient, emailText, emailHtml });
    return {
      success:
        NODE_ENV === "production"
          ? "Email provider not configured. Message logged on server."
          : "Development: message logged to server console.",
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      error:
        "Failed to send the message. Check your email provider settings and server logs.",
    };
  }
}
