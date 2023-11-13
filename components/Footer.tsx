import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className="container pt-8 pb-8 pl-10 pr-10 flex justify-between">
      <img src='/images/LogoKC.png' alt="logo" className='w-16 h-16' />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
