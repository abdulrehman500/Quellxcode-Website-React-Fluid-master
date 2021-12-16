import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";

export default function Code404() {
  return (
    <div className="lyt-main h-min-100vh flex is-y align-middle justify-center">
      <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
      <Link to="/" className="btn is-sld is-primary">
        Go back to home
      </Link>
    </div>
  );
}
