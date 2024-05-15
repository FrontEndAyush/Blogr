import React from "react";

const Hero = () => {
  return (
    <section className="w-[80vw] text-center absolute font-semibold text-white   top-[250px] left-[160px]">
      <h1 className="text-7xl mb-10 ">A modern publishing platform</h1>
      <p className=" text-xl text-[#FFCFC8]">
        Grow your audience build your online brand
      </p>
      <button className="px-6 mt-10 hover:bg-[#FF7986] duration-300 hover:text-white hover:border-none bg-white font-bold text-[#ea5032] border-2 py-2 rounded-full">
        Start For Free
      </button>
      <button className="px-6 mt-10 ml-5 border font-bold hover:bg-white duration-300 hover:text-[#ea5032] text-white border-white py-2 rounded-full">
        Learn More
      </button>
    </section>
  );
};

export default Hero;
