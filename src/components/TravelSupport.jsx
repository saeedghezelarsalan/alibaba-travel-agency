import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import { useLanguage } from "../Provider/Navbar";

export const TravelSupport = () => {
  // Language
  const { t } = useTranslation("travelSupport");
  const lang = useLanguage();

  return (
    <div className="hidden lg:flex flex-col gap-y-10 md:flex-row md:gap-y-0  justify-evenly gap-x-1 items-center max-w-screen-2xl mx-auto w-full h-auto border md:py-8 px-5 mt-10 rounded-lg py-4 xl:py-4 bg-white dark:border-[#1b344d] dark:bg-[#1b344d] dark:text-white">
      <div className="flex flex-col items-center ">
        <svg
          viewBox="0 0 24 24"
          width="40"
          height="40"
          className="p-2 !bg-[#e8f9fc] rounded-full"
          fill="#17a2b8"
        >
          <path
            d="M12 1.5c5.799 0 10.5 4.7 10.5 10.5S17.799 22.5 12 22.5C6.2 22.5 1.5 17.799 1.5 12c0-.289.012-.578.035-.865a.75.75 0 0 1 1.495.123 9 9 0 1 0 2.637-5.653l2.445.003a.75.75 0 0 1 .744.664l.005.087a.75.75 0 0 1-.663.744l-.088.005-4.029-.005a.75.75 0 0 1-.744-.663l-.002-.014a.752.752 0 0 1-.003-.19l.006-3.913a.75.75 0 0 1 1.495-.085l.005.087-.004 2A10.474 10.474 0 0 1 12 1.5Zm0 4.381c.48 0 .87.39.87.87v1.212a4.46 4.46 0 0 1 1.46.518c.405.239.49.794.21 1.172a.814.814 0 0 1-1.066.205 3.618 3.618 0 0 0-1.772-.457c-.731 0-1.144.316-1.144.802 0 1.279 4.662.415 4.662 3.447 0 1.262-.781 2.253-2.35 2.525v1.075a.87.87 0 0 1-1.74 0v-1.049c-.798-.106-1.457-.364-1.993-.723-.373-.25-.443-.772-.185-1.14a.82.82 0 0 1 1.125-.21c.525.348 1.19.594 1.966.594.962 0 1.412-.427 1.412-.902 0-1.412-4.676-.426-4.676-3.482 0-1.17.878-2.162 2.352-2.41V6.75c0-.48.389-.869.869-.869Z"
            fillRule="evenodd"
          ></path>
        </svg>
        <h3 className="text-[#4b5259] dark:text-[#c7ccd1] text-base mt-2 !font-black">
          {t("refundRequest")}
        </h3>
        <span className="text-[#6c7680] dark:text-white text-sm mt-1">
          {t("cancelTrip")}
        </span>
        <Link href="#">
          <a className="text-[#0077DB] dark:text-[#07ce39] text-sm mt-4 py-[2px] px-[5px] flex items-center">
            {t("myTrip")}
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className={` ${lang == "fa" ? "mr-2" : "ml-2 rotate-180"}`}
              fill="currentColor"
            >
              <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
            </svg>
          </a>
        </Link>
      </div>

      <div className="flex flex-col items-center ">
        <svg
          viewBox="0 0 24 24"
          width="40"
          height="40"
          className="p-2 !bg-[#e8f9fc] rounded-full"
          fill="#17a2b8"
        >
          <path
            d="M12 1.5c5.799 0 10.5 4.7 10.5 10.5S17.799 22.5 12 22.5C6.2 22.5 1.5 17.799 1.5 12c0-.289.012-.578.035-.865a.75.75 0 0 1 1.495.123 9 9 0 1 0 2.637-5.653l2.445.003a.75.75 0 0 1 .744.664l.005.087a.75.75 0 0 1-.663.744l-.088.005-4.029-.005a.75.75 0 0 1-.744-.663l-.002-.014a.752.752 0 0 1-.003-.19l.006-3.913a.75.75 0 0 1 1.495-.085l.005.087-.004 2A10.474 10.474 0 0 1 12 1.5Zm0 4.381c.48 0 .87.39.87.87v1.212a4.46 4.46 0 0 1 1.46.518c.405.239.49.794.21 1.172a.814.814 0 0 1-1.066.205 3.618 3.618 0 0 0-1.772-.457c-.731 0-1.144.316-1.144.802 0 1.279 4.662.415 4.662 3.447 0 1.262-.781 2.253-2.35 2.525v1.075a.87.87 0 0 1-1.74 0v-1.049c-.798-.106-1.457-.364-1.993-.723-.373-.25-.443-.772-.185-1.14a.82.82 0 0 1 1.125-.21c.525.348 1.19.594 1.966.594.962 0 1.412-.427 1.412-.902 0-1.412-4.676-.426-4.676-3.482 0-1.17.878-2.162 2.352-2.41V6.75c0-.48.389-.869.869-.869Z"
            fillRule="evenodd"
          ></path>
        </svg>
        <h3 className="text-[#4b5259] dark:text-[#c7ccd1] text-base mt-2 !font-black">
          {t("tourGuide")}
        </h3>
        <span className="text-[#6c7680] text-center text-sm mt-1 dark:text-white">
          {t("buyGuide")}
        </span>
        <Link href="#">
          <a className="text-[#0077DB] dark:text-[#07ce39] text-sm mt-4 py-[2px] px-[5px] flex items-center">
            {t("supportCenter")}
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className={`${lang == "fa" ? "mr-2" : "ml-2 rotate-180"}`}
              fill="currentColor"
            >
              <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
            </svg>
          </a>
        </Link>
      </div>

      <div className="flex flex-col items-center ">
        <svg
          viewBox="0 0 24 24"
          width="40"
          height="40"
          className="p-2 !bg-[#e8f9fc] rounded-full"
          fill="#17a2b8"
        >
          <path
            d="M12 1.5c5.799 0 10.5 4.7 10.5 10.5S17.799 22.5 12 22.5C6.2 22.5 1.5 17.799 1.5 12c0-.289.012-.578.035-.865a.75.75 0 0 1 1.495.123 9 9 0 1 0 2.637-5.653l2.445.003a.75.75 0 0 1 .744.664l.005.087a.75.75 0 0 1-.663.744l-.088.005-4.029-.005a.75.75 0 0 1-.744-.663l-.002-.014a.752.752 0 0 1-.003-.19l.006-3.913a.75.75 0 0 1 1.495-.085l.005.087-.004 2A10.474 10.474 0 0 1 12 1.5Zm0 4.381c.48 0 .87.39.87.87v1.212a4.46 4.46 0 0 1 1.46.518c.405.239.49.794.21 1.172a.814.814 0 0 1-1.066.205 3.618 3.618 0 0 0-1.772-.457c-.731 0-1.144.316-1.144.802 0 1.279 4.662.415 4.662 3.447 0 1.262-.781 2.253-2.35 2.525v1.075a.87.87 0 0 1-1.74 0v-1.049c-.798-.106-1.457-.364-1.993-.723-.373-.25-.443-.772-.185-1.14a.82.82 0 0 1 1.125-.21c.525.348 1.19.594 1.966.594.962 0 1.412-.427 1.412-.902 0-1.412-4.676-.426-4.676-3.482 0-1.17.878-2.162 2.352-2.41V6.75c0-.48.389-.869.869-.869Z"
            fillRule="evenodd"
          ></path>
        </svg>
        <h3 className="text-[#4b5259] dark:text-[#c7ccd1] text-base mt-2 !font-black">
          {t("requestSupport")}
        </h3>
        <span className="text-[#6c7680] text-center dark:text-white text-sm mt-1">
          {t("checkProblems")}
        </span>
        <Link href="#">
          <a className="text-[#0077DB] dark:text-[#07ce39] text-sm mt-4 py-[2px] px-[5px] flex items-center">
            {t("requestSupport")}
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              className={`${lang == "fa" ? "mr-2" : "ml-2 rotate-180"}`}
              fill="currentColor"
            >
              <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>
  );
};
