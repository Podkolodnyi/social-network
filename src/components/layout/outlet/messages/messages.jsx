import classes from "./messages.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";
import React from "react";
import { Navigate } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../../common/formsControls/formsControls";
import { maxLengthCreator } from "../../../../utils/validators";

const maxLength100 = maxLengthCreator(100);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"New message"}
          name={"newMessage"}
          component={Textarea}
          validate={maxLength100}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm({ form: "newMessage" })(MessageForm);

let Messages = (props) => {
  const onSubmit = (values) => {
    props.addNewMessage(values.newMessage);
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
        <MessageReduxForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Messages;
