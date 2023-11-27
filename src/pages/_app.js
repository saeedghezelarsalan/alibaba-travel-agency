import "../../styles/globals.css";
import Head from "next/head";
import Navbar from "../Provider/Navbar";
import {appWithTranslation} from "next-i18next";
import BorderProvider from "../Provider/BorderProvider";
import Footer from "../components/Footer";
import DarkMode from "../components/DarkMode";
import {ThemeProvider} from "next-themes";

function MyApp({Component, pageProps}) {
  return (
    <div>
      <Head>
        <title>بلیط هواپیما - خرید بلیط هواپیما | علی‌بابا</title>
        <meta
          name="description"
          content="خرید بلیط هواپیما از علی‌بابا : با سابقه ترین و معتبرترین سامانه رزرو بلیط هواپیما و خرید اینترنتی بلیط هواپیما چارتر و سیستمی، قطار و اتوبوس"
        />
        <link
          rel="shortcut icon"
          href="https://cdn.alibaba.ir/h2/desktop/assets/images/logo-alibaba-square-logo-small-1fb61159.svg"
        />
      </Head>
      <ThemeProvider attribute="class">
        <Navbar>
          <BorderProvider>
            <Component {...pageProps} />
          </BorderProvider>
        </Navbar>
        <Footer/>
        <DarkMode/>
      </ThemeProvider>
    </div>
  );
}

export default appWithTranslation(MyApp);