import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { selectCart } from "../../features/cart/cartSelectors";

export const useCart = () => {

    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    return {
        cart,
        add: (item) => dispatch(addToCart(item)),
    }
};