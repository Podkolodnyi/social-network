import classes from "./dialog.module.css"
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? `${classes.activeLink}` : `${classes.link}`;

const Dialog = (props) => {
    return (
      <div className={classes.container}>
              <NavLink to={`/message/${props.id}`} className={setActive}>{props.name}</NavLink>
      </div>
    );
}

export default Dialog;