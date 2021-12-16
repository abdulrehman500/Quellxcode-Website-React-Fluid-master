import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Fluid from "../image/fluid.svg";
import BrandsWeWorkedWith from "../component/BrandsWeWorkedWith";

import team from "../image/header/team.jpg";

import people_pik from "../image/about/icon/people.svg";
import circle_pik from "../image/about/icon/circle.svg";
import rocket_pik from "../image/about/icon/blue_rocket.svg";

import OnVisible from "../component/OnVisible";

export interface props {
  className?: string;
}

About.defaultProps = {
  className: ""
} as props;

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | QuellxCode</title>
        <meta name="description" content="We are expertise in Web Design and Development, App Development and SEO services in Islamabad" />
      </Helmet>

      <section className="txt-center@md px-0@lg p-10 container w-max-100 h-min-100vh flex align-middle justify-center">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md w-24">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" />
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 flip-xy right-0" />
        </div>

        <div className="mt-6 container px-6">
          <div className="mb-2 hidden block@md">We are expertise in Web Design and Development, App Development and SEO services in Islamabad.</div>
          <h1 className="title is-sm font-bolder">Our excellence consists of our people, vision and worth.</h1>
          <div>
            As a group of IT advisors, developers and promoting masters, our extensive rundown of glad customers are confirmation of our ability and range of abilities with regards to conveying the best arrangements. Regardless of whether you need
            SEO Services, Web or Mobile development, Design aptitude or a marketing plan business, we have you secured.
          </div>

          <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
            <i className="icon ri-2x ri-arrow-down-line" />
          </button>
        </div>
      </section>

      <section id="scrolldownView" className="container px-6 py-6@md py-10 grid txt-justify bg-light">
        <div className="column w-24 w-12@md px-2">
          <h1 className="font-bolder">Who We Are</h1>
          <p className="mb-1rem">
            What started as a quest to find problems and solve them with the right solution; QuellxCode Pvt Ltd isn’t just another software house in Islamabad. We’re a team of highly professional individuals who believe there isn’t a single business
            problem that can’t be solved if you have the right tools and a passionate team to solve them with.
          </p>
          <p className="mb-1rem">
            We ensure that our clients can trust us with their problems and that we will come up with the right executions plan to bring their vision to life. Whether you’re a local business or located internationally, you will get nothing short of a
            well designed, sleek, and smart IT solution for your business problem.
          </p>
        </div>
        <div className="column w-24 w-12@md px-2">
          <h1 className="font-bolder">What We Do</h1>
          <p className="mb-1rem">
            As a team of IT consultants, developers and marketing gurus, our long list of happy clients are testament of our expertise and skill set when it comes to delivering the best solutions. whether you need SEO Services, Web or Mobile
            development, Design expertise or a marketing strategy customised for your brand or business, we’ve got you covered.
          </p>
          <ul className="list txt-left icon-check-circle">
            <li>Branding & Strategy</li>
            <li>Website design & development</li>
            <li>Social media marketing</li>
            <li>Search engine optimization</li>
            <li>Press releases & case studies</li>
            <li>Video & animation production</li>
          </ul>
        </div>
      </section>

      <section className="container py-4 px-6">
        <h1 className="font-bolder txt-center">Belief of Every QuellxCodeian</h1>
        <div className="grid has-gap-lg justify-center justify-start@lg">
          <div className="column w-24 w-8@lg w-12@md   p-2 txt-center">
            <img className="img mb-6" src={people_pik} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Client-centric Approach</h4>
            <p className="txt-justify">
              Customers always must be the epicenter for any kind of business to run. Being a successful web and mobile app development company, our goal is to visualize the situation from your ideas and thoughts. We come up with solutions that are
              best fitted to our customers’ needs and perspectives, that would in run help your business grow.
            </p>
          </div>
          <div className="column w-24 w-8@lg w-12@md   p-2 txt-center">
            <img className="img mb-6" src={circle_pik} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Effective Collaboration</h4>
            <p className="txt-justify">
              Correspondence is the key. We try to overdo that often. It brings out the best results for our clients, even though it may feel overwhelming. At the point when our development group works together with our customers sitting a great many
              miles away, it's clear that we keep in contact with stages and mediums that allow viability, straightforwardness and precision.
            </p>
          </div>
          <div className="column w-24 w-8@lg w-12@md   p-2 txt-center">
            <img className="img mb-6" src={rocket_pik} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Quality Delivered in Time</h4>
            <p className="txt-justify">
              With more than twenty years of involvement with the at distant IT software development industry, we have an incredible arrangement of inside structures with top tier framework that empowers us to convey arrangements with prevalent
              quality, consistently. Every one of these years, we have figured out how to forestall disappointments and imitate achievement. We don't simply boast about quality. We characterize and convey it in time.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="container py-6@md py-10 grid has-gap-lg">
        <div className="column w-6">
          <img className="img pb-1rem" src="https://source.unsplash.com/random/512x410" alt="" />
          <img className="img pb-1rem" src="https://source.unsplash.com/random/512x614" alt="" />
        </div>
        <div className="column w-12">
          <img className="img mb-1rem" src="https://source.unsplash.com/random/1024x1024" alt="" />
        </div>
        <div className="column w-6">
          <img className="img pb-1rem" src="https://source.unsplash.com/random/512x614" alt="" />
          <img className="img pb-1rem" src="https://source.unsplash.com/random/512x410" alt="" />
        </div>
      </section> */}

      <section className="container py-6@md py-10 bg-light">
        <h2 className="txt-center w-18 container mb-6">we've helped businesses increase their revenue on an average by 90% in their first year with us!</h2>
        <div className="grid txt-center justify-center justify-start@lg">
          <div className="column w-8@lg w-12@md w-24">
            <h1 className="font-bolder mb-1rem" style={{ fontSize: "4rem" }}>
              <OnVisible CountUpProps={{ prefix: "", end: 3000, suffix: "+" }} />
            </h1>
            <div>Satisfied Clients Across the Globe</div>
          </div>

          <div className="column w-8@lg w-12@md w-24">
            <h1 className="font-bolder mb-1rem" style={{ fontSize: "4rem" }}>
              <OnVisible CountUpProps={{ prefix: "", end: 7000, suffix: "+" }} />
            </h1>
            <div>Projects Delivered Successfully</div>
          </div>

          <div className="column w-8@lg w-12@md w-24 mt-4@md mt-0@lg">
            <h1 className="font-bolder mb-1rem" style={{ fontSize: "4rem" }}>
              <OnVisible CountUpProps={{ prefix: "", end: 450, suffix: "+" }} />
            </h1>
            <div>Experts Under the Same Roof</div>
          </div>
        </div>
      </section>

      {/* <section className="container px-4 py-6@md py-10">
        <h1 className="font-bolder txt-center">Our Leaders</h1>
        <Carousel nextArrow={<NextArrow />} prevArrow={<PrevArrow />} autoplay autoplaySpeed={4000} speed={1000} dots accessibility adaptiveHeight arrows draggable slidesToShow={3}>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-dribbble-line" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-facebook-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-github-fill" />
              </a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-github-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-instagram-line" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-behance-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-skype-fill" />
              </a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-dribbble-line" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-facebook-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-skype-fill" />
              </a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-dribbble-line" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-github-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-behance-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-skype-fill" />
              </a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-facebook-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-instagram-line" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-skype-fill" />
              </a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-dribbble-line" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-github-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-instagram-line" />
              </a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-github-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-instagram-line" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-behance-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-skype-fill" />
              </a>
            </div>
          </div>
          <div>
            <img className="img mb-4" src="https://source.unsplash.com/random/350x420" alt="" />
            <h6 className="font-bolder">Ashfahan Khan</h6>
            <div className="mb-2">CEO & Founder</div>
            <div>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-dribbble-line" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-github-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-behance-fill" />
              </a>
              <a href="#" target="_blank" className="clr-primary txt-decor-none" rel="noopener noreferrer">
                <i className="icon ri-lg mr-2 ri-skype-fill" />
              </a>
            </div>
          </div>
        </Carousel>
      </section> */}

      {/* <section className="container px-8 py-6@md py-10">
        <div className="bg-dark grid pr-4">
          <div className="column mr--6 pt-6">
            <img className="img" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2020/01/sm-quote-img.png" alt="" />
          </div>
          <div className="column clr-white flex align-middle justify-center">
            <blockquote>
              <p className="h4 font-bolder">“To live life within boundaries, to limit your existence by fearing the unexpected, to make choices based on needs and not wants, that is humanity’s biggest failure.”</p>
              <cite>
                <span className="block font-bold fontstyle-normal">Sandeep Mundra</span>
                <span className="block fontstyle-normal">CEO</span>
              </cite>
            </blockquote>
          </div>
        </div>
      </section> */}

      <section className="container px-6 py-4 grid has-gap-lg">
        <div className="column w-24 w-12@md">
          <div className="sticky top-header">
            <div className="mb-1rem">Our Core Values</div>
            <h2 className="font-bolder">Provide Trustworthy and quality Software development Services</h2>
          </div>
        </div>
        <div className="column w-24 w-12@md">
          <h5 className="font-bolder">Ideal Client Satisfaction</h5>
          <div className="mb-6">
            We can't help ourselves! Our customers are the accomplices behind the achievement we have tasted throughout the decades. This is the explanation we keep customer fulfillment at the focal point of our system. We are not short of
            coordinated effort to enhance our bits of knowledge for ideal execution of our contributions. The acclaim from the customers is what our ears were longing to hear, and we'd hunger for that. It's an appetite in us that never blurs.
          </div>

          <h5 className="font-bolder">Result-oriented Approach</h5>
          <div className="mb-6">
            The underlying foundations of QuellxCode Pvt Ltd.’s prosperity is associated with our vision and execution of it. Beginning from the enrollment to the quality expectations, we keep our qualities unblemished. We enlist energetic people who
            have a spirit in themselves that's so strong. Individuals who truly need to work with us and values the significance of customers' expectation and to provide quality outcomes.
          </div>

          <h5 className="font-bolder">Honesty in Everything</h5>
          <div className="mb-6">
            Honesty is our center and is at the focal point of all that we do. For QuellxCode Pvt Ltd., it is in the same class as adhering to the law, perhaps more than that. It is tied in with conveying on our responsibilities, trustworthiness and
            decency in business and everyday living. We are a family that has confidence in collaboration with one Mantra, that is to kick the bucket with recollections, not dreams.
          </div>

          <h5 className="font-bolder">Great Place to Work</h5>
          <div className="mb-6">
            There are a couple of things that make QuellxCode Pvt Ltd a family. We love our peeps. QuellxCode Pvt Ltd is only not about its guarantees, worldwide acknowledgments or tributes. With absolute regard, we grasp the assorted variety of
            thought, societies, and of individuals. Nothing feels better than getting motivated by the tutors and their examples of overcoming adversity. Truly, QuellxCode Pvt Ltd is caring for its invaluable resources, the workers. People work here,
            not robots!!
          </div>
        </div>
      </section>

      <section
        className="h-min-75vh img-bg px-6 my-6 flex align-middle justify-center txt-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsla(0, 0%, 0%, 0.4), hsla(0, 0%, 0%, 0.8)), url('${team}')`
        }}
      >
        <div>
          <h1 className="font-bolder clr-white">Teamwork is the only way we work</h1>
          <Link to="career" className="btn is-fillout clr-white is-pill is-primary px-4 py-2">
            Join Our Team
          </Link>
        </div>
      </section>

      <BrandsWeWorkedWith className="0 py-0" />
    </>
  );
}
