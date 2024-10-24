import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './customer.css';
import { Link } from 'react-router-dom';

export default function CustomerManagement() {
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState({
        customerName: '',
        customerAddress: '',
        customerPhoneno: '',
        customerEmail: '',
    });
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    // Load customers data
    const loadCustomers = async () => {
        const result = await axios.get('http://localhost:8080/customers');
        setCustomers(result.data);
    };

    useEffect(() => {
        loadCustomers();
    }, []);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCustomer({ ...customer, [name]: value });
    };

    // Add a new customer
    const handleAdd = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/customer', customer);
        loadCustomers();
        resetForm();
    };

    // Edit customer: Set form to edit mode with selected customer data
    const handleEdit = (customerId) => {
        const selectedCustomer = customers.find((cust) => cust.id === customerId);
        setCustomer({
            customerName: selectedCustomer.customerName,
            customerAddress: selectedCustomer.customerAddress,
            customerPhoneno: selectedCustomer.customerPhoneno,
            customerEmail: selectedCustomer.customerEmail,
        });
        setIsEdit(true);
        setEditId(customerId);
    };

    // Update an existing customer
    const handleUpdate = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/customer/${editId}`, customer);
        loadCustomers();
        resetForm();
    };

    // Delete a customer
    const handleDelete = async (customerId) => {
        await axios.delete(`http://localhost:8080/customer/${customerId}`);
        loadCustomers();
    };

    // Reset form fields
    const resetForm = () => {
        setCustomer({
            customerName: '',
            customerAddress: '',
            customerPhoneno: '',
            customerEmail: '',
        });
        setIsEdit(false);
        setEditId(null);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">{isEdit ? 'Edit Customer' : 'Add Customer'}</h2>
                    <form onSubmit={isEdit ? handleUpdate : handleAdd}>
                        <div className="mb-3">
                            <label htmlFor="customerName" className="form-label">Customer Name</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Name"
                                name="customerName"
                                value={customer.customerName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="customerAddress" className="form-label">Customer Address</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Address"
                                name="customerAddress"
                                value={customer.customerAddress}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="customerPhoneno" className="form-label">Customer Phone No</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Phone No"
                                name="customerPhoneno"
                                value={customer.customerPhoneno}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="customerEmail" className="form-label">Customer Email</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter the Email"
                                name="customerEmail"
                                value={customer.customerEmail}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="d-flex justify-content-start">
                            <button type="submit" className="btn btn-outline-primary">
                             {isEdit ? 'Update Customer' : 'Add Customer'}
                            </button>
    
                            <Link type="button" className="btn btn-outline-primary mx-3" to="/home">
                                Back
                            </Link>
    
                            <Link type="button" className="btn btn-outline-primary" to="/product">
                                 Next
                            </Link>
</div>

                    </form>
                </div>
            </div>

            {/* Customer List */}
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Customer List</h2>
                    <table className="table border shadow">
                        <thead>
                            <tr>
                                <th scope="col">Customer ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map((customer, index) => (
                                <tr key={index}>
                                    <td>{customer.id}</td>
                                    <td>{customer.customerName}</td>
                                    <td>{customer.customerAddress}</td>
                                    <td>{customer.customerPhoneno}</td>
                                    <td>{customer.customerEmail}</td>
                                    <td>
                                        <button
                                            className="btn btn-outline-primary mx-2"
                                            onClick={() => handleEdit(customer.id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger mx-2"
                                            onClick={() => handleDelete(customer.id)}
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
