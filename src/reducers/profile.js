import { GET_PASSWORD_AND_LOGIN, HIDE_ERROR, LOGOUT } from '../actions/index';

const initialState = {
  access: JSON.parse(localStorage.getItem('profileAccess')) || false,
  error: false
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PASSWORD_AND_LOGIN:
      if (
        action.data.login === 'Alexandr' &&
        action.data.password === 'qwerty'
      ) {
        localStorage.setItem('profileAccess', true);
        return { ...state, access: true };
      }
      return { ...state, error: true };
    case HIDE_ERROR:
      return { ...state, error: false };
    case LOGOUT:
      localStorage.setItem('profileAccess', false);
      return { ...state, access: false };
    default:
      return state;
  }
}
