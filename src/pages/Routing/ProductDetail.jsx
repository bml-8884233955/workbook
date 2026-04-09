import { useParams } from "react-router-dom";


const ProductDetail = () => {
    const { id } = useParams();

    const products = [
        { id: 1, name: "iPhone", desc: "Apple mobile", price: "$999" },
        { id: 2, name: "Laptop", desc: "Powerful device", price: "$1200" },
        { id: 3, name: "Headphones", desc: "Noise cancelling", price: "$199" },
    ];

    const product = products.find((p) => p.id === Number(id));
    if (!product) return <h2> Product Not Found</h2>

    return (
        <>
            <p>Product Detail Page</p>
            <div>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <h4>Price: {product.price}</h4>
            </div>
        </>
    )
}

export default ProductDetail;