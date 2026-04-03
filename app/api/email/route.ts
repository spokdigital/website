import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const REQUIRED_FIELDS = [
  "name",
  "phone",
  "email",
  "subject",
  "service",
  "enquiry",
  "message",
] as const;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate all required fields are present
    for (const field of REQUIRED_FIELDS) {
      if (!body[field]?.toString().trim()) {
        return NextResponse.json(
          { message: `Missing required field: ${field}` },
          { status: 400 },
        );
      }
    }

    const { name, phone, email, subject, service, enquiry, message } = body;

    const { error } = await resend.emails.send({
      from: "Contact Form <no-reply@tradingmeet.com>", // ← replace with your verified Resend domain
      to: [`${process.env.SEND_EMAIL_TO}`], // ← replace with your recipient
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#111">
          <h2 style="font-size:20px;margin-bottom:16px;border-bottom:2px solid #f0f0f0;padding-bottom:12px">
            New Contact Form Submission
          </h2>
          <table cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">
            ${[
              ["Name", name],
              [
                "Email",
                `<a href="mailto:${email}" style="color:#2563eb">${email}</a>`,
              ],
              ["Phone", phone],
              ["Subject", subject],
              ["Service", service],
              ["Enquiry", enquiry],
            ]
              .map(
                ([label, value]) => `
                <tr>
                  <td style="padding:8px 12px;background:#f9f9f9;font-weight:600;width:130px;font-size:13px;color:#555;border-bottom:1px solid #eee">${label}</td>
                  <td style="padding:8px 12px;font-size:13px;border-bottom:1px solid #eee">${value}</td>
                </tr>`,
              )
              .join("")}
          </table>
          <div style="margin-top:20px">
            <p style="font-weight:600;font-size:13px;color:#555;margin-bottom:6px">Message</p>
            <div style="background:#f9f9f9;border-radius:6px;padding:14px;font-size:13px;line-height:1.6;white-space:pre-wrap">${message}</div>
          </div>
          <p style="margin-top:24px;font-size:11px;color:#aaa">
            Sent via contact form · Reply directly to this email to reach ${name}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { message: "Failed to send email. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { message: "Internal server error." },
      { status: 500 },
    );
  }
}
