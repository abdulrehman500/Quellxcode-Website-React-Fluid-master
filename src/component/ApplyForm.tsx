import React from "react";

export interface props {
  className?: string;
}

ApplyForm.defaultProps = {
  className: ""
} as props;

export default function ApplyForm(props: props) {
  return (
    <form action="" className={`${props.className} w-24 p-4 bg-light is-round shadow-sm`}>
      <div className="grid">
        <label className="column w-12@md w-24 block control">
          <span className="label block is-sm mb-4">Name</span>
          <input type="test" className="input is-min is-primary" placeholder=" " />
        </label>

        <label className="column w-12@md w-24 block control">
          <span className="label block is-sm mb-4">Email</span>
          <input type="test" className="input is-min is-primary" placeholder=" " />
        </label>
      </div>

      <div className="grid my-2">
        {/* <div className="column w-24 is-sm">Have a file to share?</div> */}
        <div className="column w-24 group">
          <label className="control w-24">
            <input className="file" id="file" type="file" />
            <span className="label btn is-sld is-primary is-block">Select your CV here</span>
          </label>
          <span className="column w-24 is-sm">Only Document, Image or ZIP file. Max size 8MB</span>
        </div>
      </div>

      <div className="flex@md txt-center txt-left@md justify-between align-bottom">
        <button className="btn w-24 w-auto@md mb-2 mb-0@md is-sld is-primary is-pill">Apply</button>
        <div className="font-bolder is-sm w-24 w-auto@md">100% Secure. Zero Spam</div>
      </div>
    </form>
  );
}
