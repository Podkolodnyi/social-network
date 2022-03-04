import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";
import { useParams } from "react-router-dom";
import { getUserProfile } from "../../../../redux/profile-reducer";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;
    if (!userId) {
      userId = this.props.homeId;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} userProfile={this.props.userProfile} />;
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  userId: state.profilePage.userProfileId,
  homeId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

const ProfileWithUrl = (props) => {
  let { id } = useParams();
  return <ProfileContainer {...props} userId={id} />;
};

export const ProfileConnect = connect(mapStateToProps, {
  getUserProfile,
})(ProfileWithUrl);
