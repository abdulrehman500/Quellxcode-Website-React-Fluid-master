import React from "react";
import { Link } from "react-router-dom";
import { Tabs } from "antd";
import { Helmet } from "react-helmet";

import Fluid from "../image/fluid.svg";
import efund from "../image/casestudy/efund/logo.webp";
import efundbackground from "../image/casestudy/efund/background.webp";
// import vease from "../image/casestudy/vease/logo.png";
// import veasebackground from "../image/casestudy/vease/background.png";
// import evv from "../image/casestudy/evv/logo.webp";
// import evvbackground from "../image/casestudy/evv/background.webp";
import techwizors from "../image/casestudy/techwizors/logo.webp";
import techwizorsbackground from "../image/casestudy/techwizors/background.webp";
import bolan from "../image/casestudy/bolan/logo.webp";
import bolanbackground from "../image/casestudy/bolan/background.webp";
import nerdpaper from "../image/casestudy/nerdpaper/logo.webp";
import nerdpaperbackground from "../image/casestudy/nerdpaper/background.webp";
// import startem from "../image/casestudy/startem/logo.png";
// import startembackground from "../image/casestudy/startem/background.jpg";
import roadstoves from "../image/casestudy/roadstoves/logo.webp";
import roadstovesbackground from "../image/casestudy/roadstoves/background.webp";
import connector from "../image/casestudy/connector/logo.webp";
import connectorbackground from "../image/casestudy/connector/background.webp";
import supportlads from "../image/casestudy/supportlads/logo.png";
import supportladsbackground from "../image/casestudy/supportlads/background.webp";

export interface props {
  className?: string;
  cards: {
    logo: any;
    background: any;
    businessType: string;
    name: string;
    description: string;
    tag: string[];
    filter: ("Mobile" | "Web" | "Branding" | "Marketing")[];
  }[];
}

CaseStudy.defaultProps = {
  className: "",
  cards: [
    {
      name: "E Fund",
      description: "Full fledged task management system with in depth account management",
      logo: efund,
      background: efundbackground,
      businessType: "Management System",
      filter: ["Mobile", "Web"],
      tag: ["Construction", "Employee Management", "Task Management", "Accouting functionality", "Development", "Funding"]
    },
    // {
    //   name: "Electronic Visit Verification",
    //   description: "First mobile workforce management system for homecare",
    //   logo: evv,
    //   background: evvbackground,
    //   businessType: "Management System",
    //   filter: ["Mobile", "Web"],
    //   tag: ["Employee", "Time Tracking", "Management"]
    // },
    // {
    //   name: "Citzen",
    //   description: "A product, service, or concept that is publicly distinguished from other products, services, concepts for easier communication and marketing efforts",
    //   logo: citzen,
    //   background: citzenbackground,
    //   businessType: "Commerce",
    //   filter: "Branding",
    //   tag: ["ecommerce", "Wordpress", "Shopping"]
    // },
    // { name: "StartEm", description: "Agency which transform your ideas into reality", logo: startem, background: startembackground, businessType: "IT", filter: "Web", tag: ["ecommerce", "Restaurant", "Shopping"] },
    {
      name: "Nerd Paper",
      description: "Aim to provide Essay Writing Services, Thesis writing services and Custom Writing Services",
      logo: nerdpaper,
      background: nerdpaperbackground,
      businessType: "IT",
      filter: "Web",
      tag: ["ecommerce", "Restaurant", "Shopping"]
    },
    // { name: "Vease", description: "This app empowers people to work for themselves", logo: vease, background: veasebackground, businessType: "Vease", filter: "Mobile", tag: ["Digital ", "Booking"] },
    {
      name: "Tech Wizors",
      description: "Marketing solution connecting bar owners and customers effectively.",
      logo: techwizors,
      background: techwizorsbackground,
      businessType: "Commerce",
      filter: "Brandsing",
      tag: ["ecommerce", "Wordpress", "Shopping"]
    },
    { name: "Bolan", description: "Marketing solution connecting bar owners and customers effectively.", logo: bolan, background: bolanbackground, businessType: "Commerce", filter: "Web", tag: ["ecommerce", "Wordpress", "Shopping"] },
    { name: "Road Stoves", description: "Smokey Charcoal BBQ, Delicious Curries, Tempting Biryanies.", logo: roadstoves, background: roadstovesbackground, businessType: "Restaurant", filter: "Web", tag: ["ecommerce", "Restaurant", "Shopping"] },
    { name: "Connector", description: "Marketing solution connecting bar owners and customers effectively.", logo: connector, background: connectorbackground, businessType: "Restaurant", filter: "Web", tag: ["ecommerce", "Restaurant", "Shopping"] },
    { name: "Support Lads", description: "Marketing solution connecting bar owners and customers effectively.", logo: supportlads, background: supportladsbackground, businessType: "IT", filter: "Web", tag: ["ecommerce", "Restaurant", "Shopping"] }
  ]
} as props;

export default function CaseStudy(props: props) {
  let mobile = props.cards.filter((f) => f.filter.includes("Mobile"));
  let web = props.cards.filter((f) => f.filter.includes("Web"));
  let branding = props.cards.filter((f) => f.filter.includes("Branding"));
  let marketing = props.cards.filter((f) => f.filter.includes("Marketing"));

  return (
    <>
      <Helmet>
        <title>QuellxCode Pvt Ltd - Gives life to you imagination</title>
        <meta name="description" content="What's your idea? You want the world to embrace your phenomenal ideas, products, and services. Trouble is, it's a challenge for you to do it alone. We are here to help." />
      </Helmet>

      <section className="px-0@lg p-10 container w-max-100 relative">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md w-24">
          {/* <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" /> */}
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 flip-xy right-0" />
        </div>

        <div className="mt-6 px-6 w-19">
          <h1 className="title is-sm font-bolder">The stories that describe how we ship successful products</h1>
          <div>Problems are not 'Stop' signs, they are guidelines. Read our success stories in delivering custom software solutions to diverse businesses.</div>
        </div>
      </section>

      <section>
        <Tabs centered defaultActiveKey="1" animated>
          <Tabs.TabPane className="p-2 mb-2 grid has-gap-lg" tab="All" key="1">
            {props.cards.map((item) => (
              <div key={Math.random() * 10000} className="column w-8@lg bg-white w-12@md w-24 inline-block h-auto">
                <div className="h-auto masonry-item p-6 card-zoom">
                  <div className="image bg-primary mb-1rem">
                    <img className="img img-bg" src={item.background} alt="" />
                    <div className="about absolute left-0 right-0 top-0 bottom-0 p-10 flex align-middle justify-center">
                      <img className="img" src={item.logo} alt="" />
                    </div>
                  </div>
                  <div className="font-bolder txt-upper my-2 clr-secondary o-50">{item.businessType}</div>
                  <h5 style={{ letterSpacing: "4px" }}>
                    <Link to={"/casestudy/" + item.name.replace(/ /g, "").toLowerCase()} className="stretch-link">
                      {item.name}
                    </Link>
                  </h5>
                  <div>{item.description}</div>
                  <div className="mt-2 mb-6 o-50 is-sm grid">
                    {item.tag.map((t) => (
                      <span className="column w-auto py-0 clr border is-pill mr-7px mb-7px txt-nowrap">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 grid has-gap-lg" tab="Mobile" key="2">
            {mobile.map((item) => (
              <div key={Math.random() * 10000} className="column w-8@lg bg-white w-12@md w-24 inline-block h-auto">
                <div className="h-auto masonry-item p-6 card-zoom">
                  <div className="image bg-primary mb-1rem">
                    <img className="img img-bg" src={item.background} alt="" />
                    <div className="about absolute left-0 right-0 top-0 bottom-0 p-10 flex align-middle justify-center">
                      <img className="img" src={item.logo} alt="" />
                    </div>
                  </div>
                  <div className="font-bolder txt-upper my-2 clr-secondary o-50">{item.businessType}</div>
                  <h5 style={{ letterSpacing: "4px" }}>
                    <Link to={"/casestudy/" + item.name.replace(/ /g, "").toLowerCase()} className="stretch-link">
                      {item.name}
                    </Link>
                  </h5>
                  <div>{item.description}</div>
                  <div className="mt-2 mb-6 o-50 is-sm grid">
                    {item.tag.map((t) => (
                      <span className="column w-auto py-0 clr border is-pill mr-7px mb-7px txt-nowrap">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 grid has-gap-lg" tab="Web Design and Development" key="3">
            {web.map((item) => (
              <div key={Math.random() * 10000} className="column w-8@lg bg-white w-12@md w-24 inline-block h-auto">
                <div className="h-auto masonry-item p-6 card-zoom">
                  <div className="image bg-primary mb-1rem">
                    <img className="img img-bg" src={item.background} alt="" />
                    <div className="about absolute left-0 right-0 top-0 bottom-0 p-10 flex align-middle justify-center">
                      <img className="img" src={item.logo} alt="" />
                    </div>
                  </div>
                  <div className="font-bolder txt-upper my-2 clr-secondary o-50">{item.businessType}</div>
                  <h5 style={{ letterSpacing: "4px" }}>
                    <Link to={"/casestudy/" + item.name.replace(/ /g, "").toLowerCase()} className="stretch-link">
                      {item.name}
                    </Link>
                  </h5>
                  <div>{item.description}</div>
                  <div className="mt-2 mb-6 o-50 is-sm grid">
                    {item.tag.map((t) => (
                      <span className="column w-auto py-0 clr border is-pill mr-7px mb-7px txt-nowrap">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 grid has-gap-lg" tab="Branding" key="4">
            {branding.map((item) => (
              <div key={Math.random() * 10000} className="column w-8@lg bg-white w-12@md w-24 inline-block h-auto">
                <div className="h-auto masonry-item p-6 card-zoom">
                  <div className="image bg-primary mb-1rem">
                    <img className="img img-bg" src={item.background} alt="" />
                    <div className="about absolute left-0 right-0 top-0 bottom-0 p-10 flex align-middle justify-center">
                      <img className="img" src={item.logo} alt="" />
                    </div>
                  </div>
                  <div className="font-bolder txt-upper my-2 clr-secondary o-50">{item.businessType}</div>
                  <h5 style={{ letterSpacing: "4px" }}>
                    <Link to={"/casestudy/" + item.name.replace(/ /g, "").toLowerCase()} className="stretch-link">
                      {item.name}
                    </Link>
                  </h5>
                  <div>{item.description}</div>
                  <div className="mt-2 mb-6 o-50 is-sm grid">
                    {item.tag.map((t) => (
                      <span className="column w-auto py-0 clr border is-pill mr-7px mb-7px txt-nowrap">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 grid has-gap-lg" tab="Marketing" key="5">
            {marketing.map((item) => (
              <div key={Math.random() * 10000} className="column w-8@lg bg-white w-12@md w-24 inline-block h-auto">
                <div className="h-auto masonry-item p-6 card-zoom">
                  <div className="image bg-primary mb-1rem">
                    <img className="img img-bg" src={item.background} alt="" />
                    <div className="about absolute left-0 right-0 top-0 bottom-0 p-10 flex align-middle justify-center">
                      <img className="img" src={item.logo} alt="" />
                    </div>
                  </div>
                  <div className="font-bolder txt-upper my-2 clr-secondary o-50">{item.businessType}</div>
                  <h5 style={{ letterSpacing: "4px" }}>
                    <Link to={"/casestudy/" + item.name.replace(/ /g, "").toLowerCase()} className="stretch-link">
                      {item.name}
                    </Link>
                  </h5>
                  <div>{item.description}</div>
                  <div className="mt-2 mb-6 o-50 is-sm grid">
                    {item.tag.map((t) => (
                      <span className="column w-auto py-0 clr border is-pill mr-7px mb-7px txt-nowrap">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Tabs.TabPane>
        </Tabs>
      </section>
    </>
  );
}
