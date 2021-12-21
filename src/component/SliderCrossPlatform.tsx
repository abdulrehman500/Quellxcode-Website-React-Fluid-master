import React, { useRef, useEffect } from "react";
import { Carousel } from "antd";

import arrow from "../image/service/arrow.png";
import laptop from "../image/service/laptop.png";
import iphone from "../image/service/iphone.png";
import tablet from "../image/service/tablet.png";

import "../component/SliderCrossPlatform.scss";

// import citzenlappy from "../image/service/web/slide/citzenlappy.png";
import connectorlappy from "../image/service/web/slide/connectorlappy.jpg";
import nerdlappy from "../image/service/web/slide/nerdlappy.png";
// import startemlappy from "../image/service/web/slide/startemlappy.png";

// import citzentab from "../image/service/web/slide/citzentab.png";
import connectortab from "../image/service/web/slide/connectortab.png";
import nerdtab from "../image/service/web/slide/nerdtab.png";
// import startemtab from "../image/service/web/slide/startemtab.png";

// import citzenmob from "../image/service/web/slide/citzenmobile.png";
import connectormob from "../image/service/web/slide/connectormobile.png";
import nerdmobile from "../image/service/web/slide/nerdmobile.png";
// import startemmobile from "../image/service/web/slide/startemmobile.png";

export interface props {
  className?: string;
  onchange: Function;
  colors: string[];
  child: any;
}

SliderCrossPlatform.defaultProps = {
  className: "",
  onchange: () => {},
  colors: ["#E33A13", "#1180F3", "#01303E", "#0090D6", "#17181C", "#5CC9E8", "#571F9C"],
  child: null
} as props;

export default function SliderCrossPlatform(props: props) {
  const laptopref = useRef(null);
  const mobileref = useRef(null);
  const tabletref = useRef(null);

  const overlay = useRef(null);

  useEffect(() => {
    const _overlay = (overlay.current as unknown) as Element;
    setTimeout(() => _overlay.classList.add("animate__fadeOut"), 2000);
  }, []);

  return (
    <>
      <div ref={overlay} className="animate__animated">
        <div className="overlay active title z-10" />
        <div className="z-top clr-white h1 flex align-middle justify-center fixed top-0 bottom-0 left-0 right-0">
          <div>Swipe on any device to slide</div>
          <img src={arrow} alt="" className="img w-6" />
        </div>
      </div>
      <div className={`${props.className} CrossPlatform txt-center relative`}>
        <div className="laptop relative mb-10">
          <div className="absolute left-50 trans-x--50 top-0 w-24 bottom-0 event-none">
            <img className="img h-100" src={laptop} alt="" />
          </div>
          {/* <Carousel
            ref={laptopref}
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            className="zoom-center"
            autoplaySpeed={4000}
            speed={1000}
            dots
            accessibility
            draggable
            slidesToShow={1}
            arrows
            responsive={[{ breakpoint: 576, settings: { arrows: false } }]}
            beforeChange={(o, n) => {
              ((tabletref.current as any) as typeof Carousel).goTo(n);
              ((mobileref.current as any) as typeof Carousel).goTo(n);
              props.onchange(props.colors[n]);
            }}
          > */}
            {/* <div>
              <img src={citzenlappy} alt="citzenlappy" className="img inline-block" />
            </div> */}
            <div>
              <img src={connectorlappy} alt="connectorlappy" className="img inline-block" />
            </div>
            <div>
              <img src={nerdlappy} alt="nerdlappy" className="img inline-block" />
            </div>
            {/* <div>
              <img src={startemlappy} alt="startemlappy" className="img inline-block" />
            </div> */}
          {/* </Carousel> */}
        </div>

        <div className="grid justify-center align-bottom pt-10">
          <div className="column w-24 w-9@md mb-10 mb-0@md mobile absolute@lg left-0 top-0">
            <div className="relative">
              <div className="absolute left-50 trans-x--50 top-0 w-24 bottom-0 event-none">
                <img className="img h-100" src={iphone} alt="" />
              </div>
              {/* <Carousel
                ref={mobileref}
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
                className="zoom-center"
                autoplaySpeed={4000}
                speed={1000}
                dots
                accessibility
                draggable
                slidesToShow={1}
                beforeChange={(o, n) => {
                  ((tabletref.current as any) as typeof Carousel).goTo(n);
                  ((laptopref.current as any) as typeof Carousel).goTo(n);
                  props.onchange(props.colors[n]);
                }}
              > */}
                {/* <div>
                  <img src={citzenmob} alt="citzentab" className="inline-block img" />
                </div> */}
                <div>
                  <img src={connectormob} alt="connectortab" className="inline-block img" />
                </div>
                <div>
                  <img src={nerdmobile} alt="nerdtab" className="inline-block img" />
                </div>
                {/* <div>
                  <img src={startemmobile} alt="startemtab" className="inline-block img" />
                </div> */}
              {/* </Carousel> */}
            </div>
          </div>
          <div className="column w-24 w-14@md tablet absolute@lg right-0 top-0">
            <div className="relative">
              <div className="absolute left-50 trans-x--50 top-0 w-24 bottom-0 event-none">
                <img className="img h-100" src={tablet} alt="" />
              </div>
              {/* <Carousel
                ref={tabletref}
                nextArrow={<NextArrow />}
                prevArrow={<PrevArrow />}
                className="zoom-center"
                autoplaySpeed={4000}
                speed={1000}
                dots
                accessibility
                draggable
                slidesToShow={1}
                beforeChange={(o, n) => {
                  ((laptopref.current as any) as typeof Carousel).goTo(n);
                  ((mobileref.current as any) as typeof Carousel).goTo(n);
                  props.onchange(props.colors[n]);
                }}
              > */}
                {/* <div>
                  <img src={citzentab} alt="citzentab" className="inline-block img" />
                </div> */}
                <div>
                  <img src={connectortab} alt="connectortab" className="inline-block img" />
                </div>
                <div>
                  <img src={nerdtab} alt="nerdtab" className="inline-block img" />
                </div>
                {/* <div>
                  <img src={startemtab} alt="startemtab" className="inline-block img" />
                </div> */}
              {/* </Carousel> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NextArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}

function PrevArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}
