import React, { useState } from "react";
import CountUp from "react-countup";
import { CountUpProps } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export interface props {
  className?: string;
  CountUpProps?: CountUpProps;
  children?: React.ReactNode | ((args: { isVisible: boolean }) => React.ReactNode);
}

OnVisible.defaultProps = {
  className: "",
  CountUpProps: {},
  children: null,
} as props;

export default function OnVisible(props: props) {
  const [entered, setEntered] = useState<boolean>(false);

  let text = "";
  if (props.CountUpProps?.prefix) text += props.CountUpProps?.prefix;
  if (props.CountUpProps?.end) text += props.CountUpProps?.end;
  if (props.CountUpProps?.suffix) text += props.CountUpProps?.suffix;

  return (
    <VisibilitySensor active={!entered} delayedCall partialVisibility onChange={(visible) => (visible ? setEntered(true) : null)}>
      <span className="inline">
        {entered && props.CountUpProps && <CountUp {...props.CountUpProps} />}
        {!entered && props.CountUpProps && text}
        {entered && props.children}
        {!entered && `.`}
      </span>
    </VisibilitySensor>
  );
}
