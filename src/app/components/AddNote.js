"use client";

import { useEffect, useState } from "react";

const AddNote = () => {
  const [note, setNote] = useState({
    id: "",
    title: "",
    content: "",
  });

  let notes = [];

  const handleChange = (event) => {
    if (localStorage.getItem("notes") !== null) {
      const notesList = JSON.parse(localStorage.getItem("notes"));
      const { name, value } = event.target;
      setNote((prevValue) => ({
        ...prevValue,
        id: notesList.length + 1,
        [name]: value,
      }));
    } else {
      const { name, value } = event.target;
      setNote((prevValue) => ({
        ...prevValue,
        id: 1,
        [name]: value,
      }));
    }
  };

  const handleFormSubmit = () => {
    const noteData = JSON.stringify(note);
    localStorage.setItem("note", noteData);
    if (localStorage.getItem("notes") == null) {
      notes.push(note);
      const notesData = JSON.stringify(notes);
      localStorage.setItem("notes", notesData);
      console.log("haiii");
    } else {
      const currentNotes = JSON.parse(localStorage.getItem("notes"));
      currentNotes.map((currentNote) => {
        notes.push(currentNote);
      });
      notes.push(note);
      const newNotesData = JSON.stringify(notes);
      localStorage.setItem("notes", newNotesData);
    }
  };

  return (
    <>
      <div className="p-4 border-box">
        <form onSubmit={handleFormSubmit}>
          <input type="hidden" name="id"></input>
          <div className="mb-3">
            <input type="hidden"></input>
            <input
              name="title"
              className="border-black border-b-2 p-2"
              placeholder="Note title"
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <textarea
              name="content"
              className="border-black border-b-2 p-2"
              placeholder="Note content"
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-orange-300 rounded-lg border-orange-400 border-2 px-3 py-1"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNote;
