import React from "react";
import { Carousel } from "antd";

import mobilemockup from "../image/service/iphone.png";
import evv1 from "../image/service/mobile/evv1.jpg";
import evv2 from "../image/service/mobile/evv2.jpg";
import evv3 from "../image/service/mobile/evv3.jpg";
import qxc1 from "../image/service/mobile/qxc1.jpg";
import qxc2 from "../image/service/mobile/qxc2.jpg";
import qxc3 from "../image/service/mobile/qxc3.jpg";
import efund1 from "../image/service/mobile/efund1.jpg";
import efund2 from "../image/service/mobile/efund2.jpg";
import efund3 from "../image/service/mobile/efund3.jpg";

import "../component/SliderMobile.scss";

export interface props {
  className?: string;
  onchange: Function;
  colors: string[];
  child: any;
}

SliderMobile.defaultProps = {
  className: "",
  onchange: () => {},
  colors: ["#430BDE", "#430BDE", "#430BDE", "#005595", "#D47FA6", "#241333", "#FF3301", "#FF3301", "#FF3301"],
  child: null,
} as props;

export default function SliderMobile(props: props) {
  return (
    <section className={`${props.className} txt-center`}>
      <div className="mobile relative">
        <div className="absolute left-50 trans-x--50 top-0 w-24 bottom-0 z-top event-none">
          <img className="img h-100" src={mobilemockup} alt="" />
        </div>
        <Carousel
          beforeChange={(o, n) => props.onchange(props.colors[n])}
          className="zoom-center"
          autoplaySpeed={4000}
          speed={1000}
          centerMode
          dots
          accessibility
          draggable
          slidesToShow={5}
          responsive={[
            { breakpoint: 769, settings: { slidesToShow: 3 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } },
          ]}
        >
          <div>
            <img src={evv1} alt="" className="img" />
          </div>

          <div>
            <img src={evv2} alt="" className="img" />
          </div>

          <div>
            <img src={evv3} alt="" className="img" />
          </div>

          <div>
            <img src={qxc1} alt="" className="img" />
          </div>

          <div>
            <img src={qxc2} alt="" className="img" />
          </div>

          <div>
            <img src={qxc3} alt="" className="img" />
          </div>

          <div>
            <img src={efund1} alt="" className="img" />
          </div>

          <div>
            <img src={efund2} alt="" className="img" />
          </div>

          <div>
            <img src={efund3} alt="" className="img" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
