import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Profile } from "../../assets/images";
import "swiper/css";

import { srcToAlt } from "../../helper/index";

export default function Testimonial() {
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={3}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {[...new Array(5)].map((_, idx) => (
        <SwiperSlide key={idx}>
          <blockquote className="relative rounded-lg border-2 mb-8 text-center font-semibold tracking-wider border-slate-500 p-5">
            <p>
              Oat cake donut halvah liquorice gingerbread cake marzipan marzipan
              cake. Halvah cupcake cake candy canes fruitcake cookie. Danish
              soufflé gingerbread lollipop dessert cupcake biscuit wafer pie.
            </p>
            <footer className="py-2">
              <h5 className="text-slate-600">Name and Surname</h5>
              <img
                className="w-12 h-12 transform -translate-x-1/2 translate-y-1/2 absolute left-1/2 bottom-0 object-center object-cover rounded-full"
                src={Profile}
                alt={srcToAlt(Profile)}
              />
            </footer>
          </blockquote>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
