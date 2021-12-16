import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import artificialintelligence from "../image/service/artificialintelligence.svg";
import branding from "../image/service/branding.svg";
import development from "../image/service/development.svg";
import gamedevelopment from "../image/service/gamedevelopment.svg";
import iot from "../image/service/iot.svg";
import marketing from "../image/service/marketing.svg";
import mobile from "../image/service/mobile.svg";
import uxui from "../image/service/uxui.svg";
import website from "../image/service/website.svg";

import hire_img from "../image/hire/hire.svg";

// icons import
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
import postgre_icon from "../image/icons/postgre.png";
import rails_icon from "../image/icons/rails-icon.png";
import Shopify_icon from "../image/icons/Shopify-icon.png";
import swift_icon from "../image/icons/swift-icon.png";
import typescript_icon from "../image/icons/typescript-icon.png";
import vue_icon from "../image/icons/vue-icon.png";
import wordpress_icon from "../image/icons/wordpress-icon.png";
import xamarin_icon from "../image/icons/xamarin-icon.svg";
import node_icon from "../image/icons/node-icon.png";
import drupal_icon from "../image/icons/drupal-icon.png";
import aws_icon from "../image/icons/aws-icon.png";
import ios_icon from "../image/icons/ios-icon.png";
import android_icon from "../image/icons/Android-icon.png";
import ps_icon from "../image/icons/adobe-ps.png";
import xd_icon from "../image/icons/adobe-xd.png";
import ai_icon from "../image/icons/adube-ai.png";
import figma_icon from "../image/icons/figma-icon.png";
import invision_icon from "../image/icons/invision-icon.png";
import sketch_icon from "../image/icons/sketch-icon.png";
import face_icon from "../image/icons/facebook-icon.png";
import insta_icon from "../image/icons/instagram-icon.png";
import logo_icon from "../image/icons/qc-logo.png";
import modo_icon from "../image/icons/modo.png";
import unity_icon from "../image/icons/unity.png";
import unreal_icon from "../image/icons/Unreal.png";
import flash_icon from "../image/icons/flash.png";
import maya_icon from "../image/icons/maya.png";
import trello_icon from "../image/icons/trello.png";
import swit_icon from "../image/icons/swit.svg";
import jira_icon from "../image/icons/jira.png";
import skype_icon from "../image/icons/skype.png";
import git_icon from "../image/icons/git.png";

import Fluid from "../image/fluid.svg";

export interface props {
  className?: string;
}

Services.defaultProps = {
  className: ""
} as props;

export default function Services(props: props) {
  return (
    <>
      <Helmet>
        <title>Best Services in Islamabad | QuellxCode</title>
        <meta name="description" content="What we build is inavitable out of this world" />
      </Helmet>

      <section className="txt-center px-6@lg p-10 container w-max-100 h-min-100vh flex align-middle justify-center">
        <div className="absolute left-0 top-0 right-0 event-none z--100 h-100 hidden block@md w-24">
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 left-0" />
          <img src={Fluid} alt="fluid_image" className="img absolute w-5 flip-xy right-0" />
        </div>
        <div>
          <div>What we build is inavitable out of this world</div>
          <h1 className="title is-sm font-bolder">Web and Mobile Software Development Services</h1>
          <div>
            At QuellxCode Pvt Ltd we provide a whole range of IT services to meet the demands businesses competing in this digital age where technology is evolving day by day. If you’re wondering how we can help you level up your online presence, or
            help you automate your business processes, keep on reading to find more.
          </div>
          <button onClick={() => document.querySelector("#scrolldownView")?.scrollIntoView({ behavior: "smooth" })} id="scrolldown" className="btn bg-white is-circle shadow icon absolute left-50 border border-light clr-body">
            <i className="icon ri-2x ri-arrow-down-line" />
          </button>
        </div>
      </section>

      <section className="bg-body txt-center txt-left@md">
        <div className="py-2 container grid has-gap-lg align-middle" id="scrolldownView">
          <div className="column w-24 w-12@md pr-2">
            <img className="img" src={website} alt="icon_text" />
          </div>
          <div className="column w-24 w-12@md pl-2 order-1 order-0@md">
            <h1>Web Design and Development</h1>
            <div className="txt-justify">
              Whether you’re looking at revamping your existing website, creating a new one, or designing an E-Commerce platform, our team of skilled web developers will make sure that we deliver a modern, robust and efficient looking website on
              time.
            </div>
            <div>
              <div className="txt-justify">
                We’ve helped a number of satisfied clients bring their brand presence online with websites designed with the best and latest development trends. From static to dynamic, to CRM portals and more we’ve got all aspects of web development
                covered and if you’re confused with what solution will be best suited for you, we can help you figure out. Check out the below mentioned websites we’ve delivered, to know more.
              </div>
              <a href="https://angular.io" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={angular_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={react_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.typescriptlang.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={typescript_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://vuejs.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={vue_icon} className="img" alt="icon" />
                </i>
              </a>

              <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={html_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={css_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.djangoproject.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={django_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={firebase_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.mysql.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={mysql_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://dotnet.microsoft.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={net_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.postgresql.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={postgre_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://rubyonrails.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={rails_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://aws.amazon.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={aws_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.drupal.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={drupal_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://nodejs.org/en" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={node_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.shopify.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={Shopify_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={mongo_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.jenkins.io" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={jekkins_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://java.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={java_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.php.net" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={php_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://wordpress.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={wordpress_icon} className="img" alt="icon" />
                </i>
              </a>
            </div>
            <Link to="/services/web-design-development" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Learn More
            </Link>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column w-24 w-12@md pr-2 order-1 order-0@md">
            <h1>Mobile Apps Development</h1>
            <div className="txt-justify">
              Mobile app development is our forte and we’ve put out tons of apps on Playstore for our clients that are well ranked as well. Whether you’re looking for an E-Commerce app, hybrid apps, or a mobile app to complement your website we’ll
              provide you with a beautifully designed mobile app that will provide a seamless user experience to your customers.
            </div>
            <div>
              <a href="https://www.apple.com/ios" target="_blank" rel="noopener noreferrer" className="btn clr-inherit is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x">
                  <img src={ios_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.android.com" target="_blank" rel="noopener noreferrer" className="btn clr-inherit is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x">
                  <img src={android_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://flutter.dev" target="_blank" rel="noopener noreferrer" className="btn clr-inherit is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x">
                  <img src={flutter_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer" className="btn clr-inherit is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x">
                  <img src={react_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer" className="btn clr-inherit is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x">
                  <img src={ionic_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://reactnative.dev" target="_blank" rel="noopener noreferrer" className="btn clr-inherit is-box inline-flex align-middle justify-center my-2 mx-7px" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x">
                  <img src={swift_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://developer.apple.com/swift" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x">
                  <img src={kotlin_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://kotlinlang.org" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x">
                  <img src={obj_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://en.wikipedia.org/wiki/Objective-C" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="inline-flex align-middle ri-2x">
                  <img src={xamarin_icon} className="img" alt="icon" />
                </i>
              </a>
            </div>
            <Link to="/services/mobile-app-development" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Learn More
            </Link>
          </div>
          <div className="column w-24 w-12@md pl-2 txt-right">
            <img className="img" src={mobile} alt="tech icon" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column w-24 w-12@md pr-2">
            <img className="img" src={uxui} alt="tech icon" />
          </div>
          <div className="column w-24 w-12@md pl-2 order-1 order-0@md">
            <h1>UI/UX Design</h1>
            <div className="txt-justify">
              No one can deny the important of a well designed branding material for a business, it is what defines your brand and helps it remain stuck in the mind of your customers. From creating social media assets, to cultivating an entire
              branding kit including logo, website assets, pamphlets and more, we have a knack for visually bringing to life any business in any domain.
            </div>
            <div>
              <a href="https://www.sketch.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={ps_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.adobe.com/products/photoshop.html" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={xd_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.adobe.com/products/illustrator.html" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={ai_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.invisionapp.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={invision_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={sketch_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.adobe.com/products/xd.html" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={figma_icon} className="img" alt="icon" />
                </i>
              </a>
            </div>
            <Link to="/services/uiux" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Learn More
            </Link>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column w-24 w-12@md pr-2 order-1 order-0@md">
            <h1>Branding</h1>
            <div className="txt-justify">
              UI/UX design is the accomplishment any web or portable application. QuellxCode is a major website and application plan organization with a talent of transforming good thoughts into significant interaction. Beginning from
              conceptualization, data engineering, visual character, and UX configuration; recruit UI/UX creators from QuellxCode for opportune delivery of engaging sites and mobile applications giving about maximum client engagement.
            </div>
            <div>
              <a href="https://www.behance.net/quellxCode" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon clr-body inline-flex align-middle ri-2x">
                  <img src={face_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.facebook.com/QuellxCode" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon clr-body inline-flex align-middle ri-2x">
                  <img src={insta_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.instagram.com/quellxCode" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon clr-body inline-flex align-middle ri-2x">
                  <img src={logo_icon} className="img" alt="icon" />
                </i>
              </a>
            </div>
            <Link to="/services/advertising-branding" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Learn More
            </Link>
          </div>
          <div className="column w-24 w-12@md pl-2 txt-right">
            <img className="img" src={branding} alt="brand" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column w-24 w-12@md pr-2">
            <img className="img" src={marketing} alt="mark" />
          </div>
          <div className="column w-24 w-12@md pl-2 order-1 order-0@md">
            <h1>SEO Analytics & Marketing</h1>
            <div className="txt-justify">
              Looking for a team of SEO experts that will not only write a killer copy but also help you expand your brand through SEO techniques? QuellxCode Pvt Ltd team of marketing gurus and SEO savants will help you reach untapped audiences with
              the right SEO strategies.
            </div>
            <Link to="/services/digital-marketing"  className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Learn More
            </Link>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column w-24 w-12@md pr-2 order-1 order-0@md">
            <h1>Project consultation</h1>
            <div className="txt-justify">
              Are you looking to solve a problem with their project while getting industry experience? QuellxCode Pvt Ltd provides consultation to people who’re looking to put their creative minds and development skills to test on their projects.
              We’re here to mentor and consult at any point in the development lifecycle.
            </div>
            <div>
              <a href="https://trello.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={trello_icon} className="img" alt="" />
                </i>
              </a>
              <a href="https://swit.io" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={swit_icon} className="img" alt="" />
                </i>
              </a>
              <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={jira_icon} className="img" alt="" />
                </i>
              </a>
              <a href="https://www.skype.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={skype_icon} className="img" alt="" />
                </i>
              </a>
              <a href="http://github.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={git_icon} className="img" alt="" />
                </i>
              </a>
            </div>
            <Link to="/contact-us" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Contact Us
            </Link>
          </div>
          <div className="column w-24 w-12@md pl-2 txt-right">
            <img className="img" src={development} alt="develop" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column w-24 w-12@md pr-2">
            <img className="img" src={gamedevelopment} alt="game dev" />
          </div>
          <div className="column w-24 w-12@md pl-2 order-1 order-0@md">
            <h1>Games Development</h1>
            <div className="txt-justify">
              Making games is the most exciting part of business. Our talented game developers can deal with any project without any preparation or from any given stage. We've been effectively associated with the conveyance of exceptionally
              intelligent and energizing gaming experience on Mobile, Console, and Virtual Reality stages. We transform your thought into an addictive Android or iOS game application while ensuring we make out of the container gaming arrangements
            </div>
            <div>
              <a href="https://www.foundry.com/products/modo" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={modo_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.unrealengine.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={unreal_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://unity.com" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={unity_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="https://www.autodesk.com/products/maya" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img className="img" src={maya_icon} alt="buildbox" />
                </i>
              </a>
            </div>
            <Link to="/contact-us" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column w-24 w-12@md pr-2 order-1 order-0@md">
            <h1>Hire Dedicated Developers</h1>
            <div className="txt-justify">
              Create your own software development team on your time and terms by handpicking the best developers from QuellxCode Pvt Ltd. We offer flexible engagement models to hire developers on a short term, long term or permanent basis to ideally
              suit your business needs. Scale up your development team within 48 hours with ready-to-kick-off experts. We follow a consultative approach to prepare a roadmap that describes the skill set and experience you need based on your project
              idea.
            </div>
            <Link to="/hire-us" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Learn More
            </Link>
          </div>
          <div className="column w-24 w-12@md pl-2 txt-right">
            <img className="img" src={hire_img} alt="" />
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column w-24 w-12@md pr-2">
            <img className="img" src={iot} alt="icon" />
          </div>
          <div className="column w-24 w-12@md pl-2 order-1 order-0@md">
            <h1>Internet Of Things</h1>
            <div className="txt-justify">
              Making games is the most exciting part of our business. QuellxCode Pvt Ltd. talented game developers can deal with a project from scratch or from any given stage. We've been effectively associated with the designing exceptionally
              intelligent and energizing gaming experience on Mobile, Console, and Virtual Reality stages. We transform your thought into an addictive Android or iOS game application while ensuring we make out of the container gaming arrangements.
            </div>
            <div>
              <a href="flash" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={flash_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="unity" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={unity_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="buildbox" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={logo_icon} className="img" alt="icon" />
                </i>
              </a>
            </div>
            <Link to="/contact-us" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="py-2 container grid has-gap-lg align-middle">
          <div className="column w-24 w-12@md pl-2 order-1 order-0@md">
            <h1>Artificial intelligence</h1>
            <div className="txt-justify">
              Hoping to add intelligence to your current business application or need to build up another one? You are in the opportune spot. QuellxCode Pvt Ltd. AI-ML designers will assist you with doing that. We manufacture AI-ML arrangements that
              will spare upto 30% expense on your general business activities. We have aptitude in working with tools, structures and technology like TensorFlow, Apache SystemML, Caffe, Apache Mahout, OpenNN, Torch, Neuroph, Mycroft AI, and so on to
              cultivate business insight to differing industry vertical.
            </div>
            <div>
              <a href="flash" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={flash_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="unity" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={unity_icon} className="img" alt="icon" />
                </i>
              </a>
              <a href="buildbox" target="_blank" rel="noopener noreferrer" className="btn is-box inline-flex align-middle justify-center my-2 mx-7px@lg" style={{ width: "50px", height: "50px" }}>
                <i className="icon inline-flex align-middle ri-2x">
                  <img src={logo_icon} className="img" alt="icon" />
                </i>
              </a>
            </div>
            <Link to="/contact-us" className="mt-2 btn is-sld py-2 px-4 is-primary is-pill">
              Contact Us
            </Link>
          </div>
          <div className="column w-24 w-12@md pl-2 txt-right">
            <img className="img" src={artificialintelligence} alt="icon" />
          </div>
        </div>
      </section>
    </>
  );
}
