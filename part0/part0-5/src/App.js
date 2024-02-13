/** @format */

import data from "./data.json";

function App() {
  console.log("data", data);

  return (
    <div className="App">
      <h1> part0 - 5 Single page app diagram </h1>
      {data.map((note) => {
        return (
          <ul style={{ display: "flex", justifyContent: "flex-start" }}>
            <li>{note.content}</li>
          </ul>
        );
      })}

      <form>
        <label>
          Note:
          <input type="text" name="name" />
        </label>
        <button type="post"> Add</button>
      </form>
    </div>
  );
}

export default App;
