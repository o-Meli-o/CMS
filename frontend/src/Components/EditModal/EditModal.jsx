import React from "react";
import "./EditModal.css";

// React Bootstrap imports:
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// End of React Bootstrap imports

const EditModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="products-table-btn" onClick={handleShow}>
        Edit
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="edit-form-wrap">
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label className="edit-form-label">Image</Form.Label>
              <Form.Control type="file" accept="image/*" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Price</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Stock</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Sold</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Popularity</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Colors</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="secondary-btn"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button className="primary-btn">Edit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

/*          <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label className="edit-form-label">
                Example textarea
              </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group> 
*/

export default EditModal;
