

let state = {
    profilePage: {
        posts: [
            {id: 1, name: "Dima", text: "hello", likes: 10},
            {id: 2, name: "Anna", text: "hi", likes: 5},
        ],
        inputPostText: "",
    },
    messagesPage: {
        dialogs: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Anna"},
        ],
        messages: [
            {id: 1, message: "hello"},
            {id: 2, message: "hi"},
        ],
    },
}



let rerederAll = () => {}

export const subscribe = (observer) => {
    rerederAll = observer;
}

export const changePostText = (text) => {
    state.profilePage.inputPostText = text;
    rerederAll();
}

export const addNewPost = (text) => {
    let newPost = {id: state.profilePage.posts.length + 1, name: "user", text: text, likes: 0};
    state.profilePage.posts.push(newPost);
    rerederAll();
    changePostText("");
}

export default state;