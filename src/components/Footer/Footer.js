import React from "react";
import {icons} from "../../constants";

const Footer = () => {
  return (
    <div className="mt-[90px] text-[22px]">
      <p>
        <a href=""> email@example.com </a>{" "}
      </p>
      <p>
        <a href=""> (+964 ) 78311 90 000 </a>
      </p>
      <p className="flex items-center ">
        <a href=""> Made by Abrar  </a> <icons.BsHeart fontSize={12} className='m-1 mt-3 text-[red]' />
      </p>
    </div>
  );
};

export default Footer;
