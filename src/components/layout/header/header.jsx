import classes from "./header.module.css";

let Header = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.login}>
        {props.isAuth ? props.login : "login"}
      </div>
    </div>
  );
};

export default Header;
