import Sidebar from "./sidebar/sidebar";
import { Outlet } from "react-router-dom";
import classes from "./layout.module.css";
import Footer from "./footer/footer";
import HeaderContainer from "./header/header-container";

let Layout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <HeaderContainer />
      </div>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <main className={classes.main}>
        <Outlet />
      </main>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
