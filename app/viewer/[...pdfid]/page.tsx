
import axios from "axios";
import PdfRenderer from "./pdfviewer";
import { auth } from "@/auth";



interface Params {
  params: { pdfid: string | string[] };
}

interface Pyq {
  pyq_id: number;
  subjectId: number;
  links: string;
  pyqtype: string;
  pyqname: string;
}

interface Notes {
  notes_id: number;
  subjectId: number;
  link: string;
  notesname: string;
}

export default async function Page({ params }: {params:{pdfid:string[]}}) {
  const session = await auth();
  

  const email = session?.user?.email as string;

  if (params?.pdfid.length == 2) {
    const notesid = params?.pdfid[1];

    try {
      const response = await axios.get<{ note: Notes }>(
        `https://api-zeta.vercel.app/api/notes/getone/${notesid}`
      );
      const data = response.data.note;

      return (
        <PdfRenderer
          email={email}
          name={data.notesname}
          id={data.notes_id}
          notes={true}
          links={data.link}
        />
      );
    } catch (error) {
      <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
        <h1>Not Found</h1>
      </div>;
    }
  } else {
    const pdfid =  params?.pdfid;

    try {
      const response = await axios.get<Pyq>(
        `https://api-zeta.vercel.app/api/pyq/id/${pdfid}`
      );

      const data = response.data;

      return (
        <PdfRenderer
          email={email}
          name={data.pyqname}
          id={data.pyq_id}
          notes={false}
          links={data.links}
        />
      );
    } catch (error) {
      <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
        <h1>Not Found</h1>
      </div>;
    }
  }
}
