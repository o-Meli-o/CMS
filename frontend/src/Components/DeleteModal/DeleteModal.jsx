import React from "react";
import "./DeleteModal.css";

// React Bootstrap imports:
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// End of React Bootstrap imports

const DeleteModal = ({ product , update }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeProduct = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://meliadmin-cms-default-rtdb.firebaseio.com/products/${product.id}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      console.log("✅ Product deleted:", product.id);

      // Refresh product list in parent
      update();
      handleClose();
    } catch (error) {
      console.error("❌ Error deleting product:", error);
    }

  }

  return (
    <>
      <button className="products-table-btn" onClick={handleShow}>Remove</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Remove</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove this item? <b>{product.name}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button className="secondary-btn" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="primary-btn" onClick={(event) => removeProduct(event)}>Remove</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
