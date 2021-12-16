import React, { useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Helmet } from "react-helmet";

import image1 from "../../image/casestudy/efund/1.webp";
import image2 from "../../image/casestudy/efund/2.webp";
import image3 from "../../image/casestudy/efund/3.webp";
import image4 from "../../image/casestudy/efund/4.webp";
import image5 from "../../image/casestudy/efund/5.webp";
import image6 from "../../image/casestudy/efund/6.webp";
import allscreens from "../../image/casestudy/efund/allscreens.webp";
import typography from "../../image/casestudy/efund/typography.webp";
import colorpalette from "../../image/casestudy/efund/colorpalette.webp";
import header from "../../image/casestudy/efund/header.webp";
import title from "../../image/casestudy/efund/title.webp";
import headerphones from "../../image/casestudy/efund/headerphones.webp";
import icons from "../../image/casestudy/efund/icons.webp";
import illustration from "../../image/casestudy/efund/illustration.svg";
import wireframes from "../../image/casestudy/efund/wireframes.webp";
import wireframestoscreens from "../../image/casestudy/efund/wireframestoscreens.webp";

export default function Efund() {
  const body = useRef(null);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <>
      <Helmet>
        <title>Efund | Web And Mobile App</title>
        <meta name="description" content="Full fledged task management system with in depth account management" />
      </Helmet>

      <div ref={body} className="clr-white bg-primary">
        <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary", "clr-white"])}>
          <section className="pb-6 pt-10 px-6 h-min-100vh grid align-bottom">
            <div className="column w-7@lg w-24  absolute@lg txt-center txt-left@lg top-header right-0 mr-2@lg">
              <img src={title} alt="" className="img w-24@lg w-19 w-15@md" />
            </div>
            <div className="column w-17@md w-24 pt-6">
              <h1 className="font-bolder mb-2">Efund</h1>
              <div className="mb-4">Web And Mobile App</div>
              <h1 className="title is-sm font-bolder mb-0">Full fledged task management system with in depth account management</h1>
            </div>
          </section>
        </VisibilitySensor>

        <section>
          <img className="img w-24" src={header} alt="" />
        </section>

        <section className="px-6 pt-6 container grid has-gap-lg align-bottom mt--25px@lg">
          <div className="column w-12@md w-24 mb-8">
            <h1 className="font-bolder txt-center txt-left@md">About E-Fund</h1>
            <div className="txt-justify">E-Fund is a full fledged task management system with in depth account management where communication between different roles is normalized and made easy.</div>
          </div>
          <div className="column w-12@md w-24">
            <img src={headerphones} alt="" className="img" />
          </div>
        </section>

        <section className="txt-center px-6 pt-6 container">
          <h1 className="font-bolder">Wireframe</h1>
          <img src={wireframes} alt="" className="img" />
        </section>

        <section className="txt-center px-6 pt-6 container">
          <h1 className="font-bolder">Wireframe To Screen</h1>
          <img src={wireframestoscreens} alt="" className="img" />
        </section>

        <section className="px-6 py-4 container grid has-gap-lg bg-light align-middle">
          <div className="column w-12@md w-24">
            <h1 className="font-bolder txt-center txt-left@md">Our Challenges</h1>
            <div className="txt-justify">The challenge for our design team was to brainstorm and conceptualize around making the UX design different from the competitors, yet stay relevant to the industry standards.</div>
          </div>
          <div className="column w-12@md w-24 txt-right">
            <img src={illustration} alt="" className="img" />
          </div>
        </section>

        <section>
          <div className="txt-center px-6 pt-6 container">
            <h1 className="font-bolder">The User Flow</h1>
            <div className="txt-justify txt-center@md">
              One of the other challenges of the project was to identify user personas and map out their user journeys. Doing this was highly crucial for the successful implementation of the idea since we realized there wasn’t any specific target
              audience and the app would be used by a different set of users belonging to different demographics, it was crucial to design it in a way that it would be relevant and easy to use for everyone.
            </div>
          </div>

          <div className="pt-6 relative grid has-gap-lg align-middle pr-6" id="HomeScreen">
            <img src={image1} alt="" className="img w-18@md order-1 order-0@md" />
            <div className="column off-12@md w-10@md w-24 absolute@md">
              <h1 className="font-bolder txt-center txt-left@md">Home Screen</h1>
              <div className="txt-justify"> The home screen had to be simple yet effective. A status bar had to be integrated in order to keep a check on the progress of the request filed.</div>
            </div>
          </div>

          <div className="pt-6 relative grid has-gap-lg align-middle pl-6">
            <div className="column w-12@md w-24">
              <h1 className="font-bolder txt-center txt-left@md">Reporting</h1>
              <div className="txt-justify">
                Repoting is the most important user flow of any business application. While reporting is confusing, we designed the reporting screen with entire track history dividing it into daily, weekly and monthly checks.
              </div>
            </div>

            <div className="w-12@md w-24">
              <img src={image2} alt="" className="img" />
            </div>
          </div>

          <div className="pt-6 relative grid has-gap-lg align-middle pr-6" id="Settings">
            <img src={image3} alt="" className="img w-18@md w-24 order-1 order-0@md" />
            <div className="column off-12@md w-10@md w-24 absolute@md">
              <h1 className="font-bolder txt-center txt-left@md">Settings</h1>
              <div className="txt-justify">The user can easilly update his profile information once he has been given a specific role by the admin.</div>
            </div>
          </div>
        </section>

        <section className="pt-6 px-6 container">
          <h1 className="font-bolder txt-center txt-left@md">Iconography</h1>
          <div className="my-2">Our team of graphic designers created several unique icons and illustrations that matched with the brand logo and enhanced the overall theme and look.</div>
          <img src={icons} alt="" className="img" />
          <div className="grid mt-2 has-gap-lg">
            <div className="column w-12@md w-24">
              <h1 className="font-bolder txt-center txt-left@md">Color Palette</h1>
              <div className="my-4 txt-justify">To keep the design minimal and intuitive, we used white as our background colour and shades of blue to create energy.</div>
              <img src={colorpalette} className="img" alt="" />
            </div>
            <div className="column w-12@md w-24">
              <h1 className="font-bolder txt-center txt-left@md">Typography</h1>
              <div className="my-4 txt-justify">Our team of graphic designers created several unique icons and illustrations that matched with the brand logo and enhanced the overall theme and look.</div>
              <img src={typography} className="img w-20" alt="" />
            </div>
          </div>
        </section>

        <section className="pt-6 relative">
          <h1 className="px-10 font-bolder txt-center">The UX Fundamental</h1>
          <div className="px-10 txt-center@md txt-justify">
            To enhance the overall user experience of the app, we not only created thematic UI design but also incorporated a few key features to make Package Delivery a go-to platform for its varied users.
          </div>

          <div className="pt-6 relative grid has-gap-lg align-middle pr-6@md">
            <div className="pl-0 column w-12@md w-24 order-1 order-0@md">
              <img src={image4} alt="" className="img" />
            </div>

            <div className="column off-12@md w-10@md w-24 absolute@md" style={{ top: "20%" }}>
              <h1 className="font-bolder txt-center txt-left@md">Billing Feature</h1>
              <div className="txt-justify">
                A billing option where users can send in receipts related to their purchases, payment or order status. The user will be connected directly to the superiors which makes it a one of a kind experience on any task management app.
              </div>
            </div>
          </div>

          <div className="pt-6 relative grid has-gap-lg align-middle pl-6@md">
            <div className="column w-12@md w-24 ">
              <h1 className="font-bolder txt-center txt-left@md">Pay Orders</h1>
              <div className="txt-justify">
                The pay order screen was designed to show maximum information with minimum clutter. As there were so many features made to be fit in a confined space of a single screen. From payee’s personal information to the description of the
                nature of payment.
              </div>
            </div>

            <div className="w-12@md w-24 pr-0">
              <img src={image5} alt="" className="img" />
            </div>
          </div>

          <div className="pt-6 relative grid has-gap-lg align-middle pr-6@md">
            <div className="w-12@md w-24 order-1 order-0@md">
              <img src={image6} alt="" className="img" />
            </div>

            <div className="column w-12@md w-24">
              <h1 className="font-bolder txt-center txt-left@md">Claim Payments</h1>
              <div className="txt-justify">
                Claiming payments is the most important user flow of this system. While tracking already paid receipts are confusing and full of clutter, we designed the claim payment screen with a birds-eye view to keep a track of paid receipts.
              </div>
            </div>
          </div>
        </section>

        <section className="pt-6 relative grid has-gap-lg align-middle pr-6@md txt-center">
          <div className="container">
            <h1 className="font-bolder txt-center txt-left@md">The Final Screens</h1>
            <div>All in all the entire app looked extremely modern & minimal with various UX functionalites at the core of its design.</div>
          </div>
          <img src={allscreens} alt="" className="img" />
        </section>
      </div>
    </>
  );
}
