import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../../features/cart/cartSlice";
const CartPage = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    console.log(cartItems);


    return (
        <>
            <h2> Cart Page</h2>

            <p> Total Items: {cartItems.length}</p>

            {cartItems.map(item => (
                <div className="flex item-center gap-4 p-4" key={item.id} >
                    <p className="text-gray-800"> {item.name}</p>
                    < button className="bg-green-600 text-white px-2 py-2 rounded" onClick={() => dispatch(removeItem(item.id))}>
                        Remove
                    </button >
                </div >
            ))}
        </>
    )
}

export default CartPage;