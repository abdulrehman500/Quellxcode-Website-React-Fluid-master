import React, { useState } from "react";
import { Tabs, Carousel, Modal } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import BrandsWeWorkedWith from "../component/BrandsWeWorkedWith";
import RequestQuote from "../component/RequestQuote";
import Reviews from "../component/Reviews";
import OnVisible from "../component/OnVisible";

import Fluid from "../image/fluid.svg";
import home from "../image/hire/hire.svg";

import two_pik from "../image/hire/experence.svg";
import comm_pik from "../image/hire/communicate.svg";
import cost_pik from "../image/hire/cost.svg";
import play_pik from "../image/hire/play.svg";
import trans_pik from "../image/hire/time.svg";
import full_pik from "../image/hire/web.svg";

import one from "../image/hire/icon/one.svg";
import two from "../image/hire/icon/two.svg";
import three from "../image/hire/icon/three.svg";
import four from "../image/hire/icon/four.svg";
import five from "../image/hire/icon/five.svg";
import six from "../image/hire/icon/three.svg";
import seven from "../image/hire/icon/seven.svg";
import eight from "../image/hire/icon/eight.svg";

// icons import
import appium_icon from "../image/icons/appium.png";
import react_icon from "../image/icons/reactjs-icon.png";
import angular_icon from "../image/icons/angular-icon.png";
import css_icon from "../image/icons/css-icon.png";
import django_icon from "../image/icons/django-icon.png";
import firebase_icon from "../image/icons/firebase-icon.png";
import flutter_icon from "../image/icons/flutter-icon.png";
import html_icon from "../image/icons/HTML5-icon.png";
import ionic_icon from "../image/icons/ionic-icon.png";
import java_icon from "../image/icons/java-icon.png";
import jekkins_icon from "../image/icons/jekins-icon.png";
import kotlin_icon from "../image/icons/kotlin-icon.png";
import mongo_icon from "../image/icons/mongo-icon.png";
import mysql_icon from "../image/icons/mysql-icon.png";
import net_icon from "../image/icons/net-icon.png";
import obj_icon from "../image/icons/objc-icon.png";
import php_icon from "../image/icons/php-icon.png";
import python_icon from "../image/icons/python-icon.png";
import rails_icon from "../image/icons/rails-icon.png";
import selenium_icon from "../image/icons/selenium-icon.png";
import Shopify_icon from "../image/icons/Shopify-icon.png";
import joomla_icon from "../image/icons/joomla-icon.png";
import sql_icon from "../image/icons/sql-icon.png";
import swift_icon from "../image/icons/swift-icon.png";
import typescript_icon from "../image/icons/typescript-icon.png";
import vue_icon from "../image/icons/vue-icon.png";
import wordpress_icon from "../image/icons/wordpress-icon.png";
import xamarin_icon from "../image/icons/xamarin-icon.svg";
import node_icon from "../image/icons/node-icon.png";
import drupal_icon from "../image/icons/drupal-icon.png";
import aws_icon from "../image/icons/aws-icon.png";
import google_icon from "../image/icons/google-icon.png";
import post_icon from "../image/icons/postgre.png";
import RequestQuoteForm from "../component/RequestQuoteForm";

export interface props {
  className?: string;
}

Hire.defaultProps = {
  className: ""
} as props;

export default function Hire(props: props) {
  const [contactpopup, setContactpopup] = useState<boolean>(false);

  return (
    <>
      <Helmet>
        <title>Hire Dedicated Developers | QuellxCode</title>
        <meta name="description" content="Create your expert team with various technology domains, efficient communication, and timely updates for guaranteed deliveries." />
      </Helmet>

      <Modal centered visible={contactpopup} className="txt-center" footer={null} onCancel={() => setContactpopup(false)}>
        <RequestQuoteForm afterSubmit={() => setContactpopup(false)} />
      </Modal>

      <section className="p-10 pl-10@md pt-2@md pr-2@md pb-0@md h-min-100vh grid align-middle">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" />
        </div>

        <div className="column w-24 w-12@md">
          <h1 className="title is-sm font-bolder">Hire Dedicated Developers</h1>
          <div className="mb-6">
            QuellxCode helps global startups and enterprises to hire dedicated developer teams for custom software development requirements. Create your expert team with various technology domains, efficient communication, and timely updates for
            guaranteed deliveries.
          </div>
          <button onClick={() => setContactpopup(true)} className="btn is-sld is-pill is-primary px-4 py-2" style={{ padding: "10px 30px" }}>
            Let's Talk
          </button>
        </div>
        <div className="column hidden block@md">
          <img className="img" src={home} alt="" />
        </div>

        <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
          <i className="icon ri-2x ri-arrow-down-line" />
        </button>
      </section>

      <section className="container px-6 py-6@lg py-10 bg-light txt-center" id="scrolldownView">
        <h1 className="font-bolder">Hire Dedicated Developers</h1>
        <div className="is-lg mb-4">Create your own development team now</div>
        <div className="txt-justify txt-center@lg">With ZERO upfront investment, we are committed to provide a solid foundation for your business idea. You’ll be amazed by working with our experts.</div>
      </section>

      <section className="container px-6 py-6@lg py-10 txt-center">
        <h1 className="font-bolder">Our Hiring Models</h1>
        <div className="is-lg mb-4 txt-justify txt-center@lg">To get the project needs for any given business, QuellxCode Pvt Ltd offers full-time, part-time and hourly hiring for a development project.</div>

        <div className="grid has-gap-lg txt-center">
          <div className="column w-8@md w-24">
            <div className="p-8 is-round-sm card-line border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder mb-10">Full Time</h5>
              <div>8 hours/day</div>
              <div className="divider">or</div>
              <div>5 days/week</div>
            </div>
          </div>
          <div className="column w-8@md w-24">
            <div className="p-8 is-round-sm card-line border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder mb-10">Part Time</h5>
              <div>4 hours/day</div>
              <div className="divider">or</div>
              <div>5 days/week</div>
            </div>
          </div>
          <div className="column w-8@md w-24">
            <div className="p-8 is-round-sm card-line border-light h-100 relative bg-white bg-white">
              <h5 className="font-bolder mb-10">Hourly Basis</h5>
              <div>Starts with 40 hours</div>
              <div className="divider">or</div>
              <div>Pay as you go</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4 px-6 bg-light">
        <h1 className="font-bolder txt-center">Belief of Every QuellxCodeian</h1>
        <div className="grid has-gap-lg">
          <div className="column w-8@lg w-24 p-2 txt-center">
            <img className="img mb-6" src={one} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Onsite Dedicated Team</h4>
            <p className="txt-justify">We provide onsite staffing services to complete the development cycle. Our presence at the sites can be although temporary, frequent or full-time during the development life cycle</p>
          </div>
          <div className="column w-8@lg w-24 p-2 txt-center">
            <img className="img mb-6" src={two} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Offsite Dedicated Team</h4>
            <p className="txt-justify">Select developers from us and create your own team to kick-start the project in the fastest possible time. Have full control over the team with expert consultation via a cloud team.</p>
          </div>
          <div className="column w-8@lg w-24 p-2 txt-center">
            <img className="img mb-6" src={three} alt="Client-centric Approach" />
            <h4 className="font-bolder mt-4 mb-6">Product Development Team</h4>
            <p className="txt-justify">This is only extending your own group with our screened specialists who offer help for your item to discharge it effectively through the coordination of tech viewpoints and procedure stream.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-6@lg py-10 container">
        <h5>WHY QuellxCode Pvt Ltd?</h5>
        <h1 className="font-bolder">Hire Dedicated Developers from QuellxCode Pvt Ltd</h1>
        <Carousel
          slidesToShow={3}
          responsive={[
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }
          ]}
          autoplay
          className="px-2 container"
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          autoplaySpeed={4000}
          speed={1000}
          dots
          accessibility
          arrows
          draggable
        >
          <div>
            <div className="flex align-middle">
              <div>
                <img src={four} alt="" />
              </div>
              <div className="line"></div>
            </div>
            <h5 className="mt-10 mb-6">Personalized & dedicated iOS team for your project</h5>
            <div>if you employ iOS application developer, we guarantee that every designer or group doled out will concentrate on the quality conveyance of your iOS application improvement venture.</div>
          </div>
          <div>
            <div className="flex align-middle">
              <div>
                <img src={five} alt="" />
              </div>
              <div className="line"></div>
            </div>
            <h5 className="mt-10 mb-6">Simple and easy On-boarding</h5>
            <div>
              Our simple engagement models help you choose the right development strategy based on your business requirements. We offer a co-located team, onsite team, and onsite discovery; based upon the project scope and client business needs.
            </div>
          </div>
          <div>
            <div className="flex align-middle">
              <div>
                <img src={six} alt="" />
              </div>
              <div className="line"></div>
            </div>
            <h5 className="mt-10 mb-6">Quality delivery in timeline</h5>
            <div>Our start-to-finish project management practice, day by day and week after week reports and specialized members will help you to deliver the project in time with high-quality standards</div>
          </div>
          <div>
            <div className="flex align-middle">
              <div>
                <img src={seven} alt="" />
              </div>
              <div className="line"></div>
            </div>
            <h5 className="mt-10 mb-6">NDA and contract signup</h5>
            <div>We care about your business and thought as uprightness is the most significant part of our administration. We guarantee security and pledge to secrecy.</div>
          </div>
          <div>
            <div className="flex align-middle">
              <div>
                <img src={eight} alt="" />
              </div>
              <div className="line"></div>
            </div>
            <h5 className="mt-10 mb-6">Post launch support</h5>
            <div>Most venture bombs because of helpless post-dispatch support. Our basic upkeep contract and after dispatch discussion will get you simply the help that your business needs.</div>
          </div>
        </Carousel>
      </section>

      <section className="px-6 py-6@lg py-10 container bg-light">
        <h5>PROVEN TRACK RECORD</h5>
        <h1 className="font-bolder">Factsheet</h1>
        <div className="grid">
          <div className="column w-6@lg w-8@md w-24">
            <div className="bg-white p-10">
              <div>Projects Delivered Successfully</div>
              <h1 className="mb-0 clr-primary">
                <OnVisible CountUpProps={{ end: 7000, suffix: "+" }} />
              </h1>
            </div>
          </div>
          <div className="column w-6@lg w-8@md w-24">
            <div className="bg-white p-10">
              <div>Projects Delivered Successfully</div>
              <h1 className="mb-0 clr-primary">
                <OnVisible CountUpProps={{ end: 3500, suffix: "+" }} />
              </h1>
            </div>
          </div>
          <div className="column w-6@lg w-8@md w-24">
            <div className="bg-white p-10">
              <div>Projects Delivered Successfully</div>
              <h1 className="mb-0 clr-primary">
                <OnVisible CountUpProps={{ end: 70, suffix: "%" }} />
              </h1>
            </div>
          </div>
          <div className="column w-6@lg w-8@md w-24">
            <div className="bg-white p-10">
              <div>Projects Delivered Successfully</div>
              <h1 className="mb-0 clr-primary">
                <OnVisible CountUpProps={{ end: 10, suffix: "M+" }} />
              </h1>
            </div>
          </div>
          <div className="column w-6@lg w-8@md w-24">
            <div className="bg-white p-10">
              <div>Projects Delivered Successfully</div>
              <h1 className="mb-0 clr-primary">
                <OnVisible CountUpProps={{ end: 7500, suffix: "M+" }} />
              </h1>
            </div>
          </div>
          <div className="column w-6@lg w-8@md w-24">
            <div className="bg-white p-10">
              <div>Projects Delivered Successfully</div>
              <h1 className="mb-0 clr-primary">
                <OnVisible CountUpProps={{ end: 300, suffix: "+" }} />
              </h1>
            </div>
          </div>
          <div className="column w-6@lg w-8@md w-24">
            <div className="bg-white p-10">
              <div>Projects Delivered Successfully</div>
              <h1 className="mb-0 clr-primary">
                <OnVisible CountUpProps={{ end: 4, suffix: "+" }} />
              </h1>
            </div>
          </div>
          <div className="column w-6@lg w-8@md w-24">
            <div className="bg-white p-10">
              <div>Projects Delivered Successfully</div>
              <h1 className="mb-0 clr-primary">
                <OnVisible CountUpProps={{ end: 10, suffix: "+" }} />
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6@lg py-10 container txt-center">
        <h1 className="mb-0 font-bolder">WHY DO PEOPLE CHOOSE US?</h1>
        <h5 className="mb-6">Advantages of Hiring Developers QuellxCode Pvt Ltd</h5>
        <div className="grid">
          <div className="column p-4 w-8@lg w-12@md w-24">
            <img src={two_pik} alt="icon" className="img mb-10" />
            <h5 className="font-bolder mb-4">Chose Developers</h5>
            <div className="txt-justify">Pick your own improvement group through the reviewed procedure of screening and meetings. We will present to you the resumes of the most suitable contender to choose from.</div>
          </div>
          <div className="column p-4 w-8@lg w-12@md w-24">
            <img src={comm_pik} alt="icon" className="img mb-10" />
            <h5 className="font-bolder mb-4">Direct Communication</h5>
            <div className="txt-justify">You will get full access to converse with picked engineers through Skype, email, and telephone with sound/video conferencing alternatives to defeat the correspondence obstruction.</div>
          </div>
          <div className="column p-4 w-8@lg w-12@md w-24">
            <img src={cost_pik} alt="icon" className="img mb-10" />
            <h5 className="font-bolder mb-4">ZERO Upfront Cost</h5>
            <div className="txt-justify">We help you to locally available the group with ZERO expense in regard to foundation, recruiting and staffing. You will just need to pay for the commitment time frame with the picked group of yours.</div>
          </div>
          <div className="column p-4 w-8@lg w-12@md w-24">
            <img src={full_pik} alt="icon" className="img mb-10" />
            <h5 className="font-bolder mb-4">Full Project Control</h5>
            <div className="txt-justify">
              Customers will have unlimited authority over the employed improvement group. The employed improvement group will work legitimately with you to design, create, convey the item that addresses business issues.
            </div>
          </div>
          <div className="column p-4 w-8@lg w-12@md w-24">
            <img src={trans_pik} alt="icon" className="img mb-10" />
            <h5 className="font-bolder mb-4">100% Transparency</h5>
            <div className="txt-justify">Perhaps the best part of a devoted improvement model is to have ideal venture updates to understand its condition. This causes in accurate forecasting to dispatch while prioritizing the deliveries.</div>
          </div>
          <div className="column p-4 w-8@lg w-12@md w-24">
            <img src={play_pik} alt="icon" className="img mb-10" />
            <h5 className="font-bolder mb-4">Plug ‘N Play</h5>
            <div className="txt-justify">
              Fabricate your group for all intents and purposes right away. You have the adaptability to scale up and downsize the group through a notification only a month prior to upgrade the expenses and commitment per asset.
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-6@lg py-10 container txt-center bg-light">
        <h5>OUR OFFERINGS</h5>
        <h1 className="font-bolder mb-6 txt-center">Create Your Own Team Now</h1>

        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Mobile" key="1">
            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={flutter_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Flutter</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={react_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire React Native</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={ionic_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Ionic</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={swift_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Swift</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={kotlin_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Kotlin</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={obj_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Objective C</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={xamarin_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Xamarin</span>
            </Link>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Front End" key="2">
            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={angular_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Angular</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={css_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Angular</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={react_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire React</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={typescript_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Type Script</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={vue_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Vue</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={html_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire HTML 5</span>
            </Link>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="DataBase" key="3">
            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={mongo_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Mango</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={mysql_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire My SQL</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={sql_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Ms SQL</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={firebase_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Firebase</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img src={post_icon} className="img" alt="postgresql" />
              </i>
              <span className="block">Hire Postgre SQL</span>
            </Link>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Back End" key="4">
            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={php_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire PHP</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={java_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire JAVA</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={net_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Dot Net</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={django_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Dot Net</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={node_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Node</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={rails_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Rails</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={python_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire python</span>
            </Link>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="CMS" key="5">
            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={drupal_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Drupal</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={joomla_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Joomla</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={wordpress_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Wordpress</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={Shopify_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Shopify</span>
            </Link>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Infra and DevOps" key="6">
            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={aws_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire AWS</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={google_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Google</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={jekkins_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Jekins</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src={appium_icon} alt="appium" />
              </i>
              <span className="block">Hire Appium</span>
            </Link>

            <Link to="/contact-us" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={selenium_icon} className="img" alt="icon" />
              </i>
              <span className="block">Hire Selenium</span>
            </Link>
          </Tabs.TabPane>
        </Tabs>
      </section>

      <BrandsWeWorkedWith />

      <Reviews className="px-6 container" />

      <RequestQuote />
    </>
  );
}

function NextArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}

function PrevArrow(props) {
  return <div className={`${props.className}`} style={{ ...props.style }} onClick={props.onClick} />;
}
