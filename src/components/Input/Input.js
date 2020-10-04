import React from "react";
import classes from "./Input.module.scss";

function Input(props) {
  return <input className={classes.input} {...props} />;
}

export default Input;
