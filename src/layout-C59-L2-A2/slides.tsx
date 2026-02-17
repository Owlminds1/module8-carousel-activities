"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { use, useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C59-L2-A2/pointer1.json";
import Slide2Data from "@/layout-C59-L2-A2/pointer2.json";
import Slide3Data from "@/layout-C59-L2-A2/pointer3.json";
import Slide4Data from "@/layout-C59-L2-A2/pointer4.json";
import Slide5Data from "@/layout-C59-L2-A2/pointer5.json";
import Slide6Data from "@/layout-C59-L2-A2/pointer6.json";
import methodData from "@/layout-C59-L2-A2/methodSlide.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);
  const scrollRef4 = useRef<HTMLDivElement>(null);
  const scrollRef5 = useRef<HTMLDivElement>(null);
  const scrollRef6 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [visibleCount3, setVisibleCount3] = useState(1);
  const [visibleCount4, setVisibleCount4] = useState(1);
  const [visibleCount5, setVisibleCount5] = useState(1);
  const [visibleCount6, setVisibleCount6] = useState(1);
  const [activeBtn, setActiveBtn] = useState<number | null>(null);
  const [correctBg, setCorrectBg] = useState<HTMLAudioElement>();
  const [wrongBg, setWrongBg] = useState<HTMLAudioElement>();

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setActiveBtn(null);
  };


  useEffect(() => {
setCorrectBg(new Audio("/sound/correct.mp3"));
setWrongBg(new Audio("/sound/wrong_buzzer.mp3"));

  }  , []);
  //   enter to show more points logic

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      if (current === 0) {
        setVisibleCount((prev) =>
          prev < SlideData.length * 2 ? prev + 1 : prev,
        );
        if (!scrollRef.current) return;

        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length * 2 ? prev + 1 : prev,
        );

        scrollRef2.current?.scrollIntoView({
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
          prev < Slide4Data.length * 2 ? prev + 1 : prev,
        );

        scrollRef4.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 4) {
        setVisibleCount5((prev) =>
          prev < Slide5Data.length * 2 ? prev + 1 : prev,
        );

        scrollRef5.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 5) {
        setVisibleCount6((prev) =>
          prev < Slide6Data.length * 2 ? prev + 1 : prev,
        );

        scrollRef6.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    visibleCount,
    visibleCount2,
    visibleCount4,
    visibleCount5,
    visibleCount3,
    visibleCount6,
    activeSlide,
  ]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [
    visibleCount2,
    visibleCount3,
    visibleCount4,
    visibleCount5,
    visibleCount,
    visibleCount6,
    activeSlide,
  ]);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (Slide3Data.length * 2 === visibleCount3) {
  //     setOpen(true);
  //   }
  // }, [visibleCount3]);


const handleCheck  = (option:string,correct:string,optInd:number) => {
  setActiveBtn(optInd);
  if(option === correct){
  correctBg?.play();
  } else {
    wrongBg?.play();
  }

}

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "MARKETING "
            : activeSlide === 1
              ? "MARKETING METHODS"
              : activeSlide === 2
                ? "MARKETING METHODS"
                : activeSlide === 3
                  ? "MARKETING METHODS"
                  : activeSlide === 4
                    ? "MARKETING METHODS"
                    : "MARKETING METHODS"}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 0
            ? "There are traditional marketing methods i.e. publicizing on television and billboards. But that requires a huge financial investment that only big, established companies can afford."
            : activeSlide === 1
              ? "Here are some methods used by small-scale companies to effectively engage with their market segment."
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
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
              

                {SlideData.map((i, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount > stepIndex;
                  const showAnswer = visibleCount > stepIndex + 1;
                  return (
                    <div
                      key={index}
                      className=" col-span-12  w-[60%] flex justify-center items-center flex-col gap-5 "
                    >
                      {showQuestion && (
                        <h3 className="text-xl animate_fadeInUp  text-black font-bold w-full">
                          {i.question}
                        </h3>
                      )}

                      {showAnswer && (
                        <p className="text-black/80 animate_fadeInUp font-medium text-xl w-full ">
                           {i.response}
                        </p>
                      )}
                      {SlideData.length * 2 > visibleCount && (
                        <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                          (Enter to show more points)
                        </p>
                      )}
                    </div>
                  );
                })}

                <div className="col-span-12 w-full"></div>
                <div ref={scrollRef2}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Word_of_Mouth.jpg" />
                </div>

                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  {Slide2Data.map((i, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount2 > stepIndex;
                    const showAnswer = visibleCount2 > stepIndex + 1;
                    return (
                      <React.Fragment key={index}>
                        {showQuestion && (
                          <h3 className="text-xl  animate_fadeInUp text-black font-bold w-full">
                            {i.question}
                          </h3>
                        )}

                        <ul className="list-disc space-y-3 w-full ">
                          {showAnswer &&
                            i.response.map((i, ind) => (
                              <li
                                key={ind}
                                className="text-black/80 animate_fadeInUp font-medium text-xl  w-full "
                              >
                                {i}
                              </li>
                            ))}
                        </ul>
                      </React.Fragment>
                    );
                  })}
                  {Slide2Data.length * 2 > visibleCount2 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>

                <div ref={scrollRef2}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/GM.jpg" />
                </div>

                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  {Slide3Data.map((i, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount3 > stepIndex;
                    const showAnswer = visibleCount3 > stepIndex + 1;
                    return (
                      <React.Fragment key={index}>
                        {showQuestion && (
                          <h3 className="text-xl animate_fadeInUp  text-black font-bold w-full">
                            {i.question}
                          </h3>
                        )}

                        <ul className="list-disc space-y-3 w-full ">
                          {showAnswer &&
                            i.response.map((i, ind) => (
                              <li
                                key={ind}
                                className="text-black/80 animate_fadeInUp font-medium text-xl  w-full "
                              >
                                {i}
                              </li>
                            ))}
                        </ul>
                      </React.Fragment>
                    );
                  })}
                  {Slide3Data.length * 2 > visibleCount3 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>

                <div ref={scrollRef3}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Lifestyle_Marketing.png" />
                </div>

                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  {Slide4Data.map((i, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount4 > stepIndex;
                    const showAnswer = visibleCount4 > stepIndex + 1;
                    return (
                      <React.Fragment key={index}>
                        {showQuestion && (
                          <h3 className="text-xl animate_fadeInUp  text-black font-bold w-full">
                            {i.question}
                          </h3>
                        )}

                        <ul className="list-disc space-y-3 w-full ">
                          {showAnswer &&
                            i.response.map((i, ind) => (
                              <li
                                key={ind}
                                className="text-black/80 animate_fadeInUp font-medium text-xl  w-full "
                              >
                                {i}
                              </li>
                            ))}
                        </ul>
                      </React.Fragment>
                    );
                  })}
                  {Slide4Data.length * 2 > visibleCount4 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>

                <div ref={scrollRef4}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Product_Placement.jpg" />
                </div>

                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  {Slide5Data.map((i, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount5 > stepIndex;
                    const showAnswer = visibleCount5 > stepIndex + 1;
                    return (
                      <React.Fragment key={index}>
                        {showQuestion && (
                          <h3 className="text-xl animate_fadeInUp  text-black font-bold w-full">
                            {i.question}
                          </h3>
                        )}

                        <ul className="list-disc space-y-3 w-full ">
                          {showAnswer &&
                            i.response.map((i, ind) => (
                              <li
                                key={ind}
                                className="text-black/80 animate_fadeInUp font-medium text-xl  w-full "
                              >
                                {i}
                              </li>
                            ))}
                        </ul>
                      </React.Fragment>
                    );
                  })}
                  {Slide5Data.length * 2 > visibleCount5 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>

                <div ref={scrollRef5}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Print_AD.jpg" />
                </div>

                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  {Slide6Data.map((i, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount6 > stepIndex;
                    const showAnswer = visibleCount6 > stepIndex + 1;
                    return (
                      <React.Fragment key={index}>
                        {showQuestion && (
                          <h3 className="text-xl animate_fadeInUp  text-black font-bold w-full">
                            {i.question}
                          </h3>
                        )}

                        <ul className="list-disc space-y-3 w-full ">
                          {showAnswer &&
                            i.response.map((i, ind) => (
                              <li
                                key={ind}
                                className="text-black/80 animate_fadeInUp font-medium text-xl  w-full "
                              >
                                {i}
                              </li>
                            ))}
                        </ul>
                      </React.Fragment>
                    );
                  })}
                  {Slide6Data.length * 2 > visibleCount6 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>

                <div ref={scrollRef6}></div>
              </div>
            </SwiperSlide>

            {methodData.map((item, index) => (
              <SwiperSlide>
                <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                  <div className="col-span-6">
                    <MyImage path={item.image} />
                  </div>

                  <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-8 ">
                    <h4 className="font-medium  text-black text-2xl text-center ">
                      Select the best possible marketing method that corresponds
                      to each image.
                    </h4>


                    <div className="flex flex-wrap gap-2 items-center justify-center">
                      {
                        item.options.map((option, optInd) => (
                          <button
                          onClick={()=>handleCheck(option,item.correct,optInd)}
                          key={optInd} className={`${optInd === activeBtn ? option === item.correct ? "bg-green-500":"bg-red-500 shake":"bg-violet-900"}  text-white px-5 py-2 rounded-lg text-lg cursor-pointer active:scale-95 transition-all duration-150 animate_fadeInUp `}>{option}</button>
                        ))
                      }
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
              activeSlide < methodData.length + 5 ? "visible" : "invisible"
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
