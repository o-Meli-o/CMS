import React from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

const Products = () => {
  return (
    <>
    <ProductsTable/>
      <AddNewProduct />
      <ErrorBox message="No Products Found!" />
      
    </>
  );
};

export default Products;
