import React from "react";
import Banner from "assets/img/banner.png";
import Banner2 from "assets/img/banner2.png";
import { CarouselView } from "components";
import { Box } from "@material-ui/core";

const dataCarousel = [
  {
    img: Banner,
    alt: "banner",
  },
  { img: Banner2, alt: "banner2" },
];

function Landing() {
  return (
    <React.Fragment>
      <Box padding="5px 5px 0 5px">
        <CarouselView data={dataCarousel} />
      </Box>
    </React.Fragment>
  );
}

export default Landing;
