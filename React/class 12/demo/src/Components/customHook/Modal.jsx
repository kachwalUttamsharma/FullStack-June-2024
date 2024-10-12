import React from "react";
import "./Modal.css";

const Modal = ({ isVisible, hide }) => {
  if (!isVisible) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2 style={{ color: "black" }}>Modal Title</h2>
        <p style={{ color: "black" }}>This is a modal.</p>
        <button onClick={hide}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
