-- CreateEnum
CREATE TYPE "BarcodeAction" AS ENUM ('GENERATED', 'PRINTED');

-- CreateTable
CREATE TABLE "BarcodeLog" (
    "id" TEXT NOT NULL,
    "action" "BarcodeAction" NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BarcodeLog_pkey" PRIMARY KEY ("id")
);
