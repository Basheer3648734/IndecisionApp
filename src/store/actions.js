import * as actionTypes from "./actionsTypes";
export const addOption = option => {
  return { type: actionTypes.ADD_OPTION, option };
};

export const removeAllOptions = () => {
  return {
    type: actionTypes.REMOVE_ALL_OPTIONS
  };
};

export const removeOption = id => {
  return {
    type: actionTypes.REMOVE_OPTION,
    id
  };
};
export const selectedOption = () => {
  return {
    type: actionTypes.SELECTED_OPTION
  };
};
export const hideModal = () => {
  return {
    type: actionTypes.HIDE_MODAL
  };
};
