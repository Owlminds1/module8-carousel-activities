"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C59-L3-A2/pointer.json";
import Slide3Data from "@/layout-C59-L3-A2/pointer3.json";
import Slide4Data from "@/layout-C59-L3-A2/pointer4.json";
import Slide5Data from "@/layout-C59-L3-A2/pointer5.json";
import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";
import Link from "next/link";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRef3 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount3, setVisibleCount3] = useState(1);
  const [visibleCount4, setVisibleCount4] = useState(0);
  const [visibleCount5, setVisibleCount5] = useState(0);

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

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 2) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length * 2 ? prev + 1 : prev,
        );

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 3) {
        setVisibleCount4((prev) =>
          prev < Slide4Data.length ? prev + 1 : prev,
        );
      }

      if (current === 4) {
        setVisibleCount5((prev) =>
          prev < Slide5Data.length ? prev + 1 : prev,
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount3, visibleCount4, visibleCount5, activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount, visibleCount3, visibleCount4, visibleCount5, activeSlide]);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (Slide3Data.length * 2 === visibleCount3) {
  //     setOpen(true);
  //   }
  // }, [visibleCount3]);


useEffect(() => {
  const handleFullscreenChange = () => {
    setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
      swiperRef.current?.update();
    }, 300);
  };

  document.addEventListener("fullscreenchange", handleFullscreenChange);

  return () => {
    document.removeEventListener("fullscreenchange", handleFullscreenChange);
  };
}, []);


  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "PURPOSE OF MARKETING"
            : activeSlide === 1
              ? "VIDEO"
              : activeSlide === 2
                ? "VIDEO Q&A"
                : activeSlide === 3
                  ? "LOCK FRAMEWORK"
                  : activeSlide === 4
                    ? "APPLE AIRTAG"
                    : activeSlide === 5 ? " Suggestive Responses":""}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 1
            ? "Let’s watch the video!"
      
              : activeSlide === 4
                ? "Fill in your pitch in the blanks."
                : ""}
        </p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3  ">
        <div className="w-full shadow-md p-3 min-h-30 bg-white">
          <Swiper
            observer={true}
  observeParents={true}
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
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <p className="text-lg text-black w-full">
                    A company must know what its purpose is before it designs
                    strategies and organizes planning to sell its product. When
                    the purpose is in place, the product sells authentically
                  </p>
                  <p className="text-lg text-black w-full">
                    Here are some questions I’d like you to answer after the
                    video.
                  </p>
                  <ul className="list-disc space-y-3 w-full">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li
                        key={index}
                        className="text-black text-xl font-medium"
                      >
                        {i}
                      </li>
                    ))}
                  </ul>

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-12 flex justify-center items-center]">
                <video src="/C59Images/Purpose.mp4" className="
                max-w-200 h-auto" controls autoPlay={false}></video>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-6 ">
                  {Slide3Data.map((item, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount3 > stepIndex;
                    const showAnswer = visibleCount3 > stepIndex + 1;

                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-center items-center gap-2"
                      >
                        {showQuestion && (
                          <h3 className="text-xl text-black/80 font-bold w-full">
                            {item.question}
                          </h3>
                        )}
                        <ul className="list-disc space-y-3 ">
                          {showAnswer &&
                            item.answers.map((i, idx) => (
                              <li key={idx} className="text-lg text-black">
                                {i}
                              </li>
                            ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

               

                <div className="col-span-12 w-full">
                  {Slide3Data.length * 2 > visibleCount3 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6 ">
                  <MyImage path="/C59Images/Framework.jpeg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl text-black font-bold w-full">
                  Let’s say that you’ve to sell this AirTag to a potential customer.
                  </p>
                 
                </div>


                   <div className="col-span-6 ">
                  <MyImage path="/C59Images/Lemonade.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl text-black font-bold w-full">
                    What kind of sales pitch would you create based on the
                    information from the video as well as the framework?
                  </p>
                  <p className="text-lg text-black w-full">
                    Here’s an example of applying the framework to selling
                    lemonade.
                  </p>
                  <ul className="list-disc space-y-3 w-full">
                    {Slide4Data.slice(0, visibleCount4).map((i, index) => (
                      <li
                        key={index}
                        className="text-black animate_fadeInUp text-xl font-medium"
                      >
                        <span className="font-bold">{i.title} : </span>
                        {i.text}
                      </li>
                    ))}
                  </ul>

                  {Slide4Data.length - 1 < visibleCount4 && (
                    <p className="text-black text-lg  w-full animate_fadeInUp mt-3  italic font-normal">
                      Lovely.
                      <span className="text-black font-bold">
                        So it’s your turn to create a sales pitch!
                      </span>{" "}
                      Let’s use the LOCK framework to create a sales pitch for
                      your Apple AirTag.
                    </p>
                  )}
                  {Slide4Data.length > visibleCount4 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6 ">
                  <MyImage path="/C59Images/Airtag.jpeg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  {Slide5Data.map((item, index) => {
                    // const stepIndex = index * 2;
                    const showQuestion = visibleCount5 > index;
                    // const showAnswer = visibleCount7 > stepIndex + 1;

                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-start items-start gap-2"
                      >
                        {showQuestion && (
                          <h3 className="text-2xl text-black font-bold w-full">
                            {item.title}
                          </h3>
                        )}

                        {showQuestion && (
                          <h3 className="text-xl text-black/80 font-bold w-full">
                            {item.question}
                          </h3>
                        )}

                        {showQuestion && (
                          <textarea
                            placeholder="write here..."
                            rows={3}
                            className="text-lg text-black w-[80%] outline-0 border-2 p-2 rounded-lg "
                          />
                        )}
                      </div>
                    );
                  })}

                  {Slide5Data.length > visibleCount5 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Airtag.jpeg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-5 ">
                  {Slide5Data.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-start items-start gap-2"
                      >
                        <h3 className="text-2xl text-black font-bold w-full">
                          {item.title}{" "}
                        </h3>

                        <p className="text-black text-xl w-full">
                          {item.answers}
                        </p>

                        {index === Slide5Data.length - 1 && (
                          <div>
                            <h4 className="text-black font-bold mb-2 text-xl w-full">
                              Or
                            </h4>

                            <p className="text-black text-xl w-full">
                              {item.subHeading}
                            </p>
                          </div>
                        )}

                          <p className="text-black text-lg w-full mt-3  italic font-normal">
                    Lovely! That’s a pretty effective sales pitch you’ve created for an amazing product using the LOCK framework!
                    </p>
                      </div>
                    );
                  })}
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
