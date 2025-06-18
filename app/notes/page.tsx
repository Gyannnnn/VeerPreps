import { Metadata } from "next";
import Allnotes from "../my_components/Allnotes";
import axios from "axios";

interface Note {
  notes_id: number;
  subjectId: number;
  link: string;
  notesname: string;
}

interface NotesData {
  notes: Note[];
}

export async function generateMetadata(): Promise<Metadata> {
  try {
    const res = await axios.get<NotesData>(
      "https://api-zeta.vercel.app/api/notes/"
    );
    const data = res.data.notes;

    const titles = data
      .slice(0, 5)
      .map((note) => note.notesname)
      .join(", ");

    const title = `Download Notes: ${titles}... | iitkirba`;
    const description =
      "Download handwritten and lecture notes of Vssut burla from iitkirba — including first-year and branch-wise notes for VSSUT Burla.";

    return {
      title,
      description,
      keywords: [
        "Vssut notes",
        "Vssut burla",
        "Vssut",
        "Vssut burla lecture notes",
        "vssut burla notes",
        "notes",
        "lecture notes",
        "subject notes",
        "vssut burla subject notes",
        "vssut first year notes",
        "vssut burla 2nd year notes",
        "vssut burla 3rd year notes",
        "vssut burla final year notes",
        "iit kirba",
        "veerPreps",
        "burla",
        "Gyanranjan Patra",
        "gyanranjan patra",
        "gyanranjan patra linkedin"
      ],
      openGraph: {
        title,
        description,
        url: "https://www.iitkirba.xyz/notes",
        siteName: "iitkirba",
        type: "website",
        images: [
          {
            url: "https://www.iitkirba.xyz/og/og_image.png",
            width: 1200,
            height: 630,
            alt: "iitkirba Notes Page",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://www.iitkirba.xyz/og/og_image.png"],
      },
    };
  } catch (error) {
    return {
      title: "Download Notes | iitkirba",
      description:
        "Explore and download handwritten and lecture notes from iitkirba.",
    };
  }
}

export default async function Page() {
  return <Allnotes />;
}
