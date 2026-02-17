"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C59-L1-A2/pointer1.json";
import Slide2Data from "@/layout-C59-L1-A2/pointer2.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);



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

    if (current === 2) {
  setVisibleCount2((prev) =>
    prev < Slide2Data.length * 2 ? prev + 1 : prev,
  );

    scrollRef2.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
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
}, [visibleCount2, activeSlide]);


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
            ? "LEGOs AD"
            : activeSlide === 1
              ? "LEGO’s VIDEO"
              : activeSlide === 2
                ? "VIDEO Q&A"
                : ""}
        </h4>

        <p className="text-xl font-medium text-center text-black ">
          {activeSlide === 0
            ? "Let’s watch a video to inspire us to design an ad for the lemonade stand. While watching the video, think of the following questions"
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
                {SlideData.slice(0, visibleCount).map((i, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="col-span-6 w-full  flex justify-center items-center ">
                        <MyImage path={i.img} />
                      </div>
                      <div className=" col-span-6 w-full  flex justify-center items-center flex-col gap-5 ">
                        <h3 className="text-xl text-black font-bold w-full">
                          {i.question}
                        </h3>
                      </div>
                    </React.Fragment>
                  );
                })}
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
              <div className=" w-full  flex justify-center items-center flex-col gap-5 ">
                <iframe
                  width="600"
                  height="400"
                  src="https://www.youtube.com/embed/T0pTtj1-u9E?si=ib06UdoVzgHlqH44"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                {Slide2Data.map((i, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount2 > stepIndex;
                  const showAnswer = visibleCount2 > stepIndex + 1;
                  return (
                    <React.Fragment key={index}>
                        {showQuestion && 
                      <div className="col-span-6 w-full  flex justify-center items-center ">
                        <MyImage path={i.img} />
                      </div>
                      }
                      <div className=" col-span-6 w-full  flex justify-center items-center flex-col gap-5 ">
                        {showQuestion && (
                          <h3 className="text-xl  text-black font-bold w-full">
                            {i.question}
                          </h3>
                        )}

                        {showAnswer && (
                          <p className="text-black/80 font-medium text-lg  w-full ">
                           Answer : {i.response}
                          </p>
                        )}
                      </div>
                      
                    </React.Fragment>
                  );
                })}
                  
                <div className="col-span-12 w-full">
                  {Slide2Data.length *2 > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div ref={scrollRef2}></div>

             
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
