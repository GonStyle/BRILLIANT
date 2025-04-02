import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Jagung from "../assets/Cards/jagung.jpg";
import Cabai from "../assets/Cards/cabai.jpg";
import Cengkeh from "../assets/Cards/cengkeh.jpg";
import Tomat from "../assets/Cards/tomat.jpg";

const ProductDetail = () => {
  return (
    <div id="produk">
      <Container fluid>
        <Row className="bestsellers text-center justify-content-center align-item-center">
          <div>BEST SELLERS</div>
        </Row>
        <Row>
          <Col md={3}>
            <Card className="m-3 p-2">
              <Card.Img variant="top" src={Jagung} className="tampilanproduk" />
              <Card.Body className="listnama">
                <Card.Title className="text-center">JAGUNG</Card.Title>
                <Card.Text>
                  Manis, renyah, dan penuh nutrisi! Jagung kami dipetik langsung
                  dari ladang terbaik untuk memastikan kesegaran dan kualitas
                  terbaik. Cocok untuk direbus, dibakar, atau diolah menjadi
                  berbagai hidangan lezat.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="m-3 p-2">
              <Card.Img
                variant="top"
                src={Cengkeh}
                className="tampilanproduk"
              />
              <Card.Body className="listnama">
                <Card.Title className="text-center">CENGKEH</Card.Title>
                <Card.Text>
                  Cengkeh asli dengan aroma khas yang kuat, sempurna untuk
                  rempah-rempah, minuman herbal, atau keperluan kesehatan.
                  Dapatkan cengkeh terbaik yang dipetik dengan standar kualitas
                  tinggi hanya di BRILLIANT!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="m-3 p-2">
              <Card.Img variant="top" src={Cabai} className="tampilanproduk" />
              <Card.Body className="listnama">
                <Card.Title className="text-center">CABAI</Card.Title>
                <Card.Text>
                  Cabai merah segar dengan tingkat kepedasan yang pas, cocok
                  untuk menambah cita rasa pedas pada masakan favorit Anda. Dari
                  sambal hingga bumbu dapur, cabai ini memberikan sensasi rasa
                  yang menggugah selera.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="m-3 p-2">
              <Card.Img variant="top" src={Tomat} className="tampilanproduk" />
              <Card.Body className="listnama">
                <Card.Title className="text-center">TOMAT</Card.Title>
                <Card.Text>
                  Dibudidayakan secara alami, tomat kami kaya akan rasa segar
                  dan nutrisi tinggi. Ideal untuk salad, jus, atau saus masakan
                  yang kaya rasa. Tomat segar dari BRILLIANT selalu siap
                  menemani hidangan sehat Anda!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
