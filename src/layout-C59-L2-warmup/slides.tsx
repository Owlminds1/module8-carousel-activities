"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import SlideData from "@/layout-C59-L2-warmup/pointer1.json";
import MyImage from "@/components/MyImage";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const enterCountRef = useRef(0);


  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleStep, setVisibleStep] = useState(1); // 1 = question, 2 = answer
  const [open, setOpen] = useState(false);

  // ⌨️ ENTER KEY LOGIC
useEffect(() => {
  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key !== "Enter") return;

    // count enter presses
    enterCountRef.current += 1;

    // first enter → show answer
    if (visibleStep < 2) {
      setVisibleStep(2);
      return;
    }

    // second enter on LAST slide → open modal
    if (
      visibleStep === 2 &&
      activeSlide === SlideData.length - 1 &&
      enterCountRef.current >= 2
    ) {
      setOpen(true);
    }
  };

  window.addEventListener("keydown", handleKeyPress);
  return () => window.removeEventListener("keydown", handleKeyPress);
}, [activeSlide, visibleStep]);



  // 🔄 SLIDE CHANGE
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setVisibleStep(1); // reset on new slide
 enterCountRef.current = 0;
   
  };

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-5 gap-6">
      
      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black">
        GUESS THE COMPANY OR THE PRODUCT
        </h2>
        {/* <p className="text-lg mt-2 text-gray-700">
          Look at the image, read the tagline, and guess!
        </p> */}
      </div>

      {/* SLIDER */}
      <div className="w-[90%]  p-4">

          <div className="w-full shadow-md p-3 min-h-30 bg-white">

         
        <Swiper
          slidesPerView={1}
          allowTouchMove={false}
          autoHeight
          modules={[Navigation]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
        >
          {SlideData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-12 gap-8 items-center p-4">

                {/* LEFT IMAGE */}
                <div className="col-span-6 flex justify-center">
                  {visibleStep >= 1 && (
                    <MyImage path={item.image} />
                  )}
                </div>

                {/* RIGHT CONTENT */}
                <div className="col-span-6 flex flex-col gap-4">

                  {/* QUESTION */}
                  {visibleStep >= 1 && (
                    <h3 className="text-3xl font-bold animate_fadeInUp">
                      {item.text}
                    </h3>
                  )}

                  {/* ANSWER */}
                  {visibleStep >= 2 && (
                    <h3 className="text-2xl font-bold text-violet-900 animate_fadeInUp">
                      {item.answer}
                    </h3>
                  )}

                    {/* ENTER HINT */}
                {visibleStep < 2 && (
                  <div className="col-span-12 text-left italic text-gray-500 mt-4">
                    (Press Enter to show answer)
                  </div>
                )}
                </div>

              
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
 </div>
         <div className="flex justify-between items-center gap-5 w-full mt-8  ">
          <span
            onClick={handlePrev}
            className={`${
              activeSlide === 0 ? "invisible" : "visible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowLeft />
          </span>
          <span
            onClick={handleNext}
            className={` ${
              activeSlide < SlideData.length - 1 ? "visible" : "invisible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>

        
      </div>

      {/* NAV BUTTONS */}
     

      {/* WELL DONE MODAL */}
      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default Slide;
