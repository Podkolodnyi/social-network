import classes from "./posts.module.css"
import Post from "./post/post";
import React from "react";


const Posts = (props) => {

    let newPost = props.posts.map(elem => <Post name = {elem.name} text = {elem.text} id = {elem.id} likes = {elem.likes}/>)

    let postText = React.createRef();

    let onChangeText = () => {
        let text = postText.current.value;
        props.changePostText(text);
    }

    let onClickButton = () => {
        let text = props.inputPostText;
        props.addNewPost(text);
        postText.current.value = "";
    }

    return (
        <div className={classes.posts}>
        <input ref={postText} onChange={onChangeText}/>
        <button onClick={onClickButton} className={classes.addPostButton}>add post</button>
            <div className={classes.post}>
                {newPost}
            </div>
        </div>
    );
}

export default Posts;