import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import Jagung from "../assets/Cards/jagung.jpg";
import Cabai from "../assets/Cards/cabai.jpg";
import Cengkeh from "../assets/Cards/cengkeh.jpg";
import Tomat from "../assets/Cards/tomat.jpg";
import Paprika from "../assets/Cards/paprika.jpg";
import Jeruk from "../assets/Cards/jeruk.jpg";

const Produk = () => {
  const items = [
    { image: Jagung },
    { image: Cabai },
    { image: Cengkeh },
    { image: Tomat },

    { image: Paprika },
    { image: Jeruk },
  ];

  return (
    <div id="produkt">
      <CardGroup className="my-5">
        {items.map((item, index) => (
          <Card>
            <Card.Img
              variant="top"
              src={item.image}
              alt={item.title}
              style={{ height: "500px", objectFit: "cover" }}
            />
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default Produk;
