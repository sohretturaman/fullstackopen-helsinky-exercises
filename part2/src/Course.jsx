/** @format */

import React from "react";

const Course = (props) => {
  console.log(props.course);

  return (
    <div>
      {props.course.map((item, index) => {
        return (
          <div key={index}>
            <p>
              {item.name} {item.exercises}{" "}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Course;
