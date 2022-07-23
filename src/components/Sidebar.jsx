import React, { useState } from "react";
import { Link } from "react-router-dom";
import djMenuLink from "../content/djMenuLink";
import { HiMenuAlt2 } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";
const Sidebar = ({ showMenu, setShowMenu }) => {
  const selectedOption = localStorage.getItem("selectedOption") || 0;
  const [isActive, setIsActive] = useState(Number(selectedOption));
  const navigate = useNavigate();
  const selectedMenuItem = (menuId) => {
    localStorage.setItem("selectedOption", menuId);
    setIsActive(menuId);
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  library.add(faArrowRightFromBracket);
  return (
    <aside
      className={`bg-blue-darkest sticky top-0 h-screen text-white max-2md:fixed 
    transition-all duration-300 delay-100 ease-linear ${
      showMenu ? "left-0" : "left-[-100%]"
    }
     w-[320px] z-30`}
    >
      {/* logo */}
      <div className="pl-[42px] pt-[29px] select-none flex justify-between items-center">
        <div
          className="w-[71px] h-[71px] bg-blue-light rounded-full 
          flex flex-col justify-center items-center text-[1.5rem] leading-5"
        >
          <div className="space-x-1">
            <span>S</span>
            <span>P</span>
          </div>
          <div className="space-x-1">
            <span>O</span>
            <span>T</span>
          </div>
        </div>
        <div
          onClick={() => setShowMenu(false)}
          className={`mr-4 max-2md:visible invisible text-3xl cursor-pointer`}
        >
          <HiMenuAlt2 />
        </div>
      </div>
      {/* menu */}
      <div className="mt-[82px] relative h-[70%]">
        {djMenuLink.map((link, index) => (
          <div className="mb-[7px]" key={link.linkName}>
            <Link to={link.slug}>
              <div
                onClick={() => selectedMenuItem(index)}
                className={`flex items-center min-w-[218px] max-w-[max-content] h-[40px] pl-[1rem]  py-[10px] 
              hover:bg-blue-light rounded-r-3xl hover:shadow-menu_item-shadow
              transition-all delay-75 duration-75 ease-linear ${
                isActive === index ? "bg-blue-light" : ""
              }`}
              >
                <img
                  src={`/assets/icons/${link.iconImage}`}
                  alt={link.linkName}
                  className="w-[1rem] h-[1rem] mr-[23px]"
                />
                <div className="text-[20px] w-full align-center font-gill">
                  {link.linkName}
                </div>
              </div>
            </Link>
          </div>
        ))}

        <div className="absolute bottom-[1rem]">
          <div className="mb-[7px]">
            <Link to="/messages">
              <div
                onClick={() => selectedMenuItem(5)}
                className={`flex items-center min-w-[218px] max-w-[max-content] h-[40px] pl-[1rem]  py-[10px] 
               hover:bg-blue-light rounded-r-3xl hover:shadow-menu_item-shadow
                transition-all delay-75 duration-75 ease-linear ${
                  isActive === 5 ? "bg-blue-light" : ""
                }`}
              >
                <img
                  src={`/assets/icons/message.png`}
                  alt="message icon"
                  className="w-[1rem] h-[1rem] mr-[23px]"
                />
                <div className="text-[20px] w-full align-center font-gill">
                  Messages
                </div>
              </div>
            </Link>
          </div>
          <div className="mb-[7px]">
            {/* <Link to="/"> */}
            <div
              onClick={() => logOut()}
              className="flex items-center min-w-[218px] max-w-[max-content] h-[40px] pl-[1rem]  py-[10px] 
               hover:bg-blue-light rounded-r-3xl hover:shadow-menu_item-shadow
                transition-all delay-75 duration-75 ease-linear cursor-pointer"
            >
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className="w-[1rem] h-[1rem] mr-[23px]"
              />
              <div className="text-[20px] w-full align-center font-gill">
                Log Out
              </div>
            </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
