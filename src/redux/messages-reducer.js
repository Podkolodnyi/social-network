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
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          { id: state.messages.length + 1, message: action.text },
        ],
        dialogs: [
          ...state.dialogs,
          { id: state.dialogs.length + 1, name: "augustin" },
        ],
      };
    default:
      return state;
  }
};

export const addNewMessage = (text) => {
  return { type: ADD_NEW_MESSAGE, text };
};

export default messagesReducer;
