import React from "react";

const StatisticLine = (props) => {
  return <div>
    <p>{props.text} {props.value}</p>
  </div>;
};

export default StatisticLine;
