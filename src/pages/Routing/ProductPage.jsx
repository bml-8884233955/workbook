import ProductList from "../../components/ProductList";

import { useNavigate } from "react-router-dom";
function ProductPage() {
    const navigate = useNavigate();

    const products = [
        { id: 1, name: "iPhone", desc: "Apple mobile" },
        { id: 2, name: "Laptop", desc: "Powerful device" },
        { id: 3, name: "Headphones", desc: "Noise cancelling" },
    ];
    return (
        <>
            <h2>Product Page</h2>

            {products.map((product) => (
                <ProductList
                    key={product.id}
                    title={product.name}
                    description={product.desc}
                    productClicked={() => navigate(`/routePage/product/${product.id}`)}
                />
            ))}


        </>
    )
}

export default ProductPage;