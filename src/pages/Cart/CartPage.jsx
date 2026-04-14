import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";
const CartPage = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);


    return (
        <>
            <h2> Cart Page</h2>

            <p> Total Items: {cartItems.length}</p>

            {cartItems.map(item => {
                <div key={item.id}>
                    {item.name}
                    <button onClick={() => dispatch(removeItem(item.id))}>
                        Remove
                    </button>
                </div>
            })}
        </>
    )
}

export default CartPage;