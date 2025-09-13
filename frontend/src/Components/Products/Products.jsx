import React from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

const Products = () => {
  return (
    <>
      <AddNewProduct />
      <ErrorBox message="No Products Found!" />
      <ProductsTable/>
    </>
  );
};

export default Products;
