import React, { useReducer, useState } from "react";
import MainOriginAndDestination from "../Container/MainOriginAndDestination";
import { useLanguage } from "../provider/Navbar";

const SmallOriginAndDestination = ({ iranState }) => {

  const initialState = {
    origin: "",
    destination: "",
    swip: true,
  };

  
  const reducer = (state, action) => {
    switch (action.type) {
      case "originValue": {
        if (state.origin == "") {
          return { ...state, origin: action.payload, swip: true };
        } else {
          return { ...state, origin: action.payload, swip: false };
        }
      }
      case "destinationValue": {
        if (state.destination == "") {
          return { ...state, destination: action.payload, swip: true };
        } else {
          return { ...state, destination: action.payload, swip: false };
        }
      }
      case "swipInput": {
        return {
          ...state,
          destination: state.origin,
          origin: state.destination,
        };
      }

      default:
        return state;
    }
  };

  //   useReducer
  const [originInputs, originInputsDispatch] = useReducer(
    reducer,
    initialState
  );

  //   useState
  const [focusOriginInput, setFocusOriginInput] = useState(false);

  const swipBtn = (e) => {
    e.preventDefault();
    originInputsDispatch({ type: "swipInput" });
  };

  const lang = useLanguage();

  return (
    <div className="relative flex flex-col lg:flex-row items-center h-full  w-full">
      <div className="relative h-12 w-full">
        <input
          onClick={() => setFocusOriginInput(true)}
          type="text"
          value={originInputs.origin}
          placeholder={lang == "fa" ? "مبدا (شهر)" : "origin (city)"}
          className={`w-full h-full border rounded-tr-lg rounded-tl-lg  py-2 dark:text-[#b3aeae] ${
            lang == "fa" ? "pr-4" : "pl-4"
          }`}
          autoComplete="off"
          readOnly
        />
      </div>
      <div className="relative h-12 w-full">
        <input
          onClick={() => setFocusOriginInput(true)}
          value={originInputs.destination}
          type="text"
          placeholder={lang == "fa" ? "مقصد (شهر)" : "destination (city)"}
          className={`w-full h-full dark:text-[#b3aeae] border rounded-br-lg rounded-bl-lg py-2 ${
            lang == "fa" ? "pr-4" : "pl-4"
          } `}
          autoComplete="off"
          readOnly
        />
      </div>
      <button
        onClick={swipBtn}
        disabled={lang == "fa" && originInputs.swip ? true : false}
        className={`absolute left-[50%] -translate-x-1/2 top-[50%] -translate-y-1/2 border rounded-full bg-white 
            
              ${
                originInputs.swip
                  ? "disabled:cursor-not-allowed"
                  : "cursor-pointer"
              }
             `}
      >
        <svg
          viewBox="0 0 24 24"
          width="1.5em"
          fill="currentColor"
          className="scale-x-75"
        >
          <path d="m16.96 12.157.07.063 3.75 3.75a.757.757 0 0 1 .06.067l-.06-.067a.748.748 0 0 1 .22.53v.025a.728.728 0 0 1-.003.039L21 16.5a.747.747 0 0 1-.147.446l-.01.014-.008.01-.055.06-3.75 3.75a.75.75 0 0 1-1.123-.99l.063-.07 2.469-2.47H8.25a.75.75 0 0 1-.087-1.495l.087-.005h10.189l-2.47-2.47a.75.75 0 0 1-.062-.99l.063-.07a.75.75 0 0 1 .99-.063ZM8.03 3.22a.75.75 0 0 1 .063.99l-.063.07-2.47 2.47h10.19a.75.75 0 0 1 .088 1.495l-.088.005H5.56l2.47 2.47a.75.75 0 0 1 .063.99l-.063.07a.75.75 0 0 1-.99.063l-.07-.063-3.75-3.75-.055-.06a.644.644 0 0 1-.005-.007l.06.067A.756.756 0 0 1 3 7.5v-.014a.47.47 0 0 1 .003-.053L3 7.5a.756.756 0 0 1 .22-.53l3.75-3.75a.75.75 0 0 1 1.06 0Z"></path>
        </svg>
      </button>
      <MainOriginAndDestination
        iranStates={iranState}
        openToggle={focusOriginInput}
        closeToggle={() => setFocusOriginInput(false)}
        setOriginInputs={originInputsDispatch}
      />
    </div>
  );
};

export default SmallOriginAndDestination;