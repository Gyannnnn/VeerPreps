"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getSavedPdfs = async(email:string)=>{
    if(!email){
        throw new Error("Email is required");
    }
    try {
        const savedpdfs = await prisma.savedpdfs.findMany({
            where:{
                useremail:email
            }
        })
        return savedpdfs;
        
    } catch (error) {
        const err = error as Error;
        console.error("Error fetching saved PDFs:", err.message);
        throw err.message;  // Rethrow the error to be caught by the handler
        
    }
}