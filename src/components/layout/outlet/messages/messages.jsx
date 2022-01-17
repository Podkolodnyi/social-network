import classes from "./messages.module.css";
import Dialog from "./dialog/dialog";
import Message from "./message/message";

let Messages = (props) => {
  let dialog = props.messagesPage.dialogs.map((elem) => (
    <Dialog key={elem.id} id={elem.id} name={elem.name} />
  ));
  let message = props.messagesPage.messages.map((elem) => (
    <Message key={elem.id} id={elem.id} message={elem.message} />
  ));

  return (
    <div className={classes.container}>
      <div className={classes.dialog}>{dialog}</div>
      <div className={classes.message}>{message}</div>
    </div>
  );
};

export default Messages;
