import React, { useState } from "react";
import { useLanguage } from "../provider/Navbar";

const Accordion = ({ accordions }) => {
  // useState
  const [click, setClick] = useState(false);
  //   Language
  const lang = useLanguage();
  //   Toggle Accordions
  const Toggle = (e) => {
    setClick((e) => !e);
  };

  return (
    <div className="w-full h-auto rounded-lg max-w-screen-2xl mx-auto select-none">
      <div className="bg-white dark:bg-[#1b344d] flex flex-col !mb-4 justify-start pt-5 shadow-md px-4 pb-1 items-start  w-full h-auto mt-2 rounded-lg select-none max-w-screen-2xl mx-auto ">
        <div
          className="flex items-center flex-row w-full select-none bg-transparent cursor-pointer text-[16px] border-b-1 pb-3"
          onClick={(e) => Toggle(e)}
          key={accordions.id}
        >
          <svg
            viewBox="0 0 32 32"
            width="32px"
            height="32px"
            className={`rounded-full bg-[#E8F9FC] fill-[#17A2B8] p-1 ${
              lang == "fa" ? "ml-3" : "mr-3"
            } `}
          >
            <path d="M19.256 22.54c0-1.902-.236-3.418-.708-4.548-.43-1.027-1.242-2.15-2.436-3.367l-.979-.967c-1.049-1.049-1.73-1.816-2.043-2.302a5.034 5.034 0 01-.862-2.834c0-1.34.332-2.368.996-3.083.664-.715 1.64-1.073 2.93-1.073 1.238 0 2.234.348 2.987 1.044.754.696 1.13 1.644 1.13 2.844H25.5c-.038-2.54-.906-4.552-2.604-6.033C21.197.741 18.95 0 16.154 0c-2.886 0-5.132.73-6.741 2.193C7.804 3.655 7 5.7 7 8.33c0 2.337 1.085 4.635 3.255 6.894l2.662 2.605c.945 1.085 1.43 2.655 1.456 4.71h4.883zm.364 6.702c0-.855-.265-1.544-.795-2.068-.53-.523-1.248-.785-2.154-.785-.92 0-1.644.271-2.174.814-.53.543-.794 1.222-.794 2.04 0 .778.258 1.432.775 1.962s1.248.795 2.193.795c.945 0 1.672-.265 2.183-.795.51-.53.766-1.184.766-1.963z"></path>
          </svg>
          <div className="text-sm md:text-base font-black  text-[#4B5259] dark:text-[#07ce39] ">
            {accordions.title}
          </div>
          <button
            className={`fill-[#6c7680] bg-white p-2 border-0 rounded-full cursor-pointer ${
              lang == "fa" ? "mr-auto" : "ml-auto"
            } `}
            aria-label="expand"
          >
            <svg viewBox="0 0 32 32" width="1em" height="1em" fill="dark:black">
              <path d="M28.354 9.737a1 1 0 011.383 1.44l-.091.086-13 11a1 1 0 01-1.186.079l-.106-.079-13-11a1 1 0 011.191-1.601l.101.075L16 20.19 28.354 9.737z"></path>
            </svg>
          </button>
        </div>

        <p
          className={`!text-[14px] text-black dark:text-white xl:!text-base px-4 text-justify xl:!text-basemb-1 ${
            click
              ? "max-h-screen  py-6  overflow-hidden transition-all ease-out duration-300 text-base"
              : "max-h-0 overflow-hidden transition-all ease-out  "
          }`}
        >
          {accordions.description}
        </p>
      </div>
    </div>
  );
};

export default Accordion;