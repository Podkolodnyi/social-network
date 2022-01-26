import React from "react";
import {
  addNewPostActionCreator,
  changePostTextActionCreator,
} from "../../../../redux/profile-reducer";
import Posts from "./posts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    inputPostText: state.profilePage.inputPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (text) => {
      dispatch(changePostTextActionCreator(text));
    },
    onClickButton: () => {
      dispatch(addNewPostActionCreator());
    },
  };
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
