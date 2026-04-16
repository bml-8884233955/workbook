import axios from "axios";
import { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     axios.get("/api/products").then((res) => {
    //         setProducts(res.data);
    //     })
    // })

    return (
        <>
            <p> Product List Page</p>
            {products.map((p) => (
                <p key={p.id}>{p.name}</p>
            ))}
        </>
    )
}

export default ProductList;