import classes from "./user-profile.module.css";
import Preloader from "../../../../common/preloader";

const UserProfile = (props) => {
  if (!props.userProfile) {
    return <Preloader />;
  }
  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <div className={classes.userAvatar}>
          <img src={props.userProfile.photos.large} alt="userAvatar" />
        </div>
        <div className={classes.userName}>"{props.userProfile.fullName}</div>
      </div>
      <div className={classes.userPage}>{props.userProfile.aboutMe}</div>
    </div>
  );
};

export default UserProfile;
