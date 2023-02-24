import Head from "next/head";
import Image from "next/image";
import VehiclesContainer from "../components/VehiclesContainer";
import AccommodationTravel from "../components/Form/smallTravelDetailsForm/AccommodationTravel";
import MainSlider from "../components/MainSlider";
import { useState, useEffect } from "react";
import { TravelSupport } from "../components/TravelSupport";
import Application from "../components/Application";
import axios from "axios";
import Accordion from "../components/Accordion";
import { PagesDescription } from "../components/PagesDescription";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MainAccommodationTravel from "../components/Form/mainTravelDetailsForm/MainAccommodationTravel";
import { useRouter } from "next/router";
import { useLanguage } from "../Provider/Navbar";

const Home = ({ accordion, homePageDescription, iranState }) => {

  const lang = useLanguage();
  const router = useRouter();

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
      <AccommodationTravel iranState={iranState} />
      
      <div className="hidden lg:block relative w-full h-[320px] bg-white dark:bg-[#222222] ">
        <Image
          src="https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-e1fa22fb.webp"
          objectFit={"cover"}
          layout={"fill"}
        />
      </div>
      <VehiclesContainer />
      <div className="mx-4 xl:!w-4/5 xl:mx-auto  2xl:!px-16 2xl:!w-4/5 -mt-4  !z-[2] ">
        <MainAccommodationTravel iranState={iranState} />
     
      </div>
      <div className="mx-4 xl:!w-4/5 xl:mx-auto 2xl:!px-16 2xl:!w-4/5 -mt-4">

        <div className="hidden lg:block">
          <MainSlider />
          <TravelSupport />
          <Application />
        </div>

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

export const getStaticProps = async ({locale}) => {
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
      ...(await serverSideTranslations(locale , [
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
