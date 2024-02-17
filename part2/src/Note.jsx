/** @format */

import React from "react";

const Note = (props) => {
  console.log("props", props.note);

  return (
    <div>
      <li>{props.note.content} </li>
    </div>
  );
};

export default Note;
