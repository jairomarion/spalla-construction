"use server";

import { Resend } from "resend";

export async function submitContactForm(formData: FormData) {
  const resendKey = process.env.RESEND_API_KEY;
  const emailFrom = process.env.EMAIL_FROM || "Spalla Ltd <hello@spallaltd.com>";
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
    if (!resendKey) {
      console.error("CONTACT_FORM_ERROR: RESEND_API_KEY is missing.");
      return {
        error:
          "Email sending is not configured. Set RESEND_API_KEY in environment variables.",
      };
    }

    const resend = new Resend(resendKey);
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
  } catch (error) {
    console.error("Resend error:", error);
    return {
      error:
        "Failed to send the message. Check your email provider settings and server logs.",
    };
  }
}
