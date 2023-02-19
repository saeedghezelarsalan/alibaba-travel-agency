import React, { FC, useEffect, useRef, useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import { useLanguage } from "../provider/Navbar";

const TwoWayDatePicker = ({ oneWay }) => {
// Language
  const lang = useLanguage();
// ref
  const datepickerRef = useRef();
// useState
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {  

    // setWindowSize(window.inner)
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

//   onClicks
  const Cancellation = (e) => {
    e.preventDefault();
    datepickerRef.current.closeCalendar();
  };

  const confirmation = (e) => {
    e.preventDefault();
    datepickerRef.current.closeCalendar();
  };

  return (
    <div className="flex h-12 items-center w-full lg:w-1/2 ">
      {!oneWay ? (
        <DatePicker
        value=""
        numberOfMonths={windowSize >= 1024 ? 2 : 1}
        disableYearPicker
        placeholder={lang == "fa" ? "تاریخ رفت" : "Departure date"}
        scrollSensitive={false}
        editable={false}
        calendar={lang == "en" ? null : persian}
        locale={lang == "en" ? null : persian_fa}
        hideYear
        style={{
          width: "100%",
          height: "100%",
          color: "#b3aeae",
        }}
        containerStyle={{
          width: "100%",
          height: "100%",
        }}
        calendarPosition={
          lang == "en"
            ? `${windowSize >= 1024 ? "bottom-start" : "bottom-center"}`
            : `${windowSize >= 1024 ? "bottom-end" : "bottom-center"}`
        }
        ref={datepickerRef}
      >
        <button style={{ margin: "1px" }} onClick={Cancellation}>
          لغو
        </button>
        <button style={{ margin: "1px" }} onClick={confirmation}>
          تایید
        </button>
      </DatePicker>
        
      ) : (
        <div className="h-full w-full">
          <DatePicker
            value=""
            numberOfMonths={windowSize >= 1024 ? 2 : 1}
            range
            rangeHover
            disableYearPicker
            placeholder={lang == "fa" ? "تاریخ رفت و برگشت" : "Round trip date"}
            scrollSensitive={false}
            editable={false}
            calendar={lang == "en" ? null : persian}
            locale={lang == "en" ? null : persian_fa}
            hideYear
            style={{
              width: "100%",
              height: "100%",
              color: "#b3aeae",
            }}
            containerStyle={{
              width: "100%",
              height: "100%",
            }}
            calendarPosition={
              lang == "en"
                ? `${windowSize >= 1024 ? "bottom-start" : "bottom-center"}`
                : `${windowSize >= 1024 ? "bottom-end" : "bottom-center"}`
            }
            ref={datepickerRef}
          >
            <div>
              <button className="m-1 bg-red-500 px-2 py-1 rounded-lg text-black" onClick={Cancellation}>
                لغو
              </button>
              <button className="m-1 bg-green-500 px-2 py-1 rounded-lg text-black" onClick={confirmation}>
                تایید
              </button>
            </div>
          </DatePicker>
        </div>
      )}
    </div>
  );
};

export default TwoWayDatePicker;