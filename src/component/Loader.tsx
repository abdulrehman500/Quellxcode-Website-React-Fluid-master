import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface props {
  className?: string;
  suspense?: boolean;
}

Loader.defaultProps = {
  className: "",
  suspense: false
} as props;

export default function Loader(props: props) {
  const { pathname } = useLocation();
  const { suspense } = props;

  const [progress, setProgress] = useState<"loading" | "Out" | "finish">("loading");

  useEffect(() => {
    if (!suspense) {
      window.scrollTo({ behavior: "auto", left: 0, top: 0 });
      setProgress("Out");
      setTimeout(() => setProgress("finish"), 1000);
      return () => setProgress("loading");
    }
  }, [pathname, suspense]);

  useEffect(() => {
    progress !== "loading" ? document.body.classList.remove("overflow-hidden") : document.body.classList.add("overflow-hidden");
  }, [progress]);

  return (
    <div className={`Loader fixed top-0 left-0 right-0 bottom-0 ${progress === "finish" ? "hidden" : "flex"} align-middle justify-center z-top bg-primary clr-white txt-center animate__animated ${progress === "loading" ? "" : "animate__fadeOut"}`}>
      <div className={`overflow-hidden animate__animated animate__fast ${progress === "loading" ? "animate__slideInUp" : "animate__slideOutUp"}`}>
        <div className={`animate__animated animate__fast ${progress === "loading" ? "animate__slideInDown" : "animate__slideOutDown"}`}>
          <h1 className="title mb-0">
            QuellxCode <span className="txt-nowrap">Pvt Ltd</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
