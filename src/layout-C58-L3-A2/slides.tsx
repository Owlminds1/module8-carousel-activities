"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C58-L3-A2/pointer1.json";
import Slide2Data from "@/layout-C58-L3-A2/pointer2.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";
import Link from "next/link";
import Table from "./table";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);


  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(0);
  const [visibleCount3, setVisibleCount3] = useState(1);

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

      if (current === 0) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
        if (!scrollRef.current) return;

        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );
      }

      if (current === 2) {
        setVisibleCount3((prev) => (prev < 3 ? prev + 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2, visibleCount3,activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount2, visibleCount,visibleCount3, activeSlide]);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (Slide3Data.length * 2 === visibleCount3) {
  //     setOpen(true);
  //   }
  // }, [visibleCount3]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "MARKET SEGMENT"
            : activeSlide === 1
              ? "PRODUCT-MARKET FIT"
              : activeSlide === 2
                ? "MANAGEBAC"
                : ""}
        </h4>

        <p className="text-xl font-medium text-center text-black ">
          {activeSlide === 0
            ? "Create a tagline for your product! Here are some examples: "
            : ""}
        </p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3  ">
        <div className="w-full shadow-md p-3 min-h-30 bg-white">
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
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/" />
                </div>
                <div className="col-span-6 w-full">
                  <ul className="list-disc space-y-3 w-full">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li
                        key={index}
                        className="text-black text-xl animate_fadeInUp "
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-5 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/" />
                </div>
                <div className="col-span-6 w-full flex flex-col gap-5">
                  <h4 className="text-2xl font-bold text-black w-full">
                    What is a product-market fit?
                  </h4>

                  <ul className="list-disc space-y-3 w-full">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li
                        key={index}
                        className="text-black text-xl animate_fadeInUp "
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-5 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/" />

                  <h5 className="text-sm w-full text-center text-black italic">
                    Source: Managebac website
                  </h5>
                </div>

                <div className="col-span-6 w-full flex flex-col gap-5">
                  {visibleCount3 >= 1 && (
                    <h4 className="text-2xl font-bold text-black w-full">
                      Let’s try to understand this by answering some questions
                      about an educational software called Managebac.{" "}
                    </h4>
                  )}

                  {visibleCount3 >= 2 && (
                    <p className="text-xl text-black w-full ">
                     <span className="font-bold"> This is what Managebac promises to deliver:</span> “ManageBac+ is
                      a flexible multi-curricula teaching and learning platform
                      where curriculum management, lesson planning, assessment,
                      communication, reporting and much more flow together
                      effortlessly. Our platform helps international schools
                      improve their operational processes and deliver unique
                      educational experiences.”
                    </p>
                  )}
                  
                  
                   {visibleCount3 >= 3 && (
                    <p className="text-xl text-black w-full ">
                    Quoted directly from the <Link href="https://www.managebac.com/" target="blank" className="text-blue-500">website</Link>.
                    </p>
                  )}


                  
               

                  {3 > visibleCount3 && (
                    <p className="text-gray-800 mt-5 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
            
            <SwiperSlide>
            <Table swiperRef={swiperRef}/>
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

  
    </div>
  );
};

export default Slide;
