import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const CharacterLimit = 200;

  const handleChange = (e) => {
    if (CharacterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        autoFocus
        placeholder="Type to add note ..."
        cols="10"
        rows="8"
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        {/* feature Remainig */}
        <small>{CharacterLimit - noteText.length} Remaining</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
