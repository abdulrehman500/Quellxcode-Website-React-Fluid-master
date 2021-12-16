import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Fluid from "../image/fluid.svg";
import mailus from "../image/career/mailus.svg";

import react_icon from "../image/icons/reactjs-icon.png";
import angular_icon from "../image/icons/angular-icon.png";
import php_icon from "../image/icons/php-icon.png";
import wordpress_icon from "../image/icons/wordpress-icon.png";
import js_icon from "../image/icons/js-icon.png";

export interface props {
  className?: string;
}

Career.defaultProps = {
  className: ""
} as props;

export default function Career() {
  return (
    <>
      <Helmet>
        <title>Career | QuellxCode</title>
        <meta name="description" content="We believe that the raw talent has no boundaries" />
      </Helmet>

      <section className="txt-center@md px-0@lg p-10 container w-max-100 h-min-100vh flex align-middle justify-center">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md w-24">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" />
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 flip-xy right-0" />
        </div>

        <div className="mt-6 container px-6">
          <h1 className="title is-sm font-bolder px-10">We believe that the raw talent has no boundaries</h1>
          <div className="is-lg mb-2">
            Joining QuellxCode Pvt Ltd means so much more than working for a reputed app development company in India. We’ve built this business with the passion for innovation and a flexible approach in what we do. That’s why we keep our eyes and
            ears open for smart people who get things done.
          </div>
          <div>
            <div className="is-lg font-bolder">Hire character. Train skill.</div>
            <div>– Peter Schutz</div>
          </div>
          <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
            <i className="icon ri-2x ri-arrow-down-line" />
          </button>
        </div>
      </section>

      <section className="container px-6 py-6@md py-10 txt-center bg-light" id="scrolldownView">
        <h1 className="font-bolder">We don't offer Jobs. We offer Careers.</h1>
        <div>
          The secret of our success is the people we recruit and we are looking for the best. We are always looking for people who can bring new perspectives to our teams. If you want to be part of a team that values your enthusiasm, passion, and
          creativity, if you are seeking colleagues who are big thinkers, eager to take on fresh challenges as a team, apply below.
        </div>
      </section>

      <section className="px-6 py-6 container" id="scrolldownView">
        <div className="grid has-gap-lg">
          <div className="column w-24 w-12@md w-8@lg color_on_hover w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px", padding: "1rem" }}>
                <img src={angular_icon} className="img" alt="icon" />
              </div>
              <h5 className="font-bolder">Angular Js Developer</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply/angular-js-developer" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-24 w-12@md w-8@lg  color_on_hover w-8">
            <div className="p-8  is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow  is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px", padding: "1rem" }}>
                <img src={react_icon} className="img" alt="icon" />
              </div>
              <h5 className="font-bolder">React Js Developer</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply/react-js-developer" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-24 w-12@md w-8@lg color_on_hover w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow  is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px", padding: "1rem" }}>
                <i className="icon ri-3x">
                  <img src={angular_icon} className="img" alt="icon" />
                </i>
              </div>
              <h5 className="font-bolder">MEAN Stack Developer</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply/mean-stack-developer" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-24 w-12@md w-8@lg color_on_hover w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px", padding: "1rem" }}>
                <i className="icon ri-3x">
                  <img src={react_icon} className="img" alt="icon" />
                </i>
              </div>
              <h5 className="font-bolder">MERN Stack Developer</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply/mern-stack-developer" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-24 w-12@md w-8@lg color_on_hover w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow  is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px", padding: "1rem" }}>
                <i className="icon ri-3x">
                  <img src={js_icon} className="img" alt="icon" />
                </i>
              </div>
              <h5 className="font-bolder">Javascript Developer</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply/javascript-developer" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-24 w-12@md w-8@lg color_on_hover w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px", padding: "1rem" }}>
                <i className="icon ri-3x">
                  <img src={wordpress_icon} className="img" alt="icon" />
                </i>
              </div>
              <h5 className="font-bolder">Wordpress Developer</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply/wordpress-developer" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-24 w-12@md w-8@lg color_on_hover w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px", padding: "1rem" }}>
                <i className="icon ri-3x">
                  <img src={php_icon} className="img" alt="icon" />
                </i>
              </div>
              <h5 className="font-bolder">PHP Laravel Daveloper</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply/-php-laravel-daveloper" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>

          <div className="column w-24 w-12@md w-8@lg color_on_hover w-8">
            <div className="p-8 is-round-sm card-hover border-light h-100 relative bg-white">
              <div className="mb-8 shadow  is-circle flex align-middle justify-center" style={{ height: "75px", width: "75px", padding: "1rem" }}>
                <i className="icon ri-3x">
                  <img src={react_icon} className="img" alt="icon" />
                </i>
              </div>
              <h5 className="font-bolder">React Native Developer</h5>
              <div className="txt-justify mb-2">It uses the user's history to suggest similar products or services. Just like the suggestions while shopping from Amazon or watching Netflix. </div>
              <Link to="/career/apply/React Native Developer" className="btn is-min stretch-link border-hide static is-primary pl-0">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6 container grid align-middle bg-light">
        <div className="column w-24 w-12@md">
          <h1 className="font-bolder">Couldn’t find the job you are looking for?</h1>
          <div>
            Send your resume on
            <a href="mailto:hr@quellxcode.com" className="ml-7px">
              hr@quellxcode.com
            </a>
          </div>
        </div>
        <div className="column w-24 w-12@md">
          <img src={mailus} alt="mailus" className="img" />
        </div>
      </section>
    </>
  );
}
