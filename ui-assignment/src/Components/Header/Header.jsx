import Container from "react-bootstrap/Container";
import GroupLogo from "../../Assets/images/Group-logo.png";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        {["lg"].map((expand) => (
          <Navbar key={expand} expand={expand} className="">
            <Container className="justify-content-end">
              {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-center navbar-item flex-grow-1 pe-3">
                    <Link to="/about">About</Link>
                    <Link to="/service">Services</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">
                      <img src={GroupLogo} alt="" width="40px" />
                    </Link>
                    <Link to="/contact">Events</Link>
                    <Link to="/contact">Media</Link>
                    <Link to="/contact">Contact Us</Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </header>
    </>
  );
};

export default Header;
