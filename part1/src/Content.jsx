import React from "react";
import Part from "./Part";

const Content = (props) => {
  
  
  return <div>
 
 {props.parts.map((item,index)=>{
 
  
  return (
    <Part key={index} part ={item.name} exercise={item.exercises} />
  )
 })}
    
      
  </div>;
};

export default Content;
