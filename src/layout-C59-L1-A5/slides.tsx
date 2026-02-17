"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C59-L1-A5/pointer1.json";
import Slide2Data from "@/layout-C59-L1-A5/pointer2.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);

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
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2, activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount2, visibleCount, activeSlide]);

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
            ? " TAGLINE EXAMPLES"
            : activeSlide === 1
              ? "CREATE YOUR TAGLINE"
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
              <div className="grid grid-cols-12 gap-y-8 place-items-center p-2">
                {SlideData.slice(0, visibleCount).map((i, index) => (
                  <React.Fragment key={index}>
                    <div className="col-span-6 w-full flex justify-center items-center">
                      {index === 0 ? (
                        <iframe
                          width="400"
                          height="300"
                          className="rounded-lg"
                          src="https://www.youtube.com/embed/5sMBhDv4sik?si=XQGL6HYog3JpDLGF"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      ) : index === 3 ? (
                        <iframe
                          width="400"
                          height="300"
                          className="rounded-lg"
                          src="https://www.youtube.com/embed/MpaHR-V_R-o?si=OykCY_eVwM4WwO2_"
                          title="YouTube video player"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <MyImage path={i.image} />
                      )}
                    </div>

                    <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                      <h3 className="text-xl animate_fadeInUp  text-black font-bold w-full">
                        {i.text}
                      </h3>
                    </div>
                  </React.Fragment>
                ))}
                <div className="col-span-12 w-full">
                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div ref={scrollRef}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Tagline.jpg" />
                </div>
                <div className="col-span-6 w-full">
                  <ul className="list-disc space-y-3 w-full">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li key={index} className="text-black text-xl animate_fadeInUp ">
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
              activeSlide < 1 ? "visible" : "invisible"
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
