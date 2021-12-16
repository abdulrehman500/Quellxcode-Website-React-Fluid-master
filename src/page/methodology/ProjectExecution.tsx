import React from "react";

import Fluid from "../../image/fluid.svg";
import home from "../../image/methodology/projectexecucation/projectexecution.svg";
import waterfall from "../../image/methodology/projectexecucation/waterfall.jpg";
import agile from "../../image/methodology/projectexecucation/agile.jpg";

import one_pik from "../../image/methodology/projectexecucation/1.webp";
import two_pik from "../../image/methodology/projectexecucation/2.webp";
import three_pik from "../../image/methodology/projectexecucation/3.png";

export default function ProjectExecution() {
  return (
    <>
      <section className="p-10 pl-10@md pt-2@md pr-2@md pb-0@md h-min-100vh grid align-middle">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" />
        </div>

        <div className="column w-24 w-12@md">
          <h1 className="title is-sm font-bolder">Project Execution Process</h1>
          <h4>Taking care of business thoughts into powerful solutions</h4>
          <div className="mb-6">QuellxCode Pvt Ltd. project execution procedure represents a wide range of projects, regardless of whether you're beginning little, developing efficiently or effectively innovative. Our methodology towards each project is arranged and even to each customer's necessity.</div>
        </div>
        <div className="column hidden block@md">
          <img className="img" src={home} alt="" />
        </div>

        <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
          <i className="icon ri-2x ri-arrow-down-line" />
        </button>
      </section>

      <section className="px-6 py-6@md py-10 container" id="scrolldownView">
        <h1 className="font-bolder mb-4 txt-center">Working Methodologies</h1>
        <div className="grid has-gap-0 clr-white align-middle">
          <div className="column w-12@md w-24 p-6 img-bg shadow-round" style={{ backgroundImage: `url(${waterfall})` }}>
            <img src={one_pik} alt="" className="img w-5 mb-6" />
            <h1 className="font-bolder mb-4">Waterfall Method</h1>
            <h5 className="mb-8">For Constrained Budget</h5>
            <div>Very clear scope and stable set of requirements that isn't likely to change throughout the project</div>
          </div>
          <div className="column w-12@md w-24 p-8 img-bg shadow-round" style={{ backgroundImage: `url(${agile})` }}>
            <img src={two_pik} alt="" className="img w-7 mb-6" />
            <h1 className="font-bolder mb-4">Agile Scrum</h1>
            <h5 className="mb-8">For Evolving Scope/Hired Team</h5>
            <div>Very clear scope and stable set of requirements that is likely to change throughout the project</div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6@md py-10 container">
        <h1 className="font-bolder">How to Engage?</h1>
        <p>Each project is remarkable – and henceforth requires a devoted and uncommon treatment. Other than the basic triangle of cost, time and degree, the working model between the 'customer' and the 'agency ' likewise assumes a pivotal job in adjusting the previous.</p>
        <p>That is the reason QuellxCode Pvt. Ltd have clear and vigorous project execution models which are entirely adaptable and customer driven at their center. However, before leaving on any project, regardless of whether it's a basic site or an increasingly mind boggling programming development, it is significant we assist you with utilizing the 'right' project execution model.</p>
        <p>“A project might be completed without the use of a project execution process, but most times, the absence of one leads to the failure of it”.</p>
        <div className="txt-center">
          <img src={three_pik} alt="" className="img w-12@md w-24" />
        </div>
      </section>
    </>
  );
}
