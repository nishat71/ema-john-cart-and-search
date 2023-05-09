import React from 'react'

const ProductDemo = (props) => {
    // console.log(props);
    const { id, img, name, price, quantity, seller, category, ratings } = props.product;

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <p className="product-name">{name}</p>
                <p>Price: ${price}</p>
                <p>
                    <small>Manufacturer: {seller}</small>
                </p>
                <p>
                    <small>Rating: {ratings}starts</small>
                </p>
            </div>
        <button onClick={()=>props.handleAddToCart(props.product)}  className="btn-cart">Add to Cart</button>
        </div>
    )
}

export default ProductDemo