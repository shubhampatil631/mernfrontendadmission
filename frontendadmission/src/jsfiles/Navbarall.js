import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
const MyNavbar = () => {
  const history = useHistory();

  const backToPrevPage = () => {
    history.goBack();
  };

  return (
    <div className="overallnavbar">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Brand>
            <p>
              <img
                src="/images/pvpit.jpg"
                style={{
                  width: 60,
                  height: 60,
                  marginRight: 5,
                  borderRadius: 18,
                }}
                alt="not found"
              />
              PVPIT
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Button
              variant="outline-light"
              style={{ marginRight: 10 }} // Pushes the button to the end
              onClick={backToPrevPage}
            >
              Back
            </Button>
            <NavLink to="/" className="nav-link">
              <Button variant="outline-light">Home</Button>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
