"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C64-L2-A3/pointer.json";
import Slide2Data from "@/layout-C64-L2-A3/pointer2.json";
import Slide3Data from "@/layout-C64-L2-A3/pointer3.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";

import QuestionSlide from "./questionSlide";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);

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
          prev < Slide3Data.length ? prev + 1 : prev,
        );

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2,visibleCount3, activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount, visibleCount2,visibleCount3,]);

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
            ? "BUSINESS MODELS"
            : activeSlide === 1
              ? "BUSINESS MODELS"
              : activeSlide === 2
                ? "BUSINESS MODELS"
                : activeSlide === 3
                  ? "GUESS THE MODEL"
                  : ""}
        </h4>

       
        <p className="text-xl font-medium w-[80%] text-center text-black ">
           {
          activeSlide === 3 ?"Identify each prompt as a subscription, pay as you go, or a lease model.":""
        }
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
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-1 ">
                  <h3 className="text-2xl font-bold py-3 text-black">
                    Subscription Model
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

                  <div className="col-span-12 w-full">
                    {SlideData.length > visibleCount && (
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
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-1 ">
                  <h3 className="text-2xl font-bold py-3 text-black">
                    Pay as You Go Model
                  </h3>

                  <ul className="list-disc space-y-3 w-full">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li
                        key={index}
                        className="text-black text-xl font-medium"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  <div className="col-span-12 w-full">
                    {Slide2Data.length > visibleCount2 && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  </div>
                  <div className="" ref={scrollRef2}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-1 ">
                  <p className="text-2xl font-medium py-3 text-black">
                    Here is another business model.
                  </p>

                  <h3 className="text-2xl font-bold py-3 text-black">
                    Lease Model
                  </h3>

                  <ul className="list-disc space-y-3 w-full">
                    {Slide3Data.slice(0, visibleCount3).map((i, index) => (
                      <li
                        key={index}
                        className="text-black text-xl font-medium"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  <div className="col-span-12 w-full">
                    {Slide3Data.length > visibleCount3 && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  </div>
                  <div className="" ref={scrollRef3}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <QuestionSlide/>
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
