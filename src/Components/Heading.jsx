import React from "react";

function Heading({ FWord, LWord }) {
  return (
    <h1 className="text-white text-center lg:text-left font-extrabold text-[54px] md:text-[80px] lg:text-[94px] font-inter leading-tight m-0 p-0 tracking-tight">
      {FWord} <br /> <span className="text-white/20">{LWord}</span>
    </h1>
  );
}

export default Heading;
