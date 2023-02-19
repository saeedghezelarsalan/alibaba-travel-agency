import axios from "axios";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MobileNav from "../components/MobileNav";

const Home = ({ accordion, homePageDescription, iranState }) => {
  return (
    <div className="flex flex-col lg:mt-16 bg-[#F6F6F6] dark:bg-[#222222] h-auto ">
      <Head>
        <title>بلیط هواپیما - خرید بلیط هواپیما | علی‌بابا</title>
        <meta
          name="description"
          content="خرید بلیط هواپیما از علی‌بابا : با سابقه ترین و معتبرترین سامانه رزرو بلیط هواپیما و خرید اینترنتی بلیط هواپیما چارتر و سیستمی، قطار و اتوبوس"
        />
      </Head>
      <div>

        <MobileNav />

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