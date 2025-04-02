import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../assets/Navbars/bags.png";

const NavbarLP = () => {
  return (
    <Navbar fixed="top" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand>
          <a href="#/">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
          </a>
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="#produkt">PRODUCT</Nav.Link>
          <Nav.Link href="#about">ABOUT</Nav.Link>
          <Nav.Link href="#contak">CONTACT</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarLP;
