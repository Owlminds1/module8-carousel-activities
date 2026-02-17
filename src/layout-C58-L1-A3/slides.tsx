"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C58-L1-A3/pointer1.json";

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

      if (current === 0) {
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
            ? "SURVEY TO IMPROVE PRODUCT"
            : activeSlide === 1
              ? "SURVEY TO IMPROVE PRODUCT"
              : activeSlide === 2
                ? "Now it’s time to ask two more questions about the workshop and give the responses too!"
                : ""}
        </h4>
        <p className="text-center text-xl text-black">
          {activeSlide === 0
            ? " Let’s say that the museum has designed a survey for the participants to know how they feel about the workshops offered."
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
                  <MyImage path="/C58Images/Survey.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <div className=" w-full space-y-3 px-2">
                    {SlideData.slice(0, visibleCount).map((item, index) => (
                      <p
                        className="text-black text-lg animate_fadeInUp"
                        key={index}
                      >
                        {item}
                      </p>
                    ))}
                  </div>

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Table />
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full grid grid-cols-12 p-2 place-items-start">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <ul className="list-disc spacey-3 w-[80%] pb-3">
                    <li className="text-xl  text-black ">
                      Add 2 more questions - one close-ended and another
                      open-ended.
                    </li>
                    <li className="text-xl  text-black ">
                      Imagine that you are one of the participants. Answer the
                      question you would have asked.
                    </li>
                  </ul>
                </div>

                <div
                  className={`col-span-6  grid grid-cols-12 w-full p-2 place-items-start`}
                >
                  <div className="col-span-6 text-center w-full bg-violet-900 text-white p-1">
                    RESPONSES
                  </div>
                  <div className="col-span-6 text-center w-full bg-violet-900 text-white p-1">
                    QUESTIONS
                  </div>

                  {response.map((_, index) => (
                    <React.Fragment key={index}>
                      <div className="col-span-6  w-full  p-1">
                        <textarea
                          placeholder="write response"
                          rows={3}
                          className="w-full text-black p-2 border"
                        />
                      </div>

                      <div className="col-span-6  w-full  p-1">
                        <textarea
                          placeholder="write question"
                          rows={3}
                          className="w-full text-black p-2 border"
                        />
                      </div>
                    </React.Fragment>
                  ))}
                  <div className="col-span-12 text-center  w-full  p-1">
                    <button
                      className="bg-violet-900 text-white px-5 py-2 cursor-pointer active:scale-95 transition-all duration-500 rounded-lg"
                      onClick={handleAdd}
                    >
                      Add Row{" "}
                    </button>
                  </div>
                </div>
              </div>
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
