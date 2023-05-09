import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Orders = () => {
  const { products, initialCart } = useLoaderData();  //{ products: products, initialCart: initialCart }
  const [cart, setCart] = useState(initialCart);

  return (
    <div>
      <h2>This is Orders {products.length}</h2>
      <h3>InitialCart {cart.length}</h3>
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