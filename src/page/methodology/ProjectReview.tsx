import React from "react";
import { Helmet } from "react-helmet";

import Fluid from "../../image/fluid.svg";
import home from "../../image/methodology/projectreview.svg";
import collaboration from "../../image/methodology/collaboration.svg";

export default function ProjectReview() {
  return (
    <>
      <Helmet>
        <title>Project Review | QuellxCode</title>
        <meta name="description" content="Taking proactive measures for efficient delivery | QuellxCode" />
      </Helmet>

      <section className="p-10 pl-10@md pt-2@md pr-2@md pb-0@md h-min-100vh grid align-middle">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" />
        </div>

        <div className="column w-24 w-12@md">
          <h1 className="title is-sm font-bolder">Taking proactive measures for efficient delivery</h1>
          <h4>Occasional survey to teach a 360° perspective on each circumstance in a task</h4>
          <div className="mb-6">
            This audit procedure happens inside various time periods dependent on complex and difficult nature. The point is to audit key expectations, group arrangement, and everything that impact opportune and powerful conveyance of venture.
          </div>
        </div>
        <div className="column hidden block@md">
          <img className="img" src={home} alt="" />
        </div>

        <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
          <i className="icon ri-2x ri-arrow-down-line" />
        </button>
      </section>

      <section className="px-6 py-6 grid align-middle has-gap-lg" id="scrolldownView">
        <div className="column w-24 w-12@md order-1 order-0@md">
          <img src={collaboration} alt="" className="img" />
        </div>
        <div className="column w-24 w-12@md pl-4">
          <h5 className="mb-8">
            "Exclusive sets or HIRE Model methodology in straightforward terms is tied in with picking and making your own group to deal with your product advancement venture so you stay concentrated on centre business zones. You can employ them on a
            full time, part-time or hourly basis, from a single person to a group of developers, that will be working freely or related to another team(s)."
          </h5>
          <p>
            With successful mutual effort, a committed programming improvement group can have clear bits of knowledge about the task objective. The business vision and objectives about what your END clients are relied upon to get are clarified ahead
            of time alongside a guide on venture the executives – from the opening shot to conveyance.
          </p>
          <p>What's more, from our 20+ long periods of experience, we can ensure that this methodology expands productivity, quality and timely delivery of the project by a great deal.</p>
        </div>
      </section>
    </>
  );
}
