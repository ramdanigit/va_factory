import React from "react";
import Banner from "assets/img/banner.png";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function CarouselView(props) {
  return (
    <React.Fragment>
      <Carousel autoplay>
        <div style={contentStyle}>
          <img src={Banner} alt="banner" height="160px" />
        </div>
      </Carousel>
      ,
    </React.Fragment>
  );
}

export default CarouselView;
