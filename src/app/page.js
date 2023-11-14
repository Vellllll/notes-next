"use client";

import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import EditNote from "./components/EditNote";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [notes, setNotes] = useState([]);

  const [editNote, setEditNote] = useState({
    id: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    const currentNotes = JSON.parse(localStorage.getItem("notes"));
    if (currentNotes) {
      setNotes(currentNotes);
    }
  }, []);

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setNotes(updatedNotes);
    console.log(updatedNotes);
  };

  const handleEdit = (id) => {
    const selectedNote = notes.filter((note) => note.id === id);
    // console.log(selectedNote[0]);
    setEditNote(selectedNote[0]);
    const editNoteForm = document.getElementById("edit_note");
    editNoteForm.classList.remove("hidden");
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center p-4 text-2xl font-bold">Notes App</h1>
      <div className="">
      <AddNote />
      </div>
      <div className="hidden" id="edit_note">
        <EditNote
          id={editNote.id}
          title={editNote.title}
          content={editNote.content}
        />
      </div>
      <div className="grid grid-cols-4">
        {notes.map((note, index) => (
          <div key={index}>
            <NotesList>
              <h1 className="text-2xl font-semibold pb-3">{note.title}</h1>
              <p className="">{note.content}</p>
            </NotesList>
              <div className="bg-[#FFCF96] p-4 mx-4 rounded-b-md">
                <button className="p-1 border-[1px] border-black rounded" onClick={() => handleEdit(note.id)}><FontAwesomeIcon icon={faPenToSquare} /></button>
                <button className="p-1 border-[1px] border-black rounded" onClick={() => handleDelete(note.id)}><FontAwesomeIcon icon={faTrash} /></button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
