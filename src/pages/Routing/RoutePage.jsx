import { Outlet } from "react-router-dom";

function RoutePage() {
    return (
        <>
            <p>Route Page</p>

            <Outlet />
        </>
    )
}

export default RoutePage;