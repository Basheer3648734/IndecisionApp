import React from "react";
import Option from "./option/option";
import "./options.css";
const options = props => {
  let option = null;
  if (props.items.length !== 0) {
    option = props.items.map((item, index) => {
      return <Option item={item} {...props} key={index} />;
    });
  } else {
    option = <p className="noList">Please add option</p>;
  }
  return (
    <div className="options-div">
      <h2>Options</h2>
      <ol className="options">{option}</ol>
    </div>
  );
};
export default options;
