import Contents from "@/app/my_components/pages/Contents";
import Subjects from "@/app/my_components/pages/Subjectspage";

import Yearpage from "@/app/my_components/pages/Yearpage";

interface PageProps {
  params: {
    ids: string[];
  };
}

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { ids: string[] };
}): Promise<Metadata> {
  const subjectId = params.ids[4];
  if (!subjectId) {
    return {
      title: "IIT KIRBA | VEERPREPS",
      description: "The requested subject does not exist.",
    };
  }

  try {
    const res = await fetch(`https://api-zeta.vercel.app/api/pyq/${subjectId}`, {
      cache: "no-store",
    });
    const data = await res.json();
    const pyq = data.pyq?.[0];

    if (!pyq) {
      return {
        title: "PYQs Not Found | iitkirba",
        description: "No previous year question papers found for this subject.",
      };
    }

    const subjectName = pyq.subject.subjectname;
    const branchName = pyq.subject.branchname === "common" ? "First Year" : pyq.subject.branchname;

    const title = `Download Previous Year Questions for ${subjectName} - ${branchName} of Vssut Burla | iitkirba`;
    const description = `Free access to previous year question papers for ${subjectName} (${branchName}) at VSSUT Burla. Includes mid-semester, end-semester, back, and supplementary exams.`;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `https://www.iitkirba.xyz/content/${params.ids.join("/")}`,
        siteName: "iitkirba",
        type: "website",
        images: [
          {
            url: "https://www.iitkirba.xyz/og/og_image.png",
            width: 1200,
            height: 630,
            alt: "iitkirba - VSSUT Question Papers & Notes",
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
      title: "Error loading metadata | iitkirba",
      description: "Unable to fetch subject data.",
    };
  }
}


export default function Page({ params }: PageProps) {
  const branchId = params.ids[0];
  const parsedBranchId = parseInt(branchId, 10);
  const ids = params.ids;

  switch (ids.length) {
    case 1:
      return <Yearpage branchId={parsedBranchId} />;
    case 3:
      return <Subjects ids={ids} />;
    case 5:
      return <Contents ids={ids} />;

    default:
      return <div>Page not found</div>;
  }
}
