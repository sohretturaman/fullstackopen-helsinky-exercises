/** @format */

import React from "react";

const Course = (props) => {
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
      <p style={{ fontWeight: "bold" }}>Total of {sum} exercises </p>
    </div>
  );
};

export default Course;
