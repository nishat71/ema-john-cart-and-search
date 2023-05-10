import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
  const { products, initialCart } = useLoaderData();  //{ products: products, initialCart: initialCart }
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  }

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  }


  return (
    <div className="shop-container">
      <div className="orders-container">
        {
          cart.map((product) => <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          />
          )}
        {
          cart.length === 0 && <h2>No items for Review. Please <Link to="/">shop here</Link></h2>
        }
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCart={clearCart}></Cart>
      </div>
    </div>
  )
}

export default Orders






//useLoaderData object return krtese tai eke access krte hole distructuring kore use krte hobe

/*
ekane state declare krbo . sudu initialCart diye kaj krtesi na cz state declare krle cart teke kuno item remove/delete kore dite pari
cart er item remove/delete krte jodi na hoto, jodi sudu data show krto taile state lagto na
user k kuno jinish change krte allow krle state lagbe
*/