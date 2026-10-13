import React from "react";

function Footer() {
  return (
    <div className="w-full py-12 text-slate-500 flex justify-center items-center border-t border-slate-200">
      <p className="text-sm tracking-wide">
        Developed by{" "}
        <span className="text-orange-500 hover:text-orange-600 transition-colors duration-200 cursor-default font-medium">
          GTechSources
        </span>
      </p>
    </div>
  );
}

export default Footer;
