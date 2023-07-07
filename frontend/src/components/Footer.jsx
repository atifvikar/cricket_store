import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3}>
            <h5>COMPANY NAME</h5>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </Col>

          <Col md={3}>
            <h5>PRODUCTS</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Bootstrap</Link>
              </li>
              <li>
                <Link to="/">WordPress</Link>
              </li>
              <li>
                <Link to="/">BrandFlow</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Your Account</Link>
              </li>
              <li>
                <Link to="/">Become an Affiliate</Link>
              </li>
              <li>
                <Link to="/">Shipping Rates</Link>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>CONTACT</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/">Melbourne Australia</Link>
              </li>
              <li>
                <Link to="/">info@example.com</Link>
              </li>
              <li>
                <Link to="/">+ 01 234 567 88</Link>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="text-center">
          <Col>
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
