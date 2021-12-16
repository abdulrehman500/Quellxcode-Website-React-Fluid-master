import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

import arsalanbhatti from "../image/reviews/arsalanbhatti.png";
import connector from "../image/reviews/connector.png";
import hashimkhan from "../image/reviews/hashimkhan.png";
import hirasajid from "../image/reviews/hirasajid.png";
import khadijasultan from "../image/reviews/khadijasultan.png";
import zebahmed from "../image/reviews/zebahmed.png";
import female from "../image/reviews/female.png";
import male from "../image/reviews/male.png";

export interface props {
  className?: string;
}

Reviews.defaultProps = {
  className: "px-6 py-6@md py-10 container"
} as props;

export default function Reviews(props: props) {
  const [entered, setEntered] = useState<boolean>(false);

  return (
    <section className={props.className}>
      <h1 className="txt-center font-bolder">Words from our clients</h1>
      <VisibilitySensor active={!entered} delayedCall partialVisibility onChange={(visible) => (visible ? setEntered(true) : null)}>
        {({ isVisible }) => {
          return (
            <div className="grid has-gap-lg align-top mt-1rem pt-1rem overflow-hidden">
              <div className={`animate__animated ${isVisible ? "animate__fadeInUp" : ""} animate__slow column w-24 w-12@md w-8@lg mt--1rem`}>
                <div className="masonry-item bg-white card-hover is-round p-6 border border-light h-min-auto">
                  <div className="grid has-gap-lg align-middle is-adjust mb-2">
                    <div className="column w-4">
                      <img className="img" src={female} alt="" />
                    </div>
                    <h6 className="column">Seenam Afridi</h6>
                  </div>
                  <p className="mb-0">
                    A bunch of well experienced and well learnt individuals having complete command over what they do . Have had an amazing experience. They understand what you have in mind and delivers something even better than what you have
                    thought . Among the best people one can find in market . Highly recommended ! Keep up the Amazing work that you do!! A happy and satisfied client !
                    <span role="img" aria-label="emoji">
                      😊
                    </span>
                  </p>
                </div>

                <div className="masonry-item bg-white card-hover is-round p-6 border border-light h-min-auto">
                  <div className="grid has-gap-lg align-middle is-adjust mb-2">
                    <div className="column w-4">
                      <img className="img" src={hashimkhan} alt="" />
                    </div>
                    <h6 className="column">Hashim Khan</h6>
                  </div>
                  <p>
                    <span className="block">
                      I am currently running my restaurant "Roadstoves" with a chain spread nationwide and i have fully availed the services that QuellxCode can offer. They have designed our website and still managing it, our menu layout, running our
                      social media and campaigns associated with it. And I’m more than satisfied with their high professionalism and services.
                    </span>
                    <span className="block">CEO Roadstoves Cafe</span>
                  </p>
                </div>

                <div className="masonry-item bg-white card-hover is-round p-6 border border-light h-min-auto">
                  <div className="grid has-gap-lg align-middle is-adjust mb-2">
                    <div className="column w-4">
                      <img className="img" src={hirasajid} alt="" />
                    </div>
                    <h6 className="column">Hira Sajid</h6>
                  </div>
                  <p className="mb-0">A great and professional platform for learning and gaining experience.</p>
                </div>
              </div>
              <div className={`animate__animated ${isVisible ? "animate__fadeInUp" : ""} animate__slower column hidden block@md w-12@md w-8@lg mt-1rem`}>
                <div className="masonry-item bg-white card-hover is-round p-6 border border-light h-min-auto">
                  <div className="grid has-gap-lg align-middle is-adjust mb-2">
                    <div className="column w-4">
                      <img className="img" src={connector} alt="" />
                    </div>
                    <h6 className="column">Connector</h6>
                  </div>
                  <p className="mb-0">
                    <span className="block">We are getting designing and web services from QxC.</span>
                    <span className="block">The prompt response and quality delivery of work from QxC made their positive name in market.</span>
                    <span className="block">I fully recommend them for designing and web development services</span>
                  </p>
                </div>

                <div className="masonry-item bg-white card-hover is-round p-6 border border-light h-min-auto">
                  <div className="grid has-gap-lg align-middle is-adjust mb-2">
                    <div className="column w-4">
                      <img className="img" src={arsalanbhatti} alt="" />
                    </div>
                    <h6 className="column">Arsalan Bhatti</h6>
                  </div>
                  <p className="mb-0">
                    <span className="block">Alhamdulilah very good company along with friendly and talented staff</span>
                    <span className="block">Very nice experience with them regarding website building and logo designing.</span>
                    <span className="block">Keep up the momentum guys.</span>
                  </p>
                </div>

                <div className="masonry-item bg-white card-hover is-round p-6 border border-light h-min-auto">
                  <div className="grid has-gap-lg align-middle is-adjust mb-2">
                    <div className="column w-4">
                      <img className="img" src={zebahmed} alt="" />
                    </div>
                    <h6 className="column">Zeb Ahmed</h6>
                  </div>
                  <p className="mb-0">
                    Excellent platform for girls. The team is highly capable and helping. My experience and tenure over here was very good, I gained hands on experience in web development. The team really helped me get theri. Thankyou for such an
                    awesome experience.
                  </p>
                </div>
              </div>
              <div className={`animate__animated ${isVisible ? "animate__fadeInUp" : ""} animate__slow  column hidden block@lg mt--1rem`}>
                <div className="masonry-item bg-white card-hover is-round p-6 border border-light h-min-auto">
                  <div className="grid has-gap-lg align-middle is-adjust mb-2">
                    <div className="column w-4">
                      <img className="img" src={female} alt="" />
                    </div>
                    <h6 className="column">hina butt</h6>
                  </div>
                  <p className="mb-0">
                    Extremely talented group of people. I would definitely recommend them for any form of digital transformation. They were effectively able to put my small business on the map. The whole team especially moiz made our team feel very
                    comfortable during our meetings. Apart from being very professional they always went beyond and engaged myself and my team on a personal level so that they could deliver precisely what was required.I am now their running client
                    and proud of it!. Go Qcode.
                  </p>
                </div>

                <div className="masonry-item bg-white card-hover is-round p-6 border border-light h-min-auto">
                  <div className="grid has-gap-lg align-middle is-adjust mb-2">
                    <div className="column w-4">
                      <img className="img" src={khadijasultan} alt="" />
                    </div>
                    <h6 className="column">Khadija Sultan</h6>
                  </div>
                  <p className="mb-0">
                    this is a very brilliant platform with a very bright team! loved to work with them and see how they can bring your ideas to life. keen to see more of there work! cheers
                    <span role="img" aria-label="emoji">
                      🎈
                    </span>
                  </p>
                </div>

                <div className="masonry-item bg-white card-hover is-round p-6 border border-light h-min-auto">
                  <div className="grid has-gap-lg align-middle is-adjust mb-2">
                    <div className="column w-4">
                      <img className="img" src={male} alt="" />
                    </div>
                    <h6 className="column">techshlok</h6>
                  </div>
                  <p className="mb-0">Pull in ten extra bodies to help roll the tortoise it just needs more agile team cowbell,cloud strategy and we need to dialog around your choice.</p>
                </div>
              </div>
            </div>
          );
        }}
      </VisibilitySensor>
    </section>
  );
}
