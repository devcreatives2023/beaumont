import React from "react";
import { Link } from "react-router-dom";

const Text = () => {
  return (
    <div className="mt-[120px] xl:w-[50%] lg:w-[50%] md:w-[60%]">
      <p className=" text-[30px] leading-10">
        Sequi pariatur. Laboriosam modi so aperiam for non. Nesciunt unde
        dolorem, yet dolor. Voluptatem tempora or consequuntur natus
        consequatur. Quam ullam. Modi fugiat so ratione irure and modi labore
        tempor. 
      </p>
      <p className="  text-[39px]  border-b-[1px] border-black xl:w-[44%] lg:w-[44%] md:w-[80%] mt-7">
        <Link to="/contact"> Let's work together</Link>
      </p>
    </div>
  );
};

export default Text;
