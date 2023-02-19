import React, { useEffect, useRef, useState } from "react";
import { digitsEnToFa, numberToWords } from "@persian-tools/persian-tools";
import { useLanguage } from "../provider/Navbar";

const HotelReducer = () => {
  // useState
  const [modal, setModal] = useState(false);
  const [passengerInformation, setPassengerInformation] = useState([
    {
      id: Math.ceil(Math.random() * 10000),
      adult: 1,
      child: 0,
      childAge: [],
    },
  ]);

  // ref
  const inputRef = useRef();
  const containerRef = useRef();

  // language
  const lang = useLanguage();

  // click outside to close passenger information div
  const clickOutside = (e) => {
    if (
      inputRef.current.contains(e.target) ||
      containerRef.current.contains(e.target)
    ) {
      // inside click
      return;
    }
    setModal(false);
  };

  // Do something after component renders
  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    // clean up function before running new effect
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [modal]);

  //   passenger information onClicks

  const addChilds = (id) => {
    setPassengerInformation((current) =>
      current.map((obj, index) => {
        if (obj.id === id && obj.childAge?.length < 6) {
          return {
            ...obj,
            child: obj.child + 1,
            childAge: [
              ...obj.childAge,
              { id: Math.ceil(Math.random() * 10000), age: "-1" },
            ],
          };
        }

        return obj;
      })
    );
  };

  const minusChilds = (id) => {
    setPassengerInformation((current) =>
      current.map((obj, index) => {
        if (obj.id === id && obj.child <= 6 && obj.child > 0) {
          return {
            ...obj,
            child: obj.child - 1,
            childAge: obj.childAge?.slice(0, -1),
          };
        } else if (obj.id === id && obj.child > 0) {
          return {
            ...obj,
            child: obj.child - 1,
          };
        } else if (obj.id === id && obj.child == 0) {
          return {
            ...obj,
            child: obj.child,
          };
        }

        return obj;
      })
    );
  };

  const minusAdults = (id) => {
    setPassengerInformation((current) =>
      current.map((obj, index) => {
        if (obj.id === id && obj.adult >= 1) {
          return {
            ...obj,
            adult: obj.adult - 1,
          };
        } else if (obj.id === id && obj.adult == 0) {
          return {
            ...obj,
            adult: obj.adult,
          };
        }

        return obj;
      })
    );
  };

  const addAdults = (id) => {
    setPassengerInformation((current) =>
      current.map((obj, index) => {
        if (obj.id === id && obj.adult >= 0 && obj.adult < 14) {
          return {
            ...obj,
            adult: obj.adult + 1,
          };
        } else if (obj.id === id) {
          return {
            ...obj,
            adult: obj.adult,
          };
        }

        return obj;
      })
    );
  };
  // set childrens age
  const selectOptionValue = (id, passenger, e) => {
    setPassengerInformation(
      passengerInformation.map((obj, index) => {
        if (obj.id === passenger.id) {
          return {
            ...obj,
            childAge: obj.childAge.map((wich) => {
              if (wich.id == id) {
                return {
                  ...wich,
                  age: e.target.value,
                };
              }
              return wich;
            }),
          };
        }
        return obj;
      })
    );
  };

  const removePassengerRoomHandler = (index) => {
    const list = [...passengerInformation];
    list.splice(index, 1);
    setPassengerInformation(list);
  };

  const addPassengerRoomHandler = () => {
    setPassengerInformation([
      ...passengerInformation,
      {
        id: Math.ceil(Math.random() * 10000),
        adult: 1,
        child: 0,
        childAge: [],
      },
    ]);
  };

  //   Number of adult passengers
  const adultsPassengersNumber =
    passengerInformation &&
    passengerInformation
      .map((item) => Number(item.adult + item.child))
      .reduce(function (previous, current) {
        return previous + current;
      }, 0);

  return (
    <div className="relative w-full h-12 lg:w-1/2 lg:h-full">
      <input
        ref={inputRef}
        onClick={() => setModal(true)}
        type="text"
        placeholder={
          lang == "fa"
            ? `${digitsEnToFa(
                `${adultsPassengersNumber}`
              )} مسافر ، ${digitsEnToFa(
                `${passengerInformation?.length}`
              )} اتاق`
            : `${`${adultsPassengersNumber}`} Passenger ، ${`${passengerInformation?.length}`} Room`
        }
        className={`text-black  w-full border rounded-lg h-full ${
          lang == "fa" ? "pr-2" : "pl-2"
        }`}
        readOnly
      />

      <div
        ref={containerRef}
        className={`fixed bottom-0 lg:top-full lg:absolute left-0 p-4 bg-white dark:bg-[#3b3b3b] rounded-xl border shadow-xl overflow-x-hidden w-full lg:w-[300px] min-h-fit max-h-[408px] overflow-y-scroll scrollCustomer  ${
          modal
            ? "-translate-y-0 lg:block transition-all duration-500"
            : "translate-y-full  lg:hidden transition-all duration-500"
        } `}
      >
        {passengerInformation.map((passenger, index) => (
          <div
            key={index}
            className="flex flex-col gap-y-4 bg-white dark:bg-[#3b3b3b] mb-3"
          >
            <div className="flex justify-between">
              <h1 className="dark:text-white">
                {lang == "fa"
                  ? `اتاق ${numberToWords(index + 1, { ordinal: true })}`
                  : `${index + 1}  Room`}
              </h1>
              {/* remove passenger room */}
              {passengerInformation.length !== 1 && (
                <button
                  type="button"
                  onClick={() => removePassengerRoomHandler(index)}
                  className="text-md rounded-lg text-white"
                >
                  <span className="text-red-700 text-sm">
                    {lang == "fa" ? "حذف" : "remove"}
                  </span>
                </button>
              )}
            </div>

            {/* adult */}
            <div className="flex justify-between items-center">
              <div className="w-auto ">
                {lang == "fa" ? (
                  <div className="flex">
                    <p className="text-sm dark:text-white">بزرگسال</p>
                    <span className="text-[#6c7680] dark:text-[#abb1b8] text-sm mr-2">{`(${digitsEnToFa(
                      12
                    )} سال به بالا)`}</span>
                  </div>
                ) : (
                  <div className="flex">
                    <p className="text-sm dark:text-white">Adult</p>
                    <span className="text-[#6c7680] dark:text-[#abb1b8] text-sm ml-2">
                      (12 years and above)
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between  w-auto  ">
                <button
                  onClick={() => addAdults(passenger.id)}
                  type="button"
                  className={`bg-[#0077DB] dark:bg-blue-500 rounded-lg w-[1.5rem] h-[1.5rem] flex justify-center items-center ${
                    passenger.adult == 14
                      ? "cursor-not-allowed opacity-[.525]"
                      : "cursor-pointer"
                  } `}
                  aria-label="افزودن"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16px"
                    height="16px"
                    fill="white"
                  >
                    <path d="M12 3c.585 0 1.065.446 1.12 1.017l.005.108v6.75h6.75a1.125 1.125 0 0 1 .108 2.245l-.108.005h-6.75v6.75a1.125 1.125 0 0 1-2.245.108l-.005-.108v-6.75h-6.75a1.125 1.125 0 0 1-.108-2.245l.108-.005h6.75v-6.75C10.875 3.504 11.379 3 12 3Z"></path>
                  </svg>
                </button>
                {lang == "fa" ? (
                  <p className="text-center dark:text-white min-w-[30px]">
                    {digitsEnToFa(`${passenger.adult}`)}
                  </p>
                ) : (
                  <p className="text-center dark:text-white min-w-[30px]">
                    {passenger.adult}
                  </p>
                )}
                <button
                  onClick={() => minusAdults(passenger.id)}
                  type="button"
                  className={`bg-[#0077DB] dark:bg-blue-500 rounded-lg w-[1.5rem] h-[1.5rem] flex justify-center items-center ${
                    passenger.adult == 0
                      ? "cursor-not-allowed opacity-[.525]"
                      : "cursor-pointer"
                  }`}
                  aria-label="افزودن"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16px"
                    height="16px"
                    fill="white"
                  >
                    <path d="M19.875 10.875a1.125 1.125 0 0 1 .108 2.245l-.108.005H4.125a1.125 1.125 0 0 1-.108-2.245l.108-.005h15.75Z"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* children */}
            <div className="flex justify-between items-center">
              <div className="w-auto ">
                {lang == "fa" ? (
                  <div className="flex">
                    <p className="text-sm dark:text-white">کودک</p>
                    <span className="text-[#6c7680] dark:text-[#abb1b8] text-sm mr-2">{`(تا ${digitsEnToFa(
                      12
                    )} سال)`}</span>
                  </div>
                ) : (
                  <div className="flex">
                    <p className="text-sm dark:text-white">Child</p>
                    <span className="text-[#6c7680] dark:text-[#abb1b8] text-sm ml-2">
                      (Up to 12 years)
                    </span>
                  </div>
                )}
              </div>
              <div className="flex justify-between  w-auto  ">
                <button
                  onClick={() => addChilds(passenger.id)}
                  type="button"
                  className={`bg-[#0077DB] dark:bg-blue-500 rounded-lg w-[1.5rem] h-[1.5rem] flex justify-center items-center  ${
                    passenger.child == 6
                      ? "cursor-not-allowed opacity-[.525]"
                      : "cursor-pointer"
                  }`}
                  aria-label="افزودن"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16px"
                    height="16px"
                    fill="white"
                  >
                    <path d="M12 3c.585 0 1.065.446 1.12 1.017l.005.108v6.75h6.75a1.125 1.125 0 0 1 .108 2.245l-.108.005h-6.75v6.75a1.125 1.125 0 0 1-2.245.108l-.005-.108v-6.75h-6.75a1.125 1.125 0 0 1-.108-2.245l.108-.005h6.75v-6.75C10.875 3.504 11.379 3 12 3Z"></path>
                  </svg>
                </button>
                {/* {} */}
                {lang == "fa" ? (
                  <p className="text-center dark:text-white min-w-[30px]">
                    {digitsEnToFa(`${passenger.child}`)}
                  </p>
                ) : (
                  <p className="text-center dark:text-white min-w-[30px]">
                    {passenger.child}
                  </p>
                )}
                <button
                  onClick={() => minusChilds(passenger.id)}
                  type="button"
                  className={`bg-[#0077DB] dark:bg-blue-500 rounded-lg w-[1.5rem] h-[1.5rem] flex justify-center items-center ${
                    passenger.child == 0
                      ? "cursor-not-allowed opacity-[.525]"
                      : "cursor-pointer"
                  }`}
                  aria-label="کاستن"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16px"
                    height="16px"
                    fill="white"
                  >
                    <path d="M19.875 10.875a1.125 1.125 0 0 1 .108 2.245l-.108.005H4.125a1.125 1.125 0 0 1-.108-2.245l.108-.005h15.75Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            {/* childrens age */}
            <div className="grid grid-cols-2 gap-x-2 gap-y-2">
              {passenger.childAge?.map((a) => (
                <div className="flex flex-col border-black">
                  <select
                    name=""
                    id=""
                    value={a.age}
                    className="dark:text-white dark:bg-black rounded-xl border-black dark:border-white border text-sm pr-2 py-1"
                    onChange={(e) => selectOptionValue(a.id, passenger, e)}
                  >
                    <option value="-1">
                      {lang == "fa" ? "انتخاب کنید" : "select"}
                    </option>
                    <option value="1">
                      {lang == "fa" ? "تا یک سال" : "up to a year"}
                    </option>
                    <option value="2">
                      {lang == "fa" ? "1 تا 2 سال" : "1 to 2 years"}
                    </option>
                    <option value="3">
                      {lang == "fa" ? "2 تا 3 سال" : "2 to 3 years"}
                    </option>
                    <option value="4">
                      {lang == "fa" ? "3 تا 4 سال" : "3 to 4 years"}
                    </option>
                    <option value="5">
                      {lang == "fa" ? "4 تا 5 سال" : "4 to 5 years"}
                    </option>
                    <option value="6">
                      {lang == "fa" ? "5 تا 6 سال" : "5 to 6 years"}
                    </option>
                    <option value="7">
                      {lang == "fa" ? "6 تا 7 سال" : "6 to 7 years"}
                    </option>
                    <option value="8">
                      {lang == "fa" ? "7 تا 8 سال" : "7 to 8 years"}
                    </option>
                    <option value="9">
                      {lang == "fa" ? "8 تا 9 سال" : "8 to 9 years"}
                    </option>
                    <option value="10">
                      {lang == "fa" ? "9 تا 10 سال" : "9 to 10 years"}
                    </option>
                    <option value="11">
                      {lang == "fa" ? "10 تا 11 سال" : "10 to 11 years"}
                    </option>
                    <option value="12">
                      {lang == "fa" ? "11 تا 12 سال" : "11 to 12 years"}
                    </option>
                  </select>
                  <span>
                    {a.age == "-1" ? (
                      <span className="text-red-400 text-sm">پر کنید</span>
                    ) : null}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* add passenger room */}
        <div className="flex w-full bg-white dark:bg-[#3b3b3b] justify-start z-[999]">
          <button
            disabled={passengerInformation.length <= 4 ? false : true}
            type="button"
            onClick={addPassengerRoomHandler}
            className={`mr-2 mt-2 text-sm bg-white dark:bg-[#3b3b3b] ${
              passengerInformation.length <= 4
                ? "cursor-pointer text-blue-500"
                : "cursor-not-allowed text-blue-300"
            } `}
          >
            {lang == "fa" ? "افزودن اتاق" : "Add room"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelReducer;
