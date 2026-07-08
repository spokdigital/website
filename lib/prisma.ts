// lib/prisma.ts
import path from "path";
import { PrismaClient } from "@/app/generated/prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${path.join(process.cwd(), "prisma/dev.db")}`,
    },
  },
});

export default prisma;