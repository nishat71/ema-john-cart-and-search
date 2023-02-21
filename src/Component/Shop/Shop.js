import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";

import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // console.log('Products load before fetch')
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        // console.log('Products loaded');
      });
  }, []);


  // useEffect(()=>{
  //   console.log('Local storage first line',products)  // ekane products er data ekno load hoy nai
  //   const storedCart = getStoredCart();
  //   // console.log(storedCart);
  //   const savedCart = []; //new array declare
  //   for(const id in storedCart){ //object teke id gula pacchi
  //     // console.log(id);
  //     const addedProduct = products.find(product => product.id === id);
  //     if(addedProduct){
  //       const quantity = storedCart[id]; //storedCart er modde id patay dibo
  //       addedProduct.quantity= quantity; //addedProduct er quantity te quantity set krsi
  //       // console.log(addedProduct);
  //       savedCart.push(addedProduct);
  //     }
  //   }
  //   setCart(savedCart); //cart state er modde setCart boshay dilm new value hisebe savedCart array
  //   // console.log('Local storage finished');
  // },[products]);//dependecny injection



  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);




  // //event handler
  // const handleAddToCart = (selectedProduct) => {
  //   console.log(selectedProduct);
  //   let newCart = [];
  //   const exists = cart.find(product => product.id === selectedProduct.id)
  //   if (!exists) {
  //     selectedProduct.quantity = 1;
  //     newCart = [...cart, selectedProduct]; //jodi kuno item cart e na take, brand new item hoy tkn quantity 1 and new cart hobe cart er sb item plus new selected products
  //   }
  //   else {
  //     const rest = cart.filter(product => product.id !== selectedProduct.id);  //j product add krbo seta bade rest gula ber krbo
  //     exists.quantity = exists.quantity + 1;
  //     newCart = [...rest, exists];
  //     //j product add krbo seta bade rest gula ber krbo
  //   }
  //   // Do not do this : cart.push(product);
  //   // const newCart = [...cart, selectedProduct];
  //   setCart(newCart);
  //   addToDb(selectedProduct.id);
  //   //newCart nam e variable declare krlm ja age cart er modde joto item ase sb copy krbe, then akta parameter hisebe new product add krbo
  //   // new product add korar por new  cart peye gesi tai setCart cll kore newCart pass kore dibo
  // }



  //event handler
  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find(product => product.id === selectedProduct.id)
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  }



  // //event handler
  // const handleAddToCart = (product) => {
  //   console.log(product);
  //     // Do not do this : cart.push(product);
  //     const newCart = [...cart, product];
  //   setCart(newCart);
  //   addToDb(product.id);
  // }




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
