import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../assets/Navbars/bags.png";

const Footer = () => {
  return (
    <footer className="py-4 text-center kontakKami">
      <Container>
        <Row>
          <Col>
            <img
              src={logo}
              alt="BRILLIANT"
              className="mb-3"
              style={{ height: "100px" }}
            />
            <p>&copy; 2025 BRILLIANT. All rights reserved.</p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3 " id="contak">
          <Col xs="auto">
            <div className="sosialMedia">
              <a
                className="mx-1"
                href="https://wa.me/6287724495795"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon whatsapp" />
              </a>
              <a
                className="mx-1"
                href="https://facebook.com/yuflihagil"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon facebook" />
              </a>
              <a
                className="mx-1"
                href="https://instagram.com/yagildp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
