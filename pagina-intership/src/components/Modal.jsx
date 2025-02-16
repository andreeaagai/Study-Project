import React, { useState, useEffect } from "react";
import "./Modal.css";

const Modal = ({ onClose, isModalOpen, notification }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    setIsOpen(isModalOpen);
  }, [isModalOpen]);

  return (
    <div className={`${isOpen ? "modal-wrapper" : "modal-hidden"}`}>
        <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        {notification && (
          <>
            <h3>{notification.title}</h3>
            <p>{notification.message}</p>
          </>
        )}
        </div>
    </div>
  );
};

export default Modal;
