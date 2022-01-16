import classes from "./message.module.css"

const Message = (props) => {
    return (
        <div className={classes.container}>
            {props.message}
        </div>
    );
}

export default Message;