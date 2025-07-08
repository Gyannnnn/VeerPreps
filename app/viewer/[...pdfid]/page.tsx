import axios from "axios";
import PdfRenderer from "./pdfviewer";
import { auth } from "@/auth";
import { Metadata } from "next";

interface Params {
  params: { pdfid: string[] };
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

// 🧠 SEO Metadata generation
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  // Construct the canonical URL for the viewer page
  const baseUrl = "https://www.iitkirba.xyz";
  const pageUrl = `${baseUrl}/viewer/${params.pdfid.join("/")}`;
  // Default thumbnail for all PDFs
  const defaultThumbnailUrl = `${baseUrl}/images/pdfprv.png`;
  if (params.pdfid.length === 2) {
    const notesid = params.pdfid[1];
    try {
      const res = await axios.get<{ note: any }>(
        `https://api-zeta.vercel.app/api/notes/getone/${notesid}`
      );
      const data = res.data.note;
      // Use data.thumbnail if available, else fallback
      const thumbnailUrl = data.thumbnail ? data.thumbnail : defaultThumbnailUrl;
      return {
        title: `${data.notesname} Vssut Burla`,
        description: `View and download notes: ${data.notesname}. Curated for VSSUT students.`,
        openGraph: {
          title: `${data.notesname} Vssut Burla`,
          description: `Download notes for ${data.notesname}.`,
          images: [thumbnailUrl],
          url: pageUrl,
        },
      };
    } catch {
      return { title: "Notes Not Found | VeerPreps" };
    }
  } else {
    const pyqid = params.pdfid;
    try {
      const res = await axios.get<any>(
        `https://api-zeta.vercel.app/api/pyq/id/${pyqid}`
      );
      const data = res.data;
      // Use data.thumbnail if available, else fallback
      const thumbnailUrl = data.thumbnail ? data.thumbnail : defaultThumbnailUrl;
      return {
        title: `${data.pyqname} Vssut Burla`,
        description: `Download Previous Year Question: ${data.pyqname}. Useful for VSSUT exam prep.`,
        openGraph: {
          title: `${data.pyqname} Vssut Burla`,
          description: `Download question paper: ${data.pyqname}.`,
          images: [thumbnailUrl],
          url: pageUrl,
        },
      };
    } catch {
      return { title: "PYQ Not Found | VeerPreps" };
    }
  }
}

export default async function Page({ params }: Params) {
  const session = await auth();
  const email = session?.user?.email as string;

  if (params?.pdfid.length === 2) {
    const notesid = params.pdfid[1];

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
      return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
          <h1>Not Found</h1>
        </div>
      );
    }
  } else {
    const pdfid = params.pdfid;

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
      return (
        <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
          <h1>Not Found</h1>
        </div>
      );
    }
  }
}
