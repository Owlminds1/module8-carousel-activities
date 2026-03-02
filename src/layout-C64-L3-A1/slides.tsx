"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

import Slide2Data from "@/layout-C64-L3-A1/pointer2.json";

import Welldone from "@/components/wellDone";
import MyImage from "@/components/MyImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);
  const scrollRef4 = useRef<HTMLDivElement>(null);

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
        setVisibleCount((prev) => (prev < 3 ? prev + 1 : prev));

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );

        scrollRef2.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 2) {
        setVisibleCount3((prev) =>
          prev < Slide2Data.length * 2 ? prev + 1 : prev,
        );

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
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
            ? "TIME MACHINE"
            : activeSlide === 1
              ? "NIKE’S BRAND JOURNEY"
              : activeSlide === 2
                ? " NIKE’S BRAND JOURNEY"
                : ""}
        </h4>

        {/* <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 0
            ? "Part of being an entrepreneur is thinking attentively to plan ahead. We can apply the Gap Filling Technique to do so."
            : activeSlide === 1
              ? "Let’s say your product is a schoolbag. You have just begun with your first 50 customers. You want to grow your customer base."
              : activeSlide === 3
                ? "Based on this, let’s create a survey to improve the product. But this questionnaire is only geared towards customer feedback i.e. of students who use the schoolbag."
                : ""}
        </p> */}
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
                  <MyImage path="/C64Images/Time_Machine.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-1 ">
                  <p className="text-2xl  font-bold text-black">
                    A time machine lets us travel in time. We can either go in
                    the past or go forward into the future.
                  </p>

                  <div className="w-full flex flex-col justify-center items-center gap-5 ">
                    <ul className="list-disc space-y-3 w-full ">
                      {visibleCount >= 1 && (
                        <li className="text-2xl text-black">
                          You know where your product is{" "}
                          <span className="font-bold">(now)</span>
                        </li>
                      )}

                      {visibleCount >= 2 && (
                        <li className="text-2xl text-black">
                          You know where product wants to be{" "}
                          <span className="font-bold">(later)</span>
                        </li>
                      )}

                      {visibleCount >= 3 && (
                        <li className="text-2xl text-black">
                          This time machine lets you reflect on the time already
                          past.
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="col-span-12 w-full">
                    {3 > visibleCount && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  </div>
                  <div className="" ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-5 place-items-center p-2">
                <div className="col-span-6 w-full">
                  <iframe
                    className="w-[80%]"
                    height={300}
                    src="https://www.youtube.com/embed/Gi7Vy_2B_D8?si=Xg8u6ghpwT8LtTXM"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col  ">
                  <p className="text-2xl  font-bold text-black">
                    So let’s watch this video about the brand journey of Nike so
                    you can reflect on the following questions. Be sure to take
                    notes so you can answer these questions after the video!
                  </p>
                </div>

                <div className="col-span-12 w-full  flex flex-col justify-center items-center gap-5">
                  <h4 className="font-bold text-2xl ">Q&A</h4>
                  <MyImage path="/C64Images/" />
                </div>
                {Slide2Data.slice(0, visibleCount2).map((item, index) => (
                  <div
                    key={index}
                    className="col-span-12 w-full flex justify-center items-center gap-5"
                  >
                    <div className="w-full">
                      <MyImage path={item.image} />
                    </div>
                    <div className=" w-full flex justify-center items-start flex-col gap-8 ">
                      <h4 className="text-2xl text-black">{item.text}</h4>
                    </div>
                  </div>
                ))}

                <div className="col-span-12 w-full">
                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef2}></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-2 place-items-center p-2">
                <div className="col-span-12 text-center w-full font-bold text-black text-2xl">
                  SUGGESTIVE RESPONSES
                </div>
                {Slide2Data.map((item, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount3 > stepIndex;
                  const showAnswers = visibleCount3 > stepIndex + 1;
                  return (
                    <div
                      key={index}
                      className="col-span-12 w-full flex justify-center items-center gap-5"
                    >
                      <div className="w-full">
                        {showQuestion && <MyImage path={item.image} />}
                      </div>
                      <div className=" w-full flex justify-center items-start flex-col gap-8 ">
                        {showQuestion && (
                          <h4 className="text-2xl text-black">
                            <span className="font-bold">{index + 1}</span>.{" "}
                            {item.text}
                          </h4>
                        )}

                        <ul className="list-disc space-y-3 w-full">
                          {showAnswers &&
                            item.suggestion.map((i, idx) => (
                              <li key={idx} className="text-xl text-black">
                                {i}
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}

                <div className="col-span-12 w-full">
                  {Slide2Data.length * 2 > visibleCount3 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef3}></div>
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
