import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent px-4 xs:px-8 text-white pt-8 pb-8 flex justify-between">
      <div className="container py-8 flex justify-between mx-auto px-4 xs:px-8 items-center">
      <Image src='/images/LogoKC.png' alt="logo" className='w-16 h-16' width={50} height={50}/>
        <p className="text-slate-600">All rights reserved © 2024 🐱‍💻</p>
      </div>
    </footer>
  );
};

export default Footer;
