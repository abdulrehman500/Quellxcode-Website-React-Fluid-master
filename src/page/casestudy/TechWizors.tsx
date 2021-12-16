import React, { useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Helmet } from "react-helmet";

import title from "../../image/casestudy/techwizors/title.png";
import concept from "../../image/casestudy/techwizors/concept.webp";
import header from "../../image/casestudy/techwizors/header.webp";
import slice1 from "../../image/casestudy/techwizors/slice1.webp";
import slice2 from "../../image/casestudy/techwizors/slice2.jpg";
import slice3 from "../../image/casestudy/techwizors/slice3.jpg";

export default function TechWizors() {
  const body = useRef(null);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <>
      <Helmet>
        <title>Tech Wizors | Branding</title>
        <meta name="description" content="Branding Design for a Tech Company" />
      </Helmet>

      <div ref={body} className="clr-white bg-primary">
        <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary", "clr-white"])}>
          <section className="pb-6 pt-10 px-6 h-min-100vh grid align-bottom">
            <div className="column w-9@lg w-24 absolute@lg txt-center txt-left@lg top-header right-0 mr-2@lg">
              <img src={title} alt="" className="img w-24@lg w-19 w-20@md" />
            </div>
            <div className="column pt-6 w-17@md w-24 order-1 order-0@md">
              <h1 className="font-bolder mb-2">Tech Wizors</h1>
              <div className="mb-4">Branding</div>
              <h1 className="title is-sm font-bolder mb-0">Branding Design for a Tech Company</h1>
            </div>
          </section>
        </VisibilitySensor>

        <section>
          <img className="img w-24" src={header} alt="" />
        </section>

        <section className="grid has-gap-lg h2 font-normal lg-1-5">
          <div className="column w-12@md w-24 px-4 py-6 bg-primary clr-secondary txt-center">
            <h1 className="font-bolder title is-sm mb-2">About</h1>
            <p className="mb-0">"Tech Wisor is a company which invests in tech-based ventures, both financially as well as in its development"</p>
          </div>
          <div className="column w-12@md w-24 px-4 py-6 bg-secondary clr-primary">
            <div className="mb-2 txt-center txt-left@md">The logo needed to be</div>
            <ul className="mb-0 list icon-check-circle">
              <li className="mb-2">Sophisticated</li>
              <li className="mb-2">Easily Readable</li>
              <li>Depict was investment in tech-based ventures</li>
            </ul>
          </div>
        </section>

        <section className="px-6 py-6 container txt-center">
          <h1 className="font-bolder title is-sm mb-6">Logo Elements</h1>
          <img src={concept} alt="" className="img" />
        </section>

        <section className="px-6 py-6 container txt-center">
          <h1 className="font-bolder title is-sm mb-6">Color Used</h1>
          <div className="grid">
            <div className="column w-12@md w-24">
              <div className="icon title is-lg bg-primary is-circle mb-4" />
              <h1>#1C4695</h1>
              <h4 className="font-normal">"the color symbolizes trust, stability, intelligence and wisdom"</h4>
            </div>
            <div className="column w-12@md w-24">
              <div className="icon title is-lg bg-secondary is-circle mb-4" />
              <h1>#95E8CB</h1>
              <h4 className="font-normal">"the color symbolizes growth, harmony, safety and energy"</h4>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <img src={slice1} alt="" className="img w-24" />
          <img src={slice2} alt="" className="img w-24" />
          <img src={slice3} alt="" className="img w-24" />
        </section>
      </div>
    </>
  );
}
