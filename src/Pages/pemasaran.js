import { Col, Container, Row, Image } from "react-bootstrap";
import Kebun from "../assets/Pemasaran/pemasaran.jpg";

const Pemasaran = () => {
  return (
    <Container id="about" className="pemasaran ">
      <div className="bg-about">
        <Row className=" pengenalan">
          <Col xs={12} md={6} className="konten-foto">
            <Image fluid src={Kebun} className="foto" />
          </Col>
          <Col xs={12} md={6} className="bgText">
            <div className="katadia-judul">FILOSOFI KAMI</div>
            <div className="katadia-isi">
              Di tengah kesibukan dunia modern, kami di BRILLIANT percaya bahwa
              alam menyediakan segala yang kita butuhkan untuk hidup lebih sehat
              dan berkelanjutan. Dengan semangat ini, kami tidak hanya menjual
              sayuran dan hasil nabati lainnya, tetapi juga menghubungkan Anda
              dengan esensi alami yang penuh manfaat. Kami berkomitmen untuk
              menghadirkan produk berkualitas terbaik, langsung dari tangan para
              petani yang bekerja dengan cinta dan dedikasi. Setiap helai daun,
              setiap butir biji, dan setiap buah yang kami tawarkan adalah hasil
              dari kerja keras yang selaras dengan alam. BRILLIANT bukan hanya
              sekadar tempat belanja, tetapi juga sebuah gerakan untuk hidup
              lebih sehat dan bertanggung jawab. Kami percaya bahwa dengan
              memilih produk nabati yang segar dan alami, kita turut mendukung
              keseimbangan lingkungan serta kesejahteraan para petani lokal.
              Bersama BRILLIANT, mari kembali ke akar kehidupan untuk menikmati
              anugerah bumi dengan penuh kesadaran dan menghargai setiap berkah
              yang diberikan alam. Sebab, makanan yang baik berasal dari sumber
              yang baik, dan kami ada di sini untuk memastikan bahwa setiap
              produk yang Anda dapatkan adalah yang terbaik. BRILLIANT-
              Menghubungkan Anda dengan Kebaikan Alam.
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Pemasaran;
