import { PrismaClient, Prisma } from "@/generated/logs";

export const prismaLogs = new PrismaClient();
export { Prisma };
