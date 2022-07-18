import React, { useState } from "react";
import allTags from "../../content/tages";
const Tages = ({ setIsShow }) => {
  const [selectTag, setSelectTag] = useState([]);

  const handleTages = (e) => {
    e.preventDefault();
    console.log("make api call");
    setIsShow(3);
  };

  // selecting the tags
  const handleToggle = (selectedTagName) => {
    const toggleTags = selectTag.includes(selectedTagName)
      ? selectTag.filter((tag) => tag !== selectedTagName)
      : [...selectTag, selectedTagName];
    setSelectTag(toggleTags);
  };

  return (
    <div
      className="bg-white absolute 2xl:w-[33.438rem] w-[30rem] min-h-[38rem] max-lg:right-[0rem] 
        max-lg:max-w-[100%] max-sm:w-[100%] max-sm:h-[70%] max-sm:top-[-11rem]
        2xl:h-auto  overflow-auto 2xl:top-[-6.5rem] right-[2.313rem]  top-[-6rem] max-lg:top-[-5.5rem]
        text-black-darkest font-bold z-10 rounded-[50px] max-sm:rounded-none
        flex flex-col flex-nowrap justify-center"
    >
      <div
        className=" h-[24px] w-[360px] 
        max-sm:ml-4 flex items-end space-x-2
        2xl:ml-[88px] ml-[55px] mt-[49px] max-lg:mt-[2rem] cursor-pointer mb-[29px]"
      >
        <div className="w-[24px] h-[24px] ">
          <img
            className="w-full"
            src="/assets/icons/prev_arrow.png"
            alt="prev arrow icon"
          />
        </div>
        <span
          onClick={() => {
            setIsShow(1);
          }}
          className="text-sm text-blue underline font-normal"
        >
          Back
        </span>
      </div>

      <div className="w-[360px] mx-auto max-sm:w-[90%]">
        <p className=" text-black-dark font-normal text-[1.25rem] mb-[32px]">
          Welcome DJ,
        </p>
        <div className=" 2xl:w-full w-[95%] mt-[2.063rem] max-sm:mt-4">
          <form className="w-full" onSubmit={handleTages}>
            <div
              className="w-full text-[12px] flex justify-between max-sm:justify-evenly
           flex-wrap font-roboto font-normal gap-1 text-black-dark"
            >
              {allTags.map((tag) => {
                return (
                  <TagItem key={tag.id} tag={tag} handleToggle={handleToggle} />
                );
              })}
            </div>

            <div className="w-full mt-[2.063rem] mb-4 2xl:mb-[4.563rem] flex justify-between">
              <button
                onClick={() => {
                  setIsShow(3);
                }}
                className="h-[3.125rem] w-full rounded-3xl text-center text-black "
              >
                Skip
              </button>
              <button
                className="h-[3.125rem] font-bold rounded-3xl w-full bg-blue 
            text-center  text-white"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
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

export default Tages;
