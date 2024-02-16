import { useState } from "react"
import StatisticLine from "./StatisticLine";



const Statistics =({good,bad,neutral,avarege,getPositive})=>{
  return <div>
       <h1>statistics</h1>
       <StatisticLine text='good' value={good} />
       <StatisticLine text='neutral' value={neutral} />
       <StatisticLine text='bad' value={bad} />
       <StatisticLine text='all' value={bad+good+neutral}/>
       <StatisticLine text='avarege' value={avarege(good,neutral,bad)} />
       <StatisticLine text='positive' value={getPositive(good,neutral,bad)} />
   
  </div>;
}

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
  return good / total +'%'; 
 }
 return (
   <div>
     code here
     <h1> Give Feedback</h1>
     <button style={{marginRight:5}} onClick={()=>setGood(prev=>prev+1)}>good</button>
     <button style={{marginRight:5}} onClick={()=>setNeutral((prev)=>prev+1)}>neutral</button>
     <button onClick={()=>setBad((prev)=>prev+1)} >bad</button>
{
bad !==0 || good !==0 || neutral !==0 ? 
<Statistics good={good} bad={bad} neutral={neutral} getPositive={getPositive} avarege={avarege} />
:
<p>No feedback given</p>
}
    
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