import { useState } from "react";
import NoteList from "./Components/NoteList";
import { nanoid } from "nanoid";
import Search from "./Components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      text: "this is frist note",
      date: "15/04/2021",
      id: nanoid(),
    },
    {
      text: "this is second note",
      date: "20/04/2021",
      id: nanoid(),
    },
    {
      text: "this is thired note",
      date: "30/04/2021",
      id: nanoid(),
    },
    {
      text: "this is new note",
      date: "30/04/2021",
      id: nanoid(),
    },
  ]);
  const AddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
  const [searchText,setSearchText] = useState('')


  return (
    <div>
      <div className="container">
        <Search handleSearchNote={setSearchText} />
        <NoteList
        // set search and filter state
          notes={notes.filter((note)=> note.text.toLocaleLowerCase().includes(searchText))}
          handleAddNote={AddNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
