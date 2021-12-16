import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

export interface props {
  className?: string;
  toggleSiderbar: any;
  collapsed: boolean;
}

Sidebar.defaultProps = {
  className: "",
  toggleSiderbar: () => console.log("toggle"),
  collapsed: true,
} as props;

export default function Sidebar(props: props) {
  return (
    <>
      <aside className={`lyt-sidebar flex is-y justify-between fixed p-10 p-2@md ${props.collapsed ? "" : "active"}`} id="sidebar">
        <div className="flex justify-between">
          <h3 className="ml-15 mb-15">MENU</h3>
          <button className={`absolute hamburger hamburger--spin hidden@md ${props.collapsed ? "" : "is-active"} m-1rem right-0 top-0`} onClick={props.toggleSiderbar} type="button">
            <span className="hamburger-box" children={<span className="hamburger-inner" />} />
          </button>
        </div>

        <div className="menu is-primary my-10 flex is-y justify-center">
          <Link onClick={props.toggleSiderbar} to="/" className="menu-item font-bold clr-body">
            Home
          </Link>

          <Link onClick={props.toggleSiderbar} to="/about" className="menu-item font-bold clr-body">
            About
          </Link>

          <div className="menu">
            <button onClick={(e) => (e.target as Element).classList.toggle("active")} className="menu-item menu-trigger font-bold">
              Services
            </button>
            <div className="pr-0">
              <Link onClick={props.toggleSiderbar} to="/services" className="menu-item font-bold clr-body">
                All
              </Link>
              <Link onClick={props.toggleSiderbar} to="/services/advertising-branding" className="menu-item font-bold clr-body">
              Advertising and Branding
              </Link>
              <Link onClick={props.toggleSiderbar} to="/services/web-design-development" className="menu-item font-bold clr-body">
                Web design and development
              </Link>
              <Link onClick={props.toggleSiderbar} to="/services/mobile-app-development" className="menu-item font-bold clr-body">
                Mobile apps development
              </Link>
              <Link onClick={props.toggleSiderbar} to="/services/digital-marketing"  className="menu-item font-bold clr-body">
              Digital marketing
              </Link>
              <Link onClick={props.toggleSiderbar} to="/services/social-media-marketing" className="menu-item font-bold clr-body">
                Social Media Marketing
              </Link>
              <Link onClick={props.toggleSiderbar} to="/services/search-engine-optimization" className="menu-item font-bold clr-body">
                Search Engine Optimization
              </Link>
              <Link onClick={props.toggleSiderbar} to="/services/ux-ui-designing" className="menu-item font-bold clr-body">
                Ux Ui
              </Link>
            </div>
          </div>

          <div className="menu">
            <button onClick={(e) => (e.target as Element).classList.toggle("active")} className="menu-item menu-trigger font-bold">
              Methodologies
            </button>
            <div className="pr-0">
              <Link onClick={props.toggleSiderbar} to="/methodology" className="menu-item font-bold clr-body">
                All
              </Link>
              <Link onClick={props.toggleSiderbar} to="/methodology/discovery-process" className="menu-item font-bold clr-body">
                Discovery Process
              </Link>
              <Link onClick={props.toggleSiderbar} to="/methodology/project-execution" className="menu-item font-bold clr-body">
                Project Execution
              </Link>
              <Link onClick={props.toggleSiderbar} to="/methodology/dedicated-teams" className="menu-item font-bold clr-body">
                Dedicated Teams
              </Link>
              <Link onClick={props.toggleSiderbar} to="/methodology/project-review" className="menu-item font-bold clr-body">
                Project Review
              </Link>
            </div>
          </div>

          <Link onClick={props.toggleSiderbar} to="/hire-us" className="menu-item font-bold clr-body">
            Hire
          </Link>

          <Link onClick={props.toggleSiderbar} to="/casestudy" className="menu-item font-bold clr-body">
            Our Work
          </Link>

          <Link onClick={props.toggleSiderbar} to="/contact-us" className="menu-item font-bold clr-body">
            Contact Us
          </Link>

          <a onClick={props.toggleSiderbar} href="https://blog.quellxcode.com/" className="menu-item font-bold clr-body">
            Blog
          </a>

          <Link onClick={props.toggleSiderbar} to="/career" className="menu-item font-bold clr-body">
            Careers
          </Link>
        </div>

        <div className="txt-center">
          <div>
            <img src={logo} alt="Logo" className="img w-18" />
          </div>
          <div className="my-4">
            <div>Get Free Estimation</div>
            <div className="clr-primary">hello@quellxcode.com</div>
          </div>
        </div>
      </aside>
      <div className="overlay" onClick={props.toggleSiderbar} />
    </>
  );
}
