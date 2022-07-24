import React, { useState, useEffect } from "react";
import allTags from "../content/tages";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getCurrentUser, updateUserProfile } from "../reducers/userSlice";
const UserProfile = () => {
  const [selectTag, setSelectTag] = useState([]);
  const { user } = useSelector((state) => state.auth);
  const { currentUser } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const [djName, setDjName] = useState("");
  const [djBio, setDjBio] = useState();

  useEffect(() => {
    dispatch(getCurrentUser(user));
  }, [dispatch, user]);

  const handleProfileForm = (e) => {
    e.preventDefault();
    const profile = {
      djName,
      djBio,
    };
    dispatch(updateUserProfile({ profile, accessToken: user.data.token }));
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
    //       className="mt-[2.313rem] mr-[2.313rem] flex justify-between items-center
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
    <div className="mx-[41px] max-sm:mx-4 max-2md:mt-[5rem] ">
      <h2 className="text-[30px] font-semibold font-inter uppercase mb-[33px]">
        PROFILE
      </h2>

      <div className=" w-full">
        {/*---------- profile container ---------------*/}
        <div
          className="rounded-3xl shadow-item-shadow items-center max-w-full  
            flex md:justify-between justify-center flex-wrap "
        >
          <div className="flex  justify-center flex-wrap">
            <div className=" mt-[1rem] ml-[28px] mb-[21px]">
              <figure className="w-full">
                <img
                  className="w-full"
                  src="./assets/profile/large_profile.png"
                  alt="user profile"
                />
              </figure>
              <p className="text-sm mt-[5px] text-center font-gill font-normal">
                Current Profile Photo
              </p>
            </div>
            <div className="flex flex-col justify-center  items-center font-inter sm:ml-[64px] ml-[1rem]  leading-7">
              <h2 className="font-semibold text-[30px]">
                {currentUser && currentUser.data.user.djName}
              </h2>
              <p className="font-light text-[15px] xl:self-start ">
                34 Odum Lane,East Legon
              </p>
            </div>
          </div>
          {/* photo upload */}
          <div className=" xl:w-auto w-full xl:mr-[28px] m-0 flex justify-center">
            <div className="border-dotted w-[max-content] mx-auto xl:mb-0 mb-4  border-gray-light border-2 px-[22px] py-[15px]">
              <figure className="w-full flex justify-center mb-[11px]">
                <img
                  className="w-[1rem] h-[1rem] "
                  src="./assets/icons/photo.png"
                  alt="upload profile"
                />
              </figure>
              <div className="flex flex-col justify-center items-center">
                <strong className="mb-[8px] w-[max-content] tracking-wide font-gill">
                  Drag & Drop Photo
                </strong>
                <span className="text-red-light font-roboto">
                  Browse on device
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ------form container-------- */}
        <div className="flex justify-between  max-2xl:flex-wrap max-2xl:space-x-0  space-x-[55px] mb-8">
          <div className="rounded-3xl shadow-item-shadow mt-4 w-full min-w-[10.375rem] ">
            <div className=" w-[85%] mx-auto mt-[32px] mb-[27px]">
              <h3 className="mb-[30px]">Basic Information</h3>
              <form
                method="POST"
                className="w-full"
                onSubmit={handleProfileForm}
              >
                <div className="w-full mb-4">
                  <label
                    className="text-black-dark font-normal"
                    htmlFor="username"
                  >
                    User Name
                  </label>
                  <input
                    onChange={({ target }) => {
                      setDjName(target.value);
                    }}
                    value={djName}
                    className="placeholder:font-normal border border-gray text-gray outline-none 
                     rounded-3xl h-[3.125rem] pl-[24px] py-[15px] text-[0.875rem] w-full"
                    type="text"
                    name="username"
                    id="username"
                    placeholder={`${
                      currentUser && currentUser.data.user.djName
                    }`}
                  />
                </div>
                <div>
                  <label
                    className="text-black-dark font-normal"
                    htmlFor="personalBio"
                  >
                    Personal Bio
                  </label>
                  <textarea
                    onChange={({ target }) => {
                      setDjBio(target.value);
                    }}
                    valu={djBio}
                    placeholder={`${
                      currentUser && currentUser.data.user.djBio
                    }`}
                    className="placeholder:font-normal border border-gray text-gray outline-none
                     rounded-lg h-[128px] px-[24px] py-[15px] text-[0.875rem] w-full"
                    name="personalbio"
                    id="personalbio"
                  ></textarea>
                </div>
                <button
                  // disabled={isLoading}
                  className="w-full h-[3.125rem]
                     rounded-lg bg-blue text-center 2xl:mt-16 mt-[33px]  text-white"
                >
                  {/* {isLoading ? (
                        <span>
                          <svg
                            role="status"
                            className="inline mr-3 w-8 h-8 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      ) : ( */}
                  Confirm Update
                  {/* )} */}
                </button>
              </form>
            </div>
          </div>

          <div className="rounded-3xl shadow-item-shadow mt-4 min-w-[10.375rem] w-full">
            <div className=" w-[85%]  mx-auto mt-[18px] mb-[27px]">
              <h3 className="mb-[24px]">Sound Preferences</h3>
              <form method="POST" className="w-full">
                <div
                  className="w-full min-h-[260px] text-[12px] flex justify-between max-sm:justify-evenly
                      flex-wrap font-roboto font-normal gap-3 text-black-dark"
                >
                  {allTags.map((tag) => {
                    return (
                      <TagItem
                        key={tag.id}
                        tag={tag}
                        handleToggle={handleToggle}
                      />
                    );
                  })}
                </div>
                <button
                  //   disabled={isLoading}
                  className="w-full h-[3.125rem]
              rounded-lg bg-blue text-center 2xl:mt-16 mt-[42px]  text-white"
                >
                  {/* {isLoading ? (
                <span>
                  <svg
                    role="status"
                    className="inline mr-3 w-8 h-8 text-white animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              ) : ( */}
                  Confirm Update
                  {/* )} */}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* card container */}
        <div className="flex max-2xl:flex-wrap max-2xl:space-x-0 space-x-[55px] mb-8">
          <div className=" mt-4 w-full ">
            <div className="flex justify-between items-center mb-[52px]">
              <h2 className="font-bold text-[30px] tracking-wider">
                SUBSCRIPTION
              </h2>
              <small className="text-red-light text-[15px] font-bold">
                Upgrade
              </small>
            </div>
            <div className="flex justify-between max-xs:justify-center flex-wrap">
              <div
                className="  px-[63px] pt-[20.71px] shadow-item-shadow max-xs:w-full rounded-2xl bg-red-light 
                    flex flex-col justify-center items-center"
              >
                <figure className="mb-[9.96px]">
                  <img
                    className="w-[66.58] h-[66.33px]"
                    src="./assets/icons/pro.png"
                    alt="pro user"
                  />
                </figure>
                <figure className="">
                  <img
                    className=""
                    src="./assets/icons/proplus.png"
                    alt="pro user"
                  />
                </figure>
                <small className="text-white text-[10px] mb-[36px]">
                  (Active)
                </small>
              </div>
              <div
                className=" pt-[20.71px] px-[63px] sm:mt-0 max-xs:mt-5 max-xs:w-full shadow-item-shadow rounded-2xl 
                          flex flex-col justify-center items-center"
              >
                <figure>
                  <img
                    className=""
                    src="./assets/icons/elite.png"
                    alt="elite user"
                  />
                </figure>
                <div className="mt-[17.18px] mb-[36px] text-[30px] font-[600]">
                  ELITE
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-4 w-full">
            <div className="flex justify-between items-center mb-[52px]">
              <h2 className="font-bold text-[30px] tracking-wider">
                PAYMENT METHODS
              </h2>
              <small className="text-red-light text-[15px] font-bold">
                Add New
              </small>
            </div>
            <div className="w-full pt-[38.81px] shadow-item-shadow rounded-2xl">
              <div className="w-[80%] mx-auto">
                <div className="flex items-baseline justify-between  mb-[27px]">
                  <figure>
                    <img src="./assets/icons/visa.png" alt="visa payment" />
                  </figure>
                  <div className="font-[600] text-[30px] max-sm:text-[1rem] tracking-widest">
                    *** *** ****1234...
                  </div>
                </div>
                <hr />
                <div className="flex items-baseline justify-between mt-[27px] pb-[.8rem]">
                  <figure>
                    <img src="./assets/icons/master.png" alt="visa payment" />
                  </figure>
                  <div className="font-[600] text-[30px] max-sm:text-[1rem] tracking-widest">
                    *** *** ****1234...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div>{" "}
            close from top */}
      </div>
    </div>
    //   </main>
    // </div>
  );
};

const TagItem = ({ tag, handleToggle }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      onClick={() => {
        handleToggle(tag.tagName);
        setActive(!active);
      }}
      key={tag.id}
      className={`cursor-pointer hover:bg-blue hover:text-white 
        border border-black-dark hover:border-blue rounded-3xl select-none
        min-w-[72px] h-[30px]  p-3 flex justify-evenly items-center 
        ${active ? "bg-blue border-blue text-white" : "bg-white"} `}
    >
      {tag.tagName}
    </div>
  );
};

export default UserProfile;
