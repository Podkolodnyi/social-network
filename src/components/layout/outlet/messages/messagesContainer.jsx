import React from "react";
import {
  addNewMessageActionCreator,
  changeMessageTextActionCreator,
} from "../../../redux/messages-reducer";
import Messages from "./messages";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (text) => {
      dispatch(changeMessageTextActionCreator(text));
    },
    onClickButton: () => {
      dispatch(addNewMessageActionCreator());
    },
  };
};

export const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
