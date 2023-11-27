import Image from "next/image";
import Link from "next/link";
import users from "../../public/assets/user.png";
import React, {useContext, useEffect, useState} from "react";
import {Menu} from "@headlessui/react";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";

const siteLanguageContext = React.createContext("");

const Navbar = ({children}) => {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);
  const {t} = useTranslation("navbar");
  const [lang, setLang] = useState("");
  const router = useRouter();

  useEffect(() => {
    setLang(router.locale);
  }, [lang, router.locale]);

  useEffect(() => {
    let dir = router.locale == "fa" ? "rtl" : "ltr";
    let lang = router.locale == "fa" ? "fa" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  // hide or show navbar on scroll
  useEffect(() => {
    const controllNavbar = () => {
      setShow(true);
      if (window.scrollY > 250) {
        setScrollPos(document.body.getBoundingClientRect().top);
        if (document.body.getBoundingClientRect().top < scrollPos) {
          setShow(false);
        } else {
          setShow(true);
        }
      } else {
        setShow(true);
      }
    };

    window.addEventListener("scroll", controllNavbar);
    return () => {
      window.removeEventListener("scroll", controllNavbar);
    };
  }, [show, scrollPos]);

  // change language
  const handleLocaleChange = (event) => {
    const value = event.target.value;
    router.push(router.route, router.asPath, {
      locale: value,
      scroll: false,
    });
  };

  return (
    <siteLanguageContext.Provider value={lang}>
      {children}
      <header
        className={`xl:shadow-xl lg:z-50 hidden lg:!block w-full h-16 bg-white dark:bg-[#312c2c] font-sans transition-all fixed top-0 dark:text-white ${
          show ? "translate-y-0 " : "-translate-y-full !shadow-none"
        }`}
      >
        <div className="hidden lg:flex h-full max-w-screen-2xl mx-auto text-base bg-transparent  xl:px-2 xl:mx-2 2xl:mx-auto ">
          <nav className="hidden lg:!flex !h-full !items-center w-full ">
            <Link href="/">
              <a>
                <div className="flex">
                  {/* <Image src={alibabaImageLogo} width={45} height={45}  /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    role="img"
                  >
                    <g fillRule="nonzero" fill="none">
                      <path
                        fill="#231F20"
                        d="M38.654 35.177v4.43c0 .078-.005.155-.013.232 6.5.167 8.59-4.85 8.59-4.85-3.208-1.318-6.388-.656-8.577.188"
                      ></path>
                      <path
                        fill="#FDB913"
                        d="M38.796 35.843v3.916c0 .276-.053.548-.155.803 4.533 3.29 9.066.737 9.066.737-1.785-4.027-6.676-5.095-8.91-5.456"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M7.317 13.601v8.897h1.176v5.931H7.317v7.414h31.176V13.601z"
                      ></path>
                      <path
                        fill="#231F20"
                        d="M.002 29.213s5.862-6.137 6.22-15.612h13.493s.622 14.935-8.88 17.778c0 0 2.087-1.76.62-6.588 0 0-.227 6.103-7.458 7.851 0 0 3.596-3.835 3.73-7.039 0 0-2.532 3.565-7.727 3.61"
                      ></path>
                      <path
                        fill="#231F20"
                        d="M38.232 13.12v22.454H7.418v-6.222H6.84v10.73c.005 1.193.96 2.158 2.137 2.161h27.696c1.18-.003 2.134-.97 2.138-2.164V13.121h-.58z"
                      ></path>
                      <path
                        fill="#FDB913"
                        d="M38.81 13.76V8.445c-.005-1.392-1.115-2.519-2.487-2.525H8.69c-1.373.006-2.483 1.133-2.487 2.524v5.317h32.608z"
                      ></path>
                      <path
                        fill="#231F20"
                        d="M26.086 21.677c.356 1.675 1.899 2.808 3.576 2.625 1.677-.183 2.948-1.623 2.945-3.337 0-.216-.02-.432-.062-.644l-6.46 1.356zm.944-1.753l5.697-1.207s1.033-.3 1.948.333c-.19.345-.51.595-.885.693l-7.94 1.538h-.354l-.177-.543.355-.03-.03-.528-.686-.972-.145-.562.388-.085 1.83 1.363zm-2.165 11.918h-5.619v-.712h5.565c.229-.038 2.049-.363 3.587-1.368l.392.597c-1.773 1.158-3.817 1.467-3.9 1.48l-.025.003z"
                      ></path>
                    </g>
                  </svg>
                  <div className="flex flex-col justify-center  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="15"
                      role="img"
                    >
                      <path
                        d="M44.467 0c0 3.121-.014 6.257 0 9.379 0 1.612.7 3.378 2.637 3.404.975.024 1.701-.41 2.189-1.216.514-.87.62-1.83.62-2.803-.014-.703-.067-1.393-.343-2.06-.41-.972-1.383-1.609-2.466-1.612-.66 0-.976.192-1.53.473V4.19a3.935 3.935 0 012.018-.587c2.874 0 4.166 2.674 4.166 5.168 0 2.572-1.305 5.477-4.654 5.477-1.397 0-2.162-.665-2.808-1.561l.004-.006-.106-.026v1.587H42.64V0h1.828zM22.216 0v9.379c0 1.612.712 3.378 2.637 3.404.975.024 1.701-.41 2.189-1.216.527-.87.633-1.83.62-2.803 0-.703-.053-1.393-.33-2.06-.418-.971-1.394-1.606-2.479-1.612-.66 0-.963.192-1.517.473V4.19a3.888 3.888 0 012.018-.587c2.875 0 4.153 2.674 4.153 5.168 0 2.572-1.305 5.477-4.64 5.477-1.398 0-2.176-.665-2.822-1.561v-.006l-.106-.026v1.587h-1.542V0h1.819zm35.69 3.597c1.86 0 3.89.806 3.89 2.827v5.529c0 .984.58.869 1.398.793v1.113s-.344.319-1.108.319c-1.041 0-1.7-.409-1.819-1.484-1.16 1.024-1.807 1.587-3.876 1.548-1.678 0-3.013-1.035-3.106-2.674l-.006-.18c0-1.33.59-2.304 1.726-2.815.937-.43 2.625-.525 3.732-.652v1.368c-1.265.18-3.665.205-3.665 1.843 0 1.287.752 1.715 1.99 1.715 1.359 0 3.113-.894 3.093-2.38l.014-3.582c0-1.561-1.031-1.817-2.388-1.817-1.62.013-2.069.46-2.399 1.907H53.82c-.147-2.509 2.082-3.378 4.087-3.378zm-22.228 0c1.858 0 3.889.806 3.889 2.827v5.529c0 .984.58.869 1.398.793v1.113s-.344.319-1.108.319c-1.041 0-1.7-.409-1.82-1.484-1.16 1.024-1.806 1.587-3.876 1.548-1.677 0-3.012-1.035-3.105-2.674l-.006-.18c0-1.33.59-2.304 1.726-2.815.937-.43 2.625-.525 3.732-.652v1.368c-1.266.18-3.665.205-3.665 1.843 0 1.287.75 1.715 1.99 1.715 1.359 0 3.113-.894 3.093-2.38l.014-3.582c0-1.561-1.031-1.817-2.388-1.817-1.608.013-2.069.46-2.399 1.907h-1.562c-.147-2.509 2.082-3.378 4.087-3.378zm-31.05-.001c1.86 0 3.889.806 3.889 2.827v5.528c0 .985.58.87 1.397.793v1.114s-.341.319-1.107.319c-1.041 0-1.713-.41-1.819-1.484-1.16 1.023-1.807 1.586-3.876 1.548-1.679 0-3.014-1.035-3.107-2.674L0 11.388c0-1.33.59-2.304 1.727-2.815.937-.43 2.623-.525 3.719-.652v1.368c-1.253.18-3.652.205-3.652 1.843 0 1.287.75 1.715 1.99 1.715 1.359 0 3.092-.894 3.092-2.38V6.884c.013-1.56-1.015-1.816-2.372-1.816-1.62.012-2.071.46-2.4 1.906H.527c-.13-2.508 2.084-3.377 4.1-3.377zm13.21 0v10.646h-1.844V3.596h1.845zm54.32 0v10.646h-1.845V3.596h1.845zm-4.402 8.7v1.945h-2.004v-1.945h2.004zm11.802-9.11c.33 0 .442.077.442.429v1.459h-.59c-1.674.013-2.847 1.143-2.847 2.777v6.39h-1.846V3.596h1.726v1.522c.027.013.04.026.067.026.092-.116.172-.243.25-.359.686-.946 1.543-1.6 2.798-1.6zM13.434 0v14.228h-1.845V0h1.845z"
                        fill="#231F20"
                        fillRule="nonzero"
                      ></path>
                    </svg>
                    <p className="text-[10px] font-thin pt-1">
                      {lang == "fa"
                        ? "خرید بلیط، هتل و تور"
                        : "buy ticket, hotel and tour"}
                    </p>
                  </div>
                </div>
              </a>
            </Link>

            <ul
              className={`flex dark:text-white items-center justify-between gap-x-1  h-full p-0 text-[#4b5259] !w-auto navbars ${
                lang == "fa" ? "mr-16" : "ml-16"
              } `}
            >
              <div className="relative">
                <Menu>
                  <Menu.Button>
                    <li className="flex items-center px-3 py-1 hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md">
                      <span>{t("flight")}</span>
                      <svg
                        viewBox="0 0 32 32"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={` ${lang == "fa" ? "mr-3" : "ml-3"} `}
                        data-v-5dba9b3e=""
                      >
                        <path d="M28.354 9.737a1 1 0 011.383 1.44l-.091.086-13 11a1 1 0 01-1.186.079l-.106-.079-13-11a1 1 0 011.191-1.601l.101.075L16 20.19 28.354 9.737z"></path>
                      </svg>
                    </li>
                  </Menu.Button>
                  <Menu.Items
                    className={
                      "absolute flex flex-col items-center w-max h-auto  bg-white dark:bg-[#312c2c] dark:border-black shadow-lg top-[2.5rem] border border-vehiclsContainer -right-2 z-10 rounded-md p-1.5 gap-y-1"
                    }
                  >
                    <Menu.Item>
                      <Link href="/">
                        <a
                          className="p-2 text-sm w-full text-center dark:text-white hover:bg-[#f8fafb]  dark:hover:text-black  hover:rounded-[10px] active:shadow-md cursor-pointer">
                          {t("domesticFlight")}
                        </a>
                      </Link>
                    </Menu.Item>
                    <a className="w-auto h-[1px] bg-[#0000001A] dark:bg-white  self-stretch mx-3 min-w-[1px] max-w-full"></a>
                    <Menu.Item>
                      <Link href="/iranout">
                        <a
                          className="p-2 text-sm w-full text-center  hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md cursor-pointer">
                          {t("internationalFlight")}
                        </a>
                      </Link>
                    </Menu.Item>
                    <a className="w-auto h-[1px] bg-[#0000001A] dark:bg-white  self-stretch mx-3 min-w-[1px] max-w-full"></a>
                    <Menu.Item>
                      <Link href="/train-ticket">
                        <a
                          className="p-2 text-sm w-full text-center hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md cursor-pointer">
                          {t("train")}
                        </a>
                      </Link>
                    </Menu.Item>
                    <a className="w-auto h-[1px] bg-[#0000001A] dark:bg-white  self-stretch mx-3 min-w-[1px] max-w-full"></a>
                    <Menu.Item>
                      <Link href="/bus-ticket">
                        <a
                          className="p-2 text-sm w-full text-center  hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md cursor-pointer">
                          {t("bus")}
                        </a>
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>

              <li className="w-[1px] h-5 bg-black dark:bg-white opacity-10 dark:opacity-50 "></li>

              <div className="relative">
                <Menu>
                  <Menu.Button>
                    <li className="flex items-center px-3 py-1 hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md">
                      <span>{t("stay")}</span>
                      <svg
                        viewBox="0 0 32 32"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={` ${lang == "fa" ? "mr-3" : "ml-3"} `}
                        data-v-5dba9b3e=""
                      >
                        <path d="M28.354 9.737a1 1 0 011.383 1.44l-.091.086-13 11a1 1 0 01-1.186.079l-.106-.079-13-11a1 1 0 011.191-1.601l.101.075L16 20.19 28.354 9.737z"></path>
                      </svg>
                    </li>
                  </Menu.Button>
                  <Menu.Items
                    className={
                      "absolute flex flex-col items-center w-max min-w-[90px] h-auto  bg-white dark:bg-[#312c2c] dark:border-black shadow-lg top-[2.5rem] border border-vehiclsContainer  z-10 rounded-md p-1.5 gap-y-1"
                    }
                  >
                    <Menu.Item>
                      <Link href="/hotel">
                        <a className="p-2 text-sm w-auto dark:text-white hover:bg-[#f8fafb]  dark:hover:text-black  hover:rounded-[10px] active:shadow-md cursor-pointer">
                          {t("hotel")}
                        </a>
                      </Link>
                    </Menu.Item>
                    <a className="w-auto h-[1px] bg-[#0000001A] dark:bg-white  self-stretch mx-3 min-w-[1px] max-w-full"></a>
                    <Menu.Item>
                      <Link href="/accommodation">
                        <a className="p-2 text-sm w-auto  hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md cursor-pointer">
                          {t("village")}
                        </a>
                      </Link>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>

              <li className="w-[1px] h-5 bg-black dark:bg-white opacity-10 dark:opacity-50 "></li>
              <Link href="/tour">
                <a className="py-1 px-3 hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md">
                  {t("tour")}
                </a>
              </Link>

              <li className="w-[1px] h-5 bg-black dark:bg-white opacity-10 dark:opacity-50 "></li>

              <div className="relative">
                <Menu>
                  <Menu.Button>
                    <li className="flex items-center px-3 py-1 hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md">
                      <span className="">{t("more")}</span>
                      <svg
                        viewBox="0 0 32 32"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className={` ${lang == "fa" ? "mr-3" : "ml-3"} `}
                        data-v-5dba9b3e=""
                      >
                        <path d="M28.354 9.737a1 1 0 011.383 1.44l-.091.086-13 11a1 1 0 01-1.186.079l-.106-.079-13-11a1 1 0 011.191-1.601l.101.075L16 20.19 28.354 9.737z"></path>
                      </svg>
                    </li>
                  </Menu.Button>
                  <Menu.Items
                    className={
                      "absolute flex flex-col items-center w-max h-auto  bg-white dark:bg-[#312c2c] dark:border-black shadow-lg top-[2.5rem] border border-vehiclsContainer -right-2 z-10 rounded-md p-1.5 gap-y-1 "
                    }
                  >
                    <Menu.Item>
                      <a className="p-2 text-sm w-auto hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md cursor-pointer">
                        {t("plusAlibaba")}
                      </a>
                    </Menu.Item>
                    <a className="w-auto h-[1px] bg-[#0000001A] dark:bg-white  self-stretch mx-3 min-w-[1px] max-w-full"></a>
                    <Menu.Item>
                      <a className="p-2 text-sm w-auto hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md cursor-pointer">
                        {t("alibabaMag")}
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>

              <select onChange={handleLocaleChange} value={router.locale}>
                <option value="fa">Persian</option>
                <option value="en">English</option>
              </select>
            </ul>
            <div
              className={` flex items-center text-[#4b5259] dark:text-white ${
                lang == "fa" ? "mr-auto" : "ml-auto"
              } `}
            >
              <Link href="/">
                <button className="flex items-center hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md py-1 px-2">
                  <div className="ml-2">
                    {/* <Image src={peygiriKharid} width={20} height={20}  /> */}
                  </div>
                  <span>{t("trackOrder")}</span>
                </button>
              </Link>
              <Link href="/profile/account">
                <a className="flex items-start  mr-6 hover:bg-[#f8fafb] dark:text-white dark:hover:text-black  hover:rounded-[10px] active:shadow-md py-1 px-3">
                  <div className="ml-2">
                    <Image src={users} width={20} height={20}/>
                  </div>
                  <span>{t("loginOrRegister")}</span>
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </siteLanguageContext.Provider>
  );
};

export default Navbar;

export const useLanguage = () => useContext(siteLanguageContext);
