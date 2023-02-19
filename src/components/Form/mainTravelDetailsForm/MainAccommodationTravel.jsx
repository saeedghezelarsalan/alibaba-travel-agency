import React, { useState } from "react";
import { useLanguage } from "../Navbar";
import RoundTripSelection from "../../RoundTripSelection";
import MainOriginAndDestination from "../../../Container/MainOriginAndDestination";
import DatePicker from "../../DatePicker";
import AccommodationPassengerInformation from "../../../Container/AccommodationPassengerInformation";

const MainAccommodationTravel = ({ iranState }) => {
  const lang = useLanguage();
  const [oneWay, setOneWay] = useState(false);

  const setOneWayHandler = (value) => {
    setOneWay(value);
  };

  return (
    <div className="hidden lg:border-x-0 lg:border-b-0 lg:border lg:flex w-full h-auto lg:-translate-y-4 pb-10 pt-6 lg:px-4  text-black border-vehiclsContainer  shadow-sm bg-white dark:border-black  dark:bg-[#1b344d] rounded-bl-xl rounded-br-xl max-w-screen-2xl mx-auto px-4 flex-col !-mt-[27px]  maxh-h-auto">
      <RoundTripSelection isOneWay={setOneWayHandler} />

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full relative flex flex-col lg:flex-row items-center gap-x-2 flex-nowrap justify-evenly h-auto lg:h-12 gap-y-3 px-6 z-50"
      >
        <div className="w-full h-full mah-h-auto">
          <MainOriginAndDestination
            iranStates={iranState}
            openToggle={false}
            closeToggle={false}
            setOriginInputs={""}
          />
        </div>
        <DatePicker oneWay={oneWay} />
        <AccommodationPassengerInformation />

        <button className="text-center h-full text-black bg-[#FDB713] py-2 rounded-lg lg:px-16 2xl:px-16">
          {lang == "fa" ? "جستجو" : "Search"}
        </button>
      </form>
    </div>
  );
};

export default MainAccommodationTravel;