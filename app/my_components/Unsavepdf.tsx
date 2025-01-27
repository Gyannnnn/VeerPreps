"use client"
import { unsavePdf } from "@/actions/unsavepdf";
import { MdDelete } from "react-icons/md";


export default function Unsavepdf({id,email}:{id:string,email:string}) {
    const parsedid = parseInt(id,10);
  return (
    <MdDelete className='absolute top-0 right-0 text-2xl text-red-500 hover:text-red-400 cursor-pointer' onClick={()=>unsavePdf(parsedid,email)}/>
  )
}
