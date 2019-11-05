import { CURRENT_SEARCH } from './types';

export const updateCurrentSearch = userInputs => (dispatch) => {
  dispatch({
    type: CURRENT_SEARCH,
    payload: userInputs,
  });
};

