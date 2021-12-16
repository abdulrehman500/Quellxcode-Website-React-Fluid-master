import React, { useRef } from "react";
import { Carousel } from "antd";
import VisibilitySensor from "react-visibility-sensor";
import { Helmet } from "react-helmet";

import title from "../../image/casestudy/supportlads/title.png";
import section from "../../image/casestudy/supportlads/section.png";
import image1 from "../../image/casestudy/supportlads/image1.webp";
import image2 from "../../image/casestudy/supportlads/image2.png";
import image3 from "../../image/casestudy/supportlads/image3.png";
import image4 from "../../image/casestudy/supportlads/image4.png";
import final from "../../image/casestudy/supportlads/final.webp";

export default function SupportLads() {
  const body = useRef(null);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <>
      <Helmet>
        <title>Support Lads | Web Design and Development</title>
        <meta name="description" content="Customer care services platform" />
      </Helmet>
      <div ref={body} className="clr-black bg-white">
        <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-white", "clr-black"])}>
          <section className="pb-6 pt-10 px-6 h-min-100vh grid align-bottom">
            <div className="column w-9@lg w-24 absolute@lg txt-center txt-left@lg top-header right-0 mr-2@lg">
              <img src={title} alt="" className="img w-24@lg w-19 w-20@md" />
            </div>
            <div className="column pt-6 w-17@md w-24">
              <h1 className="font-bolder mb-2">Support Lads</h1>
              <div className="mb-4">Web Design and Development</div>
              <h1 className="title is-sm font-bolder mb-0">Customer care services platform</h1>
            </div>
          </section>
        </VisibilitySensor>

        <section className="container py-6 grid txt-justify">
          <div className="column w-12@md w-24 px-2">
            <h1 className="font-bolder txt-center txt-left@md">About project</h1>
            <p>
              Support Lads is one for your business where it emphasizes customer connection and transparency with information. At supportlads it is believed that every e-commerce store can have a comprehensive customer service solution that rivals
              that of much larger companies, all at an affordable price. Each and every company can have a customer service experience that supports their business, their brand, and their future success, as well as their day-to-day profit.
            </p>
          </div>
          <div className="column w-12@md w-24 px-2">
            <h1 className="font-bolder txt-center txt-left@md">Objectives</h1>
            <p>The requirement of the our client was to design and develop a platform where every ecommerce store can have customer service. the core requirement was to develop a platform using WordPress</p>
          </div>
        </section>

        <section>
          <img src={section} alt="" className="img" />
        </section>

        <section className="container py-6 txt-center">
          <h1 className="font-bolder">Our Strategy</h1>
          <p className="mb-0">
            Effective teamwork and internal collaboration of our WordPress was the key. Our WordPress dev team performed comprehensive system analysis. We developed a website that not only is userfriendly but also fulfils the requirements and demands
            of the client
          </p>
        </section>

        <section className="px-6 py-6 txt-center bg-primary clr-white">
          <h1 className="font-bolder txt-center">Visuals</h1>
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
          <h1 className="font-bolder txt-center">The Final Takeaway</h1>
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
