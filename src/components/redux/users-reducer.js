const SET_USERS = "SET_USERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_TOTAL_PAGE_COUNT = "SET_TOTAL_PAGE_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";

let initialState = {
  users: [],
  totalPageCount: 0,
  pageSize: 100,
  currentPage: 1,
  isLoading: false,
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
    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.toggleIsLoading,
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
    default:
      return state;
  }
};

export const setUsers = (users) => ({ type: SET_USERS, users });
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const toggleIsLoading = (toggleIsLoading) => ({
  type: TOGGLE_IS_LOADING,
  toggleIsLoading,
});
export const setTotalPageCount = (totalPageCount) => ({
  type: SET_TOTAL_PAGE_COUNT,
  totalPageCount,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export default usersReducer;
