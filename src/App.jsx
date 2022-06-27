import { useEffect, useState } from "react";
import NoteList from "./Components/NoteList";
import { nanoid } from "nanoid";
import Search from "./Components/Search";
import Header from "./Components/Header";

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

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  // get localStorage
  useEffect(() => {
    const savedNote = JSON.parse(localStorage.getItem("react-notes"));
    setNotes(savedNote);
  }, []);

  // set localStorage
  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(notes));
  }, [notes]);

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

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      {/* set dark mode in use classname */}
      <div className="container">
        <Header handlerToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          // set search and filter state
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={AddNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
