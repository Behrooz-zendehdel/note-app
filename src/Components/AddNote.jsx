const AddNote = () => {
  return (
    <div className="note new">
      <textarea
        placeholder="Type to add note ..."
        cols="10"
        rows="8"
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button className="save">Save</button>
      </div>
    </div>
  );
};

export default AddNote;
