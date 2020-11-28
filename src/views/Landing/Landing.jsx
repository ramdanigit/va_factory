import React from "react";
import Banner from "assets/img/banner.png";
import Banner2 from "assets/img/banner2.png";
import produk from "assets/img/product.png";
import produk2 from "assets/img/product2.png";
import produk3 from "assets/img/product3.png";
import produk4 from "assets/img/product4.png";
import produk5 from "assets/img/product5.png";
import { CarouselView, TabProduk, CarouselProduk } from "components";
import { Box } from "@material-ui/core";

const dataCarousel = [
  {
    img: Banner,
    alt: "banner",
  },
  { img: Banner2, alt: "banner2" },
];

const dataPopuler = [
  {
    img: produk,
    status: "sold-out",
    harga: "Rp.120.000",
    title: "Va Costume Jersey 2005",
  },
  {
    img: produk2,
    status: "ready",
    harga: "Rp.150.000",
    title: "Va Costume Jersey 2005 Test Jersey",
  },
  {
    img: produk3,
    status: "pre-order",
    harga: "Rp.200.000",
    title: "Va Costume Jersey 2005 Test Jersey",
  },
];

function Landing() {
  return (
    <React.Fragment>
      <Box padding="5px 5px 0 5px">
        <CarouselView data={dataCarousel} />
      </Box>
      <Box padding="0 5px 0 5px">
        <TabProduk title="Paling Populer" subTitle="Lebih banyak" />
        <CarouselProduk data={dataPopuler} />
      </Box>
      <Box padding="0 5px 0 5px">
        <TabProduk title="Produk Terbaru" subTitle="Lebih banyak" />
        <CarouselProduk data={dataPopuler} />
      </Box>
    </React.Fragment>
  );
}

export default Landing;
