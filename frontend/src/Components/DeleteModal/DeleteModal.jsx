import React from "react";
import "./DeleteModal.css";

// React Bootstrap imports:
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// End of React Bootstrap imports

const DeleteModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
          Are you sure you want to remove this item?
        </Modal.Body>
        <Modal.Footer>
          <Button className="secondary-btn" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="primary-btn">Remove</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
