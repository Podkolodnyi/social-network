import { createSelector } from "reselect";

const getUsersState = (state) => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersState, (users) => {
  return users;
});

export const getTotalPageCount = (state) => {
  return state.usersPage.totalPageCount;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize;
};

export const getCurrentPage = (state) => {
  return state.usersPage.currentPage;
};

export const getIsLoading = (state) => {
  return state.usersPage.isLoading;
};

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress;
};
