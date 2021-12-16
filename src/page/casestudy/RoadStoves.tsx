import React, { useRef } from "react";
import { Carousel } from "antd";
import VisibilitySensor from "react-visibility-sensor";
import { Helmet } from "react-helmet";

import title from "../../image/casestudy/roadstoves/title.webp";
import title1 from "../../image/casestudy/roadstoves/title1.webp";
import section from "../../image/casestudy/roadstoves/section.webp";
import image1 from "../../image/casestudy/roadstoves/image1.webp";
import image2 from "../../image/casestudy/roadstoves/image2.webp";
import image3 from "../../image/casestudy/roadstoves/image3.webp";
import image4 from "../../image/casestudy/roadstoves/image4.webp";
import final from "../../image/casestudy/roadstoves/final.webp";

export default function RoadStoves() {
  const body = useRef(null);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <>
      <Helmet>
        <title>Road Stoves | Web Design and Development</title>
        <meta name="description" content="Discover the real taste" />
      </Helmet>
      <div ref={body} className="clr-white bg-primary">
        <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary", "clr-white"])}>
          <section className="pb-6 pt-10 px-6 h-min-100vh grid align-bottom">
            <div className="column w-9@lg w-24 absolute@lg txt-center txt-left@lg top-header right-0 mr-2@lg">
              <img src={title} alt="" className="img w-24@lg w-19 w-20@md" />
              <img src={title1} alt="" className="hidden@md img w-24@lg w-19 w-20@md" />
            </div>
            <div className="column pt-6 w-17@md w-24">
              <h1 className="font-bolder mb-2">Road Stoves</h1>
              <div className="mb-4">Web Design and Development</div>
              <h1 className="title is-sm font-bolder mb-0">Discover the real taste</h1>
            </div>
          </section>
        </VisibilitySensor>

        <section className="container py-6 grid txt-justify">
          <div className="column w-12@md w-24 px-2">
            <h1 className="font-bolder txt-left@md txt-center">About project</h1>
            <p>
              Road Stoves is proud to be one of the finest cafe restaurants of Pakistan. At Road stoves we take pride in providing huge variety of food menu along with the delicious taste that your taste buds will forever remember. Having its
              branches in Quetta, Karachi, Gujranwala and Islamabad, your love towards the taste of Road stoves makes us expand through out Pakistan to be able to deliver nothing but the best. So whenever you are looking for best restaurant in
              Islamabad, restaurant in Quetta, restaurant in Gujranwala search no more just visit Road stoves for a delight to your tastes.
            </p>
          </div>
          <div className="column w-12@md w-24 px-2">
            <h1 className="font-bolder txt-left@md txt-center">Objectives</h1>
            <p>The requirement of our client was to design and develop an appealing and easy-to-use marketplace platform, right from the scratch. The core requirement of the project was to develop the existing marketplace.</p>
          </div>
        </section>

        <section>
          <img src={section} alt="" className="img" />
        </section>

        <section className="container py-6 txt-center">
          <h1 className="font-bolder txt-left@md txt-center">Our Strategy</h1>
          <p>
            Effective teamwork and internal collaboration of our WordPress was the key. Our WordPress dev team performed comprehensive system analysis. We developed a website that not only is userfriendly but also fulfils the requirements and demands
            of the client
          </p>
        </section>

        <section className="px-10 py-6 txt-center bg-primary clr-white">
          <h1 className="font-bolder txt-left@md txt-center">Visuals</h1>
          <Carousel autoplay className="px-10 zoom-center container" nextArrow={<NextArrow />} prevArrow={<PrevArrow />} autoplaySpeed={4000} speed={1000} dots accessibility arrows draggable>
            <div>
              <img className="img" src={image1} alt="" />
            </div>
            <div>
              <img className="img" src={image2} alt="" />
            </div>
            <div>
              <img className="img" src={image3} alt="" />
            </div>
            <div>
              <img className="img" src={image4} alt="" />
            </div>
          </Carousel>
        </section>

        <section className="container pt-6 txt-center">
          <h1 className="font-bolder txt-left@md txt-center">The Final Takeaway</h1>
          <img src={final} alt="" className="img w-24" />
        </section>
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
