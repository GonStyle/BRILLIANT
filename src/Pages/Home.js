import { Row, Col, Container, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div id="/" className="LP">
      <Container className="text-center justify-content-center align-item-center">
        <Row>
          <Col>
            <Row>
              <div className="brand">BRILLIANT</div>
            </Row>
            <Row>
              <div className="judul">
                TEMUKAN REMPAH REMPAH TERBAIK UNTUK ANDA
              </div>
              <div className="introButton mt-5 mb-5 text-center">
                <Button variant="dark" href="#produk">
                  BEST SELLERS
                </Button>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
