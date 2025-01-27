"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const unsavePdf = async(id:number,email:string)=>{
    try {
        const result = await prisma.savedpdfs.deleteMany({
            where:{
                pdfid:id,
                useremail:email
            }
        })
        if(result.count === 0){
            throw new Error("PDF not found");
        }
        return result;
    } catch (error) {
        const err = error as Error;
        throw new Error(err.message);
        
    }
}