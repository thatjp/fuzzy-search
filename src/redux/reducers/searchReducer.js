import { CURRENT_SEARCH, CURRENT_INPUT } from '../actions/types';

const initialState = {
  currentSearch: "",
  currentInput: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: action.payload,
      };
    case CURRENT_INPUT:
      return {
        ...state,
        currentInput: action.payload,
      };
    default:
      return state;
  }
}
