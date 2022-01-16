import classes from "./post.module.css";

const Post = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.user}>
                <img alt="ava"/>
                <div className={classes.name}>
                    {props.name}
                </div>
            </div>
            <div className={classes.text}>
                {props.text}
            </div>
            <div className={classes.likes}>
                {props.likes}
            </div>
        </div>
    );
}

export default Post;