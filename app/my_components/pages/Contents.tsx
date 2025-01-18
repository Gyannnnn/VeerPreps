import axios from "axios";
import Pdf from "../pdf";

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
        <div className="h-screen w-screen flex items-center justify-center text-4xl">
          Nothing Found
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
            <div className="flex flex-wrap gap-2 pt-4">
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
                <h1>No notes found</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-secondary dark:bg-zinc-950 pt-14">
        <div className="w-[90vw] text-4xl flex items-center justify-center">
          <h1>Error fetching data</h1>
        </div>
      </div>
    );
  }
}
