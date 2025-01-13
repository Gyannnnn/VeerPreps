import axios from "axios";
import Pdf from "../pdf";

interface Subject {
  subject_id: number;
  yearId: number;
  subjectname: string;
  branchname: string;
  iscommon: boolean;
  branchid: number;
}

interface Contents {
  links: string;
  subjectId: number;
  pyqtype: string;
  pyq_id: number;
  pyqname: string;
  subject: Subject;
}

interface PageProps {
  ids: string[];
}

export default async function Contents({ ids }: PageProps) {

  const subjectid = ids.length > 4 ? ids[4] : null;
  if (!subjectid) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
        <div className="min-h-screen w-[90vw] bg-red-900">
          <h1>Invalid subject ID</h1>
        </div>
      </div>
    );
  }

  try {
  
    const response = await axios.get<{ pyq: Contents[] }>(`https://iitkirba-api.vercel.app/api/pyq/${subjectid}`);
    const pyqs = response.data.pyq;

  
    if (!pyqs || pyqs.length === 0) {
      return (
        <div className="h-screen w-screen flex items-center justify-center text-4xl">
          Nothing Found
        </div>
      );
    }

    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
        <div className="min-h-screen w-[90vw] pt-10">
          <h1 className="text-2xl">Previous Year Questions</h1>
          <div>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {pyqs.map((pyq) => (
                <div >
                 
                  <Pdf pyqid={pyq.pyq_id} pyqname={pyq.pyqname} links={pyq.links}/>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    );
  } catch (error) {
       return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
        <div className=" w-[90vw] bg-secondary dark:bg-zinc-950 text-4xl flex items-center justify-center">
          <h1>Nothing found</h1>
        </div>
      </div>
    );
  }
}
