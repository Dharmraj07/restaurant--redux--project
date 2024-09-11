// src/components/Header.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePortal } from "../features/portalSlice";

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const dispatch = useDispatch();

  return (
    <header>
      <h1>Restaurant</h1>
      <div>
        <button onClick={() => dispatch(togglePortal())}>
          {" "}
          Cart: {totalQuantity} items{" "}
        </button>
      </div>
    </header>
  );
};

export default Header;
