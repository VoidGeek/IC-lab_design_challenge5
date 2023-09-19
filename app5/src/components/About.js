import React from 'react';
import { Dropdown } from 'react-bootstrap';

const About = () => {
  return (
    <div className="container mt-5">
      <h1>About Our Company</h1>
      <p>
        Welcome to our company! We are dedicated to providing top-notch services
        and products to our customers. Learn more about us and our offerings
        below:
      </p>

      <Dropdown className="mt-3">
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Our Services
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/service-1">Service 1</Dropdown.Item>
          <Dropdown.Item href="#/service-2">Service 2</Dropdown.Item>
          <Dropdown.Item href="#/service-3">Service 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className="mt-3">
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Our Products
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/product-1">Product 1</Dropdown.Item>
          <Dropdown.Item href="#/product-2">Product 2</Dropdown.Item>
          <Dropdown.Item href="#/product-3">Product 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default About;
