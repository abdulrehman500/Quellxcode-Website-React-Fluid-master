import React, { useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";

import colors from "../../image/casestudy/vease/colors.png";
import selectservice from "../../image/casestudy/vease/selectservice.webp";
import dealsprofitgraph from "../../image/casestudy/vease/dealsprofitgraph.webp";
import dealsswipe from "../../image/casestudy/vease/dealsswipe.webp";
import final from "../../image/casestudy/vease/final.webp";
import left from "../../image/casestudy/vease/left.webp";
import right from "../../image/casestudy/vease/right.webp";
import typography from "../../image/casestudy/vease/typography.png";
import title from "../../image/casestudy/vease/title.webp";
import confirmation from "../../image/casestudy/vease/confirmation.webp";
import map from "../../image/casestudy/vease/map.webp";

export default function Vease() {
  const body = useRef(null);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <div ref={body} className="clr-white bg-primary">
      <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary", "clr-white"])}>
        <section className="pb-6 pt-10 px-6 h-min-100vh grid align-bottom">
          <div className="column w-13@lg w-24 absolute@lg txt-center txt-left@lg top-header right-0 mr-2@lg">
            <img src={title} alt="" className="img w-24" />
          </div>
          <div className="column pt-6 w-17@md w-24">
            <h1 className="font-bolder mb-2">Vease</h1>
            <div className="mb-4">Web Design and Development </div>
            <h1 className="title is-sm font-bolder mb-0">This app empowers people to work for themselves</h1>
          </div>
        </section>
      </VisibilitySensor>

      <section className="pl-6@md py-6 grid has-gap-lg align-bottom">
        <div className="column w-12@md w-24 mb-6 order-1 order-0@md">
          <h1 className="font-bolder txt-center txt-left@md">About</h1>
          <p className="txt-justify txt-left@md">
            Vease is a unique digital service which aims to bridge the gap between Blue Collar Worker and potential employer. Finding worker like maid, driver, electrician etc is very hectic and tedious tasks as there is no WebPortal which have
            authentic contact information of workers. To find the right worker usually we rely on peer-contacts or we kept on asking someone for reference and still we end-up in trouble finding the reliable and authentic worker. On the other side
            around 80% of Pakistan economy is informal economy and Blue Collar Workers are always struggling to find the Job.
          </p>
        </div>
        <div className="column w-12@md w-24 p-0">
          <img src={dealsswipe} alt="" className="img" />
        </div>
      </section>

      <section className="pr-6@md py-6 grid has-gap-lg align-bottom">
        <div className="column w-12@md w-24 p-0 order-1 order-0lg">
          <img src={dealsprofitgraph} alt="" className="img" />
        </div>
        <div className="column w-12@md w-24 mb-6">
          <h1 className="font-bolder txt-center txt-left@md">Functinality</h1>
          <p className="txt-justify txt-left@md">
            Vease is envisioned to fill this ever growing gap with special focus for social uplifting of the workers to enable them to lead a prosper life. Vease is solving the problem of finding the right worker by providing access to authentic and
            reliable contact information of worker to potential employers.
          </p>
        </div>
      </section>

      <section className="pl-6@md py-6 grid has-gap-lg align-bottom">
        <div className="column w-12@md w-24 mb-6 mt-4 mt-0@md">
          <h1 className="font-bolder txt-center txt-left@md">Confirmation</h1>
          <p className="txt-justify txt-left@md">This App allows you to perform safe and secure transactions once your order is placed</p>
        </div>
        <div className="column w-12@md w-24 p-0">
          <img src={confirmation} alt="" className="img" />
        </div>
      </section>

      <section className="container py-6 px-6">
        <h1 className="font-bolder txt-center relative mb-10">
          <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10 hidden block@md">Colors </span>
          Colors
        </h1>

        <div className="txt-center">
          <img src={colors} alt="" className="img w-15" />
        </div>

        <h1 className="font-bolder txt-center relative my-10">
          <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10 hidden block@md">Typography</span>
          Typography
        </h1>
        <div className="txt-center">
          <img src={typography} alt="" className="img" />
        </div>
      </section>

      <section className="py-6">
        <h1 className="font-bolder txt-center relative mb-10">
          <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10 hidden block@md">Features</span>
          <span className="inline hidden@md">Features</span> Of This App
        </h1>

        <div className="grid txt-center txt-left@lg">
          <div className="column w-7@lg w-24 order-1 order-0@lg">
            <img src={left} alt="" className="img" />
          </div>

          <div className="column w-8@lg container w-24 mt-6 txt-justify">
            <ul className="pl-0 pl-1rem@md list icon-check-circle">
              <li>Creates User profile and allows users to find their required services</li>
              <li>Allows vendors to reach out to their associated targets</li>
              <li>Payments are done through safe and secure payment gateways</li>
              <li>Real time tracking</li>
              <li>Customers reviews and feedback</li>
            </ul>
          </div>

          <div className="column w-8 hidden block@lg">
            <img src={right} alt="" className="img" />
          </div>
        </div>
      </section>

      <section className="pr-6@md py-6 grid has-gap-lg align-bottom">
        <div className="column w-12@md w-24 p-0 order-1 order-0lg">
          <img src={map} alt="" className="img" />
        </div>
        <div className="column w-12@md w-24 mb-6">
          <h1 className="font-bolder txt-center txt-left@md">Reviews</h1>
          <p className="txt-justify txt-left@md">a formal assessment of tasks with the intention of instituting change if necessary.</p>
        </div>
      </section>

      <section className="pl-6@md py-6 grid has-gap-lg align-bottom">
        <div className="column w-12@md w-24 mb-6">
          <h1 className="font-bolder txt-center txt-left@md">Service selection</h1>
          <p className="txt-justify txt-left@md">Dynamically chooses services to fulfill a certain role in a system following the service-oriented architecture paradigm</p>
        </div>
        <div className="column w-12@md w-24 p-0">
          <img src={selectservice} alt="" className="img" />
        </div>
      </section>

      <section>
        <div className="px-6 py-6 container">
          <h1 className="font-bolder">Final Takeaway</h1>
          <p>
            Although this was a rather simplistic design interface, QuellxCode Pvt Ltd’s challenge was to make sure that the client who was venturing into the digital world for the first time, understood functionality and features easily. We also
            suggested the client to develop a second phase of the platform to take Vease to a defined new level.
          </p>
        </div>
        <img src={final} alt="" className="img" />
      </section>
    </div>
  );
}
