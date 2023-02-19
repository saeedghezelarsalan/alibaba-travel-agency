import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function MainSlider() {
  return (
    <div className="block my-6 h-[170px] lg:h-[250px] relative !bg-[#f5f5f5] mx-auto dark:!bg-[#222222] ">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        allowTouchMove={true}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        spaceBetween={3}
        breakpoints={{
          769: {
            slidesPerView: 2,
          },
        }}
        className="!max-w-screen-2xl mx-auto w-full  relative"
      >
        <SwiperSlide>
          <div className="relative w-full max-w-auto h-full object-cover ">
            <Image
              src={
                "https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/flight.webp-1a60c658.webp"
              }
              className="rounded-lg"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full max-w-auto h-full  object-cover ">
            <Image
              src={
                "https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/kish-travel-book.webp-c0a016c0.webp"
              }
              className="rounded-lg"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full max-w-auto h-full  object-cover ">
            <Image
              src={
                "https://cdn.alibaba.ir/h/desktop/assets/images/breaking-news/pensioners.webp-f85b5e0b.webp"
              }
              className="rounded-lg"
              layout="fill"
              objectFit="fill"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}