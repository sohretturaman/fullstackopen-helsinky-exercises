import { useState } from "react"


const App = () => {
 // save clicks of each button to its own state
 const [good, setGood] = useState(0)
 const [neutral, setNeutral] = useState(0)
 const [bad, setBad] = useState(0)

 const avarege = (good,neutral,bad)=>{
  let avrg = (good+neutral+bad)/3; 
  return avrg; 
 }
 const getPositive =(good,neutral,bad)=>{
  let total = good+neutral+bad;
  return good / total; 
 }
 return (
   <div>
     code here
     <h1> Give Feedback</h1>
     <button style={{marginRight:5}} onClick={()=>setGood(prev=>prev+1)}>good</button>
     <button style={{marginRight:5}} onClick={()=>setNeutral((prev)=>prev+1)}>neutral</button>
     <button onClick={()=>setBad((prev)=>prev+1)} >bad</button>

     <h1>statistics</h1>
     <p>good {good}</p>
     <p>good {neutral}</p>
     <p>good {bad}</p>
     <p>all {bad+good+neutral} </p>
    <p>avarege {avarege(good,neutral,bad)} </p>
    <p>positive {getPositive(good,neutral,bad)}% </p>
   </div>
 )
  
}

export default App




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