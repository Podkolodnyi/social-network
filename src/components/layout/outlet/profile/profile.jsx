import Posts from "./posts/posts";
import classes from "./profile.module.css"

const Profile = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.user}>
                <div className={classes.userAvatar}>
                    <img alt="userAvatar"/>
                </div>
                <div className={classes.userName}>
                    "UserName"
                </div>
            </div>
            <div className={classes.userPage}>
                "Hello"
            </div>
            <div className={classes.posts}>
                <Posts posts = {props.profilePage.posts} inputPostText = {props.profilePage.inputPostText}
                       changePostText = {props.changePostText} addNewPost = {props.addNewPost}
                />
            </div>
        </div>
    );
}

export default Profile;