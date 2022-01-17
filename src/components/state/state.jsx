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
    if (action.type === "CHANGE_POST_TEXT") {
      this._state.profilePage.inputPostText = action.text;
      this._callSubscriber();
    } else if (action.type === "ADD_NEW_POST") {
      this._state.profilePage.posts.push({
        id: this._state.profilePage.posts.length + 1,
        name: "user",
        text: this._state.profilePage.inputPostText,
        likes: 0,
      });
      this._state.profilePage.inputPostText = "";
      this._callSubscriber();
    }
  },
};
export default store;
