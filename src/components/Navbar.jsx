import React from "react";
import { useState } from "react";

const Navbar = () => {
  let [dropDownMenuNum, setDropDownMenuNum] = useState(0);
  let [showMenu, setShowMenu] = useState(true);

  function showDropDownMenu(num) {
    console.log(num);
    if (dropDownMenuNum === num) {
      setDropDownMenuNum(0);
    } else {
      setDropDownMenuNum(num);
    }
  }
  return (
    <nav className=" flex justify-center">
      <div className=" flex justify-between mt-8 w-[80vw] items-center absolute top-0">
        <div className="flex  items-center gap-10 text-white ">
          <img src="/images/logo.svg" className="cursor-pointer" alt="" />
          <div className="hidden lg:block">
            <ul className="flex gap-6 cursor-pointer">
              <li
                className="flex items-center"
                onClick={() => showDropDownMenu(1)}
              >
                Product{" "}
                <span>
                  <img
                    src="/images/icon-arrow-light.svg"
                    className="mt-1 ml-1"
                    alt=""
                    onClick={() => showDropDownMenu(1)}
                  />
                </span>
              </li>
              <li className="flex items-center">
                Company{" "}
                <span>
                  <img
                    src="/images/icon-arrow-light.svg"
                    className="mt-1 ml-1"
                    alt=""
                    onClick={() => showDropDownMenu(2)}
                  />
                </span>
              </li>
              <li className="flex items-center">
                Connect{" "}
                <span>
                  <img
                    src="/images/icon-arrow-light.svg"
                    className="mt-1 ml-1"
                    alt=""
                    onClick={() => showDropDownMenu(3)}
                  />
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* this is hamburger icon img tag */}
        <img
          src="/images/icon-hamburger.svg"
          className="block lg:hidden"
          alt=""
        />

        {/* menu for mobile device  */}
        <div className={` ${showMenu === true ? "block" : "hidden"} hidden`}>
          <div
            className={`absolute top-[50px]  z-[999px] flex  border bg-white min-h-[300px] rounded-lg w-[300px] left-[50px]`}
          >
            <ul className="flex gap-3 cursor-pointer px-[120px] font-semibold   mt-5 flex-col mx-auto">
              <li className="flex items-center">Product </li>
              <div
                className={`w-[120px] hidden  text-center mr-10 cursor-pointer rounded-lg  bg-gray-200 h-[130px] border border-white     `}
              >
                <h1 className="hover:font-semibold mt-1 duration-300">
                  Contact
                </h1>
                <h1 className="hover:font-semibold mt-1 duration-300">
                  Newsletter
                </h1>
                <h1 className="hover:font-semibold mt-1 duration-300">
                  Linkdin
                </h1>
              </div>

              <li className="flex items-center">
                Company{" "}
                <span>
                  <img
                    src="/images/icon-arrow-light.svg"
                    className="mt-1 ml-1"
                    alt=""
                  />
                </span>
              </li>
              <li className="flex items-center">
                Connect{" "}
                <span>
                  <img
                    src="/images/icon-arrow-light.svg"
                    className="mt-1 ml-1"
                    alt=""
                  />
                </span>
              </li>
            </ul>
            <hr />

            <div className="   z-[999px] relative top-[100px]   right-[200px]">
              <button className="mr-5 ml-[50px]  font-bold mb-1 ">Login</button>
              <br />
              <button className="px-10 bg-[#ea5032] z-50 relative  font-bold text-[white] border-2 py-2 rounded-full">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* for desktop  */}
        <div className="hidden lg:block">
          <button className="mr-5 ">Login</button>
          <button className="px-6 bg-white font-bold text-[#ea5032] border-2 py-2 rounded-full">
            Sign Up
          </button>
        </div>
      </div>

      <div>
        <div
          className={`w-[120px]  cursor-pointer  rounded-lg p-5 h-[130px] border border-white absolute top-[80px] left-[470px] bg-white ${
            dropDownMenuNum === 3 ? "block" : "hidden"
          }`}
        >
          <h1 className="hover:font-semibold mt-1 duration-300">Contact</h1>
          <h1 className="hover:font-semibold mt-1 duration-300">Newsletter</h1>
          <h1 className="hover:font-semibold mt-1 duration-300">Linkdin</h1>
        </div>

        <div
          className={`w-[120px]  cursor-pointer rounded-lg p-5 h-[130px] border border-white absolute top-[80px] left-[350px]  bg-white ${
            dropDownMenuNum === 2 ? "block" : "hidden"
          }  `}
        >
          <h1 className="hover:font-semibold mt-1 duration-300">Contact</h1>
          <h1 className="hover:font-semibold mt-1 duration-300">Newsletter</h1>
          <h1 className="hover:font-semibold mt-1 duration-300">Linkdin</h1>
        </div>
        <div
          className={`w-[120px]    cursor-pointer rounded-lg p-5 h-[130px] border border-white absolute top-[80px] left-[250px]  bg-white ${
            dropDownMenuNum === 1 ? "block" : "hidden"
          }  `}
        >
          <h1 className="hover:font-semibold mt-1 duration-300">Contact</h1>
          <h1 className="hover:font-semibold mt-1 duration-300">Newsletter</h1>
          <h1 className="hover:font-semibold mt-1 duration-300">Linkdin</h1>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
