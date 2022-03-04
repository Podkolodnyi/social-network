import classes from "./header.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? `${classes.activeLink}` : `${classes.link}`;

let Header = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.login}>
        {props.isAuth ? (
          props.login
        ) : (
          <NavLink to="/login" className={setActive}>
            login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
