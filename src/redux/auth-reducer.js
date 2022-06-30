import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
  mail: null,
  login: null,
  userId: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export const setAuthUserData = (email, login, userId, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: { email, login, userId, isAuth },
  };
};

export const authMe = () => {
  return (dispatch) => {
    return authAPI.authMe().then((data) => {
      if (data.resultCode === 0) {
        let { email, login, id } = data.data;
        dispatch(setAuthUserData(email, login, id, true, id));
      }
    });
  };
};

export const login = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(authMe());
    } else {
      dispatch(stopSubmit("login", { _error: response.data.messages }));
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logout().then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  });
};

export default authReducer;
