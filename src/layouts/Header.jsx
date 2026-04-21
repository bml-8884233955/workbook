import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/user/userSlice";
import styles from "./Header.module.css";

function Header() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const cartItems = useSelector(state => state.cart.items);
    console.log(cartItems);
    return (
        <div className={styles.container} style={{ background: "#282c34", color: "white", padding: "10px" }}>
            <div className={styles.logo} >
                <h2 className="text-white">ReactLab 🚀</h2>
            </div>
            <div className=" flex items-center gap-4">
                <div >
                    {
                        user.isLoggedIn ? (<><p className="text-xl text-white">Welocome, <span className="font-semibold">{user.name}</span></p>
                            <button className={styles.loginBtn} onClick={() => dispatch(logout())}>Logout</button> </>)
                            : (<button className={styles.loginBtn} onClick={() => dispatch(login("Bimal"))}>Login</button>)
                    }
                </div>
                <div>
                    <p className="text-white"> Total Items: <span className="font-semibold">{cartItems.length}</span></p>
                </div>
            </div>


        </div>
    );

}

export default Header;