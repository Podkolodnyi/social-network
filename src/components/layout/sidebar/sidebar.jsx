import classes from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }) =>
  isActive ? `${classes.activeLink}` : `${classes.link}`;

let Sidebar = (props) => {
  return (
    <div className={classes.container}>
      <NavLink to={`/profile/${props.homeId}`} className={setActive}>
        profile
      </NavLink>
      <NavLink to="/messages" className={setActive}>
        messages
      </NavLink>
      <NavLink to="/users" className={setActive}>
        users
      </NavLink>
    </div>
  );
};

export default Sidebar;
