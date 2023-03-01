import React from "react";
import classes from "./footer.module.css";

const Footer = React.memo(() => {
  return <div className={classes.footer}>"footer"</div>;
});

export default Footer;
