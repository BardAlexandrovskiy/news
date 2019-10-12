import { HIDE_ERROR, SHOW_ERROR } from '../actions/index';

const initialState = {
  error: false
};

export default function newsReducer(state = initialState, action) {
  switch (action.type) {
    case HIDE_ERROR:
      return { ...state, error: false };
    case SHOW_ERROR:
      return { ...state, error: true };
    default:
      return state;
  }
}
