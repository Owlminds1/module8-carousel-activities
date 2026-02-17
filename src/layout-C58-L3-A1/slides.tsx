"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C58-L3-A1/pointer1.json";
import Slide2Data from "@/layout-C58-L3-A1/pointer2.json";
import Slide3Data from "@/layout-C58-L3-A1/pointer3.json";
import Slide4Data from "@/layout-C58-L3-A1/pointer4.json";
import Slide5Data from "@/layout-C58-L3-A1/pointer5.json";

import Welldone from "@/components/wellDone";
import Link from "next/link";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [visibleCount3, setVisibleCount3] = useState(1);
  const [visibleCount4, setVisibleCount4] = useState(0);
  const [visibleCount5, setVisibleCount5] = useState(1);

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

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );

        window.scroll(0, 500);
      }

      if (current === 2) {
        // First finish Slide 3
        setVisibleCount3((prev) =>
          prev < Slide3Data.length * 2 ? prev + 1 : prev,
        );

        // Only AFTER slide 3 is done → start slide 4
        if (visibleCount3 >= Slide3Data.length * 2) {
          setVisibleCount4((prev) =>
            prev < Slide4Data.length ? prev + 1 : prev,
          );
        }

        scrollRef.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }

      if (current === 3) {
        setVisibleCount5((prev) =>
          prev < Slide5Data.length * 2 ? prev + 1 : prev,
        );
        scrollRef2.current?.scrollIntoView({
          block:"end",
          behavior:"smooth"
        })
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    visibleCount,
    visibleCount2,
    visibleCount3,
    visibleCount4,
    visibleCount5,
    activeSlide,
  ]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [
    visibleCount,
    visibleCount2,
    visibleCount3,
    visibleCount4,
    visibleCount5,
    activeSlide,
  ]);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (SlideData2.length * 2 === visibleCount2) {
  //     setOpen(true);
  //   }
  // }, [visibleCount2]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "PROBLEM SOLVING"
            : activeSlide === 1
              ? "PRODUCT ACTIVITY"
              : activeSlide === 2
                ? "MINIMUM VIABLE PRODUCT"
                : "APPLE"}
        </h4>

        <p className="text-xl  text-center text-black ">
          {activeSlide === 1
            ? "Let’s do a quick exercise to find out whether the following products solve a problem or not."
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
                <div className=" col-span-12 w-[60%] flex justify-center items-center flex-col gap-5 ">
                  <p className="text-black/80 text-2xl  w-full ">
                    Before we figure out what we are making and where we are
                    selling, we first have to figure out:
                  </p>
                  <h3 className="text-black font-bold text-xl w-full">
                    What problem are we solving?
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
                <div className=" col-span-12 w-[60%] flex justify-center items-center flex-col gap-5 ">
                  <h3 className="text-black font-bold text-xl w-full">
                    Simply say yes or no when I call out the products.
                  </h3>
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

                  {Slide2Data.length - 1 < visibleCount2 ? (
                    show ? (
                      <div className="w-full">
                        <h4 className="text-black text-xl font-bold py-5">
                          SUGGESTIVE RESPONSES
                        </h4>
                        <ul className="list-disc w-full space-y-3 px-2">
                          <li className="text-black text-xl animate_fadeInUp">
                            A STOPWATCH (YES)
                          </li>{" "}
                          <li className="text-black text-xl animate_fadeInUp">
                            A DRYING RACK (YES)
                          </li>
                          <li className="text-black text-xl animate_fadeInUp">
                            A SILVER SPOON (NO)
                          </li>
                          <li className="text-black text-xl animate_fadeInUp">
                            A PHONE CHARGER (YES)
                          </li>
                          <li className="text-black text-xl animate_fadeInUp">
                            SOME BANGLES (NO)
                          </li>
                          <li className="text-black text-xl animate_fadeInUp">
                            A PAIR OF EARRINGS (NO)
                          </li>
                        </ul>

                        <h4 className="text-black text-lg my-5 ">
                          So you understand.
                        </h4>
                      </div>
                    ) : (
                      <button
                        onClick={() => setShow(true)}
                        className="text-white bg-violet-900 px-8 py-2 rounded-lg  cursor-pointer"
                      >
                        Suggestive Responses
                      </button>
                    )
                  ) : (
                    ""
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
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <MyImage path="/C58Images/MVP.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-8 ">
                  <h3 className="text-black font-bold text-xl animate_fadeInUp ">
                    When we have figured out what problem a product solves, then
                    we can begin the exercise of creating an MVP i.e. Minimum
                    Viable Product.
                  </h3>
                  {Slide3Data.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestions = visibleCount3 > stepIndex;
                    const showAnswers = visibleCount3 > stepIndex + 1;

                    return (
                      <div key={index} className=" w-full">
                        {showQuestions && (
                          <h3 className="text-black font-bold text-xl animate_fadeInUp ">
                            {item.question}
                          </h3>
                        )}
                        <ul className="list-disc space-y-3">
                          {item.ans.map(
                            (i, listIndex) =>
                              showAnswers && (
                                <li
                                  key={listIndex}
                                  className="text-black/80 text-lg animate_fadeInUp "
                                >
                                  {i}
                                </li>
                              ),
                          )}
                        </ul>
                      </div>
                    );
                  })}

                  {visibleCount3 >= Slide3Data.length * 2 && (
                    <div>
                      <h3 className="text-black font-bold text-xl animate_fadeInUp ">
                        Here are some questions that help in designing an MVP:
                      </h3>
                      <ul className=" space-y-3">
                        {Slide4Data.slice(0, visibleCount4).map((i, index4) => (
                          <li
                            key={index4}
                            className="text-black/80 text-lg animate_fadeInUp "
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {visibleCount3 < Slide3Data.length * 2 ||
                  visibleCount4 < Slide4Data.length ? (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  ) : null}

                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className=" col-span-12 w-[60%] flex justify-center items-center flex-col gap-5 ">
                  <p className="text-black/80 text-xl  w-full ">
                    Let’s try to answer these questions for a product. Imagine
                    you’re the next CEO of Apple. You have to answer the
                    following questions about the latest IPhone 17 assuming that
                    this is the first MVP for this particular series. How would
                    you answer the questions?
                  </p>
                  <h3 className="text-black font-bold text-xl w-full">
                    This is what the latest IPhone 17 looks like. Go through the
                    website to answer the following questions.
                  </h3>
                  <Link
                    className="text-blue-500 text-lg "
                    href="https://www.apple.com/in/iphone-17-pro/"
                  >
                    https://www.apple.com/in/iphone-17-pro/{" "}
                  </Link>

                  {Slide5Data.map((i, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount5 > stepIndex;
                    const showAnswer = visibleCount5 > stepIndex + 1;

                    return (
                      <div className="w-full" key={index}>
                        {showQuestion && (
                          <h4 className="text-black font-bold text-lg w-full">
                            {i.question}
                          </h4>
                        )}
                        {showAnswer && (
                          <p
                            className="text-black text-xl animate_fadeInUp"
                            key={index}
                          >
                            {i.ans}
                          </p>
                        )}
                      </div>
                    );
                  })}

                  {Slide5Data.length * 2 > visibleCount5 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div ref={scrollRef2} className="mt-5"></div>
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
