import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";

const bg = require("../../image/fluidvideo.mp4");

export default function SocialMediaMarketing() {
  const body = useRef(null);
  const background = useRef(null);

  useEffect(() => {
    requestAnimationFrame(function name() {
      if (!background.current || !body.current) {
        requestAnimationFrame(name);
        return;
      }
      let video = (background.current as unknown) as HTMLVideoElement;
      let _body = (body.current as any) as HTMLElement;
      video.onchange = () => (!video.played && video.paused ? video.play() : null);
      video.oncanplay = () => (!video.played && video.paused ? video.play() : null);
      video.onpause = () => video.play();
      video.onplay = () => setTimeout(() => _body.classList.add("bg-black"), 3000);
    });
  }, [background]);

  return (
    <>
      <Helmet>
        <title>Social Media Marketing Agency in Islamabad | QuellxCode</title>
        <meta name="description" content="Social Media Marketing Agency in Islamabad" />
      </Helmet>

      <div ref={body} className="clr-white overflow-x-hidden" style={{ transition: "background 1s ease-in-out" }}>
        <section className="txt-center px-6 h-min-100vh flex align-middle justify-center COMING-SOON">
          <video autoPlay muted ref={background} src={bg} className="absolute top--0 bottom-0 left-0 right--20 z-bottom" />
          <div className="mt-2">
            <h1 className="title is-lg font-bolder mb-0">
              <div>Coming</div>
              <div>Soon</div>
              <div>#SMM</div>
            </h1>
          </div>
        </section>
      </div>
    </>
  );
}
