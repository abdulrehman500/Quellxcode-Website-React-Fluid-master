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
          <div className="mb-2 hidden block@md">We have the expertise in website and application development. We provide the best social media marketing services along with advertising and branding.</div>
          <h1 className="title is-sm font-bolder">Our people, vision, and value are the foundations of our success.</h1>
          <div>
          Our wide list of happy customers is proof of our skill and range of abilities when it comes to delivering the best arrangements. We are a collection of IT experts, developers, and marketing specialists. We have you covered whether you require SEO services, website development or mobile development, or a marketing strategy for a business.
          </div>

          <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
            <i className="icon ri-2x ri-arrow-down-line" />
          </button>
        </div>
      </section>

      <section id="scrolldownView" className="container px-6 py-6@md py-10 grid txt-justify bg-light">
        <div className="column w-24 w-12@md px-2">
          <h1 className="font-bolder">Who We Are?</h1>
          <p className="mb-1rem">
          QuellxCode Pvt Ltd isn't just a typical Islamabad software house. We're a group of highly skilled professionals who think that with the correct tools and a dedicated team, no business problem is insurmountable.
          </p>
          <p className="mb-1rem">
          We guarantee that our clients may entrust us with their challenges, and that we will devise the best execution strategy to realize their goal. Whether you're a little business or a global corporation, you'll get nothing less than a well-designed, elegant, and intelligent IT solution to your problem.
          </p>
        </div>
        <div className="column w-24 w-12@md px-2">
          <h1 className="font-bolder">What We Do?</h1>
          <p className="mb-1rem">
          Our lengthy list of delighted clients is proof to our competence and skill set when it comes to delivering the best solutions as a team of IT consultants, developers, and marketing gurus. We've got you covered whether you need SEO services, web or mobile development, or a marketing strategy tailored to your brand or business.
          </p>
          <ul className="list txt-left icon-check-circle">
            <li>•	Advertising and Branding</li>
            <li>•	Website design & development</li>
            <li>•	Social media marketing</li>
            <li>•	Search engine optimization</li>
            
          </ul>
        </div>
      </section>

      <section className="container py-4 px-6">
        <h1 className="font-bolder txt-center">Every Quellx Codeian’s Belief </h1>
        <div className="grid has-gap-lg justify-center justify-start@lg">
          <div className="column w-24 w-8@lg w-12@md   p-2 txt-center">
            <img className="img mb-6" src={people_pik} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Client-centric Approach</h4>
            <p className="txt-justify">
            Customers must always be at the center of every business. As a reputable web and mobile application development firm, our mission is to depict the situation based on your ideas and thoughts. We provide solutions that are tailored to our customers' needs and viewpoints, ultimately assisting the company's growth.
            </p>
          </div>
          <div className="column w-24 w-8@lg w-12@md   p-2 txt-center">
            <img className="img mb-6" src={circle_pik} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Effective Collaboration</h4>
            <p className="txt-justify">
            The key to success is communication. We frequently strive to go overboard. Even though it may seem daunting, it produces the best results for our clients. When our development team collaborates with consumers that are thousands of miles away, it's evident that we use stages and mediums that allow for viability, clarity, and precision.  </p>
          </div>
          <div className="column w-24 w-8@lg w-12@md   p-2 txt-center">
            <img className="img mb-6" src={rocket_pik} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Quality Delivered in Time</h4>
            <p className="txt-justify">
            With more years of experience in the best social media marketing services, we have a strong set of internal structures and a top-tier framework that enables us to constantly deliver high-quality setups. We've worked out how to avoid setbacks and emulate success throughout the years. We don't only brag about our excellence. We describe it and communicate it in real time. </p>
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
            <h2 className="font-bolder">Offers Trustworthy and quality Software development Services</h2>
          </div>
        </div>
        <div className="column w-24 w-12@md">
          <h5 className="font-bolder">Ideal Client Satisfaction</h5>
          <div className="mb-6">
          We're powerless to stop ourselves! Our customers have been instrumental in the success we've enjoyed over the years. Therefore, we keep customer satisfaction at the top of our priority list. We have enough of concerted effort to improve our bits of knowledge to execute our contributions perfectly. Our ears yearned to hear the applause of the customers, and we were hungry for it. It's a never-flinching appetite in us. </div>

          <h5 className="font-bolder">Result-oriented Approach</h5>
          <div className="mb-6">
          Our vision and execution are the fundamental foundations of Quellxcode’s Pvt Ltd success. From enrollment to quality demands, we maintain immaculate qualities. We recruit persons that are energetic and have a strong spirit. Individuals who have a genuine need to work with us and understand the importance of meeting clients' expectations and delivering high-quality results.  </div>

          <h5 className="font-bolder">Honesty in Everything</h5>
          <div className="mb-6">
          Honesty is at the heart of everything we do. It has to do with communicating our duties, integrity, and decency in the workplace and in everyday life. We are a family who believes in working together to achieve one goal: to die with memories, not dreams. </div>

          <h5 className="font-bolder">Great Place to Work</h5>
          <div className="mb-6">
          Quellxcode Pvt Ltd has a few special characteristics that make it feel like a family. We adore our pals. QuellxCode Pvt Ltd isn't just about its assurances, global recognition, or tributes. We embrace the various varieties of thought, society, and individuals with utmost respect. Nothing beats being inspired by the teachers and their stories of triumph through adversity. QuellxCode Pvt Ltd is truly concerned about its most precious resource, its employees. People, not robots, work here!!
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
