import React from "react";

const FeaturesPageThree = () => {
  return (
    <div className=" container lg:py-0 py-[150px] mx-auto lg:mx-0 lg:mr-auto">
      <div className="flex flex-wrap lg:flex-nowrap text-center px-6 lg:px-0 lg:text-left items-center">
        <div>
          <img src="/images/illustration-laptop-desktop.svg" className="w-[100vw] lg:relative -left-[150px] overflow-x-hidden" alt="" />
        </div>

        <div className = "lg:relative mt-10 -left-[100px]">
          <h1 className="mb-3 text-2xl font-semibold">Free,open,simple</h1>
          <p className="lg:w-[600px] ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            reiciendis eos aliquid saepe temporibus veritatis iure illo vitae
            cupiditate, reprehenderit error, possimus officia! Voluptatem, a,
            eveniet, fugit illo nam natus magni numquam asperiores ipsum
            voluptas laborum laboriosam atque facilis fugiat.
          </p>
          <h1 className="mt-7 mb-3 text-2xl font-semibold">Robust content management</h1>
          <p className="lg:w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            reiciendis eos aliquid saepe temporibus veritatis iure illo vitae
            cupiditate, reprehenderit error, possimus officia! Voluptatem, a,
            eveniet, fugit illo nam natus magni numquam asperiores ipsum
            voluptas laborum laboriosam atque facilis fugiat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPageThree;
