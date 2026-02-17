"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C57-L1-A5/pointer1.json";
import QuestionData from "@/layout-C57-L1-A5/question.json";

import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [show, setShow] = useState(false);
  const [nextShow, setNextShow] = useState(true);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [bgcorrect, setBgCorrect] = useState<HTMLAudioElement>();

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setActiveIndex(null);
    if (swiper.activeIndex > 1) {
      setNextShow(false);
    } else {
      setNextShow(true);
    }
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
        setShow(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount]);

  //   when the student answer the all questions welldone box open
  // useEffect(()=>{
  //   if(SlideData2.length * 2 === visibleCount2){
  //      setOpen(true);
  //   }
  // },[visibleCount2])

  useEffect(() => {
    setBgCorrect(() => new Audio("/sound/correct.mp3"));
  }, []);

  const handleCheck = (index: number, selected: string, val: string) => {
    setActiveIndex(index);
    if (selected === val) {
      bgcorrect?.play();
      setNextShow(true);
      if (QuestionData.length + 1 === activeSlide) {
        setOpen(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black text-center">
          {activeSlide === 0
            ? " PAIN-KILLER OR VITAMIN?"
            : activeSlide === 1
            ? "YOUR PRODUCT"
            : "PAIN-KILLER OR VITAMIN?"}
        </h4>

        {/* <p className="text-center text-black text-xl">
          {activeSlide === 2 ? "" : ""}
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
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C57Images/" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <ul className="list-disc w-full space-y-3 px-2">
                    {SlideData.slice(0, visibleCount).map((item, index) => (
                      <li
                        className="text-black text-lg animate_fadeInUp"
                        key={index}
                      >
                        <span className="font-bold">{item.titel}</span>{" "}
                        {item.text}
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
              <div className="grid grid-cols-12 place-items-center w-full p-2">
                <div className="col-span-12 w-full flex justify-center items-center flex-col gap-3 ">
                  <h4 className="font-bold text-2xl text-center">
                    Which category is your product?
                  </h4>
                  {show ? (
                    <p className="animate_fadeInUp text-violet-900 font-normal w-[60%] text-center text-lg ">
                      Ofcourse! Your product is a problem-solving pain killer
                      because it solves the problem of everything being a mess!
                    </p>
                  ) : (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show suggestive response)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>
            {QuestionData.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 w-full place-items-center gap-2">
                  <div className="col-span-12 w-full text-center font-bold text-black text-xl">
                    Can you identify which of these products are pain-killers or
                    vitamins?
                  </div>

                  <div className="col-span-12 w-full flex justify-center items-center flex-col gap-8">
                    <MyImage path="/C57Images" />

                    <h4 className="text-3xl font-medium text-center text-black">
                      {i.question}
                    </h4>

                    <div className="flex gap-5">
                      {i.answers.map((ans, ansIdx) => (
                        <button
                          onClick={() => handleCheck(ansIdx, ans, i.val)}
                          key={ansIdx}
                          className={`${
                            activeIndex === ansIdx
                              ? i.val === ans
                                ? "bg-green-600 "
                                : "bg-red-600 shake "
                              : "bg-violet-900"
                          } text-white  px-5 py-2 min-w-40 rounded-lg cursor-pointer active:scale-95 transition-all duration-200`}
                        >
                          {ans}
                        </button>
                      ))}
                    </div>
                  </div>
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
              activeSlide === 0 ? "invisible" : "visible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowLeft />
          </span>
          <span
            onClick={handleNext}
            className={` ${
              activeSlide < QuestionData.length + 1 && nextShow
                ? "visible"
                : "invisible"
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
