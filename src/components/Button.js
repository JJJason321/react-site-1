import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

const Button = (props) => {
  let buttonStyles;
  let buttonSize;
  if (props.buttonStyles) {
    buttonStyles = props.buttonStyles;
  } else {
    buttonStyles = STYLES[0];
  }

  if (props.buttonSize) {
    buttonSize = props.buttonSize;
  } else {
    buttonSize = SIZES[0];
  }

  return (
    <Link to={"/sign-up"} className="btn-mobile">
      <button
        className={`btn ${buttonStyles} ${buttonSize}`}
        onClick={props.onClick}
        type={props.type}
      >
        {props.children}
      </button>
    </Link>
  );
};

export default Button;
