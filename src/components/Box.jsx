import React from "react";
import { useState } from "react";
import MovieList from "./MovieList";

const ListBox = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default ListBox;
