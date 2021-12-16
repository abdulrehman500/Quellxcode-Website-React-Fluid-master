import React, { useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Helmet } from "react-helmet";

import title from "../../image/casestudy/nerdpaper/title.webp";
import design from "../../image/casestudy/nerdpaper/design.png";
import final from "../../image/casestudy/nerdpaper/final.webp";
import header from "../../image/casestudy/nerdpaper/header.webp";
import idea from "../../image/casestudy/nerdpaper/idea.webp";
import ourresearch from "../../image/casestudy/nerdpaper/ourresearch.webp";
// import userchallenges from "../../image/casestudy/nerdpaper/userchallenges.webp";
import userflowchart from "../../image/casestudy/nerdpaper/userflowchart.webp";
import visual from "../../image/casestudy/nerdpaper/visual.webp";
import l1 from "../../image/casestudy/nerdpaper/l1.webp";
import admin from "../../image/casestudy/nerdpaper/admin.webp";
import client from "../../image/casestudy/nerdpaper/client.png";
import writer from "../../image/casestudy/nerdpaper/writer.webp";

export default function NerdPaper() {
  const body = useRef(null);

  function setbodycolor(primary: boolean, classes: string[]) {
    let e = (body.current as any) as HTMLElement;
    primary ? classes.map((c) => e.classList.add(c)) : classes.map((c) => e.classList.remove(c));
  }

  return (
    <>
      <Helmet>
        <title>NerdPaper | Web Design and Development</title>
        <meta name="description" content="Aim to provide Essay Writing Services, Thesis writing services and Custom Writing Services" />
      </Helmet>

      <div ref={body} className="clr-white bg-primary">
        <VisibilitySensor partialVisibility offset={{ top: window.innerHeight / 2 }} delayedCall onChange={(visible) => setbodycolor(visible, ["bg-primary", "clr-white"])}>
          <section className="pb-6 pt-10 px-6 h-min-100vh grid align-bottom">
            <div className="column w-7@lg w-24  absolute@lg txt-center txt-left@lg top-header right-0 mr-2@lg">
              <img src={title} alt="" className="img w-24@lg w-19 w-15@md" />
            </div>
            <div className="column pt-6 w-17@md w-24">
              <h1 className="font-bolder mb-2">NerdPaper</h1>
              <div className="mb-4">Web Design and Development</div>
              <h1 className="title is-sm font-bolder mb-0">Aim to provide Essay Writing Services, Thesis writing services and Custom Writing Services</h1>
            </div>
          </section>
        </VisibilitySensor>

        <section className="px-6 py-6 container">
          <h1 className="font-bolder txt-left@md txt-center">About</h1>
          <p className="txt-justify txt-left@md">
            At NerdPapers we are proud of our experienced staff and our high quality services which we have maintained throughout the years. With hundreds of clients and thousands of writing services we stand tall in naming our brand as one of the
            most leading writing services provider in the market.
          </p>
          <p className="txt-justify txt-left@md">
            NerdPapers was established with an aim to provide Essay Writing Services, Thesis writing services and Custom Writing Services. We experienced that a lot of students experience the problem of not meeting with deadlines for their projects
            due to hectic routines which is why they usually search Write My Paper,Write my essay for me,Paper writing services,Best essay writing service,Cheap essay writing service and Thesis writing service. All of these search queries motivated
            us to create a Writing service as a whole which will be able to provide these services with the help from experts in the respective fields. We offer about 70+ different type of writing services covering all aspects of Essay Writing
            service and Thesis writing service in cheap and affordable rates with the best quality. To meet the exact demand from the clients we also provide custom writing services where the complete nature of the writing service is made to meet the
            exact specifications from the client.
          </p>
        </section>

        <section className="py-6">
          <img className="img w-24" src={header} alt="" />
        </section>

        <section className="px-6 py-6 container img-bg clr-white txt-justify" style={{ backgroundImage: `linear-gradient(to bottom, #03589866, #035898b3), url(${ourresearch})` }}>
          <h1 className="font-bolder txt-left@md txt-center">Our Writers</h1>
          <div>
            Our writers are a group of former professional academic writers from the US and the UK with over 10 years of experience in their respective fields. With the expertise and diversity of such staff we have been able to provide the most
            reliable and high quality Essay Writing Service and thesis writing service or thesis help services. A very strict process is initiated before selection of any writer in our staff which the writer has to pass all tests by 80%+ marks and
            then they are added to the group of professional that we have. All of our staff has an expertise in their respective fields which vary from Biology to Computers and from English literature to Cultural Diversity thesis. Including diversity
            in our writers has benefited our clients in a sense that all types of academic writing types are followed unlike, many other essay writing websites which are limited to very minimum number of academic styles & formats. Having experts and
            such professionals is one of the primary reasons why NerdPapers has created its name so quickly and has become a primary competitor to all the Essay writing and thesis writing service providers.
          </div>
        </section>

        <section className="pr-6@md py-6 grid container">
          <div className="column w-12@md w-24">
            <img src={idea} alt="" className="img" />
          </div>
          <div className="column w-12@md w-24">
            <h1 className="font-bolder txt-left@md txt-center">Enhancing the idea</h1>
            <p className="txt-justify txt-left@md">
              At NerdPapers we have been successfully able to complete all orders not only on time but also, with the highest quality. One of our primary goals with providing essay writing service or thesis writing service is the customer
              satisfaction due to which you can at any time contact us and have your essay proof-read and have changes made if necessary.
            </p>
            <p className="txt-justify txt-left@md">
              With our pool of experts being able to do any type of academic writing and format we have specifically included PhD holders as well who can easily answer to your term can you write my thesis for me?Our writers, as stated before, are
              well equipped with the knowledge and expertise of the subject and are handed over your assignment only if they match your required criteria. For thesis or advanced academic writing service your assigned writer does extensive research
              and adds that with his experience and expertise on the subject resulting in the highest quality of thesis writing.
            </p>
          </div>
        </section>

        <section className="px-6 py-6 container bg-primary clr-white mb-6">
          <h1 className="font-bolder txt-left@md txt-center">The design challenge</h1>
          <p className="txt-justify txt-left@md">
            An Online writing platform is not the most common way of writing research papers and articles. We wanted to make sure that it wouldn’t overwhelm and confuse the users, So we had to create the design keeping in mind the information our
            users already had and what they were trying to achieve.
          </p>
          <p className="mb-0">
            The key users were kept in mind as both their user journeys were similar yet needed to be differentiated. To help us get perspective on our design process and maintain the authenticity of the platform we completely engraved ourselves in
            active design thinking.
          </p>
        </section>

        {/* <section className="pl-6@md py-6 grid container">
        <div className="column w-12@md w-24">
          <h1 className="font-bolder txt-left@md txt-center">Identifying users & their challenges</h1>

          <ul className="mb-0 list icon-check-circle">
            <li className="mb-4">Mapping purchase intent to offering best deal from suppliers</li>
            <li className="mb-4">Reverse Bid – Enabling suppliers to offer best deals which consider buyer interest</li>
            <li className="mb-4">Eventually placing the order based on the offer from supplier</li>
            <li>Order management for back office staff</li>
          </ul>
        </div>

        <div className="column w-12@md w-24">
          <img src={userchallenges} alt="" className="img" />
        </div>
      </section> */}

        <section className="px-6 py-6 container bg-light txt-center">
          <h1 className="font-bolder txt-left@md txt-center">User flow diagram</h1>
          <p className="txt-justify txt-left@md">
            Client places the order on the website along with requirements. Admin reviews those requirements and assigns it to the writer to whom he deems feasible. Writer, upon completion sends it back to the admin who later on transfers it back to
            the client
          </p>
          <img src={userflowchart} alt="" className="img w-12" />
        </section>

        <section className="px-6 py-6 container">
          <h1 className="font-bolder txt-left@md txt-center">Design Conceptualization</h1>
          <p className="txt-justify txt-left@md">
            Our agile methodology and design sprint planning helped us make the design better in the here and now. An array of features were outlined after an extensive requirement gathering to put the website to its best potential and make it the
            “go to” platform for anyone looking to buy electronic products or home appliances.
          </p>
          <p className="txt-justify txt-left@md">
            Based on user roles identified, we had to figure out how to create minimal design that would go along with the brand name – ie. NerdPapers. So we created multiple wireframes to get a rough skeleton of the actual product.
          </p>
        </section>

        <section>
          <img src={design} alt="" className="img w-24" />
        </section>

        <section className="px-6 py-6 container">
          <h1 className="font-bolder txt-left@md txt-center">Visual and Aesthetic Design</h1>
          <div>
            Next we moved on to creating the interface and visual design. The overall look was kept minimalistic with more graphical content, the actual phones and appliances were shown with limited typography. We created different thematic UI
            references to choose from. Finally the client preferred the combination of whites and blues to keep it elegant and realistic. All this was done keeping in mind the client’s preference as well as the users and how they would achieve their
            end goal as seamlessly as possible.
          </div>
        </section>

        <section>
          <img src={visual} alt="" className="img" />
        </section>

        <section className="px-6 py-6 container">
          <h1 className="font-bolder txt-left@md txt-center">Core fundamentals</h1>
          <div>
            The foundation of good UX design is ensuring at all times that the user can achieve their tasks with minimal effort. Keeping that in mind, we kept the app clean and aesthetically pleasing. Our team of UX consultants and UI architects
            helped design a highly responsive and intuitive mobile and web app.
          </div>
        </section>

        <section className="pr-6@md pt-6 grid has-glp-0 align-middle">
          <div className="column pl-0 w-13@md w-24">
            <img src={l1} alt="" className="img" />
          </div>
          <div className="column pr-6@md w-11@md w-24">
            <h1 className="font-bolder txt-left@md txt-center">Variety of options</h1>
            <ul className="mb-0 list">
              <li className="mb-2">Allow Users to easily select and pick the type of content they want to write</li>
              <li>The User can easily pick the package which fits their needs and requirements</li>
            </ul>
          </div>
        </section>

        <section className="pl-6@md pt-6 grid has-gap-0 align-middle">
          <div className="column pl-6@md w-24 w-12@md order-1 order-0@md">
            <h1 className="font-bolder txt-left@md txt-center">Client Panel</h1>
            <ul className="mb-0 list">
              <li className="mb-2">Client can update his task</li>
              <li className="mb-2">Client can upload his requirements</li>
              <li className="mb-2">Client can review the completed task and ask for revisions in it</li>
              <li>Client can set time limit in which he wants his tasks to be complete</li>
            </ul>
          </div>
          <div className="column pr-0 w-24 w-12@md">
            <img src={client} alt="" className="img" />
          </div>
        </section>

        <section className="pr-6@md pt-6 grid has-glp-0 align-middle">
          <div className="column pl-0 w-12@md w-24">
            <img src={admin} alt="" className="img" />
          </div>
          <div className="column pr-6@md w-12@md w-24">
            <h1 className="font-bolder txt-left@md txt-center">Admin Panel</h1>
            <ul className="mb-0 list">
              <li className="mb-2">Admin can review the assigned task</li>
              <li className="mb-2">Admin can further assign to any writer he wishes</li>
              <li className="mb-2">Admin can even assign the task to a group of writers who can accept it on first come first serve basses</li>
              <li className="mb-2">Admin acts as a bridge between client and writer</li>
            </ul>
          </div>
        </section>

        <section className="pl-6@md pt-6 grid has-gap-0 align-middle">
          <div className="column pl-6@md w-24 w-12@md">
            <h1 className="font-bolder txt-left@md txt-center">Writer Panel</h1>
            <ul className="mb-0 list">
              <li className="mb-2">Writer can review the task assigned to him</li>
              <li>Writer can review the time limit for the specific task and act accordingly</li>
            </ul>
          </div>
          <div className="column w-12@md w-24 pr-0">
            <img src={writer} alt="" className="img" />
          </div>
        </section>

        <section className="pt-6">
          <div className="py-6 px-6 container">
            <h1 className="font-bolder txt-left@md txt-center">The Final Takeaway</h1>
            <p className="txt-justify txt-left@md">
              Getting a chance to work with a client who has a clear vision is one in a million. Our client wanted to fill the gap that he believed existed in the market between content writers and clients. He also believed that a platform like this
              could really do well as there weren’t many other close competitors. Keeping this authenticity in mind and staying true to our clients vision, we successfully finished The Nerd Paper website.
            </p>
          </div>
          <img src={final} alt="" className="img" />
        </section>
      </div>
    </>
  );
}
