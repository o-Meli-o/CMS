import React, { useState } from "react";
import "./AddNewProduct.css";


const AddNewProduct = () => {
  const [newProductImage, setNewProductImage] = useState();
  const [newProductName, setNewProductName] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductStock, setNewProductStock] = useState("");
  const [newProductSold, setNewProductSold] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

  const emptyInputs = () => {
    setNewProductImage(null);
    setNewProductName("");
    setNewProductPrice("");
    setNewProductStock("");
    setNewProductSold("");
    setNewProductPopularity("");
    setNewProductColors("");
  };

  const newProductInfo = {
    image: newProductImage,
    name: newProductName,
    price: newProductPrice,
    stock: newProductStock,
    sold: newProductSold,
    popularity: newProductPopularity,
    colors: newProductColors,
  };

  const addNewProduct = ({ getAllProducts }) => {
    event.preventDefault();

    fetch("https://meliadmin-cms-default-rtdb.firebaseio.com/products.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });

    emptyInputs();
    getAllProducts();
  };

  return (
    <div className="product-main">
      <h1 className="product-title">Add a New Product:</h1>

      <form action="#" className="add-products-form">
        <div className="add-product-form-wrap">
          <div className="add-product-form-group">
            <input
              type="file"
              accept="image/*"
              placeholder="Image"
              className="add-products-input"
              onChange={(event) =>
                //setNewProductImage(event.target.value)
                {
                  const file = event.target.files[0]; // get the first file
                  if (file) {
                    console.log("Selected file name:", file.name); // <-- filename only
                    setNewProductImage(file.name); // store filename in state
                  }
                }
              }
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="Name"
              className="add-products-input"
              value={newProductName}
              onChange={(event) => setNewProductName(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="number"
              placeholder="Price"
              className="add-products-input"
              value={newProductPrice}
              onChange={(event) => setNewProductPrice(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="number"
              placeholder="Stock"
              className="add-products-input"
              value={newProductStock}
              onChange={(event) => setNewProductStock(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="number"
              placeholder="Sold"
              className="add-products-input"
              value={newProductSold}
              onChange={(event) => setNewProductSold(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="Popularity"
              className="add-products-input"
              value={newProductPopularity}
              onChange={(event) => setNewProductPopularity(event.target.value)}
            />
          </div>
          <div className="add-product-form-group">
            <input
              type="text"
              placeholder="Colors"
              className="add-products-input"
              value={newProductColors}
              onChange={(event) => setNewProductColors(event.target.value)}
            />
          </div>
        </div>
        <button className="add-products-submit" onClick={addNewProduct}>
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddNewProduct;
