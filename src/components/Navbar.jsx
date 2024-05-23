import React from "react";
import { useState } from "react";

const Navbar = () => {
  let [dropDownMenuNum, setDropDownMenuNum] = useState(0);
  let [showDropDownInMobile, setShowDropDownInMobile] = useState(0);
  let [showMenu, setShowMenu] = useState(false);

  function showDropDownMenu(num) {
    if (dropDownMenuNum === num) {
      setDropDownMenuNum(0);
    } else {
      setDropDownMenuNum(num);
    }
  }

  function showDroppDownMenuInMobileDevices(num) {
    if (showDropDownInMobile === num) {
      setShowDropDownInMobile(0);
    } else {
      setShowDropDownInMobile(num);
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
                  {showDropDownMenu !== 1 ? (
                    <>
                      <img
                        src="/images/icon-arrow-light.svg"
                        className="mt-1 ml-1"
                        alt=""
                        onClick={() => showDropDownMenu(1)}
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <img
                        src="/images/icon-arrow-dark.svg"
                        alt=""
                        className="mt-1 ml-1 rotate-180"
                        onClick={() => showDropDownMenu(0)}
                      />
                    </>
                  )}
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
        {showMenu === true ? (
          <>
            <img
              src="/images/icon-close.svg"
              onClick={() => setShowMenu(false)}
              alt=""
            />
          </>
        ) : (
          <img
            src="/images/icon-hamburger.svg"
            className="block lg:hidden"
            alt=""
            onClick={() => setShowMenu(true)}
          />
        )}

        {/* menu for mobile device */}
        <div
          className={` ${
            showMenu === true ? "block" : "hidden"
          }  absolute z-[50] md:right-[300px] right-[350px]`}
        >
          <div
            className={`absolute top-[50px]  z-[999px] flex py-5  border bg-white min-h-[200px] rounded-lg w-[300px] left-[50px]`}
          >
            <ul className="flex gap-3 cursor-pointer px-[120px] font-semibold   mt-5 flex-col mx-auto">
              <li
                className="flex items-center"
                onClick={() => showDroppDownMenuInMobileDevices(1)}
              >
                Product{" "}
              </li>
              <div
                className={`w-[120px] relative right-[28px] text-center  cursor-pointer rounded-lg  bg-gray-200 h-[130px] border border-white ${
                  showDropDownInMobile == 1 ? "block" : "hidden"
                }    `}
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

              <li
                className="flex items-center"
                onClick={() => showDroppDownMenuInMobileDevices(2)}
              >
                Company{" "}
              </li>
              <div
                className={`w-[120px]  relative right-[28px] text-center  cursor-pointer rounded-lg  bg-gray-200 h-[130px] border border-white  ${
                  showDropDownInMobile == 2 ? "block" : "hidden"
                }    `}
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

              <li
                className="flex items-center"
                onClick={() => showDroppDownMenuInMobileDevices(3)}
              >
                Connect{" "}
              </li>
              <div
                className={`w-[120px]  relative right-[28px] text-center  cursor-pointer rounded-lg  bg-gray-200 h-[130px] border border-white  ${
                  showDropDownInMobile == 3 ? "block" : "hidden"
                }    `}
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

              {/* signup and login button for mobile devices */}
              <div className=" relative right-[30px]  ">
                <button className=" ml-[45px]  font-bold mb-1 ">Login</button>
                <br />
                <button className="px-[50px]   bg-[#ea5032]   font-bold text-[white] border-2 py-2 rounded-full">
                  Sign Up
                </button>
              </div>
            </ul>
            <hr />
          </div>
        </div>

        {/* for desktop signup and desktop button */}
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
