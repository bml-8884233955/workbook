import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const ProductDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleBack = () => {
        if (window.history.length > 1) {
            navigate(-1);
        } else {
            navigate("/");
        }
    };

    const products = [
        { id: 1, name: "iPhone", desc: "Apple mobile", price: "$999" },
        { id: 2, name: "Laptop", desc: "Powerful device", price: "$1200" },
        { id: 3, name: "Headphones", desc: "Noise cancelling", price: "$199" },
    ];

    const product = products.find((p) => p.id === Number(id));
    if (!product) return <h2> Product Not Found</h2>

    return (
        <>
            <div className=" flex justify-between items-center">
                <p>Product Detail Page</p>
                <button onClick={handleBack} className="flex items-center gap-2 text-gray-700 font-bold hover:text-black transition">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5">
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-blue-600">Back</span>
                </button>
            </div>

            <div>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <h4>Price: {product.price}</h4>
            </div>
        </>
    )
}

export default ProductDetail;