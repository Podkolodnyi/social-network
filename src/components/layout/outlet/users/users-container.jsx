import {
  follow,
  unfollow,
  setUsers,
  setTotalPageCount,
  setCurrentPage,
  toggleIsLoading,
} from "../../../../redux/users-reducer";
import { connect } from "react-redux";
import Users from "./users";
import React from "react";
import axios from "axios";
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
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          users={this.props.users}
          currentPage={this.props.currentPage}
          totalPageCount={this.props.totalPageCount}
          onPageChanged={this.onPageChanged}
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
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setTotalPageCount,
  setCurrentPage,
  toggleIsLoading,
})(UsersContainer);
