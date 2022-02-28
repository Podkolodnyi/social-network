const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
  email: null,
  login: null,
  userId: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return { ...state, ...action.data, isAuth: true };
    default:
      return state;
  }
};

export const setAuthUserData = (email, login, userId) => {
  return { type: SET_AUTH_USER_DATA, data: { email, login, userId } };
};

export default authReducer;
