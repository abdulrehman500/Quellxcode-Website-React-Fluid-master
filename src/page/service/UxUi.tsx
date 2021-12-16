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
          <h1 className="title is-sm font-bolder">Get insight on how we make our apps look awesome as they are right now.</h1>
          <div>Understanding the brand is the most critical job before working on user interface. This is merely because a great design may not be the user-friendliest design, which can offer a better user experience.</div>
          <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
            <i className="icon ri-2x ri-arrow-down-line" />
          </button>
        </div>
      </section>

      <section className="container txt-center px-6 pt-6 bg-light" id="scrolldownView">
        <h1 className="font-bolder">The Difference</h1>
        <div className="px-10">We say the discovery is at the center of ingenuity. We learned a little dash of crazy mixed with great discipline, creates masterpieces - we call it "Discovery Workshop"</div>

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
              We make your UI/UX design project a pleasant and successful experience. Here in Keyideas, we specialize in UI/UX design that helps our client capture attention across all major platforms. Our UI/UX web design help you reach millions of
              global customers.
            </p>
            <p>Our team believes in creating innovative UI/UX designs to help grow your business. Our designs help our clients communicate and run their business better.</p>
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
              User interface design (UI), by definition, is the design of user interfaces for software such as mobile apps, with a focus on maximizing user experience by employing design principles that concentrate on usability and utility. Good user
              interface design ensures that interface elements are functional, easy to access, and easy to understand.
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
            <div>A mind map is a diagram used to visually organize information. A mind map is hierarchical and shows relationships among pieces of the whole.</div>
          </div>

          <div className="mb-6">
            <h5>Market Research</h5>
            <div>In order to deliver the best user experience, we look into the products that already exist.</div>
          </div>

          <div className="mb-6">
            <h5>Wireframe</h5>
            <div>
              Wireframes are essential We wouldn’t be a good user experience design agency if we didn’t wireframe before the designs were finalized.Wireframing allows us to layout user interface elements in such a way that ensures proper
              functionality within the app. A proper wireframe should look like a completed maze. Often times, when one is sketching out an app, they stumble upon a function they can’t proceed from, a dead end. Wireframing ensures the app flows
              without snags.
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
            <div>Surgically crafting beautiful pixels to create a visually appealing interface of relevant screens</div>
            <div>
              QuellxCode has a pool of UX/UI design team of experts who understands the importance of both. We understand that the interface should have minimal input process to generate most efficient output from the website or mobile application.
            </div>
            <div>
              As a thumb rule, the website should be designed in a way that the content should govern the design. With the current trend of working on pre-designed templates, something that we understand and those don’t is that design can not be
              defined before the content of the website is not fitting to the design. An awesome design can remain awesome only when the content is perfectly fitting in the design to govern the website.
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
              Our experienced UI/UX design developers understand this phenomenon thoroughly and hence we create custom design for each website that we built to ensure that we come up with a more personalized, result oriented, branded user interface
              to offer the most intuitive & interactive user experience.
            </div>
            <div>Our frontend development team understands the other factors like speed, optimization, load-time to have been able to use powerful technologies to justify the design like HTML5, angular.js, node.js, bootstrap and many more.</div>
            <div>
              Our strong belief is, a design, an interface and an experience with its right combination can make the client love your brand. We have the expertise and ability to build that brand for your business and make you a winner in these areas.
              To know more about UI/UX Development from Techtic, feel free to contact us.
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
