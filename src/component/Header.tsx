import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Headroom from "headroom.js";

import { Link } from "react-router-dom";

import logo from "../image/logo.png";
import logowhite from "../image/logowhite.png";

import services from "../image/header/services.jpg";
import team from "../image/header/team.jpg";

import dis from "../image/methodology/dis.png";
import rem from "../image/methodology/rem.png";
import rev from "../image/methodology/rev.png";
import exe from "../image/methodology/exe.png";

export interface props {
  className?: string;
  toggleSiderbar: any;
}

Header.defaultProps = {
  className: "",
  toggleSiderbar: () => console.log("toggle")
} as props;

export default function Header(props: props) {
  let { pathname } = useLocation();
  let black = pathname.toLowerCase().includes("marketing");
  let white =
    (pathname.toLowerCase().includes("casestudy/") && !pathname.toLowerCase().includes("casestudy/supportlads")) ||
    pathname.toLowerCase().includes("social-media-marketing") ||
    pathname.toLowerCase().includes("advertising-branding") ||
    pathname.toLowerCase().includes("search-engine-optimization");
  let whitelogo =
    // pathname.toLowerCase().includes("casestudy/citzen") ||
    pathname.toLowerCase().includes("advertising-branding") ||
    pathname.toLowerCase().includes("social-media-marketing") ||
    pathname.toLowerCase().includes("search-engine-optimization") ||
    pathname.toLowerCase().includes("casestudy/bolan") ||
    pathname.toLowerCase().includes("casestudy/efund") ||
    pathname.toLowerCase().includes("casestudy/techwizors");
  // pathname.toLowerCase().includes("casestudy/startem");
  // pathname.toLowerCase().includes("casestudy/electronicvisitverification") ||
  // pathname.toLowerCase().includes("casestudy/vease");
  const ref = useRef<HTMLDivElement>(null);

  const [atTop, setAtTop] = useState<boolean>(false);

  useEffect(() => {
    new Headroom(ref.current, {
      // vertical offset in px before element is first unpinned
      offset: 90,
      // scroll tolerance in px before state changes
      tolerance: 5,
      // or you can specify tolerance individually for up/down scroll
      // tolerance: {
      //   up: 5,
      //   down: 0
      // },
      // css classes to apply
      classes: {
        // when element is initialised
        initial: "animate__animated",
        // when scrolling up
        pinned: "animate__slideInDown",
        // when scrolling down
        unpinned: "animate__slideOutUp",
        // when above offset
        top: "headroom--top",
        // when below offset
        notTop: "headroom--not-top is-collapse",
        // when at bottom of scoll area
        bottom: "headroom--bottom",
        // when not at bottom of scroll area
        notBottom: "headroom--not-bottom",
        // when frozen method has been called
        frozen: "headroom--frozen"
      },
      // element to listen to scroll events on, defaults to `window`
      scroller: window,
      // callback when pinned, `this` is headroom object
      onPin: () => {},
      // callback when unpinned, `this` is headroom object
      onUnpin: () => {},
      // callback when above offset, `this` is headroom object
      onTop: () => setAtTop(true),
      // callback when below offset, `this` is headroom object
      onNotTop: () => setAtTop(false),
      // callback when at bottom of page, `this` is headroom object
      onBottom: () => {},
      // callback when moving away from bottom of page, `this` is headroom object
      onNotBottom: () => {}
    }).init();
  }, [pathname]);

  return (
    <>
      <header ref={ref} className={`${white ? "is-white" : ""} ${black ? "is-black" : ""} lyt-header fixed top-0 grid justify-between`}>
        <div className="column w-3@lg w-8@md w-14 p-7px">
          <Link to="/">
            <img src={whitelogo && atTop ? logowhite : logo} alt="Logo" className="img w-24" />
          </Link>
        </div>

        <div className="column off-1@lg flex align-midle align-self-stretch justify-end justify-center@lg p-0 relative z-top">
          <button className="hidden@lg inline-block hamburger hamburger--spin" onClick={props.toggleSiderbar} type="button">
            <span className="hamburger-box" children={<span className="hamburger-inner" />} />
          </button>
          <div className="txt-center hidden flex@lg flex-wrap justify-center align-self-stretch w-24" id="nav">
            <Link to="/about" className={`btn ${(white || black) && atTop ? "is-light" : "is-primary"} border-hide is-min h-100 inline-flex align-middle px-2rem txt-decor-none font-bold`}>
              About
            </Link>

            <div className="dropdown on-hover h-100 inline-flex align-middle">
              <Link to="/services" className={`btn ${(white || black) && atTop ? "is-light" : "is-primary"} border-hide is-min h-100 inline-flex align-middle px-2rem dropdown-trigger after-hide font-bold`}>
                Services
              </Link>
              <div style={{ width: "100%", maxWidth: "75%", minWidth: "700px" }} className="absolute txt-left left-50 trans-x--50 menu py-0 border shadow-sm">
                <div className="grid">
                  <div className="overflow-hidden column w-8 flex align-bottom txt-wrap bg-primary img-bg p-2 clr-white" style={{ backgroundImage: `linear-gradient(to bottom, #03589866, #035898b3), url('${team}')` }}>
                    <div>
                      <h3>Hire Team</h3>
                      <div>Create your own agile squad with experienced members just like your local team.</div>
                      <Link to="/hire-us" className="btn is-sld is-light is-pill mt-6">
                        Know More
                      </Link>
                    </div>
                  </div>
                  <div className="column grid p-2">
                    <div className="column w-12 p-2">
                      <Link to="/services/web-design-development" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <div className="column w-auto">
                          <i className="icon ri-globe-fill" />
                        </div>
                        <div className="column">Web Design and Development</div>
                      </Link>
                      <div className="border-left border-wide border-primary pl-4">
                        <Link to="/services/web-design-development" about="EnterpriseSolutions" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                          Enterprise Solutions
                        </Link>
                        <Link to="/services/web-design-development" about="ECommerce" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                          ECommerce
                        </Link>
                        <Link to="/services/web-design-development" about="ContentManagementSystem" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                          Content Management System
                        </Link>
                        <Link to="/services/web-design-development" about="CustomWebDevelopment" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                          Custom Web Design and Development
                        </Link>
                      </div>
                    </div>

                    <div className="column w-12 p-2">
                      <Link to="/services/mobile-app-development" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <div className="column w-auto">
                          <i className="icon ri-smartphone-fill" />
                        </div>
                        <div className="column">Mobile</div>
                      </Link>
                      <div className="border-left border-wide border-primary pl-4">
                        <Link to="/services/mobile-app-development" about="IOSAppsDevelopment" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                          IOS Apps Development
                        </Link>
                        <Link to="/services/mobile-app-development" about="AndroidAppDevelopment" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                          Android App Development
                        </Link>
                        <Link to="/services/mobile-app-development" about="MobileAppsDrivenbyCloud" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                          Mobile Apps Driven by Cloud
                        </Link>
                        <Link to="/services/mobile-app-development" about="HybridAppDevelopment" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                          Hybrid App Development
                        </Link>
                        <Link to="/services/mobile-app-development" about="ProgressiveWebAppDevelopment" className="block txt-left border-hide is-sm btn is-min is-primary txt-cap">
                          Progressive Web App Development
                        </Link>
                      </div>
                    </div>

                    <div className="column w-12 p-2">
                      <Link to="/services/digital-marketing" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <div className="column w-auto">
                          <i className="icon ri-funds-fill" />
                        </div>
                        <div className="column">Digital Marketing</div>
                      </Link>
                    </div>

                    <div className="column w-12 p-2">
                      <Link to="/services/advertising-branding" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <div className="column w-auto">
                          <i className="icon ri-compasses-fill" />
                        </div>
                        <div className="column">Advertising and Branding</div>
                      </Link>
                    </div>

                    <div className="column w-12 p-2">
                      <Link to="/services/social-media-marketing" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <div className="column w-auto">
                          <i className="icon ri-smartphone-fill" />
                        </div>
                        <div className="column">Social Media Marketing</div>
                      </Link>
                    </div>

                    <div className="column w-12 p-2">
                      <Link to="/services/search-engine-optimization" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <div className="column w-auto">
                          <i className="icon ri-smartphone-fill" />
                        </div>
                        <div className="column">Search Engine Optimization</div>
                      </Link>
                    </div>

                    <div className="column w-12 p-2">
                      <Link to="/services/ux-ui-designing" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <div className="column w-auto">
                          <i className="icon ri-smartphone-fill" />
                        </div>
                        <div className="column">Ux Ui</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown on-hover h-100 inline-flex align-middle">
              <Link to="/methodology" className={`btn ${(white || black) && atTop ? "is-light" : "is-primary"} border-hide is-min h-100 inline-flex align-middle px-2rem dropdown-trigger after-hide font-bold`}>
                Methodologies
              </Link>
              <div style={{ width: "100%", maxWidth: "75%", minWidth: "700px" }} className="absolute txt-left left-50 trans-x--50 menu py-0 border shadow-sm">
                <div className="grid">
                  <div className="overflow-hidden column w-8 flex align-bottom txt-wrap bg-primary img-bg p-2 clr-white" style={{ backgroundImage: `linear-gradient(to bottom, #03589866, #035898b3), url('${services}')` }}>
                    <div>
                      <h3>Our Services</h3>
                      <div>Web and Mobile Software Development Services</div>
                      <Link to="/services" className="btn is-sld is-light is-pill mt-6">
                        Know More
                      </Link>
                    </div>
                  </div>
                  <div className="column grid p-2">
                    <div className="column w-12 p-2">
                      <Link to="/methodology/discovery-process" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <span className="column w-3 flex align-self-baseline py-4">
                          <img alt="" src={dis} className="img" />
                        </span>
                        <span className="column w-21 block">
                          <span className="block font-bold">Discovery Process</span>
                          <span className="block clr-body is-sm txt-justify">Transforming ideas into a measurable scope with functional UI/UX Design.</span>
                        </span>
                      </Link>
                    </div>

                    <div className="column w-12 p-2">
                      <Link to="/methodology/project-execution" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <span className="column w-3 flex align-self-baseline py-4">
                          <img alt="" src={exe} className="img" />
                        </span>
                        <span className="column w-21 block">
                          <span className="block font-bold">Project Execution</span>
                          <span className="block clr-body is-sm txt-justify">Form an expert team who works remotely, under your supervision.</span>
                        </span>
                      </Link>
                    </div>

                    <div className="column w-12 p-2">
                      <Link to="/methodology/dedicated-teams" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <span className="column w-3 flex align-self-baseline py-4">
                          <img alt="" src={rem} className="img" />
                        </span>
                        <span className="column w-21 block">
                          <span className="block font-bold">Remote Team</span>
                          <span className="block clr-body is-sm txt-justify">Get to know how we balance the critical triangle of Cost, Time and Scope</span>
                        </span>
                      </Link>
                    </div>

                    <div className="column w-12 p-2">
                      <Link to="/methodology/project-review" className="btn is-unstyle txt-left clr-hover-focus-primary txt-cap mb-2 grid">
                        <span className="column w-3 flex align-self-baseline py-4">
                          <img alt="" src={rev} className="img" />
                        </span>
                        <span className="column w-21 block">
                          <span className="block font-bold">Project Review</span>
                          <span className="block clr-body is-sm txt-justify">Form an expert team who works remotely, under your supervision.</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/hire-us" className={`btn ${(white || black) && atTop ? "is-light" : "is-primary"} border-hide is-min h-100 inline-flex align-middle px-2rem txt-decor-none font-bold`}>
              Hire Us
            </Link>

            <Link to="/casestudy" className={`btn ${(white || black) && atTop ? "is-light" : "is-primary"} border-hide is-min h-100 inline-flex align-middle px-2rem txt-decor-none font-bold`}>
              Our Work
            </Link>
          </div>
        </div>

        <div className="column w-4@xl w-5 justify-end hidden flex@lg align-middle">
          <Link to="/contact-us" className="btn is-sld is-primary is-pill font-bold mr-1rem flex move-icon" style={{ padding: "10px 30px" }}>
            Contact Us <i className="icon ri-arrow-right-line ml-7px" />
          </Link>
        </div>
      </header>
    </>
  );
}
