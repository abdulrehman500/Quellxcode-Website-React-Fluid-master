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
          Are you looking to redesign a website that hasn't been updated in several years? Or do your customers require a mobile application? Whatever your needs are, QuellxCode's team of highly skilled and motivated software specialists can put their craft and skills to work to help you find the best IT solution.
          </p>
          <p className="w-19@lg">
          As a software house in Islamabad, no project is too big or too small for us to handle, and if you'd like to consult with us on a solution or discuss a business opportunity, just send us a message using the form below, and we'll get back to you as soon as possible.
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
