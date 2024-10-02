import React, { useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const NewHero = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1542059765-8a5aff6c0dc7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "https://images.unsplash.com/photo-1699609916955-9e45237da02c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <div className="min-h-[500px] h-[500px] md:h-[600px] w-full bg-white flex justify-center items-center p-5">
        <div className=" group shadow-2xl relative w-[95%] h-[95%] rounded-2xl bg-yellow-300 select-none overflow-hidden z-0">
          <Swiper
            className="mySwiper"
            navigation={{
              nextEl: ".next-slide-btn",
              prevEl: ".prev-slide-btn",
            }}
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img.url} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="prev-slide-btn hidden bg-slate-700 bg-opacity-60 p-2 rounded-lg text-white md:group-hover:block absolute left-4 top-[50%] translate-y-[-50%] text-3xl z-10">
            <GrPrevious />
          </div>
          <div className="next-slide-btn hidden bg-slate-700 bg-opacity-60 p-2 rounded-lg text-white md:group-hover:block absolute right-4 top-[50%] translate-y-[-50%] text-3xl z-10">
            <GrNext />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHero;






// const [currentIndex, setCurrentIndex] = useState(0);
// const prevSlide = () => {
//   const isFirstSlide = currentIndex === 0;
//   const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
//   setCurrentIndex(newIndex);
// };

// const nextSlide = () => {
//   const isLastSlide = currentIndex === images.length - 1;
//   const newIndex = isLastSlide ? 0 : currentIndex + 1;
//   setCurrentIndex(newIndex);
// };

{
  /* <img className="w-full h-full object-cover transition-transform duration-2000 ease-in-out select-none" src={images[currentIndex].url} />
          <div onClick={prevSlide} className="hidden h-full items-center px-6 group-hover:flex absolute top-[50%] left-0 translate-x-0 translate-y-[-50%] text-3xl cursor-pointer">
          <GrPrevious />
          </div>
          <div onClick={nextSlide} className="hidden h-full items-center px-6 group-hover:flex absolute top-[50%] right-0 translate-x-0 translate-y-[-50%] text-3xl cursor-pointer">
          <GrNext />
          </div> */
}
