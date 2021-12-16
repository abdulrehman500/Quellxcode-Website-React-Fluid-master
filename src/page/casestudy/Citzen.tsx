import React, { useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";

import header from "../../image/casestudy/citzen/header.webp";
import title from "../../image/casestudy/citzen/title.webp";
import titlebg from "../../image/casestudy/citzen/titlebg.webp";
import bg from "../../image/casestudy/citzen/bg.webp";
import wireframe from "../../image/casestudy/citzen/wireframe.webp";
import typography from "../../image/casestudy/citzen/typography.png";
import Illustrations2 from "../../image/casestudy/citzen/illustrations2.webp";
import Illustrations1 from "../../image/casestudy/citzen/illustrations1.webp";
import colorpalate from "../../image/casestudy/citzen/colorpalate.webp";
import final from "../../image/casestudy/citzen/final.webp";

export default function Citzen() {
  const body = useRef(null);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <div ref={body} className="clr-white bg-primary">
      <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary", "clr-white"])}>
        <section className="pb-6 pt-10 px-6 h-min-100vh grid align-bottom">
          <div className="column w-7@lg w-24 absolute@lg txt-center txt-left@lg top-header right-0 mr-6@lg mt-6@lg">
            <img src={title} alt="" className="img w-24@lg w-19 w-15@md" />
          </div>
          <div className="column pt-6 w-20@md w-24">
            <h1 className="font-bolder mb-2">Citzen.io</h1>
            <div className="mb-4">Web Design and Development</div>
            <h1 className="title is-sm font-bolder mb-0">Citzen is a global app that lets citizens, businesses and governments interact .</h1>
          </div>
        </section>
      </VisibilitySensor>

      <img src={bg} alt="" className="img absolute z--10 w-24" style={{ top: "20%" }} />
      {/* <section className="pb-6 pt-10 px-6 h-min-75vh flex align-middle">
        <h1 className="title is-sm font-bolder">Citizen is blockchain based infrastructure so it solves most of the issues present in the inherent nature of client-server models while maintaining scalability, privacy and transparency.</h1>
      </section> */}

      <section className="mt-6">
        <img className="img w-24" src={header} alt="" />
      </section>

      <section className="px-6 py-6 container txt-center">
        <h1 className="font-bolder txt-center txt-left@md">About Citzen</h1>
        <p className="txt-justify txt-left@md">
          Citzen aspires to become a global app lets citizens, businesses and governments interact with each other in a secure, transparent and profitable way & utilizes the power of existing human communities to do so.
        </p>
        <p className="txt-justify txt-left@md">Citizen is blockchain based infrastructure so it solves most of the issues present in the inherent nature of client-server models while maintaining scalability, privacy and transparency.</p>
        <p className="txt-justify txt-left@md">
          Its connecting every facet of a citizen’s life into a globally connected world while preserving privacy & holding transparency as its highest standard. Citzen has multiple systems that are directed towards every aspect of a citizen,
          business or government
        </p>
      </section>

      <section className="px-6 py-6 container grid has-gap-lg">
        <div className="column w-12@md w-24 txt-right@md txt-center relative">
          <img src={titlebg} alt="" className="absolute img right-0 z--10" />
          <div className="sticky top-header relative z--10">
            <h1 className="font-bolder mb-2 title is-sm">Overview</h1>
            <h2 className="font-light">OF THE PROJECT</h2>
          </div>
        </div>
        <div className="column w-12@md w-24">
          <p className="txt-justify txt-left@md">In a world where our lives are increasingly getting digital, companies have modelled complete businesses around collecting, storing, analysing & selling individual and personal information!</p>
          <p className="txt-justify txt-left@md">For you it means that you can manage your complete life through citzen.</p>
          <p className="txt-justify txt-left@md">Every business, every transaction, every interaction is kept on blockchain where its completely encrypted and anonymous.</p>
          <p className="txt-justify txt-left@md">Citzen is an answer to that by creating temporary data sharing between businesses and consumers. </p>
          <p className="txt-justify txt-left@md">
            This means your data will only be shared with an online entity as long as its needed to complete the transaction/service. After that you can choose to stop sharing it and it will cease to exist for anyone except you!
          </p>
          <h5 className="font-bolder txt-center txt-left@md">Our Task</h5>
          <p className="mb-0 txt-justify txt-left@md">
            Our main focus was to develop Web application where its connecting every facet of a citizen’s life into a globally connected world while preserving privacy & holding transparency as its highest standard
          </p>
        </div>
      </section>

      <section className="px-6 py-6 container">
        <div className="txt-center relative">
          <img src={titlebg} alt="" className="absolute img left-50 trans-x--50 z--10 w-5@md w-24 ml-6" style={{ top: "-50%" }} />
          <h1 className="font-bolder mb-0 title is-sm">Wireframes</h1>
          <h2 className="font-light mb-4">OF PROJECTS</h2>
        </div>
        <p className="txt-justify txt-left@md">
          To create beautiful website design that is significant with the product, the business goals, and the end users, we kick off by creating low fidelity as well as high fidelity wireframes. Once the rough skeleton is ready, we use it for real
          time feedback and improvisation.
        </p>
        <img src={wireframe} alt="" className="img" />
      </section>

      <section className="px-6 py-6 container">
        <div className="txt-center relative">
          <img src={titlebg} alt="" className="absolute img left-50 trans-x--50 z--10 w-5@md w-24 ml-6" style={{ top: "-50%" }} />
          <h1 className="font-bolder mb-0 title is-sm">Visual</h1>
          <h2 className="font-light mb-4">DESIGN</h2>
        </div>
        <p className="txt-center@md txt-justify">
          Viewers are quick to judge a product based on the way it looks. At QuellxCode Pvt Ltd, we emphasie strongly on psychology design and the process of visual communication for problem solving using typhography, photography and illustration.
        </p>
        <img src={typography} alt="" className="img" />
      </section>

      <section className="px-6 py-6 container grid has-gap-lg">
        <div className="column w-12@md w-24 txt-right">
          <div className="relative h-100">
            <img src={titlebg} alt="" className="absolute img right-0 z--10 mt--10 mr--10" />
            <div className="sticky top-header relative z--10">
              <h1 className="txt-center font-bolder mb-2">Illustrations</h1>
              <h2 className="txt-center font-light">WE USED</h2>
              <p className="txt-justify txt-left@md">Illustrations play an important role in graphically representing business functions and tasks on any website. It helps hook user experience and look aesthetically pleasing.</p>
              <p className="txt-justify txt-left@md">Our designers created relevant designs that would compliment the overall theme, look and feel of the website.</p>
            </div>
          </div>
        </div>
        <div className="column w-12@md w-24">
          <img src={Illustrations1} alt="" className="img" />
          <img src={Illustrations2} alt="" className="img" />
        </div>
      </section>

      <section className="px-6 py-6 container">
        <div className="txt-center">
          <div className="relative">
            <img src={titlebg} alt="" className="absolute img left-50 trans-x--50 z--10" style={{ top: "-50%" }} />
            <h1 className="font-bolder mb-0 title is-sm">Colors</h1>
            <h2 className="font-light mb-4">WE USED</h2>
          </div>
        </div>
        <img src={colorpalate} alt="" className="img" />
        <h4 className="font-normal txt-center">The color symbolizes Trust, Power, Empathy, Security and Safety</h4>
      </section>

      <section className="py-6 relative">
        <div className="relative txt-center mb-10">
          <img src={titlebg} alt="" className="absolute img left-50 trans-x--50 z--10 w-5@md w-24 ml-6" style={{ top: "-50%" }} />
          <h1 className="font-bolder mb-0 title is-sm">Final</h1>
          <h2 className="font-light mb-4">HOME PAGE</h2>
        </div>
        <img src={final} alt="" className="img" />
      </section>
    </div>
  );
}
