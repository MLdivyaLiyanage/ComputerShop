
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom'; 
import './navbar.css'; // Import the CSS file

export default function NavigationBar() {
  return (
    <div>
      <Nav variant="tabs" defaultActiveKey="/home" className="navigation-bar">
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/customer'>Customer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/product">Product</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/payment">Payment</Nav.Link>
        </Nav.Item>
        <Nav.Item className="ml-auto dr-computer-house"> {/* Add this item */}
          <Nav.Link disabled>
            DR COMPUTER HOUSE
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}