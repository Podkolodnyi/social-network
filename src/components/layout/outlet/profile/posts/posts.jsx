import classes from "./posts.module.css";
import Post from "./post/post";
import React from "react";

const Posts = (props) => {
  let postText = React.createRef();

  let onChangeText = () => {
    props.changePostText(postText.current.value);
  };

  let onClickButton = () => {
    props.addNewPost();
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
      <div className={classes.post}>
        {props.posts.map((elem) => (
          <Post
            key={elem.id}
            name={elem.name}
            text={elem.text}
            id={elem.id}
            likes={elem.likes}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
