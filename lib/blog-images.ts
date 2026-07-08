import path from "path";
import fs from "fs/promises";
import { randomUUID } from "crypto";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "blog");

export async function saveImage(file: File): Promise<string> {
  await fs.mkdir(UPLOAD_DIR, { recursive: true });

  const ext = file.name.split(".").pop() ?? "jpg";
  const filename = `${randomUUID()}.${ext}`;
  const filepath = path.join(UPLOAD_DIR, filename);

  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(filepath, buffer);

  // Return the public URL path
  return `/uploads/blog/${filename}`;
}

export async function deleteImage(publicPath: string) {
  try {
    const abs = path.join(process.cwd(), "public", publicPath);
    await fs.unlink(abs);
  } catch {
    // File may not exist — ignore
  }
}