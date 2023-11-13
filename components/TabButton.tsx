import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

interface tabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
} 

const TabButton = ({ active, selectTab, children } : tabButtonProps) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#e11d48] mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
