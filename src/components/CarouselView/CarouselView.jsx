import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "160px",
  color: "#000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function CarouselView(props) {
  const { data } = props;
  return (
    <React.Fragment>
      <Carousel autoplay>
        {data.map((value, index) => (
          <div style={contentStyle} key={index}>
            <img
              src={value.img ? value.img : ""}
              alt={value.alt ? value.alt : ""}
              height="160px"
            />
          </div>
        ))}
      </Carousel>
      ,
    </React.Fragment>
  );
}

export default CarouselView;
