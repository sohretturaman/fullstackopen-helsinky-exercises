/** @format */

import React from "react";
import Header from "./Header";

const Course = (props) => {
  console.log("props.courses", props.courses);

  const sumOfExercises = props.courses[0].parts.reduce(
    (accumulator, currentVal) => accumulator + currentVal.exercises,
    0
  ); //usign reduce funciton to sum exercises
  const sumOfExercises2 = props.courses[1].parts.reduce(
    (accumulator, currentVal) => accumulator + currentVal.exercises,
    0
  );

  return (
    <div>
      <Header title={props.courses[0].name} />
      {props.courses[0].parts.map((item) => {
        return (
          <div key={item.id}>
            <p>
              {item.name} {item.exercises}{" "}
            </p>
          </div>
        );
      })}
      <p style={{ fontWeight: "bold" }}>Total of {sumOfExercises} exercises </p>

      <div>
        <Header title={props.courses[1].name} />
        {props.courses[1].parts.map((item) => {
          return (
            <div key={item.id}>
              <p>
                {item.name} {item.exercises}{" "}
              </p>
            </div>
          );
        })}
        <p style={{ fontWeight: "bold" }}>
          Total of {sumOfExercises2} exercises{" "}
        </p>
      </div>
    </div>
  );
};

export default Course;
