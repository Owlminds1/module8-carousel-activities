"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C58-L2-A2/pointer1.json";

import Welldone from "@/components/wellDone";
import Table from "./table";
import Link from "next/link";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [response, setResponse] = useState(Array(1).fill(""));
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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

        scrollRef.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, activeSlide]);

  const handleAdd = () => {
    setResponse((prev) => [...prev, response]);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="w-[70%] flex  justify-center items-center gap-2 flex-col">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "APPLE’S CASE STUDY"
            : activeSlide === 1
              ? " History of Apple"
              : activeSlide === 2
                ? "APPLE VIDEO"
                 : activeSlide === 3
                ? "UNDERSTANDING CUSTOMERS"
                : ""}
        </h4>
        <p className="text-center text-xl text-black">
          {activeSlide === 2
            ? " Let’s watch a video to see how Apple shows this:"
            : ""}
        </p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3  ">
        <div className="w-full shadow-md p-3 min-h-50 ">
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
                <div
                  className="col-span-6 w-full flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setZoomedImage("/C58Images/Apple.jpg")}
                >
                  <MyImage path="/C58Images/Apple.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-black text-xl animate_fadeInUp">
                    All companies want to be seen as innovative. All companies
                    want customer loyalty. But the truth is: very few companies
                    are able to maintain customer loyalty while constantly
                    innovating with better designs and functionality. Apple is
                    one such company.
                  </p>

                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div
                  className="col-span-6 w-full flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setZoomedImage("/C58Images/Apple_Headquarters.jpg")}
                >
                  <MyImage path="/C58Images/Apple_Headquarters.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-black text-2xl animate_fadeInUp">
                    Apple rose from 8,000 employees and $7 billion in revenue in
                    1997 to 137,000 employees and $260 billion in revenue in
                    2019. Why?
                  </p>
                  <ul className="list-disc space-y-3">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li key={index} className="text-xl text-black animate_fadeInUp">{i}</li>
                    ))}
                  </ul>

  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center w-full italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>


             <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <div className="w-full aspect-video rounded-lg overflow-hidden shadow-md">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/5hENFA3CJUY"
                      title="Apple Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 px-5">
                  <p className="text-black text-xl animate_fadeInUp leading-relaxed">
                    Watch how Apple brings its design philosophy to life —
                    turning simplicity and functionality into products
                    customers love.
                  </p>
                  <Link
                    href="https://youtu.be/5hENFA3CJUY"
                    target="_blank"
                    className="bg-violet-900 text-white px-5 py-2 rounded-lg hover:bg-violet-800 active:scale-95 transition-all duration-150 text-xl"
                  >
                    Watch on YouTube
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Table />
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

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 text-black text-3xl hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>
            <img src={zoomedImage} alt="Zoomed" className="w-full h-auto" />
          </div>
        </div>
      )}

      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default Slide;
