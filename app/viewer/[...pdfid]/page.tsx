import axios from "axios";
import PdfRenderer from "./pdfviewer";

interface PageProps {
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

export default async function Page({ params }: PageProps) {
  console.log(params);
  console.log(typeof params.pdfid);

  if (params.pdfid.length == 2) {
    console.log(params.pdfid);
    const notesid = params.pdfid[1];

    try {
      const response = await axios.get<{ note: Notes }>(
        `https://iitkirba-api.vercel.app/api/notes/getone/${notesid}`
      );
      const data = response.data.note;
      console.log(data);

      return <PdfRenderer links={data.link} />;
    } catch (error) {
      <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
        <h1>Not Found</h1>
      </div>;
    }
  } else {
    const pdfid = params.pdfid;
    console.log(pdfid);
    console.log("llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
    try {
      const response = await axios.get<Pyq>(
        `https://iitkirba-api.vercel.app/api/pyq/id/${pdfid}`
      );
      console.log(response.data);
      const data = response.data;
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
      console.log(data.links);
      return <PdfRenderer links={data.links} />;
    } catch (error) {
      <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
        <h1>Not Found</h1>
      </div>;
    }
  }
}
