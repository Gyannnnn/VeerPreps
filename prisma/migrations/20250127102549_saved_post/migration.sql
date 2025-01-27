-- CreateTable
CREATE TABLE "savedpdfs" (
    "id" TEXT NOT NULL,
    "pdfid" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "notes" BOOLEAN NOT NULL,
    "pdfname" TEXT NOT NULL,

    CONSTRAINT "savedpdfs_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "savedpdfs" ADD CONSTRAINT "savedpdfs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
