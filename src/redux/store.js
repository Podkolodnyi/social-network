import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(
      this._state.messagesPage,
      action
    );
    this._callSubscriber();
  },
};

export default store;
