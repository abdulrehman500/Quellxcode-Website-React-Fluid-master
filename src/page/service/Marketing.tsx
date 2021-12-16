import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";

import { Modal, Carousel } from "antd";

import RequestQuote from "../../component/RequestQuote";
import VisibilitySensor from "react-visibility-sensor";

// import SliderMarketing from "../../component/SliderMarketing";
import OnVisible from "../../component/OnVisible";
import OnceVisible from "../../component/OnceVisible";

import people from "../../image/service/marketing/people.png";
import brandarchitects from "../../image/service/marketing/brandarchitects.svg";
import contentdeveloper from "../../image/service/marketing/contentdeveloper.svg";
import digitalengineers from "../../image/service/marketing/digitalengineers.svg";
import posts from "../../image/service/marketing/posts.png";

import bs from "../../image/service/marketing/bs.png";
import ppc from "../../image/service/marketing/ppc.png";
import seo from "../../image/service/marketing/seo.png";
import smm from "../../image/service/marketing/smm.png";
import va from "../../image/service/marketing/va.png";
import MarketingForm from "../../component/MarketingForm";

export default function Marketing() {
  const body = useRef(null);
  const [model, setModel] = useState<boolean>(false);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <>
      <Helmet>
        <title>Digital marketing services in Islamabad | QuellxCode</title>
        <meta name="description" content="Best in class digital marketing service" />
      </Helmet>

      <div ref={body} className="bg-primary">
        <Modal centered visible={model} className="txt-center" footer={null} onCancel={() => setModel(false)}>
          <MarketingForm />
        </Modal>

        <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} intervalDelay={500} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary"])}>
          <section className="txt-center px-6 h-min-100vh flex align-middle justify-center">
            <div className="mt-2 clr-black">
              <h1 className="title is-sm font-bolder mb-2 font-outline">Outsmart the competition with</h1>
              <h1 className="title is-lg font-boldest mb-2">
                Best
                <span className="hidden inline@md">-</span>
                <span className="inline hidden@md"> </span>In
                <span className="hidden inline@lg">-</span>
                <span className="inline hidden@lg"> </span>Class
              </h1>
              <h1 className="title is-sm font-bolder mb-2">DIGITAL MARKETING SERVICES</h1>
              <button onClick={() => setModel(true)} className="btn is-sld is-dark px-4 is-lg">
                Get Free proposal
              </button>

              <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
                <i className="icon ri-2x ri-arrow-down-line" />
              </button>
            </div>
          </section>
        </VisibilitySensor>

        <section className="pt-6 relative" id="scrolldownView">
          <div className="px-6 txt-center">
            <h1 className="title is-sm">“Trust your business with our fool proof SEO marketing strategies, for buzz in analytics”</h1>
            <p className="txt-justify txt-left">
              We believe in what we do and stand together, with you, to achieve even the impossible. We lead with creativity, think strategically, build systems and processes, and pour our souls into each pixel we touch. Learn more about us below.
            </p>
          </div>
          <div className="grid justify-between mx-auto w-18 mb-4">
            <div className="column w-8@md w-6@lg w-24">
              <div className="picture p-4 flex align-bottom border border-dark relative">
                <img src={brandarchitects} alt="" className="absolute left-50 top-50 trans--50--50 img" />
                <div className="h4 mb-0 mb-0">
                  <div>BRAND</div>
                  <div>ARCHITECTS</div>
                </div>
              </div>
            </div>
            <div className="column w-8@md w-6@lg w-24">
              <div className="picture p-4 flex align-bottom border border-dark relative">
                <img src={contentdeveloper} alt="" className="absolute left-50 top-50 trans--50--50 img" />
                <div className="h4 mb-0 mb-0">
                  <div>DIGITAL</div>
                  <div>ENGINEERS</div>
                </div>
              </div>
            </div>
            <div className="column w-8@md w-6@lg w-24">
              <div className="picture p-4 flex align-bottom border border-dark relative">
                <img src={digitalengineers} alt="" className="absolute left-50 top-50 trans--50--50 img" />
                <div className="h4 mb-0 mb-0">
                  <div>CONTENT</div>
                  <div>DEVELOPERS</div>
                </div>
              </div>
            </div>
          </div>

          <img src={people} alt="" className="img mb-6 w-24" />

          <div className="absolute bottom-0 left-0 right-0 z--10 PEOPLE-BG" />
        </section>

        <section className="px-6 py-6 grid WHATDRIVESUS">
          <div className="column w-24 w-11@md mr--10">
            <h1 className="img-bg txt-clip font-boldest">
              <span className="block">What</span>
              <span className="block">drives</span>
              <span className="block">us?</span>
            </h1>
          </div>
          <div className="column w-24 w-13@md is-lg mb-0 mt-35@md mt-0 font-bold clr-white txt-left@md txt-justify">
            <p>
              As a Full Stack digital agency we live and breathe for the thrill of helping businesses launch off on the Google Search Engine Results Page, and get the much needed buzz in their analytics. We don’t just search and apply keywords to
              your content, we figure out the best, high volume, long tail, niche specific keywords that will result in a higher sales conversion and a strong ROI. We live at the intersection of strategy, technology, media and marketing and are
              driven to innovate through creative, kickass strategies while using some of the best technology out there for your brand.
            </p>
            <p>
              We are entrepreneurs at heart, and this a long road of surprising our clients and ourselves with the way we market and find solutions for their business problems. The team at QuellxCode Pvt Ltd understands the importance and impact
              well-executed results-driven campaigns as it can mean the difference between extraordinary and average results, that is why we’re your best bet to make some noise online and offline.
            </p>
          </div>
        </section>

        <section className="px-6 py-6 conatiner bg-light">
          <h1 className="font-bolder">What we do</h1>
          <Carousel
            autoplay
            autoplaySpeed={4000}
            speed={1000}
            className="container txt-center"
            dots
            infinite
            arrows
            nextArrow={<NextArrow />}
            prevArrow={<PrevArrow />}
            slidesToShow={3}
            draggable
            accessibility
            responsive={[
              {
                breakpoint: 769,
                settings: {
                  // centerMode: false,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  // centerMode: false,
                }
              }
            ]}
          >
            <img className="img " src={bs} alt="" />
            <img className="img " src={smm} alt="" />
            <img className="img " src={seo} alt="" />
            <img className="img " src={ppc} alt="" />
            <img className="img " src={va} alt="" />
          </Carousel>
        </section>

        <section className="px-6 py-6">
          {/* <h1 className="title font-bolder">Social media</h1> */}
          <img src={posts} alt="" className="img px-6" />
        </section>

        <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary"])}>
          <section className="px-6 py-6">
            <h1 className="title font-bolder">By the Numbers</h1>
            <div className="grid has-gap-lg mb-4 px-6">
              <div className="column w-8@md w-24 txt-center">
                <h1 className="font-bolder title">
                  <OnVisible CountUpProps={{ end: 90, suffix: "%" }} />
                </h1>
                <div>Improved Brand Awareness</div>
              </div>
              <div className="column w-8@md w-24 txt-center">
                <h1 className="font-bolder title">
                  <OnVisible CountUpProps={{ end: 95, suffix: "%" }} />
                </h1>
                <div>Improved Organic Search Optimization</div>
              </div>
              <div className="column w-8@md w-24 txt-center">
                <h1 className="font-bolder title">
                  <OnVisible CountUpProps={{ prefix: "$", end: 15, suffix: "M" }} />
                </h1>
                <div>Approx Turnover increased</div>
              </div>
            </div>
          </section>
        </VisibilitySensor>

        <OnceVisible partialVisibility={true}>
          {({ isVisible }) => (
            <section id="pricing" className="px-6 pt-6 pb-2 conatiner relative overflow-hidden">
              <h1 className="title font-bolder">Social Media Packages</h1>
              <div className="absolute z-0 is-circle" />
              <div className="block hidden@lg absolute z-0 is-circle" />
              <div className="grid has-gap-lg justify-center">
                <div className={`animate__animated ${isVisible ? "animate__fadeInUp" : ""} column z-10 w-24 w-8@lg`}>
                  <div className="shadow-lg is-round overflow-hidden card">
                    <div className="px-8 py-10 bg-light txt-center clr-black">
                      <h5 className="txt-upper">Silver</h5>
                      <div className="py-6">
                        <h1 className="mb-2">$399</h1>
                        <h6>/month</h6>
                      </div>
                      <button className="btn is-sld is-dark is-block mx-auto w-12">Get started</button>
                    </div>
                    <div className="px-8 py-10 bg-white">
                      <ul className="list icon-check">
                        <li className="mb-4">Manage Facebook Page</li>
                        <li className="mb-4">Manage instagram Page</li>
                        <li className="mb-4">8 High Quality Posts per Month</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`animate__animated ${isVisible ? "animate__fadeInUp" : ""} animate__delay-1s column z-10 w-24 w-8@lg`}>
                  <div className="shadow-lg is-round overflow-hidden card">
                    <div className="px-8 py-10 bg-light txt-center clr-black">
                      <h5 className="txt-upper">Gold</h5>
                      <div className="py-6">
                        <h1 className="mb-2">$599</h1>
                        <h6>/month</h6>
                      </div>
                      <button className="btn is-sld is-dark is-block mx-auto w-12">Get started</button>
                    </div>
                    <div className="px-8 py-10 bg-white">
                      <ul className="list icon-check">
                        <li className="mb-4">Manage Facebook Page</li>
                        <li className="mb-4">Manage instagram Page</li>
                        <li className="mb-4">12 High Quality Posts per Month</li>
                        <li className="mb-4">Campaign Management</li>
                        <li className="mb-4">$100 dedicated for boosting</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`animate__animated ${isVisible ? "animate__fadeInUp" : ""} animate__delay-2s column z-10 w-24 w-8@lg`}>
                  <div className="shadow-lg is-round overflow-hidden card">
                    <div className="px-8 py-10 bg-light txt-center clr-black">
                      <h5 className="txt-upper">Platinum</h5>
                      <div className="py-6">
                        <h1 className="mb-2">$899</h1>
                        <h6>/month</h6>
                      </div>
                      <button className="btn is-sld is-dark is-block mx-auto w-12">Get started</button>
                    </div>
                    <div className="px-8 py-10 bg-white">
                      <ul className="list icon-check">
                        <li className="mb-4">Manage Facebook Page</li>
                        <li className="mb-4">Manage instagram Page</li>
                        <li className="mb-4">16 High Quality Posts per Month</li>
                        <li className="mb-4">Campaign Management</li>
                        <li className="mb-4">$150 dedicated for boosting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </OnceVisible>

        {/* <SliderMarketing /> */}

        <RequestQuote />
      </div>
    </>
  );
}

function NextArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}

function PrevArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}
