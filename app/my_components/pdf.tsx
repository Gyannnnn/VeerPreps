import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"




export default function Pdf({pyqname,links,pyqid}:{pyqname:string,links:string,pyqid:number}) {
 
  return (
    <Link className="flex" href={`/viewer/${pyqid}`}>
    <Card className="flex flex-col py-2  w-36 bg-transparent dark:bg-secondary border-none gap-2 items-center justify-center">
        <Image priority src={"/images/file.png"} width={100} height={100} alt="icon"/>
        <h1 className="text-center text-sm">{pyqname}</h1>
    </Card>
    
    </Link>
    
  )
}
