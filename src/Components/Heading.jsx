import React from "react";

function Heading({ FWord, LWord }) {
  return (
    <h1 className="text-white text-center lg:text-left font-extrabold text-[54px] md:text-[94px] font-inter leading-tight m-0 p-0">
      {FWord} <span style={{ color: "#2b2927" }}>{LWord}</span>
    </h1>
  );
}

export default Heading;
