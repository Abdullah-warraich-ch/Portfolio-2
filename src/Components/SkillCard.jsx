import React, { useState } from "react";

function SkillCard({ logo, title, disc, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex p-4 items-center gap-6 rounded-[2rem] transition-all duration-500 cursor-default border group"
      style={{
        backgroundColor: hovered ? `${color}15` : "rgba(28, 26, 25, 0.8)",
        borderColor: hovered ? `${color}60` : "rgba(255, 255, 255, 0.08)",
        backdropFilter: "blur(12px)",
        boxShadow: hovered ? `0 10px 30px -10px ${color}30` : "0 4px 12px -2px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon box — original h-20 w-20 text-5xl */}
      <div
        className="h-20 w-20 text-5xl flex justify-center items-center rounded-[1.5rem] transition-all duration-500 shrink-0 border border-white/10"
        style={{
          backgroundColor: hovered ? `${color}25` : "rgba(255, 255, 255, 0.04)",
          color: hovered ? color : "#998f8f",
          transform: hovered ? "scale(1.08) rotate(4deg)" : "scale(1) rotate(0deg)",
          boxShadow: hovered ? `inset 0 0 20px ${color}25` : "none",
        }}
      >
        {logo}
      </div>

      <div className="flex flex-col gap-1">
        <h1
          className="text-2xl font-bold tracking-tight transition-colors duration-300"
          style={{ color: hovered ? color : "#ffffff" }}
        >
          {title}
        </h1>
        <p className="text-[#998f8f] text-sm font-inter leading-relaxed">{disc}</p>
      </div>
    </div>
  );
}

export default SkillCard;
