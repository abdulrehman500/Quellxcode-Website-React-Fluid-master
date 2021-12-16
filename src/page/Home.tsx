import React from "react";
import { Tabs } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "glider-js/glider.min.css";
import Glider from "react-glider";

import OurWork from "../component/OurWork";
import BrandsWeWorkedWith from "../component/BrandsWeWorkedWith";
import RequestQuote from "../component/RequestQuote";
import Reviews from "../component/Reviews";

import branding from "../image/service/branding.svg";
import development from "../image/service/development.svg";
import gamedevelopment from "../image/service/gamedevelopment.svg";
import marketing from "../image/service/marketing.svg";
import mobile from "../image/service/mobile.svg";
import uxui from "../image/service/uxui.svg";
import website from "../image/service/website.svg";

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
import post_icon from "../image/icons/postgre.png";
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

import Fluid from "../image/fluid.svg";
import home from "../image/home/home.svg";

import one from "../image/home/icon/one.svg";
import two from "../image/home/icon/two.svg";
import three from "../image/home/icon/three.svg";
import four from "../image/home/icon/four.svg";
import RevealText from "../component/RevealText";

export interface props {
  className?: string;
}

Home.defaultProps = {
  className: ""
} as props;

export default function Home() {
  return (
    <>
      <Helmet>
        <title>QuellxCode Pvt Ltd</title>
        <meta name="description" content="At QuellXCode software house we excel in Web Development, App Development, SEO services &amp; Digital Marketing in Bahria Town, Islamabad &amp; all over Pakistan." />
      </Helmet>

      <section className="p-10 pl-10@md pt-2@md pr-2@md pb-0@md h-min-100vh grid align-middle">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5" />
        </div>

        <div className="column w-24 w-12@md">
          <RevealText>
            <h1 className="title is-sm font-bolder">Your Go To Application Development Partner</h1>
          </RevealText>
          <RevealText>
            <div className="mb-6">
              When it comes to delivering web and mobile app development services to global businesses since 2013, QuellxCode is the best Web and Mobile applications company, that has a long lit of happy customers and a 100% project delivery success.
            </div>
            <Link to="/about" className="btn is-sld is-pill is-primary px-4 py-2">
              What we do
            </Link>
          </RevealText>
        </div>
        <div className="column w-24 w-12@md hidden block@md">
          <img className="img" src={home} alt="" />
        </div>

        <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
          <i className="icon ri-2x ri-arrow-down-line" />
        </button>
      </section>

      <section className="container px-6 py-6@md py-10 grid has-gap-lg bg-light txt-center txt-left@md" id="scrolldownView">
        <h1 className="font-bolder">Hire the Best Web and Mobile App Developers</h1>
        <div className="grid has-gap-lg">
          <div className="column w-16@md txt-justify">
            <div className="mb-1rem">
              QuellxCode Pvt Ltd is a top web and mobile design, software development company with a large pool of experienced, well versed application developers available for dedicated and fixed time/cost projects. By hiring our application
              developers you’ll be receiving customised, responsive websites, mobile applicationa, and e-commerce solutions using some of the best software tools like PHP, Laravel, Magento, ReactJS AngularJS and Node.js. we’ve got both the backend
              and front end covered.
            </div>
            <div>
              Similarly, whether you’re looking to get a mobile application developed in Android or iOS our cross-platform mobile app developers are masters in the best and on trends technologies in the world of mobile application development using
              tools like Android Studio, Xcode, Kotlin, Xamarin, PhoneGap, React Native, etc.
            </div>
          </div>
          <div className="column pl-4 hidden block@md">
            <div>
              <Link to="/services" className="border-hide btn is-min is-primary">
                Our services
              </Link>
            </div>
            <div>
              <Link to="/about" className="border-hide btn is-min is-primary">
                Read our story
              </Link>
            </div>
            <div>
              <Link to="/contact-us" className="border-hide btn is-min is-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BrandsWeWorkedWith />

      <section className="px-6 py-6@md py-10 container bg-light">
        <h1 className="font-bolder mb-6 txt-center">We Simplify Software Development Process</h1>
        <div className="grid has-gap-lg">
          <div className="column w-24 w-12@sm w-6@lg my-10 my-0@md">
            <RevealText speed="animate__fast" delay={false}>
              <div className="flex align-middle">
                <div>
                  <img src={one} alt="" />
                </div>
                <div className="line" />
              </div>
              <h5 className="mt-10 mb-6">Discovery</h5>
              <div>Through in depth research and exploration, we carve out all challenges and roadblocks that can hamper the development of IT solutions for your business.</div>
            </RevealText>
          </div>

          <div className="column w-24 w-12@sm w-6@lg my-10 my-0@md">
            <RevealText speed="animate__fast" delay="animate__delay-1s">
              <div className="flex align-middle">
                <div>
                  <img src={two} alt="" />
                </div>
                <div className="line" />
              </div>
              <h5 className="mt-10 mb-6">Design</h5>
              <div>“Don’t fix what isn’t broken” is our design approach, along with maintaining an easy to use and simple solution for all end users.</div>
            </RevealText>
          </div>

          <div className="column w-24 w-12@sm w-6@lg my-10 my-0@md">
            <RevealText speed="animate__fast" delay="animate__delay-2s">
              <div className="flex align-middle">
                <div>
                  <img src={three} alt="" />
                </div>
                <div className="line" />
              </div>
              <h5 className="mt-10 mb-6">Building</h5>
              <div>This is where we get our hands dirty by creating a system that is efficient, does the job, flexible, and scalable for all business driven problems, by using modern technologies,</div>
            </RevealText>
          </div>

          <div className="column w-24 w-12@sm w-6@lg my-10 my-0@md">
            <RevealText speed="animate__fast" delay="animate__delay-3s">
              <div className="flex align-middle">
                <div>
                  <img src={four} alt="" />
                </div>
                <div className="line hidden@md block" />
              </div>
              <h5 className="mt-10 mb-6">Deliver</h5>
              <div>By maintaining a constant loop of feedback, we continuously iterate and refine our work, and the approaches we take, to better formulate a solution that works for you.</div>
            </RevealText>
          </div>
        </div>
      </section>

      <section className="txt-center p-10 py-6@md py-10@md px-0@md">
        <h1 className="font-bolder mb-4">Our Core Services</h1>
        <Glider
          className="services"
          draggable
          hasDots
          dragVelocity={2}
          slidesToShow={1}
          responsive={[
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 3.25,
                duration: 0.5,
                itemWidth: 1,
                slidesToScroll: "auto"
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2.25,
                duration: 0.5,
                itemWidth: 1,
                slidesToScroll: "auto"
              }
            }
          ]}
        >
          <div className="slide txt-center relative is-round flex is-y justify-between">
            <div>
              <img className="img inline-block" src={website} alt="" />
            </div>
            <div>
              <h6 className="font-bolder txt-cap my-10 pt-4">Web Design and Development</h6>
              <div className="mt-10 mb-4">Whether you’re looking at revamping your existing website, creating a new one, or designing an E-Commerce platform, our team ...</div>
              <Link to="/services/web-design-development" className="btn is-min is-primary static stretch-link border-hide font-bolder">
                Read More
              </Link>
            </div>
          </div>
          <div className="slide txt-center relative is-round flex is-y justify-between">
            <div>
              <img className="img inline-block" src={mobile} alt="" />
            </div>
            <div>
              <h6 className="font-bolder txt-cap my-10 pt-4">Mobile Apps Development</h6>
              <div className="mt-10 mb-4">Mobile app development is our forte and we’ve put out tons of apps on Playstore for our clients that are well ranked as well...</div>
              <Link to="/services/mobile-app-development" className="btn is-min is-primary static stretch-link border-hide font-bolder">
                Read More
              </Link>
            </div>
          </div>
          <div className="slide txt-center relative is-round flex is-y justify-between">
            <div>
              <img className="img inline-block" src={uxui} alt="" />
            </div>
            <div>
              <h6 className="font-bolder txt-cap my-10 pt-4">UI/UX Design</h6>
              <div className="mt-10 mb-4">No one can deny the important of a well designed branding material for a business, it is what defines your brand and helps it remain stuck...</div>
              <Link to="/services/ux-ui-designing" className="btn is-min is-primary static border-hide stretch-link font-bolder">
                Read More
              </Link>
            </div>
          </div>

          <div className="slide txt-center relative is-round flex is-y justify-between">
            <div>
              <img className="img inline-block" src={branding} alt="" />
            </div>
            <div>
              <h6 className="font-bolder txt-cap my-10 pt-4">Branding</h6>
              <div className="mt-10 mb-4">UI/UX design is the catalyst behind the success of any web or mobile app. QuellxCode Pvt Ltd is a leading web design ...</div>
              <Link to="/services/advertising-branding" className="btn is-min is-primary static stretch-link border-hide font-bolder">
                Read More
              </Link>
            </div>
          </div>
          <div className="slide txt-center relative is-round flex is-y justify-between">
            <div>
              <img className="img inline-block" src={marketing} alt="" />
            </div>
            <div>
              <h6 className="font-bolder txt-cap my-10 pt-4">SEO Analytics & Marketing</h6>
              <div className="mt-10 mb-4">Looking for a team of SEO experts that will not only write a killer copy but also help you expand your brand through SEO techniques ...</div>
              <Link to="/services/digital-marketing" className="btn is-min is-primary static border-hide stretch-link font-bolder">
                Read More
              </Link>
            </div>
          </div>
          <div className="slide txt-center relative is-round flex is-y justify-between">
            <div>
              <img className="img inline-block" src={development} alt="" />
            </div>
            <div>
              <h6 className="font-bolder txt-cap my-10 pt-4">Project consultation</h6>
              <div className="mt-10 mb-4">Are you looking to solve a problem with their project while getting industry experience? QuellxCode provides consultation to peoplev</div>
              <Link to="/services/digital-marketing" className="btn is-min is-primary static border-hide stretch-link font-bolder">
                Read More
              </Link>
            </div>
          </div>
          <div className="slide txt-center relative is-round flex is-y justify-between">
            <div>
              <img className="img inline-block" src={gamedevelopment} alt="" />
            </div>
            <div>
              <h6 className="font-bolder txt-cap my-10 pt-4">Games Development</h6>
              <div className="mt-10 mb-4">Creating games is the most energetic part of our business. Our skilled mobile games development team can handle projects from scratch...</div>
              <Link to="/services/digital-marketing" className="btn is-min is-primary static border-hide stretch-link font-bolder">
                Read More
              </Link>
            </div>
          </div>
        </Glider>
      </section>

      <section className="px-6 py-6@md py-10 container bg-light">
        <h1 className="font-bolder mb-6 txt-center">Technologies we work with</h1>

        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Mobile" key="1">
            <a href="https://flutter.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={flutter_icon} className="img" alt="" />
              </i>
              <span className="block">Flutter</span>
            </a>

            <a href="https://reactnative.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={react_icon} className="img" alt="" />
              </i>
              <span className="block">React Native</span>
            </a>

            <a href="https://ionicframework.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={ionic_icon} className="img" alt="" />
              </i>
              <span className="block">Ionic</span>
            </a>

            <a href="https://developer.apple.com/swift/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={swift_icon} className="img" alt="" />
              </i>
              <span className="block">Swift</span>
            </a>

            <a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={kotlin_icon} className="img" alt="" />
              </i>
              <span className="block">Kotlin</span>
            </a>

            <a href="https://en.wikipedia.org/wiki/Objective-C" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={obj_icon} className="img" alt="" />
              </i>
              <span className="block">Objective C</span>
            </a>

            <a href="https://dotnet.microsoft.com/apps/xamarin" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={xamarin_icon} className="img" alt="" />
              </i>
              <span className="block">Xamarin</span>
            </a>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Front End" key="2">
            <a href="https://angular.io/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={angular_icon} className="img" alt="" />
              </i>
              <span className="block">Angular</span>
            </a>

            <a href="https://angular.io/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={css_icon} className="img" alt="" />
              </i>
              <span className="block">Angular</span>
            </a>

            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={react_icon} className="img" alt="" />
              </i>
              <span className="block">React</span>
            </a>

            <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={typescript_icon} className="img" alt="" />
              </i>
              <span className="block">Type Script</span>
            </a>

            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={vue_icon} className="img" alt="" />
              </i>
              <span className="block">Vue</span>
            </a>

            <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={html_icon} className="img" alt="" />
              </i>
              <span className="block">HTML 5</span>
            </a>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="DataBase" key="3">
            <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={mongo_icon} className="img" alt="" />
              </i>
              <span className="block">Mango</span>
            </a>

            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={mysql_icon} className="img" alt="" />
              </i>
              <span className="block">My SQL</span>
            </a>

            <a
              href="https://www.microsoft.com/en-us/sql-server/sql-server-2019"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2"
              style={{ height: "130px", width: "130px" }}
            >
              <i className="icon ri-3x mb-7px ">
                <img src={sql_icon} className="img" alt="" />
              </i>
              <span className="block">Ms SQL</span>
            </a>

            <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={firebase_icon} className="img" alt="" />
              </i>
              <span className="block">Firebase</span>
            </a>

            <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img src={post_icon} className="img" alt="postgresql" />
              </i>
              <span className="block">Postgre SQL</span>
            </a>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Back End" key="4">
            <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={php_icon} className="img" alt="" />
              </i>
              <span className="block">PHP</span>
            </a>

            <a href="https://www.java.com/en/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={java_icon} className="img" alt="" />
              </i>
              <span className="block">JAVA</span>
            </a>

            <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={net_icon} className="img" alt="" />
              </i>
              <span className="block">Dot Net</span>
            </a>

            <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={node_icon} className="img" alt="" />
              </i>
              <span className="block">Node</span>
            </a>

            <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={rails_icon} className="img" alt="" />
              </i>
              <span className="block">Rails</span>
            </a>

            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={python_icon} className="img" alt="" />
              </i>
              <span className="block">python</span>
            </a>

            <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={django_icon} className="img" alt="" />
              </i>
              <span className="block">django</span>
            </a>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="CMS" key="5">
            <a href="https://www.drupal.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={drupal_icon} className="img" alt="" />
              </i>
              <span className="block">Drupal</span>
            </a>

            <a href="https://www.joomla.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={joomla_icon} className="img" alt="" />
              </i>
              <span className="block">Joomla</span>
            </a>

            <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={wordpress_icon} className="img" alt="" />
              </i>
              <span className="block">Wordpress</span>
            </a>

            <a href="https://www.shopify.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={Shopify_icon} className="img" alt="" />
              </i>
              <span className="block">Shopify</span>
            </a>
          </Tabs.TabPane>
          <Tabs.TabPane className="p-2 mb-2 txt-center" tab="Infra and DevOps" key="6">
            <a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={aws_icon} className="img" alt="" />
              </i>
              <span className="block">AWS</span>
            </a>

            <a href="https://cloud.google.com/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={google_icon} className="img" alt="" />
              </i>
              <span className="block">Google</span>
            </a>

            <a href="https://www.jenkins.io/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={jekkins_icon} className="img" alt="" />
              </i>
              <span className="block">Jekins</span>
            </a>

            <a href="http://appium.io/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px">
                <img className="img" src={appium_icon} alt="appium" />
              </i>
              <span className="block">Appium</span>
            </a>

            <a href="https://www.selenium.dev/" target="_blank" rel="noopener noreferrer" className="inline-flex align-middle is-y justify-center clr-inherit btn is-box mb-2 mx-2" style={{ height: "130px", width: "130px" }}>
              <i className="icon ri-3x mb-7px ">
                <img src={selenium_icon} className="img" alt="" />
              </i>
              <span className="block">Selenium</span>
            </a>
          </Tabs.TabPane>
        </Tabs>
      </section>

      <OurWork />

      <Reviews />

      <RequestQuote />
    </>
  );
}
