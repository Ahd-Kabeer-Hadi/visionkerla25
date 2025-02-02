/*
  Warnings:

  - Added the required column `aadharCardUrl` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `driverLicenseUrl` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photourl` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rcUrl` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "aadharCardUrl" TEXT NOT NULL,
ADD COLUMN     "driverLicenseUrl" TEXT NOT NULL,
ADD COLUMN     "photourl" TEXT NOT NULL,
ADD COLUMN     "rcUrl" TEXT NOT NULL;
