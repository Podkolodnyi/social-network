import { PostsContainer } from "./posts/postsContainer";
import classes from "./profile.module.css";
import UserProfile from "./user-profile/user-profile";

const Profile = (props) => {
  return (
    <div className={classes.container}>
      <UserProfile
        userProfile={props.userProfile}
        status={props.status}
        updateStatus={props.updateStatus}
      />
      <div className={classes.posts}>
        <PostsContainer />
      </div>
    </div>
  );
};

export default Profile;
