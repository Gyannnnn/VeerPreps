import axios from "axios";
import Pdf from "../pdf";
import Image from "next/image";
import Link from "next/link";
import NothingFound from "../NothingFound";
import { Button } from "@/components/ui/button";
import { FaYoutube } from "react-icons/fa";

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

interface Notes {
  notes_id: number;
  subjectId: number;
  link: string;
  notesname: string;
}

interface VideoLinks {
  subjectId: number;
  link: string;
  videoname: string;
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
    const [notesResponse, pyqResponse, videolinksResponse] = await Promise.all([
      axios
        .get<{ notes: Notes[] }>(
          `https://iitkirba-api.vercel.app/api/notes/${subjectid}`
        )
        .catch(() => ({ data: { notes: [] } })),
      axios
        .get<{ pyq: Contents[] }>(
          `https://iitkirba-api.vercel.app/api/pyq/${subjectid}`
        )
        .catch(() => ({ data: { pyq: [] } })),
      axios
        .get<{ videolinks: VideoLinks[] }>(
          `https://iitkirba-api.vercel.app/api/videos/${subjectid}`
        )
        .catch(() => ({ data: { videolinks: [] } })),
    ]);

    const notes: Notes[] = notesResponse?.data?.notes || [];
    const pyqs: Contents[] = pyqResponse?.data?.pyq || [];
    const videolinks: VideoLinks[] = videolinksResponse?.data?.videolinks || [];

    if (notes.length === 0 && pyqs.length === 0 && videolinks.length === 0) {
      return <NothingFound />;
    }

    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
        <div className="min-h-screen sm:w-[90vw] w-screen flex flex-col items-center pt-10 px-4">
          {/* PYQs Section */}
          <div className="w-full">
            <div className="flex max-sm:flex-col items-start max-sm:w-full justify-between max-sm:gap-2">
              <h1 className="sm:text-3xl text-2xl">Previous Year Questions</h1>
              <Link target="_blank" href="https://forms.gle/EYBP1xcCxYqsdeVK6">
                <Button variant="outline">Upload your Pyqs</Button>
              </Link>
            </div>
            <div className="flex max-sm:justify-between justify-start flex-wrap gap-2 pt-4 ">
              {pyqs.length > 0 ? (
                pyqs.map((pyq) => (
                  <div key={pyq.pyq_id}>
                    <Pdf
                      notes={false}
                      pyqid={pyq.pyq_id}
                      pyqname={pyq.pyqname}
                      links={pyq.links}
                    />
                  </div>
                ))
              ) : (
                <h2 className="text-xl">No PYQs found</h2>
              )}
            </div>
          </div>

          {/* Notes Section */}
          <div className="pt-10 w-full">
            <div className="flex flex-wrap items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
              <h1 className="text-2xl sm:text-3xl">Subject Notes</h1>
              <Link target="_blank" href="https://forms.gle/Ro31WGz1TKpp3ybX9">
                <Button variant="outline">Upload your Notes</Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2 pt-4 items-center max-sm:justify-between justify-start">
              {notes.length > 0 ? (
                notes.map((note) => (
                  <div key={note.notes_id}>
                    <Pdf
                      notes={true}
                      pyqid={note.notes_id}
                      pyqname={note.notesname}
                      links={note.link}
                    />
                  </div>
                ))
              ) : (
                <div className="w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pb-10">
                  <div className="w-full h-full flex flex-col  items-center justify-center">
                    <Link
                      className="text-xl flex flex-col items-center justify-center"
                      href={"https://forms.gle/Ro31WGz1TKpp3ybX9"}
                      target="_blank"
                    >
                      <Image
                        src="/loader/alert.gif"
                        height={30}
                        width={50}
                        alt="alert"
                      />
                      <h1 className="text-2xl">No Notes Found!</h1>
                      <h1 className="text-sm text-blue-500">Send Your Notes</h1>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* YouTube Videos Section */}
          <div className="pt-5 w-full pb-10">
            <h1 className="text-2xl sm:text-3xl pb-5 flex items-end gap-2">YouTube <FaYoutube className="text-4xl"/> Videos </h1>
            <div className="flex flex-wrap   items-center max-sm:justify-between justify-start ">
              {videolinks.length > 0 ? (
                videolinks.map((videolink) => (
                  <div key={videolink.subjectId} className="flex items-center justify-center">
                    <Link href={videolink.link} className="flex flex-col items-center  justify-start h-40 w-40 " target="_blank">
                      <Image
                        src={"/images/youtube.png"}
                        alt="youtube"
                        width={80}
                        height={80}
                        priority={true}
                      />
                      <h1 className="text-center">{videolink.videoname}</h1>
                    </Link>
                  </div>
                ))
              ) : (
                <h2 className="text-xl">Coming Soon for this Subject</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error loading data:", error);
    return <NothingFound />;
  }
}
