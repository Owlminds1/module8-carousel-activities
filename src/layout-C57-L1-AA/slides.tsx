"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C57-L1-AA/pointer1.json";

import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  // const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setShow(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black text-center">
          {activeSlide === 0
            ? "INNER VOICE GAME"
            :
             "Inner Voice Cards"
             }
        </h4>

        {/* <p className="text-center text-black text-xl">
          {activeSlide === 2 ? "" : ""}
        </p> */}
      </div>

      <div className="w-[30%] flex justify-center items-center flex-col gap-3  ">
        <div className="w-full  shadow-md   ">
          <Swiper
            loop={false}
            autoHeight
            allowTouchMove={true}
            autoplay={false}
            modules={[Navigation]}
            slidesPerView={1}
            // navigation
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            <SwiperSlide>
              <div className="h-100 w-full flex justify-center items-center  px-8 ">
                <ul className="list-disc space-y-3">
                  <li className="text-xl">
                    Each card either has a buster (negative) or a booster voice
                    (positive)
                  </li>
                  <li className="text-xl">
                    Identify which card is a buster and which is a booster
                  </li>
                  <li className="text-xl">Transform the buster into booster</li>
                  <li className="text-xl">Keep the booster!</li>
                </ul>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="h-120 w-full ">
                <MyImage path="/C57Images/Inner_Voice.jpg" fill={true} />
              </div>
            </SwiperSlide>

            {SlideData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="h-140 relative rounded-lg overflow-hidden  w-full bg-[url('/C57Images/bg-star.jpg')] bg-cover bg-no-repeat bg-center  flex justify-center items-center">
                  <div
                    onClick={handlePrev}
                    className="absolute cursor-pointer z-10 top-0 left-0 h-full w-[10%] "
                  ></div>
                  <div className="h-full relative p-5 w-full gap-5 flex justify-center items-center flex-col ">
                    <h4 className="text-xl text-center font-bold w-[70%]">
                      {i.text}
                    </h4>
                    {show ? (
                      <div className="w-[70%]">
                        <p className="animate_fadeInUp text-violet-900 text-xl font-bold text-center">{`(${i.ans})`}</p>
                        <p className="animate_fadeInUp text-violet-900 text-xl font-bold text-center">
                          {i.suggestion}
                        </p>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShow(true)}
                        className="text-white bg-violet-900 cursor-pointer px-5 py-2 text-lg rounded-lg active:scale-95 transition-all duration-300 "
                      >
                        show suggestion
                      </button>
                    )}
                  </div>
                  <div
                    onClick={handleNext}
                    className={`${activeSlide > SlideData.length ? "cursor-default" : "cursor-pointer"} absolute  z-10 top-0 right-0 h-full w-[10%]`}
                  ></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* slide buttons  */}
        <div className="flex justify-between items-center gap-5 w-full mt-8  ">
          <span
            onClick={handlePrev}
            className={`${
              activeSlide > 1 || activeSlide === 0 ? "invisible" : "visible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowLeft />
          </span>
          <span
            onClick={handleNext}
            className={` ${
              activeSlide < SlideData.length && activeSlide <= 1
                ? "visible"
                : "invisible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>

      {/* <Welldone open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default Slide;
