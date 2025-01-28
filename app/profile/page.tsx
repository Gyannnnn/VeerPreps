import { getSavedPdfs } from "@/actions/getsavedpdfs";
import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Pdf from "../my_components/pdf";

export default async function Page() {
  const session = await auth();
  const user = session?.user;

  if (!user) {
    return (
      <div className="h-screen w-screen flex flex-col gap-2 items-center justify-center">
        <h1 className="text-xl">Sign in to view your profile</h1>
        <Link className="flex gap-2 items-center" href="/sign-in">
          <Button variant="outline">Sign in</Button>
        </Link>
      </div>
    );
  }

  try {
    const savedpdfs = await getSavedPdfs(user.email as string);

    return (
      <div className="min-h-screen w-screen dark:bg-zinc-950 bg-secondary pt-14 flex items-center justify-center">
        <div className="min-h-screen w-[90vw] dark:bg-zinc-950 bg-secondary">
          <h1 className="text-3xl pt-6">Profile</h1>
          <p>{user.email}</p>
          <h1 className="text-3xl">Your Saved PDFs</h1>

          <div className="w-full min-h-screen flex flex-wrap items-start sm:justify-start justify-between gap-2 mt-5">
            {savedpdfs.length > 0 ? (
              savedpdfs.map((savedpdf) => (
                <div className="relative" key={savedpdf.id}>
                  <Pdf
                    pyqname={savedpdf.pdfname}
                    notes={savedpdf.notes}
                    pyqid={savedpdf.pdfid}
                    links=""
                  />
                </div>
              ))
            ) : (
              <div className="w-full flex flex-col items-center justify-center">
                <p className="text-xl text-gray-500">No saved PDFs found.</p>
                <Link href="/save-pdf">
                  <Button variant="outline">Save Your First PDF</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error(error);
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-start">
        <div className="w-[90vw] pt-20">
          <h1 className="text-3xl">{user.email}</h1>
          <h1 className="text-sm pt-4">Nothing found! Try saving a PDF.</h1>
        </div>
      </div>
    );
  }
}
