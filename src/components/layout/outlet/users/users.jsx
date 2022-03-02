import classes from "./users.module.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let Pages = [];
  for (let i = 1; i <= props.totalPageCount; i++) {
    Pages.push(i);
  }

  return (
    <div>
      <div>
        {Pages.map((elem) => {
          return (
            <span
              onClick={() => {
                props.onPageChanged(elem);
              }}
              className={props.currentPage === elem && classes.pageNumActive}
            >
              {elem}
            </span>
          );
        })}
      </div>
      {props.users.map((elem) => (
        <div key={elem.id}>
          <div className={classes.container}>
            <div className={classes.userData}>
              <div className={classes.user}>
                <NavLink to={"/profile/" + elem.id}>
                  <img
                    className={classes.avatar}
                    src={elem.photos.small}
                    alt="AVA"
                  />
                </NavLink>
                <div className={classes.name}>{elem.name}</div>
              </div>
              <div className={classes.location}>
                <div className={classes.country}>country</div>
                <div className={classes.town}>town</div>
              </div>
            </div>
            <div className={classes.userStatus}>{elem.status}</div>
            <div className={classes.follow}>
              {elem.followed === true ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === elem.id
                  )}
                  onClick={() => {
                    props.unfollow(elem.id);
                  }}
                >
                  unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === elem.id
                  )}
                  onClick={() => {
                    props.follow(elem.id);
                  }}
                >
                  follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
