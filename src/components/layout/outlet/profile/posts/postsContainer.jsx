import React from "react";
import {
  addNewPost,
  changePostText,
} from "../../../../../redux/profile-reducer";
import Posts from "./posts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    inputPostText: state.profilePage.inputPostText,
  };
};

export const PostsContainer = connect(mapStateToProps, {
  changePostText,
  addNewPost,
})(Posts);
