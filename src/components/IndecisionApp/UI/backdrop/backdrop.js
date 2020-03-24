import React from "react";
import "./backdrop.css";
const Backdrop = props => {
  return (
    <div>
      <div className="backDrop" onClick={props.hideModal}></div>
      {props.children}
    </div>
  );
};
export default Backdrop;
