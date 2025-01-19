import axios from "axios";
import Pdf from "../pdf";
import Image from "next/image";
import Link from "next/link";
import NothingFound from "../NothingFound";

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
    const [notesResponse, pyqResponse] = await Promise.all([
      axios
        .get<{ notes: Notes[] }>(
          `https://iitkirba-api.vercel.app/api/notes/${subjectid}`
        )
        .catch(() => ({ data: { notes: [] } })),
      axios.get<{ pyq: Contents[] }>(
        `https://iitkirba-api.vercel.app/api/pyq/${subjectid}`
      ),
    ]);

    const notes = notesResponse.data.notes;
    const pyqs = pyqResponse.data.pyq;

    if (!pyqs || pyqs.length === 0) {
      return (
        <div className="h-screen w-screen flex items-center justify-center text-2xl">
          No Contents found
        </div>
      );
    }

    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
        <div className="min-h-screen w-[90vw] pt-10">
          <div>
            <h1 className="text-2xl">Previous Year Questions</h1>
            <div className="flex flex-wrap gap-2 pt-4">
              {pyqs.map((pyq) => (
                <div key={pyq.pyq_id}>
                  <Pdf
                    notes={false}
                    pyqid={pyq.pyq_id}
                    pyqname={pyq.pyqname}
                    links={pyq.links}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="pt-10">
            <h1 className="text-3xl">Subject Notes</h1>
            <div className="flex flex-wrap gap-2 pt-4 items-center justify-center">
              {notes.length > 0 ? (
                notes.map((note: Notes) => (
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
                <div className="w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
                  <div className="w-screen h-full text-3xl flex flex-col  items-center justify-center">
                    <Link
                      className="text-xl text-blue-600  flex flex-col items-center justify-center "
                      href={"https://forms.gle/RZQEFb9Y4a9yQnYNA"}
                    >
                      {" "}
                      <Image
                        src="/loader/alert.gif"
                        height={30}
                        width={50}
                        alt="alert"
                      ></Image>
                      <h1> Send Your Notes</h1>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <NothingFound />;
  }
}
