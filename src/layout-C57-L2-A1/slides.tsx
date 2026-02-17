"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C57-L2-A1/pointer1.json";
import SlideData2 from "@/layout-C57-L2-A1/pointer3.json";
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
  };

  //   enter to show more points logic

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      if (current === 0) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }

      if (current === 2) {
        setVisibleCount2((prev) =>
          prev < SlideData2.length * 2 ? prev + 1 : prev,
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

  //   when the student answer the all questions welldone box open
  useEffect(() => {
    if (SlideData2.length * 2 === visibleCount2) {
      setOpen(true);
    }
  }, [visibleCount2]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black">
          {activeSlide === 0
            ? "Who is an entrepreneur?"
            : activeSlide === 1
              ? "10-Year-Old Entrepreneur Wows Sharks With Her Baby Spoon Product"
              : activeSlide === 2
                ? "VIDEO Q&A SUGGESTIVE RESPONSES"
                : ""}
        </h4>
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
                  <MyImage path="/C57Images/Entrepreneur.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-black/80 text-2xl  w-full ">
                    “An entrepreneur is someone who starts their own business,
                    especially when this involves seeing a new opportunity.”
                    (Cambridge Dictionary)
                  </p>
                  <h3 className="text-black font-bold text-xl">
                    Read the questions first so you can answer after the video!
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
              <div className="grid grid-cols-12 w-full place-items-center">
                <div className="col-span-12 w-full flex justify-center items-center">
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/BaUkuszb7dg?si=R8lfeqqYYXCdlHQe"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C57Images/BabyToon.png" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-8 ">
                  {SlideData2.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestions = visibleCount2 > stepIndex;
                    const showAnswers = visibleCount2 > stepIndex + 1;

                    return (
                      <div key={index} className=" w-full">
                        {showQuestions && (
                          <h3 className="text-black font-bold text-xl animate_fadeInUp ">
                            {item.Question}
                          </h3>
                        )}
                        {showAnswers && (
                          <ul className="list-disc spacey-3 w-full ">
                            {item.Answer.map((i, index) => (
                              <li
                                key={index}
                                className="text-black/80 text-xl animate_fadeInUp "
                              >
                                {i}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}

                  {SlideData2.length * 2 > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center w-full italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
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
