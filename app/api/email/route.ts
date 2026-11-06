import { Resend } from "resend";
import { NextResponse } from "next/server";

const escapeHtml = (value: unknown) =>
  String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, phone, website, slot, mode } = body;

    if (!name || !email || !phone || !website) {
      console.warn("Email 400 missing fields:", JSON.stringify(body));
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Loose check: website is informational only, so don't block ad leads on strict URL format
    if (typeof website !== "string" || website.trim().length < 3) {
      console.warn("Email 400 invalid website:", JSON.stringify(body));
      return NextResponse.json({ error: "Invalid website" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Gulfcart <info@spok.digital>",
      to: ["frontendmakaidigitals@gmail.com"],
      subject: `New Call-Back Request: ${String(name).replace(/[\r\n]/g, " ")}`,
      html: `
        <h2>New Call-Back Request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Website:</strong> ${escapeHtml(website)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>WhatsApp:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Preferred time:</strong> ${escapeHtml(slot ?? "Not specified")}</p>
        <p><strong>Mode:</strong> ${escapeHtml(mode ?? "call")}</p>
      `,
    });

    if (error) {
      console.error(
        "Resend error:",
        error,
        "LEAD:",
        JSON.stringify({ name, email, phone, website, slot, mode })
      );
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    console.log("Lead email sent, id:", data?.id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email route exception:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}