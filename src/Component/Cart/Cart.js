import React from "react";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";


const Cart = (props) => {
  const { cart, clearCart, children } = props;
  console.log('cart', cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary in Cart</h4>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      <button onClick={clearCart} className="cart_btn">
        <p>Clear Cart</p>
        <FontAwesomeIcon className='cart_delete_icon' icon={faTrashAlt}></FontAwesomeIcon>{" "}
      </button>
      {children}
    </div>
  );
};

export default Cart;
//component e data patai props hisebe
