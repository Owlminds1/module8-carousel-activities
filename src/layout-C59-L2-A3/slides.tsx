"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import Slide2Data from "@/layout-C59-L2-A3/pointer2.json";
import Slide3Data from "@/layout-C59-L2-A3/pointer3.json";
import Slide5Data from "@/layout-C59-L2-A3/pointer5.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";
import Link from "next/link";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);

  const scrollRef5 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [visibleCount3, setVisibleCount3] = useState(1);
  const [visibleCount5, setVisibleCount5] = useState(1);

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
        setVisibleCount2((prev) =>
          prev < Slide2Data.length * 2 ? prev + 1 : prev,
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

      if (current === 4) {
        setVisibleCount5((prev) =>
          prev < Slide5Data.length ? prev + 1 : prev,
        );

        scrollRef5.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount2, visibleCount5, visibleCount3, activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount2, visibleCount3, visibleCount5,  activeSlide]);

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
            ? "What is Branding? "
            : activeSlide === 1
              ? " ELEMENTS OF BRANDING"
              : activeSlide === 2
                ? "MARKETING"
                : activeSlide === 3
                  ? "EXAMPLES"
                  : activeSlide === 4
                    ? "MAKE AN AD"
                    : ""}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black "></p>
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
                <div className="col-span-6">
                  <MyImage path="/C59Images/" />
                </div>

                <div className="col-span-6 w-full flex flex-col gap-3">
                  <p className="text-2xl text-black w-full">
                    Branding is “the act of making a product, organization,
                    person, or place easy to recognize as different from others
                    by connecting it with a particular name, design, symbol, a
                    set of qualities etc.”
                  </p>

                  <p className="text-2xl text-black w-full">
                    This would include both identity and story i.e. how the
                    brand perceives itself and is perceived by others, as well
                    as the narrative the brand tells its customers.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/" />
                </div>

                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  {Slide2Data.map((i, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount2 > stepIndex;
                    const showAnswer = visibleCount2 > stepIndex + 1;
                    return (
                      <React.Fragment key={index}>
                        {showQuestion && (
                          <h3 className="text-xl  animate_fadeInUp text-black font-bold w-full">
                            {i.question}
                          </h3>
                        )}

                        <div className="w-full">
                          {showAnswer && (
                            <p className="text-black/80 w-full text-xl font-medium  animate_fadeInUp mt-3  ">
                              {i.heading}
                            </p>
                          )}
                          <ul className="list-disc space-y-3 w-full ">
                            {showAnswer &&
                              i.response.map((i, ind) => (
                                <li
                                  key={ind}
                                  className="text-black/80 animate_fadeInUp font-medium text-xl  w-full "
                                >
                                  {i}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </React.Fragment>
                    );
                  })}
                  {Slide2Data.length * 2 > visibleCount2 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>

                <div ref={scrollRef2}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/" />
                </div>

                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl text-black font-medium ">
                    Then comes marketing, which is essentially the way a brand
                    promotes itself to connect with the audience, develop
                    business, and establish itself as a force for good.
                  </p>

                  <p className="text-xl text-black font-medium ">
                    Now let’s say that you’ve to identify Apple Watch’s visual
                    identity to be able to create an innovative ad.{" "}
                    <span className="font-bold">What would you do?</span>
                  </p>

                  {Slide3Data.map((i, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount3 > stepIndex;
                    const showAnswer = visibleCount3 > stepIndex + 1;
                    return (
                      <React.Fragment key={index}>
                        {showQuestion && (
                          <h3 className="text-xl animate_fadeInUp  text-black font-bold w-full">
                            {i.question}
                          </h3>
                        )}

                        <ul className="list-disc space-y-3 w-full ">
                          {showAnswer &&
                            i.response.map((i, ind) => (
                              <li
                                key={ind}
                                className="text-black/80 animate_fadeInUp font-medium text-xl  w-full "
                              >
                                {i}
                              </li>
                            ))}
                        </ul>
                      </React.Fragment>
                    );
                  })}
                  {Slide3Data.length * 2 > visibleCount3 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>

                <div ref={scrollRef3}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/" />
                </div>

                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="w-full text-xl text-black font-bold">
                    To get you going, here are some resources:
                  </p>

                  <ul className="list-disc space-y-3 w-full">
                    <li className="text-black/80 text-xl font-medium">
                      An Apple Watch Poster
                    </li>
                    <li className="text-black/80 text-xl font-medium">
                      <Link
                        className="text-blue-400"
                        href="https://www.youtube.com/watch?v=w2jhL5jMOCM"
                        target="blank"
                      >
                        An Apple Watch video
                      </Link>
                    </li>

                    <li className="text-black/80 text-xl font-medium">
                      <Link
                        className="text-blue-400"
                        href="https://www.apple.com/in/watch"
                        target="blank"
                      >
                        Apple Website
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/" />
                </div>

                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="w-full text-xl text-black font-bold">
                    The mike is all yours! Make an innovative AD for Apple based
                    on what you know about the brand.
                  </p>
                  <ul className="list-disc space-y-3 w-full">
                    {Slide5Data.slice(0, visibleCount5).map((i, index) => (
                      <li className="text-black/80 text-xl font-medium">{i}</li>
                    ))}
                  </ul>
                   {Slide5Data.length  > visibleCount5 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
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
              activeSlide < 4 ? "visible" : "invisible"
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
