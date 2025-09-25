import React from "react";
import "./EditModal.css";

// React Bootstrap imports:
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
// End of React Bootstrap imports

const EditModal = ({ product, update }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [productNewImage, setProductNewImage] = useState(product.image);
  const [productNewName, setProductNewName] = useState(product.name);
  const [productNewPrice, setProductNewPrice] = useState(product.price);
  const [productNewStock, setProductNewStock] = useState(product.stock);
  const [productNewSold, setProductNewSold] = useState(product.sold);
  const [productNewPopularity, setProductNewPopularity] = useState(product.popularity);
  const [productNewColors, setProductNewColors] = useState(product.colors);

  const updateProductInfo = async (event) => {
    event.preventDefault();

    const productNewInfo = {
      image: productNewImage,
      name: productNewName,
      price: productNewPrice,
      stock: productNewStock,
      sold: productNewSold,
      popularity: productNewPopularity,
      colors: productNewColors,
    };

    try {
      const response = await fetch(
        `https://meliadmin-cms-default-rtdb.firebaseio.com/products/${product.id}.json`,
        {
          method: "PATCH", // use PATCH to update only given fields
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productNewInfo),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      console.log("Product updated!");
      update(); // refresh parent list
      handleClose();
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

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
              <Form.Control
                type="file"
                accept="image/*"
                onChange={(event) => {
                  const file = event.target.files[0]; // get the first file
                  if (file) {
                    setProductNewImage(file);
                  }
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={productNewName}
                onChange={(event) => setProductNewName(event.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                value={productNewPrice}
                onChange={(event) => setProductNewPrice(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Stock"
                value={productNewStock}
                onChange={(event) => setProductNewStock(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Sold</Form.Label>
              <Form.Control
                type="number"
                placeholder="Sold"
                value={productNewSold}
                onChange={(event) => setProductNewSold(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Popularity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Popularity"
                value={productNewPopularity}
                onChange={(event) =>
                  setProductNewPopularity(event.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="edit-form-label">Colors</Form.Label>
              <Form.Control
                type="text"
                placeholder="Colors"
                value={productNewColors}
                onChange={(event) => setProductNewColors(event.target.value)}
              />
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
          <Button
            className="primary-btn"
            onClick={(event) => updateProductInfo(event)}
          >
            Edit
          </Button>
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
