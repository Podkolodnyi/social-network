import React from "react";
import {
  addNewMessageActionCreator,
  changeMessageTextActionCreator,
} from "../../../../redux/messages-reducer";
import Messages from "./messages";
import { connect } from "react-redux";
import { withAuthNavigate } from "../../../../HOC/authNavigate";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth,
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Messages);
