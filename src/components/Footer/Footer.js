import React from "react";
import {icons} from "../../constants";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="mt-[90px] text-[22px]">
      <motion.p
      initial={{opacity:0,y:15}}
      whileInView={{opacity:1,y:0,transition:{
        duration:"0.8s",
        type:"spring",
        delay:0.5
      }}}
      >
        <a href=""> email@example.com </a>
      </motion.p>
      <motion.p
      initial={{opacity:0,y:15}}
      whileInView={{opacity:1,y:0,transition:{
        duration:"0.8s",
        type:"spring",
        delay:1
      }}}
      >
        <a href=""> (+964 ) 78311 90 000 </a>
      </motion.p>
      <motion.p
      initial={{opacity:0,y:15}}
      whileInView={{opacity:1,y:0,transition:{
        duration:"0.8s",
        type:"spring",
        delay:1.5
      }}}
      className="flex items-center ">
        <a href=""> Made by Abrar  </a> <icons.BsHeart fontSize={12} className='m-1 mt-3 text-[#681717]' />
      </motion.p>
    </div>
  );
};

export default Footer;
