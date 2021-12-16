import React, { useState } from "react";
import { Helmet } from "react-helmet";

import "../../vendor/devices.css";

import ios from "../../image/service/mobile/ios.svg";
import andriod from "../../image/service/mobile/andriod.svg";
import clouddriven from "../../image/service/mobile/clouddriven.svg";
import pwa from "../../image/service/mobile/pwa.svg";
import SliderMobile from "../../component/SliderMobile";
import OurWork from "../../component/OurWork";
import one_pik from "../../image/service/web/icon/1.svg";
import two_pik from "../../image/service/web/icon/2.svg";
import three_pik from "../../image/service/web/icon/3.svg";

import SliderHybrid from "../../component/SliderHybrid";

export interface props {
  className?: string;
}

Mobile.defaultProps = {
  className: ""
} as props;

export default function Mobile() {
  document.title = "Mobile App development Services in Islamabad";
  const [color, setColor] = useState("#430BDE");

  return (
    <>
      <Helmet>
        <title>Mobiles Apps Development Company in Islamabad | QuellxCode</title>
        <meta name="description" content="Mobile App Development Company in Islamabad" />
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
        <div className="w-24">
          <SliderMobile onchange={(color) => setColor(color)} />
        </div>
        <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
          <i className="icon ri-2x ri-arrow-down-line" />
        </button>
      </section>

      <section className="txt-center px-6 container flex h-min-100vh align-middle justify-center" id="scrolldownView">
        <div className="mt-6 container px-6">
          <div className="mb-2">Award-winning Offshore Software Development Company Since 2013</div>
          <h1 className="title is-sm font-bolder">Mobile App Development Company</h1>
          <div>
            We develop mobile apps that help businesses for better operational efficiency and engagement. Hire certified mobile app developers from QuellxCode Pvt Ltd who are experts for delivering excellence in Android, iOS and cross-platform app
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
            <p className="txt-justify">An enterprise application is a software solution created for managing common organizational issues in a company that is aligned with enterprise scenarios, policies and current systems.</p>
          </div>
          <div className="column w-8@md w-24 p-2 txt-center">
            <img src={two_pik} className="img mb-6" alt="icon" />
            <h5 className="font-bolder mt-4 mb-6">Business</h5>
            <p className="txt-justify">Mobile apps are among the best ways to communicate and engage with customers. We help your organization mobilize the inter-department communication, workflows and instant information availability.</p>
          </div>
          <div className="column w-8@md w-24 p-2 txt-center">
            <img src={three_pik} className="img mb-6" alt="icon" />
            <h5 className="font-bolder mt-4 mb-6">Consumers</h5>
            <p className="txt-justify">Our mobile experts help brands, businesses and community organizations to build scalable mobile application solutions that are aimed to be used on a daily basis by global consumers, multiple times in a day.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="py-2 container grid has-gap-lg align-middle" id="AndroidAppDevelopment">
          <div className="column w-12@md w-24 pr-2">
            <img className="img" src={andriod} alt="" />
          </div>
          <div className="column w-12@md w-24 pl-2">
            <h1 className="txt-center txt-left@md">Android App Development</h1>
            <div className="txt-justify p-2">
              QuellxCode Pvt Ltd are a main Android application development company providing Android Web application, specially made for our customers. Solutions for worldwide brands, undertakings and new businesses. Covering the whole range on the
              android stage, we can assist you with making special Android applications for Smartphones, Tablets, Android Wear and Android TV. Recruit Android application developers from us having mastery to manufacture custom Android applications
              that cover all Android gadgets with the most recent Android OS adaptation similarity.
            </div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">Android Smartphone Apps</li>
              <li className="w-12@md w-24">Android TV Apps</li>
              <li className="w-12@md w-24">Android Tablet Apps</li>
              <li className="w-12@md w-24">Chromebook Apps</li>
              <li className="w-12@md w-24">Android Wear Apps</li>
              <li className="w-12@md w-24">Android Things Apps</li>
              <li className="w-12@md w-24">Firebase Integration</li>
              <li className="w-12@md w-24">Android Apps with Dialogflow</li>
            </ul>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle" id="IOSAppsDevelopment">
          <div className="column w-12@md w-24 pr-2 order-1 order-0@md">
            <h1 className="txt-center txt-left@md">IOS Apps Development</h1>
            <div className="txt-justify p-2">
              QuellxCode Pvt Ltd is a well-known iOS/iPhone application development company that drives a capable pool of master iOS designers. We help our customers with custom applications that work impeccably on the whole iOS stage including the
              most recent and the latest iOS renditions and iOS gadgets like iPhones, iPads, Apple Watches, Apple TV, and so on. Recruit iOS application designers with many years of involvement in the most recent iOS application development
              technologies to assemble Web applications with superb UX.
            </div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">iPhone App Development</li>
              <li className="w-12@md w-24">iPad App Development</li>
              <li className="w-12@md w-24">Apple Watch Development</li>
              <li className="w-12@md w-24">Apple TV Apps</li>
              <li className="w-12@md w-24">iOS App with SiriKit</li>
              <li className="w-12@md w-24">iOS app with MLkit</li>
              <li className="w-12@md w-24">iOS App with ARkit</li>
              <li className="w-12@md w-24">iOS App Testing</li>
            </ul>
          </div>
          <div className="column w-12@md w-24 pl-2 txt-right">
            <img className="img" src={ios} alt="ios" />
          </div>
        </div>

        <div className="bg-light container py-6" id="HybridAppDevelopment">
          <div className="container">
            <h1 className="txt-center">Hybrid App Development</h1>
            <div className="txt-justify txt-center@md">
              Hybrid apps is a creation of both worlds, web and native apps. Apps built with our best hybrid mobile app development services cut development costs, provide easy access to device data, work offline and adapt to a variety of platforms
              and business systems. Surgery. Hire developers of QuellxCode hybrid apps that combine the power of Javascript, HTML5 and CSS3 to develop hybrid apps with the latest frameworks.
            </div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">Hybrid Mobile App Development</li>
              <li className="w-12@md w-24">Migration to Hybrid Frameworks</li>
              <li className="w-12@md w-24">Support & Maintenance</li>
              <li className="w-12@md w-24">Independent Testing</li>
              <li className="w-12@md w-24">App Development</li>
              <li className="w-12@md w-24">Responsive Web App</li>
              <li className="w-12@md w-24">Hybrid App Consultation</li>
            </ul>
          </div>
          <SliderHybrid onchange={(color) => setColor(color)} />
        </div>

        <div className="py-2 container grid has-gap-lg align-middle" id="MobileAppsDrivenbyCloud">
          <div className="column w-12@md w-24 pr-2 order-1 order-0@md">
            <h1 className="txt-center txt-left@md">Mobile Apps Driven by Cloud</h1>
            <div className="txt-justify">
              Cloud Consultancy is managed by our specialists and ensures maximum scalability, performance and parallelism for your mobile apps, web apps and APIs. From the beginning, during the discovery phase, we support you in configuring your
              cloud strategy with the advice of cloud experts in order to optimize the provision of information across different channels without downtimes. Our company works closely with leading providers such as Amazon Web Services (AWS), Azure,
              Rackspace and DigitalOcean to achieve exceptional performance.
            </div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">Cloud Consulting</li>
              <li className="w-12@md w-24">Migrate to Cloud</li>
              <li className="w-12@md w-24">Content Delivery</li>
              <li className="w-12@md w-24">Managed Cloud Services</li>
              <li className="w-12@md w-24">AWS Cloud Services</li>
              <li className="w-12@md w-24">Google Cloud Services</li>
              <li className="w-12@md w-24">DevOps Consultation</li>
              <li className="w-12@md w-24">DevOps as a Service</li>
            </ul>
          </div>
          <div className="column w-12@md w-24 pl-2 txt-right">
            <img className="img" src={clouddriven} alt="ios" />
          </div>
        </div>

        {/* <div className="py-2 container grid has-gap-lg align-middle" id="HybridAppDevelopment">
          <div className="column w-12@md w-24 pr-2">
            <img className="img" src={hybrid} alt="" />
          </div>
          <div className="column w-12@md w-24 pl-2">
            <h1 className="txt-center txt-left@md">Hybrid App Development</h1>
            <div className="txt-justify">Hybrid applications combine the best of both worlds, web and native applications. Apps built through our top hybrid mobile app development services reduce the development cost, provide easy access to device data, work offline and scale to a variety of platforms and OS. Hire hybrid app developers from IndiaNIC who combine the power of Javascript, HTML5 and CSS3 to develop Hybrid applications with the latest frameworks such as PhoneGap, Appcelerator.</div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">Hybrid Mobile App Development</li>
              <li className="w-12@md w-24">Migration to Hybrid Frameworks</li>
              <li className="w-12@md w-24">Support & Maintenance</li>
              <li className="w-12@md w-24">Independent Testing</li>
              <li className="w-12@md w-24">PhoneGap App Development</li>
              <li className="w-12@md w-24">Xamarin App Development</li>
              <li className="w-12@md w-24">Responsive Web App</li>
              <li className="w-12@md w-24">Hybrid App Consultation</li>
            </ul>
          </div>
        </div> */}

        <div className="py-2 container grid has-gap-lg align-middle" id="ProgressiveWebAppDevelopment">
          <div className="column w-12@md w-24 pr-2 order-1 order-0@md">
            <h1 className="txt-center txt-left@md">Progressive Web App (PWA) Development</h1>
            <div className="txt-justify">
              QuellxCode offers excellent Progressive Web Application Development (PWA) services to build applications that guarantee perfect performance, identical to that of a native mobile application. To maximize user interaction, we create
              advanced web applications that run faster on all platforms with minimal effort. We integrate unique functions such as offline browsing, push notification, data analysis and simple sales channels in web applications.
            </div>
            <ul className="mt-4 flex flex-wrap align-middle">
              <li className="w-12@md w-24">Custom PWA Development</li>
              <li className="w-12@md w-24">Progressive Web App Design</li>
              <li className="w-12@md w-24">Application Shell Architecture</li>
              <li className="w-12@md w-24">Load Balancing Service</li>
              <li className="w-12@md w-24">Expert PWA Consultation</li>
              <li className="w-12@md w-24">PWA Upgrades & Support</li>
            </ul>
          </div>
          <div className="column w-12@md w-24 pl-2 txt-right">
            <img className="img" src={pwa} alt="ios" />
          </div>
        </div>
      </section>

      <section className="px-6 py-6 container">
        <h1 className="font-bolder txt-center">We add Intelligence to your Apps</h1>
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
