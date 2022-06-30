import {
  unfollow,
  follow,
  pageChanged,
  requestUsers,
} from "../../../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./users";
import React from "react";
import Preloader from "../../../common/preloader";
import {
  getUsers,
  getTotalPageCount,
  getPageSize,
  getCurrentPage,
  getIsLoading,
  getFollowingInProgress,
} from "../../../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (currentPage) => {
    this.props.pageChanged(currentPage, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Users
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          users={this.props.users}
          currentPage={this.props.currentPage}
          totalPageCount={this.props.totalPageCount}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalPageCount: getTotalPageCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default connect(mapStateToProps, {
  requestUsers,
  pageChanged,
  unfollow,
  follow,
})(UsersContainer);
