"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C64-L2-PCA/pointer.json";
import subSlideData from "@/layout-C64-L2-PCA/subPointer1.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";
import Table from "./table";
import Link from "next/link";
const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [subVisibleCount, setSubVisibleCount] = useState(1);

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
        // 1️⃣ First main points
        if (visibleCount < SlideData.length) {
          setVisibleCount((prev) => prev + 1);
          return;
        }

        // 2️⃣ Then subSlideData
        if (subVisibleCount < subSlideData.length) {
          setSubVisibleCount((prev) => prev + 1);
          return;
        }

      

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, subVisibleCount, activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount, subVisibleCount]);

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
          {activeSlide === 0 ? "Product Pitch" : ""}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 0
            ? "Draw inspiration from Y Combinator to create a presentation to sum up what our idea is all about. Y Combinator is a start-up accelerator that gives seed funding to emerging entrepreneurs."
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
              <div className="flex wfull  justify-start gap-8 items-center flex-col p-5">
                <h3 className="text-2xl text-black font-bold">
                  Here are some videos to get some inspiration:
                </h3>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/4nxrkPtR348?si=qyJkM8dHsDjH5u3O"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TZoprxGzzMM?si=BrBK5D9eh-qqRc0k"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-1 ">
                  <div>
                    <h3 className="text-2xl font-bold py-3 text-black">
                      Guidelines for the video:
                    </h3>

                    <ul className="list-disc space-y-3 w-full">
                      {SlideData.slice(0, visibleCount).map((i, index) => (
                        <li
                          key={index}
                          className="text-black text-xl font-medium"
                        >
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {SlideData.length - 1 < visibleCount && (
                    <div className="flex flex-col gap-5">
                      <h3 className="text-2xl font-bold py-3 text-black">
                        Marketing exists to:
                      </h3>

                      {subSlideData
                        .slice(0, subVisibleCount)
                        .map((item, index) => (
                          <div key={index} className="flex flex-col gap-2">

<h4 className="font-bold text-2xl"> {item.tite} :</h4>
                            <ul className=" space-y-5 w-full">
                              {item.text.map((i, idx) => (
                                <li
                                  key={idx}
                                  className="text-black text-xl font-medium"
                                >
                                 {i}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                    </div>
                  )}

                  <div className="col-span-12 w-full">
                    {SlideData.length +
                      subSlideData.length >
                      visibleCount +
                      subVisibleCount && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  <div className="" ref={scrollRef}></div>
                  </div>
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
              activeSlide < 2 ? "visible" : "invisible"
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
