"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import SlideData from "@/layout-C64-L2-warmup/slideData.json";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [shuffle, setShuffle] = useState(SlideData);

  const [flippedSlides, setFlippedSlides] = useState<boolean[]>(
    Array(SlideData.length).fill(false),
  );

  // 🔄 SLIDE CHANGE
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setShow(false);
  };

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  useEffect(() => {
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-5 gap-6">
      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black">Guess the company</h2>
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
            {shuffle.map((item, index) => (
              <SwiperSlide>
                <div className="grid grid-cols-12 w-full place-items-center gap-8 ">
                  <div className="col-span-12 w-full">
                    <h4 className="text-2xl font-bold text-center">
                      {" "}
                      {item.text}
                    </h4>
                  </div>
                  <div className="col-span-12  w-full max-w-[80%] p-5 flex justify-center items-center flex-wrap gap-3">
                    {!show ? (
                      <button
                        onClick={() => {
                          setShow(true);
                          if (shuffle.length - 1 === activeSlide) {
                            setTimeout(()=>{
setOpen(true)
                            },3000)
                          };
                        }}
                        className="text-white text-xl bg-violet-900 px-5 py-2 rounded-lg  cursor-pointer"
                      >
                        Reveal Answer
                      </button>
                    ) : (
                      <p className="text-3xl font-bold text-violet-900 animate_fadeInUp">
                        {item.answer}
                      </p>
                    )}
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
