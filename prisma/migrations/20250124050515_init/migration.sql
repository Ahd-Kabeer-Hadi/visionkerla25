-- CreateEnum
CREATE TYPE "DriverStatus" AS ENUM ('REVIEWING', 'ACCEPTED', 'REJECTED');

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "alternativePhoneNumber" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "panchayat" TEXT NOT NULL,
    "aadhaarCardNumber" TEXT NOT NULL,
    "driversLicenseNumber" TEXT NOT NULL,
    "rcNumber" TEXT NOT NULL,
    "status" "DriverStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);
