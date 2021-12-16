import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { message } from "antd";

export interface props {
  className?: string;
}

ContactUsForm.defaultProps = {
  className: ""
} as props;

export default function ContactUsForm(props: props) {
  const { register, handleSubmit, errors, formState } = useForm({ mode: "onChange" });
  const [submitting, setSubmitting] = useState<boolean>(false);

  const onSubmit = (data: { about: string; budget: string; countrycode: string; email: string; name: string; number: string; service: string; whentostart: string }) => {
    setSubmitting(true);

    axios
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

      .then(() => message.success("You will be hearing from us soon"))
      .catch((e) => {
        console.log("Error : ", e);
        message.error("Error while sending");
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <>
      <form className={`${props.className} p-4 bg-light is-round shadow-sm ${formState.isSubmitted ? "is-validated" : ""}`} onSubmit={handleSubmit(onSubmit)} autoComplete="on">
        <div className="grid my-2">
          <label className={`column w-12@md w-24 block control`}>
            <span className="label block is-sm my-4">Name</span>
            <input type="text" name="name" className={`input is-min is-primary ${formState.touched.name ? (errors.name ? "is-error" : "is-valid") : ""}`} ref={register({ required: true, maxLength: 20, minLength: 4 })} />
            <div className="feedback is-valid">VALID</div>
            <div className="feedback is-invalid">INVALID</div>
          </label>
          <label className="column w-12@md w-24 block control">
            <span className="label block is-sm my-4">Email</span>
            <input
              type="email"
              name="email"
              className={`input is-min is-primary ${formState.touched.email ? (errors.email ? "is-error" : "is-valid") : ""}`}
              ref={register({ required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
            />
          </label>
        </div>

        <div className="grid my-2">
          <label className="column w-12@lg w-24">
            <span className="block is-sm my-4">Mobile phone</span>
            <span className="group">
              <select className={`input is-min is-primary w-auto ${formState.touched.countrycode ? (errors.countrycode ? "is-error" : "is-valid") : ""}`} name="countrycode" ref={register({ required: true })}>
                <option value="">+</option>
                <option>+93</option>
                <option>+355</option>
                <option>+213</option>
                <option>+1-684</option>
                <option>+376</option>
                <option>+244</option>
                <option>+1-264</option>
                <option>+672</option>
                <option>+1-268</option>
                <option>+54</option>
                <option>+374</option>
                <option>+297</option>
                <option>+61</option>
                <option>+43</option>
                <option>+994</option>
                <option>+1-242</option>
                <option>+973</option>
                <option>+880</option>
                <option>+1-246</option>
                <option>+375</option>
                <option>+32</option>
                <option>+501</option>
                <option>+229</option>
                <option>+1-441</option>
                <option>+975</option>
                <option>+591</option>
                <option>+387</option>
                <option>+267</option>
                <option>+55</option>
                <option>+246</option>
                <option>+1-284</option>
                <option>+673</option>
                <option>+359</option>
                <option>+226</option>
                <option>+257</option>
                <option>+855</option>
                <option>+237</option>
                <option>+1</option>
                <option>+238</option>
                <option>+1-345</option>
                <option>+236</option>
                <option>+235</option>
                <option>+56</option>
                <option>+86</option>
                <option>+61</option>
                <option>+61</option>
                <option>+57</option>
                <option>+269</option>
                <option>+682</option>
                <option>+506</option>
                <option>+385</option>
                <option>+53</option>
                <option>+599</option>
                <option>+357</option>
                <option>+420</option>
                <option>+243</option>
                <option>+45</option>
                <option>+253</option>
                <option>+1-767</option>
                <option>+1-809</option>
                <option>+670</option>
                <option>+593</option>
                <option>+20</option>
                <option>+503</option>
                <option>+240</option>
                <option>+291</option>
                <option>+372</option>
                <option>+251</option>
                <option>+500</option>
                <option>+298</option>
                <option>+679</option>
                <option>+358</option>
                <option>+33</option>
                <option>+689</option>
                <option>+241</option>
                <option>+220</option>
                <option>+995</option>
                <option>+49</option>
                <option>+233</option>
                <option>+350</option>
                <option>+30</option>
                <option>+299</option>
                <option>+1-473</option>
                <option>+1-671</option>
                <option>+502</option>
                <option>+224</option>
                <option>+245</option>
                <option>+592</option>
                <option>+509</option>
                <option>+504</option>
                <option>+852</option>
                <option>+36</option>
                <option>+354</option>
                <option>+91</option>
                <option>+62</option>
                <option>+98</option>
                <option>+964</option>
                <option>+353</option>
                <option>+972</option>
                <option>+39</option>
                <option>+225</option>
                <option>+1-876</option>
                <option>+81</option>
                <option>+962</option>
                <option>+7</option>
                <option>+254</option>
                <option>+686</option>
                <option>+383</option>
                <option>+965</option>
                <option>+996</option>
                <option>+856</option>
                <option>+371</option>
                <option>+961</option>
                <option>+266</option>
                <option>+231</option>
                <option>+218</option>
                <option>+423</option>
                <option>+370</option>
                <option>+352</option>
                <option>+853</option>
                <option>+389</option>
                <option>+261</option>
                <option>+265</option>
                <option>+60</option>
                <option>+960</option>
                <option>+223</option>
                <option>+356</option>
                <option>+692</option>
                <option>+222</option>
                <option>+230</option>
                <option>+262</option>
                <option>+52</option>
                <option>+691</option>
                <option>+373</option>
                <option>+377</option>
                <option>+976</option>
                <option>+382</option>
                <option>+1-664</option>
                <option>+212</option>
                <option>+258</option>
                <option>+95</option>
                <option>+264</option>
                <option>+674</option>
                <option>+977</option>
                <option>+31</option>
                <option>+599</option>
                <option>+687</option>
                <option>+64</option>
                <option>+505</option>
                <option>+227</option>
                <option>+234</option>
                <option>+683</option>
                <option>+850</option>
                <option>+1-670</option>
                <option>+47</option>
                <option>+968</option>
                <option>+92</option>
                <option>+680</option>
                <option>+970</option>
                <option>+507</option>
                <option>+675</option>
                <option>+595</option>
                <option>+51</option>
                <option>+63</option>
                <option>+64</option>
                <option>+48</option>
                <option>+351</option>
                <option>+974</option>
                <option>+242</option>
                <option>+262</option>
                <option>+40</option>
                <option>+7</option>
                <option>+250</option>
                <option>+590</option>
                <option>+290</option>
                <option>+1-869</option>
                <option>+1-758</option>
                <option>+590</option>
                <option>+508</option>
                <option>+1-784</option>
                <option>+685</option>
                <option>+378</option>
                <option>+239</option>
                <option>+966</option>
                <option>+221</option>
                <option>+381</option>
                <option>+248</option>
                <option>+232</option>
                <option>+65</option>
                <option>+1-721</option>
                <option>+421</option>
                <option>+386</option>
                <option>+677</option>
                <option>+252</option>
                <option>+27</option>
                <option>+82</option>
                <option>+211</option>
                <option>+34</option>
                <option>+94</option>
                <option>+249</option>
                <option>+597</option>
                <option>+47</option>
                <option>+268</option>
                <option>+46</option>
                <option>+41</option>
                <option>+963</option>
                <option>+886</option>
                <option>+992</option>
                <option>+255</option>
                <option>+66</option>
                <option>+228</option>
                <option>+690</option>
                <option>+676</option>
                <option>+1-868</option>
                <option>+216</option>
                <option>+90</option>
                <option>+993</option>
                <option>+1-649</option>
                <option>+688</option>
                <option>+1-340</option>
                <option>+256</option>
                <option>+380</option>
                <option>+971</option>
                <option>+44</option>
                <option>+1</option>
                <option>+598</option>
                <option>+998</option>
                <option>+678</option>
                <option>+379</option>
                <option>+58</option>
                <option>+84</option>
                <option>+681</option>
                <option>+212</option>
                <option>+967</option>
                <option>+260</option>
                <option>+263</option>
              </select>
              <input
                type="number"
                name="number"
                placeholder="301 2345678"
                className={`input is-min is-primary ${formState.touched.number ? (errors.number ? "is-error" : "is-valid") : ""}`}
                ref={register({ required: true, maxLength: 15, minLength: 6 })}
              />
            </span>
          </label>
          <label className="column w-12@lg w-24 control has-floating-label">
            <span className="block is-sm my-4">Select a Service</span>
            <select className={`input is-min is-primary ${formState.touched.service ? (errors.service ? "is-error" : "is-valid") : ""}`} name="service" ref={register({ required: true })}>
              <option value="">Select</option>
              <option>Branding & Strategy</option>
              <option>Social Media Marketing</option>
              <option>Search Engine Optimization</option>
              <option>Pay Per Click Adventising</option>
              <option>Video & Animation</option>
              <option>Web Design and Development</option>
              <option>Mobile Apps Development</option>
              <option>UI/UX Design</option>
              <option>Project consultation</option>
              <option>Customized Open Source Product</option>
              <option>AI / ML</option>
              <option>IOT</option>
              <option>Games Development</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        <div className="grid my-2">
          <label className="column w-12@md w-24 control has-floating-label">
            <span className="block is-sm my-4">Budget</span>
            <select className={`input is-min is-primary ${formState.touched.budget ? (errors.budget ? "is-error" : "is-valid") : ""}`} name="budget" ref={register({ required: true })}>
              <option value="">Select</option>
              <option>&lt;$5K</option>
              <option>$10K+</option>
              <option>$25k+</option>
              <option>$50k+</option>
              <option>$100k+</option>
              <option>Not sure</option>
            </select>
          </label>
          <label className="column w-12@md w-24 control has-floating-label">
            <span className="block is-sm my-4">When to start</span>
            <select className={`input is-min is-primary ${formState.touched.whentostart ? (errors.whentostart ? "is-error" : "is-valid") : ""}`} name="whentostart" ref={register({ required: true })}>
              <option value="">Select</option>
              <option>Right Now</option>
              <option>In Few week</option>
              <option>Not Sure</option>
            </select>
          </label>
        </div>

        <div className="grid my-2">
          <div className="column w-24 is-sm">Brief about the project</div>
          <textarea className={`input ${formState.touched.about ? (errors.about ? "is-error" : "is-valid") : ""}`} ref={register({ required: false })} rows={3} name="about" />
        </div>

        {/* <div className="grid my-2">
          <div className="column w-24 is-sm">Have a file to share?</div>
          <div className="column w-24 group">
            <label className="control w-24">
              <input type="file" name="file" className={`file ${formState.touched.file ? errors.file  ? "is-valid": "is-error"   : ""}`} ref={register({ required: false })} />
              <span className="label btn is-sld is-primary is-block">Select or Drop your file here</span>
            </label>
          </div>
        </div> */}

        <div className="flex@lg txt-center txt-left@lg justify-between align-bottom">
          <button className={`btn w-24 w-auto@lg mb-2 mb-0@lg is-sld is-primary is-pill is-lg ${submitting ? "is-loading" : ""}`}>Get Started</button>
          <div className="font-bolder is-sm w-24 w-auto@lg">100% Secure. Zero Spam</div>
        </div>
      </form>
      <div className="is-sm my-4">This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</div>
    </>
  );
}
