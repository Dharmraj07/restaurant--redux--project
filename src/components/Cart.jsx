// src/components/Cart.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItemFromCart,
} from "../features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice); // Select total price from the store
  const dispatch = useDispatch();

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>Price: {item.price}$</p>
              <p>Quantity: {item.quantity}</p>

              {/* Buttons to increase and decrease quantity */}
              <button onClick={() => dispatch(increaseQuantity(item.id))}>
                Increase
              </button>
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                disabled={item.quantity <= 1}
              >
                Decrease
              </button>

              {/* Remove button */}
              <button onClick={() => dispatch(removeItemFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}
          <h3>Total Price: {totalPrice}$</h3> {/* Display total price */}
        </div>
      )}
    </div>
  );
};

export default Cart;
