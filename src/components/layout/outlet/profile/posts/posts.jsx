import classes from "./posts.module.css";
import Post from "./post/post";
import React from "react";

const Posts = (props) => {
  let newPost = props.posts.map((elem) => (
    <Post
      key={elem.id}
      name={elem.name}
      text={elem.text}
      id={elem.id}
      likes={elem.likes}
    />
  ));

  let postText = React.createRef();

  let onChangeText = () => {
    props.dispatch({ type: "CHANGE_POST_TEXT", text: postText.current.value });
  };

  let onClickButton = () => {
    props.dispatch({ type: "ADD_NEW_POST" });
  };

  return (
    <div className={classes.posts}>
      <input
        ref={postText}
        onChange={onChangeText}
        value={props.inputPostText}
      />
      <button onClick={onClickButton} className={classes.addPostButton}>
        add post
      </button>
      <div className={classes.post}>{newPost}</div>
    </div>
  );
};

export default Posts;
