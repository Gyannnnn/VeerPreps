import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"




export default function Pdf({pyqname,links,pyqid}:{pyqname:string,links:string,pyqid:number}) {
 
  return (
    <Link href={`/viewer/${pyqid}`}>
    <Card className="flex flex-col w-40 bg-transparent border-none gap-2 items-center justify-center">
        <Image src={"/images/file.png"} width={100} height={100} alt="icon"/>
        <h1>{pyqname}</h1>
    </Card>
    
    </Link>
    
  )
}
