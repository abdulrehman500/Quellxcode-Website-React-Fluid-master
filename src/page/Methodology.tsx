import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Fluid from "../image/fluid.svg";
import one_pik from "../image/methodology/icon/1.svg";
import two_pik from "../image/methodology/icon/2.svg";
import three_pik from "../image/methodology/icon/3.svg";
import four_pik from "../image/methodology/icon/4.svg";
import enterprise_icon from "../image/methodology/icon/enterprise.svg";
import business_icon from "../image/methodology/icon/business.svg";
import consumers_icon from "../image/methodology/icon/consumers.svg";

import ionic_icon from "../image/icons/ionic-icon.png";
import swift_icon from "../image/icons/swift-icon.png";
import kotlin_icon from "../image/icons/kotlin-icon.png";
import objectivec_icon from "../image/icons/objc-icon.png";
import xamarin_icon from "../image/icons/xamarin-icon.svg";

// import cross_pik from "../image/methodology/mobile-app-development-cross-platform-img.webp";

export default function Methodology() {
  return (
    <>
      <Helmet>
        <title>Work Methodology for Building Software Solutions | QuellxCode</title>
        <meta name="description" content="Work Methodology for Building Software Solutions" />
      </Helmet>

      <section className="txt-center@md px-0@lg p-10 container w-max-100 h-min-100vh flex align-middle justify-center">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md w-24">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" />
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 flip-xy right-0" />
        </div>

        <div className="mt-6 container px-6">
          <h1 className="title is-sm font-bolder">Work Methodology for Building Software Solutions</h1>
          <div>
            Standing tall since 2013, we have learned not only from success, but from failures too. It helped us to understand what you (as a client) really need. Is it just a software product that you require? No, you need much more than that.
            Handful information and clarity about the company before you engage.
          </div>
          <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
            <i className="icon ri-2x ri-arrow-down-line" />
          </button>
        </div>
      </section>

      <section className="py-6@md py-10 px-6 container txt-center bg-light" id="scrolldownView">
        <h1 className="font-bolder">Why is it important to You and Us?</h1>
        <p className="mb-2 txt-justify">
          QuellxCode Pvt Ltd’s working mantra has always been cemented around client satisfaction and quality. Over two decades of experience and stability as a trusted software development company has taught us many things about the customer’s
          initial needs. In most cases, the most common question is what will happen and how, right?
        </p>
        <p className="txt-justify">
          The information hereby will help you to understand what is essential for your business idea, how do we work, and how to save time by coming up witgh the required information beforehand. Please remember that we care about your business idea
          as much as you do!
        </p>
        <div>
          <a href="https://ionicframework.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
            <i className="icon inline-flex align-middle ri-2x">
              <img className="img" src={ionic_icon} alt="ionic" />
            </i>
          </a>
          <a href="https://developer.apple.com/swift" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
            <i className="icon inline-flex align-middle ri-2x">
              <img className="img" src={swift_icon} alt="swift" />
            </i>
          </a>
          <a href="https://kotlinlang.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
            <i className="icon inline-flex align-middle ri-2x">
              <img className="img" src={kotlin_icon} alt="kotlin" />
            </i>
          </a>
          <a href="https://en.wikipedia.org/wiki/Objective-C" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
            <i className="icon inline-flex align-middle ri-2x">
              <img className="img" src={objectivec_icon} alt="objectivec" />
            </i>
          </a>

          <a href="https://dotnet.microsoft.com/apps/xamarin" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
            <i className="icon inline-flex align-middle ri-2x">
              <img className="img" src={xamarin_icon} alt="xamarin" />
            </i>
          </a>
        </div>
        {/* <img src={cross_pik} alt="" className="img w-18" /> */}
      </section>

      <section className="py-6@md py-10 px-6 container">
        <div className="txt-center">LEARN MORE ON</div>
        <h1 className="font-bolder txt-center">Our Work Methodologys</h1>
        <div className="grid has-gap-lg">
          <div className="column w-12@md w-24">
            <div className="p-6 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-4 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-3x">
                  <img src={one_pik} alt="" className="img" />
                </i>
              </div>

              <h5>Discovery</h5>
              <div className="txt-justify mb-2">Transforming ideas into a measurable scope with functional UI/UX Design.</div>
              <Link to="/methodology/discovery-process" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Read more
              </Link>
            </div>
          </div>

          <div className="column w-12@md w-24">
            <div className="p-6 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-4 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-3x">
                  <img src={two_pik} alt="" className="img" />
                </i>
              </div>

              <h5>Project Execution</h5>
              <div className="txt-justify mb-2">Form an expert team who works remotely, under your supervision.</div>
              <Link to="/methodology/project-execution" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Read more
              </Link>
            </div>
          </div>

          <div className="column w-12@md w-24">
            <div className="p-6 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-4 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-3x">
                  <img src={three_pik} alt="" className="img" />
                </i>
              </div>

              <h5>Remote Team</h5>
              <div className="txt-justify mb-2">Get to know how we balance the critical triangle of Cost, Time and Scope</div>
              <Link to="/methodology/dedicated-teams" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Read more
              </Link>
            </div>
          </div>

          <div className="column w-12@md w-24">
            <div className="p-6 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-4 shadow p-2 is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px" }}>
                <i className="icon ri-3x">
                  <img src={four_pik} alt="" className="img" />
                </i>
              </div>

              <h5>Project Review</h5>
              <div className="txt-justify mb-2">Form an expert team who works remotely, under your supervision.</div>
              <Link to="/methodology/project-review" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4 px-6 bg-light">
        <h1 className="font-bolder txt-center">We help you create Apps for</h1>
        <div className="grid has-gap-lg">
          <div className="column w-8@md w-24 p-2 txt-center">
            <img className="img mb-6" src={enterprise_icon} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Enterprise</h4>
            <p className="txt-justify">
              Our collaborative consulting on Mobile Strategy serves as a catalyst in streamlining IT frameworks and processes with the mobile roadmap that is aligned with enterprise scenarios, policies and current systems.
            </p>
          </div>
          <div className="column w-8@md w-24 p-2 txt-center">
            <img className="img mb-6" src={business_icon} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Business</h4>
            <p className="txt-justify">We map business’s needs and use cases to enable them to quickly respond to the changes. We help your organization mobilize the inter-department communication, workflows and instant information availability.</p>
          </div>
          <div className="column w-8@md w-24 p-2 txt-center">
            <img className="img mb-6" src={consumers_icon} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Consumers</h4>
            <p className="txt-justify">Our mobile experts help brands, businesses and community organizations to build scalable mobile application solutions that are aimed to be used on a daily basis by global consumers, multiple times in a day.</p>
          </div>
        </div>
      </section>
    </>
  );
}
