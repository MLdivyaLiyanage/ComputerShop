import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customer.css';
import { Link } from 'react-router-dom';

export default function PaymentManagement() {
    const [payments, setPayments] = useState([]);
    const [payment, setPayment] = useState({
        productId: '',
        productQuantity: '',
        payMethod: '',
        payTotal: '',
    });
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    // Load payments data
    const loadPayments = async () => {
        const result = await axios.get('http://localhost:8080/payments');
        setPayments(result.data);
    };

    useEffect(() => {
        loadPayments();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayment({ ...payment, [name]: value });
    };

    // Add a new payment
    const handleAdd = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/payment', payment);
        loadPayments();
        resetForm();
    };

    // Edit payment: Set form to edit mode with selected payment data
    const handleEdit = (paymentId) => {
        const selectedPayment = payments.find((cust) => cust.id === paymentId);
        setPayment({
            productId: selectedPayment.productId,
            productQuantity: selectedPayment.productQuantity,
            payMethod: selectedPayment.payMethod,
            payTotal: selectedPayment.payTotal,
        });
        setIsEdit(true);
        setEditId(paymentId);
    };

    // Update an existing payment
    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/payment/${editId}`, payment);
        loadPayments();
        resetForm();
    };

    // Delete a payment
    const handleDelete = async (paymentId) => {
        await axios.delete(`http://localhost:8080/payment/${paymentId}`);
        loadPayments();
    };

    // Reset form fields
    const resetForm = () => {
        setPayment({
            productId: '',
            productQuantity: '',
            payMethod: '',
            payTotal: '',
        });
        setIsEdit(false);
        setEditId(null);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">{isEdit ? 'Edit Payment' : 'Add Payment'}</h2>
                    <form onSubmit={isEdit ? handleUpdate : handleAdd}>
                        <div className="mb-3">
                            <label htmlFor="productId" className="form-label">Product ID</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Product ID"
                                name="productId"
                                value={payment.productId}
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
                                value={payment.productQuantity}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="payMethod" className="form-label">Payment Method</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Method"
                                name="payMethod"
                                value={payment.payMethod}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="payTotal" className="form-label">Payment Total</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Total Amount"
                                name="payTotal"
                                value={payment.payTotal}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="d-flex justify-content-start">
                            <button type="submit" className="btn btn-outline-primary">
                                {isEdit ? 'Update Customer' : 'Add Customer'}
                            </button>
    
                            <Link type="button" className="btn btn-outline-primary mx-3" to="/product">
                                Back
                            </Link>
                        </div>

                    </form>
                </div>
            </div>

            {/* Payment List */}
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Payment List</h2>
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">Payment ID</th>
                                <th scope="col">Product ID</th>
                                <th scope="col">Product Quantity</th>
                                <th scope="col">Payment Method(Cash/Card)</th>
                                <th scope="col">Total Amount</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {payments.map((payment, index) => (
                                <tr key={index}>
                                    <td>{payment.id}</td>
                                    <td>{payment.productId}</td>
                                    <td>{payment.productQuantity}</td>
                                    <td>{payment.payMethod}</td>
                                    <td>{payment.payTotal}</td>
                                    <td>
                                        <button
                                            className="btn btn-outline-primary mx-2"
                                            onClick={() => handleEdit(payment.id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => handleDelete(payment.id)}
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
