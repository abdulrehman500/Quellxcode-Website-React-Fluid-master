import React, { useEffect, useState, lazy, Suspense } from "react";

import "animate.css";
import "antd/dist/antd.css";
import "./scss/ant-reset.scss";
import "./scss/Fluid/temp/fluid.css"; // todo : use development build of fluid in productions
import "./scss/base.scss";
import "./scss/page.scss";
import "remixicon/fonts/remixicon.css";
import "./vendor/hamburgers/hamburgers.scss";

import "./font/Poppins/fonts.css";

import { BackTop, notification } from "antd";
import ReactGA from "react-ga";

import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

import thankyou from "./image/casestudy/thankyou.png";
import Loader from "./component/Loader";

const Header = lazy(() => import("./component/Header"));
const Footer = lazy(() => import("./component/Footer"));
const Clock = lazy(() => import("./component/Clock"));
const RequestQuote = lazy(() => import("./component/RequestQuote"));
const Sidebar = lazy(() => import("./component/Sidebar"));

const Home = lazy(() => import("./page/Home"));
const Hire = lazy(() => import("./page/Hire"));
const About = lazy(() => import("./page/About"));
const ContactUs = lazy(() => import("./page/ContactUs"));
const Career = lazy(() => import("./page/Career"));
const Apply = lazy(() => import("./page/Apply"));
const Code404 = lazy(() => import("./page/Code404"));

const Services = lazy(() => import("./page/Services"));
const Mobile = lazy(() => import("./page/service/Mobile"));
const Web = lazy(() => import("./page/service/Web"));
const SocialMediaMarketing = lazy(() => import("./page/service/SocialMediaMarketing"));
const SearchEngineOptimization = lazy(() => import("./page/service/SearchEngineOptimization"));
const UxUi = lazy(() => import("./page/service/UxUi"));
const Marketing = lazy(() => import("./page/service/Marketing"));
const Branding = lazy(() => import("./page/service/Branding"));

const CaseStudy = lazy(() => import("./page/CaseStudy"));
const Efund = lazy(() => import("./page/casestudy/Efund"));
// const Vease = lazy(() => import("./page/casestudy/Vease"));
// const Evv = lazy(() => import("./page/casestudy/Evv"));
// const Citzen = lazy(() => import("./page/casestudy/Citzen"));
const TechWizors = lazy(() => import("./page/casestudy/TechWizors"));
const Bolan = lazy(() => import("./page/casestudy/Bolan"));
const RoadStoves = lazy(() => import("./page/casestudy/RoadStoves"));
const Connector = lazy(() => import("./page/casestudy/Connector"));
const SupportLads = lazy(() => import("./page/casestudy/SupportLads"));
// const StartEm = lazy(() => import("./page/casestudy/StartEm"));
const NerdPaper = lazy(() => import("./page/casestudy/NerdPaper"));

const Methodology = lazy(() => import("./page/Methodology"));
const DiscoveryProcess = lazy(() => import("./page/methodology/DiscoveryProcess"));
const ProjectExecution = lazy(() => import("./page/methodology/ProjectExecution"));
const DedicatedTeams = lazy(() => import("./page/methodology/DedicatedTeams"));
const ProjectReview = lazy(() => import("./page/methodology/ProjectReview"));

function App() {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  // Add Page class to main
  const { pathname } = useLocation();
  let mainclass: string = "";
  const loc = (pathname === "/" ? "/home" : pathname).split("/");
  loc.forEach((element: string) => (mainclass += element + " "));

  // Add Hubspot in page
  var s1 = document.createElement("script");
  s1.async = true;
  s1.defer = true;
  s1.id = "hs-script-loader";
  s1.src = "https://embed.tawk.to/5f2bce17ed9d9d262708a0ef/default";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  document.body.append(s1);

  // Google Analytics
  ReactGA.initialize("UA-96382815-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      notification.info({
        message: `Cannot right click on this site`,
        // description: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
        placement: "bottomRight",
        duration: 5,
        type: "info"
      });
      event.preventDefault();
    });

    fetch("https://extreme-ip-lookup.com/json")
      .then((res) => res.json())
      .then(
        (response: {
          businessName: string;
          businessWebsite: string;
          city: string;
          continent: string;
          country: string;
          countryCode: string;
          ipName: string;
          ipType: string;
          isp: string;
          lat: string;
          lon: string;
          org: string;
          query: string;
          region: string;
          status: string;
        }) => {
          if (response.status === "success") {
            console.log(response.country, window.location.hostname);
            if (window.location.hostname.includes("localhost")) console.log("Response : ", response);
            else if (window.location.hostname.toLowerCase() === "quellxcode.com" && response.country.toLowerCase() === "australia") window.location.replace("https://quellxcode.com.au");
          } else console.log("Error : ", response);
        }
      )
      .catch((error) => console.log("Error : ", error));
  }, []);

  return (
    <Suspense fallback={<Loader suspense />}>
      <Loader />

      <Header toggleSiderbar={() => setCollapsed(false)} />
      <Sidebar collapsed={collapsed} toggleSiderbar={() => setCollapsed(true)} />

      <main className={mainclass.toUpperCase() + "lyt-main"}>
        <Switch>
          {pathname.toLowerCase().includes(".html") ? <Redirect from={pathname} to={pathname.replace(".html", "")} /> : ""}
          <Redirect from="/index" to="/" />

          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact-us" component={ContactUs} exact />
          <Route path="/hire-us" component={Hire} exact />

          <Route path="/career">
            <Switch>
              <Route path="/career" component={Career} exact />
              <Route path="/career/apply/:name" component={Apply} exact />
              <Route component={Code404} />
            </Switch>
          </Route>

          <Route path="/services">
            <Switch>
              <Route path="/services" component={Services} exact />
              <Route path="/services/mobile-app-development" component={Mobile} exact />
              <Route path="/services/web-design-development" component={Web} exact />
              <Route path="/services/ux-ui-designing" component={UxUi} exact />
              <Route path="/services/digital-marketing" component={Marketing} exact />
              <Route path="/services/advertising-branding" component={Branding} exact />
              <Route path="/services/social-media-marketing" component={SocialMediaMarketing} exact />
              <Route path="/services/search-engine-optimization" component={SearchEngineOptimization} exact />
              <Route component={Code404} />
            </Switch>
          </Route>

          <Route path="/casestudy">
            <Switch>
              <Route path="/casestudy" component={CaseStudy} exact />
              <Route path="/casestudy/efund" component={Efund} exact />
              <Route path="/casestudy/techwizors" component={TechWizors} exact />
              <Route path="/casestudy/bolan" component={Bolan} exact />
              <Route path="/casestudy/nerdpaper" component={NerdPaper} exact />
              <Route path="/casestudy/roadstoves" component={RoadStoves} exact />
              <Route path="/casestudy/connector" component={Connector} exact />
              <Route path="/casestudy/supportlads" component={SupportLads} exact />
              {/* <Route path="/casestudy/vease" component={Vease} exact /> */}
              {/* <Route path="/casestudy/electronicvisitverification" component={Evv} exact /> */}
              {/* <Route path="/casestudy/citzen" component={Citzen} exact /> */}
              {/* <Route path="/casestudy/startem" component={StartEm} exact /> */}
              <Route component={Code404} />
            </Switch>
            <Route
              path="/casestudy/:name"
              render={(props) => {
                console.log(props.match.params.name);
                return (
                  <>
                    <div style={{ background: "#AEE2F7" }}>
                      <img src={thankyou} alt="" className="img w-24" />
                    </div>
                    <RequestQuote className="px-6 py-6 mt-6 container img-bg clr-white" />
                  </>
                );
              }}
            />
          </Route>

          <Route path="/methodology">
            <Switch>
              <Route path="/methodology" component={Methodology} exact />
              <Route path="/methodology/discovery-process" component={DiscoveryProcess} exact />
              <Route path="/methodology/project-execution" component={ProjectExecution} exact />
              <Route path="/methodology/dedicated-teams" component={DedicatedTeams} exact />
              <Route path="/methodology/project-review" component={ProjectReview} exact />
              <Route component={Code404} />
            </Switch>
          </Route>

          <Route component={Code404} />
        </Switch>
        <Clock />
      </main>

      <Footer />
      <BackTop>
        <i className="ri-3x bg-white clr-black o-50 is-circle ri-arrow-up-circle-fill" />
      </BackTop>
    </Suspense>
  );
}

export default withRouter(App);
