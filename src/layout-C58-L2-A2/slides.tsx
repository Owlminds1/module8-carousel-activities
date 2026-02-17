"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C58-L2-A2/pointer1.json";

import Welldone from "@/components/wellDone";
import Table from "./table";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [response, setResponse] = useState(Array(1).fill(""));
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };

  //   enter to show more points logic

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      if (current === 1) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));

        scrollRef.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, activeSlide]);

  const handleAdd = () => {
    setResponse((prev) => [...prev, response]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="w-[70%] flex  justify-center items-center gap-2 flex-col">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "APPLE’S CASE STUDY"
            : activeSlide === 1
              ? " History of Apple"
              : activeSlide === 2
                ? "APPLE VIDEO"
                 : activeSlide === 3
                ? "UNDERSTANDING CUSTOMERS"
                : ""}
        </h4>
        <p className="text-center text-xl text-black">
          {activeSlide === 2
            ? " Let’s watch a video to see how Apple shows this:"
            : ""}
        </p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3  ">
        <div className="w-full shadow-md p-3 min-h-50 ">
          <Swiper
            loop={false}
            autoHeight
            allowTouchMove={false}
            autoplay={false}
            modules={[Navigation]}
            slidesPerView={1}
            // navigation
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C58Images/Apple.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-black text-lg animate_fadeInUp">
                    All companies want to be seen as innovative. All companies
                    want customer loyalty. But the truth is: very few companies
                    are able to maintain customer loyalty while constantly
                    innovating with better designs and functionality. Apple is
                    one such company.
                  </p>

                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C58Images/Apple_Headquarters.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-black text-lg animate_fadeInUp">
                    Apple rose from 8,000 employees and $7 billion in revenue in
                    1997 to 137,000 employees and $260 billion in revenue in
                    2019. Why?
                  </p>
                  <ul className="list-disc space-y-3">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li key={index} className="text-lg text-black">{i}</li>
                    ))}
                  </ul>

  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center w-full italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>


             <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-12 w-full flex justify-center items-center ">
                 <MyImage path=""/>
                </div>
              
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Table />
            </SwiperSlide>

            
          </Swiper>
        </div>

        {/* slide buttons  */}
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
              activeSlide < 3 ? "visible" : "invisible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>

      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default Slide;
