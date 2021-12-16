import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

interface Shape {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

export interface props {
  className: string;
  onChange?: (isVisible: boolean) => void;
  partialVisibility?: boolean;
  offset?: Shape;
  minTopValue?: number;
  intervalCheck?: boolean;
  intervalDelay?: number;
  scrollCheck?: boolean;
  scrollDelay?: number;
  scrollThrottle?: number;
  resizeCheck?: boolean;
  resizeDelay?: number;
  resizeThrottle?: number;
  containment?: any;
  delayedCall?: boolean;
  children?: React.ReactNode | ((args: { isVisible: boolean; visibilityRect?: Shape }) => React.ReactNode);
}

OnceVisible.defaultProps = {
  className: "",
  partialVisibility: true,
  delayedCall: true
} as props;

export default function OnceVisible(props: props) {
  const [entered, setEntered] = useState<boolean>(false);

  return (
    <VisibilitySensor
      {...props}
      active={!entered}
      onChange={(visible) => {
        if (props.onChange) props.onChange(visible);
        if (visible) setEntered(visible);
      }}
    >
      {props.children}
    </VisibilitySensor>
  );
}
