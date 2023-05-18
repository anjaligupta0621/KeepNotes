import React, { useState } from "react";

function CreateArea(props) {

    const [note, setNote] = useState({title: "", content: ""});

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevValue => ({...prevValue, [name]: value}));
    }

    function handleSubmit(event) {
        
        props.onAdd(note);
        event.preventDefault();
    }

  return (
    <div>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input 
            name="title" 
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
             />
        <textarea 
            name="content" 
            placeholder="Take a note..." 
            rows="3"
            onChange={handleChange}
            value={note.content}
            />
        <button
            type="submit"
        >Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
