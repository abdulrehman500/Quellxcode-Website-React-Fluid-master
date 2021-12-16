import React, { useState } from "react";
import { Helmet } from "react-helmet";

import "../../vendor/devices.css";

import contentmanagementsystem from "../../image/service/web/contentmanagementsystem.svg";
import customwebdevelopment from "../../image/service/web/customwebdevelopment.svg";
import ecommerce from "../../image/service/web/ecommerce.svg";
import staticwebsitedevelopment from "../../image/service/web/staticwebsitedevelopment.svg";
import enterprisesolutions from "../../image/service/web/enterprisesolutions.svg";
import OurWork from "../../component/OurWork";

import one_pik from "../../image/service/web/icon/1.svg";
import two_pik from "../../image/service/web/icon/2.svg";
import three_pik from "../../image/service/web/icon/3.svg";
import SliderCrossPlatform from "../../component/SliderCrossPlatform";

export interface props {
  className?: string;
}

Web.defaultProps = {
  className: ""
} as props;

export default function Web(props: props) {
  const [color, setColor] = useState("rgb(3,88,152)");
  return (
    <>
      <Helmet>
        <title>Web App Development company in inslamabad | QuellxCode</title>
        <meta name="description" content="Web design and development services in inslamabad" />
      </Helmet>

      <section className="txt-center@md px-0@lg p-10 container w-max-100 h-min-100vh flex align-middle justify-center">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md w-24">
          <svg
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2
            }}
            className="img absolute w-5 left-0"
            width="100%"
            height="100%"
            viewBox="0 0 414 993"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
          >
            <g transform="matrix(1,0,0,1,-20.23,-43.5)">
              <path
                d="M283.36,572.51C346.41,543.34 445.04,475.11 432.72,392.78C419.7,305.8 290.92,283.89 233.56,232.59C155.58,162.86 143.44,54.33 20.23,43.5L20.23,1036.5C68.8,1011.61 66.31,946.28 101.87,908.31C146.91,861.14 255.01,859.41 281.73,799.08C313.78,726.72 177.35,621.55 283.36,572.51Z"
                style={{ fill: color, fillRule: "nonzero", transition: "fill .3s ease-in-out" }}
              />
            </g>
          </svg>
          <svg
            style={{
              fillRule: "evenodd",
              clipRule: "evenodd",
              strokeLinejoin: "round",
              strokeMiterlimit: 2
            }}
            className="img absolute w-5 flip-xy right-0"
            width="100%"
            height="100%"
            viewBox="0 0 414 993"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
          >
            <g transform="matrix(1,0,0,1,-20.23,-43.5)">
              <path
                d="M283.36,572.51C346.41,543.34 445.04,475.11 432.72,392.78C419.7,305.8 290.92,283.89 233.56,232.59C155.58,162.86 143.44,54.33 20.23,43.5L20.23,1036.5C68.8,1011.61 66.31,946.28 101.87,908.31C146.91,861.14 255.01,859.41 281.73,799.08C313.78,726.72 177.35,621.55 283.36,572.51Z"
                style={{ fill: color, fillRule: "nonzero", transition: "fill .3s ease-in-out" }}
              />
            </g>
          </svg>
        </div>

        <div className="txt-center px-6 container">
          <SliderCrossPlatform onchange={(color) => setColor(color)} />
        </div>
        <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
          <i className="icon ri-2x ri-arrow-down-line" />
        </button>
      </section>

      {/* <div className="absolute left-0 top-0 right-0 event-none z--100 overflow-x-hidden h-100 hidden block@md">
        </div> */}

      {/* <SliderLaptop
        onchange={(color) => setColor(color)}
        className="h-min-100vh"
        child={
          <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
            <i className="icon ri-2x ri-arrow-down-line" />
          </button>
        }
      /> */}

      <section className="txt-center py-6@md py-10 px-6 container h-min-100vh flex align-middle justify-center" id="scrolldownView">
        <div className="mt-6 container px-6">
          <div className="mb-2">Award-winning Offshore Software Development Company Since 2013</div>
          <h1 className="title is-sm font-bolder">Web App Development Company</h1>
          <div>
            We develop Web apps that help businesses for better operational efficiency and engagement. Hire certified Web app developers from QuellxCode Pvt Ltd who are experts for delivering excellence in Android, iOS and cross-platform app
            development services.
          </div>
        </div>
      </section>

      <section className="px-6 py-6 container bg-light">
        <h1 className="font-bolder txt-center">We help you create Apps for</h1>
        <div className="grid">
          <div className="column w-8@md w-24 p-2 txt-center">
            <img src={one_pik} className="img mb-6" alt="icon" />
            <h5 className="font-bolder mt-4 mb-6">Enterprise</h5>
            <p className="txt-justify">Our collaborative consulting on Web Strategy serves as a catalyst in streamlining IT frameworks and processes with the Web roadmap that is aligned with enterprise scenarios, policies and current systems.</p>
          </div>
          <div className="column w-8@md w-24 p-2 txt-center">
            <img src={two_pik} className="img mb-6" alt="icon" />
            <h5 className="font-bolder mt-4 mb-6">Business</h5>
            <p className="txt-justify">We map business’s needs and use cases to enable them to quickly respond to the changes. We help your organization mobilize the inter-department communication, workflows and instant information availability.</p>
          </div>
          <div className="column w-8@md w-24 p-2 txt-center">
            <img src={three_pik} className="img mb-6" alt="icon" />
            <h5 className="font-bolder mt-4 mb-6">Consumers</h5>
            <p className="txt-justify">Our Web experts help brands, businesses and community organizations to build scalable Web application solutions that are aimed to be used on a daily basis by global consumers, multiple times in a day.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="py-2 container grid has-gap-lg align-middle" id="EnterpriseSolutions">
          <div className="w-12@md w-24 column pr-2 order-1 order-0@md">
            <h1 className="txt-center txt-left@md">Enterprise Solutions</h1>

            <div className="txt-justify p-2 p-0@md">
              QuellxCode makes sure that the integration is an optimized process with which you can easily unify multiple applications, systems and databases in your company. With our integrated integration solutions, your company benefits from a
              robust system and software that enable an efficient system connection and enable you to better manage numerous data resources, formats and protocols while mastering the challenge of system orchestration. We develop customer-specific web
              portals for companies, e-commerce solutions, B2B and B2C applications, ERP and CRM software applications, reporting, billing & amp; Secure systems for handling financial transactions, etc Our range of services extends from the
              conception and development of:
            </div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">Custom Enterprise Web Design and Development</li>
              <li className="w-12@md w-24">Custom ERP Software Development</li>
              <li className="w-12@md w-24">CRM Software Development</li>
              <li className="w-12@md w-24">Enterprise System Integration</li>
              <li className="w-12@md w-24">Enterprise Mobility Solutions</li>
              <li className="w-12@md w-24">End-to-end IT Consultation</li>
            </ul>
          </div>
          <div className="w-12@md w-24 column pl-2 txt-right">
            <img className="img" src={enterprisesolutions} alt="ios" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle" id="ECommerce">
          <div className="column w-12@md w-24 pl-2">
            <img className="img" src={ecommerce} alt="and" />
          </div>
          <div className="column w-12@md w-24 pr-2">
            <h1 className="txt-center txt-left@md">E-Commerce</h1>
            <div className="txt-justify p-2 p-0@md">
              QuellxCode is a top ecommerce web development company developing alluring web based ecommerce solutions for the best experiences. Our ecommerce website development services include full web design for online ecommerce stores and custom
              ecommerce web development for small, medium and large retail businesses. It has helped us create first class ecommerce web solutions with a robust one Provide online content management system.
            </div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">Online eCommerce Website Design</li>
              <li className="w-12@md w-24">SaaS based eCommerce Set up</li>
              <li className="w-12@md w-24">Fraud Proof eCommerce Website Development</li>
              <li className="w-12@md w-24">Responsive eCommerce Websites/ Web Apps</li>
              <li className="w-12@md w-24">Shopping Cart Development</li>
              <li className="w-12@md w-24">Mobile Commerce Solutions</li>
              <li className="w-12@md w-24">Custom eCommerce Development</li>
              <li className="w-12@md w-24">Multi-vendor Store Development</li>
            </ul>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle" id="ContentManagementSystem">
          <div className="column w-12@md w-24 pr-2 order-1 order-0@md">
            <h1 className="txt-center txt-left@md">Content Management System</h1>

            <div className="txt-justify">
              QuellxCode have one of the best content writers, who offer a comprehensive range of CMS development services and solutions (content management system) for websites, B2C and B2B portals, applications and business solutions. E-commerce.
              Our success rate in project handling of 100% for CMS development projects shows the know-how of talented CMS developers at QuellxCode. Get your work the best content services by hiring us. We are masters in making your work stand out
              from the rest.
            </div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">Custom CMS Web Design and Development</li>
              <li className="w-12@md w-24">CMS Migration & Update</li>
              <li className="w-12@md w-24">CMS for B2C & B2B Apps</li>
              <li className="w-12@md w-24">CMS for eCommerce Solutions</li>
              <li className="w-12@md w-24">Enterprise CMS Development</li>
            </ul>
          </div>
          <div className="column w-12@md w-24 pl-2 txt-right">
            <img className="img" src={contentmanagementsystem} alt="ios" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle" id="StaticWebsiteDevelopment">
          <div className="column w-12@md w-24 pl-2">
            <img className="img" src={staticwebsitedevelopment} alt="and" />
          </div>
          <div className="column w-12@md w-24 pr-2">
            <h1 className="txt-center txt-left@md">Static Website Development</h1>
            <div className="txt-justify p-2 p-0@md">
              QuellxCode provides affordable content management solutions with a greater level of functionality than traditional websites.Every business needs a website to propel its growth. Business owners focussed on day-to-day operations often put
              their website on the back burner. QuellxCode takes you through our proven structured process from a concept to a fully functioning lead generation engine for your business operations.We care for your business, so we got creatively and a
              technically productive team that develop and provide the best services throughout the world. Our objective is to create well-developed material websites.
            </div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">Fraud Proof eCommerce Website Development</li>
              <li className="w-12@md w-24">Online eCommerce Website Design</li>
              <li className="w-12@md w-24">Responsive eCommerce Websites/ Web Apps</li>
              <li className="w-12@md w-24">Multi-vendor Store Development</li>
              <li className="w-12@md w-24">SaaS based eCommerce Set up</li>
              <li className="w-12@md w-24">Shopping Cart Development</li>
              <li className="w-12@md w-24">Mobile Commerce Solutions</li>
              <li className="w-12@md w-24">Custom eCommerce Development</li>
            </ul>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle" id="CustomWebDevelopment">
          <div className="column w-12@md w-24 pr-2 order-1 order-0@md">
            <h1 className="txt-center txt-left@md">Custom Web Design and Development</h1>
            <div className="txt-justify p-2 p-0@md">
              We are a dominant web design and web development company that helps some of the best known brands to be present in the digital landscape through personalized web development services. The web solutions we develop are feature-rich,
              highly functional, robust, secure and scalable and have an attractive UI / UX design that the brand appreciates.
            </div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">Custom Website Design</li>
              <li className="w-12@md w-24">Web CMS Development</li>
              <li className="w-12@md w-24">Web Portal Development</li>
              <li className="w-12@md w-24">eCommerce Website Development</li>
              <li className="w-12@md w-24">Enterprise Web App Development</li>
            </ul>
          </div>
          <div className="column w-12@md w-24 pl-2 txt-right">
            <img className="img" src={customwebdevelopment} alt="ios" />
          </div>
        </div>
      </section>

      <section className="px-6 py-6 container">
        <h1 className="font-bolder txt-center">We add Intelligence to your Apps</h1>
        <div className="my-4">{/* TODO: some dummy text */}</div>
        <div className="grid has-gap-lg">
          <div className="column w-8@md w-24">
            <div className="p-8 is-round-sm card-line card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Suggestion Engine</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Media</span>
                <span className="clr border is-pill px-7px mr-7px">Entertainment</span>
                <span className="clr border is-pill px-7px mr-7px">Shopping</span>
              </div>
              <div className="txt-justify">It utilizes the client's history to recommend comparable items or administrations. Much the same as the recommendations while shopping from Amazon or viewing Netflix.</div>
            </div>
          </div>

          <div className="column w-8@md w-24">
            <div className="p-8 is-round-sm card-line card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Arranged, Tagged and Categorized Photos</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Search</span>
                <span className="clr border is-pill px-7px mr-7px">Mobile</span>
                <span className="clr border is-pill px-7px mr-7px">Social</span>
              </div>
              <div className="txt-justify">It utilizes the client's history to propose comparable items or administrations. Much the same as the proposals while shopping from Amazon or viewing Netflix</div>
            </div>
          </div>

          <div className="column w-8@md w-24">
            <div className="p-8 is-round-sm card-line card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Chatbots for Customer Support</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Travel</span>
                <span className="clr border is-pill px-7px mr-7px">Banking</span>
                <span className="clr border is-pill px-7px mr-7px">Retail</span>
              </div>
              <div className="txt-justify">Smart bots modified to mechanize different business procedures and client assistance with moment, exact data.</div>
            </div>
          </div>

          <div className="column w-8@md w-24">
            <div className="p-8 is-round-sm card-line card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Gamified Learning and Education</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Education</span>
              </div>
              <div className="txt-justify">ML-driven statistical model is constructed utilizing students' answers which decides their memory cycle and ping them for revisions.</div>
            </div>
          </div>

          <div className="column w-8@md w-24">
            <div className="p-8 is-round-sm card-line card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Expected Health Monitoring</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Healthcare</span>
              </div>
              <div className="txt-justify">ML based applications can help specialists to treat patients ahead of time and spare lives by having hands-on expectations dependent on their patient information.</div>
            </div>
          </div>

          <div className="column w-8@md w-24">
            <div className="p-8 is-round-sm card-line card-hover border-light h-100 relative bg-white">
              <h5 className="font-bolder">Voice Powered Smart Homes</h5>
              <div className="mt-2 mb-6 o-50 is-sm">
                <span className="clr border is-pill px-7px mr-7px">Real Estate</span>
              </div>
              <div className="txt-justify">Computer based intelligence innovation has driven development of computerized voice homes, whereby working is controlled by an application with upgraded security.</div>
            </div>
          </div>
        </div>
      </section>

      <OurWork />
    </>
  );
}
