import React from "react";
import "./AddOption.css";
const AddOption = props => {
  return (
    <form onSubmit={props.addElt} className="addoption">
      <input type="text" placeholder="enter option" name="option" />
      <input type="submit" value="Add" />
    </form>
  );
};

export default AddOption;
