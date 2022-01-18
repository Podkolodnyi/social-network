const CHANGE_MESSAGE_TEXT = "CHANGE_MESSAGE_TEXT";
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";
const ADD_NEW_POST = "ADD_NEW_POST";
const CHANGE_POST_TEXT = "CHANGE_POST_TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, name: "Dima", text: "hello", likes: 10 },
        { id: 2, name: "Anna", text: "hi", likes: 5 },
      ],
      inputPostText: "",
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Anna" },
      ],
      messages: [
        { id: 1, message: "hello" },
        { id: 2, message: "hi" },
      ],
      inputMessageText: "",
    },
  },
  _callSubscriber() {},

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  getState() {
    return this._state;
  },

  dispatch(action) {
    if (action.type === CHANGE_POST_TEXT) {
      this._state.profilePage.inputPostText = action.text;
      this._callSubscriber();
    } else if (action.type === ADD_NEW_POST) {
      this._state.profilePage.posts.push({
        id: this._state.profilePage.posts.length + 1,
        name: "user",
        text: this._state.profilePage.inputPostText,
        likes: 0,
      });
      this._state.profilePage.inputPostText = "";
      this._callSubscriber();
    } else if (action.type === CHANGE_MESSAGE_TEXT) {
      this._state.messagesPage.inputMessageText = action.text;
      this._callSubscriber();
    } else if (action.type === ADD_NEW_MESSAGE) {
      this._state.messagesPage.messages.push({
        id: this._state.messagesPage.messages.length + 1,
        message: this._state.messagesPage.inputMessageText,
      });
      this._state.messagesPage.dialogs.push({
        id: this._state.messagesPage.dialogs.length + 1,
        name: "augustin",
      });
      this._state.messagesPage.inputMessageText = "";
      this._callSubscriber();
    }
  },
};

export const changeMessageTextActionCreator = (text) => {
  return { type: CHANGE_MESSAGE_TEXT, text: text };
};

export const addNewMessageActionCreator = () => {
  return { type: ADD_NEW_MESSAGE };
};

export const changePostTextActionCreator = (text) => {
  return { type: CHANGE_POST_TEXT, text: text };
};

export const addNewPostTextActionCreator = () => {
  return { type: ADD_NEW_POST };
};

export default store;
