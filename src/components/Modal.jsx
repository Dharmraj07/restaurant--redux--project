// src/components/Modal.js
import React from "react";
import ReactDOM, { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { togglePortal } from "../features/portalSlice";
import Cart from "./Cart"; // Import Cart to show in the modal

const Modal = () => {
  const isOpen = useSelector((state) => state.portal.isOpen);
  const dispatch = useDispatch();

  if (!isOpen) return null; // Don't render anything if the modal is closed

  return createPortal(
    <div className="modal">
      <div className="modal-content">
        <h2>Your Cart</h2>
        <Cart /> {/* Render the Cart component inside the modal */}
        <button onClick={() => dispatch(togglePortal())}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root") // Render the modal inside the modal-root
  );
};

export default Modal;
