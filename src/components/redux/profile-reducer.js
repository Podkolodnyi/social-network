const CHANGE_POST_TEXT = "CHANGE_POST_TEXT";
const ADD_NEW_POST = "ADD_NEW_POST";

let initialState = {
  posts: [
    { id: 1, name: "Dima", text: "hello", likes: 10 },
    { id: 2, name: "Anna", text: "hi", likes: 5 },
  ],
  inputPostText: "",
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
    default:
      return state;
  }
};

export const changePostTextActionCreator = (text) => {
  return { type: CHANGE_POST_TEXT, text: text };
};
export const addNewPostActionCreator = () => {
  return { type: ADD_NEW_POST };
};

export default profileReducer;
