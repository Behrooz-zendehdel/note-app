import React from "react";

const Header = ({ handlerToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button onClick={()=> handlerToggleDarkMode((prevDarkMode)=>!prevDarkMode)} className="save ">Toggle Mode</button>
    </div>
  );
};

export default Header;
