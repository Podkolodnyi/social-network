const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT";
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dima" },
    { id: 2, name: "Anna" },
  ],
  messages: [
    { id: 1, message: "hello" },
    { id: 2, message: "hi" },
  ],
  inputMessageText: "",
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE_TEXT:
      return { ...state, inputMessageText: action.text };
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: state.inputMessageText },
        ],
        dialogs: [
          ...state.dialogs,
          { id: state.dialogs.length + 1, name: "augustin" },
        ],
        inputMessageText: "",
      };
    default:
      return state;
  }
};

export const changeMessageTextActionCreator = (text) => {
  return { type: CHANGE_MESSAGE_TEXT, text: text };
};
export const addNewMessageActionCreator = () => {
  return { type: ADD_NEW_MESSAGE };
};

export default messagesReducer;
