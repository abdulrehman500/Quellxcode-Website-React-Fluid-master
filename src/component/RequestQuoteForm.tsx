import React, { useState } from "react";

import { MenuItem, Select, Input } from "@material-ui/core";
import { message } from "antd";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

interface props {
  afterSubmit?: (data: Formdata) => void;
}

interface Formdata {
  about: string;
  budget: string;
  countrycode: string;
  email: string;
  name: string;
  number: string;
  service: string;
  whentostart: string;
}

export default function RequestQuoteForm(props: props) {
  const Form = useForm({ mode: "onChange" });
  const { handleSubmit, errors, formState, control } = Form;
  const [submitting, setSubmitting] = useState<boolean>(false);

  async function onSubmit(data: Formdata) {
    setSubmitting(true);

    await axios
      .post("https://contact-fm.herokuapp.com/api/send", {
        about: data.about,
        budget: data.budget,
        countrycode: data.countrycode,
        email: data.email,
        name: data.name,
        number: data.number,
        service: data.service,
        whentostart: data.whentostart
      })
      .catch((e) => {
        console.log("Error : ", e);
        message.error("Error while sending");
      });

    message.success("You will be hearing from us soon");
    setSubmitting(false);
    if (props.afterSubmit) props.afterSubmit(data);
  }

  return (
    <>
      <h1 className="title">Let’s talk business!</h1>
      <form className={`${formState.isSubmitted ? "is-validated" : ""}`} onSubmit={handleSubmit(onSubmit)} autoComplete="on">
        <h4 className="mb-1rem">
          Your name is
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true, maxLength: 20, minLength: 4 }}
            render={({ onChange }) => <Input onChange={onChange} className={`h4 txt-center txt-left@md mb-0 ${formState.isSubmitted ? (errors.name ? "clr-error" : "clr-valid") : "clr-primary"}`} placeholder="Danielius Coffey" />}
          />
        </h4>

        <h4 className="mb-1rem">
          Your email is
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ }}
            render={({ onChange }) => <Input type="email" onChange={onChange} className={`h4 txt-center txt-left@md mb-0 ${formState.isSubmitted ? (errors.email ? "clr-error" : "clr-valid") : "clr-primary"}`} placeholder="you@yourcompany.com" />}
          />
        </h4>

        <h4 className="mb-1rem">
          Your contact number is
          <Controller
            defaultValue=""
            name="number"
            control={control}
            rules={{ required: true, minLength: 5 }}
            render={({ onChange }) => <Input type="number" placeholder="123456789" onChange={onChange} className={`h4 txt-center txt-left@md mb-0 ${formState.isSubmitted ? (errors.email ? "clr-error" : "clr-valid") : "clr-primary"}`} />}
          />
        </h4>

        <h4 className="mb-1rem">
          Interested in
          <Controller
            name="service"
            control={control}
            defaultValue="BrandingAndStrategy"
            render={(props) => (
              <Select {...props} className={`${formState.isSubmitted ? (errors.service ? "clr-error" : "clr-valid") : "clr-primary"}`} inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="BrandingAndStrategy">
                  <span className="h4 mb-0">Branding & Strategy</span>
                </MenuItem>
                <MenuItem value="SocialMediaMarketing">
                  <span className="h4 mb-0">Social Media Marketing</span>
                </MenuItem>
                <MenuItem value="SearchEngineOptimization">
                  <span className="h4 mb-0">Search Engine Optimization</span>
                </MenuItem>
                <MenuItem value="PayPerClickAdventising">
                  <span className="h4 mb-0">Pay Per Click Adventising</span>
                </MenuItem>
                <MenuItem value="VideoAndAnimation">
                  <span className="h4 mb-0">Video & Animation</span>
                </MenuItem>
                <MenuItem value="WebDesignandDevelopment">
                  <span className="h4 mb-0">Web Design and Development</span>
                </MenuItem>
                <MenuItem value="MobileAppsDevelopment">
                  <span className="h4 mb-0">Mobile Apps Development</span>
                </MenuItem>
                <MenuItem value="UIUXDesign">
                  <span className="h4 mb-0">UI/UX Design</span>
                </MenuItem>
                <MenuItem value="ProjectConsultation">
                  <span className="h4 mb-0">Project consultation</span>
                </MenuItem>
                <MenuItem value="CustomizedOpenSourceProduct">
                  <span className="h4 mb-0">Customized Open Source Product</span>
                </MenuItem>
                <MenuItem value="AIAndML">
                  <span className="h4 mb-0">AI / ML</span>
                </MenuItem>
                <MenuItem value="IOT">
                  <span className="h4 mb-0">IOT</span>
                </MenuItem>
                <MenuItem value="GamesDevelopment">
                  <span className="h4 mb-0">Games Development</span>
                </MenuItem>
                <MenuItem value="Other">
                  <span className="h4 mb-0">Other</span>
                </MenuItem>
              </Select>
            )}
          />
        </h4>

        <h4 className="mb-1rem">
          Budget
          <Controller
            name="budget"
            control={control}
            defaultValue="<$5K"
            render={(props) => (
              <Select {...props} className={`${formState.isSubmitted ? (errors.Budget ? "clr-error" : "clr-valid") : "clr-primary"}`} inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="<$5K">
                  <span className="h4 mb-0">&lt;$5K</span>
                </MenuItem>
                <MenuItem value="$10K+">
                  <span className="h4 mb-0">$10K+</span>
                </MenuItem>
                <MenuItem value="$25k+">
                  <span className="h4 mb-0">$25k+</span>
                </MenuItem>
                <MenuItem value="$50k+">
                  <span className="h4 mb-0">$50k+</span>
                </MenuItem>
                <MenuItem value="$100k+">
                  <span className="h4 mb-0">$100k+</span>
                </MenuItem>
                <MenuItem value="Not sure">
                  <span className="h4 mb-0">Not sure</span>
                </MenuItem>
              </Select>
            )}
          />
        </h4>

        <h4 className="mb-1rem">
          When to start
          <Controller
            name="whentostart"
            control={control}
            defaultValue="rightnow"
            render={(props) => (
              <Select {...props} className={`${formState.isSubmitted ? (errors.whentostart ? "clr-error" : "clr-valid") : "clr-primary"}`} inputProps={{ "aria-label": "Without label" }}>
                <MenuItem value="rightnow">
                  <span className="h4 mb-0">Right Now</span>
                </MenuItem>
                <MenuItem value="infewweek">
                  <span className="h4 mb-0">In Few week</span>
                </MenuItem>
                <MenuItem value="notsure">
                  <span className="h4 mb-0">Not Sure</span>
                </MenuItem>
              </Select>
            )}
          />
        </h4>

        <h4 className="mb-1rem">
          Brief about the project
          <Controller
            name="about"
            defaultValue=""
            control={control}
            render={({ onChange }) => (
              <Input type="text" onChange={onChange} className={`h4 txt-center txt-left@md mb-0 ${formState.isSubmitted ? (errors.email ? "clr-error" : "clr-valid") : "clr-primary"}`} placeholder="This project is about ..." />
            )}
          />
        </h4>

        <button className={`btn is-sld is-dark px-4 is-lg ${submitting ? "is-loading" : ""}`}>Send Message</button>
      </form>
    </>
  );
}
