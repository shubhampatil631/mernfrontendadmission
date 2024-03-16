import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

const MyNavbar = ({ navname, Username, AdminDepartment, UserDepartment }) => {
  return (
    <>
      <div className="overallnavbar">
        <Navbar
          collapseOnSelect
          expand="lg"
          className=".bg-light navbarforadmin"
        >
          <Container>
            <Navbar.Brand
              as={NavLink}
              to="/home"
              style={{ color: "white", fontsize: 20 }}
            >
              Student info
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>

              {navname === "adminlogin" ? (
                <Nav className="me-auto">
                  <NavDropdown
                    title="Dropdown"
                    style={{ color: "white", fontsize: 20 }}
                    id="collapsible-nav-dropdown"
                  >
                    <NavDropdown.Item as={NavLink} to="/Admin">
                      <Button variant="outline-dark">Admin</Button>
                    </NavDropdown.Item>

                    <NavDropdown.Item
                      as={NavLink}
                      to={`/Create?name=${Username}&Department=${AdminDepartment}`}
                    >
                      <Button variant="outline-dark">NewStudent</Button>
                    </NavDropdown.Item>

                    <NavDropdown.Item as={NavLink} to="/Showtable">
                      <Button variant="outline-dark">Student</Button>
                    </NavDropdown.Item>

                    <NavDropdown.Item as={NavLink} to="/ShowUserAdmin">
                      <Button variant="outline-dark">AdminUser</Button>
                    </NavDropdown.Item>

                    <NavDropdown.Item as={NavLink} to="/Filterstd">
                      <Button variant="outline-dark">filterstd</Button>
                    </NavDropdown.Item>

                    <NavDropdown.Item as={NavLink} to="/Filter2">
                      <Button variant="outline-dark">Filter2</Button>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                </Nav>
              ) : (
                <Nav>
                  <div className="mr-3">
                    <NavLink to="/">
                      <Button
                        variant="outline-light"
                        style={{ marginRight: 8 }}
                      >
                        Back
                      </Button>
                    </NavLink>
                  </div>

                  <NavLink
                    to={`/Create?name=${Username}&Department=${UserDepartment}`}
                  >
                    <Button variant="outline-light ml-3">NewStudent</Button>
                  </NavLink>
                </Nav>
              )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default MyNavbar;
