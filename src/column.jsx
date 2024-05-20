import React, { useState } from "react";
import "./column.css";

function Column({ key, index, logo, title, description, backgroundColor }) {
  const style = {
    backgroundColor: backgroundColor,
  };
  const buttonStyle = {
    color: backgroundColor,
  };

  const [isActive, setIsActive] = useState(false);
  const toggleActiveState = (event) => {
    setIsActive(!isActive);
    // var element = document.getElementById("learnMore");
    // element.classList.add("activeStyle");
  };

  let addActiveStyle = () => {
    var element = document.getElementById("button"+index);
    element.style.backgroundColor = backgroundColor;
    element.style.color = "var(--very-light-gray)";
  };
  let removeStyle = () => {
    var element = document.getElementById("button"+index);
    element.style.backgroundColor = "var(--very-light-gray)";
    element.style.color = backgroundColor;
  };
  return (
    <div className="column-container" style={style}>
      <img src={logo} alt="carlogo" />
      <h1>{title}</h1>
      <p>{description}</p>
      <button
        id={"button" + index}
        style={buttonStyle}
        onMouseDownCapture={addActiveStyle}
        onMouseUpCapture={removeStyle}
      >
        Learn More
      </button>
    </div>
  );
}

export default Column;
