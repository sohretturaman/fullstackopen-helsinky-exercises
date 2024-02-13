/** @format */

import data from "./data.json";
import { useState } from "react";
function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", note);
    setNotes([{ content: note, date: Date.now() }, ...notes]);
    setNote("");
  };
  return (
    <div className="App">
      <h1> part0 -6 New note in Single page app diagram </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Note:
          <input
            type="text"
            name="name"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </label>
        <button type="submit"> Add</button>
      </form>

      {notes.map((note, index) => {
        return (
          <ul
            key={index}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <li>{note.content}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
