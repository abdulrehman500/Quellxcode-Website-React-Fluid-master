import React, { useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";

import title from "../../image/casestudy/startem/title.svg";
import header from "../../image/casestudy/startem/header.png";
import buildingmodels from "../../image/casestudy/startem/buildingmodels.png";
import section from "../../image/casestudy/startem/section.png";
import section2 from "../../image/casestudy/startem/section2.png";
import design from "../../image/casestudy/startem/design.png";
import typography from "../../image/casestudy/startem/typography.png";
import colorpallet from "../../image/casestudy/startem/colorpalette.png";
import final from "../../image/casestudy/startem/final.png";

export default function StartEm() {
  const body = useRef(null);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <div ref={body} className="clr-white bg-primary">
      <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary", "clr-white"])}>
        <section className="pb-6 pt-10 px-6 h-min-100vh grid align-bottom">
          <div className="column absolute@lg top-header right-0 w-10@lg w-24 mr-1rem@lg mt--4@lg txt-center txt-left@lg">
            <img src={title} alt="" className="img w-24@lg w-22@md w-19" />
          </div>
          <div className="column pt-6 w-17@md w-24">
            <h1 className="font-bolder mb-2">StartEm</h1>
            <div className="mb-4">Website</div>
            <h1 className="title is-sm font-bolder mb-0">A Platform which transform your ideas into reality</h1>
          </div>
        </section>
      </VisibilitySensor>

      <img src={header} alt="" className="img w-24" />

      <section>
        <div className="py-6 px-6 container">
          <h1 className="font-bolder txt-center txt-left@md">Overview of Project</h1>
          <p className="txt-justify txt-left@md">
            StartEm is a digital transformation agency where it transforms your ideas into reality and creates a bridge between your imagination and innovation. StartEm provides cutting edge technologies to help you with any stage of your company and
            start a new digital evolution journey.
          </p>
          <p className="mb-0 txt-justify txt-left@md">We develop software for a variety of platforms. Our solutions are perfectly tailored to the needs of your business and your clients.</p>
        </div>
        <img src={section} alt="" className="img w-24 mb-6" />
      </section>

      <section>
        <div className="py-6 px-6 container">
          <h1 className="font-bolder txt-center txt-left@md">Technology index</h1>
          <p className="mb-0 txt-justify txt-left@md">We use modern, proven technologies and approaches that let us build performant and easily scalable digital products for mobile, web, wearables, TV, and IoT.</p>
        </div>
        <img src={buildingmodels} alt="" className="img w-24" />
      </section>

      <section>
        <div className="py-6 px-6 container">
          <h1 className="font-bolder txt-center txt-left@md">We make YOU a part of US.</h1>
          <p className="txt-justify txt-left@md">
            At startem, all our team is dedicated towards making sure a 100% customer satisfaction. With the primary goal of finding the perfect solution which is beneficial for your business our team spends some good amount of time on researching
            what is the best for you.
          </p>
        </div>
        <img src={section2} alt="" className="img w-24" />
      </section>

      <section className="bg-light">
        <div className="py-6 px-6 container">
          <h1 className="font-bolder txt-center txt-left@md">Design Conceptualization</h1>
          <p className="txt-justify txt-left@md">
            Our team of expert UI/UX designers and business analysts took the challenge head on and outlined the problems with the existing platform. First our architectural team figured out the new features and functionality that needed to be
            updated. After heavy brainstorming sessions with the client we laid out the changes that were inevitable with the help of wireframing.
          </p>
        </div>
        <img src={design} alt="" className="img w-24 px-6" />
      </section>

      <section className="py-6 px-6 container txt-center">
        <h1 className="font-bolder mb-6">Typography</h1>
        <img src={typography} alt="" className="img w-24" />
      </section>

      <section className="py-6 px-6 container txt-center">
        <h1 className="font-bolder mb-6">Colors</h1>
        <img src={colorpallet} alt="" className="img w-24" />
      </section>

      <section className="py-6 container txt-center">
        <h1 className="font-bolder px-6">The Final Takeaway</h1>
        <p className="px-6 txt-justify txt-left@md">
          After re-designing the entire website and making it pixel perfect from every aspect, the challenge was to integrate the new design with the older technology that it was developed in. We used Vtiger CRM, a popular platform for ensuring
          marketing ROI along with Zend Framework as a third-party coordinator. As far as the new design was concerned, it was in touch with the clients business goals.
        </p>
        <img src={final} alt="" className="img w-24" />
      </section>
    </div>
  );
}
