import React from "react";

import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
    >
      <div className="mt-[50px]">
        <p
          className="text-[26px] lg:w-[40%] md:w-[80%] xl:w-[40%] capitalize  xl:text-[32px] lg:text-[26px] leading-10
        "
        >
          Ipsam nihil yet error commodi quam fugiat and molestiae. Aliquip nihil
          for aliquam eiusmod ea so aut, but culpa. Eu ullam or ab and vel.
          Incididunt consequat yet sed aperiam , accusantium Occaecat but culpa.
        </p>
        <p className="mt-[40px] xl:w-[45%] lg:w-[45%] md:w-[90%] text-xl">
          Anim doloremque but iste. Consequatur quo vel but iste commodi. Amet.
          Error magnam si. Eos. Occaecat qui accusantium yet dolores. Ut
          veritatis. Occaecat consequuntur voluptatem natus. Aliquip nihil for
          aliquam eiusmod ea so aut, but culpa . Occaecat qui accusantium yet
          dolores.
        </p>
      </div>
      <div className=" mt-[60px] xl:w-[40%] lg:w-[40%] grid grid-cols-2 xl:gap-[190px] lg:ga-[190px] ">
        <div className="grid-cols-1">
          <p className="text-xl font-semibold capitalize my-3 ">services</p>
          <ul className=" text-xl capitalize">
            <li>photography</li>
            <li>art field</li>
            <li>ceramics </li>
          </ul>
        </div>
        <div className="grid-cols-1">
          <p className="text-xl font-semibold capitalize my-3 "> clients</p>
          <ul className=" text-xl capitalize">
            <li>omar ali</li>
            <li>mohammed ebrahim</li>
            <li>Issa mohammed</li>
            <li>Eren yeger</li>
            <li>john smith </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
