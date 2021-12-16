import React, { useState } from "react";

import { MenuItem, Select, Input } from "@material-ui/core";
import { message } from "antd";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

export default function MarketingForm() {
  const Form = useForm({ mode: "onChange" });
  const { handleSubmit, errors, formState, control } = Form;
  const [submitting, setSubmitting] = useState<boolean>(false);

  const onSubmit = (data: { theyare: string; interestedin: string; name: string; companyname: string; contactno: string; email: string; howdidyouhearaboutus: string }) => {
    setSubmitting(true);

    axios
      .post("https://contact-fm.herokuapp.com/api/marketingForm/send", {
        they_are: data.theyare,
        interested_in: data.interestedin,
        name: data.name,
        email: data.email,
        contact_no: data.contactno,
        hear_about_us: data.howdidyouhearaboutus,
        company_name: data.companyname
      })
      .then(() => message.success("You will be hearing from us soon"))
      .catch((e) => {
        console.log("Error : ", e);
        message.error("Error while sending");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <>
      <h1 className="title">Let’s talk business!</h1>
      <form className={`${formState.isSubmitted ? "is-validated" : ""}`} onSubmit={handleSubmit(onSubmit)} autoComplete="on">
        <h4 className="mb-1rem">
          You are
          <Controller
            name="theyare"
            control={control}
            defaultValue="Startup"
            render={(props) => (
              <Select {...props} className={`${formState.isSubmitted ? (errors.theyare ? "clr-error" : "clr-valid") : "clr-primary"}`} inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="Startup">
                  <span className="h4 mb-0">A Startup</span>
                </MenuItem>
                <MenuItem value="Business">
                  <span className="h4 mb-0">A Business</span>
                </MenuItem>
                <MenuItem value="agency">
                  <span className="h4 mb-0">An Agency</span>
                </MenuItem>
                <MenuItem value="nonprofit">
                  <span className="h4 mb-0">A Non Profit</span>
                </MenuItem>
                <MenuItem value="other">
                  <span className="h4 mb-0">Other</span>
                </MenuItem>
              </Select>
            )}
          />
        </h4>

        <h4 className="mb-1rem">
          Interested in
          <Controller
            name="interestedin"
            control={control}
            defaultValue="DesignServices"
            render={(props) => (
              <Select {...props} className={`${formState.isSubmitted ? (errors.interestedin ? "clr-error" : "clr-valid") : "clr-primary"}`} inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="DesignServices">
                  <span className="h4 mb-0">Branding & Strategy</span>
                </MenuItem>
                <MenuItem value="Website">
                  <span className="h4 mb-0">Social Media Marketing</span>
                </MenuItem>
                <MenuItem value="SocialMedia">
                  <span className="h4 mb-0">Search Engine Optimization</span>
                </MenuItem>
                <MenuItem value="SEO">
                  <span className="h4 mb-0">Pay Per Click Adventising</span>
                </MenuItem>
                <MenuItem value="MultipleServices">
                  <span className="h4 mb-0">Video & Animation</span>
                </MenuItem>
                <MenuItem value="Other">
                  <span className="h4 mb-0">Other</span>
                </MenuItem>
              </Select>
            )}
          />
        </h4>

        <h4 className="mb-1rem">
          Your name is
          <Controller
            name="name"
            control={control}
            rules={{ required: true, maxLength: 20, minLength: 4 }}
            render={({ onChange }) => <Input onChange={onChange} className={`h4 txt-center txt-left@md mb-0 ${formState.isSubmitted ? (errors.name ? "clr-error" : "clr-valid") : "clr-primary"}`} placeholder="Danielius Coffey" />}
          />
        </h4>

        <h4 className="mb-1rem">
          Your company name is
          <Controller
            name="companyname"
            control={control}
            rules={{ required: true, maxLength: 20 }}
            render={({ onChange }) => <Input onChange={onChange} className={`h4 txt-center txt-left@md mb-0 ${formState.isSubmitted ? (errors.companyname ? "clr-error" : "clr-valid") : "clr-primary"}`} placeholder="Microsoft" />}
          />
        </h4>

        <h4 className="mb-1rem">
          Your contact no is
          <Controller
            name="contactno"
            control={control}
            rules={{ required: true, maxLength: 20, minLength: 4 }}
            render={({ onChange }) => <Input onChange={onChange} className={`h4 txt-center txt-left@md mb-0 ${formState.isSubmitted ? (errors.contactno ? "clr-error" : "clr-valid") : "clr-primary"}`} placeholder="+92-042-37182004" />}
          />
        </h4>

        <h4 className="mb-1rem">
          Your email id is
          <Controller
            name="email"
            control={control}
            rules={{ required: true, maxLength: 20, minLength: 4, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
            render={({ onChange }) => <Input onChange={onChange} className={`h4 txt-center txt-left@md mb-0 ${formState.isSubmitted ? (errors.email ? "clr-error" : "clr-valid") : "clr-primary"}`} placeholder="email@company.com" type="email" />}
          />
        </h4>

        <h4 className="mb-1rem">
          How did you hear about us
          <Controller
            name="howdidyouhearaboutus"
            control={control}
            defaultValue="Google"
            render={(props) => (
              <Select {...props} className={`${formState.isSubmitted ? (errors.howdidyouhearaboutus ? "clr-error" : "clr-valid") : "clr-primary"}`} inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="Google">
                  <span className="h4 mb-0">Google</span>
                </MenuItem>
                <MenuItem value="Facebook">
                  <span className="h4 mb-0">Facebook</span>
                </MenuItem>
                <MenuItem value="Email">
                  <span className="h4 mb-0">Email</span>
                </MenuItem>
                <MenuItem value="ReferredbySomeone">
                  <span className="h4 mb-0">Referred by Someone</span>
                </MenuItem>
                <MenuItem value="Other">
                  <span className="h4 mb-0">Other</span>
                </MenuItem>
              </Select>
            )}
          />
        </h4>

        <button className={`btn is-sld is-dark px-4 is-lg ${submitting ? "is-loading" : ""}`}>Send Message</button>
      </form>
    </>
  );
}
