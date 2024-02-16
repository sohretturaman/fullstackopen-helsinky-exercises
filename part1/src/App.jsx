/** @format */

import { useState } from "react";
import StatisticLine from "./StatisticLine";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const Points = [1, 4, 6, 3, 2, 1, 3];
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState([1, 4, 6, 3, 2, 1, 3]);
  if (selected >= anecdotes.length) {
    setSelected(0);
  }

  const handleVote = () => {
    let newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);

    console.log("copy value", selected, points[selected]);
  };
  return (
    <div>
      {anecdotes[selected]}
      <br />
      <br />

      <button onClick={handleVote}>Vote </button>
      <p>Vote{points[selected]} </p>
      <button onClick={() => setSelected((prev) => prev + 1)}>
        next anectod
      </button>
    </div>
  );
};

export default App;

/**previous tasks 1-5
 * 
 * 
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const arto = {
    name: 'Arto Hellas',
    greet: function() {
      console.log('hello, my name is ' + this.name)
    },
  }
  
  setTimeout(arto.greet, 1000)
  setTimeout(arto.greet.bind(arto), 1000)
  return (
    <div>
    
      <Header course ={course.name}/>
      <Content parts={course.parts} />
     <Total parts={course.parts} />
    </div>
  )
 */
