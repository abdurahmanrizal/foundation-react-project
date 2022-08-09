import React from "react";
import ButtonStyle from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"}
      className={`${ButtonStyle.button} `}
      onClick={props.onConfirm}
    >
      {props.children}
    </button>
  );
};

export default Button;
