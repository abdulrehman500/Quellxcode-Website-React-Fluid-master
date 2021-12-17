import React from "react";
import { Helmet } from "react-helmet";

import Fluid from "../../image/fluid.svg";
import bottom from "../../image/service/uxui/bottom.svg";
import Reviews from "../../component/Reviews";

// import flow from "../../image/service/uxui/flow.png";
import overlap from "../../image/service/uxui/overlap.svg";
import image_1 from "../../image/service/uxui/1.png";
import image_2 from "../../image/service/uxui/2.png";
import image_3 from "../../image/service/uxui/3.jpg";
import image_4 from "../../image/service/uxui/4.jpg";

import RequestQuote from "../../component/RequestQuote";

export default function UxUi() {
  return (
    <>
      <Helmet>
        <title>UX / UI Company in Islamabad | QuellxCode</title>
        <meta name="description" content="UX / UI Company in Islamabad" />
      </Helmet>

      <section className="txt-center@md px-0@lg p-10 container w-max-100 h-min-100vh flex align-middle justify-center">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md w-24">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" />
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 flip-xy right-0" />
        </div>
        <div className="mt-6 container px-6">
          <h1 className="title is-sm font-bolder">Get an inside peek at how we make our apps appear as good as they do now.</h1>
          <div>The most important task before working on the user interface is to understand the brand. This is because a brilliant design may not be the most user-friendly design, which can provide a superior user experience with best graphic design services.</div>
          <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
            <i className="icon ri-2x ri-arrow-down-line" />
          </button>
        </div>
      </section>

      <section className="container txt-center px-6 pt-6 bg-light" id="scrolldownView">
        <h1 className="font-bolder">The Difference</h1>
        <div className="px-10">We claim that inventiveness is centered on discoveries. We discovered that a little bit of 
        craziness combined with a lot of discipline results in masterpieces - we name it "Discovery Workshop."</div>

        <img className="img" src={bottom} alt="" />
      </section>

      {/* <section className="container py-4 txt-center">
        <h1 className="font-bolder">From Discovery to Sprints to Agile Development</h1>
        <div className="bg-error h-50vh">Video</div>
      </section>

      <section className="container py-4 bg-light">
        <h1 className="font-bolder txt-center">Benefits Of Discovery / Design First Approach</h1>
        <div className="txt-center mb-2">Discovery Workshop is designed to feed the engineering team, albeit not the other way round that traditionally many IT companies do.</div>
        <div className="grid has-gap-lg">
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/ic-benefits-strategy.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Clear Strategy</h4>
            <p className="txt-justify">We work with you to cut the clutter and stay focused on defining critical system features to build a product that’s launch-ready.</p>
          </div>
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/ic-benefits-speed.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Speed</h4>
            <p className="txt-justify">Making the most of our engagement with an agile mindset to produce visible results - compared to the traditional way.</p>
          </div>
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/ic-benefits-lower-risk.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Lower Risk</h4>
            <p className="txt-justify">Before investing large sum upfront into the entire project and committing in blind, define something that’s sustainable and achievable.</p>
          </div>
          <div className="column p-2 txt-center">
            <img className="img mb-6" src="https://d1i2cp4a5c819e.cloudfront.net/wp-content/uploads/2019/11/ic-benefits-cost-effective.svg" alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Cost Effective </h4>
            <p className="txt-justify">We work with you to define minimum launchable product so that you can prioritize investments for better ROI, allowing you to focus on growth</p>
          </div>
        </div>
      </section>

      <section className="py-6 px-6 container">
        <div className="txt-center">WHAT WE DO</div>
        <h1 className="font-bolder txt-center">Why Your Idea Needs a "Workshop"?</h1>
        <div className="grid has-gap-lg">
          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover card-line border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Think</h5>
              <div>Not all requirements are development ready</div>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover card-line border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Organize</h5>
              <div>Ideas evolve and they need to be constrained in a boundary</div>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover card-line border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Prioritise</h5>
              <div>Organize your thoughts for maximum impact</div>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover card-line border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Goals</h5>
              <div>A quality product must have clearly defined objectives</div>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover card-line border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Quantify</h5>
              <div>Deriving scope, for accurate timeline and budget</div>
            </div>
          </div>

          <div className="column w-8">
            <div className="p-8 is-round-sm card-hover card-line border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder">Roadmap</h5>
              <div>Choosing the right technology approach to development</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4 txt-center">
        <h1 className="font-bolder">How It Works?</h1>
        <div className="mb-2">For each workshop, we assign a dedicated analyst, a UI/UX designer and a technical team who work with you, to do full justice to your ideas with the most relevant and technically advanced solutions.</div>
        <img src={flow} className="img" alt="" />
      </section> */}

      <section className="container py-4 grid has-gap-lg align-middle">
        <div className="column w-24 w-13@md order-1 order-0@md">
          <div className="mb-10">
            <h1 className="mb-0 font-bolder">Design is not how it looks.</h1>
            <h1 className="mb-0 font-bolder clr-primary">But how it works.</h1>
            <div>- Steve Jobs</div>
          </div>

          <div className="mb-6">
            <p>
            We make working on your UI/UX design project enjoyable and successful. We specialize in graphic designthat helps our clients capture attention on all major platforms. Our user interface and user experience (UI/UX) design can help you reach millions of clients across the world.

            </p>
            <p>Our staff is dedicated to developing cutting-edge UI/UX designs that will aid in the expansion of your company. Our designs assist our clients in better communication and management of their businesses</p>
          </div>
        </div>
        <div className="column w-24 w-11@md txt-right">
          <img src={overlap} className="img" alt="" />
        </div>
      </section>

      <section className="container py-4 grid has-gap-lg align-middle">
        <div className="column w-24 w-11@md">
          <img src={image_1} className="img" alt="" />
        </div>
        <div className="column w-24 w-13@md">
          <div className="mb-6">
            <h1 className="font-bolder">User Interface (UI)</h1>
          </div>

          <hr className="mb-6 w-5 border-primary clr-primary border o-100 border-wide clr-dark" />

          <div className="mb-6">
            <h5>Uesr Interface</h5>
            <div>
            User interface design (UI) is the creation of user interfaces for software, such as mobile apps, with the goal of maximizing user experience via design principles that emphasizes on usability and utility. A good user interface design guarantees that all interface elements are functional, accessible, and understandable.
            </div>
          </div>

          <div className="mb-6">
            <h5>Brand Identity</h5>
            <div>Buttons, text fields, selection boxes, dropdown lists, and toggles. </div>
          </div>

          <div className="mb-6">
            <h5>Informational Components</h5>
            <div>Loading bar, notifications, and tooltips.</div>
          </div>
        </div>
      </section>

      <section className="container py-4 grid has-gap-lg align-middle">
        <div className="column w-24 w-13@md order-1 order-0@md">
          <div className="mb-6">
            <h1 className="font-bolder">User Experience (UX)</h1>
          </div>

          <hr className="mb-6 w-5 border-primary clr-primary border o-100 border-wide clr-dark" />

          <div className="mb-6">
            <h5>Mindmap</h5>
            <div>A mind map is a visual representation of information. A mind map is a hierarchical diagram that depicts relationships between parts of a larger picture.</div>
          </div>

          <div className="mb-6">
            <h5>Market Research</h5>
            <div>We investigate existing items in order to provide the optimum user experience.</div>
          </div>

          <div className="mb-6">
            <h5>Wireframe</h5>
            <div>
           
            Wireframes are necessary. If we didn't wireframe before finalizing the designs, we wouldn't be a decent user
            experience design firm. Wireframing enables us to arrange user interface elements in a way that assures optimal
            app functionality. A good wireframe should resemble a whole maze. When sketching out an app, it's common to come across a function 
            from which you can't move further, a dead end. Wireframing ensures that the app runs smoothly.
            </div>
          </div>
        </div>
        <div className="column w-24 w-11@md txt-right">
          <img src={image_2} className="img" alt="" />
        </div>
      </section>

      <section className="container py-4 grid has-gap-lg align-middle">
        <div className="column w-24 w-11@md">
          <img src={image_3} className="img" alt="" />
        </div>
        <div className="column w-24 w-13@md">
          <div className="mb-6">
            <h5>Design Concept Research</h5>
            <h1 className="font-bolder">UI / UX Design</h1>
          </div>

          <hr className="mb-6 w-5 border-primary clr-primary border o-100 border-wide clr-dark" />

          <div className="mb-6">
            <div>QuellxCode has a dedicated UX/UI design team that appreciates the value of both. To provide the most efficient output from the website or mobile application, we understand that the interface should have a minimal input process.</div>
            <div>
            As a rule, the design of the website should be dictated by the content. With the current trend of working with pre-designed templates, one thing we realize is that design cannot be determined until the content of the website fits the design.
            </div>
           
          </div>
        </div>
      </section>

      <section className="container py-4 grid has-gap-lg align-middle">
        <div className="column w-24 w-13@md order-1 order-0@md">
          <div className="mb-6">
            {/* <h5>From Discovery to Development</h5> */}
            <h1 className="font-bolder">Our Innovative cutting-edge visual design services</h1>
          </div>

          <hr className="mb-6 w-5 border-primary clr-primary border o-100 border-wide clr-dark" />

          <div className="mb-6">
            <div>
            Our Graphic design experts are well-versed in this phenomenon; therefore, we construct a custom design for each website we build to ensure that we deliver a more personalized, results-oriented, branded user interface that provides the most intuitive and interactive user experience possible.
            </div>
            <div>
            Our frontend development team is aware of the elements such as speed, optimization, and load time, and has been able to justify the design using powerful technologies such as HTML5, angular.js, node.js, bootstrap, and others.
                </div>
            <div>
            We believe that the proper combination of design, interface, and experience can make a client fall in love with your brand. We have the knowledge and skills to help you develop a brand for your company and become a winner in these areas. 
            </div>
          </div>
        </div>
        <div className="column w-24 w-11@md">
          <img src={image_4} className="img" alt="" />
        </div>
      </section>

      <Reviews />

      <RequestQuote />
    </>
  );
}
