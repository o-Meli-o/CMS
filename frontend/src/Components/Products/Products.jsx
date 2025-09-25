import React, { useEffect, useState } from "react";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

const Products = () => {


  const [allProducts, setAllProducts] = useState({});

  const getAllProducts = async () => {
    try {
      const res = await fetch(
        "https://meliadmin-cms-default-rtdb.firebaseio.com/products.json"
      );
      const products = await res.json();

      if (products) {
        // Convert Firebase object into an array
        const entries = Object.entries(products).map(([id, product]) => ({
          id,          // Firebase unique key
          ...product,  // spread all fields (image, name, price, stock, sold, popularity, colors, etc.)
        }));

        setAllProducts(entries);
        console.log("All Products:", entries);
      } else {
        setAllProducts([]); // in case products is null
      }
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    getAllProducts();
  } ,[]);

  return (
    <>
    <ProductsTable/>
      <AddNewProduct getAllProducts={getAllProducts}/>
      
      
    </>
  );
};

export default Products;
