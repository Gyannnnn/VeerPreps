import React from "react";
import Pdf from "../my_components/pdf";
import axios from "axios";

interface Notes {
  "notes_id": number;
  "subjectId":number;
  "link":string;
  "notesname":string;

}

export default async function page() {
  const response = await axios.get<{notes: Notes[]}>("https://iitkirba-api.vercel.app/api/notes/");
  const data = response.data.notes
 
  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center pt-14">
      <div className="w-[90vw]  min-h-screen  ">
        <h1 className="text-3xl py-6">All Notes</h1>
        <div className="flex gap-2 flex-wrap ">
        {
          data.map((note)=>(
            <Pdf links="" key={note.notes_id+1} notes={true} pyqid={note.notes_id} pyqname={note.notesname} />
          ))
        }
        </div>
        
      </div>
    </div>
  );
}
