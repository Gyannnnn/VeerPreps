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
    const title = "VSSUT Burla Lecture Notes";
    const description =
      "Download high-quality handwritten and lecture notes for VSSUT Burla students. Access first-year common subjects and branch-specific notes curated by toppers, available for free on iitkirba.";
    const keywords = [
      "VSSUT notes",
      "VSSUT Burla notes",
      "VSSUT handwritten notes",
      "VSSUT lecture notes",
      "VSSUT subject wise notes",
      "first year notes VSSUT",
      "CSE notes VSSUT",
      "EEE notes VSSUT",
      "Civil notes VSSUT",
      "Mechanical notes VSSUT",
      "VSSUT Burla resources",
      "iitkirba notes",
      "VeerPreps",
      "Gyanranjan Patra",
      "Engineering notes Burla",
      "Download VSSUT notes PDF",
      "Study material VSSUT Burla",
      "Academic resources Burla",
      "Gyanranjan Patra LinkedIn"
    ];

    return {
      title,
      description,
      keywords,
      metadataBase: new URL("https://www.iitkirba.xyz"),
      alternates: {
        canonical: "https://www.iitkirba.xyz/notes",
      },
      openGraph: {
        title,
        description,
        url: "https://www.iitkirba.xyz/notes",
        siteName: "iitkirba - VeerPreps",
        type: "website",
        locale: "en_IN",
        images: [
          {
            url: "https://www.iitkirba.xyz/og/og_image.png",
            width: 1200,
            height: 630,
            alt: "Download VSSUT Notes - iitkirba",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        site: "@gyanranjanpatra",
        title,
        description,
        images: ["https://www.iitkirba.xyz/og/og_image.png"],
      },
      robots: {
        index: true,
        follow: true,
        nocache: false,
      },
      category: "education",
      creator: "Gyanranjan Patra",
      publisher: "iitkirba",
    };
  } catch (error) {
    return {
      title: "Download Notes | iitkirba",
      description:
        "Explore and download handwritten and lecture notes from iitkirba for VSSUT Burla students.",
    };
  }
}

export default async function Page() {
  return <Allnotes />;
}
