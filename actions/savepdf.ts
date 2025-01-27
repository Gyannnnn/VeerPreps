"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const savepdf = async (
    id: number,
    email: string,
    notes: boolean,
    name: string
  ) => {
    console.log("Incoming parameters:", { id, email, notes, name });
  
    try {
      const isexist = await prisma.savedpdfs.findMany({
        where: {
          pdfid: id,
          useremail: email,
        },
      });
      if (isexist.length > 0) {
        throw new Error("PDF already Saved !");
      }
      const newSavedPdf = await prisma.savedpdfs.create({
        data: {
          useremail: email,
          pdfid: id,
          notes,
          pdfname: name,
        },
      });
      if (!newSavedPdf) {
        throw new Error("Error saving PDF");
      }
      return newSavedPdf.pdfname;
    } catch (error) {
      const err = error as Error;
      console.error("Error saving PDF:", err.message);
      throw err;  // Rethrow the error to be caught by the handler
    }
  };
  