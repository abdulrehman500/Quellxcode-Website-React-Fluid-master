import React from "react";
import { Helmet } from "react-helmet";

import Fluid from "../../image/fluid.svg";
import home from "../../image/methodology/dicoveryprocess/discoveryprocess.svg";

import one_pik from "../../image/methodology/dicoveryprocess/1.svg";
import two_pik from "../../image/methodology/dicoveryprocess/2.svg";
import three_pik from "../../image/methodology/dicoveryprocess/3.svg";
import four_pik from "../../image/methodology/dicoveryprocess/4.svg";
import five_pik from "../../image/methodology/dicoveryprocess/5.png";
import six_pik from "../../image/methodology/dicoveryprocess/6.svg";
import seven_pik from "../../image/methodology/dicoveryprocess/7.svg";

export default function DiscoveryProcess() {
  return (
    <>
      <Helmet>
        <title>Discovery Workshop | QuellxCode</title>
        <meta name="description" content="Reshaping business thoughts into best solutions" />
      </Helmet>

      <section className="p-10 pl-10@md pt-2@md pr-2@md pb-0@md h-min-100vh grid align-middle">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" />
        </div>

        <div className="column w-24 w-12@md">
          <h1 className="title is-sm font-bolder">Discovery Workshop</h1>
          <h4>Reshaping business thoughts into best solutions</h4>
          <div className="mb-6">
            We convey web and portable application development administrations to worldwide businesses
            since 2013, with 100% task conveyance achievement. Recruit the best software developers at reasonable costs. Our plan centered methodology and
            venture execution forms help you to convey the correct arrangements.
          </div>
        </div>
        <div className="column hidden block@md">
          <img className="img" src={home} alt="" />
        </div>

        <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
          <i className="icon ri-2x ri-arrow-down-line" />
        </button>
      </section>

      <section className="px-6 py-6@md py-10 container bg-light txt-center" id="scrolldownView">
        <h1 className="font-bolder mb-4">Forefronts of Discovery Workshop</h1>
        <div className="grid has-gap-lg">
          <div className="column w-8@md w-24">
            <img src={one_pik} alt="" className="img mb-6" />
            <h5 className="font-bolder">Understanding</h5>
            <div>Our entire team can understand and be on same page with clients’ businesses’ vision and goals</div>
          </div>
          <div className="column w-8@md w-24">
            <img src={two_pik} alt="" className="img mb-6" />
            <h5 className="font-bolder">Research</h5>
            <div>We make our own approach and research any aspect that we might feel unsure about.</div>
          </div>
          <div className="column w-8@md w-24">
            <img src={three_pik} alt="" className="img mb-6" />
            <h5 className="font-bolder">Implementation</h5>
            <div>Allowing UI/UX and development teams to go through detailed information for splendid deliveries.</div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6@md py-10 container grid align-middle has-gap-lg">
        <div className="column w-24 w-12@md txt-center order-1 order-0@md">
          <img src={four_pik} alt="" className="img" />
        </div>
        <div className="column w-24 w-12@md pl-4">
          <h1 className="font-bolder txt-center mb-8">The Purpose</h1>
          <h5 className="font-bolder my-4 txt-left txt-justify@md">
            "The objective of Discovery Workshop is to teach our customers to give exhaustive data through meetings to generate new ideas before the development cycle starts. This will assist us with delivering a vigorous, novel and out-of-the-case
            solutions with splendid UI/UX design utilizing the up-to-date setting innovations".
          </h5>
          <div>The crucial goal isn't just to share project necessities, yet additionally to comprehend customer desires and encourage them with our quality and experience.</div>
        </div>
      </section>

      <section className="px-6 py-6@md py-10 container txt-center">
        <h1 className="font-bolder">Allowing UI/UX and development teams to go through detailed information for impeccable deliverables</h1>
        <div className="my-4">
          In progressively less difficult terms, for a product development or portable application development project, Discovery Workshop is the pre-development phase of get-together and sharing important undertaking data among customer and the task
          group. The stage for data sharing could be onsite/offsite meetups and online gatherings
        </div>
        <img src={five_pik} alt="" className="img w-20@md w-24" />
        <div className="my-4">
          An uncommonly curated meeting is a project commencement procedure to get down to business with your thoughts, engineer your needs and to take your item just from an idea to cutting edge development stages in lesser time.
        </div>
        <div className="grid has-gap-lg txt-left">
          <div className="column w-12@md w-24">
            <div className="p-6 is-round-sm card-line card-hover border-light h-100 relative bg-white">
              <div className="mb-4 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-3x">
                  <img src={six_pik} alt="" className="img" />
                </i>
              </div>

              <h5>What can a customer expect during these meetings?</h5>
              <div className="txt-justify mb-2">Dissect, recognize and present data on center vision, industry issues, key investigation, specialty targets, project scope, and so on.</div>
            </div>
          </div>

          <div className="column w-12@md w-24">
            <div className="p-6 is-round-sm card-line card-hover border-light h-100 relative bg-white">
              <div className="mb-4 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-3x">
                  <img src={seven_pik} alt="" className="img" />
                </i>
              </div>

              <h5>What can a project group accomplish for you?</h5>
              <div className="txt-justify mb-2">Investigate the subject area and business stream, distinguish bottlenecks and present significant solutions, compose the messiness, make a guide.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
