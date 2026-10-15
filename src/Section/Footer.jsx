import React from "react";

function Footer() {
  return (
    <div className="w-full py-12 text-[#998f8f] flex justify-center items-center border-t border-white/10">
      <p className="text-sm tracking-wide">
        Developed by{" "}
        <a
          href="https://devrep.site"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f46c38] hover:text-[#ff7b47] transition-colors duration-200 font-medium underline-offset-4 hover:underline"
        >
          Devrep Labs
        </a>
      </p>
    </div>
  );
}

export default Footer;
