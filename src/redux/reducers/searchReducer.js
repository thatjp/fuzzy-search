import { CURRENT_SEARCH } from '../actions/types';

const initialState = {
  currentSearch: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CURRENT_SEARCH:
      return {
        ...state,
        currentSearch: action.payload,
      };
    default:
      return state;
  }
}
