import React, { ReactNode } from "react";
import OnceVisible from "./OnceVisible";

export interface props {
  className?: string;
  animation: string;
  speed?: "animate__slow" | "animate__slower" | "animate__fast" | "animate__faster";
  delay: "animate__delay-1s" | "animate__delay-2s" | "animate__delay-3s" | "animate__delay-4s" | "animate__delay-5s" | false;
  children: ReactNode | ((args: { isVisible: boolean }) => React.ReactNode);
}

RevealText.defaultProps = {
  className: "",
  animation: "animate__fadeInUp",
  delay: "animate__delay-1s"
} as props;

export default function RevealText(props: props) {
  return (
    <OnceVisible partialVisibility={true}>
      {({ isVisible }) => (
        <span className="inline-block overflow-hidden">
          <span className={`inline-block animate__animated ${isVisible ? `${props.animation} ${props.speed ? props.speed : ""} ${window.innerWidth < 992 && props.delay !== false ? "animate__delay-1s" : props.delay} ${props.className}` : ""}`}>
            {props.children}
          </span>
        </span>
      )}
    </OnceVisible>
  );
}
