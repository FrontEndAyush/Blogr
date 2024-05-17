import React from "react";

const Features = () => {
  return (
    <div className="h-[100vh] container py-20 ml-auto">
      <h1 className=" lg:text-[30px] text-[20px]  text-center font-semibold mb-4  lg:mb-0 lg:absolute left-[660px]">
        Designed for the future
      </h1>
      <div className="flex flex-wrap lg:flex-nowrap -mb-10 flex-col-reverse lg:flex-row">
        <div className="mt-[100px] divOne p-5">
          <h1 className="text-2xl  text-center lg:text-left font-semibold mb-4">
            Introducing an extensible editor
          </h1>
          <p className="lg:w-[600px]  text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            reiciendis eos aliquid saepe temporibus veritatis iure illo vitae
            cupiditate, reprehenderit error, possimus officia! Voluptatem, a,
            eveniet, fugit illo nam natus magni numquam asperiores ipsum
            voluptas laborum laboriosam atque facilis fugiat.
          </p>
          <h1 className="text-2xl font-semibold  text-center lg:text-left mb-4 mt-5">
            Robust content management
          </h1>
          <p className="lg:w-[600px]  text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            illo eaque autem velit quisquam distinctio omnis fugiat doloremque
            corporis! Inventore temporibus, recusandae dicta rerum, reiciendis
            quidem hic maiores consectetur fuga illum quod numquam quam?
          </p>
        </div>

        <div className="overflow-x-hidden px-4 lg:px-0 divTwo">
          <img
            src="/images/illustration-editor-desktop.svg"
            className="w-[100vw] lg:relative -right-[140px] overflow-x-hidden"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
