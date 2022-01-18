import classes from "./messages.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import React from "react";
import {
  addNewMessageActionCreator,
  changeMessageTextActionCreator,
} from "../../../state/state";

let Messages = (props) => {
  let messageText = React.createRef();

  let onChangeText = () => {
    props.dispatch(changeMessageTextActionCreator(messageText.current.value));
  };

  let onClickButton = () => {
    props.dispatch(addNewMessageActionCreator());
  };

  return (
    <div className={classes.container}>
      <div className={classes.messages}>
        <div className={classes.dialog}>
          {props.messagesPage.dialogs.map((elem) => (
            <Dialog key={elem.id} id={elem.id} name={elem.name} />
          ))}
        </div>
        <div className={classes.message}>
          {props.messagesPage.messages.map((elem) => (
            <Message key={elem.id} id={elem.id} message={elem.message} />
          ))}
        </div>
      </div>
      <div className={classes.input}>
        <input
          ref={messageText}
          onChange={onChangeText}
          value={props.messagesPage.inputMessageText}
        />
        <button onClick={onClickButton}>new message</button>
      </div>
    </div>
  );
};

export default Messages;
