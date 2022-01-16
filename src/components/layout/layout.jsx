import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import {Outlet} from "react-router-dom";
import classes from "./layout.module.css";
import Footer from "./footer/footer";

let Layout = () => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <Header />
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
}

export default Layout;