import { Outlet, Link } from "react-router-dom";

function ApiPage() {
    return (
        <>
            <h3> API , Fetching Data , Pagination, infinite scroll and Rest </h3>

            <ul style={{ listStyle: "none", padding: 0 }}>
                <li><Link to="/api">Fetching Data</Link></li>
                <li><Link to="/api/pagination">Pagination</Link></li>
                <li><Link to="/api/loading">Loading</Link></li>

            </ul>

            <Outlet />
        </>
    )
}
export default ApiPage;