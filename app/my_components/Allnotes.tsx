"use client";

import { CiSearch } from "react-icons/ci";
import Pdf from "../my_components/pdf";
import axios from "axios";
import SomethingWentWrong from "../my_components/SomethingWentWrong";
import { useState, useEffect } from "react";


interface Notes {
  notes_id: number;
  subjectId: number;
  link: string;
  notesname: string;
}

export default function Allnotes() {
  const [notes, setNotes] = useState<Notes[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get<{ notes: Notes[] }>(
          "https://iitkirba-api.vercel.app/api/notes/"
        );
        setNotes(response.data.notes);
      } catch (err) {
        setError(true);
      }
    };

    fetchNotes();
  }, []);

  const filteredNotes = notes.filter((note) =>
    note.notesname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) {
    return (
      <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center pt-32">
        <SomethingWentWrong />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-secondary dark:bg-zinc-950 flex justify-center pt-14">
      <div className="sm:w-[95vw] w-[99vw] min-h-screen pt-10">
        <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between px-2 sm:px-14 w-full">
          <h1 className="text-5xl py-6 max-sm:text-4xl">All Notes</h1>
          
          <div className="sm:w-1/3 w-full border-2 px-2 py-2 rounded-sm flex items-center">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="outline-none bg-transparent w-full"
              type="text"
              placeholder="Search notes ..."
            />
            <CiSearch className="text-xl hover:cursor-pointer" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center max-sm:justify-between max-sm:px-4  pt-10">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => (
              <Pdf
                key={note.notes_id}
                links={note.link}
                notes={true}
                pyqid={note.notes_id}
                pyqname={note.notesname}
              />
            ))
          ) : (
            <h1 className="text-center pl-4">No notes found 🥲</h1>
          )}
        </div>
      </div>
    </div>
  );
}
