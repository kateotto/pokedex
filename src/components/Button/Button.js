import React from "react";
import "./Button.scss";

function Button({ name, onClickHandler, isDisabled = false }) {
  return (
    <button
      className={`btn ${name}`}
      onClick={onClickHandler}
      disabled={isDisabled}
      type="button"
    >
      {name}
    </button>
  );
}

export default Button;
