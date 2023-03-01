import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./layout.module.css";
import Footer from "./footer/footer";
import HeaderContainer from "./header/header-container";
import SidebarContainer from "./sidebar/sidebar-container";

let Layout = React.memo(() => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <HeaderContainer />
      </div>
      <div className={classes.sidebar}>
        <SidebarContainer />
      </div>
      <main className={classes.main}>
        <Outlet />
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
});

export default Layout;
