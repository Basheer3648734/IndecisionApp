import React from "react";
import Backdrop from "../backdrop/backdrop";
import "./Modal.css";

const Modal = props => {
  return (
    <Backdrop hideModal={props.hideModal}>
      <div className="modal">
        <h1>You have to do:</h1>
        <h3>{props.selectedOption}</h3>
        <button onClick={props.hideModal}>Okay!</button>
      </div>
    </Backdrop>
  );
};
export default Modal;
