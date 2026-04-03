import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const contact = formData.get("contact") as string;
    const email = formData.get("email") as string;
    const country = formData.get("country") as string;
    const message = formData.get("message") as string;
    const file = formData.get("file") as File | null;

    // Basic server-side validation
    if (!name || !contact || !email || !country || !file) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 },
      );
    }

    // Convert file to buffer for attachment
    const fileBuffer = await file.arrayBuffer();
    const fileBytes = Buffer.from(fileBuffer);

    const { data, error } = await resend.emails.send({
      from: "CV Submissions <no-reply@tradingmeet.com>", // ← replace with your verified Resend domain
      to: [`${process.env.SEND_EMAIL_TO}`], // ← replace with recipient
      replyTo: email,
      subject: `New CV Submission from ${name}`,
      html: `
        <h2>New CV Application</h2>
        <table cellpadding="8" style="border-collapse:collapse;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
          <tr><td><strong>Contact</strong></td><td>${contact}</td></tr>
          <tr><td><strong>Country</strong></td><td>${country}</td></tr>
          ${message ? `<tr><td><strong>Message</strong></td><td>${message}</td></tr>` : ""}
        </table>
        <p>CV attached.</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: fileBytes,
        },
      ],
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id }, { status: 200 });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 },
    );
  }
}
