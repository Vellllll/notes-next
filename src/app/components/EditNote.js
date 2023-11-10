'use-client'

import { useEffect, useState } from "react";

const EditNote = ({id, title, content}) => {
    const [editNote, setEditNote] = useState({
        id: '',
        title: '',
        content: ''
    })

    useEffect(() => {
        setEditNote({
            id: id,
            title: title,
            content: content,
        })
    }, [id, title, content])

    const handleChange = (event) => {
        const {name, value} = event.target
        setEditNote((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleSubmit = () => {

        const notes = JSON.parse(localStorage.getItem('notes'))
        const note = notes.find((note) => note.id === editNote.id)
        console.log(note);


        note.title = editNote.title
        note.content = editNote.content
        console.log(note);

        localStorage.setItem('notes', JSON.stringify(notes))
    }

  return (
    <>
      <div className="p-4 border-box">
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="id" value={editNote.id}></input>
          <div className="mb-3">
            <input type="hidden" value={editNote.id}></input>
            <input
              name="title"
              className="border-black border-b-2 p-2"
              placeholder="Note title"
              value={editNote.title}
              onChange={handleChange}
            ></input>
          </div>
          <div className="mb-3">
            <textarea
              name="content"
              className="border-black border-b-2 p-2"
              placeholder="Note content"
              value={editNote.content}
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

export default EditNote;
