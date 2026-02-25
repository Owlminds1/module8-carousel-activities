"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C57-L2-A2/pointer1.json";
import Slide2Data from "@/layout-C57-L2-A2/pointer2.json";
import Slide3Data from "@/layout-C57-L2-A2/pointer3.json";

import Welldone from "@/components/wellDone";

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
    scroll(0, 0);
  };

  //   enter to show more points logic

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      if (current === 0) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );

        window.scroll(0, 500);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, visibleCount2, activeSlide]);

  // when the student answer the all questions welldone box open
  useEffect(() => {
    if (activeSlide === 3) {
      const time = setTimeout(() => {
        setOpen(true);
      }, 3000);
      return()=> clearTimeout(time)
    }
  }, [activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "Gap Filling Technique"
            : activeSlide === 1
              ? "Applying the Gap Filling Technique"
              : activeSlide === 2
                ? "Applying the Gap Filling Technique"
                : "Suggestive Responses"}
        </h4>

        <p className="text-xl  text-center text-black ">
          {activeSlide === 2
            ? "Answer the following questions based on what product you want to create and how."
            : ""}
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
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C57Images/Technique2.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-black/80 text-2xl  w-full ">
                    Part of being an entrepreneur is thinking attentively to
                    plan ahead. We can apply the Gap Filling Technique to do so.
                  </p>
                  <h3 className="text-black font-bold text-xl w-full">
                    With this technique:
                  </h3>
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
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C57Images/Technique2.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
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

                  {Slide2Data.length - 1 < visibleCount2 && (
                    <div className="flex flex-col gap-3 animate_fadeInUp">
                      <p className="text-black/80 text-xl  w-full ">
                        <span className="font-bold">Situation :</span> Let’s say
                        that you are on Lori and Cassidy Crowley’s team of
                        BabyToon.
                      </p>
                      <ul className="list-disc space-y-4">
                        <li className="text-black  text-lg">
                          You’ve been working with the same product i.e. baby
                          spoon for five years now.
                        </li>

                        <li className="text-black  text-lg">
                          Next, you’re thinking of expanding to create new
                          products within the same category.
                        </li>
                      </ul>

                      <h3 className="text-black font-bold text-xl">
                        What would you create?
                      </h3>
                    </div>
                  )}
                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-12 w-full flex justify-center items-center ">
                  <MyImage path="/C57Images/Cassidy.png" />
                </div>
                <div className=" col-span-12 w-[70%] flex justify-center items-center flex-col gap-5 ">
                  <h4 className="text-2xl text-black font-medium ">
                    For each pointer, read where you’re to list where you want
                    to be.
                  </h4>

                  <h4 className="text-2xl text-black font-medium ">
                    Think about:
                  </h4>
                  {Slide3Data.map((i, index) => (
                    <div
                      key={index}
                      className="w-full flex justify-center items-center flex-col gap-5 border-b p-5  "
                    >
                      <h4 className="text-xl font-bold w-[60%] text-violet-900 ">
                        {i.question}
                      </h4>
                      <div className="flex flex-col  w-[60%]  gap-2">
                        <h4 className="text-xl text-black ">Where we are</h4>
                        <textarea
                          placeholder="write here..."
                          className=" min-h-20 border border-black text-xl rounded-lg w-full text-black p-3 outline-0 text-center "
                          value={i.we_are}
                          readOnly
                        />
                      </div>

                      <div className="flex flex-col  w-[60%] gap-2">
                        <h4 className="text-xl text-black ">
                          Where we want to be
                        </h4>
                        <textarea
                          placeholder="write here..."
                          className=" min-h-20 border border-black text-xl rounded-lg w-full text-black p-3 text-center "
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-12 w-full flex justify-center items-center ">
                  <MyImage path="/C57Images/Cassidy.png" />
                </div>
                <div className=" col-span-12 w-[70%] flex justify-center items-center flex-col gap-5 ">
                  {Slide3Data.map((i, index) => (
                    <div
                      key={index}
                      className="w-full flex justify-center items-center flex-col gap-5 border-b p-5  "
                    >
                      <h4 className="text-xl font-bold w-[60%] text-violet-900 ">
                        {i.question}
                      </h4>
                      <div className="flex flex-col  w-[60%]  gap-2">
                        <h4 className="text-xl text-black ">Where we are</h4>
                        <textarea
                          placeholder="write here..."
                          className=" min-h-20 border border-black text-xl rounded-lg w-full text-black p-3 outline-0 text-center "
                          value={i.we_are}
                          readOnly
                        />
                      </div>

                      <div className="flex flex-col  w-[60%] gap-2">
                        <h4 className="text-xl text-black ">
                          Where we want to be
                        </h4>
                        <div className=" min-h-20 border border-black text-xl rounded-lg w-full text-black p-3 text-center ">
                          {i.we_want}
                          <ul className="list-disc space-y-3 px-5">
                            {i.went_point?.map((item, index) => (
                              <li key={index} className="text-xl text-black">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
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
