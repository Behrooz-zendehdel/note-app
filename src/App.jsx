import { useState } from "react";
import NoteList from "./Components/NoteList";
import { nanoid } from "nanoid";

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

  return (
    <div>
      <div className="container">
        <NoteList notes={notes} />
      </div>
    </div>
  );
};

export default App;
