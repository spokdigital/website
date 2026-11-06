import { Resend } from "resend";
import { NextResponse } from "next/server";

const websitePattern = /^(https?:\/\/)?([\da-zA-Z-]+\.)+[a-zA-Z]{2,}(\/[^\s]*)?$/;

export async function POST(req: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, phone, website, slot, mode } = body;

    if (!name || !email || !phone || !website) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (typeof website !== "string" || !websitePattern.test(website.trim())) {
      return NextResponse.json({ error: "Invalid website" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Gulfcart <info@spok.digital>",
      to: ["mystylesouk@gmail.com"],
      subject: `New Call-Back Request: ${name}`,
      html: `
        <h2>New Call-Back Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${phone}</p>
        <p><strong>Preferred time:</strong> ${slot ?? "Not specified"}</p>
        <p><strong>Mode:</strong> ${mode ?? "call"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}