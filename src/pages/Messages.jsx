import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
const Messages = () => {
  const [isOpen, setIsOpen] = useState(true);
  library.add(faArrowLeft, faArrowRight);
  return (
    <>
      {/* ml-[35px] */}
      <div className=" absolute max-2md:static top-[2.313rem] max-2md:mt-[4rem] font-rubik">
        <div className="flex w-full">
          {/* users */}
          <div
            className={`bg-white  z-20 max-2md:fixed max-2md:h-screen top-[4rem] 
              border-r border-gray-light max-2md:rounded-r-2xl max-2md:w-[20rem] 
            transition-all duration-300 delay-100 ease-linear ${
              isOpen ? "left-0" : "left-[-100%]"
            }`}
          >
            <div className="flex">
              <h1 className="text-[30px] pl-[31px] relative font-bold font-inter">
                <span>MESSAGES</span>
                <span className="bg-red-light rounded-full absolute  top-0 right-[-1.6rem] px-2 text-white w-[max-content] text-[15px]">
                  3
                </span>
                <FontAwesomeIcon
                  onClick={() => setIsOpen(false)}
                  icon={faArrowRight}
                  className="px-2 py-2 max-2md:visible invisible
                  cursor-pointer bg-red-light text-xl text-white rounded-full absolute top-1 right-[-6rem]"
                />
              </h1>
            </div>
            <div>
              <div
                className="flex mt-[35px] max-2md:mt-4 cursor-pointer
               hover:bg-gray-lighter px-[31px] py-[13px] max-2md:p-1"
              >
                <div>
                  <figure className="">
                    <img
                      className="w-[140.08px] h-[75.65px] rounded-lg "
                      src="../assets/images/mount.jpg"
                      alt="user"
                    />
                  </figure>
                </div>
                <div className="pl-[17px] ">
                  <h3 className="text-[18px] flex justify-between font-semibold ">
                    <span> Derrick Dro</span>
                    <span className="">
                      <img
                        src="../assets/icons/dot.png"
                        alt="message indicator"
                      />
                    </span>
                  </h3>
                  <p className="text-[9px] text-gray-light">
                    Curabitur ac egestas ligula, quis porttitor tortor. Ut sit
                    amet velit interdum, Curabitur ac egestas ligula, quis
                    porttitor tortor. Ut sit amet velit interdum,
                  </p>
                </div>
              </div>
              <div className="flex cursor-pointer  hover:bg-gray-lighter px-[31px] py-[13px] max-2md:p-1">
                <div>
                  <figure className="">
                    <img
                      className="w-[140.08px] h-[75.65px] rounded-lg "
                      src="../assets/images/mount.jpg"
                      alt="user"
                    />
                  </figure>
                </div>
                <div className="pl-[17px] ">
                  <h3 className="text-[18px] font-semibold">Derrick Dro</h3>
                  <p className="text-[9px] text-gray-light">
                    Curabitur ac egestas ligula, quis porttitor tortor. Ut sit
                    amet velit interdum, Curabitur ac egestas ligula, quis
                    porttitor tortor. Ut sit amet velit interdum,
                  </p>
                </div>
              </div>
              <div className="flex cursor-pointer  hover:bg-gray-lighter px-[31px] py-[13px] max-2md:p-1">
                <div>
                  <figure className="">
                    <img
                      className="w-[140.08px] h-[75.65px] rounded-lg "
                      src="../assets/images/mount.jpg"
                      alt="user"
                    />
                  </figure>
                </div>
                <div className="pl-[17px] ">
                  <h3 className="text-[18px] font-semibold">Derrick Dro</h3>
                  <p className="text-[9px] text-gray-light">
                    Curabitur ac egestas ligula, quis porttitor tortor. Ut sit
                    amet velit interdum, Curabitur ac egestas ligula, quis
                    porttitor tortor. Ut sit amet velit interdum,
                  </p>
                </div>
              </div>
              <div className="flex cursor-pointer  hover:bg-gray-lighter px-[31px] py-[13px] max-2md:p-1">
                <div>
                  <figure className="">
                    <img
                      className="w-[140.08px] h-[75.65px] rounded-lg "
                      src="../assets/images/mount.jpg"
                      alt="user"
                    />
                  </figure>
                </div>
                <div className="pl-[17px] ">
                  <h3 className="text-[18px] font-semibold">Derrick Dro</h3>
                  <p className="text-[9px] text-gray-light">
                    Curabitur ac egestas ligula, quis porttitor tortor. Ut sit
                    amet velit interdum, Curabitur ac egestas ligula, quis
                    porttitor tortor. Ut sit amet velit interdum,
                  </p>
                </div>
              </div>
              <div className="flex cursor-pointer  hover:bg-gray-lighter px-[31px] py-[13px] max-2md:p-1">
                <div>
                  <figure className="">
                    <img
                      className="w-[140.08px] h-[75.65px] rounded-lg "
                      src="../assets/images/mount.jpg"
                      alt="user"
                    />
                  </figure>
                </div>
                <div className="pl-[17px] ">
                  <h3 className="text-[18px] font-semibold">Derrick Dro</h3>
                  <p className="text-[9px] text-gray-light">
                    Curabitur ac egestas ligula, quis porttitor tortor. Ut sit
                    amet velit interdum, Curabitur ac egestas ligula, quis
                    porttitor tortor. Ut sit amet velit interdum,
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* message layout */}
          <div className="pl-[31px] max-2md:p-0  max-2md:w-[95%] w-full mx-auto">
            <div className="flex">
              <figure className="mr-[15px]">
                <FontAwesomeIcon
                  onClick={() => setIsOpen(true)}
                  icon={faArrowLeft}
                  className="px-2 py-2 bg-red-light text-white rounded-full cursor-pointer"
                />
              </figure>
              <div className="flex">
                <figure className="mr-[18px]">
                  <img
                    className="w-[59.08px] h-[61.65px] rounded-lg"
                    src="../assets/images/mount.jpg"
                    alt="user"
                  />
                </figure>
                <div>
                  <h3 className="text-[18px] font-semibold">Derrick Dro</h3>
                  <p className="text-[9px] text-gray-light">active</p>
                </div>
              </div>
            </div>
            {/* messages */}
            <div className="w-full mt-[40px]  text-[18px] font-normal ">
              <div className="h-[26rem] overflow-auto">
                <div className="max-w-[50%] min-w-[15rem] bg-gray-mid text-black-darkest rounded-full px-4 py-4">
                  Hey I'm interested in you DJing my bar
                </div>
                <div className="max-w-[50%] min-w-[15rem] ml-auto text-white bg-red-light text-end rounded-full px-4 py-4 mt-[13px]">
                  Hey I'm interested in you DJing my bar
                </div>
                <div className="max-w-[50%] min-w-[15rem] bg-gray-mid text-black-darkest rounded-full px-4 py-4 mt-[13px]">
                  Hey I'm interested in you DJing my bar
                </div>
                <div className="max-w-[50%] min-w-[15rem] relative ml-auto text-white bg-red-light text-end rounded-full px-4 py-4 mt-[13px]">
                  <span> Hey I'm interested in you DJing my bar</span>
                  <span>
                    <img
                      className="p-2 rounded-full bg-matte-blue absolute top-[-10px] left-0"
                      src="../assets/icons/thumbup.png"
                      alt="thubm up"
                    />
                  </span>
                </div>
                <div className="max-w-[50%] min-w-[15rem] bg-gray-mid text-black-darkest rounded-full px-4 py-4 mt-[13px]">
                  See you on the 15th!!!!!
                </div>
                <div className="max-w-[max-content]  relative mt-[13px]">
                  <img
                    className=" rounded-3xl w-[124px] h-[195px]"
                    src="../assets/images/mount.jpg"
                    alt="message"
                  />
                  <span>
                    <img
                      className="p-2 rounded-full bg-matte-blue absolute object-cover right-[-1rem] bottom-0"
                      src="../assets/icons/thumbup.png"
                      alt="thubm up"
                    />
                  </span>
                </div>
              </div>
              <div>
                <form
                  method="POST"
                  className="w-full flex  rounded-3xl py-[5px] pl-[20px] border border-red-light mt-[30px]"
                >
                  <input
                    className="outline-none w-full pr-[20px]"
                    type="text"
                    placeholder="Message..."
                  />
                  <button className="mr-[1rem]">
                    <img src="../assets/icons/send.png" alt="send message" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messages;
