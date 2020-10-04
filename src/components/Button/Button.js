import React from "react";

import classes from "./Button.module.scss";

function Button({ children, variant }) {
  return (
    <button
      className={`${classes["btn"]} ${
        variant === "cta"
          ? classes["btn--cta"]
          : variant === "outlined"
          ? classes["btn--outlined"]
          : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
