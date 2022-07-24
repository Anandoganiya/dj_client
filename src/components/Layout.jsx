import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./";
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from "react-icons/hi";

const Layout = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className=" grid grid-cols-desk max-2md:grid-cols-mobile w-full">
        <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

        {/* home container */}
        <main className="max-w-[150rem] relative">
          <div
            className="mt-[2.313rem] mr-[2.313rem] flex justify-between items-center z-10
          max-2md:fixed w-full bg-white max-2md:m-0 p-1"
          >
            <div
              onClick={() => setShowMenu(true)}
              className={`ml-4 max-2md:visible invisible text-3xl cursor-pointer`}
            >
              <HiMenuAlt2 />
            </div>
            <div className="w-[3.5rem] z-10">
              <Link to="/user-profile">
                <img
                  className="w-full rounded-full cursor-pointer"
                  src="./assets/profile/profile.png"
                  alt="profile"
                />
              </Link>
            </div>
          </div>
          {/* components */}
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
