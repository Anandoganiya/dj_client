import React, { useState, useEffect } from "react";
import { Sidebar } from "../components";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getCurrentUser, updateUserProfile } from "../reducers/userSlice";
import { HiMenuAlt2 } from "react-icons/hi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const BookingRequest = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectTag, setSelectTag] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const [djName, setDjName] = useState("");
  const [djBio, setDjBio] = useState();
  library.add(faLocationDot, faCalendar, faXmarkCircle);
  useEffect(() => {
    // dispatch(getCurrentUser(user));
  }, [dispatch, user]);

  const handleProfileForm = (e) => {
    e.preventDefault();
    const profile = {
      djName,
      djBio,
    };
    // dispatch(updateUserProfile({ profile, accessToken: user.data.token }));
  };

  // selecting the tags
  const handleToggle = (selectedTagName) => {
    const toggleTags = selectTag.includes(selectedTagName)
      ? selectTag.filter((tag) => tag !== selectedTagName)
      : [...selectTag, selectedTagName];
    setSelectTag(toggleTags);
  };

  return (
    // <div className=" grid grid-cols-desk max-2md:grid-cols-mobile w-full">
    //   <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />

    //   {/* home container */}
    //   <main className="max-w-[150rem] ">
    //     <div
    //       className="mt-[2.313rem] mr-[2.313rem] flex justify-between items-center z-10
    //       max-2md:fixed w-full bg-white max-2md:m-0 p-1"
    //     >
    //       <div
    //         onClick={() => setShowMenu(true)}
    //         className={`ml-4 max-2md:visible invisible text-3xl cursor-pointer`}
    //       >
    //         <HiMenuAlt2 />
    //       </div>
    //       <div className="w-[3.5rem]">
    //         <img
    //           className="w-full  rounded-full"
    //           src="./assets/profile/profile.png"
    //           alt="profile"
    //         />
    //       </div>
    //     </div>
    <div className="mx-[41px] max-sm:mx-4 max-2md:mt-[5rem]">
      <div className="font-inter">
        <button className="text-[20px] py-[16px] px-[21px] rounded-xl tracking-widest max-sm:text-[1rem]">
          Accepted
        </button>
        <button
          className="text-[20px] py-[16px] px-[21px] bg-red-light ml-[30px]  max-sm:ml-4 max-sm:text-[1rem]
             rounded-xl tracking-widest text-white"
        >
          Rejected
        </button>
      </div>
      <div className="mt-[56px]">
        {/*  block 1 */}
        <div className="flex justify-between max-md:flex-col shadow-item-shadow rounded-2xl font-inter">
          <div className="flex max-md:flex-col">
            <div className="shadow-item-shadow rounded-2xl">
              <figure className="">
                <img
                  className="w-[157px] max-md:w-full max-md:h-[20rem] rounded-t-2xl h-[127px] object-cover"
                  src="./assets/images/mount.jpg"
                  alt="dj name"
                />
                <span className="font-[700] text-[22px] pl-[4px] pt-[12px]  max-md:block max-md:text-center">
                  Dj jeffz
                </span>
              </figure>
            </div>
            <div className="mt-[28px] ml-[29px] font-normal text-[20px] tracking-widest">
              <div className="flex items-center">
                <span className="">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {/* <img
                        className=""
                        src="./assets/icons/location.png"
                        alt=""
                      /> */}
                </span>
                <div className="ml-[13px]">
                  <span>14 Thermas st, </span>
                  <p>New york</p>
                </div>
              </div>
              <div className="flex items-center mt-[23px]">
                <span>
                  <FontAwesomeIcon icon={faCalendar} />
                  {/* <img src="./assets/icons/location.png" alt="" /> */}
                </span>
                <span className="ml-[13px]">21/06/2112</span>
              </div>
            </div>
          </div>
          <div className="borde flex flex-col items-center bg-gray-lighter max-md:mt-4">
            <figure className="mt-[40px] mb-[15px] border p-1 border-red-light ">
              <img src="./assets/icons/pending.png" alt="pending state" />
            </figure>
            <span className="pl-[12px] text-[30px] mb-[12px] font-bold text-red-light pr-[5px] font-roboto">
              PENDING
            </span>
          </div>
        </div>
        {/* block 2 */}
        <div className="flex justify-between max-md:flex-col shadow-item-shadow rounded-2xl font-inter mt-[58px]">
          <div className="flex max-md:flex-col">
            <div className="shadow-item-shadow rounded-2xl">
              <figure className="">
                <img
                  className="w-[157px] max-md:w-full max-md:h-[20rem] rounded-t-2xl h-[127px] object-cover"
                  src="./assets/images/mount.jpg"
                  alt="dj name"
                />
                <span className="font-[700] text-[22px] pl-[4px] pt-[12px]  max-md:block max-md:text-center">
                  Dj jeffz
                </span>
              </figure>
            </div>
            <div className="mt-[28px] ml-[29px] font-normal text-[20px] tracking-widest">
              <div className="flex items-center">
                <span className="">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {/* <img
                        className=""
                        src="./assets/icons/location.png"
                        alt=""
                      /> */}
                </span>
                <div className="ml-[13px]">
                  <span>14 Thermas st, </span>
                  <p>New york</p>
                </div>
              </div>
              <div className="flex items-center mt-[23px]">
                <span>
                  <FontAwesomeIcon icon={faCalendar} />
                  {/* <img src="./assets/icons/location.png" alt="" /> */}
                </span>
                <span className="ml-[13px]">21/06/2112</span>
              </div>
            </div>
          </div>
          <div className="borde flex flex-col items-center bg-gray-lighter max-md:mt-4">
            <figure className="mt-[40px] mb-[15px] border p-1 border-red-light ">
              <img src="./assets/icons/pending.png" alt="pending state" />
            </figure>
            <span className="pl-[12px] text-[30px] mb-[12px] font-bold text-red-light pr-[5px] font-roboto">
              PENDING
            </span>
          </div>
        </div>
        {/* block 3 */}
        <div className="flex justify-between max-md:flex-col shadow-item-shadow rounded-2xl font-inter mt-[58px]">
          <div className="flex max-md:flex-col">
            <div className="shadow-item-shadow rounded-2xl">
              <figure className="">
                <img
                  className="w-[157px] max-md:w-full max-md:h-[20rem] rounded-t-2xl h-[127px] object-cover"
                  src="./assets/images/mount.jpg"
                  alt="dj name"
                />
                <span className="font-[700] text-[22px] pl-[4px] pt-[12px]  max-md:block max-md:text-center">
                  Dj jeffz
                </span>
              </figure>
            </div>
            <div className="mt-[28px] ml-[29px] font-normal text-[20px] tracking-widest">
              <div className="flex items-center">
                <span className="">
                  <FontAwesomeIcon icon={faLocationDot} />
                  {/* <img
                        className=""
                        src="./assets/icons/location.png"
                        alt=""
                      /> */}
                </span>
                <div className="ml-[13px]">
                  <span>14 Thermas st, </span>
                  <p>New york</p>
                </div>
              </div>
              <div className="flex items-center mt-[23px]">
                <span>
                  <FontAwesomeIcon icon={faCalendar} />
                  {/* <img src="./assets/icons/location.png" alt="" /> */}
                </span>
                <span className="ml-[13px]">21/06/2112</span>
              </div>
            </div>
          </div>
          <div className="borde flex flex-col items-center bg-gray-lighter max-md:mt-4">
            <figure className="mt-[40px] mb-[15px]  ">
              <FontAwesomeIcon
                icon={faXmarkCircle}
                className="h-[70px] w-[70px] text-red-light"
              />
              {/* <img src="./assets/icons/pending.png" alt="pending state" /> */}
            </figure>
            <span className="pl-[12px] text-[30px] mb-[12px] font-bold text-red-light pr-[5px] font-roboto">
              DECLINE
            </span>
          </div>
        </div>
      </div>
    </div>
    //   </main>
    // </div>
  );
};

export default BookingRequest;
