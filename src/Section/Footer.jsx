import React from "react";

function Footer() {
  return (
    <div className="w-full py-12 text-gray-600 flex justify-center items-center border-t border-white/[0.05]">
      <p className="text-sm tracking-wide">
        Developed by{" "}
        <span className="text-orange-500 hover:text-orange-400 transition-colors duration-200 cursor-default font-medium">
          GTechSources
        </span>
      </p>
    </div>
  );
}

export default Footer;
