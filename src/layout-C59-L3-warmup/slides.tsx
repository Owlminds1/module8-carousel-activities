"use client";

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import SlideData from "@/layout-C59-L3-warmup/pointer1.json";
import MyImage from "@/components/MyImage";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [shuffle,setShuffle] =useState(SlideData)

  // 🔄 SLIDE CHANGE
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setShow(false);
  };

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();


  useEffect(()=>{
setShuffle((prev)=> [...prev].sort(()=> Math.random() - 0.5))
  },[])
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-5 gap-6">
      {/* HEADER */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-black">
      Old and New
        </h2>
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
            {shuffle.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="grid grid-cols-12 gap-15 items-center p-4">
                  {/* LEFT IMAGE */}
                  <div className="col-span-12 flex justify-center items-center gap-8 w-full">
                    {item.logos.map((i) => (
                      <MyImage
                        key={i.image}
                        path={i.image}
                        width={200}
                        className="border"
                      />
                    ))}
                  </div>
                  <div className="col-span-12  p-3 flex justify-center w-full">
                    {!show ? (
                      <button
                        onClick={() => setShow(true)}
                        className="bg-violet-900 text-white px-5 py-2 rounded-lg cursor-pointer active:scale-95 transition-all duration-150 "
                      >
                        Suggestive Responses
                      </button>
                    ) : (
                      <div className="flex justify-center items-center gap-8 w-full flex-col border p-3 rounded-lg bg-violet-50">
                        <h4 className="text-2xl text-center text-black font-bold">
                          {" "}
                          Suggestive Responses
                        </h4>
                        <div className="flex justify-center items-center gap-8 w-full">
                          {item.logos.map((sugge) => (
                            <div key={sugge.image}>
                              <MyImage
                                path={sugge.image}
                                width={200}
                                className=" min-h-60"
                              />

                              <h3 className="bg-violet-100 text-center text-lg text-violet-900 font-medium py-2 border-violet-900 w-full border">
                                {sugge.title}
                              </h3>
                            </div>
                          ))}
                        </div>
                      </div>
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
