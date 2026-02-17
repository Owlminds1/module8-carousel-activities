"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C59-L1-A1/pointer1.json";
import Slide2Data from "@/layout-C59-L1-A1/pointer2.json";
import Slide3Data from "@/layout-C59-L1-A1/pointer3.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";
import Table from "./table";

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

  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string[];
  }>({});

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
        if (!scrollRef.current) return;

        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 2) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );

        scrollRef2.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }

      if (current === 4) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length * 2 ? prev + 1 : prev,
        );

        scrollRef3.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2, visibleCount3, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, visibleCount2, visibleCount3, activeSlide]);

  //   when the student answer the all questions welldone box open
  useEffect(() => {
    if (Slide3Data.length * 2 === visibleCount3) {
      setOpen(true);
    }
  }, [visibleCount3]);

  const handleCheckboxChange = (qIndex: number, option: string) => {
    setSelectedAnswers((prev) => {
      const prevSelected = prev[qIndex] || [];

      if (prevSelected.includes(option)) {
        return {
          ...prev,
          [qIndex]: prevSelected.filter((o) => o !== option),
        };
      }

      return {
        ...prev,
        [qIndex]: [...prevSelected, option],
      };
    });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "REBRANDING"
            : activeSlide === 1
              ? "VIDEO"
              : activeSlide === 2
                ? "Video Q&A"
                : activeSlide === 4
                  ? "SELLING"
                  : activeSlide === 5 ?"PROMOTE TO SELL":""}
        </h4>

        <p className="text-xl font-medium text-center text-black ">
          {activeSlide === 0
            ? " Let’s watch a funny video from a series called Family Guy that shows the characters selling a product in a humorous way!"
            : activeSlide === 2
              ? " Select the best possible response"
              : activeSlide === 5 ? "Match the ways to promote the lemonade with their respective definitions.":""}
        </p>

        <p className="text-xl font-medium text-center text-black/80 ">
          {activeSlide === 0
            ? "Pay attention because I will ask you the following questions!"
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
                <div className="col-span-6 w-full  flex justify-center items-center ">
                  <MyImage path="/C59Images/Video_Q&A.png" />
                </div>
                <div className=" col-span-6 w-full  flex justify-center items-center flex-col gap-5 ">
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
                <div ref={scrollRef}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className=" w-full  flex justify-center items-center flex-col gap-5 ">
                <iframe
                  width="600"
                  height="400"
                  src="https://www.youtube.com/embed/vcZWxYXpWWY?si=5PmjM0ZP5mwwGwJW"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                {Slide2Data.slice(0, visibleCount2).map((i, index) => {
                  return (
                    <React.Fragment key={index}>
                      <div className="col-span-6 w-full  flex justify-center items-center ">
                        <MyImage path={i.img} />
                      </div>
                      <div className=" col-span-6 w-full  flex justify-center items-center flex-col gap-5 ">
                        <h3 className="text-xl text-black font-bold w-full">
                          {i.question}
                        </h3>

                        {i.opt.map((answer, ansIndex) => {
                          const isSelected =
                            selectedAnswers[index]?.includes(answer);

                          const isCorrect =
                            i.ans.includes(answer) && isSelected;

                          return (
                            <div
                              key={ansIndex}
                              className="w-full flex gap-4 justify-start items-center"
                            >
                              <input
                                title="select"
                                type="checkbox"
                                checked={isSelected}
                                onChange={() =>
                                  handleCheckboxChange(index, answer)
                                }
                                className="w-5 h-5 cursor-pointer accent-violet-900"
                              />

                              <label
                                className={`text-lg font-medium w-full ${
                                  isCorrect ? "text-green-700" : "text-black"
                                }`}
                              >
                                {answer}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </React.Fragment>
                  );
                })}
                <div className="col-span-12 w-full">
                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div ref={scrollRef2}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full  flex justify-center items-center ">
                    <MyImage path="/C59Images/E.png" />
                 
                </div>
                <div className=" col-span-6 w-full  flex justify-center items-center flex-col gap-5 ">
                  <p className="text-black text-xl w-full">
                    So you see, sometimes it’s not the product that’s the
                    problem but the way you sell it!
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full  flex justify-center items-center ">
                 <MyImage path="/C59Images/Stall.jpg" />
                </div>
                <div className=" col-span-6 w-full  flex justify-center items-center flex-col gap-5 ">
                  <ul className="list-disc w-full space-y-3 px-2">
                    <li className="text-black text-xl animate_fadeInUp">
                      Now let’s imagine that you also have a product to sell
                      i.e. some lemonade.{" "}
                    </li>

                    <li className="text-black text-xl animate_fadeInUp">
                      A lemon costs 10 cents. But to do a good job of it, you’ve
                      got to answer the following questions:
                    </li>
                  </ul>
                </div>

                <div className=" col-span-12 w-full  flex justify-center items-center flex-col gap-5 ">
                  <h3 className="text-2xl font-bold text-black">Q&A</h3>

                  {Slide3Data.map((i, index) => {
                    const stepIndex = index * 2;
                    const showQuestions = visibleCount3 > stepIndex;
                    const showAnswers = visibleCount3 > stepIndex + 1;
                    return (
                      <div className="w-[50%] ">
                        {showQuestions && (
                          <h4 className="text-black font-bold text-xl animate_fadeInUp w-full ">
                            {i.question}
                          </h4>
                        )}


                         {showAnswers && (
                          <p className="text-black/80 text-xl animate_fadeInUp w-full ">
                            {i.answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="col-span-12 w-full text-center">
                  {Slide3Data.length *2 > visibleCount3 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div ref={scrollRef3}></div>
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
              activeSlide < 5 ? "visible" : "invisible"
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
