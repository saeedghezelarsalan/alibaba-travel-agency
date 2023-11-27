import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Application() {
  // Language
  const { t } = useTranslation("application");

  return (
    <div className="h-auto flex pt-3 px-4 md:px-10 xl:px-12 max-w-screen-2xl bg-white dark:border-[#1b344d] dark:bg-[#1b344d] mx-auto rounded-lg border shadow-sm  mb-20 2xl:px-12 mt-6">
      <div className="relative max-w-full ml-16 hidden md:block self-center">
        <Image
          src="https://cdn.alibaba.ir/h2/desktop/assets/images/app-mobile/qrcode-97ae53b8.jpg"
          alt=""
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div className="text-sm !flex flex-col justify-start  pl-4 items-start my-auto !text-justify max-h-full flex-1  lg:w-auto">
        <h2 className="font-bold lg:font-semibold text-sm lg:text-base xl:text-2xl mb-6">
          {t("application")}
        </h2>
        <h5 className="font-sm xl:text-xl hidden md:block">
          {t("fastTravel")}
        </h5>
        <h5 className="font-sm lg:hidden">{t("allTrip")}</h5>
        <div className="hidden md:block pt-6 mb-4 lg:mb-0 lg:py-12 text-[#0077DB] text-base dark:text-[#07ce39]">
          <p>{t("downloadLink")}</p>
        </div>
        <div className="text-[#959EA6] hidden md:block">{t("install")}</div>
        <button className="p-1 md:hidden rounded-xl my-2 bg-[#0077DB]">
          {t("installationGuide")}
        </button>
      </div>

      <div className="flex flex-[1] justify-center mx-auto md:ml-0 md:mr-auto !shrink-0 self-end">
          <img
            src={"https://cdn.alibaba.ir/h/desktop/assets//app/website/src/common/assets/images/app-mobile/app-mobile@1x.webp-09aa7fed.webp "}
            alt={''}
          />
      </div>
    </div>
  );
}
