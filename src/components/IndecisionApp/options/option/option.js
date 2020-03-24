import React from "react";
import "./option.css";
const option = props => (
  <div className="option">
    <li>{props.item}</li>
    <button onClick={() => props.removeElt(props.item)}>Remove</button>
  </div>
);
export default option;
