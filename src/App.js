import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Home from './page/Home';
import Customer from './page/Customer';
import Product from './page/Product';
import Payment from './page/Payment';
import NavigationBar from './component/NavigetionBar';


function App() {
  return (
    <Router>
      <div>
      <NavigationBar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/product" element={<Product />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
