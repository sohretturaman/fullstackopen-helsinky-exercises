/** @format */

import React from "react";

const Course = (props) => {
  const sumOfExercises = props.course.reduce(
    (accumulator, currentVal) => accumulator + currentVal.exercises,
    0
  ); //usign reduce funciton to sum exercises
  console.log("sum of exercises", sumOfExercises);

  console.log(props.course);
  let sum = 0;
  return (
    <div>
      {props.course.map((item) => {
        sum = sum + item.exercises;
        return (
          <div key={item.id}>
            <p>
              {item.name} {item.exercises}{" "}
            </p>
          </div>
        );
      })}
      <p style={{ fontWeight: "bold" }}>Total of {sumOfExercises} exercises </p>
    </div>
  );
};

export default Course;
