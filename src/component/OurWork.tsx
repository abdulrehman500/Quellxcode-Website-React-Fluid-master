import React from "react";

import { Link } from "react-router-dom";
import { Carousel } from "antd";

import nerdpaper from "../image/casestudy/nerdpaper.jpg";
import efund from "../image/casestudy/efund.png";
import bolan from "../image/casestudy/bolan.jpg";
import connector from "../image/casestudy/connector.jpg";
import roadstoves from "../image/casestudy/roadstoves.jpg";
import supportlads from "../image/casestudy/supportlads.jpg";

export interface props {
  className?: string;
}

OurWork.defaultProps = {
  className: ""
} as props;

export default function OurWork() {
  return (
    <>
      <section className="txt-center py-6@md py-10">
        <h1 className="font-bolder txt-center">Our Work</h1>
        <Carousel
          autoplay
          autoplaySpeed={4000}
          speed={1000}
          className="txt-center zoom-center"
          centerMode
          dots
          infinite
          variableWidth
          draggable
          accessibility
          responsive={[
            {
              breakpoint: 1066,
              settings: {
                variableWidth: false
              }
            },
            {
              breakpoint: 769,
              settings: {
                variableWidth: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                // centerMode: false,
                variableWidth: false
              }
            }
          ]}
        >
          <Link className="" to="/casestudy/nerdpaper">
            <img className="img " src={nerdpaper} alt="" />
          </Link>
          <Link className="" to="/casestudy/efund">
            <img className="img " src={efund} alt="" />
          </Link>
          <Link className="" to="/casestudy/bolan">
            <img className="img " src={bolan} alt="" />
          </Link>
          <Link className="" to="/casestudy/connector">
            <img className="img " src={connector} alt="" />
          </Link>
          <Link className="" to="/casestudy/roadstoves">
            <img className="img " src={roadstoves} alt="" />
          </Link>
          <Link className="" to="/casestudy/supportlads">
            <img className="img " src={supportlads} alt="" />
          </Link>
        </Carousel>
      </section>
    </>
  );
}
