// src/components/MenuItem.js
import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cartSlice";
import { togglePortal } from "../features/portalSlice"; // Import togglePortal action

const MenuItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(item)); // Add the item to the cart
    dispatch(togglePortal()); // Open the cart modal
  };

  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p>{item.price}$</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default MenuItem;
