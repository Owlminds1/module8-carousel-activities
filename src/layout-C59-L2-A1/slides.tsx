"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C59-L2-A1/pointer1.json";
import Slide2Data from "@/layout-C59-L2-A1/pointer2.json";
import Slide5Data from "@/layout-C59-L2-A1/pointer5.json";
import Slide6Data from "@/layout-C59-L2-A1/pointer6.json";
import Slide7Data from "@/layout-C59-L2-A1/pointer7.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";
import Link from "next/link";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(0);
  const [visibleCount5, setVisibleCount5] = useState(1);
  const [visibleCount6, setVisibleCount6] = useState(1);
  const [visibleCount7, setVisibleCount7] = useState(1);

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setShow(false);
  };

  //   enter to show more points logic

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.shiftKey) return;

      if (e.key !== "Enter" && e.code !== "Enter") return;
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      if (current === 0) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );
      }

      if (current === 4) {
        setVisibleCount5((prev) =>
          prev < Slide5Data.length * 2 ? prev + 1 : prev,
        );
      }

      if (current === 5) {
        setVisibleCount6((prev) =>
          prev < Slide6Data.length * 2 ? prev + 1 : prev,
        );
      }

      if (current === 6) {
        setVisibleCount7((prev) =>
          prev < Slide7Data.length ? prev + 1 : prev,
        );
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    visibleCount,
    visibleCount2,
    visibleCount5,
    visibleCount6,
    visibleCount7,
    activeSlide,
  ]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [
    visibleCount,
    visibleCount2,
    visibleCount5,
    visibleCount6,
    visibleCount7,
    activeSlide,
  ]);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (Slide3Data.length * 2 === visibleCount3) {
  //     setOpen(true);
  //   }
  // }, [visibleCount3]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "USP"
            : activeSlide === 1
              ? " VALUE PROP STATEMENT"
              : activeSlide === 2
                ? "EXAMPLE STATEMENT"
                : activeSlide === 3
                  ? "MAKE A VALUE PROP STATEMENT"
                  : activeSlide === 4
                    ? "SALES PITCH"
                    : activeSlide === 5
                      ? "LEMONADE"
                      : activeSlide === 6
                        ? "APPLE WATCH"
                        : activeSlide === 7
                          ? "Suggestive Response"
                          : ""}
        </h4>

        <p className="text-xl font-medium text-center text-black ">
          {activeSlide === 3
            ? "You’re in charge of creating a USP statement for an Apple Watch."
            : activeSlide === 5
              ? "Here’s an example of using the LOCK framework to create a sales pitch for a lemonade stand."
              : activeSlide === 6
                ? "Use the LOCK framework to create a sales pitch for your Apple Watch."
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
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/USP.jpg" />
                </div>

                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <h3 className="text-3xl text-black font-bold w-full">
                    What is USP?
                  </h3>
                  <ul className="space-y-3">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li className="text-xl text-black " key={index}>
                        {i}
                      </li>
                    ))}
                  </ul>

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  {/* <div ref={scrollRef}></div> */}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                <iframe
                className="rounded-lg "
                width="350" height="300" src="https://www.youtube.com/embed/q8d9uuO1Cf4?si=AwdWGks6MeG6D9ly" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <h3 className="text-3xl text-black font-bold w-full">
                    How do you design a brand’s USP?
                  </h3>
                  <ul className="space-y-3">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li className="text-xl text-black " key={index}>
                        {i}
                      </li>
                    ))}
                  </ul>

                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2 w-full">
                <div className="col-span-12 w-[80%] text-xl text-black text-center">
                  Go to Apple’s{" "}
                  <Link
                    className="text-blue-400"
                    target="blank"
                    href="https://www.apple.com/in/iphone-17-pro/"
                  >
                    website
                  </Link>{" "}
                  to find details about the brand and the product i.e. Apple
                  IPhone. Apply the details to create the product’s value
                  proposition statement.
                </div>
                <div className="col-span-6 border w-full flex justify-center items-start h-full p-2">
                  <iframe
                className="rounded-lg "
                width="300" height="200" src="https://www.youtube.com/embed/q8d9uuO1Cf4?si=AwdWGks6MeG6D9ly" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div className="col-span-6 border w-full flex flex-col justify-start gap-5 items-center h-full p-3">
                  <MyImage path="/C59Images/IPhone.jpg" width={280} />

                  <p className="text-black text-xl leading-relaxed">
                    For (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    ) dissatisfied with (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    ) due to (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    ), (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    ) offers (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    ) that provides (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    )
                  </p>
                </div>

                <div className="col-span-12  w-full flex flex-col justify-start items-center h-full p-3 gap-5">
                  {!show ? (
                    <button
                      onClick={() => setShow(true)}
                      className="text-white bg-violet-900 px-8 py-2 text-lg  rounded-lg cursor-pointer active:scale-95 "
                    >
                      Suggestive Response
                    </button>
                  ) : (
                    <React.Fragment>
                      <h4 className="text-xl text-black text-center w-full font-bold">
                        Suggestive Response
                      </h4>

                      <p className="text-black text-xl w-[60%] leading-relaxed">
                        For (<span className="text-red-500 ">mobile users</span>
                        ) dissatisfied with (
                        <span className="text-red-500">
                          efficiency, durability, and multimedia features
                        </span>
                        ) due to (
                        <span className="text-red-500">
                          slow processors, low battery life, and ineffective
                          cameras
                        </span>
                        ), (<span className="text-red-500">Apple</span>) offers
                        (<span className="text-red-500">an IPhone</span>) that
                        provides (
                        <span className="text-red-500">
                          faster performance, 14 more hours of battery life, and
                          4K 120FPS Dolby Vision
                        </span>
                        )
                      </p>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2 w-full">
                <div className="col-span-12 w-[80%] text-xl text-black text-center">
                  Go to Apple’s{" "}
                  <Link
                    className="text-blue-400"
                    target="blank"
                    href="https://www.apple.com/in/watch/?afid=p240%7Cgo~cmp-18266558634~adg-140515365829~ad-773226976692_kwd-52218226~dev-c~ext-~prd-~mca-~nt-search&cid=wwa-in-kwgo-watch-core-watchfam-watchfamily_hero_announce_091025-AppleWatch-Core-Exact-AppleWatch-Exact-apple+watch"
                  >
                    website
                  </Link>{" "}
                  to read about the product and then fill out the same statement
                  as in the previous slide.
                </div>
                 <div className="col-span-6 border w-full flex justify-center items-start h-full p-2">
                  <iframe
                className="rounded-lg "
                width="300" height="200" src="https://www.youtube.com/embed/q8d9uuO1Cf4?si=AwdWGks6MeG6D9ly" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>

                <div className="col-span-6 border w-full flex flex-col justify-start gap-8 items-center h-full p-3">
                  <MyImage path="/C59Images/AppleWatch.jpeg" width={280} />

                  <p className="text-black text-xl leading-relaxed">
                    For (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    ) dissatisfied with (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    ) due to (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    ), (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    ) offers (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    ) that provides (
                    <input
                      placeholder="write here..."
                      className="text-red-500 placeholder:text-gray-600 border-b border-red-500 outline-0 px-2 text-center"
                    />
                    )
                  </p>
                </div>

                <div className="col-span-12  w-full flex flex-col justify-start items-center h-full p-3 gap-5">
                  {!show ? (
                    <button
                      onClick={() => setShow(true)}
                      className="text-white bg-violet-900 px-8 py-2 text-lg  rounded-lg cursor-pointer active:scale-95 "
                    >
                      Suggestive Response
                    </button>
                  ) : (
                    <React.Fragment>
                      <h4 className="text-xl text-black text-center w-full font-bold">
                        Suggestive Response
                      </h4>

                      <p className="text-black text-xl w-[60%] leading-relaxed">
                        For (
                        <span className="text-red-500 ">smartwatch users</span>)
                        dissatisfied with (
                        <span className="text-red-500">
                          insights, connectivity, and safety
                        </span>
                        ) due to (
                        <span className="text-red-500">
                          ineffective tracking data, low network range, and poor
                          detection features
                        </span>
                        ), (<span className="text-red-500">Apple</span>) offers
                        (<span className="text-red-500">a smartwatch</span>)
                        that provides (
                        <span className="text-red-500">
                          faster performance, high 5G connectivity, and
                          exceptional detection features
                        </span>
                        )
                      </p>
                    </React.Fragment>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                {Slide5Data.map((item, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount5 > stepIndex;
                  const showAnswer = visibleCount5 > stepIndex + 1;

                  return (
                    <React.Fragment key={index}>
                      <div className="col-span-6">
                        {showQuestion && <MyImage path={item.img} />}
                      </div>

                      <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-5 ">
                        {showQuestion && (
                          <h3 className="text-2xl text-black font-bold w-full">
                            {item.questions}
                          </h3>
                        )}

                        {showAnswer && (
                          <div>
                            <h4 className="text-xl font-medium w-full text-black py-2">
                              {item.answers}
                            </h4>

                            <ul className="space-y-3 list-disc w-full">
                              {item.pointers.map((pointer, pointerIndex) => (
                                <li
                                  className="text-xl text-black "
                                  key={pointerIndex}
                                >
                                  {pointer}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </React.Fragment>
                  );
                })}

                <div className="col-span-12 w-full">
                  {Slide5Data.length * 2 > visibleCount5 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Lemonade.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-5 ">
                  {Slide6Data.map((item, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount6 > stepIndex;
                    const showAnswer = visibleCount6 > stepIndex + 1;

                    return (
                      <div key={index} className="w-full">
                        {showQuestion && (
                          <h3 className="text-2xl text-black font-bold w-full">
                            {item.questions}
                          </h3>
                        )}

                        {showAnswer && (
                          <div>
                            <h4 className="text-xl font-medium w-full text-black py-2">
                              {item.answers}
                            </h4>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="col-span-12 w-full">
                  {Slide6Data.length * 2 > visibleCount6 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/AppleWatch.jpeg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-5 ">
                  {Slide7Data.map((item, index) => {
                    // const stepIndex = index * 2;
                    const showQuestion = visibleCount7 > index;
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
                </div>

                <div className="col-span-12 w-full">
                  {Slide7Data.length > visibleCount7 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/AppleWatch.jpeg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-5 ">
                  {Slide7Data.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-start items-start gap-2"
                      >
                        <h3 className="text-2xl text-black font-bold w-full">
                          {item.title}
                        </h3>

                        {/* <h3 className="text-xl text-black/80 font-bold w-full">
                            {item.question}
                          </h3>
                       */}

                        <p className="text-xl text-black ">{item.answers}</p>
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
              activeSlide < 7 ? "visible" : "invisible"
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
