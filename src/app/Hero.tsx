"use client"
import React from "react";

const Hero = () => {

  const scrollToSection = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };  
  
  return (
    <div>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] ">
        {/* text section */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="text-4xl lg:text-6xl font-semibold">
            Delicious Food Is Waiting For You
          </h1>
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
            assumenda qui ipsam id officiis modi cumque minus dolores placeat
            explicabo.
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center">
            <button onClick={()=>scrollToSection("menu")} className="bg-primary text-white font-bold px-4 py-2 rounded-full hover:scale-105 duration-200">
              Food Menu
            </button>
            <button onClick={()=>scrollToSection("contact")} className="bg-gray-300 font-bold px-4 py-2 rounded-full text-black hover:scale-105 duration-200">
              Get in touch
            </button>
          </div>
        </div>
        {/* image section */}
        <div className="flex flex-col justify-center">
          <img
            src="1.png"
            alt=""
            className="animate-spin-slow img-shadow w-[400px] mx-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
