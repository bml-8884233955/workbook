import { useState } from "react";

const Cart = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Add to Cart</button>

            <p> Total Items: {count} </p>
        </>
    )
}

export default Cart;