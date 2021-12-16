import React, { useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";

import banner from "../../image/casestudy/evv/banner.webp";
import about from "../../image/casestudy/evv/about.webp";
import wireframe1 from "../../image/casestudy/evv/wireframe1.webp";
import wireframe2 from "../../image/casestudy/evv/wireframe2.webp";
import image1 from "../../image/casestudy/evv/image1.webp";
import image2 from "../../image/casestudy/evv/image2.webp";
import image3 from "../../image/casestudy/evv/image3.webp";
import image4 from "../../image/casestudy/evv/image4.webp";
import image5 from "../../image/casestudy/evv/image5.webp";
import image6 from "../../image/casestudy/evv/image6.webp";
import image8 from "../../image/casestudy/evv/image8.webp";
import image9 from "../../image/casestudy/evv/image9.webp";
import image10 from "../../image/casestudy/evv/image10.webp";
import image11 from "../../image/casestudy/evv/image11.webp";
import image12 from "../../image/casestudy/evv/image12.webp";
import image13 from "../../image/casestudy/evv/image13.webp";
import colorpalette from "../../image/casestudy/evv/colorpalette.webp";
import typography from "../../image/casestudy/evv/typography.webp";
import final from "../../image/casestudy/evv/final.webp";
import title from "../../image/casestudy/evv/title.webp";

export default function Evv() {
  const body = useRef(null);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <>
      <div ref={body} className="clr-white bg-primary overflow-x-hidden">
        <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary", "clr-white"])}>
          <section className="pb-6 pt-10 px-6 h-min-100vh grid align-bottom">
            <div className="column w-7@lg w-24  absolute@lg txt-center txt-left@lg top-header right-0 mr-2@lg">
              <img src={title} alt="" className="img w-24@lg w-19 w-15@md" />
            </div>
            <div className="pt-6 w-17@md column">
              <h1 className="font-bolder mb-2">Electronic Visit Verification</h1>
              <div className="mb-4">Web & Mobile App </div>
              <h1 className="title is-sm font-bolder mb-0 w-22@md">First mobile workforce management system for homecare</h1>
            </div>
          </section>
        </VisibilitySensor>

        <section>
          <img src={banner} alt="" className="img w-24" />
        </section>

        <section className="px-6 py-6 grid has-gap-lg align-middle container">
          <div className="column w-24 w-15@md txt-justify">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">About</span>
              About
            </h1>
            <p>The first mobile workforce management system for homecare. Our patented system can verify, within one-foot, where all your homecare staff are working.</p>
            <p>EVV Systems is a product of Unison Workforce Technologies, LLC. Our Unison team has used over thirty years of homecare experience to develop an unrivaled EVV system.</p>
          </div>
          <div className="column w-24 w-9@md">
            <img src={about} alt="" className="img w-24" />
          </div>
        </section>

        <section className="py-6 txt-center">
          <div className="px-6 container">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Wireframes</span>
              Wireframes
            </h1>
            <p className="txt-center@md txt-justify">
              To create solutions around any idea, our team always starts with a detailed requirement gathering of the project. To lay down the scope of the idea in terms of features and functionalities gives the client as well as the design team an
              upper hand at creating a unique product.
            </p>
            <p className="txt-center@md txt-justify">Wireframes are designed not only to feed the design team, but it’s a back and forth mechanism which helps the overall efficiency of the design.</p>
          </div>
          <img src={wireframe1} alt="" className="img w-24" />
          <img src={wireframe2} alt="" className="img w-24" />
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-24 w-15@md txt-justify">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Sidebar</span>
              Sidebar
            </h1>
            <p className="txt-center@md txt-justify">
              Out of the many features the app had, one of the most simplistic yet sophisticated ones was the variety of options users could choose from. To learn about the schduled tasks and gives an option to continue already opted job
            </p>
            <p className="txt-center@md txt-justify">User can also check pending checklist and can easily checkout remotely. Further more terms and conditions along with privacy and policy are also available</p>
          </div>
          <div className="column w-24 w-9@md">
            <img src={image1} alt="" className="img w-24" />
          </div>
        </section>

        <section className="py-6 pr-6@md container grid align-middle has-gap-lg">
          <div className="column w-24 w-9@md order-1 order-0@md">
            <img src={image2} alt="" className="img w-24" />
          </div>
          <div className="column w-24 w-15@md">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Dashboard</span>
              Dashboard
            </h1>
            <p className="txt-center@md txt-justify">Our user-friendly dashboard allows for management to easily view their entire workforce, as well as monitor staff efficiency, in a single place.</p>
          </div>
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-24 w-15@md">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Tasks</span>
              Tasks
            </h1>
            <p className="txt-justify">
              Any task management app will have details about the task. But what was different about this was the user interface was extremely friendly and easy to use. With instructions and comments, the screens were designed to be minimal and not
              overwhelm the users.
            </p>
          </div>
          <div className="column w-24 pr-0@md w-9@md">
            <img src={image3} alt="" className="img w-24" />
          </div>
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-9@md w-24 order-1 order-0@md">
            <img src={image4} alt="" className="img w-24" />
          </div>
          <div className="column w-15@md w-24">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">User Info</span>
              User Info
            </h1>
            <p className="txt-left@md txt-justify"> To deliver a unique experience to the users, we integrated customer information to help the management and give an idea who the customer is</p>
          </div>
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-24 w-15@md">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Monitoring</span>
              Intelligent Monitor
            </h1>
            <p className="txt-justify">
              Sales staff, clinical staff, supervisory staff, and DCWs, from any facility, home can be accurately monitored. We can now monitor DCWs within a one foot radius during check-in and check-out times at the Client’s home.
            </p>
          </div>
          <div className="column w-24 pr-0@md w-9@md">
            <img src={image5} alt="" className="img w-24" />
          </div>
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-9@md w-24 order-1 order-0@md">
            <img src={image6} alt="" className="img w-24" />
          </div>
          <div className="column w-15@md w-24">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Attendance</span>
              Attendance
            </h1>

            <p className="txt-justify">Scan and check in provides us with functionality where the user can check in and check out easily</p>
          </div>
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-24 w-15@md">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Checklist</span>
              Customer checklist
            </h1>
            <p className="txt-justify">The niche factor for the app was the checklist feature we added. Customers can create a checklist in two categories, one being general category and the other being the special one.</p>
          </div>
          <div className="column w-24 pr-0@md w-9@md">
            <img src={image8} alt="" className="img w-24" />
          </div>
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-24 w-12@md w-15@lg order-1 order-0@md">
            <img src={image12} alt="" className="img w-24" />
          </div>
          <div className="column w-24 w-12@md w-9@lg">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Track</span>
              Real-time Tracking
            </h1>
            <p className="txt-justify">Through the advanced use of Bluetooth, GPS, and Mobile Based Location Services, our system accurately verifies employees are physically at their appointed work location.</p>
            <ul className="list icon-check-circle">
              <li>Real-Time Location Tracking</li>
              <li>Real-Time Work-shift And Visit Status</li>
              <li>Real-Time Communication With The Employees</li>
            </ul>
          </div>
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-24 w-12@md w-9@lg">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Schedule</span>
              Scheduling
            </h1>
            <p className="txt-justify">Managing large scale operations often require more restricted accountability. Due to this, our system can restrict shifts down to designed start and end times.</p>
            <ul className="list icon-check-circle">
              <li>Easy-to-use Appointment System</li>
              <li>Unique Appointments for Live-in and Hourly Employees</li>
              <li>Quick Editing of Existing Appointments</li>
            </ul>
          </div>
          <div className="column w-24 w-12@md pr-0@md w-15@lg">
            <img src={image9} alt="" className="img w-24" />
          </div>
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-24 w-12@md w-15@lg order-1 order-0@md">
            <img src={image10} alt="" className="img w-24" />
          </div>
          <div className="column w-24 w-12@md w-9@lg">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Alert</span>
              Alert & Notifications
            </h1>
            <p className="txt-justify">
              We offer fully customizable Alerts and Notifications that maintain constant communication from your employees. These alerts can even be fully configured by job position to make sure relevant alerts go to the specific people that require
              them.
            </p>
            <ul className="list icon-check-circle">
              <li>Real-time employee notifications</li>
              <li>Shift Status Updates</li>
              <li>Fully Customizable</li>
            </ul>
          </div>
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-24 w-12@md w-9@lg">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Report</span>
              Reports & Payroll
            </h1>
            <p className="txt-justify">We have designed fully exportable and very accurate payroll accounting reports. We offer the ability to export by CSV or PDF file formats for easy importing into any existing payroll system.</p>
            <ul className="list icon-check-circle">
              <li>Accurate Down to the Minute</li>
              <li>Easy to Print and Validate Completed Shifts</li>
              <li>Fully Importable into Existing Payroll Systems</li>
            </ul>
          </div>
          <div className="column w-24 w-12@md pr-0@md w-15@lg">
            <img src={image11} alt="" className="img w-24" />
          </div>
        </section>

        <section className="py-6 px-6 container grid align-middle has-gap-lg overflow-hidden">
          <div className="column w-24 w-12@md w-15@lg order-1 order-0@md">
            <img src={image13} alt="" className="img w-24" />
          </div>
          <div className="column w-24 w-12@md w-9@lg">
            <h1 className="font-bolder txt-center relative mb-10">
              <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 txt-center z--10">Work</span>
              Work Checklist
            </h1>
            <p className="txt-justify">
              One of the key components of our system, is the ability to track the completion of appointed tasks. Employers are now able to design custom checklists that all of their employees are required to complete even unique by physical
              locations.
            </p>
            <ul className="list icon-check-circle">
              <li>Customizable by Work Location</li>
              <li>Easy to Answer The Questions Through Our Mobile Device</li>
              <li>Ideal for Every Industry</li>
            </ul>
          </div>
        </section>

        <section className="py-6 px-6 txt-center">
          <h1 className="font-bolder relative mb-10">
            <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 z--10">Color</span>
            Color Palette
          </h1>
          <img src={colorpalette} alt="" className="img w-18" />
        </section>

        <section className="py-6 px-6 txt-center">
          <h1 className="font-bolder relative mb-10">
            <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 z--10">Fonts &</span>
            Typography
          </h1>
          <img src={typography} alt="" className="img w-24" />
        </section>

        <section className="py-6 px-6 txt-center">
          <h1 className="font-bolder relative mb-10">
            <span className="absolute clr-light title is-lg w-24 left-0 top-50 trans-y--50 z--10">Final</span>
            The Final Takeaway
          </h1>

          <p className="txt-center">All in all, this app was designed to allow management to easily view their entire workforce, as well as monitor staff efficiency, in a single place.</p>
          <p className="txt-center">
            Sales staff, clinical staff, supervisory staff, and DCWs, from any facility, home can be accurately monitored. We can now monitor DCWs within a one foot radius during check-in and check-out times at the Client’s home.
          </p>
        </section>

        <section>
          <img src={final} alt="" className="img w-24" />
        </section>
      </div>
    </>
  );
}
