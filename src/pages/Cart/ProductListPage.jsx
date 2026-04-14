import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";


const ProductListPage = () => {
    const dispatch = useDispatch();
    const products = [
        { id: 1, name: "iphone", price: 1000 },
        { id: 3, name: "iphone", price: 1000 },
    ];

    return (
        <>
            <h3>Product Page</h3>

            {products.map(product => (
                <div className="flex items-center gap-4 p-4 border rounded" key={product.id}>
                    <p className="text-gray-800">{product.name}</p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition" onClick={() => dispatch(addItem(product))}>
                        Add to Cart
                    </button>
                </div>

            ))}


            <h3>Add to cart process flow</h3>
            <p> Component → dispatch(action) → reducer → store updated → UI re-renders </p>
        </>
    );
}

export default ProductListPage;