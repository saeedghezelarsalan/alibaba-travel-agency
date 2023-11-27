import Link from "next/link";
import React, { useState, useEffect, FC, useRef } from "react";
import { useTranslation } from "next-i18next";
import alibabaLogo from "../../public/assets/alibabaLogo.png";
import Image from "next/image";
import { useRouter } from "next/router";

const MobileNav = () => {
  // useState
  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [lang, setLang] = useState("");

  // ref
  const navRef = useRef(null);
  const { t } = useTranslation("navbar");

  //   router
  const router = useRouter();

  //   detect change language and direction
  useEffect(() => {
    setLang(router.locale);
  }, [lang, router.locale]);

  //   Change vehicle container display while scrolling
  const controlVehicleNavbar = () => {
    if (window.scrollY > 130) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlVehicleNavbar);
    return () => {
      window.removeEventListener("scroll", controlVehicleNavbar);
    };
  }, [show]);

  //   Change Navbar display while scrolling
  const controlNavbar = () => {
    if (window.scrollY > 130) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [show]);

  return (
    <>
      <div
        className={`!bg-primary  flex justify-center  lg:!hidden w-full h-12  relative font-sans ${
          showNav && "!fixed !h-20 !bg-primary !z-50 "
        }`}
        ref={navRef}
      >
        <div
          className={` flex justify-center items-center h-full pt-2 scale-110  ${
            showNav &&
            "!fixed !flex !h-auto !w-auto !justify-center !mt-4 !scale-125  !z-20 !pt-0"
          }`}
        >
          <Image src={alibabaLogo} width={120} height={20} alt={''}/>
        </div>
      </div>
      <div className="xl:px-16 2xl:px-48 mb-32  xl:mb-0 lg:hidden ">
        <div className="w-full bg-primary pt-4 xl:pt-0 h-auto  xl:bg-white  xl:mt-0 xl:rounded-bl-none  xl:w-full max-w-screen-2xl mx-auto">
          <div
            className={`h-16  w-full xl:w-full px-4 xl:px-0 ${
              show && "flex  justify-center"
            }`}
          >
            <nav
              className={`inline-grid grid-cols-2 overflow-hidden rounded-2xl grid-rows-3 relative  bg-vehiclsContainer dark:bg-white gap-[1px] xl:bg-white  border border-vehiclsContainer   xl:flex w-full text-[#4B5259] fill[#4B5259] xl:rounded-bl-none xl:rounded-br-none xl:px-8 xl:!relative  ${
                show
                  ? "!flex !bg-white  dark:!bg-[#1b344d]  !fixed !z-50  !w-11/12 !justify-evenly !translate-y-10 !mb-0 "
                  : "grid bg-white  dark:bg-white "
              }`}
            >
              <Link href="/domestic">
                <a>
                  <li
                    className={`list-none py-2 xl:hidden relative bg-white dark:bg-[#1b344d] dark:text-white  cursor-pointer ${
                      lang == "fa" ? " pr-4" : "pl-3"
                    }`}
                  >
                    {show ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="28px"
                        height="28px"
                        className="w-"
                        fill="currentColor"
                        data-v-17e8ced4=""
                      >
                        <path d="m9.849 20.989.025-.005h4.3c.7.07 1.393-.448 1.542-1.198l.017-.107a1.493 1.493 0 0 0-1.044-1.61l-1.048-.39.15-3.308 5.378 1.983.064.02c.977.254 1.767-.309 1.767-1.311v-.074l-.008-.14a2.308 2.308 0 0 0-1.22-1.847L18 12.013v-.587a1.538 1.538 0 0 0-1.581-1.498 3.69 3.69 0 0 0-1.098.105l-.078.024a.667.667 0 0 0-.209.128l-.115.11-.9-.508.188-4.08v-.255c0-.16-.007-.319-.022-.478C14.065 3.772 13.387 3 12 3c-.979 0-1.655.407-1.975 1.136l-.045.107c-.166.425-.19.822-.166 1.53l.168 4.01-.925.515-.118-.114a.666.666 0 0 0-.287-.151 3.88 3.88 0 0 0-.925-.112l-.336.01c-.74.053-1.36.682-1.39 1.469L6 12.014l-1.785.995A2.297 2.297 0 0 0 3 14.97v.073c0 .994.786 1.553 1.76 1.313l.07-.022 5.378-1.983.15 3.308-1.05.39.07-.016a1.498 1.498 0 0 0 .471 2.956ZM12 4.332c.628 0 .801.197.858.772l.01.136.006.15v.356l-.207 4.39a.666.666 0 0 0 .339.612l1.774.998a.668.668 0 0 0 .88-.21l.087-.15c.017-.025.034-.05.053-.074l.017-.021.123-.02c.102-.011.204-.017.307-.017l.152.004c.172-.002.264.083.268.193v.954c0 .242.13.464.341.582l2.127 1.185a.98.98 0 0 1 .532.838l.002.082.007.035-.045-.023-6.234-2.298a.667.667 0 0 0-.896.595l-.214 4.703a.666.666 0 0 0 .434.654l1.54.573c.115.036.163.116.147.196a.16.16 0 0 1-.172.127l-4.41-.002-.127.012a.165.165 0 0 1-.1-.313l.14-.04 1.54-.574a.666.666 0 0 0 .434-.654l-.214-4.702a.667.667 0 0 0-.896-.595l-6.241 2.301-.038.017c-.001-.001.01-.018.01-.061v-.053a.966.966 0 0 1 .517-.81l2.14-1.193a.665.665 0 0 0 .343-.582v-.979c.003-.082.091-.167.199-.166l.172-.006c.114 0 .221.006.325.018l.126.018.018.022.052.075.046.08a.668.668 0 0 0 .918.282l1.8-1a.666.666 0 0 0 .342-.61l-.186-4.416-.006-.255c-.003-.392.024-.612.105-.795.1-.228.288-.341.755-.341Z"></path>
                      </svg>
                    ) : (
                      `${t("flight")}`
                    )}
                  </li>
                </a>
              </Link>

              <Link href="/train-ticket">
                <a>
                  <li
                    className={`relative xl:pr-0 bg-white dark:bg-[#1b344d] dark:text-white xl:w-[14.28%]  flex items-center xl:flex-col xl:justify-center xl:items-center cursor-pointer py-2  ${
                      lang == "fa" ? " pr-4" : "pl-3"
                    }`}
                  >
                    {show ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="28px"
                        height="28px"
                        fill="currentColor"
                        data-v-17e8ced4=""
                      >
                        <path
                          d="M15.48 3a3.33 3.33 0 0 1 3.33 3.33h.668a1.335 1.335 0 0 1 1.327 1.23v2.1a.667.667 0 0 1-1.328.083V7.65h-.667v8.662a2.01 2.01 0 0 1-1.342 1.89v1.11a1.665 1.665 0 1 1-3.33 0v-.997h-3.75v.997a1.665 1.665 0 1 1-3.33 0v-1.11a2.01 2.01 0 0 1-1.335-1.89V7.65h-.646v1.995a.667.667 0 0 1-1.327.105v-2.1a1.343 1.343 0 0 1 1.23-1.335h.75A3.33 3.33 0 0 1 9.075 3h6.405ZM9.075 18.315h-.667v.997a.338.338 0 0 0 .667.06v-1.057Zm7.065 0h-.66v.997a.33.33 0 0 0 .545.259.337.337 0 0 0 .115-.199v-1.057Zm-9.06-5.648v3.646a.675.675 0 0 0 .585.667h9.143a.667.667 0 0 0 .667-.585v-3.75a14.287 14.287 0 0 1-10.395.023Zm1.732 1.178a.668.668 0 0 1 .668.667v1.073a.667.667 0 1 1-1.335 0v-1.073a.668.668 0 0 1 .668-.667Zm6.93 0a.668.668 0 0 1 .668.667v1.073a.667.667 0 1 1-1.335 0v-1.073a.668.668 0 0 1 .668-.667Zm-.262-9.532H9.075A1.995 1.995 0 0 0 7.08 6.195v5.055a12.982 12.982 0 0 0 10.388 0V6.315a2.003 2.003 0 0 0-1.988-2.002Zm-.645 1.335a.66.66 0 0 1 .645.667.653.653 0 0 1-.57.66H9.72a.668.668 0 0 1-.075-1.327h5.19Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      `${t("train")}`
                    )}
                  </li>
                </a>
              </Link>

              <Link href="/bus-ticket">
                <a>
                  <li
                    className={`relative pr-4 xl:pr-0 bg-white dark:bg-[#1b344d] dark:text-white xl:w-[14.28%]  flex items-center xl:flex-col xl:justify-center xl:items-center cursor-pointer py-2 ${
                      lang == "fa" ? " pr-4" : "pl-3"
                    } `}
                  >
                    {show ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="28px"
                        height="28px"
                        fill="currentColor"
                        data-v-17e8ced4=""
                      >
                        <path
                          d="M15.48 3a3.33 3.33 0 0 1 3.33 3.33h.668a1.335 1.335 0 0 1 1.327 1.23v2.1a.667.667 0 0 1-1.328.083V7.65h-.667v8.662a2.01 2.01 0 0 1-1.342 1.89v1.11a1.665 1.665 0 1 1-3.33 0v-.997h-3.75v.997a1.665 1.665 0 1 1-3.33 0v-1.11a2.01 2.01 0 0 1-1.335-1.89V7.65h-.646v1.995a.667.667 0 0 1-1.327.105v-2.1a1.343 1.343 0 0 1 1.23-1.335h.75A3.33 3.33 0 0 1 9.075 3h6.405ZM9.075 18.315h-.667v.997a.338.338 0 0 0 .667.06v-1.057Zm7.065 0h-.66v.997a.33.33 0 0 0 .545.259.337.337 0 0 0 .115-.199v-1.057Zm-9.06-5.648v3.646a.675.675 0 0 0 .585.667h9.143a.667.667 0 0 0 .667-.585v-3.75a14.287 14.287 0 0 1-10.395.023Zm1.732 1.178a.668.668 0 0 1 .668.667v1.073a.667.667 0 1 1-1.335 0v-1.073a.668.668 0 0 1 .668-.667Zm6.93 0a.668.668 0 0 1 .668.667v1.073a.667.667 0 1 1-1.335 0v-1.073a.668.668 0 0 1 .668-.667Zm-.262-9.532H9.075A1.995 1.995 0 0 0 7.08 6.195v5.055a12.982 12.982 0 0 0 10.388 0V6.315a2.003 2.003 0 0 0-1.988-2.002Zm-.645 1.335a.66.66 0 0 1 .645.667.653.653 0 0 1-.57.66H9.72a.668.668 0 0 1-.075-1.327h5.19Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      `${t("bus")}`
                    )}
                  </li>
                </a>
              </Link>

              <Link href="/hotel">
                <a>
                  <li
                    className={`relative xl:pr-0 bg-white dark:bg-[#1b344d] dark:text-white xl:w-[14.28%]  flex flex-row items-center xl:flex-col xl:justify-center xl:items-center cursor-pointer py-2 ${
                      lang == "fa" ? " pr-4" : "pl-3"
                    } `}
                  >
                    {show ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="28px"
                        height="28px"
                        fill="currentColor"
                        data-v-17e8ced4=""
                      >
                        <path
                          d="M14.655 3.75a.675.675 0 0 1 .67.59l.005.085h2.595A2.175 2.175 0 0 1 20.1 6.6v12.067a1.425 1.425 0 0 1-1.425 1.425H5.107c-.75 0-1.357-.607-1.357-1.357v-7.966a2.228 2.228 0 0 1 2.047-2.242v-.015a.675.675 0 0 1 1.345-.085l.005.085v.007h2.738v-1.92a2.175 2.175 0 0 1 2.047-2.17v-.004a.675.675 0 0 1 1.345-.085l.006.085h.697a.674.674 0 0 1 .675-.675Zm-4.77 6.12H5.97a.877.877 0 0 0-.545.196l-.073.067a.879.879 0 0 0-.251.63v7.972c0 .003.003.007.007.007h4.778V9.87h-.001Zm2.712-4.096h-.537a.825.825 0 0 0-.825.826v12.142h2.063v-1.305a1.425 1.425 0 0 1 1.313-1.42l.111-.005h.548c.788 0 1.425.638 1.425 1.425v1.304l1.98.001a.07.07 0 0 0 .052-.022l.017-.023.006-.03V6.6a.825.825 0 0 0-.825-.825h-3.27l-.01-.001h-2.048Zm2.673 11.588h-.547a.075.075 0 0 0-.075.075v1.304h.697v-1.304a.075.075 0 0 0-.023-.052l-.023-.017-.029-.006Zm-6.758-.99a.675.675 0 0 1 .085 1.345l-.085.005h-2.04a.676.676 0 0 1-.084-1.345l.084-.005h2.04Zm0-2.76a.675.675 0 0 1 .085 1.345l-.085.005h-2.04a.676.676 0 0 1-.084-1.345l.084-.005h2.04Zm5.46-.322a.675.675 0 0 1 .085 1.345l-.085.005h-1.364a.676.676 0 0 1-.085-1.345l.085-.005h1.364Zm3.406 0a.675.675 0 0 1 .084 1.345l-.084.005h-1.366a.676.676 0 0 1-.084-1.345l.084-.005h1.366Zm-8.866-2.438a.675.675 0 0 1 .085 1.345l-.085.005h-2.04a.676.676 0 0 1-.084-1.345l.084-.005h2.04Zm5.46-.292a.675.675 0 0 1 .085 1.345l-.085.005h-1.364a.676.676 0 0 1-.085-1.345l.085-.005h1.364Zm3.406 0a.675.675 0 0 1 .084 1.345l-.084.005h-1.366a.676.676 0 0 1-.084-1.345l.084-.005h1.366Zm-3.405-2.723a.675.675 0 0 1 .084 1.345l-.085.005h-1.364a.675.675 0 0 1-.085-1.344l.085-.006h1.364Zm3.405 0a.675.675 0 0 1 .084 1.345l-.084.005h-1.366a.675.675 0 0 1-.084-1.344l.084-.006h1.366Z"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    ) : (
                      `${t("hotel")}`
                    )}
                  </li>
                </a>
              </Link>

              <Link href="/tour">
                <a>
                  <li
                    className={`relative xl:pr-0 bg-white dark:bg-[#1b344d] dark:text-white xl:w-[14.28%]  flex items-center cursor-pointer py-2 xl:flex-col xl:items-center xl:justify-center ${
                      lang == "fa" ? " pr-4" : "pl-3"
                    } `}
                  >
                    {show ? (
                      <svg
                        viewBox="0 0 24 24"
                        width="28px"
                        height="28px"
                        fill="currentColor"
                        data-v-17e8ced4=""
                      >
                        <path d="M12 3a3.376 3.376 0 0 1 3.351 3H16.5a2.25 2.25 0 0 1 2.25 2.25v3.095A3.001 3.001 0 0 1 21 14.25v2.25a1.5 1.5 0 0 1-1.5 1.5h-.75a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3H4.5a1.5 1.5 0 0 1-1.496-1.388L3 16.5v-2.25a3 3 0 0 1 2.25-2.902V8.25A2.25 2.25 0 0 1 7.5 6h1.146A3.375 3.375 0 0 1 12 3Zm5.25 9-.997.75a3.75 3.75 0 0 1-2.002.742l-.001.758a.75.75 0 0 1-1.495.088l-.005-.088v-.75h-1.5v.75a.75.75 0 0 1-1.495.088l-.005-.088v-.758a3.75 3.75 0 0 1-1.838-.625l-.165-.117L6.75 12v6a1.5 1.5 0 0 0 1.388 1.496l.112.004h7.5a1.5 1.5 0 0 0 1.5-1.5v-6Zm-3 4.5a.75.75 0 0 1 .088 1.495L14.25 18h-4.5a.75.75 0 0 1-.087-1.495l.087-.005h4.5Zm4.5-3.548V16.5h.75v-2.25a1.5 1.5 0 0 0-.683-1.258l-.066-.04Zm-13.5-.001-.056.033a1.5 1.5 0 0 0-.69 1.153l-.004.113v2.25h.75v-3.549ZM16.5 7.5h-9a.75.75 0 0 0-.75.75v1.875l1.898 1.425a2.25 2.25 0 0 0 1.102.436v-.736a.75.75 0 0 1 1.495-.088l.005.088V12h1.5v-.75a.75.75 0 0 1 1.495-.088l.005.088v.736a2.25 2.25 0 0 0 .97-.344l.132-.092 1.898-1.425V8.25a.75.75 0 0 0-.663-.745L16.5 7.5Zm-4.5-3c-.911 0-1.67.65-1.84 1.493L10.158 6h3.68l-.025-.104a1.876 1.876 0 0 0-1.69-1.392L12 4.5Z"></path>
                      </svg>
                    ) : (
                      `${t("tour")}`
                    )}
                  </li>
                </a>
              </Link>

              <Link href="/accommodation">
                <a>
                  <li
                    className={`relative xl:pr-0 bg-white dark:bg-[#1b344d] dark:text-white xl:w-[14.28%]  flex items-center cursor-pointer py-2 xl:flex-col xl:items-center xl:justify-center  ${
                      lang == "fa" ? " pr-4" : "pl-3"
                    } `}
                  >
                    {show ? (
                      <svg
                        viewBox="0 0 32 32"
                        width="28"
                        height="28"
                        fill="currentColor"
                        className="block mx-auto mb-1"
                        data-v-5b4f9913=""
                      >
                        <path
                          d="M15.362 4.23a.777.777 0 011.099-.005l11.308 11.222a.777.777 0 01-.547 1.328h-1.42c.01.076.015.154.015.233v8.341a1.7 1.7 0 01-1.7 1.7H7.976a1.7 1.7 0 01-1.7-1.7v-8.341c0-.079.005-.157.016-.233H4.778a.777.777 0 01-.551-1.324L15.362 4.23zm8.964 12.632H7.766v8.632h5.771a1.817 1.817 0 01-.016-.247v-4.588a1.8 1.8 0 011.8-1.8h1.357a1.8 1.8 0 011.8 1.8v4.588c0 .084-.006.166-.017.247h5.865v-8.632zm-7.245 3.517h-2.163v5.114h2.163v-5.114zM10.74 18.86c.51 0 .922.414.922.924v2.307a.923.923 0 11-1.846 0v-2.307c0-.51.414-.924.924-.924zm10.523 0c.51 0 .923.414.923.924v2.307a.923.923 0 01-1.846 0v-2.307c0-.51.413-.924.923-.924zM15.917 5.875l-9.275 9.347 2.979-.001 5.766-6.142a.777.777 0 011.048-.078l.08.074 5.859 6.146h2.962l-9.419-9.346zm-.516 5.457l-3.65 3.89 3.65-.001v-3.889zm1.197.081v3.808h3.63l-3.63-3.808z"
                          fill="#4B5259 dark:[#1b344d] dark:text-white"
                        ></path>
                      </svg>
                    ) : (
                      `${t("camps")}`
                    )}
                  </li>
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
