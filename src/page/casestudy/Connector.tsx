import React, { useRef } from "react";
import { Carousel } from "antd";
import VisibilitySensor from "react-visibility-sensor";
import { Helmet } from "react-helmet";

import title from "../../image/casestudy/connector/title.webp";
import section from "../../image/casestudy/connector/section.webp";
import image1 from "../../image/casestudy/connector/image1.webp";
import image2 from "../../image/casestudy/connector/image2.webp";
import image3 from "../../image/casestudy/connector/image3.webp";
import image4 from "../../image/casestudy/connector/image4.webp";
import final from "../../image/casestudy/connector/final.webp";

export default function Connector() {
  const body = useRef(null);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <>
      <Helmet>
        <title>Connector | Web Design and Development</title>
        <meta name="description" content="Electronic Visit Verification" />
      </Helmet>
      <div ref={body} className="clr-white bg-primary">
        <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary", "clr-white"])}>
          <section className="pb-6 pt-10 px-6 h-min-100vh grid align-bottom">
            <div className="column w-9@lg w-24 absolute@lg txt-center txt-left@lg top-header right-0 mr-2@lg">
              <img src={title} alt="" className="img w-24@lg w-22" />
            </div>
            <div className="column pt-6 w-17@md w-24">
              <h1 className="font-bolder mb-2">Connector</h1>
              <div className="mb-4">Web Design and Development</div>
              <h1 className="title is-sm font-bolder mb-0">Website for Real-State Agency</h1>
            </div>
          </section>
        </VisibilitySensor>

        <section className="container py-6 grid txt-justify">
          <div className="column w-12@md w-24 px-2">
            <h1 className="font-bolder txt-left@md txt-center">About project</h1>
            <p>
              Connector Real Estate Is A Prominent Real Estate Service Provider And Seller. We Deal And Sell Properties Whether They Might Be Residential Or Commercial. Either You Desire An Apartment, Plaza, Home, Shop Or An Office, We Got Everything
              Covered In Our Arsenal. We Usually Have Many Real Estate Projects Ongoing At A Particular Time And We Provide Easy Services Like Easy Booking And Payment Methods To Our Customers So That They Don’t Have To Face Any Complications. Our
              Past Speaks Of Our Success. Our Client Satisfaction Rate Is Also Commendable; We Have Thousands Of Satisfied Clients And Still Counting. We Take Full Responsibility Of What We Deal In And Sell. We Work To Our Very Best To Provide Our
              Customers With That, Which They Admire And Fantasy Of. Not Only This, We Have Terrific And Easy Installment Plans For Our Customers Who Are Not Able To Afford A Single Complete Payment At Once. Therefore, We Make It Easier For Our
              Customers To Buy Their Dream Apartments, Start And Grow Their Business By Buying Shops And Offices Or Even Have A Bunch Of Property Entitled To Them. Hence, Given By The Facts Mentioned Above It Is Clear That Our Only Goal Is Customer
              Satisfaction And Ease And That Is What We Always Strive For.
            </p>
          </div>
          <div className="column w-12@md w-24 px-2">
            <h1 className="font-bolder txt-left@md txt-center">Objectives</h1>
            <p>The requirement of our client was to design and develop an appealing and easy-to-use marketplace platform, right from the scratch. The core requirement of the project was to develop the existing marketplace using WordPress.</p>
          </div>
        </section>

        <section>
          <img src={section} alt="" className="img" />
        </section>

        <section className="container py-6 txt-center">
          <h1 className="font-bolder txt-left@md txt-center">Our Strategy</h1>
          <p className="txt-justify txt-center@md">
            Teamwork and internal collaboration of our WordPress developers was key. Our WordPress dev team performed comprehensive system analysis. They came up with a strategy to develop a website pricipally to help out and promote realstate agency
            to the outer world
          </p>
        </section>

        <section className="px-6 py-6 txt-center bg-primary clr-white">
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
