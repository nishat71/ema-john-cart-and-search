import React, { useState } from 'react'
import Header from '../Component/Header/Header';
import { Outlet } from 'react-router-dom';
// import Cart from '../Component/Cart/Cart';



const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default Main


  // <>
  //   <Header></Header>

  //   <div className="shop-container">
  //     <div className="products-container">
  //       <Outlet></Outlet>
  //     </div>
  //     <div className="cart-container">
  //       <Cart cart={cart}></Cart>
  //     </div>
  //   </div>
  // </ >