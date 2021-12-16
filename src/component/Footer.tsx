import React from "react";
import logo from "../image/logo.png";
import pakFlag from "../image/flags/pak.png";
import ausFlag from "../image/flags/aus.png";

import { Link } from "react-router-dom";

export default function Footer() {
  let year = new Date().getFullYear() + 3;
  return (
    <footer className="txt-center txt-left@lg lyt-footer sticky bottom-0 container" style={{ lineHeight: 1.8 }}>
      <div className="grid has-gap-lg">
        <div className="column w-24 w-6@lg">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="img w-18" />
            </Link>
          </div>
          <div className="my-4">
            <address>665A Nicholson street, Carlton North vic 3054, Melbourne, Australia</address>
          </div>
          <div className="my-4">
            <div>Get Free Estimation</div>
            <div className="clr-primary">hello@quellxcode.com</div>
          </div>
          <div>
            <div>Call</div>
            <div>
              <span className="inline-block mr-1rem">
                <img src={ausFlag} alt="flag_icon" className="img" style={{ height: 20, width: 40 }} />
              </span>
              +61-411-294-114
            </div>
            <div>
              <span className="inline-block mr-1rem">
                <img src={pakFlag} alt="flag_icon" className="img" style={{ height: 20, width: 40 }} />
              </span>
              +92-51-8742634
            </div>
          </div>
        </div>
        <div className="column hidden block@lg w-6@lg pt-4">
          <h6 className="font-bolder">Company</h6>
          <Link to="/about" className="block txt-decor-none clr-hover-focus-primary">
            About Us
          </Link>
          <a href="https://blog.quellxcode.com/" className="block txt-decor-none clr-hover-focus-primary">
            Blog
          </a>
          <Link to="/casestudy" className="block txt-decor-none clr-hover-focus-primary">
            Our Work
          </Link>
          <Link to="/career" className="block txt-decor-none clr-hover-focus-primary">
            Careers
          </Link>
          <Link to="/contact-us" className="block txt-decor-none clr-hover-focus-primary">
            Contact us
          </Link>
        </div>
        <div className="column hidden block@lg w-6@lg pt-4">
          <h6 className="font-bolder">Services</h6>
          <Link to="/services/web-design-development" className="block txt-decor-none clr-hover-focus-primary">
            Web Design and Development
          </Link>
          <Link to="/services/mobile-app-development" className="block txt-decor-none clr-hover-focus-primary">
            Mobile Apps Development
          </Link>
          <Link to="/services/ux-ui-designing" className="block txt-decor-none clr-hover-focus-primary">
            UI / UX Design
          </Link>
          <Link to="/services/advertising-branding" className="block txt-decor-none clr-hover-focus-primary">
            Branding
          </Link>
          <Link to="/services/digital-marketing" className="block txt-decor-none clr-hover-focus-primary">
            SEO Analytics & Marketing
          </Link>
          <Link to="/contact-us" className="block txt-decor-none clr-hover-focus-primary">
            Project consultation
          </Link>
          <Link to="/contact-us" className="block txt-decor-none clr-hover-focus-primary">
            Games Development
          </Link>
          <Link to="/contact-us" className="block txt-decor-none clr-hover-focus-primary">
            Hire Dedicated Developers
          </Link>
          <Link to="/contact-us" className="block txt-decor-none clr-hover-focus-primary">
            Internet Of Things
          </Link>
        </div>
        <div className="column hidden block@lg w-6@lg pt-4">
          <h6 className="font-bolder">Methodologies</h6>
          <Link to="/methodology/discovery-process" className="block txt-decor-none clr-hover-focus-primary">
            Discovery Process
          </Link>
          <Link to="/methodology/project-execution" className="block txt-decor-none clr-hover-focus-primary">
            Project Execution
          </Link>
          <Link to="/methodology/dedicated-teams" className="block txt-decor-none clr-hover-focus-primary">
            Dedicated Teams
          </Link>
          <Link to="/methodology/project-review" className="block txt-decor-none clr-hover-focus-primary">
            Project Review
          </Link>
        </div>
      </div>
      <div className="px-2 px-0@lg pt-2 grid align-middle justify-between border-top">
        <div className="column w-24 w-auto@lg">&copy; {year}, QuellxCode Pvt Ltd</div>
        <div className="column w-24 w-auto@lg flex justify-center">
          <a href="https://www.facebook.com/quellxcode" target="_blank" className="txt-decor-none" rel="noopener noreferrer">
            <i className="mr-1rem inline-flex icon ri-lg mr-2 ri-facebook-fill" />
          </a>
          <a href="https://www.instagram.com/quellxcode" target="_blank" className="txt-decor-none" rel="noopener noreferrer">
            <i className="mr-1rem inline-flex icon ri-lg mr-2 ri-instagram-line" />
          </a>
          <a href="https://www.behance.net/quellxcode" target="_blank" className="txt-decor-none" rel="noopener noreferrer">
            <i className="mr-1rem inline-flex icon ri-lg mr-2 ri-behance-fill" />
          </a>
          <a href="https://www.linkedin.com/company/quellxcode" target="_blank" className="txt-decor-none" rel="noopener noreferrer">
            <i className="mr-1rem inline-flex icon ri-lg mr-2 ri-linkedin-box-fill" />
          </a>
        </div>
      </div>
    </footer>
  );
}
