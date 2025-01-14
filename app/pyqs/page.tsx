import axios from "axios"
import Pdf from "../my_components/pdf";


interface Allpyqs{
  pyqname:string;
  pyq_id:number
}

export default async function page() {
try {
  const response = await axios.get<{allpyqs:Allpyqs[]}>("https://iitkirba-api.vercel.app/api/pyq/")
  const pyqs = response.data.allpyqs
  console.log(pyqs)
  return(
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-secondary dark:bg-zinc-950 mt-14">
      <div className="">
        <h1 className="text-xl py-4"> All Previous Year Questions</h1>
        <div className="flex flex-wrap gap-2">{
          pyqs.map((pyq)=>(
            <Pdf pyqid={pyq.pyq_id} pyqname={pyq.pyqname} links={""}/>
          ))         
          
          }</div>
      </div>

    </div>
  )

} catch (error) {
  console.log(error)
  
}




 
}
