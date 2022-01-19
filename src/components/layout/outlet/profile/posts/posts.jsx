import classes from "./posts.module.css";
import Post from "./post/post";
import React from "react";
import {
  addNewPostActionCreator,
  changePostTextActionCreator,
} from "../../../../redux/profile-reducer";

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
    props.dispatch(changePostTextActionCreator(postText.current.value));
  };

  let onClickButton = () => {
    props.dispatch(addNewPostActionCreator());
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
