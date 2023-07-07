import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { paths } from "../constants/paths";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav>
      {step1 ? (
        <LinkContainer to={paths.LOGIN_SCREEN}>
          <Nav.Link>Sign In &gt;</Nav.Link>
        </LinkContainer>
      ) : (
        <Nav.Link disabled>Sign In &gt;</Nav.Link>
      )}
      {step2 ? (
        <LinkContainer to={paths.SHIPPING_SCREEN}>
          <Nav.Link>Shiping &gt;</Nav.Link>
        </LinkContainer>
      ) : (
        <Nav.Link disabled>Shiping &gt;</Nav.Link>
      )}
      {step3 ? (
        <LinkContainer to={paths.PAYMENT_SCREEN}>
          <Nav.Link>Payment &gt;</Nav.Link>
        </LinkContainer>
      ) : (
        <Nav.Link disabled>Payment &gt;</Nav.Link>
      )}
      {step4 ? (
        <LinkContainer to={paths.PLACEORDER_SCREEN}>
          <Nav.Link>Place Order &gt;</Nav.Link>
        </LinkContainer>
      ) : (
        <Nav.Link disabled>Place Order &gt;</Nav.Link>
      )}
    </Nav>
  );
};

export default CheckoutSteps;
