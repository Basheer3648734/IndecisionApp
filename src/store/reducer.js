import * as actionTypes from "./actionsTypes";
const initialState = {
  options: [],
  selectedOption: null,
  showModal: false
};
const addOption = (state, option) => {
  const oldState = [...state.options];
  const newArray = oldState.concat(option);
  return {
    ...state,
    options: newArray
  };
};
const selectedOption = state => {
  const option = parseInt(Math.random() * state.options.length);
  return {
    ...state,
    selectedOption: option,
    showModal: true
  };
};
const removeAllOption = state => {
  localStorage.clear();
  return {
    ...state,
    options: []
  };
};
const removeOption = (state, action) => {
  const oldOptions = [...state.options];
  const updatedOptions = oldOptions.filter(option => action.id != option);
  return {
    ...state,
    options: updatedOptions
  };
};
const hideModal = state => {
  return {
    ...state,
    showModal: false
  };
};
const indecisionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_OPTION:
      return addOption(state, action.option);
    case actionTypes.SELECTED_OPTION:
      return selectedOption(state);
    case actionTypes.REMOVE_ALL_OPTIONS:
      return removeAllOption(state);
    case actionTypes.REMOVE_OPTION:
      return removeOption(state, action);
    case actionTypes.HIDE_MODAL:
      return hideModal(state);
    default:
      return state;
  }
};
export default indecisionReducer;
