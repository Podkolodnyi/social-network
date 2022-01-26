import { PostsContainer } from "./posts/postsContainer";
import classes from "./profile.module.css";

const Profile = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <div className={classes.userAvatar}>
          <img alt="userAvatar" />
        </div>
        <div className={classes.userName}>"UserName"</div>
      </div>
      <div className={classes.userPage}>"Hello"</div>
      <div className={classes.posts}>
        <PostsContainer />
      </div>
    </div>
  );
};

export default Profile;
