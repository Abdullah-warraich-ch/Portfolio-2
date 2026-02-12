import React from "react";
import Heading from "../Components/Heading";

const Contact = React.forwardRef(function Contact(props, ref) {
  const labelStyle = "text-gray-500 text-xs";
  const opStyle = "text-gray-500 text-xs";
  const inpStyle =
    " text-gray-500 text-xs bg-secondary p-2 rounded-lg placeholder-gray-500 border-1 outline-none border-transparent focus:border-orange-500 placeholder:text-xs ";
  return (
    <section ref={ref} className="scroll-mt-28">
      <Heading FWord="LET'S WORK" LWord="TOGETHER" />
      <div>
        <div className="flex gap-3  flex-col">
          <div className="flex gap-0 justify-between">
            <div className="flex flex-col w-[48%] gap-2 ">
              <label htmlFor="name" className={labelStyle}>
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className={inpStyle}
              />
            </div>
            <div className="flex flex-col w-[48%]  gap-2">
              <label htmlFor="email" className={labelStyle}>
                Email
              </label>
              <input
                id="email"
                type="text"
                placeholder="Your Email"
                className={inpStyle}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className={labelStyle}>
              Subject
            </label>
            <select
              name="subject"
              id="subject"
              defaultValue="Subject"
              className={inpStyle}
            >
              <option value="freelance" className={opStyle}>
                Freelance Project
              </option>
              <option value="job" className={opStyle}>
                Job Opportunity
              </option>
              <option value="hi" className={opStyle}>
                Just Saying Hi!
              </option>
            </select>
          </div>
          <div className="flex flex-col gap-2 ">
            <label htmlFor="message" className={labelStyle}>
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className={inpStyle}
              rows="8"
            />
          </div>
          <div>
            <button className="bg-orange-500 w-full text-white p-2 rounded text-xs">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Contact;
