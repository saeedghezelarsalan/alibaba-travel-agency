import Image from "next/image";
import Link from "next/link";
import React, { useReducer } from "react";
import footerFirstLogo from "../../public/assets/footer-first-logo.webp";
import footerSecondLogo from "../../public/assets/footer-second-logo.webp";
import footerThirdLogo from "../../public/assets/footer-third-logo.webp";
import { useTranslation } from "next-i18next";


const Footer = () => {

  const initialState = {
    toggle: true,
  };
// usereducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case "makeToggle":
        return { ...state, toggle: !state.toggle };
      default:
        return state;
    }
  };
//   useReducers
  const [toggleFirstFooter, toggleFirstFooterDispatch] = useReducer(
    reducer,
    initialState
  );
  const [toggleSecondFooter, toggleSecondFooterDispatch] = useReducer(
    reducer,
    initialState
  );
  const [toggleThirdFooter, toggleThirdFooterDispatch] = useReducer(
    reducer,
    initialState
  );

  const { t } = useTranslation("footer");

  return (
    <div className="bg-white dark:bg-[#1b344d] h-auto lg:px-4 xl:px-20 2xl:px-52 border border-l-0 border-r-0 border-b-0 dark:border-[#1b344d]">
      <div className="w-full h-auto  mx-auto max-w-screen-2xl border border-x-0 border-t-0 mb-8 py-8">
        <ul className="flex flex-col lg:flex-row w-auto px-2 md:px-0 xl:gap-x-28  items-center lg:items-start">
          <li className="flex items-center w-auto mx-auto mb-4 justify-center !p-0">
            <Image src={footerFirstLogo} width={150} height={150} />
            <div className="flex flex-col sm:justify-center lg:justify-between w-full lg:mr-2">
              <h3 className="text-sm font-bold text-[#4b5259] dark:text-[#07ce39] mb-2 lg:mb-0">
                {t("firstRank")}
              </h3>
              <span className="text-sm text-[#6c7680] dark:text-white">
                {t("tourismProduct")}
              </span>
            </div>
          </li>

          <li className="flex w-auto mb-4 justify-between items-center lg:justify-center !p-0">
            <div className="w-32 h-24">
              <Image src={footerSecondLogo} layout="responsive" />
            </div>
            <div className="flex flex-col sm:justify-center lg:justify-between w-full lg:mr-2">
              <h3 className="text-sm font-bold text-[#4b5259] dark:text-[#07ce39] mb-2 lg:mb-0">
                {t("everyTrip")}
              </h3>
              <span className="text-sm text-[#6c7680] dark:text-white">
                {t("travelService")}
              </span>
            </div>
          </li>

          <li className="flex w-auto mb-4 items-center justify-between lg:justify-center !p-0">
            <Image src={footerThirdLogo} width={150} height={150} />
            <div className="flex flex-col sm:justify-center justify-between w-full lg:mr-2">
              <h3 className="text-sm font-bold text-[#4b5259] dark:text-[#07ce39] mb-2 lg:mb-0">
                {t("Companion")}
              </h3>
              <span className="text-sm text-[#6c7680]dark:text-white">
                {t("supportTime")}
              </span>
              <span></span>
              <span></span>
            </div>
          </li>
        </ul>
      </div>

      {/* footer menu  */}

      <div className="flex flex-col  lg:flex-row lg:flex-nowrap mb-4">
        <div className="w-full gap-y-4 text-center flex justify-between flex-col items-center lg:items-start lg:flex-row flex-wrap lg:px-6 gap-x-4 mb-5 lg:mb-8">
          <div className="flex flex-col lg:items-start">
            <p
              onClick={() => toggleFirstFooterDispatch({ type: "makeToggle" })}
              className="text-[#424750] cursor-pointer select-none font-bold text-base mb-2"
            >
              {t("alibaba")}
            </p>
            <div
              className={`flex flex-col transition-all ease-out !lg:items-start lg:text-start ${
                toggleFirstFooter.toggle
                  ? "max-h-0 lg:max-h-screen overflow-hidden lg:overflow-visible transition-all ease-out  "
                  : "max-h-screen  transition-all ease-out  text-base"
              } `}
            >
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">
                {t("aboutUs")}
                </a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("callUs")}</a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("whyAlibaba")}</a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">
                {t("alibabaPlus")}
                </a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("InsuranceSupport")}</a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("alibabaMag")}</a>
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:items-start">
            <p
              onClick={() => toggleSecondFooterDispatch({ type: "makeToggle" })}
              className="text-[#424750] cursor-pointer select-none font-bold text-base mb-2"
            >
              {t("customerService")}
            </p>

            <div
              className={`flex flex-col transition-all ease-out lg:text-start ${
                toggleSecondFooter.toggle
                  ? "max-h-0 lg:max-h-screen overflow-hidden lg:overflow-visible transition-all ease-out  "
                  : "max-h-screen  transition-all ease-out  text-base"
              } `}
            >
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">
                {t("supportCenter")}
                </a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">
                {t("purchaseGuide")}
                </a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("refundGuide")}</a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("termsAndConditions")}</a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("questionAnswer")}</a>
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex flex-col  items-center lg:items-start">
            <p
              onClick={() => toggleThirdFooterDispatch({ type: "makeToggle" })}
              className="text-[#424750] cursor-pointer select-none font-bold text-base mb-2"
            >
              {t("furtherInformation")}
            </p>
            <div
              className={`flex flex-col transition-all ease-out lg:text-start  ${
                toggleThirdFooter.toggle
                  ? "max-h-0 lg:max-h-screen overflow-hidden lg:overflow-visible transition-all ease-out  "
                  : "max-h-screen  transition-all ease-out  text-base"
              } `}
            >
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("companionsClub")}</a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("organizationalSales")}</a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("cooperationAgencies")}</a>
              </Link>
              <Link href="/">
                <a className="text-[#81858b] text-sm mb-2">{t("careerOpportunities")}</a>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex  w-auto flex-col mr-0 lg:mr-auto">
          <div className="flex flex-row lg:flex-col justify-between">
            <div className="mb-6 w-2/5 mr-auto ">
              <Image
                src="https://cdn.alibaba.ir/h2/desktop/assets/images/shawl_logotype-d8721a14.svg"
                width="100%"
                height={14}
                layout="responsive"
              />
            </div>
            <div className="flex justify-end gap-x-5 mb-2">
              <p className="text-[#424750] dark:text-white font-bold text-sm">
              {t("phone")}
              </p>
              <p className="text-[#424750] dark:text-white font-bold text-sm">
              {t("phoneNumber")}
              </p>
            </div>
            <div className="mb-3 flex justify-between lg:ml-28">
            </div>
          </div>

          <p className="text-[#424750] dark:text-white font-bold text-sm mb-3 hidden lg:block leading-8">
          {t("address")}
          </p>
        </div>
      </div>

      {/* end footem menu */}

      <div className="w-full py-6 border border-x-0 border-b-0 ">
        <p className="text-xs w-full text-center">
        {t("supportAddress")}
        </p>
      </div>
    </div>
  );
};

export default Footer;