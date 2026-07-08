// lib/prisma.ts
import path from "path";
import fs from "fs";
import { PrismaClient } from "@prisma/client";

const SOURCE_DB = path.join(process.cwd(), "prisma/dev.db");
const RUNTIME_DB = "/tmp/dev.db";

// Copy the bundled read-only db into /tmp (writable) once per cold start
if (!fs.existsSync(RUNTIME_DB)) {
  fs.copyFileSync(SOURCE_DB, RUNTIME_DB);
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${RUNTIME_DB}`,
    },
  },
});

export default prisma;