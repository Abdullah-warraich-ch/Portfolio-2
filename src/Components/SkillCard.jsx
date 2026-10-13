import React, { useState } from "react";

function SkillCard({ logo, title, disc, color }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex p-4 items-center gap-6 rounded-[2rem] transition-all duration-500 cursor-default border group"
      style={{
        backgroundColor: hovered ? `${color}10` : "rgba(255,255,255,0.7)",
        borderColor: hovered ? `${color}50` : "rgba(226,232,240,0.8)",
        backdropFilter: "blur(12px)",
        boxShadow: hovered ? `0 10px 30px -10px ${color}25` : "0 2px 8px -2px rgba(0,0,0,0.04)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon box — original h-20 w-20 text-5xl */}
      <div
        className="h-20 w-20 text-5xl flex justify-center items-center rounded-[1.5rem] transition-all duration-500 shrink-0 border border-slate-200/60"
        style={{
          backgroundColor: hovered ? `${color}20` : "rgba(241,245,249,0.9)",
          color: hovered ? color : "#64748b",
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
          boxShadow: hovered ? `inset 0 0 20px ${color}20` : "none",
        }}
      >
        {logo}
      </div>

      <div className="flex flex-col gap-1">
        <h1
          className="text-2xl font-bold tracking-tight transition-colors duration-300"
          style={{ color: hovered ? color : "#0f172a" }}
        >
          {title}
        </h1>
        <p className="text-slate-500 text-sm font-inter leading-relaxed">{disc}</p>
      </div>
    </div>
  );
}

export default SkillCard;
