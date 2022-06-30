import React from "react";
import { addNewMessage } from "../../../../redux/messages-reducer";
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
    addNewMessage: (text) => {
      dispatch(addNewMessage(text));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthNavigate
)(Messages);
