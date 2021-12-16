import React, { useState } from "react";

import requestquotebg from "../image/requestquotebg.jpg";
import RequestQuoteForm from "./RequestQuoteForm";
import { Modal } from "antd";

export interface props {
  className?: string;
}

RequestQuote.defaultProps = {
  className: "px-6 py-6@md mt-6 py-10 container img-bg clr-white"
} as props;

export default function RequestQuote(props: props) {
  const [model, setModel] = useState<boolean>(false);

  return (
    <>
      <Modal centered visible={model} className="txt-center" footer={null} onCancel={() => setModel(false)}>
        <RequestQuoteForm afterSubmit={() => setModel(false)} />
      </Modal>

      <section className={props.className + " txt-center txt-left@md"} style={{ backgroundImage: `url(${requestquotebg})` }}>
        <h1 className="font-bolder">Request a Quote</h1>
        <div className="my-4 w-24 w-10@md is-lg">Share a brief about your project and get a guaranteed response within 24 hours.</div>
        <button onClick={() => setModel(true)} className="btn is-sld is-light clr-primary is-pill font-bold mr-1rem inline-flex move-icon" style={{ padding: "10px 30px" }}>
          Let's Start
          <i className="icon ri-arrow-right-line ml-7px" />
        </button>
      </section>
    </>
  );
}
