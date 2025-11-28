import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import HeroBannerCard from "./HeroBannerCard";

const data = fetch("/slidesData.json")
  .then((res) => res.json())
  .then((data) => data);

const HeroBanner = () => {
  const slides = use(data);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden z-0">
      <Swiper
        spaceBetween={30}
        effect="fade"
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay, EffectFade]}
        className="h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <HeroBannerCard slide={slide}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;
