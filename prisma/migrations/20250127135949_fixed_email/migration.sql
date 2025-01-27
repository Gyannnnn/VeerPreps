/*
  Warnings:

  - You are about to drop the column `userId` on the `savedpdfs` table. All the data in the column will be lost.
  - Added the required column `pdfid` to the `savedpdfs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "savedpdfs" DROP CONSTRAINT "savedpdfs_userId_fkey";

-- AlterTable
ALTER TABLE "savedpdfs" DROP COLUMN "userId",
ADD COLUMN     "pdfid" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "savedpdfs" ADD CONSTRAINT "savedpdfs_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
