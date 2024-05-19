import React from "react";

const Footer = () => {
  return (
    <div className="w-full lg:mt-20 py-20  rounded-tr-[100px] bg-black">
      <div className="container mx-auto flex lg:justify-evenly text-center flex-col lg:flex-row justify-center lg:flex-nowrap text-white">
        <div className="mx-auto mb-12 lg:mb-0 lg:mx-0">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div>
          <h1 className="font-bold mb-3">Product</h1>
          <p>Overview</p>
          <p>Service</p>
          <p>Function</p>
          <p>Caller</p>
          <p>Integrations</p>
        </div>
        <div className="mt-10 lg:mt-0">
          <h1 className="font-bold mb-4">Company</h1>
          <p>Overview</p>
          <p>Service</p>
          <p>Function</p>
          <p>Caller</p>
          <p>Integrations</p>
        </div>
        <div className="mt-10 lg:mt-0">
          <h1 className="font-bold mb-4">Contact</h1>
          <p>Overview</p>
          <p>Service</p>
          <p>Function</p>
          <p>Caller</p>
          <p>Integrations</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
