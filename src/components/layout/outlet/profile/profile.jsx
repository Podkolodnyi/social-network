import { PostsContainer } from "./posts/postsContainer";
import classes from "./profile.module.css";
import UserProfile from "./user-profile/user-profile";
import { Navigate } from "react-router-dom";

const Profile = (props) => {
  if (!props.isAuth) return <Navigate to="/login" />;
  return (
    <div className={classes.container}>
      <UserProfile userProfile={props.userProfile} />
      <div className={classes.posts}>
        <PostsContainer />
      </div>
    </div>
  );
};

export default Profile;
