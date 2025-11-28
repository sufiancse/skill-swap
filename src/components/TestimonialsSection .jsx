import React, { use } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import TestimonialsSectionCard from "./TestimonialsSectionCard";

const testimonialsJSON = fetch("/testimonialsData.json").then((res) =>
  res.json()
);

const TestimonialsSection = () => {
  const testimonials = use(testimonialsJSON);
  return (
    <section className=" py-15 ">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
        <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
          Hear from our talented users who have grown their skills and earned
          through SkillSwap.
        </p>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <TestimonialsSectionCard t={t}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
