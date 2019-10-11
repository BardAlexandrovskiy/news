export const GET_PASSWORD_AND_LOGIN = 'GET_PASSWORD_AND_LOGIN';
export const HIDE_ERROR = 'HIDE_ERROR';
export const LOGOUT = 'LOGOUT';

export function getPasswordAndLogin(object) {
  return {
    type: GET_PASSWORD_AND_LOGIN,
    data: object
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}

export function hideError() {
  return {
    type: HIDE_ERROR
  };
}
