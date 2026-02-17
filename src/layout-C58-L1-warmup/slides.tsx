"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";
import TableData from "@/layout-C58-L1-warmup/tableData.json";

import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="w-[60%]">
        <h4 className="text-3xl font-bold text-black text-center">
          Seven rectangles
        </h4>

        {/* <p className="text-center text-black text-xl">
          {activeSlide === 0
            ? "We are going to do a role playing technique for you to get in your customers’ shoes. Read the following questions with examples to answer responses for your product."
            : activeSlide === 2
              ? "Ready? We can use the same example to expand it further. Fill in the blanks by applying the technique."
              : ""}
        </p> */}
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
              <div className="flex justify-center items-center  w-full  p-5">
                <div className="flex flex-col justify-center gap-2 items-start w-[50%]">
                  {TableData.map((i, index) => (
                    <div
                      style={{ width: i.width }}
                      key={index}
                      className="border min-h-15 border-black"
                    ></div>
                  ))}
                </div>
              </div>
            </SwiperSlide>

          

            <SwiperSlide>
              <div className="flex justify-center items-center  w-full  p-5">
                <div className="flex flex-col justify-center gap-2 items-start w-[50%]">
                  {/* <h4 className="w-full text-black/60 text-xl pb-5 ">Example</h4> */}
                  {TableData.map((i, index) => (
                    <div
                      style={{ width: i.width }}
                      key={index}
                      className="border flex justify-start items-center min-h-15 border-black"
                    >
                      <h4 className="px-3 text-xl">{i.text}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center  w-full  p-5">
                <div className="flex flex-col justify-center gap-2 items-start w-[50%]">
                  {TableData.map((i, index) => (
                    <textarea
                      style={{ width: i.width }}
                      key={index}
                      maxLength={index+1}
                      className="border placeholder:text-sm  text-xl font-medium  border-black px-3 py-1"
                      placeholder="write here..."
                    />
                  ))}
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
