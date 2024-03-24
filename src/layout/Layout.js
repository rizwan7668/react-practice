import Header from "./../header/Header";
import Footer from "./../footer/Footer";
import Sidebar from "./../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <Header />

            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-8">
                    <Outlet />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Layout;