import React from "react";
import { connect } from "react-redux";
import Profile from "./profile";
import { useParams } from "react-router-dom";
import {
  getUserProfile,
  updateStatus,
  getStatus,
} from "../../../../redux/profile-reducer";
import { withAuthNavigate } from "../../../../HOC/authNavigate";
import { compose } from "redux";

class ProfileWithUrl extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;
    if (!userId) {
      userId = this.props.homeId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        userProfile={this.props.userProfile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  userId: state.profilePage.userProfileId,
  homeId: state.auth.userId,
  status: state.profilePage.status,
});

const ProfileContainer = (props) => {
  let { id } = useParams();
  return <ProfileWithUrl {...props} userId={id} />;
};

export default compose(
  connect(mapStateToProps, { getUserProfile, updateStatus, getStatus }),
  withAuthNavigate
)(ProfileContainer);
