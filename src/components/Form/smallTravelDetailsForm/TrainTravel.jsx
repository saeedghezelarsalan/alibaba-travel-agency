import React, { useState } from "react";
import DatePicker from "../../DatePicker";
import TravelPassengerInformation from "../../../Container/TravelPassengerInformation";
import Link from "next/link";
import RoundTripSelection from "../../RoundTripSelection";
import MobileOriginAndDestination from "../../SmallOriginAndDestination";
import { useLanguage } from "../../../Provider/Navbar";

const TrainTravel = ({ iranState }) => {
  const lang = useLanguage()
  const [oneWay,setOneWay] = useState(false)

  const setOneWayHandler = (value) =>{
    setOneWay(value)
  }

  return (
    <form
      autoComplete="off"
      className="flex lg:hidden relative w-full flex-col items-center justify-evenly h-auto gap-y-6 py-10 text-black border-vehiclsContainer  shadow-sm bg-white dark:border-black dark:bg-[#1b344d] rounded-xl mx-auto px-4  mb-12 mt-10"
    >
      <div className="w-full py-2 pr-4 bg-white dark:bg-gray-700 rounded-lg ">
        <Link href="/">
          <a className="dark:text-white text-sm">
          {lang == "fa" ? "بازگشت" : "Back"}
          </a>
        </Link>
      </div>

      {/* choose one way or two way */}

      <RoundTripSelection isOneWay = {setOneWayHandler} />

      <MobileOriginAndDestination iranState={iranState} />

      {/* Date Range */}
     
      <DatePicker oneWay={oneWay} />
      <TravelPassengerInformation />
      <button className="text-center w-full h-full text-black bg-[#FDB713] py-4 rounded-lg">
      {lang == "fa" ? "جستجو" : "Search"}
      </button>
    </form>
  );
};

export default TrainTravel;