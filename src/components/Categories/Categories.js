import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants";
import { motion } from "framer-motion";


const Categories = () => {
  return (
    <div className="mt-[90px]">
      <div className=" grid gird-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-[80px]">
        {data.category.map((item, index) => {
          return (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5
                },
              }}
            >
              <Link to="category">
              <img
                src={item.img}
                className="  xl:h-[500px]  lg:h-[400px] md:h-[200px] transition-[0.2s] ease-in-out contrast-[0.8] cursor-pointer  object-cover hover:contrast-[1]"
                />
              <p className="mt-2 capitalize text-2xl ml-1">
                {item.name}
              </p>
                </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
