import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  // const Product = ({product,handleAddToCart}) => { //props er value {product,handleAddToCart} tai props er jaygay egula boshano jabe
  // console.log(props.product);

  //   const {product,handleAddToCart} = props
  //   const { name, img, seller, price, ratings } = product;

  const { name, img, seller, price, ratings } = props.product;
  //   const {handleAddToCart} = props;
  // console.log(props); //props er modde handleAddToCart ase tai props teke ashbe

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
      <button
        onClick={() => props.handleAddToCart(props.product)}className="btn-cart">
        Add to Cart
         <FontAwesomeIcon className="btn-icon" icon={faShoppingCart}></FontAwesomeIcon>{" "}
      </button>
      {/* <button onClick={()=>handleAddToCart(product)} className="btn-cart">Add to Cart</button>  */}
      {/* directly handleAddToCart dibo na cz  ekane handleAddToCart ase props er bitore*/}
    </div>
  );
};

export default Product;
