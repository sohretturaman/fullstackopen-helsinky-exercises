/** @format */
import { useEffect } from "react";
import data from "./data.json";
function App() {
  useEffect(() => {
    console.log("data", data[0]);
  }, []);

  return (
    <div>
      <h1>New note diagram</h1>
      <div>
        sequenceDiagram participant browser participant server
        <p>
          {" "}
          browser-{">>"}server: GET
          https://studies.cs.helsinki.fi/exampleapp/notes activate server
          server--{">>"}browser: HTML document deactivate server
        </p>
        <p>
          browser-{">>"}server: GET
          https://studies.cs.helsinki.fi/exampleapp/main.css activate server
          server--{">>"}browser: the css file deactivate server browser-{">>"}
          server: GET https://studies.cs.helsinki.fi/exampleapp/main.js activate
          server
        </p>
        <p>
          server--{">>"}browser: the JavaScript file deactivate server Note
          right of browser: The browser starts executing the JavaScript code
          that fetches the JSON from the server
        </p>
        <p>
          browser-{">>"}server: GET
          https://studies.cs.helsinki.fi/exampleapp/data.json activate server
        </p>
        <p>
          server--{">>"}browser: [
          {("content", "HTML is easy", "date", "2023-1-1")}, ... ] deactivate
          server Note right of browser: The browser executes the callback
          function that renders the notes
        </p>
      </div>
      <form></form>
    </div>
  );
}

export default App;
