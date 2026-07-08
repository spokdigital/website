import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: `file:${path.join(process.cwd(), "prisma/dev.db")}`,
    },
  },
});

export default prisma;