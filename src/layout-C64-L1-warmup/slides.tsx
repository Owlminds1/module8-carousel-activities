"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import SlideData from "@/layout-C64-L1-warmup/slideData.json";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [shuffle, setShuffle] = useState(SlideData);
  const [activeBtnIndex, setActiveBtnIndex] = useState<(number | null)[]>(
    Array(SlideData.length).fill(null),
  );
  const [flippedSlides, setFlippedSlides] = useState<boolean[]>(
    Array(SlideData.length).fill(false),
  );

  const [correcct, setCorrect] = useState<HTMLAudioElement>();

  // 🔄 SLIDE CHANGE
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setShow(false);
  };

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  useEffect(() => {
    setCorrect(() => new Audio("/sound/correct.mp3"));
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  const handleCheck = (answer: string, select: string, index: number) => {
    if (flippedSlides[activeSlide]) return;
    setActiveBtnIndex((prev) => {
      const updated = [...prev];
      updated[activeSlide] = index;
      return updated;
    });
    setFlippedSlides((prev) => {
      const updated = [...prev];
      updated[activeSlide] = true;
      return updated;
    });

    if (answer == select) {
      correcct?.play();
      if (SlideData.length - 1 === activeSlide) {
        setOpen(true);
      }
    } else {
      const timer = setTimeout(() => {
        setFlippedSlides((prev) => {
          const updated = [...prev];
          updated[activeSlide] = false;
          return updated;
        });
      }, 2000);
    }
  };
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-5 gap-6">
      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black">Guess the Profession</h2>
        {/* <p className="text-lg mt-2 text-gray-700">
          Look at the image, read the tagline, and guess!
        </p> */}
      </div>

      {/* SLIDER */}
      <div className="w-[90%]  p-4">
        <div className="w-full shadow-md p-3 min-h-30 bg-white">
          <Swiper
            slidesPerView={1}
            allowTouchMove={false}
            autoHeight
            modules={[Navigation]}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            {SlideData.map((item, index) => (
              <SwiperSlide>
                <div className="grid grid-cols-12 w-full place-items-center gap-8 ">
                  <div className="col-span-12 w-full">
                    <h4 className="text-2xl font-bold text-center">
                      {" "}
                      {item.Question}
                    </h4>
                  </div>
                  <div className="col-span-12  w-full max-w-[80%] p-5 flex justify-center items-center flex-wrap gap-3">
                    {item.options.map((opt, optIndex) => (
                      <div key={optIndex} className="[perspective-1000px]">
                        <div
                          onClick={() =>
                            handleCheck(item.answer, opt, optIndex)
                          }
                          className={`
  ${optIndex === activeBtnIndex[activeSlide] && flippedSlides[activeSlide] ? "rotate-y-180" : ""}
  w-60 min-h-20 relative border border-black
  transition-transform duration-300
  [transform-style:preserve-3d]
  rounded-lg
`}
                        >
                          <div
                            className="absolute inset-0 flex justify-center items-center text-xl font-medium 
[backface-visibility:hidden] rounded-lg cursor-pointer"
                          >
                            {opt}
                          </div>

                          <div
                            className={`
  absolute inset-0 flex justify-center items-center text-xl font-medium
  rotate-y-180
  [backface-visibility:hidden]
  rounded-lg cursor-pointer
  ${
    optIndex === activeBtnIndex[activeSlide]
      ? item.answer === opt
        ? "bg-green-600 text-white"
        : "bg-red-500 text-white"
      : ""
  }
`}
                          >
                            {flippedSlides[activeSlide] &&
                            optIndex === activeBtnIndex[activeSlide]
                              ? item.answer === opt
                                ? "YEY! 🎉"
                                : "Try Again!"
                              : ""}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
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
              activeSlide < SlideData.length - 1 ? "visible" : "invisible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>

      {/* NAV BUTTONS */}

      {/* WELL DONE MODAL */}
      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default Slide;
