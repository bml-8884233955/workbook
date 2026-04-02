import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function MainLayout() {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>

            <Header />

            <div style={{ display: "flex", flex: 1 }}>
                <Sidebar />

                <div style={{ flex: 1, padding: "20px" }}>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default MainLayout;