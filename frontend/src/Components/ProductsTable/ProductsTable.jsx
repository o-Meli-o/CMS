//import React from "react";
import "./ProductsTable.css";
import { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import ErrorBox from "../ErrorBox/ErrorBox";

// mui imports:
import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
// end of mui imports

const ProductsTable = () => {
  // mui :
  const columns = [
    { id: "image", label: "Image", minWidth: 150, align: "center" },
    { id: "name", label: "Name", minWidth: 150, align: "center" },
    { id: "price", label: "Price", minWidth: 150, align: "center" },
    { id: "stock", label: "Stock", minWidth: 150, align: "center" },
    { id: "actions", label: "Actions", minWidth: 150, align: "center" },

    /*
    { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
    {
      id: "population",
      label: "Population",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "size",
      label: "Size\u00a0(km\u00b2)",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "density",
      label: "Density",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
*/
  ];
  const [allProducts, setAllProducts] = useState([]);

  /*
  useEffect(async () => {
    await fetch("https://meliadmin-cms-default-rtdb.firebaseio.com/products.json")
      .then((res) => res.json())
      .then((products) => { console.log("Fetched products: ", Object.entries(products));
        setAllProducts(Object.entries(products))});
        //.catch((err) => console.error("Fetch error: ", err));
  }, []);
  */

useEffect(() => {
  const fetchProducts = async () => {
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

  fetchProducts();
}, []);


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



  function createData(image, name, price, stock, actions) {
    //const density = population / size;
    return { image, name, price, stock, actions };
  }

  const rows = allProducts.map((product) => ({
  image: <img src={`https://raw.githubusercontent.com/o-Meli-o/CMS/main/frontend/public/img/${product.image}`} alt={product.name} width="50" />,
  name: product.name,
  price: product.price,
  stock: product.stock,
  actions: (
    <>
      <DetailsModal product={product}/>
        <EditModal product={product} update={getAllProducts}/>
        <DeleteModal product={product} update={getAllProducts}/>
    </>
  ),
}));

/*
  const rows = allProducts.map((product) => ({
    image: product[1].image,
    name: product[1].name,
    price: product[1].price,
    stock: product[1].stock,
    actions: (
      <>
        <DetailsModal />
        <EditModal />
        <DeleteModal />
      </>
    ),
  }));
  */

  /*
  const rows = [
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "India",
      1324171354,
      3287263
    ),
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "China",
      1403500365,
      9596961
    ),
    createData(<img src="./img/Meli.jpg" alt="" />, "Italy", 60483973, 301340),
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "United States",
      327167434,
      9833520
    ),
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "Canada",
      37602103,
      9984670
    ),
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "Australia",
      25475400,
      7692024
    ),
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "Germany",
      83019200,
      357578
    ),
    createData(<img src="./img/Meli.jpg" alt="" />, "Ireland", 4857000, 70273),
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "Mexico",
      126577691,
      1972550
    ),
    createData(<img src="./img/Meli.jpg" alt="" />, "Japan", 126317000, 377973),
    createData(<img src="./img/Meli.jpg" alt="" />, "France", 67022000, 640679),
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "United Kingdom",
      67545757,
      242495
    ),
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "Russia",
      146793744,
      17098246
    ),
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "Nigeria",
      200962417,
      923768
    ),
    createData(
      <img src="./img/Meli.jpg" alt="" />,
      "Brazil",
      210147125,
      8515767
    ),
  ];
*/

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  // end of mui

  //const [showDeleteModal, setShowDeleteModal] = useState(false);

  /* <table className="products-table">
        <tr className="products-table-heading-tr">
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
        <tr className="products-table-tr">
          <td>
            <img
              src="/img/Meli.jpg"
              alt="product-image"
              className="products-table-img"
            />
          </td>
          <td>t-shirt</td>
          <td>90000 $</td>
          <td>82</td>
          <td>
            <button className="products-table-btn">Details</button>
            <button className="products-table-btn">Remove</button>
            <button className="products-table-btn">Edit</button>
          </td>
        </tr>
      </table> */
  return (
    <>
      {allProducts.length ? (
        <>
          <h1 className="product-title">Products:</h1>
          <div className="table-container">
            <Paper
              sx={{
                width: "100%",
                overflow: "hidden",
                marginTop: "20px",
                borderRadius: "15px",
              }}
            >
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            minWidth: column.minWidth,
                            fontWeight: "bold",
                            backgroundColor: "#F5B488",
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => {
                        return (
                          <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.code}
                          >
                            {columns.map((column) => {
                              /*
                              if (column.id === "actions") {
                                return (
                                  <TableCell key={column.id} align="center">
                                    <DetailsModal />
                                    <EditModal />
                                    <DeleteModal />
                                  </TableCell>
                                );
                              }
                                */

                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === "number"
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        );
                      })}
                  </TableBody>
                </Table>
              </TableContainer>
              <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>
          </div>
        </>
      ) : (
        <ErrorBox message="No Products Found!" />
      )}
    </>
  );
}

export default ProductsTable;
