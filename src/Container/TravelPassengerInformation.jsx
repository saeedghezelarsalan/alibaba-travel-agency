import React, { useEffect, useReducer, useRef, useState } from "react";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useLanguage } from "../provider/Navbar";

const TravelPassengerInformation = () => {

    // reducer initialState 
  const initialState = {
    adult: 1,
    child: 0,
    baby: 0,
    total: 1,
    totalChildAndBaby: 0,
  };

//   reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "addAdult": {
        if (state.total == 9) {
          return {
            ...state,
            total: state.total,
            baby: state.baby,
            child: state.child,
          };
        }
        return {
          ...state,
          adult: state.adult + 1,
          total: state.total + 1,
        };
      }
      case "minusAdult": {
        if (state.adult == 1) {
          return {
            ...state,
            adult: state.adult ,
            total: state.total,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else if (state.adult == state.baby) {
          return {
            ...state,
            adult: state.adult,
            total: state.total,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else if (state.totalChildAndBaby > 3 && state.adult == 2) {
          return {
            ...state,
            adult: state.adult,
            total: state.total,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else if (state.totalChildAndBaby > 3 && state.adult == 2) {
          return {
            ...state,
            adult: state.adult,
            total: state.total,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else {
          return {
            ...state,
            adult: state.adult - 1,
            total: state.total - 1,
          };
        }
      }

      case "addChild": {
        if (state.total == 9) {
          return {
            ...state,
            total: state.total,
            baby: state.baby,
            child: state.child,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else if (state.adult == 1 && state.totalChildAndBaby >= 3) {
          return { ...state, child: state.child };
        } else if (state.adult == 2 && state.totalChildAndBaby >= 6) {
          return { ...state, child: state.child };
        } else if (state.adult == 2 && state.totalChildAndBaby >= 6) {
          return { ...state, child: state.child };
        } else if (state.adult == 3 && state.totalChildAndBaby >= 6) {
          return { ...state, child: state.child };
        } else {
          return {
            ...state,
            child: state.child + 1,
            total: state.total + 1,
            totalChildAndBaby: state.totalChildAndBaby + 1,
          };
        }
      }

      case "minusChild": {
        if (state.child == 0) {
          return {
            ...state,
            child: 0,
            total: state.total,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else {
          return {
            ...state,
            child: state.child - 1,
            total: state.total - 1,
            totalChildAndBaby: state.totalChildAndBaby - 1,
          };
        }
      }

      case "addBaby": {
        if (state.adult == 1 && state.baby == 1) {
          return {
            ...state,
            baby: state.baby,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else if (
          state.adult == 1 &&
          state.baby == 1 &&
          state.totalChildAndBaby == 6
        ) {
          return {
            ...state,
            baby: state.baby,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else if (state.adult == 2 && state.baby == 2) {
          return {
            ...state,
            baby: state.baby,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else if (state.adult == 2 && state.totalChildAndBaby == 6) {
          return {
            ...state,
            baby: state.baby,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else if (state.adult >= 3 && state.baby == 3) {
          return {
            ...state,
            baby: state.baby,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else if (state.total == 9) {
          return {
            ...state,
            total: state.total,
            baby: state.baby,
            child: state.child,
          };
        } else {
          return {
            ...state,
            baby: state.baby + 1,
            total: state.total + 1,
            totalChildAndBaby: state.totalChildAndBaby + 1,
          };
        }
      }

      case "minusBaby": {
        if (state.baby == 0) {
          return {
            ...state,
            baby: 0,
            total: state.total,
            totalChildAndBaby: state.totalChildAndBaby,
          };
        } else {
          return {
            ...state,
            baby: state.baby - 1,
            total: state.total - 1,
            totalChildAndBaby: state.totalChildAndBaby - 1,
          };
        }
      }

      default:
        return state;
    }
  };
  
//   useReducer
  const [count, dispatch] = useReducer(reducer, initialState);

//   useState
  const [openInputContainer, setOpenInputContainer] = useState(false)

//   Language
  const lang = useLanguage()
  const inputRef = useRef()

//   click outside for close div
  const clickOutside = (e) => {
    if (
      inputRef && inputRef.current && inputRef.current?.contains(e.target)
    ) {
      // inside click
      return;
    }
setOpenInputContainer(false)
  };

  // Do something after component renders
  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    // clean up function before running new effect
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  },[openInputContainer]);

  return (
    <div className="relative w-full h-12 lg:w-1/2 lg:h-full !z-[99]">
      <input
      onClick={()=>setOpenInputContainer(true)}
        
        type="text"
        placeholder={lang == "fa" ? `${digitsEnToFa(`${count.total}`)} مسافر` :
       `${count.total} Passenger`
      }
        className={`text-black  w-full border rounded-lg h-full ${lang == 'fa' ? 'pr-2' : 'pl-2'}`}
        // readonly ="readonly"
        readOnly
      />
      <div 
      ref={inputRef}
      className={`bottom-0 mt-1 rounded-lg right-0 w-full lg:!top-full  bg-white dark:bg-[#3b3b3b] dark:text-white h-auto lg:h-fit lg:w-[300px] p-3 space-y-6 shadow-2xl border ${openInputContainer ? 'fixed lg:absolute' : 'hidden'} ${lang == 'fa' ? 'lg:right-0' : 'lg:left-0'}`}>
        {/* بزرگسال */}
        <div className="flex justify-between items-center">
          <div className="w-auto ">
            {lang == 'fa' ? (
              <div className="flex">
                <p className="text-sm">بزرگسال</p>
                <span className="text-[#6c7680!important] text-sm mr-2">{`(${digitsEnToFa(12)} سال به بالا)`}</span>
              </div>
            ):( 
              <div className="flex">
                <p className="text-sm">Adult</p>
                <span className="text-[#6c7680!important] text-sm ml-2">(12 years and above)</span>
              </div>
           ) }
          </div>
          <div className="flex justify-between  w-auto  ">
            <button
              onClick={() => dispatch({ type: "addAdult", payload: 1 })}
              type="button"
              className="bg-[#0077DB] dark:bg-blue-500 rounded-lg w-[1.5rem] h-[1.5rem] flex justify-center items-center"
              aria-label="افزودن"
            >
              <svg viewBox="0 0 24 24" width="16px" height="16px" fill="white">
                <path d="M12 3c.585 0 1.065.446 1.12 1.017l.005.108v6.75h6.75a1.125 1.125 0 0 1 .108 2.245l-.108.005h-6.75v6.75a1.125 1.125 0 0 1-2.245.108l-.005-.108v-6.75h-6.75a1.125 1.125 0 0 1-.108-2.245l.108-.005h6.75v-6.75C10.875 3.504 11.379 3 12 3Z"></path>
              </svg>
            </button>
            
            {lang == 'fa' ? (
              <p className="text-center min-w-[30px]">
            {digitsEnToFa(`${count.adult}`) }
            </p>
            ): (
              <p className="text-center min-w-[30px]">
              {count.adult}
              </p>
            )}
            <button
              onClick={() => dispatch({ type: "minusAdult", payload: 1 })}
              type="button"
              className={`bg-[#0077DB] dark:bg-blue-500 rounded-lg w-[1.5rem] h-[1.5rem] flex justify-center items-center ${count.adult == 1 ? 'cursor-not-allowed opacity-[.525]' : 'cursor-pointer'}`}
              aria-label="کاستن"
            >
              <svg viewBox="0 0 24 24" width="16px" height="16px" fill="white"><path d="M19.875 10.875a1.125 1.125 0 0 1 .108 2.245l-.108.005H4.125a1.125 1.125 0 0 1-.108-2.245l.108-.005h15.75Z"></path></svg>
            </button>
          </div>
        </div>
        {/* کودک */}
        <div className="flex justify-between items-center">
          <div className="w-auto ">
            {lang == 'fa' ? (
              <div className="flex">
                <p className="text-sm">کودک</p>
                <span className="text-[#6c7680!important] text-sm mr-2">{`(${digitsEnToFa(12)} سال به بالا)`}</span>
              </div>
            ):( 
              <div className="flex">
                <p className="text-sm">Child</p>
                <span className="text-[#6c7680!important] text-sm ml-2">(12 years and above)</span>
              </div>
           ) }
          </div>
          <div className="flex justify-between  w-auto  ">
            <button
              onClick={() => dispatch({ type: "addChild", payload: 1 })}
              type="button"
              className={`bg-[#0077DB] dark:bg-blue-500 rounded-lg w-[1.5rem] h-[1.5rem] flex justify-center items-center `}
              aria-label="افزودن"
            >
              <svg viewBox="0 0 24 24" width="16px" height="16px" fill="white">
                <path d="M12 3c.585 0 1.065.446 1.12 1.017l.005.108v6.75h6.75a1.125 1.125 0 0 1 .108 2.245l-.108.005h-6.75v6.75a1.125 1.125 0 0 1-2.245.108l-.005-.108v-6.75h-6.75a1.125 1.125 0 0 1-.108-2.245l.108-.005h6.75v-6.75C10.875 3.504 11.379 3 12 3Z"></path>
              </svg>
            </button>
            {lang == 'fa' ? (
              <p className="text-center min-w-[30px]">
            {digitsEnToFa(`${count.child}`) }
            </p>
            ): (
              <p className="text-center min-w-[30px]">
              {count.child}
              </p>
            )}
            <button
              onClick={() => dispatch({ type: "minusChild", payload: 1 })}
              type="button"
              className={`bg-[#0077DB] dark:bg-blue-500 rounded-lg w-[1.5rem] h-[1.5rem] flex justify-center items-center ${count.child == 0 ? 'cursor-not-allowed opacity-[.525]' : 'cursor-pointer'}`}
              aria-label="افزودن"
            >
              <svg viewBox="0 0 24 24" width="16px" height="16px" fill="white"><path d="M19.875 10.875a1.125 1.125 0 0 1 .108 2.245l-.108.005H4.125a1.125 1.125 0 0 1-.108-2.245l.108-.005h15.75Z"></path></svg>
            </button>
          </div>
        </div>
        {/* نوزاد */}
        <div className="flex justify-between items-center w-auto">
          <div className="w-auto ">
           {lang == 'fa' ? (
              <div className="flex">
                <p className="text-sm">نوزاد</p>
                <span className="text-[#6c7680!important] text-sm mr-2">
                  {`(${digitsEnToFa(10)} روز تا ${digitsEnToFa(2)} سال)`}
                  </span>
              </div>
            ):( 
              <div className="flex">
                <p className="text-sm">Child</p>
                <span className="text-[#6c7680!important] text-sm ml-2">(12 years and above)</span>
              </div>
           ) }
          </div>
          <div className="flex justify-between w-fit  ">
            <button
              onClick={() => dispatch({ type: "addBaby", payload: 1 })}
              type="button"
              className="bg-[#0077DB]  dark:bg-blue-500 rounded-lg w-[1.5rem] h-[1.5rem] flex justify-center items-center"
              aria-label="افزودن"
            >
              <svg viewBox="0 0 24 24" width="16px" height="16px" fill="white">
                <path d="M12 3c.585 0 1.065.446 1.12 1.017l.005.108v6.75h6.75a1.125 1.125 0 0 1 .108 2.245l-.108.005h-6.75v6.75a1.125 1.125 0 0 1-2.245.108l-.005-.108v-6.75h-6.75a1.125 1.125 0 0 1-.108-2.245l.108-.005h6.75v-6.75C10.875 3.504 11.379 3 12 3Z"></path>
              </svg>
            </button>
            {lang == 'fa' ? (
              <p className="text-center min-w-[30px]">
            {digitsEnToFa(`${count.baby}`) }
            </p>
            ): (
              <p className="text-center min-w-[30px]">
              {count.baby}
              </p>
            )}
            <button
              onClick={() => dispatch({ type: "minusBaby", payload: 1 })}
              type="button"
              className={`bg-[#0077DB] dark:bg-blue-500 rounded-lg w-[1.5rem] h-[1.5rem] flex justify-center items-center ${count.baby == 0 ? 'cursor-not-allowed opacity-[.525]' : 'cursor-pointer'} `}
              aria-label="افزودن"
            >
              <svg viewBox="0 0 24 24" width="16px" height="16px" fill="white"><path d="M19.875 10.875a1.125 1.125 0 0 1 .108 2.245l-.108.005H4.125a1.125 1.125 0 0 1-.108-2.245l.108-.005h15.75Z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelPassengerInformation;