import React from "react";
import "./Title.scss";

function Title(props) {
  return (
    <div className="title__container">
      <div className="title__title">{props.title}</div>
      <div className="title__subtitle">Gotta Catch 'em All</div>
    </div>
  );
}

export default Title;
