import React from "react";
import Heading from "../Components/Heading";

const Contact = React.forwardRef(function Contact(props, ref) {
  const labelStyle = "text-gray-400 text-xs font-medium tracking-wide";
  const inpStyle =
    "w-full text-gray-300 text-sm bg-[#1e1c1b] p-2.5 rounded-lg placeholder-gray-600 border border-white/[0.07] outline-none focus:border-orange-500/60 focus:bg-[#252321] transition-all duration-200 placeholder:text-xs";
  const opStyle = "text-gray-400 text-xs bg-[#1e1c1b]";

  return (
    <section ref={ref} className="scroll-mt-28">
      <div className="mb-10">
        <Heading FWord="LET'S WORK" LWord="TOGETHER" />
      </div>

      <form action="https://formspree.io/f/xnjbebqr" method="POST" className="bg-[#1c1b19]/40 backdrop-blur-xl border border-white/[0.05] p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
        {/* Decorative background glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] group-hover:bg-orange-500/10 transition-all duration-700"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] group-hover:bg-orange-500/10 transition-all duration-700"></div>

        <div className="flex flex-col gap-6 relative z-10">
          {/* Name + Email row */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col flex-1 gap-2.5">
              <label htmlFor="name" className={labelStyle}>Your Full Name</label>
              <input name="name" id="name" type="text" placeholder="John Doe" className={inpStyle} required />
            </div>
            <div className="flex flex-col flex-1 gap-2.5">
              <label htmlFor="email" className={labelStyle}>Email Address</label>
              <input name="email" id="email" type="email" placeholder="john@example.com" className={inpStyle} required />
            </div>
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2.5">
            <label htmlFor="subject" className={labelStyle}>Subject of Interest</label>
            <div className="relative">
              <select
                name="subject"
                id="subject"
                defaultValue="freelance"
                className={`${inpStyle} appearance-none cursor-pointer`}
              >
                <option value="freelance" className={opStyle}>Freelance Project</option>
                <option value="job" className={opStyle}>Job Opportunity</option>
                <option value="hi" className={opStyle}>Just Saying Hi!</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C2.185 5.355 2.403 5 2.808 5h10.384a.207.207 0 0 1 .173.344l-4.796 5.482a.25.25 0 0 1-.397 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2.5">
            <label htmlFor="message" className={labelStyle}>Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Tell me about your project..."
              className={inpStyle}
              rows="6"
              required
            />
          </div>

          {/* Submit */}
          <div className="pt-4">
            <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-2xl text-lg tracking-widest uppercase hover:bg-orange-500 hover:text-white transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)] hover:shadow-orange-500/30 active:scale-[0.98]">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
});

export default Contact;
