//@ts-nocheck
import axios from "axios";
import PdfRenderer from "./pdfviewer";

interface PageProps {
  params: [
    pdfid: string
];
}

interface Pyq {
  pyq_id: number;
  subjectId: number;
  links: string ;
  pyqtype: string;
  pyqname: string;
}

export default async function Page({ params }: PageProps) {
 
  if(params.pdfid.length==2){
   
    const notesid = params.pdfid[1];
   
    try {
      const response = await axios.get<{ pyq: Pyq }>(
        `https://iitkirba-api.vercel.app/api/notes/getone/${notesid}`
      );
      const data = response.data.note;
  
      return (
        
          <PdfRenderer links={data.link}/>
       
      );
    } catch (error) {
      <div>
        <h1>Not Found</h1>
      </div>;
    }

  }else{
    const pdfid = params.pdfid;
  try {
    const response = await axios.get<{ pyq: Pyq }>(
      `https://iitkirba-api.vercel.app/api/pyq/id/${pdfid}`
    );
    const data = response.data;
    console.log(data.links);
    return (
      
        <PdfRenderer links={data.links}/>
     
    );
  } catch (error) {
    <div>
      <h1>Not Found</h1>
    </div>;
  }

  }
  
}
