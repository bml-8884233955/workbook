function ProductList({ title, description, productClicked }) {
    return (
        <>

            <div className="productList" onClick={productClicked}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>


        </>
    )
}

export default ProductList;