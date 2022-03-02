import { usersAPI } from "../api/api";

const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_TOTAL_PAGE_COUNT = "SET_TOTAL_PAGE_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS";

let initialState = {
  users: [],
  totalPageCount: 0,
  pageSize: 100,
  currentPage: 1,
  isLoading: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_TOTAL_PAGE_COUNT:
      return {
        ...state,
        totalPageCount: Math.ceil(action.totalPageCount / state.pageSize),
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((elem) => {
          if (elem.id === action.userId) {
            return { ...elem, followed: true };
          } else {
            return elem;
          }
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((elem) => {
          if (elem.id === action.userId) {
            return { ...elem, followed: false };
          } else {
            return elem;
          }
        }),
      };
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.toggleIsLoading,
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isInProgress
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: SET_USERS, users });
export const followAccept = (userId) => ({ type: FOLLOW, userId });
export const unfollowAccept = (userId) => ({ type: UNFOLLOW, userId });
export const toggleIsLoading = (toggleIsLoading) => ({
  type: TOGGLE_IS_LOADING,
  toggleIsLoading,
});
export const toggleFollowingInProgress = (isInProgress, userId) => ({
  type: TOGGLE_FOLLOWING_IN_PROGRESS,
  isInProgress,
  userId,
});
export const setTotalPageCount = (totalPageCount) => ({
  type: SET_TOTAL_PAGE_COUNT,
  totalPageCount,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowAccept(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};
export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followAccept(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
