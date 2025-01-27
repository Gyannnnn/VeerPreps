-- DropForeignKey
ALTER TABLE "savedpdfs" DROP CONSTRAINT "savedpdfs_useremail_fkey";

-- AddForeignKey
ALTER TABLE "savedpdfs" ADD CONSTRAINT "savedpdfs_useremail_fkey" FOREIGN KEY ("useremail") REFERENCES "User"("email") ON DELETE CASCADE ON UPDATE CASCADE;
