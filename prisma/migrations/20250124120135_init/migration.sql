/*
  Warnings:

  - You are about to drop the column `alternativePhoneNumber` on the `Driver` table. All the data in the column will be lost.
  - Added the required column `emergencyContact` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergencyContactName` to the `Driver` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "alternativePhoneNumber",
ADD COLUMN     "emergencyContact" TEXT NOT NULL,
ADD COLUMN     "emergencyContactName" TEXT NOT NULL;
