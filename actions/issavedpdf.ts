"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const isSaved = async(pdfid:number,email:string)=>{
    const pdf = await prisma.savedpdfs.findFirst({
        where:{
            pdfid:pdfid,
            useremail:email
        }
    })
    if(pdf){
        return true
    }
    return false
}