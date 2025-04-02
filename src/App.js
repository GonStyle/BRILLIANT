import NavbarLP from "./component/NavbarLP";
import Home from "./Pages/Home";
import ProductDetail from "./Pages/ProductDetail";
import Pemasaran from "./Pages/pemasaran";
import Produk from "./Pages/Produk";
import Footer from "./component/Footer";
import "./style/LandingPage.css";

function App() {
  return (
    <div className="LProduk">
      <div className="MYBG">
        <NavbarLP />
        <Home />
      </div>
      <div>
        <ProductDetail />
        <hr />
        <Pemasaran />
        <hr />
        <Produk />
        <Footer />
      </div>
    </div>
  );
}

export default App;
