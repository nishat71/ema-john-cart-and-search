import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
    // Do not do this : cart.push(product);
    const newCart = [...cart, product];
    setCart(newCart);
    //newCart nam e variable declare krlm ja age cart er modde joto item ase sb copy krbe, then akta parameter hisebe new product add krbo
    // new product add korar por new  cart peye gesi tai setCart cll kore newCart pass kore dibo
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {/* <h3>This is for products : {products.length}</h3> */}
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart} //event handler k props hisebe product er kase patacchi
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart> 
        {/* cart name e props pataysi jar value {cart} */}
      </div>
    </div>
  );
};

export default Shop;

/* .products-container+.cart-container */
