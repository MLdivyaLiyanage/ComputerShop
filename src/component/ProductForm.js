import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customer.css';
import { Link } from 'react-router-dom';

export default function ProductManagement() {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({
        customerId: '',
        productCategories: '',
        productName: '',
        productQuantity: '',
        productPrice: ''
    });
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    // Load products data
    const loadProducts = async () => {
        const result = await axios.get('http://localhost:8080/products');
        setProducts(result.data);
    };

    useEffect(() => {
        loadProducts();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    // Add a new product
    const handleAdd = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/product', product);
        loadProducts();
        resetForm();
    };

    // Edit product: Set form to edit mode with selected product data
    const handleEdit = (productId) => {
        const selectedProduct = products.find((cust) => cust.id === productId);
        setProduct({
            customerId: selectedProduct.customerId,
            productCategories: selectedProduct.productCategories,
            productName: selectedProduct.productName,
            productQuantity: selectedProduct.productQuantity,
            productPrice: selectedProduct.productPrice,
        });
        setIsEdit(true);
        setEditId(productId);
    };

    // Update an existing product
    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/product/${editId}`, product);
        loadProducts();
        resetForm();
    };

    // Delete a product
    const handleDelete = async (productId) => {
        await axios.delete(`http://localhost:8080/product/${productId}`);
        loadProducts();
    };

    // Reset form fields
    const resetForm = () => {
        setProduct({
            customerId: '',
            productCategories: '',
            productName: '',
            productQuantity: '',
            productPrice: '',
        });
        setIsEdit(false);
        setEditId(null);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">{isEdit ? 'Edit Product' : 'Add Product'}</h2>
                    <form onSubmit={isEdit ? handleUpdate : handleAdd}>
                        <div className="mb-3">
                            <label htmlFor="customerId" className="form-label">Customer ID</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Customer ID"
                                name="customerId"
                                value={product.customerId}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productCategories" className="form-label">Product Category</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Category"
                                name="productCategories"
                                value={product.productCategories}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Name"
                                name="productName"
                                value={product.productName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productQuantity" className="form-label">Product Quantity</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Quantity"
                                name="productQuantity"
                                value={product.productQuantity}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productPrice" className="form-label">Product Price</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Price"
                                name="productPrice"
                                value={product.productPrice}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="d-flex justify-content-start">
                            <button type="submit" className="btn btn-outline-primary">
                                {isEdit ? 'Update Customer' : 'Add Customer'}
                            </button>
    
                            <Link type="button" className="btn btn-outline-primary mx-3" to="/customer">
                                    Back
                            </Link>
    
                            <Link type="button" className="btn btn-outline-primary" to="/payment">
                                    Next
                            </Link>
                        </div>

                    </form>
                </div>
            </div>

            {/* Customer List */}
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Product List</h2>
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">Product ID</th>
                                <th scope="col">Customer ID</th>
                                <th scope="col">Product Category</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Quantity</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td>{product.id}</td>
                                    <td>{product.customerId}</td>
                                    <td>{product.productCategories}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productQuantity}</td>
                                    <td>{product.productPrice}</td>
                                    <td>
                                        <button
                                            className="btn btn-outline-primary mx-2"
                                            onClick={() => handleEdit(product.id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
