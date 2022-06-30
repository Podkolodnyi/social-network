import React from "react";
import { addNewPost } from "../../../../../redux/profile-reducer";
import Posts from "./posts";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

export const PostsContainer = connect(mapStateToProps, {
  addNewPost,
})(Posts);
