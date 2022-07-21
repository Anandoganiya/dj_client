import React, { useState } from "react";
import { Sidebar } from "../components";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className=" grid grid-cols-desk t max-2md:grid-cols-mobile w-full">
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

      {/* home container */}
      <div className="max-w-[150rem] ">
        {/* profile logo */}
        <div
          className="mt-[2.313rem] mr-[2.313rem]  max-2md:p-2 flex justify-between 
          items-center max-2md:fixed w-full bg-white max-2md:m-0 p-1"
        >
          <div
            onClick={() => setShowMenu(true)}
            className={`mr-4 max-2md:visible invisible text-3xl cursor-pointer`}
          >
            <HiMenuAlt2 />
          </div>
          <div className="w-[3.5rem]">
            <Link to="/user-profile">
              <img
                className="w-full rounded-full cursor-pointer"
                src="./assets/profile/profile.png"
                alt="profile"
              />
            </Link>
          </div>
        </div>
        {/* content container */}
        <div className=" w-auto mx-[41px] max-2md:mt-[5rem]  mt-[1.125rem] mb-[46px]">
          <div className="w-full">
            <h2 className="space-x-1 mb-2 max-2md:flex flex-wrap">
              <span className="2xl:text-[30px] text-[23px] font-[600] font-inter">
                Total Earnings
              </span>
              <small className="text-[14px] text-[rgba(74, 74, 74, 1)] self-end">
                (24 feb to 28 Mar)
              </small>
            </h2>
            <h1 className="2xl:text-[70px] text-5xl text-blue font-[600] space-x-4 font-inter">
              <span>$</span>
              <span>1,623</span>
            </h1>
            <figure className="w-full">
              <img className="w-full" src="./assets/images/dj.png" alt="dj" />
            </figure>
            {/* cards */}
            <div
              className="w-[95%] mx-auto font-inter  flex flex-wrap justify-around 
              text-[30px] max-2md:text-[1.5rem] text-white"
            >
              <div
                className=" max-2md:mb-4 mb-2 w-auto max-2md:w-full max-2md:px-2 px-[64px] flex flex-col 
               items-center shadow-item-shadow rounded-2xl bg-red-light"
              >
                <figure className="w-[50px] mt-[31px] ">
                  <img className="w-full" src="/assets/icons/star.png" alt="" />
                </figure>
                <p className=" mb-[32px] mt-4 w-[max-content]">
                  Upcoming Events
                </p>
              </div>
              <div
                className="mb-2 w-auto max-2md:w-full max-2md:px-2 px-[64px] flex flex-col  
              items-center shadow-item-shadow rounded-2xl bg-red-light"
              >
                <figure className="w-[50px] mt-[31px]">
                  <img className="w-full" src="/assets/icons/star.png" alt="" />
                </figure>
                <p className=" mb-[32px] mt-4 tracking-wide w-[max-content]">
                  Reviews/Ratings
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
