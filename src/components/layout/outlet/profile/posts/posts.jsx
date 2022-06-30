import classes from "./posts.module.css";
import Post from "./post/post";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../../../../utils/validators";
import { Textarea } from "../../../../common/formsControls/formsControls";

const maxlength50 = maxLengthCreator(50);

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Textarea}
        name={"text"}
        placeholder={"New Post"}
        validate={[maxlength50]}
      />
      <button>Add post</button>
    </form>
  );
};

const PostReduxForm = reduxForm({ form: "postText" })(PostForm);

const Posts = (props) => {
  const newPost = (values) => {
    props.addNewPost(values.text);
  };

  return (
    <div className={classes.posts}>
      <div>
        <PostReduxForm onSubmit={newPost} />
      </div>
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
