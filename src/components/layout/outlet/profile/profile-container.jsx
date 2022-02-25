import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../../../redux/profile-reducer";
import Profile from "./profile";
import { useParams } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.userId;
    if (!userId) {
      userId = 2;
    }
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }
  render() {
    return <Profile {...this.props} userProfile={this.props.userProfile} />;
  }
}

let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  userId: state.profilePage.userProfileId,
});

const ProfileWithUrl = (props) => {
  let { id } = useParams();
  return <ProfileContainer {...props} userId={id} />;
};

export const ProfileConnect = connect(mapStateToProps, {
  setUserProfile,
})(ProfileWithUrl);
