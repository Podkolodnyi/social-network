import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import {Outlet} from "react-router-dom";
import "./layout.css"

let Layout = () => {
    return (
        <div className="container">
            <div className="header">
    <Header />
            </div>
            <div className="sidebar">
    <Sidebar />
            </div>
            <main className="main">
    <Outlet />
            </main>
        </div>
    );
}

export default Layout;