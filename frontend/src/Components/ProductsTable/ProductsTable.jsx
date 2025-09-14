//import React from 'react'
import "./ProductsTable.css";
import { useEffect , useState } from "react";
// mui imports:
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// end of mui imports

const ProductsTable = () => {
  // mui :

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
  // end of mui
  const [allProducts, setAllProducts] = useState([]);

  /*
  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
    .then((res) => { console.log(res);
        res.json();})
    .then((products) => setAllProducts(products));
    console.log(allProducts);
  },[]);
  */

  /* <table className='products-table'>
        <tr className='products-table-heading-tr'>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
        </tr>
        <tr>
            <td>
                <img src="/img/Meli.jpg" alt="product-image" className='products-table-img'/>
            </td>
            <td>t-shirt</td>
            <td>90000 $</td>
            <td>82</td>
            <td>
                <button className='products-table-btn'>Details</button>
                <button className='products-table-btn'>Remove</button>
                <button className='products-table-btn'>Edit</button>
            </td>
        </tr>
    </table> */
  return (
    <>
       <TableContainer className="table-container" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="head-row">
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">
                <button className="products-table-btn">Details</button>
                <button className="products-table-btn">Edit</button>
                <button className="products-table-btn">Delete</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};

export default ProductsTable;
