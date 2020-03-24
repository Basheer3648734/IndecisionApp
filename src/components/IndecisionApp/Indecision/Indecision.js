import React, { Component } from "react";
import Header from "../Header/Header";
import IndecisonButton from "../IndecisionButton/IndecisionButton";
import Options from "../options/options";
import AddOption from "../AddOption/AddOption";
// import option from "../options/option/option";
import * as actions from "../../../store/actions";
import { connect } from "react-redux";
import Modal from "../UI/Modal/Modal";
import "./Indecision.css";
class Indecision extends Component {
  componentDidMount() {
    const options = JSON.parse(localStorage.getItem("option"));
    if (!!options !== "false") {
      this.props.addOption(options);
    }
  }
  addOptionHandler = e => {
    e.preventDefault();
    const ele = e.target.elements.option.value.trim();
    if (ele === "") return alert("please enter a value");
    e.target.elements.option.value = "";
    this.props.addOption(ele);
  };
  componentDidUpdate() {
    localStorage.setItem("option", JSON.stringify(this.props.options));
  }

  render() {
    let modal = null;
    if (this.props.showModal) {
      modal = (
        <Modal
          selectedOption={this.props.options[this.props.selectedOpt]}
          hideModal={this.props.hideModal}
        />
      );
    }
    return (
      <div className="Indecision">
        <Header />
        <header>
          <IndecisonButton
            disabled={this.props.options.length}
            selectOption={this.props.selectedOption}
          />
          <button
            className="remove"
            onClick={this.props.removeAllOptions}
            disabled={this.props.options.length === 0}
          >
            Remove all
          </button>
        </header>
        <Options
          items={this.props.options}
          removeElt={this.props.removeOption}
        />
        <AddOption addElt={this.addOptionHandler} />
        {modal}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    options: state.options,
    selectedOpt: state.selectedOption,
    showModal: state.showModal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addOption: option => dispatch(actions.addOption(option)),
    removeAllOptions: () => dispatch(actions.removeAllOptions()),
    removeOption: id => dispatch(actions.removeOption(id)),
    selectedOption: () => dispatch(actions.selectedOption()),
    hideModal: () => dispatch(actions.hideModal())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Indecision);
