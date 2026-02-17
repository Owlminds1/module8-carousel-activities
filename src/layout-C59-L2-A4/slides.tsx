"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C59-L2-A4/pointer.json";
import Slide2Data from "@/layout-C59-L2-A4/pointer2.json";
import Slide3Data from "@/layout-C59-L2-A4/pointer3.json";
import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);

  const scrollRef5 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);
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

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );

        scrollRef2.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 2) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length * 2 ? prev + 1 : prev,
        );

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2, visibleCount3, activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount, visibleCount2, visibleCount3, activeSlide]);

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
            ? "SALES"
            : activeSlide === 1
              ? "SALES PITCH"
              : activeSlide === 2
                ? "LOCK FRAMEWORK"
                : activeSlide === 3
                  ? "Suggestive Response"
                  : ""}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 0
            ? "Let’s practice  how to create a sales pitch!"
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
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <ul className="list-disc space-y-3 w-full">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li className="text-black text-xl font-medium">{i}</li>
                    ))}
                  </ul>

                  {SlideData.length - 1 < visibleCount && (
                    <p className="w-full text-2xl text-black font-bold">
                      Ready?
                    </p>
                  )}
                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/AppleWatch.jpeg" />
                </div>

                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  <ul className="list-disc space-y-3 w-full">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li className="text-black text-xl font-medium">{i}</li>
                    ))}
                  </ul>

                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Framework.jpeg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-5 ">
                  {Slide3Data.map((item, index) => {
                    // const stepIndex = index * 2;
                    const showQuestion = visibleCount3 > index;
                    // const showAnswer = visibleCount7 > stepIndex + 1;

                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-start items-start gap-2"
                      >
                        {showQuestion && (
                          <h3 className="text-2xl text-black font-bold w-full">
                            {item.title}
                          </h3>
                        )}

                        {showQuestion && (
                          <h3 className="text-xl text-black/80 font-bold w-full">
                            {item.question}
                          </h3>
                        )}

                        {showQuestion && (
                          <textarea
                            placeholder="write here..."
                            rows={3}
                            className="text-lg text-black w-[80%] outline-0 border-2 p-2 rounded-lg "
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="col-span-12 w-full">
                  {Slide3Data.length > visibleCount3 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Framework.jpeg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-5 ">
                  {Slide3Data.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-start items-start gap-2"
                      >
                        <h3 className="text-2xl text-black font-bold w-full">
                          {item.title}{" "}
                          <span className="font-medium text-black/80">
                            {item.subHeading}
                          </span>
                        </h3>

                        <p className="text-black text-xl w-full">
                          {item.answers}
                        </p>
                      </div>
                    );
                  })}
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
