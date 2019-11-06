import { CURRENT_SEARCH, CURRENT_INPUT } from './types';

export const updateCurrentSearch = userInputs => (dispatch) => {
  dispatch({
    type: CURRENT_SEARCH,
    payload: userInputs,
  });
};

export const updateCurrentInput = userInputs => (dispatch) => {
  dispatch({
    type: CURRENT_INPUT,
    payload: userInputs,
  });
};
