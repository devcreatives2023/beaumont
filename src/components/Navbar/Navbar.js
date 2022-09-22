import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../constants";
const Navbar = () => {
const [Active,setActive] =React.useState("home")
  return (
    <div className=" flex justify-between">
      <div className="flex gap-10">
        <div className=" text-logo"> TechBoom </div>
        <div>
          <ul className="flex  gap-7 text-[1.2rem] capitalize mt-3 ">
            <li onClick={()=>setActive("work")} className={Active==="work" ? " border-b-2 border-black" :""}><Link to=""> work </Link>
             </li>
            <li onClick={()=>setActive("about")} className={Active==="about" ? " border-b-2 border-black" :""}><Link to=""> about</Link> </li>
            <li onClick={()=>setActive("contract")} className={Active==="contract" ? " border-b-2 border-black" :""}><Link to=""> contract </Link></li>
          </ul>
        </div>
      </div>
      <div> 
          <ul className=" flex gap-7 text-[1.2rem] capitalize mt-3">
          <li><a href=""><icons.BsInstagram/> </a> </li>
          <li><a href=""><icons.BsTwitter/> </a> </li>
          </ul>
         </div>
    </div>
  );
};

export default Navbar;
