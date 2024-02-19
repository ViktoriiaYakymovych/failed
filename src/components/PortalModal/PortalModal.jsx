import React, { useState } from "react";
import { createPortal } from "react-dom";
import { FaPlus } from "react-icons/fa";
import Modal from "../Modal/Modal";

const PortalModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>
        <FaPlus /> Add trip
      </button>
      {isModalOpen &&
        createPortal(
          <Modal onClose={() => setIsModalOpen(false)} />,
          document.body
        )}
    </div>
  );
};

export default PortalModal;
