import { usersAPI, profileAPI } from "../api/api";

const CHANGE_POST_TEXT = "CHANGE_POST_TEXT";
const ADD_NEW_POST = "ADD_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, name: "Dima", text: "hello", likes: 10 },
    { id: 2, name: "Anna", text: "hi", likes: 5 },
  ],
  inputPostText: "",
  userProfile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POST_TEXT:
      return { ...state, inputPostText: action.text };
    case ADD_NEW_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
            name: "user",
            text: state.inputPostText,
            likes: 0,
          },
        ],
        inputPostText: "",
      };
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: action.userProfile,
      };
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const changePostText = (text) => {
  return { type: CHANGE_POST_TEXT, text: text };
};
export const addNewPost = () => {
  return { type: ADD_NEW_POST };
};
const setUserProfile = (userProfile) => {
  return { type: SET_USER_PROFILE, userProfile };
};
const setStatus = (status) => {
  return { type: SET_STATUS, status };
};
export const getUserProfile = (userId) => {
  return (dispatch) => {
    usersAPI.getUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then((data) => {
      dispatch(setStatus(data));
    });
  };
};
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      dispatch(setStatus(status));
    });
  };
};
export default profileReducer;
