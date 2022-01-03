import Header from "./header/header";
import Sidebar from "./sidebar/sidebar";
import {Outlet} from "react-router-dom";

let Layout = () => {
    return (
        <main className="container">
    <Header />
    <Sidebar />
    <Outlet />
        </main>
    );
}

export default Layout;