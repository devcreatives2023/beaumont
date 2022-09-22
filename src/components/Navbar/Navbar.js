import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../constants";
import { motion } from "framer-motion";

const navbarsmallscreen = {
  open: {
    opacity: 1,
    y: 90,
  },
  close: {
    opacity: 0,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [Active, setActive] = React.useState("home");
  const [show, setShow] = React.useState(false);
  return (
    <div className=" flex justify-between ">
      <div className="flex  xl:gap-10 lg:gap-10 md:gap-10">
        <div className=" text-logo"> TechBoom </div>
        <div className="invisible xl:visible lg:visible md:visible">
          <ul className="flex  gap-7 text-[1.2rem] capitalize mt-3 ">
            <li
              onClick={() => setActive("work")}
              className={Active === "work" ? " border-b-2 border-black" : " hover:text-[gray] "}
            >
              <Link to=""> work </Link>
            </li>
            <li
              onClick={() => setActive("about")}
              className={Active === "about" ? " border-b-2 border-black" : " hover:text-[gray] "}
            >
              <Link to=""> about</Link>
            </li>
            <li
              onClick={() => setActive("contract")}
              className={
                Active === "contract" ? " border-b-2 border-black" : " hover:text-[gray] "
              }
            >
              <Link to=""> contract </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="absolute right-[52px] flex gap-7 text-[1.2rem] capitalize mt-3 invisible xl:visible lg:visible md:visible">
          <motion.li
            whileHover={{ color: "brown", scale: "1.1" }}
            transition={{ duration: "0.8s", ease: "easeInOut" }}
          >
            <a href="">
              <icons.BsInstagram />
            </a>
          </motion.li>

          <motion.li
            whileHover={{ color: "brown", scale: "1.1" }}
            transition={{ duration: "0.8s", ease: "easeInOut" }}
          >
            <a href="">
              <icons.BsTwitter />
            </a>
          </motion.li>
        </ul>
      </div>
      {/* small  screen */}
      <motion.div className="visible xl:invisible lg:invisible md:invisible">
        <motion.div
          initial={{ scale: 1, rotate: 0, opacity: 0.9 }}
          whileHover={{
            scale: 1.1,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "easeInOut",
              type: "spring",
            },
          }}
          className="flex justify-center items-center text-logo cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? <icons.AiOutlineClose /> : <icons.HiMenuAlt4 />}
        </motion.div>
        <motion.ul
          initial={{ y: 0, opacity: 0 }}
          variants={navbarsmallscreen}
          animate={show ? "open" : "close"}
          className=" fixed  w-[100%] h-[100%] left-0 right-0 pt-10 flex flex-col items-center 
          text-logo bg-white z-10"
        >
          <li className="border-b-2 border-[brown] hover:text-[grey]">
            <Link to="">Work</Link>
          </li>
          <li className="border-b-2 border-[brown] hover:text-[grey]">
            <Link to="">About</Link>
          </li>
          <li className="border-b-2 border-[brown] hover:text-[grey]">
            <Link to="">Contract</Link>
          </li>
          <div className=" flex mt-10 gap-2">
            <li className="text-[grey] hover:text-[brown]">
              <a href="">
                <icons.BsInstagram />
              </a>
            </li>
            <li className="text-[grey] hover:text-[brown]">
              <a href="">
                <icons.BsTwitter />
              </a>
            </li>
          </div>
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
