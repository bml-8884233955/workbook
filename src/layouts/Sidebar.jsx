import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div style={{ width: "200px", background: "#f4f4f4", padding: "10px" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hooks">Hooks</Link></li>
                <li><Link to="/props">Props</Link></li>
                <li><Link to="/forms">Forms</Link></li>
                <li><Link to="/style">Style</Link></li>
                <li><Link to="/routePage">Route</Link></li>
                <li><Link to="/api">API</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/testing">Testing</Link></li>

            </ul>
        </div>
    );
}

export default Sidebar;