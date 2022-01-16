import classes from "./sidebar.module.css"
import {NavLink} from "react-router-dom"

const setActive = ({isActive}) => isActive ? `${classes.activeLink}` : `${classes.link}`;


let Sidebar = () => {
    return (
        <div className={classes.container}>
            <NavLink to="/" className={setActive} >profile</NavLink>
            <NavLink to="/messages" className={setActive} >messages</NavLink>
        </div>
    );
}

export default Sidebar;