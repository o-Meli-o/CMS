import React from 'react'
import "./AddNewProduct.css";

const AddNewProduct = () => {
  return (
    <div className='product-main'>
      <h1 className='product-title'>Add a New Product:</h1>

      <form action="#" className='add-products-form'>
        <div className='add-product-form-wrap'>
            <div className='add-product-form-group'>
                <input type="text" placeholder='Name' className='add-products-input'/>
            </div>
            <div className='add-product-form-group'>
                <input type="text" placeholder='Price' className='add-products-input'/>
            </div>
            <div className='add-product-form-group'>
                <input type="text" placeholder='Stock' className='add-products-input'/>
            </div>
            <div className='add-product-form-group'>
                <input type="text" placeholder='Image Address' className='add-products-input'/>
            </div>
            <div className='add-product-form-group'>
                <input type="text" placeholder='Sold' className='add-products-input'/>
            </div>
            <div className='add-product-form-group'>
                <input type="text" placeholder='Number of Colors' className='add-products-input'/>
            </div>
        </div>
        <button className='add-products-submit'>Add Product</button>
      </form>
    </div>
  )
}

export default AddNewProduct
