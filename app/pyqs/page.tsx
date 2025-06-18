"use server";
import { Metadata } from "next";
import AllPyqs from "../my_components/AllPyqs";

interface Allpyqs {
  pyqname: string;
  pyq_id: number;
}

export async function generateMetadata(): Promise<Metadata> {
  const title = " Download Vssut burla previous year Questions";
  const description =
    "Download Vsst burla previous year questions from iitkirba";

  return {
    title,
    description,
    keywords: [
      "Vssut pyqs",
      "Vssut burla",
      "Vssut Burla previous year questions",
      "Vssut",
      "Vssut burla pyqs",
      "vssut burla",
      "pyqs",      
      "vssut first year notes",
      "vssut burla 2nd year notes",
      "vssut burla 3rd year notes",
      "vssut burla final year notes",
      "iit kirba",
      "veerPreps",
      "burla",
      "Gyanranjan Patra",
      "gyanranjan patra",
      "gyanranjan patra linkedin",
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
}

export default async function Page() {
  return <AllPyqs/>
}
