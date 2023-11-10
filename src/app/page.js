"use client";

import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";
import EditNote from "./components/EditNote";

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
    const editNoteForm = document.getElementById('edit_note');
    editNoteForm.classList.remove('hidden');
  }

  return (
    <>
      <AddNote />
      <div className="hidden" id="edit_note">
        <EditNote id={editNote.id} title={editNote.title} content={editNote.content} />
      </div>
      <div className="grid grid-cols-4">
        {notes.map((note, index) => (
          <div key={index}>
            <NotesList>
              <h1>{note.title}</h1>
              <p className="">{note.content}</p>
              <div className="mt-3">
                <button onClick={() => handleEdit(note.id)}>Edit</button>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
              </div>
            </NotesList>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
