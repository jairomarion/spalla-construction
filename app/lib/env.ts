export function getEnv() {
  return {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    EMAIL_FROM: process.env.EMAIL_FROM,
    CONTACT_RECIPIENT_EMAIL: process.env.CONTACT_RECIPIENT_EMAIL,
    NODE_ENV: process.env.NODE_ENV || "development",
    USE_RESEND: process.env.USE_RESEND,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT,
    SMTP_SECURE: process.env.SMTP_SECURE,
  };
}

export function assertRequiredInProduction() {
  const { NODE_ENV, RESEND_API_KEY, EMAIL_USER, EMAIL_PASS } = getEnv();
  if (NODE_ENV === "production") {
    if (!RESEND_API_KEY && !(EMAIL_USER && EMAIL_PASS)) {
      throw new Error(
        "Missing email provider configuration. Set RESEND_API_KEY or EMAIL_USER and EMAIL_PASS in production environment variables."
      );
    }
  }
}
