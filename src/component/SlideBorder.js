import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slide.css'; // Import the CSS file

export default function SlideBorder() {
  return (
    <div className="carousel-container"> {/* Add a class for styling */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.qv2D0S81M_c0oobzZdn6agHaEK?w=282&h=180&c=7&r=0&o=5&pid=1.7"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Quality Tech Unbeatable Prices</h3>
            <p>Top-tier products without the premium cost</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.rqCXcmrcVSibq9nKKJJEzQHaEK?w=282&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Experience The Future Of Computing</h3>
            <p>Cutting-edge technology for a smarter, faster world.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://th.bing.com/th/id/OIP.NfJusj8NjLb4fH1cws-nKAHaEc?w=318&h=190&c=7&r=0&o=5&pid=1.7"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Your Trusted Tech Partner</h3>
            <p>Providing reliable solutions for all your computing needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
