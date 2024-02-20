/** @format */

import React from "react";
import "./index.css";
const Notification = ({ successMessage, errorMessage }) => {
  if (errorMessage || successMessage === null) {
    return null;
  }

  let classname;
  let message;
  if (successMessage) {
    classname = "message";
    message = successMessage;
  } else {
    message = errorMessage;
    classname = "error";
  }

  return <div className={classname}>{message}</div>;
};

export default Notification;
