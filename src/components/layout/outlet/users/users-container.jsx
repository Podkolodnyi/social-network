import {
  setUsers,
  setTotalPageCount,
  setCurrentPage,
  toggleIsLoading,
  unfollow,
  follow,
} from "../../../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./users";
import React from "react";
import Preloader from "../../../common/preloader";
import { usersAPI } from "../../../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true);
    usersAPI
      .getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.setTotalPageCount(data.totalCount);
        this.props.toggleIsLoading(false);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.props.toggleIsLoading(true);
    usersAPI.getUsers(currentPage, this.props.pageSize).then((data) => {
      this.props.setUsers(data.items);
      this.props.toggleIsLoading(false);
    });
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
  unfollow,
  follow,
  setUsers,
  setTotalPageCount,
  setCurrentPage,
  toggleIsLoading,
})(UsersContainer);
