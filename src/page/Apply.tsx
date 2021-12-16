import React from "react";
import { Helmet } from "react-helmet";

import Fluid from "../image/fluid.svg";
import home from "../image/career/apply.svg";
import ApplyForm from "../component/ApplyForm";
import { useParams } from "react-router-dom";

export interface props {
  className?: string;
}

Apply.defaultProps = {
  className: ""
} as props;

export default function Apply(props: props) {
  let param: { name: string } = useParams();

  return (
    <>
      <Helmet>
        <title>Apply For Job | QuellxCode</title>
        <meta name="description" content="Full fledged task management system with in depth account management" />
      </Helmet>

      <section className="p-10 pl-10@md pt-2@md pr-2@md pb-0@md h-min-100vh grid align-middle">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5" />
        </div>

        <div className="column w-24 w-12@lg">
          {/* <div className="column h-100vh flex align-middle"> */}
          <img className="img w-24" src={home} alt="" />
        </div>
        <div className="column w-24 w-12@lg pt-10">
          <h1 className="title is-sm font-bolder">
            {param.name
              .toLowerCase()
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")}
          </h1>
          <div className="mb-2">
            <h5>Requirement</h5>
            <ul className="list icon-check-circle">
              <li className="block">Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model.</li>
              <li className="block">Experience with Core web fundamentals: HTML, JavaScript, and CSS like Sass or LESS</li>
              <li className="block">Ability to understand business requirements and translate them into technical requirements</li>
              <li className="block">Experience with common front-end development tools such as Babel, Webpack, NPM, etc.</li>
              <li className="block">Familiarity with code versioning tools such as Git, SVN, and Mercurial</li>
              <li className="block">Knowledge of modern authorisation mechanisms, such as JSON Web Token</li>
              <li className="block">Familiarity with modern front-end build pipelines and tools</li>
              <li className="block">Experience with popular ReactJS workflows (such as Flux or Redux)</li>
              <li className="block">Thorough understanding of ReactJS and its core principles.</li>
              <li className="block">Familiarity with newer specifications of EcmaScript</li>
              <li className="block">Familiarity with NextJs framework.</li>
              <li className="block">Familiarity with RESTful APIs</li>
            </ul>
          </div>

          <div className="mb-2">
            <h5>Skills</h5>
            <ul className="list icon-check-circle">
              <li>Job Related Skills</li>
            </ul>
          </div>

          <div className="mb-2">
            <h5>Working hours</h5>
            <ul className="list icon-check-circle is-inline">
              <li>9am - 5pm</li>
            </ul>
          </div>

          <div className="mb-2">
            <h5>Job Types</h5>
            <ul className="list icon-check-circle is-inline">
              <li>Full-time</li>
              <li>Contract</li>
            </ul>
          </div>

          <div className="mb-2">
            <h5>Experience</h5>
            <ul className="list icon-check-circle is-inline">
              <li>2+ year </li>
            </ul>
          </div>

          <div className="mb-2">
            <h5>Education</h5>
            <ul className="list icon-check-circle is-inline">
              <li>Bacholars</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-6 px-6 ">
        <h1 className="txt-center">Apply Now</h1>
        <ApplyForm />
        <div className="is-sm my-4 ml-4">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
      </section>
    </>
  );
}
