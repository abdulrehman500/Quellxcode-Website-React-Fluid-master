import React from "react";

import { Carousel } from "antd";

import brand1 from "../image/brand/1.png";
import brand2 from "../image/brand/2.png";
import brand3 from "../image/brand/3.png";
import brand4 from "../image/brand/4.png";
import brand5 from "../image/brand/5.png";
import brand6 from "../image/brand/6.png";
import brand7 from "../image/brand/7.png";
import brand8 from "../image/brand/8.png";
import brand9 from "../image/brand/9.png";
import brand10 from "../image/brand/10.png";
import brand11 from "../image/brand/11.png";
import brand12 from "../image/brand/12.png";
import brand13 from "../image/brand/13.png";
import brand14 from "../image/brand/14.png";
import brand15 from "../image/brand/15.png";
import brand16 from "../image/brand/16.png";
import brand17 from "../image/brand/17.png";
import brand18 from "../image/brand/18.png";

export interface props {
  className?: string;
}

BrandsWeWorkedWith.defaultProps = {
  className: "",
} as props;

export default function BrandsWeWorkedWith(props: props) {
  return (
    <section className={props.className + "py-6"}>
      <h1 className="font-bolder txt-center">Brands we worked with</h1>
      <Carousel
        autoplay
        autoplaySpeed={4000}
        speed={1500}
        accessibility
        dots={false}
        draggable
        slidesToShow={5}
        slidesToScroll={2}
        responsive={[
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ]}
      >
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand1} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand2} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand3} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand4} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand5} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand6} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand7} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand8} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand9} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand10} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand11} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand12} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand13} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand14} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand15} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand16} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand17} alt="" />
        </div>
        <div className="flex justify-center align-middle p-10">
          <img className="img m-2 brands-logo p-10" src={brand18} alt="" />
        </div>
      </Carousel>
    </section>
  );
}
