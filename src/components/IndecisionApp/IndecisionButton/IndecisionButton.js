import React, { Component } from "react";
import "./IndecisionButton.css";
class IndecisionButton extends Component {
  render() {
    return (
      <React.Fragment>
        <button
          disabled={this.props.disabled === 0}
          onClick={this.props.selectOption}
          className="IndecisionButton"
        >
          What should I do?
        </button>
      </React.Fragment>
    );
  }
}

export default IndecisionButton;
