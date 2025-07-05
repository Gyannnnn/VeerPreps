"use server";
import { Metadata } from "next";
import AllPyqs from "../my_components/AllPyqs";

interface Allpyqs {
  pyqname: string;
  pyq_id: number;
}

export async function generateMetadata(): Promise<Metadata> {
  const title = "Download VSSUT Burla Previous Year Question Papers All Years";
  const description =
    "Get VSSUT Burla previous year question papers  for 1st, 2nd, 3rd, and Final Year. Access all PYQs and resources at iitkirba.xyz Your trusted source for VSSUT materials.";

  return {
    title,
    description,
    keywords: [
      "VSSUT previous year questions",
      "VSSUT Burla PYQs",
      "VSSUT question papers",
      "VSSUT first year question papers",
      "VSSUT 2nd year notes",
      "VSSUT 3rd year question papers",
      "VSSUT final year PYQs",
      "VSSUT study materials",
      "VSSUT notes PDF",
      "VSSUT branch-wise questions",
      "iitkirba",
      "VeerPreps",
      "Burla engineering notes",
      "Gyanaranjan Patra",
      "Gyanaranjan Patra LinkedIn",
      "VSSUT Burla study resources",
      "vssut semester wise questions",
      "VSSUT Burla old question papers"
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
          alt: "Download VSSUT Notes and PYQs from iitkirba",
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
