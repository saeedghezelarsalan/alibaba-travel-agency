import React, { useEffect, useRef, useReducer } from "react";
import { useLanguage } from "../provider/Navbar";

const MainOriginAndDestination = ({
  iranStates,
  openToggle,
  closeToggle,
  setOriginInputs,
}) => {

    // useReducer initialState
  const initialState = {
    focusFirstInput: true,
    clickOrigin: "",
    changeOrigin: "",
    originInputChange: true,
    clickDestination: "",
    changeDestination: "",
    destinationInputChange: true,
    clickOutside: true,
    origin: true,
    swipeButton: true,
    busyItems: true,
    openToggle: false,
    onBlurOriginInput: false,
    onBlurDestinationInput: false,
  };

//   reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "originChangeHandler": {
        if (action.payload == "") {
          return {
            ...state,
            changeOrigin: action.payload,
            originInputChange: true,
            origin: true,
            focusFirstInput: true,
            busyItems: true,
          };
        } else {
          return {
            ...state,
            changeOrigin: action.payload,
            originInputChange: true,
            origin: true,
            focusFirstInput: true,
            busyItems: false,
          };
        }
      }
      case "destinationChangeHandler": {
        if (action.payload == "") {
          return {
            ...state,
            changeDestination: action.payload,
            destinationInputChange: true,
            origin: false,
            focusFirstInput: false,
            busyItems: true,
          };
        } else {
          return {
            ...state,
            changeDestination: action.payload,
            destinationInputChange: true,
            origin: false,
            focusFirstInput: false,
            busyItems: false,
          };
        }
      }

      case "focusOriginInput": {
        if (state.focusFirstInput == false) {
          return {
            ...state,
            focusFirstInput: true,
            origin: true,
            clickOutside: false,
            busyItems: true,
          };
        } else {
          return {
            ...state,
            focusFirstInput: true,
            origin: true,
            clickOutside: false,
            busyItems: true,
          };
        }
      }
      case "openSecondFocus": {
        return {
          ...state,
          focusFirstInput: false,
          origin: false,
          clickOutside: false,
          busyItems: true,
        };
      }
      case "originHandler": {
        if (
          action.payload === state.clickDestination &&
          state.clickDestination != ""
        ) {
          return {
            ...state,
            clickOrigin: action.payload,
            changeOrigin: action.payload,
            originInputChange: false,
            clickDestination: "",
            changeDestination: "",
            focusFirstInput: false,
            origin: false,
            onBlurOriginInput: true,
            clickOutside: "",
            swipeButton: true,
          };
        } else if (action.payload != "" && state.clickDestination == "") {
          return {
            ...state,
            origin: false,
            focusFirstInput: false,
            clickOrigin: action.payload,
            changeOrigin: action.payload,
            onBlurOriginInput: true,
            originInputChange: false,
            swipeButton: true,
          };
        } else {
          return {
            ...state,
            swipeButton: false,
            clickOrigin: action.payload,
            changeOrigin: action.payload,
            originInputChange: false,
            focusFirstInput: false,
            origin: true,
            clickOutside: true,
            openToggle: false,
            onBlurOriginInput: true,
          };
        }
      }

      case "destinationHandler": {
        if (action.payload === state.clickOrigin && state.clickOrigin != "") {
          return {
            ...state,
            clickDestination: action.payload,
            changeDestination: action.payload,
            destinationInputChange: false,
            clickOrigin: "",
            changeOrigin: "",
            focusFirstInput: true,
            origin: true,
            onBlurDestinationInput: true,
            swipeButton: true,
          };
        } else if (action.payload != "" && state.clickOrigin == "") {
          return {
            ...state,
            focusFirstInput: true,
            origin: true,
            clickDestination: action.payload,
            changeDestination: action.payload,
            destinationInputChange: false,
            onBlurDestinationInput: true,
            swipeButton: true,
          };
        } else {
          return {
            ...state,
            clickDestination: action.payload,
            changeDestination: action.payload,
            destinationInputChange: false,
            focusFirstInput: false,
            origin: false,
            clickOutside: true,
            openToggle: false,
            onBlurDestinationInput: true,
            swipeButton: false,
          };
        }
      }

      case "clickOutsides": {
        return {
          ...state,
          clickOutside: true,
          originInputChange: false,
          destinationInputChange: false,
        };
      }

      case "swipeInputsValue": {
        // if(state.originInputChange){
        //   return {...state,swipeButton:true}
        // }else{
        return {
          ...state,
          clickDestination: state.clickOrigin,
          clickOrigin: state.clickDestination,
        };

        // }
      }

      case "makefalse": {
        return { ...state, swipeButton: false };
      }

      case "maketrue": {
        return { ...state, swipeButton: true };
      }

      default:
        return state;
    }
  };

//   useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const [EnglishState, EnglishDispatch] = useReducer(reducer, initialState);

  //   ref
  const endInputRef = useRef();
  const startInputRef = useRef();
  const englishEndInputRef = useRef();
  const englishStartInputRef = useRef();
  const flights = useRef();
  const startRef = useRef();
  const endRef = useRef();
  
  //   language
  const lang = useLanguage();

  useEffect(() => {
    if (state.onBlurOriginInput) {
      lang == "fa" && startInputRef.current.blur();
    } else if (state.onBlurDestinationInput) {
      lang == "fa" && endInputRef.current.blur();
    }
  }, [state]);

//   click outside to close div
  const clickOutside = (e) => {
    if (
      flights.current.contains(e.target) ||
      (lang == "fa" && endRef.current.contains(e.target)) ||
      (lang == "fa" && startRef.current.contains(e.target)) ||
      (lang == "en" && englishEndInputRef.current.contains(e.target)) ||
      (lang == "en" && englishStartInputRef.current.contains(e.target))
    ) {
      // inside click
      return;
    }

    dispatch({ type: "clickOutsides" });
    EnglishDispatch({ type: "clickOutsides" });
  };

  // Do something after component renders
  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [state, EnglishState]);

//   onClicks
  const originClickHandler = (city) => {
    startInputRef.current.focus();
    dispatch({ type: "originHandler", payload: city.name });
  };

  const originClickHandlerEnglish = (city, e) => {
    englishStartInputRef.current.focus();
    EnglishDispatch({ type: "originHandler", payload: city.en });
  };

  const changeEndHandler = (e) => {
    dispatch({
      type: "destinationChangeHandler",
      payload: e.target.value,
    });
  };

  const destinationClickHandler = (city, e) => {
    endInputRef.current.focus();
    dispatch({ type: "destinationHandler", payload: city.name });
  };

  const destinationClickHandlerEnglish = (city, e) => {
    englishEndInputRef.current.focus();
    EnglishDispatch({ type: "destinationHandler", payload: city.en });
  };

  const swipeHandler = (e) => {
    e.preventDefault();
    {
      lang == "fa"
        ? dispatch({ type: "swipeInputsValue" })
        : EnglishDispatch({ type: "swipeInputsValue" });
    }
  };

//   useEffects

  useEffect(() => {
    if (openToggle) {
      setOriginInputs({ type: "originValue", payload: state.clickOrigin });
      setOriginInputs({
        type: "destinationValue",
        payload: state.clickDestination,
      });
    }
  }, [openToggle, state]);


  useEffect(() => {
    if (state.clickOutside == false && state.focusFirstInput && lang == "fa") {
      startInputRef.current.focus();
    } else if (
      state.clickOutside == false &&
      !state.focusFirstInput &&
      lang == "fa"
    ) {
      endInputRef.current.focus();
    } else {
      lang == "fa" && startInputRef.current.blur();
      lang == "fa" && endInputRef.current.blur();
    }
  }, [state]);

  useEffect(() => {
    if (
      EnglishState.clickOutside == false &&
      EnglishState.focusFirstInput &&
      lang == "en"
    ) {
      englishStartInputRef.current.focus();
    } else if (
      EnglishState.clickOutside == false &&
      !EnglishState.focusFirstInput &&
      lang == "en"
    ) {
      englishEndInputRef.current.focus();
    } else {
      lang == "en" && englishStartInputRef.current.blur();
      lang == "en" && englishEndInputRef.current.blur();
    }
  }, [EnglishState]);

  return (
    <div
      className={`fixed top-0 lg:relative z-[999] bg-white lg:bg-transparent flex flex-col justify-start transition-all lg:flex-row items-center h-full w-full px-2 lg:px-0 ${
        openToggle
          ? "-translate-x-0 transition-all "
          : "translate-x-full lg:-translate-x-0 transition-all "
      } `}
    >
      <div
        className="cursor-pointer lg:hidden mt-4 text-right w-full mr-4"
        onClick={closeToggle}
      >
        {lang == 'fa' ? 'بازگشت' : 'Back'}
      </div>
      <div className="relative w-full h-auto flex flex-col lg:flex-row py-1 mt-2 lg:mt-0">
        <div ref={startRef} className="relative h-12 w-full max-w-1/2">
          {lang == "fa" ? (
            <input
              type="text"
              ref={startInputRef}
              value={
                state.originInputChange ? state.changeOrigin : state.clickOrigin
              }
              onChange={(e) =>
                dispatch({
                  type: "originChangeHandler",
                  payload: e.target.value,
                })
              }
              onClick={() => dispatch({ type: "focusOriginInput" })}
              placeholder={lang == "fa" ? "مبدا (شهر)" : "origin (city)"}
              className={`w-full h-full border    py-2 dark:text-[#b3aeae] max-w-1/2 ${
                lang == "fa"
                  ? " pr-4 rounded-tr-lg rounded-tl-lg lg:rounded-tl-none lg:rounded-br-lg"
                  : "pl-4 lg:rounded-bl-lg lg:rounded-tl-lg"
              }`}
              autoComplete="off"
            />
          ) : (
            <input
              type="text"
              ref={englishStartInputRef}
              value={
                EnglishState.originInputChange
                  ? EnglishState.changeOrigin
                  : EnglishState.clickOrigin
              }
              onChange={(e) =>
                EnglishDispatch({
                  type: "originChangeHandler",
                  payload: e.target.value,
                })
              }
              onClick={() => EnglishDispatch({ type: "focusOriginInput" })}
              placeholder={lang == "fa" ? "مبدا (شهر)" : "origin (city)"}
              className={`w-full h-full border    py-2 dark:text-[#b3aeae] max-w-1/2 ${
                lang == "fa"
                  ? " pr-4 rounded-tr-lg rounded-tl-lg lg:rounded-tl-none lg:rounded-br-lg"
                  : "pl-4 lg:rounded-bl-lg lg:rounded-tl-lg"
              }`}
              autoComplete="off"
            />
          )}
        </div>
        <div ref={endRef} className="relative h-12 w-full">
          {lang == "fa" ? (
            <input
              ref={endInputRef}
              value={
                state.destinationInputChange
                  ? state.changeDestination
                  : state.clickDestination
              }
              onChange={(e) => changeEndHandler(e)}
              onClick={() => dispatch({ type: "openSecondFocus" })}
              type="text"
              placeholder={lang == "fa" ? "مقصد (شهر)" : "destination (city)"}
              className={`w-full h-full dark:text-[#b3aeae] border   py-2 focus:border-[1px] ${
                lang == "fa"
                  ? "pr-6 rounded-br-lg lg:rounded-br-none rounded-bl-lg lg:rounded-tl-lg"
                  : "pl-6 lg:rounded-br-lg lg:rounded-tr-lg"
              }`}
              autoComplete="off"
            />
          ) : (
            <input
              ref={englishEndInputRef}
              value={
                EnglishState.destinationInputChange
                  ? EnglishState.changeDestination
                  : EnglishState.clickDestination
              }
              onChange={(e) =>
                EnglishDispatch({
                  type: "destinationChangeHandler",
                  payload: e.target.value,
                })
              }
              onClick={() => EnglishDispatch({ type: "openSecondFocus" })}
              type="text"
              placeholder={lang == "fa" ? "مقصد (شهر)" : "destination (city)"}
              className={`w-full h-full dark:text-[#b3aeae] border   py-2 focus:border-[1px] ${
                lang == "fa"
                  ? "pr-6 rounded-br-lg lg:rounded-br-none rounded-bl-lg lg:rounded-tl-lg"
                  : "pl-6 lg:rounded-br-lg lg:rounded-tr-lg"
              }`}
              autoComplete="off"
            />
          )}
        </div>
        <button
          disabled={
            lang == "fa"
              ? state.swipeButton
                ? true
                : false
              : EnglishState.swipeButton
              ? true
              : false
          }
          onClick={(e) => swipeHandler(e)}
          className={`absolute left-[50%] scale-125 lg:scale-100 -translate-x-1/2 top-[50%] -translate-y-1/2 border rounded-full bg-white ${
            state.swipeButton ? "disabled:cursor-not-allowed" : "cursor-pointer"
          } `}
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
      </div>
      {lang == "fa" ? (
        <ul
          ref={flights}
          className={`sticky lg:absolute transition-all duration-150 w-full lg:w-1/2 top-[40px] lg:shadow-2xl lg:border lg: lg:top-[45px] h-auto lg:h-[300px] mt-2 bg-white dark:bg-[#3b3b3b] border-white border overflow-y-scroll scrollbar-hide overflow-hidden px-1 py-2   
        ${
          lang == "fa"
            ? `${
                state.focusFirstInput
                  ? "left-0 lg:left-1/2 transition-all"
                  : "left-0 lg:left-0 transition-all"
              }`
            : `${
                EnglishState.focusFirstInput
                  ? "right-0 lg:right-1/2 transition-all"
                  : "right-0 lg:right-0 transition-all"
              }`
        }
        ${state.clickOutside ? "hidden" : "block"}`}
        >
          {state.origin ? (
            <div>
              {state.busyItems ? (
                <div>
                  <p className="py-2 px-4 dark:text-white">پر تردد اول</p>
                  <div>
                    {iranStates
                      .filter((city) => city.busy == true)
                      .map((city) => (
                        <li
                          onClick={(e) => originClickHandler(city, e)}
                          key={city.id}
                          className="dark:text-white dark:hover:bg-slate-100 dark:hover:text-black cursor-pointer py-2 px-4"
                        >
                          {city.name}
                        </li>
                      ))}
                  </div>
                </div>
              ) : (
                <div>
                  {iranStates
                    .filter((city) => city.name.includes(state.changeOrigin))
                    .map((city) => (
                      <li
                        onClick={(e) => originClickHandler(city, e)}
                        key={city.id}
                        className="dark:text-white dark:hover:bg-slate-100 dark:hover:text-black cursor-pointer py-2 px-4"
                      >
                        {city.name}
                      </li>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              {state.busyItems ? (
                <div>
                  <p className="py-2 px-4 dark:text-white">پر تردد</p>
                  <div>
                    {iranStates
                      .filter((city) => city.busy == true)
                      .map((city) => (
                        <li
                          onClick={(e) => destinationClickHandler(city, e)}
                          key={city.id}
                          className="dark:text-white dark:hover:bg-slate-100 dark:hover:text-black cursor-pointer py-2 px-4"
                        >
                          {city.name}
                        </li>
                      ))}
                  </div>
                </div>
              ) : (
                <div>
                  {iranStates
                    .filter((city) =>
                      city.name.includes(state.changeDestination)
                    )
                    .map((city) => (
                      <li
                        onClick={(e) => destinationClickHandler(city, e)}
                        key={city.id}
                        className="dark:text-white dark:hover:bg-slate-100 dark:hover:text-black cursor-pointer py-2 px-4"
                      >
                        {city.name}
                      </li>
                    ))}
                </div>
              )}
            </div>
          )}
        </ul>
      ) : (
        <ul
          ref={flights}
          className={`sticky lg:absolute transition-all duration-150 w-full lg:w-1/2 top-[40px] lg:shadow-2xl lg:border lg: lg:top-[45px] h-auto lg:h-[300px] mt-2 bg-white dark:bg-[#3b3b3b] border-white border overflow-y-scroll scrollbar-hide overflow-hidden px-1 py-2   
        ${
          EnglishState.focusFirstInput
            ? "right-0 lg:right-1/2 transition-all"
            : "right-0 lg:right-0 transition-all"
        }
        ${EnglishState.clickOutside ? "hidden" : "block"}`}
        >
          {EnglishState.origin ? (
            <div>
              {EnglishState.busyItems ? (
                <div>
                  <p className="py-2 px-4 dark:text-white">پر تردد</p>
                  <div>
                    {iranStates
                      .filter((city) => city.busy == true)
                      .map((city) => (
                        <li
                          onClick={(e) => originClickHandlerEnglish(city, e)}
                          key={city.id}
                          className="dark:text-white dark:hover:bg-slate-100 dark:hover:text-black cursor-pointer py-2 px-4"
                        >
                          {city.en}
                        </li>
                      ))}
                  </div>
                </div>
              ) : (
                <div>
                  {iranStates
                    .filter((city) =>
                      city.name.includes(EnglishState.changeOrigin)
                    )
                    .map((city) => (
                      <li
                        onClick={(e) => originClickHandlerEnglish(city, e)}
                        key={city.id}
                        className="dark:text-white dark:hover:bg-slate-100 dark:hover:text-black cursor-pointer py-2 px-4"
                      >
                        {city.en}
                      </li>
                    ))}
                </div>
              )}
            </div>
          ) : (
            <div>
              {EnglishState.busyItems ? (
                <div>
                  <p className="py-2 px-4 dark:text-white">{lang == 'fa' ? 'پرتردد' : 'Busy'}</p>
                  <div>
                    {iranStates
                      .filter((city) => city.busy == true)
                      .map((city) => (
                        <li
                          onClick={(e) =>
                            destinationClickHandlerEnglish(city, e)
                          }
                          key={city.id}
                          className="dark:text-white dark:hover:bg-slate-100 dark:hover:text-black cursor-pointer py-2 px-4"
                        >
                          {city.en}
                        </li>
                      ))}
                  </div>
                </div>
              ) : (
                <div>
                  {iranStates
                    .filter((city) =>
                      city.en.includes(EnglishState.changeDestination)
                    )
                    .map((city) => (
                      <li
                        onClick={(e) => destinationClickHandlerEnglish(city, e)}
                        key={city.id}
                        className="dark:text-white dark:hover:bg-slate-100 dark:hover:text-black cursor-pointer py-2 px-4"
                      >
                        {city.en}
                      </li>
                    ))}
                </div>
              )}
            </div>
          )}
        </ul>
      )}
    </div>
  );
};

export default MainOriginAndDestination;