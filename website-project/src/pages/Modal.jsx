import React, { useState } from "react";
import "./Modal.css";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <div className={`${props.isOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <i
        onClick={closeModal}
        className="close-icon fa fa-times-circle-o"
        aria-hidden="true"
      ></i>

      <div className="modal-content">{props.children}</div>
      
    </div>
  );
};

export default Modal;