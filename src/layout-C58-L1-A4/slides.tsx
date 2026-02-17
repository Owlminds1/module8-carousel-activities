"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C58-L1-A4/pointer1.json";
import SlideData2 from "@/layout-C58-L1-A4/pointer3.json";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeBtnIndex, setActiveBtnIndex] = useState<number | null>(null);
  const [bgCorrect, setBgCorrect] = useState<HTMLAudioElement>();
  const [open, setOpen] = useState(false);

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setActiveBtnIndex(null);
  };

  //   enter to show more points logic

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "TEXTAREA" || target.tagName === "INPUT") return;
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      if (current === 0) {
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

  useEffect(() => {
    setBgCorrect(() => new Audio("/sound/correct.mp3"));
  }, []);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (SlideData2.length * 2 === visibleCount2) {
  //     setOpen(true);
  //   }
  // }, [visibleCount2]);

  const handleCheck = (select: string, val: string, index: number) => {
    setActiveBtnIndex(index);

    if (select === val) {
      bgCorrect?.play();

      if (SlideData2.length + 1 === activeSlide) {
        setOpen(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="w-[60%]">
        <h4 className="text-3xl font-bold text-black text-center">
          {activeSlide === 0
            ? "DESIGN THINKING"
            : activeSlide === 1
              ? "UPGRADING LEGOs"
              : "UPGRADING LEGOs"}
        </h4>

        <p className="text-center text-black text-xl">
          {activeSlide > 1
            ? "Identify each statement as either a clarification, an ideation, a development, or an implementation."
            : ""}
        </p>
      </div>

      <div className="w-[95%] flex justify-center items-center flex-col gap-3  ">
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
                  <MyImage path="/C58Images/DesigThinkingProcess.png" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-8 ">
                  <p className=" text-lg w-full">
                    We ask questions not only to develop products, but also to
                    further improve its design as well as functionality. To do
                    so, we have to:
                  </p>
                  <ul className="list-disc w-full space-y-3 px-2">
                    {SlideData.slice(0, visibleCount).map((item, index) => (
                      <li
                        className="text-black text-lg animate_fadeInUp"
                        key={index}
                      >
                        <span className="font-bold">{item.heading} : </span>
                        {item.text}
                      </li>
                    ))}
                  </ul>

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C58Images/Legos.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-8 ">
                  <p className=" text-lg w-full">
                    Now here’s a situation: Let’s say that the LEGO company
                    decided to go plastic-free because the material is not good
                    for the environment. This to ensure eco-friendly products as
                    well as happy customers. Here are a series of statements
                    they have released about the product innovation.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            {SlideData2.map((i, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 place-items-center p-2">
                  <div className="col-span-6 w-full flex justify-center items-center ">
                    <MyImage path={i.img} />
                  </div>
                  <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-8 ">
                    <h4 className=" text-xl font-bold w-full">{i.Question}</h4>
                    <div className="flex justify-center items-center w-full gap-2">
                      {i.Answers.map((btn, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={() => handleCheck(btn, i.val, btnIndex)}
                          className={`${btnIndex === activeBtnIndex ? (btn === i.val ? "bg-green-600" : "bg-red-500 shake") : "bg-violet-900"} text-lg text-white  px-5 py-2 cursor-pointer active:scale-95 transition-all duration-300 rounded-lg `}
                        >
                          {btn}
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
              activeSlide < SlideData2.length + 1 ? "visible" : "invisible"
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
