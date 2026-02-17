"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C58-L2-PCA/pointer1.json";
import Slide2Data from "@/layout-C58-L2-PCA/pointer2.json";

import Welldone from "@/components/wellDone";
import Table from "./table";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
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

      if (current === 1) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }

      if (current === 2) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount,visibleCount2, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, visibleCount2, activeSlide]);

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
          {activeSlide === 0
            ? "Watch this video to understand the brand journey of LEGO."
            :activeSlide === 1 ? "Think about:" : activeSlide === 2
              ? "Think also about": activeSlide === 3
              ? "User journey"
              : ""}
        </h4>

        <p className="text-xl  text-center text-black ">
         Design LEGO company’s user journey as per the example of Apple
        </p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3  ">
        <div className="w-full shadow-md p-3 min-h-50 bg-white">
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
                <div className="col-span-12 w-full flex justify-center items-center ">
                <iframe width="600" height="400" src="https://www.youtube.com/embed/qr_dTySMl7s?si=FnE40_2LVxcI8PhD" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
              
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
               
                <div className=" col-span-12 w-[60%]  flex justify-center items-center flex-col gap-5 ">
                  {/* <p className="text-black font-bold text-2xl  w-full ">
                  Think about:
                  </p> */}
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

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>


              <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
               
                <div className=" col-span-12 w-[60%]  flex justify-center items-center flex-col gap-5 ">
                  {/* <p className="text-black font-bold text-2xl  w-full ">
                  Think about:
                  </p> */}
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

             <SwiperSlide>
            <Table/>
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
