import React from "react";

const Hero = () => {
  return (
    <section className="w-[80vw] text-center absolute font-semibold text-white mx-auto left-[45px] top-[150px] md:top-[200px] md:left-[100px] lg:top-[250px] lg:left-[160px]">
      <h1 className="lg:text-7xl mb-10 text-3xl "> A modern publishing platform</h1>
      <p className=" text-xl text-[#FFCFC8]">
        Grow your audience build your online brand
      </p>
      <button className="px-6 mt-10 hover:bg-[#FF7986] duration-300 hover:text-white hover:border-none bg-white font-bold text-[#ea5032] border-2 py-2 rounded-full">
        Start For Free
      </button>
      <button className="px-7 mt-10 ml-2 lg:ml-2  border font-bold hover:bg-white duration-300 hover:text-[#ea5032] text-white border-white py-2 rounded-full">
        Learn More
      </button>
    </section>
  );
};

export default Hero;
