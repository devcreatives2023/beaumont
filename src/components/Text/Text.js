import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Text = () => {
  return (
    <div className="mt-[120px] xl:w-[50%] lg:w-[50%] md:w-[60%]" >
      <motion.p 
      initial={{opacity:1,scale:0.9}}
      whileInView={{opacity:1,scale:1,transition:{
        duration:1
      }}}
      className="text-[26px]  xl:text-[30px] lg:text-[26px] leading-10">
        Sequi pariatur. Laboriosam modi so aperiam for non. Nesciunt unde
        dolorem, yet dolor. Voluptatem tempora or consequuntur natus
        consequatur. Quam ullam. Modi fugiat so ratione irure and modi labore
        tempor. 
      </motion.p>
      <motion.p
      initial={{opacity:0,x:-10}}
      whileInView={{opacity:1,x:0,
      transition:{
        duration:1
      }
      }}
      className=" text-[28px] xl:text-[39px] lg:text-[30px]  border-b-[1px]
       border-black w-[80%] xl:w-[44%] lg:w-[54%] md:w-[50%] mt-7">
        <Link to="/contact"> Let's work together</Link>
      </motion.p>
    </div>
  );
};

export default Text;
