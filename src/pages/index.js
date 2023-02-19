import Head from "next/head";
import Image from "next/image";
import MobileNav from "../components/MobileNav";
import VehiclesContainer from "../components/VehiclesContainer";
import MainVehicleTravel from "../components/Form/mainTravelDetailsForm/MainVehicleTravel";
import MainSlider from "../components/MainSlider";
import { useState, useEffect } from "react";
import { TravelSupport } from "../components/TravelSupport";
import Application from "../components/Application";
import axios from "axios";
import Accordion from "../components/Accordion";
import { PagesDescription } from "../components/PagesDescription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useLanguage } from "../provider/Navbar";

const Home = ({ accordion, homePageDescription, iranState }) => {
  // useState
  const [isClose, setIsClose] = useState(false);
  const [Close, setClose] = useState(false);

  const lang = useLanguage();
  const router = useRouter();

  const clickHandler = () => {
    setIsClose(true);
  };

  const closeHandler = () => {
    setClose(true);
  };

  const [language, setLanguage] = useState("");

  useEffect(() => {
    setLanguage(router.locale);
  }, [language, router.locale]);


  return (
    <div className="flex flex-col lg:mt-16 bg-[#F6F6F6] dark:bg-[#222222] h-auto ">
      <Head>
        <title>بلیط هواپیما - خرید بلیط هواپیما | علی‌بابا</title>
        <meta
          name="description"
          content="خرید بلیط هواپیما از علی‌بابا : با سابقه ترین و معتبرترین سامانه رزرو بلیط هواپیما و خرید اینترنتی بلیط هواپیما چارتر و سیستمی، قطار و اتوبوس"
        />
      </Head>
      <MobileNav />
      <div className="hidden lg:block relative w-full h-[320px] bg-white dark:bg-[#222222] ">
        <Image
          src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-e1fa22fb.webp"
          objectFit={"cover"}
          layout={"fill"}
        />
      </div>
      <VehiclesContainer />
      <div className="mx-4 xl:!w-4/5 xl:mx-auto  2xl:!px-16 2xl:!w-4/5 -mt-4  !z-[2] ">
        <MainVehicleTravel iranState={iranState} />
      </div>
      <div className="mx-4 xl:!w-4/5 xl:mx-auto 2xl:!px-16 2xl:!w-4/5 -mt-4">
        <div
          className={
            isClose
              ? "hidden"
              : "bg-white dark:!bg-[#1b344d] p-4 flex flex-col mb-8 rounded-xl border lg:hidden dark:border-0"
          }
        >
          <div className="flex items-center mb-2">
            <svg
              viewBox="0 0 32 32"
              width="32px"
              height="32px"
              className="fill-svgLogo"
            >
              <path d="M17.955 25.05h-1.518l-2.04-5.853h1.516l2.042 5.853zM6 16.272V10.42a.988.988 0 011-.975h2v7.802H7c-.552 0-1-.437-1-.975zM27.14 5.348a2.05 2.05 0 00-1.843-.224l-5.969 2.183a3.057 3.057 0 01-1.054.187H7c-1.654 0-3 1.313-3 2.926v5.852c0 1.613 1.346 2.925 3 2.925h5.284l2.284 6.549c.263.75.99 1.254 1.808 1.254h1.716a1.93 1.93 0 001.555-.776 1.792 1.792 0 00.252-1.654l-1.874-5.373h.25c.362 0 .715.064 1.053.187l5.97 2.184a2.043 2.043 0 001.842-.224c.54-.364.86-.964.86-1.604V6.95c0-.64-.32-1.238-.86-1.602z"></path>
            </svg>
            <strong className="text-sm font-bold mr-2">بازخورد</strong>
            <button className="mr-auto" onClick={clickHandler}>
              <svg
                viewBox="0 0 24 24"
                width="16px"
                height="16px"
                className="fill-closeButton dark:fill-white"
              >
                <path d="m5.335 4.282.07.063L12 10.939l6.595-6.594a.75.75 0 0 1 1.123.99l-.063.07L13.061 12l6.594 6.595a.75.75 0 0 1-.99 1.123l-.07-.063L12 13.061l-6.595 6.594a.75.75 0 0 1-1.123-.99l.063-.07L10.939 12 4.345 5.405a.75.75 0 0 1 .99-1.123Z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs mb-2">
            با شرکت در نظرسنجی به ما برای بهبود تجربه کاربری کمک کنید.
          </p>
          <button className="flex items-center text-xs text-blue-400 dark:text-[#07ce39] py-1 px-2">
            ثبت بازخورد
            <svg
              viewBox="0 0 24 24"
              width="1rem"
              height="1rem"
              fill="currentColor"
            >
              <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
            </svg>
          </button>
        </div>

        <div
          className={
            Close
              ? "hidden"
              : "bg-white dark:!bg-[#1b344d] p-4 flex flex-col  rounded-xl border mb-8 lg:hidden"
          }
        >
          <div className="flex items-center mb-2">
            <svg
              viewBox="0 0 24 24"
              width="32px"
              height="32px"
              className="fill-svgLogo"
            >
              <path
                d="M12 1.5c5.79 0 10.5 4.71 10.5 10.5S17.79 22.5 12 22.5a10.43 10.43 0 0 1-6.067-1.945c-.033-.025-.07-.043-.097-.073C3.214 18.57 1.5 15.486 1.5 12 1.5 6.21 6.21 1.5 12 1.5ZM12 3c-4.963 0-9 4.037-9 9a8.971 8.971 0 0 0 2.625 6.346V18a3.754 3.754 0 0 1 3.75-3.75h5.25a3.754 3.754 0 0 1 3.75 3.75v.346A8.971 8.971 0 0 0 21 12c0-4.963-4.037-9-9-9Zm0 3a3.754 3.754 0 0 1 3.75 3.75A3.754 3.754 0 0 1 12 13.5a3.754 3.754 0 0 1-3.75-3.75A3.754 3.754 0 0 1 12 6Z"
                fillRule="evenodd"
              ></path>
            </svg>
            <strong className="text-sm font-bold mr-2">ورود /ثبت نام</strong>
            <button className="mr-auto" onClick={closeHandler}>
              <svg
                viewBox="0 0 24 24"
                width="16px"
                height="16px"
                className="fill-closeButton dark:fill-white"
              >
                <path d="m5.335 4.282.07.063L12 10.939l6.595-6.594a.75.75 0 0 1 1.123.99l-.063.07L13.061 12l6.594 6.595a.75.75 0 0 1-.99 1.123l-.07-.063L12 13.061l-6.595 6.594a.75.75 0 0 1-1.123-.99l.063-.07L10.939 12 4.345 5.405a.75.75 0 0 1 .99-1.123Z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs mb-2">
            با ورود یا ثبت نام در علی بابا از امکانات و اعلانات مخصوص بهره مند
            شوید.
          </p>
          <button className="flex items-center text-xs text-blue-400 dark:text-[#07ce39] py-1 px-2">
            ورود به حساب کاربری
            <svg
              viewBox="0 0 24 24"
              width="1rem"
              height="1rem"
              fill="currentColor"
            >
              <path d="M16.698 21.266a.75.75 0 0 1-1.08 1.037l-.066-.069-8.25-9.75a.75.75 0 0 1-.058-.89l.058-.078 8.25-9.75a.75.75 0 0 1 1.202.893l-.056.075L8.858 12l7.84 9.266Z"></path>
            </svg>
          </button>
        </div>

        <MainSlider />
        <TravelSupport />
        <Application />

        <h1 className="text-2xl font-bold mb-8 max-w-screen-2xl mx-auto">
          {lang == "fa" ? "پرسش های شما" : "your question"}
        </h1>

        {accordion
          .filter((a) => a.lng == lang)
          .map((item) => {
            return (
              <>
                {item.accordion.map((accordions) => {
                  return <Accordion accordions={accordions} />;
                })}
              </>
            );
          })}

        <h1 className="font-bold text-2xl dark:text-[#07ce39] mt-20  max-w-screen-2xl mx-auto">
          {lang == "fa" ? "بلیط هواپیما" : "airplane ticket"}
        </h1>

        {homePageDescription
          .filter((a) => a.lng == lang)
          .map((item, index) => {
            return (
              <>
                {item.description.map((pageDescription) => {
                  return (
                    <PagesDescription
                      id={pageDescription.id}
                      title={pageDescription.title}
                      description={pageDescription.description}
                      image={pageDescription.image}
                    />
                  );
                })}
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Home;


export const getStaticProps = async ({ locale }) => {

  let accordion = await axios.get(
    "http://localhost:3001/domesticFlightAccordion"
  );
  accordion = accordion.data;
  let homePageDescription = await axios.get(
    "http://localhost:3001/domesticFlightDescription"
  );
  homePageDescription = homePageDescription.data;
  let iranState = await axios.get("http://localhost:3001/iranState");
  iranState = iranState.data;
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "navbar",
        "travelSupport",
        "application",
        "footer",
      ])),
      accordion,
      homePageDescription,
      iranState,
    },
  };
};