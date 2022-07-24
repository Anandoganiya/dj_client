import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
const ReviewsRatings = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  library.add(faStar, faCaretRight);
  return (
    <>
      <div className="mx-[41px] max-sm:mx-4 max-2md:mt-[5rem]">
        <h2 className="text-[30px] font-semibold font-inter uppercase mb-[30px]">
          Dj of the Week
        </h2>
        <div className="w-full">
          <div className="w-full relative">
            <figure className="w-full ">
              <img
                className="h-[407px] w-full rounded-3xl shadow-item-shadow"
                src="../assets/images/mount.jpg"
                alt=""
              />
            </figure>
            <div className="absolute left-[51px] max-sm:left-[1rem] select-none bottom-[25px] font-inter">
              <div className="bg-red-light rounded-full w-full flex ">
                <div
                  className="rounded-full bg-black-darkest max-sm:hidden
               my-[22px] ml-[29px] mr-[24px] h-[81px] w-[81px]"
                ></div>
                <div
                  className="flex text-white flex-col mt-[30px] mr-[57px] leading-[1.5rem] 
                max-sm:mt-[1rem] max-sm:mr-[3rem] max-sm:ml-[3rem]"
                >
                  <h3 className="font-extrabold text-[30px] max-sm:text-[1.5rem]">
                    Cosmic DJ
                  </h3>
                  <span className="text-[20px] max-sm:text-[1rem]">
                    123 ST,MH
                  </span>
                  <div className="flex items-baseline mt-[17px] space-x-2 max-sm:mt-[10px]">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "yellow" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "yellow" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "yellow" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "yellow" }}
                    />
                    <span>(71)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-[85px]">
            <div className="flex justify-between items-center">
              <h3 className="font-gill text-[30px] font-semibold">
                Available DJs
              </h3>
              <figure
                onClick={openModal}
                className="border p-1 rounded-sm cursor-pointer select-none"
              >
                <img
                  className="text-black-dark w-4 h-4 "
                  src="./assets/icons/filter.png"
                  alt="filter"
                />
              </figure>
            </div>
          </div>
          <div>
            <div className="w-full mt-[34px] mb-[69px] flex justify-between flex-wrap ">
              {/* block 1 */}
              <figure className="w-[161px] max-md:w-full shadow-item-shadow  rounded-2xl mb-4">
                <img
                  className="w-[161px] max-md:w-full max-md:h-[20rem] rounded-t-2xl h-[127px] object-cover"
                  src="./assets/images/mount.jpg"
                  alt="dj name"
                />
                <div
                  className="font-[700] text-[22px] pl-[6px] pb-[7px] pt-[7px] max-md:block max-md:text-center
              
              "
                >
                  <div className="flex justify-between items-center ">
                    <div>
                      <span>Dj Norti</span>
                      <div className="flex items-baseline text-sm">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-dark"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-dark"
                        />
                      </div>
                    </div>
                    <figure className="mr-[1rem]">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="text-blue"
                      />
                    </figure>
                  </div>
                </div>
              </figure>
              {/* block 2 */}
              <figure className="w-[161px] max-md:w-full shadow-item-shadow rounded-2xl mb-4">
                <img
                  className="w-[161px] max-md:w-full max-md:h-[20rem] rounded-t-2xl h-[127px] object-cover"
                  src="./assets/images/mount.jpg"
                  alt="dj name"
                />
                <div
                  className="font-[700] text-[22px] pl-[6px] pb-[7px] pt-[7px] max-md:block max-md:text-center
              
              "
                >
                  <div className="flex justify-between items-center ">
                    <div>
                      <span>Dj Norti</span>
                      <div className="flex items-baseline text-sm">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-dark"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-dark"
                        />
                      </div>
                    </div>
                    <figure className="mr-[1rem]">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="text-blue"
                      />
                    </figure>
                  </div>
                </div>
              </figure>
              <figure className="w-[161px] max-md:w-full shadow-item-shadow rounded-2xl mb-4">
                <img
                  className="w-[161px] max-md:w-full max-md:h-[20rem] rounded-t-2xl h-[127px] object-cover"
                  src="./assets/images/mount.jpg"
                  alt="dj name"
                />
                <div
                  className="font-[700] text-[22px] pl-[6px] pb-[7px] pt-[7px] max-md:block max-md:text-center
              
              "
                >
                  <div className="flex justify-between items-center ">
                    <div>
                      <span>Dj Norti</span>
                      <div className="flex items-baseline text-sm">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-dark"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-dark"
                        />
                      </div>
                    </div>
                    <figure className="mr-[1rem]">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="text-blue"
                      />
                    </figure>
                  </div>
                </div>
              </figure>
              <figure className="w-[161px] max-md:w-full shadow-item-shadow rounded-2xl  mb-4">
                <img
                  className="w-[161px] max-md:w-full max-md:h-[20rem] rounded-t-2xl h-[127px] object-cover"
                  src="./assets/images/mount.jpg"
                  alt="dj name"
                />
                <div
                  className="font-[700] text-[22px] pl-[6px] pb-[7px] pt-[7px] max-md:block max-md:text-center
              
              "
                >
                  <div className="flex justify-between items-center ">
                    <div>
                      <span>Dj Norti</span>
                      <div className="flex items-baseline text-sm">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-dark"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-dark"
                        />
                      </div>
                    </div>
                    <figure className="mr-[1rem]">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="text-blue"
                      />
                    </figure>
                  </div>
                </div>
              </figure>
              <figure className="w-[161px] max-md:w-full shadow-item-shadow rounded-2xl mb-4">
                <img
                  className="w-[161px] max-md:w-full max-md:h-[20rem] rounded-t-2xl h-[127px] object-cover"
                  src="./assets/images/mount.jpg"
                  alt="dj name"
                />
                <div
                  className="font-[700] text-[22px] pl-[6px] pb-[7px] pt-[7px] max-md:block max-md:text-center
              
              "
                >
                  <div className="flex justify-between items-center ">
                    <div>
                      <span>Dj Norti</span>
                      <div className="flex items-baseline text-sm">
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          style={{ color: "yellow" }}
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-dark"
                        />
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-gray-dark"
                        />
                      </div>
                    </div>
                    <figure className="mr-[1rem]">
                      <FontAwesomeIcon
                        icon={faCaretRight}
                        className="text-blue"
                      />
                    </figure>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
      {/* transition */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-trans-card  bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="w-full max-w-md transform overflow-hidden 
                rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
                >
                  {/* <Dialog.Title
                    as="h3"
                    className="text-lg font-medium  leading-6 text-gray-900"
                  >
                    Payment successful
                  </Dialog.Title> */}
                  <div
                    onClick={() => closeModal(false)}
                    className="absolute right-[-1rem] cursor-pointer top-[.5rem] w-[25px]
                   h-[25px] flex items-center justify-center border p-2 border-gray rounded-full mr-[2rem]"
                  >
                    <figure className="">
                      <img src="../assets/icons/cross.png" alt="" />
                    </figure>
                  </div>
                  <div className="">
                    <form method="POST">
                      <div className="flex flex-col mb-[1rem]">
                        <label
                          htmlFor="pricing"
                          className="font-semibold text-xl font-roboto"
                        >
                          Pricing
                        </label>
                        {/* <progress
                          className="w-full"
                          max="100"
                          value="50"
                          id="pricing"
                        ></progress> */}
                        <input
                          type="range"
                          min={10}
                          max={1000}
                          className="slider-thumb"
                        />
                        <div className="flex justify-between text-[14px] font-gill">
                          <span>$10</span>
                          <span>$1000</span>
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="pricing"
                          className="font-semibold text-xl font-roboto"
                        >
                          Locations
                        </label>
                        <progress
                          className="w-full"
                          max="100"
                          value="50"
                          id="pricing"
                        ></progress>
                        <div className="flex justify-between text-[14px] font-gill">
                          <span className="flex items-center">5 Miles</span>
                          <span>100 Miles</span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <div>
                          <h3 className="font-semibold text-xl font-roboto">
                            Ratings
                          </h3>
                          <div className="flex flex-col">
                            <div className="flex items-center space-x-[.5rem] ">
                              <input
                                type="checkbox"
                                id="star_1"
                                name="star_1"
                                className="cursor-pointer"
                              />
                              <label
                                htmlFor="star_1"
                                className="cursor-pointer"
                              >
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                              </label>
                            </div>
                            <div className="flex items-center space-x-[.5rem] ">
                              <input
                                type="checkbox"
                                id="star_2"
                                name="star_2"
                                className="cursor-pointer"
                              />
                              <label
                                htmlFor="star_2"
                                className="cursor-pointer"
                              >
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                              </label>
                            </div>
                            <div className="flex items-center space-x-[.5rem] ">
                              <input
                                type="checkbox"
                                id="star_3"
                                name="star_3"
                                className="cursor-pointer"
                              />
                              <label
                                htmlFor="star_3"
                                className="cursor-pointer"
                              >
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                              </label>
                            </div>
                            <div className="flex items-center space-x-[.5rem] ">
                              <input
                                type="checkbox"
                                id="star_4"
                                name="star_4"
                                className="cursor-pointer"
                              />
                              <label
                                htmlFor="star_4"
                                className="cursor-pointer"
                              >
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                              </label>
                            </div>
                            <div className="flex items-center space-x-[.5rem] ">
                              <input
                                type="checkbox"
                                id="star_5"
                                name="star_5"
                                className="cursor-pointer"
                              />
                              <label
                                htmlFor="star_5"
                                className="cursor-pointer"
                              >
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                                <FontAwesomeIcon
                                  icon={faStar}
                                  style={{ color: "yellow" }}
                                />
                              </label>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h2 className="font-semibold text-xl font-roboto">
                            Genre
                          </h2>
                          <div className="flex space-x-4">
                            <div className="space-x-4">
                              <input
                                className="cursor-pointer"
                                type="checkbox"
                                id="afrobeats"
                              />
                              <label
                                className="cursor-pointer text-gray-light"
                                htmlFor="afrobeats"
                              >
                                Afrobeats
                              </label>
                            </div>
                            <div className="space-x-4">
                              <input
                                className="cursor-pointer "
                                type="checkbox"
                                id="afrohouse"
                              />
                              <label
                                className="cursor-pointer text-gray-light"
                                htmlFor="afrohouse"
                              >
                                Afrohouse
                              </label>
                            </div>
                          </div>
                          <div className="space-x-4">
                            <input
                              className="cursor-pointer"
                              type="checkbox"
                              id="hiplife"
                            />
                            <label
                              className="cursor-pointer text-gray-light"
                              htmlFor="hiplife"
                            >
                              Hip Life
                            </label>
                          </div>
                          <div className="space-x-4">
                            <input
                              className="cursor-pointer"
                              type="checkbox"
                              id="soul"
                            />
                            <label
                              className="cursor-pointer text-gray-light"
                              htmlFor="soul"
                            >
                              Soul
                            </label>
                          </div>
                          <div className="space-x-4">
                            <input
                              className="cursor-pointer"
                              type="checkbox"
                              id="rb"
                            />
                            <label
                              className="cursor-pointer text-gray-light"
                              htmlFor="rb"
                            >
                              R & B
                            </label>
                          </div>
                          <div className="space-x-4">
                            <input
                              className="cursor-pointer"
                              type="checkbox"
                              id="ampiano"
                            />
                            <label
                              className="cursor-pointer text-gray-light"
                              htmlFor="ampiano"
                            >
                              Ampiano
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-center mt-[1rem]">
                        <button className="bg-blue rounded-lg py-2 px-16 text-white font-roboto ">
                          Apply Filter
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ReviewsRatings;
