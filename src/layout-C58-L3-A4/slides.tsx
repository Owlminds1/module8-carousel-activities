"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C58-L3-A4/pointer1.json";
import Slide2Data from "@/layout-C58-L3-A4/pointer2.json";

import Welldone from "@/components/wellDone";
import MyImage from "@/components/MyImage";
import Table from "./table";
import SuggestionTable from "./suggestionTable";

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
      }

       if (current === 3) {
        setVisibleCount2((prev) => (prev < Slide2Data.length ? prev + 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2,activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
    if (!scrollRef.current) return;

    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [visibleCount, activeSlide]);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (SlideData2.length * 2 === visibleCount2) {
  //     setOpen(true);
  //   }
  // }, [visibleCount2]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0 ? "SURVEY" : activeSlide === 1 ? "QUESTIONS" :activeSlide === 2 ?"SUGGESTIVE RESPONSES" :activeSlide === 3 ? "FORMS" : ""}
        </h4>

        <p className="text-xl font-medium text-center text-black ">
          {activeSlide === 3
            ? "Here’s how to use google forms.n"
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
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full  flex justify-center items-center">
                  <MyImage path="/C58Images/Survey3.jpg" />
                </div>
                <div className=" col-span-6 w-full  flex justify-center items-center flex-col gap-5 ">
                  <p className="text-black  text-xl  w-full ">
                    A survey has to be designed in a way that allows users to
                    answer honestly, but also in a time-effective manner. Most
                    users are unlikely to fill out a general survey, but we want
                    to make sure that those who do are able to feel like their
                    time is well spent.
                  </p>

                  <p className="text-black  text-xl  w-full ">
                    So we pay attention to:
                  </p>

                  <ul className="list-disc w-full space-y-3 px-2">
                    {SlideData.slice(0, visibleCount).map((item, index) => (
                      <li
                        className="text-black text-xl animate_fadeInUp"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {SlideData.length - 1 < visibleCount && (
                    <p className="text-black/80  text-lg  w-[80%] text-center ">
                      Are you ready to design such questions for Managebac users
                      in their third year? Let’s go!
                    </p>
                  )}

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
              <Table />
            </SwiperSlide>
            
             <SwiperSlide>
              <SuggestionTable />
            </SwiperSlide>



             <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
              
                <div className=" col-span-12 w-[60%]  flex justify-center items-center flex-col gap-5 ">
                 

                  <ul className="list-disc w-full space-y-3 px-2">
                    {Slide2Data.slice(0, visibleCount2).map((item, index) => (
                      <li
                        className="text-black text-xl animate_fadeInUp"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

               
                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
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
