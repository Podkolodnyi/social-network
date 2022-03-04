import {
  unfollow,
  follow,
  pageChanged,
  getUsers,
} from "../../../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./users";
import React from "react";
import Preloader from "../../../common/preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
    users: state.usersPage.users,
    totalPageCount: state.usersPage.totalPageCount,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default connect(mapStateToProps, {
  getUsers,
  pageChanged,
  unfollow,
  follow,
})(UsersContainer);
