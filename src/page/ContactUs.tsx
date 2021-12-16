import React from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { Helmet } from "react-helmet";

import sideimage from "../image/contact/contactussideimage.svg";

import Fluid from "../image/fluid.svg";

import requestquotebg from "../image/requestquotebg.jpg";
import ContactUsForm from "../component/ContactUsForm";

export default function ContactUs() {
  const [popup, setPopup] = React.useState<boolean>(true);
  const { isLoaded, loadError } = useLoadScript({ googleMapsApiKey: "AIzaSyB1ALoYpIeQLQgbX0zuGmFM8jdFZUxRPjo", libraries: [] });

  if (loadError) return <div>"error loading map"</div>;
  if (!isLoaded) return <div>"loading map.."</div>;

  return (
    <>
      <Helmet>
        <title>Contact Us | QuellxCode</title>
        <meta name="description" content="Go ahead. Say hello" />
      </Helmet>

      <section className="txt-center@md txt-left@lg px-6@lg p-10 container w-max-100 h-min-100vh flex align-middle justify-center">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md w-24">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" />
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 flip-xy right-0" />
        </div>
        <div>
          <h1 className="pt-10 title is-sm font-bolder">Go ahead. Say hello.</h1>
          <p className="w-19@lg">
            Looking to redesign your website that hasn’t seen an upgrade in a few years? Or do you need a mobile application for your customers? Whatever may be your requirement, our team of highly adept and motivated software specialists at
            QuellxCode can help you find the best IT solution by putting their craft and skills to work.
          </p>
          <p className="w-19@lg">
            As a Software house in Islamabad, no project is big or small for us to handle, and if you’re looking to consult with us for a solution you have in mind or need to discuss a business opportunity, simply drop us a message down below and we
            will get back to you shortly.
          </p>

          <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
            <i className="icon ri-2x ri-arrow-down-line" />
          </button>
        </div>
      </section>

      <section id="scrolldownView" className="container grid has-gap-lg align-middle">
        <div className="column w-24 w-14@md">
          <img className="img" src={sideimage} alt="" />
        </div>
        <div className="column w-24 w-10@md">
          <ContactUsForm />
        </div>
      </section>

      <section className="conatiner bg-primary img-bg mt-4" style={{ backgroundImage: `url(${requestquotebg})` }}>
        <GoogleMap mapContainerStyle={{ width: "100%", height: "50vh" }} center={{ lat: 33.5729464377952, lng: 73.14732670783997 }} options={{ disableDefault: true }} zoom={19}>
          <Marker position={{ lat: 33.5729464377952, lng: 73.14732670783997 }} onClick={() => setPopup(!popup)}>
            {popup && (
              <InfoWindow>
                <div>QuellxCode Pvt Ltd, Hall 9-A, Syed Arcade, Main PWD Road, Islamabad</div>
              </InfoWindow>
            )}
          </Marker>
        </GoogleMap>
      </section>
    </>
  );
}
