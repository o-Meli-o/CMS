import React from "react";
import "./DetailsModal.css";

// React Bootstrap imports:
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// End of React Bootstrap imports

const DetailsModal = ({product}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="products-table-btn" onClick={handleShow}>
        Details
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
        //dialogClassName="modal-80w"
      >
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="details-modal-body">
          <table className="details-table">
            <thead>
              <tr>
                <td>Image</td>
                <td>Name</td>
                <td>Price</td>
                <td>Stock</td>
                <td>Sold</td>
                <td>Popularity</td>
                <td>Colors</td>
              </tr>
            </thead>
            <tbody>
                <tr>
                <td><img src={`https://raw.githubusercontent.com/o-Meli-o/CMS/main/frontend/public/img/${product.image}`} alt={product.name} /></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>{product.sold}</td>
                <td>{product.popularity}</td>
                <td>{product.colors}</td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="secondary-btn"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailsModal;
