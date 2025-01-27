/*
  Warnings:

  - You are about to drop the column `pdfid` on the `savedpdfs` table. All the data in the column will be lost.
  - Added the required column `useremail` to the `savedpdfs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "savedpdfs" DROP COLUMN "pdfid",
ADD COLUMN     "useremail" TEXT NOT NULL;
