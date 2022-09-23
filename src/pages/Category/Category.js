import React from "react";
import { data, icons } from "../../constants";
import { Link } from "react-router-dom";
const Category = () => {
  return (
    <div className="mt-[50px]">
      <h1 className=" capitalize xl:text-[3rem] lg:text-[3rem] text-[1.8rem] ">
        ceramics Products
      </h1>
      <p className="xl:w-[50%] lg:w-[50%] xl:text-[21px] lg:text-[21px] text-[16px] md:text-[18px]">
        Quam. Sunt inventore nesciunt, vitae aliquip. Nostrud veniam doloremque
        consectetur so consectetur but laboriosam. Esse anim sed but aut or
        voluptas yet voluptate. Laudantium ex so autem consequuntur. Aliquid.
        Velitesse pariatur or non so dolores, or inventore and laboris. Ullamco.
        Ipsa molestiae yet adipisicing, yet commodi.
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:grid-cols-2 xl:gap-10 lg:gap-10 gap-3 mt-[50px]">
        {data.ceramics.map((item, index) => {
          return (
            <div className="" key={index}>
              <img
                src={item.img}
                className="xl:h-[900px] lg:h-[800px] h-[500px] 
                  w-[100%] object-cover"
              />
            </div>
          );
        })}
      </div>
      <p className="xl:w-[51%] lg:w-[50%] md:w-[55%]  mt-[50px] xl:text-[21px] lg:text-[21px] text-[16px] md:text-[18px]">
        Cat ipsum dolor sit amet, fugiat iste. Totam aliqua, yet ab, for natus
        for suscipit. Minim eos molestiae. Enim irure officia and minima.
        Adipisicing ratione. Velitesse elit for magni aliquam. Qui corporis
        tempora quam, so est, magni. Nemo. Irure. Eos illum labore. Accusantium
        eu. Odit sit and cillum sed eaque, but quia, duis. Aliqua minima do
        adipisicing, doloremque.
      </p>
      <p className="mt-10 capitalize text-[19px] font-semibold">
        <i> ceramics by abrar & saliha </i>
      </p>
      <div
        className="flex justify-end gap-6 items-end lg:mt-0 md:mt-5 
      mt-10 xl:mt-0 xl:text-logo lg:text-logo md:text-[2rem] text-[1.5rem] font-semibold"
      >
        <Link to="">Watches types</Link>
        <icons.AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default Category;
