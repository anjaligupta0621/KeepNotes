import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes(prevNotes => [...prevNotes, newNote]);
    }

    const deleteNote = (noteID) => {
        setNotes(prevNotes => prevNotes.filter((note, index) => (index !== noteID)))
    }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note, index) =>
        <Note key={index} noteID={index} title={note.title} content={note.content} onDelete={deleteNote} />)
        }
      <Footer />
    </div>
  );
}

export default App;
