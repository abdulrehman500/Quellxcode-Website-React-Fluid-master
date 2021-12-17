import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./seo.css";
import $ from "jquery";

// import "aos/dist/aos.css";
// import Aos from "aos";
const bg = require("../../image/fluidvideo.mp4");

export default function SearchEngineOptimization() {
  const body = useRef(null);
  const background = useRef(null);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    const introEl = document.querySelector(".intro");
    setTimeout(() => {
      introEl.classList.add("hidden");
      sectionContent();
    }, 8000);

    const sectionContent = function () {
      const sectionHeading = document.querySelector(".sections");
      sectionHeading.classList.remove("hidden");

      const frontOverlay = document.querySelector(".front");
      frontOverlay.classList.remove("hidden");

      // Observer

      const allSections = document.querySelectorAll(".section");
      const slideSection = function (entries, observer) {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          const nextSection = document.querySelector(`#section--${+entry.target.id.slice(-1) + 1}`);
          const sectionContent = nextSection?.querySelector(".content");
          sectionContent?.classList.remove("hidden");
          // console.log(`Leaving ${entry.target.id.slice(-1)}`);
          // console.log(sectionContent);
        }
      };

      const sectionObserver = new IntersectionObserver(slideSection, {
        root: null,
        threshold: 0.3,
      });

      allSections.forEach(function (entry) {
        sectionObserver.observe(entry);
      });

      // circle

      const circle = document.querySelector(".circle");
      document.addEventListener("mousemove", function (e) {
        circle.style.left = e.pageX + "px";
        circle.style.top = e.pageY + "px";
        // console.log(cursor);
      });
      // ——————————————————————————————————————————————————
      // TextScramble
      // ——————————————————————————————————————————————————

      class TextScramble {
        constructor(el) {
          this.el = el;
          this.chars = "!<>-_\\/[]{}—=+*^?#________";
          this.update = this.update.bind(this);
        }
        setText(newText) {
          const oldText = this.el.innerText;
          const length = Math.max(oldText.length, newText.length);
          const promise = new Promise((resolve) => (this.resolve = resolve));
          this.queue = [];
          for (let i = 0; i < length; i++) {
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
          }
          cancelAnimationFrame(this.frameRequest);
          this.frame = 0;
          this.update();
          return promise;
        }
        update() {
          let output = "";
          let complete = 0;
          for (let i = 0, n = this.queue.length; i < n; i++) {
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
              complete++;
              output += to;
            } else if (this.frame >= start) {
              if (!char || Math.random() < 0.28) {
                char = this.randomChar();
                this.queue[i].char = char;
              }
              output += `<span class="dud">${char}</span>`;
            } else {
              output += from;
            }
          }
          this.el.innerHTML = output;
          if (complete === this.queue.length) {
            this.resolve();
          } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
          }
        }
        randomChar() {
          return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
      }

      // ——————————————————————————————————————————————————
      // Example
      // ——————————————————————————————————————————————————

      const phrases = ["Keywords", "that", "matters"];

      const el = document.querySelector(".text");
      const fx = new TextScramble(el);

      let counter = 0;
      const next = () => {
        fx.setText(phrases[counter]).then(() => {
          setTimeout(next, 800);
        });
        counter = (counter + 1) % phrases.length;
      };

      next();

      /////////////////////////////////////////////////

      $.fn.commentCards = function () {
        return this.each(function () {
          var $this = $(this),
            $cards = $this.find(".card"),
            $current = $cards.filter(".card--current"),
            $next;

          $cards.on("click", function () {
            if (!$current.is(this)) {
              $cards.removeClass("card--current card--out card--next");
              $current.addClass("card--out");
              $current = $(this).addClass("card--current");
              $next = $current.next();
              $next = $next.length ? $next : $cards.first();
              $next.addClass("card--next");
            }
          });

          if (!$current.length) {
            $current = $cards.last();
            $cards.first().trigger("click");
          }

          $(".next-step").click(function () {
            if (!$current.is(this)) {
              $cards.removeClass("card--current card--out card--next");
              $current.addClass("card--out");
              $current = $($current.next()).addClass("card--current");
              $next = $current.next();
              console.log($next.length);
              if (!$next.length) {
                $(".next-step").remove();
              }
              $next = $next.length ? $next : $cards.first();
              $next.addClass("card--next");
            }
          });

          $this.addClass("cards--active");
        });
      };

      $(".cards").commentCards();

      $(".sec-container").click(function () {
        $(".sec-container").removeClass("active");
        $(this).addClass("active");
      });
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Search Engine Optimization services in Islamabad | QuellxCode</title>
        <meta name="description" content="Search Engine Optimization services in Islamabad" />
      </Helmet>

      <div ref={body} className="clr-white overflow-x-hidden" style={{ transition: "background 1s ease-in-out" }}>

        <section>
        <div className="overflow-auto" style={{ overflowX: "hidden" }}>
        <div className="intro">
          <div className="morphing">
            <div className="word">Search</div>
            <div className="word">Engine</div>
            <div className="word">Optimization</div>
            <div className="word">SEO</div>
          </div>
        </div>

        <div className="front hidden">
          <div id="front-overlay">
            <div className="company-logo">
              <img src="https://quellxcode.com/static/media/logo.c867fe69.png" alt="" />
            </div>

            <div className="navBar">
              <ul className="nav">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about/">About</a>
                </li>
                <li>
                  <a href="/work/">Work</a>
                </li>
                <li>
                  <a href="/clients/">Clients</a>
                </li>
                <li>
                  <a href="/contact/">Contact</a>
                </li>
              </ul>
            </div>

            {/* <!-- <div className="directionButton">
                    <div className="scrolldown">
                        <div className="chevrons">
                            <div className="chevrondown"></div>
                            <div className="chevrondown"></div>
                        </div>
                    </div>
                </div> --> */}
          </div>
        </div>

        <div className="sections hidden">
          <div className="section" id="section--1">
            <div className="content">
              <div className="box1">
                <h3>
                  SEARCH ENGINE <br />
                  OPTIMIZATION
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid repudiandae, quia officia incidunt,
                  unde culpa tenetur neque minima reprehenderit autem blanditiis. Nobis, distinctio reiciendis.
                </p>
              </div>
              <div className="box2">
                <img src="assets/img/a-02.png" alt="" />
              </div>
            </div>
          </div>

          <div className="section" id="section--2">
            <div className="content">
              <div className="carousel">
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
                <div className="carousel__face"></div>
              </div>
            </div>
          </div>

          <div className="section" id="section--3">
            <div className="content">
              <div className="container">
                <div className="card">
                  <div className="face face1">
                    <div className="contents">
                      <span className="stars"></span>
                      <h2 className="On-page">Effective On-page SEO</h2>
                      <p className="On-page">
                        Our team ensures that the pages developed for the public can be found by the search engines
                        easily by conducting a detailed web analysis.
                      </p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>On-page SEO</h2>
                  </div>
                </div>

                <div className="card">
                  <div className="face face1">
                    <div className="contents">
                      <span className="stars"></span>
                      <h2 className="Off-page">Effective OFF PAGE SEO</h2>
                      <p className="Off-page">
                        Off-page SEO is pretty much everything that does not happen on your website. Off-page SEO is all
                        about creating exposure and trust for your company, which ultimately can result in more visitors
                        and sales.
                      </p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>OFF PAGE SEO</h2>
                  </div>
                </div>

                <div className="card">
                  <div className="face face1">
                    <div className="contents">
                      <span className="stars"></span>
                      <h2 className="Technical">Technical SEO</h2>
                      <p className="Technical">
                        The actions performed to help search engines find your website come under technical SEO. As
                        search engines and their algorithms become more complex, this type of SEO is always evolving.
                      </p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>Technical SEO</h2>
                  </div>
                </div>

                <div className="card">
                  <div className="face face1">
                    <div className="contents">
                      <span className="stars"></span>
                      <h2 className="Local">Local SEO</h2>
                      <p className="Local">
                        Its all about increasing your online presence in your community and promoting your products or
                        services to local customers.
                      </p>
                    </div>
                  </div>
                  <div className="face face2">
                    <h2>Local SEO</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="div" id="section--extra">
            <div className="content">
              <div className="slider">
                <div className="slide-track">
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                  <div className="slide">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
                      height="100"
                      width="250"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section ,flip-left" id="section--4">
            <div className="content">
              <div>
                <h1 className="text"></h1>
              </div>

              <div className="flex-container">
                <h2>search engines list</h2>
                <h2>seo meaning</h2>
                <h2>best search engine</h2>
                <h2>google optimize</h2>
                <h2>posicionamiento</h2>
                <h2>search engine marketing</h2>
                <h2>seo marketing</h2>
                <h2>link building</h2>
                <h2>seo agency</h2>
                <h2>google ranking</h2>
                <h2>seo expert</h2>
                <h2>seo consultant</h2>
                <h2>top search engines</h2>
                <h2>suchmaschinenoptimierung</h2>
                <h2>sns</h2>
                <h2>social network</h2>
                <h2>social media apps</h2>
                <h2>social media marketing</h2>
                <h2>social media sites</h2>
                <h2>social networking apps</h2>
                <h2>social networking sites</h2>
                <h2>social media manager</h2>
                <h2>what is social media</h2>
                <h2>what is social media</h2>
                <h2>sosial media</h2>
                <h2>social marketing</h2>
                <h2>social media management</h2>
                <h2>social media platforms</h2>
                <h2>social media strategy</h2>
                <h2>social sites</h2>
                <h2>social media jobs</h2>
                <h2>all social media</h2>
                <h2>social media analytics</h2>
                <h2>social network analysis</h2>
                <h2>social media news</h2>
                <h2>social media campaign</h2>
                <h2>social media agency</h2>
                <h2>social media marketing strategy</h2>
                <h2>socialtools</h2>
                <h2>realtor</h2>
                <h2>houses for sale</h2>
                <h2>mls</h2>
                <h2>houses for rent</h2>
                <h2>homes for sale</h2>
                <h2>property</h2>
                <h2>property for sale</h2>
                <h2>homes for rent</h2>
                <h2>land for sale</h2>
                <h2>for sale by owner</h2>
                <h2>condo</h2>
                <h2>apartments for rent near me</h2>
                <h2>mls listings</h2>
                <h2>condos for sale</h2>
                <h2>mls listing</h2>
                <h2>commercial real estate</h2>
                <h2>real estate agent</h2>
                <h2>estate agents</h2>
                <h2>homes for sale near me</h2>
                <h2>for sale</h2>
                <h2>newhome</h2>
                <h2>home for sale</h2>
                <h2>foreclosure</h2>
                <h2>rent house</h2>
                <span id="circle" className="circle">
                  {" "}
                </span>
              </div>
            </div>
          </div>

          <div className="section" id="section--5">
            <div className="content">
              <div>
                <h2>Our SEO Process</h2>
              </div>

              <div>
                <ul className="cards">
                  <li className="card">
                    <h1>Step 01</h1>
                    <p>Keyword-Analysis</p>
                  </li>
                  <li className="card">
                    <h1>Step 02</h1>
                    <p>Keyword Assignment</p>
                  </li>
                  <li className="card">
                    <h1>Step 03</h1>
                    <p>On-Site Code Optimization</p>
                  </li>
                  <li className="card">
                    <h1>Step 04</h1>
                    <p>On-Site panel-content SEO</p>
                  </li>

                  <li className="card">
                    <h1>Step 05</h1>
                    <p>On-Site Internal Link Optimization</p>
                  </li>

                  <li className="card">
                    <h1>Step 06</h1>
                    <p>Advanced Search Ending Optimization and External Linking</p>
                  </li>
                </ul>
              </div>
              <button className="next-step">
                <span>Next Step</span>
              </button>
            </div>
          </div>

          <div className="section" id="section--6">
            <div className="content">
              <div>
                <h2>SEO Packages</h2>
              </div>
              <div className="outer-container">
                <div className="sec-container container1">
                  <div className="inner_container">
                    <div className="title">Individual</div>
                    <div className="main_number">20K</div>
                    <div className="container_text">
                      <div className="container_text1">Simple</div>
                      <div className="container_text2">20 gb</div>
                    </div>
                  </div>
                  <a>
                    <span>Continue</span>
                  </a>
                </div>
                <div className="sec-container container2 active">
                  <div className="inner_container">
                    <div className="title">Shared</div>
                    <div className="main_number">60K</div>
                    <div className="container_text">
                      <div className="container_text1">Family</div>
                      <div className="container_text2">100 gb</div>
                    </div>
                  </div>
                  <a>
                    <span>Continue</span>
                  </a>
                </div>
                <div className="sec-container container3">
                  <div className="inner_container">
                    <div className="title">Group</div>
                    <div className="main_number">90K</div>
                    <div className="container_text">
                      <div className="container_text1">Business</div>
                      <div className="container_text2">500 gb</div>
                    </div>
                  </div>
                  <a>
                    <span>Continue</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </section>
        {/* <section className="txt-center px-6 h-min-100vh flex align-middle justify-center COMING-SOON">
          <video autoPlay muted ref={background} src={bg} className="absolute top--0 bottom-0 left-0 right--20 z-bottom" />
          <div className="mt-2">
            <h1 className="title is-lg font-bolder mb-0">
              <div>Coming</div>
              <div>Soon</div>
              <div>#SEO</div>
            </h1>
          </div>
        </section> */}
      </div>
    </>
  );
}
