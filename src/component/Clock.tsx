import React, { useRef, useEffect } from "react";

import points from "../image/clock/points.svg";
import hourhand from "../image/clock/hourhand.svg";
import minuteshand from "../image/clock/minuteshand.svg";
import secondhand from "../image/clock/secondhand.svg";
import dot from "../image/clock/dot.svg";

import clockbackground from "../image/clockbackground.jpg";

export default function Clock() {
  const clock1 = useRef(null);
  const clock3 = useRef(null);

  useEffect(() => {
    let x = new Date();
    let utc = new Date(x.getUTCFullYear(), x.getUTCMonth(), x.getUTCDay(), x.getUTCHours(), x.getUTCMinutes(), x.getUTCSeconds());
    let utcTS = utc.getTime();
    let pakTime = new Date(utcTS + 18000000); // +5 hours
    let ausTime = new Date(utcTS + 36000000); // +10 hours

    let pakHours = () => (pakTime.getHours() > 12 ? pakTime.getHours() - 12 : pakTime.getHours());
    let ausHours = () => (ausTime.getHours() > 12 ? ausTime.getHours() - 12 : ausTime.getHours());

    StartClock(clock1, pakHours(), pakTime.getMinutes(), pakTime.getSeconds());
    StartClock(clock3, ausHours(), ausTime.getMinutes(), ausTime.getSeconds());
  }, [clock1, clock3]);

  function StartClock(clock: React.MutableRefObject<any>, hour: number, minute: number, second: number) {
    const hourTransform = clock.current.childNodes[1] as HTMLElement;
    const minuteTransform = clock.current.childNodes[2] as HTMLElement;
    const secondTransform = clock.current.childNodes[3] as HTMLElement;

    hourTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 12) * hour++ + "deg)";
    minuteTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 60) * minute++ + "deg)";
    secondTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 60) * second++ + "deg)";

    setInterval(() => (hourTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 12) * hour++ + "deg)"), 1000 * 60 * 60);
    setInterval(() => (minuteTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 60) * minute++ + "deg)"), 1000 * 60);
    setInterval(() => (secondTransform.style.transform = "translateX(-50%) translateY(-50%) rotate(" + (360 / 60) * second++ + "deg)"), 1000);
  }

  return (
    <section id="clocks" className="px-10 py-4 mt-6 grid justify-around align-top has-gap-lg txt-center img-bg clr-white" style={{ backgroundImage: `url(${clockbackground})` }}>
      <div className="column w-24 w-8@md px-4">
        <div className="mb-8 relative" ref={clock1}>
          <img className="img w-12" src={points} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={hourhand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={minuteshand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={secondhand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={dot} alt="" />
        </div>
        <div>
          <h6 className="font-bolder">Pakistan</h6>
          <div>Hall 9-A, Syed Arcade Block A, Main PWD Road Islamabad, Pakistan</div>
        </div>
      </div>
      <div className="column w-24 w-8@md px-4">
        <div className="mb-8 relative" ref={clock3}>
          <img className="img w-12" src={points} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={hourhand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={minuteshand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={secondhand} alt="" />
          <img className="absolute left-50 top-50 trans--50--50 img w-9" src={dot} alt="" />
        </div>
        <div>
          <h6 className="font-bolder">Australia</h6>
          <div>50 Dawson St Tullamarine Vic 3043 Melbourne, Australia</div>
        </div>
      </div>
    </section>
  );
}
