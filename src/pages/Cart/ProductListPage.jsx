import { useDispatch } from "react-redux";
import { addItem } from "../../features/cart/cartSlice";
import { useEffect, useMemo, useState } from "react";
import { useCallback } from "react";


function debounce(fn, delay) {
    let timer;
    const debounced = (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
    debounced.cancel = () => clearTimeout(timer);
    return debounced;
}

const ProductListPage = () => {
    const dispatch = useDispatch();
    const products = [
        { id: 1, name: "iphone", price: 1000 },
        { id: 2, name: "samsung", price: 2000 },
        { id: 3, name: "Motorola", price: 5000 },
        { id: 4, name: "Huwaei", price: 1500 },
    ];

    const [inpValue, setInputValue] = useState("");
    const [displayedProducts, setDisplayedProducts] = useState(products);



    const debounceSearch = useMemo(() => {
        return debounce((val) => {
            const result = products.filter(p =>
                p.name.toLowerCase().includes(val.toLowerCase())
            );
            setDisplayedProducts(result);
        }, 200)
    }, []);

    useEffect(() => {

        return () => debounceSearch.cancel();
    }, [debounceSearch])

    const handleChange = useCallback((e) => {
        const val = e.target.value;
        setInputValue(val);

        debounceSearch(val);
    }, [debounceSearch]);



    return (
        <>
            <h3>Product Page</h3>
            <h3> Product search with debouncing</h3>

            <input
                type="text"
                value={inpValue}
                onChange={handleChange}
                placeholder="Type to search..."
            />
            {displayedProducts.length === 0 ? (
                <p>No Products found</p>
            ) : (
                displayedProducts.map((product) => (
                    <div className="flex items-center gap-4 p-4 border rounded" key={product.id}>
                        <p className="text-gray-800">{product.name}</p>
                        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition" onClick={() => dispatch(addItem(product))}>
                            Add to Cart
                        </button>
                    </div>

                ))
            )}

            <h3>Add to cart process flow</h3>
            <p> Component → dispatch(action) → Redux Slice → Store → UI updates </p>
        </>
    );
}

export default ProductListPage;