"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C64-L2-A4/pointer.json";
import subSlideData from "@/layout-C64-L2-A4/subPointer1.json";
import subSlideData2 from "@/layout-C64-L2-A4/subPointer2.json";
import Slide2Data from "@/layout-C64-L2-A4/pointer2.json";
import Slide4Data from "@/layout-C64-L2-A4/pointer4.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";
import Table from "./table";
import Link from "next/link";
const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [subVisibleCount, setSubVisibleCount] = useState(1);
  const [subVisibleCount2, setSubVisibleCount2] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [visibleCount3, setVisibleCount3] = useState(1);

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
        // 1️⃣ First main points
        if (visibleCount < SlideData.length) {
          setVisibleCount((prev) => prev + 1);
          return;
        }

        // 2️⃣ Then subSlideData
        if (subVisibleCount < subSlideData.length) {
          setSubVisibleCount((prev) => prev + 1);
          return;
        }

        // 3️⃣ Then subSlideData2
        if (subVisibleCount2 < subSlideData2.length) {
          setSubVisibleCount2((prev) => prev + 1);
          return;
        }

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );

        scrollRef2.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 3) {
        setVisibleCount3((prev) => (prev < 4 ? prev + 1 : prev));

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    visibleCount,
    subVisibleCount,
    subVisibleCount2,
    visibleCount2,
    visibleCount3,

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
    subVisibleCount,
    subVisibleCount2,
    visibleCount2,
    visibleCount3,
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
            ? "MARKETING"
            : activeSlide === 1
              ? " MARKETING CAMPAIGN"
              : activeSlide === 2
                ? "MARKETING CAMPAIGN RUBRIC"
                : activeSlide === 3
                  ? "MARKETING CAMPAIGN "
                  : activeSlide === 4
                    ? "MARKETING CAMPAIGN ANALYSIS"
                    : activeSlide === 5
                      ? " MARKETING CAMPAIGN"
                      : ""}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 2
            ? "This is the rubric I will use to evaluate your reel."
            : activeSlide === 5
              ? "Your turn! Create a reel with energy and enthusiasm, with or without words, using the schoolbag or a product of your choice! Note that a reel’s dimensions on Instagram are:"
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
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-1 ">
                  <div>
                    <h3 className="text-2xl font-bold py-3 text-black">
                      What is marketing? Why does marketing exist?
                    </h3>

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
                  </div>

                  {SlideData.length - 1 < visibleCount && (
                    <div>
                      <h3 className="text-2xl font-bold py-3 text-black">
                        Marketing exists to:
                      </h3>

                      <ul className="list-disc space-y-3 w-full">
                        {subSlideData
                          .slice(0, subVisibleCount)
                          .map((i, index) => (
                            <li
                              key={index}
                              className="text-black text-xl font-medium"
                            >
                              {i}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  {subSlideData.length - 1 < subVisibleCount && (
                    <div>
                      <h3 className="text-2xl font-bold py-3 text-black">
                        Marketing is done to:
                      </h3>

                      <ul className="list-disc space-y-3 w-full">
                        {subSlideData2
                          .slice(0, subVisibleCount2)
                          .map((i, index) => (
                            <li
                              key={index}
                              className="text-black text-xl font-medium"
                            >
                              <span className="font-bold">{i.title} : </span>
                              {i.text}
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}

                  <div className="col-span-12 w-full">
                    {SlideData.length +
                      subSlideData.length +
                      subSlideData2.length >
                      visibleCount + subVisibleCount + subVisibleCount2 && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  </div>
                  <div className="" ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-1 ">
                  <div>
                    <h3 className="text-2xl  py-3 text-black">
                      Now it’s time to create a reel for your product. Reels are
                      a great way to promote your product on social media to get
                      customers’ attention and traction on sales. The product
                      can be a schoolbag as previously noted or a product of
                      your choice.
                    </h3>

                    <h3 className="text-2xl font-bold py-3 text-black">
                      You’ve to:
                    </h3>

                    <ul className="list-disc space-y-3 w-full">
                      {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                        <li
                          key={index}
                          className="text-black text-xl font-medium"
                        >
                          <span className="font-bold">{i.title} : </span>
                          {i.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-12 w-full">
                    {Slide2Data.length > visibleCount2 && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  </div>
                  <div className="" ref={scrollRef2}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Table />
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-1 ">
                  <div>
                    <h3 className="text-2xl font-bold py-3 text-black">
                      Let’s see with an example.
                    </h3>

                    <ul className="list-disc space-y-3 w-full">
                      {visibleCount3 >= 1 && (
                        <li className="text-black text-xl font-medium">
                          I will show an ad for a popular clothing brand called
                          BOSS.{" "}
                          <Link
                            href="https://www.youtube.com/watch?v=6DxPqCA4vEk"
                            target="blank"
                            className="text-blue-800"
                          >
                            (Link)
                          </Link>
                        </li>
                      )}

                      {visibleCount3 >= 2 && (
                        <li className="text-black text-xl font-medium">
                          Although there are no words in the ad, the series of
                          images tells us a narrative.
                        </li>
                      )}
                      {visibleCount3 >= 3 && (
                        <li className="text-black text-xl font-medium">
                          The video connects with kids on many levels, both
                          including what’s good and what’s challenging. This
                          shows authenticity.
                        </li>
                      )}

                      {visibleCount3 >= 4 && (
                        <li className="text-black text-xl font-medium">
                          After watching, you can create your own reel with or
                          without words. Your choice!
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="col-span-12 w-full">
                    {4 > visibleCount3 && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  </div>
                  <div className="" ref={scrollRef3}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              {Slide4Data.map((item, index) => (
                <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                  <div className="col-span-6">
                    <MyImage path={item.img} />
                  </div>
                  <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-1 ">
                    <div>
                      <h3 className="text-2xl font-bold py-3 text-black">
                        {item.text}
                      </h3>

                      <p className="text-xl py-3 text-black">{item.text2}</p>

                      <ul className="list-disc space-y-3 w-full">
                        {item.pointer.map((i, index) => (
                          <li
                            key={index}
                            className="text-black text-xl font-medium"
                          >
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-1 ">
                  <ul className="list-disc space-y-3 w-full">
                    <li className="text-black text-xl font-medium">
                      9:16 aspect ratio
                    </li>
                    <li className="text-black text-xl font-medium">
                     1080 pixels wide by 1920 pixels tall (reel and cover image)
                    </li> 
                    
                    <li className="text-black text-xl font-medium">
                    Square thumbnail (3:4 ratio) on profile view
                    </li>
                    
                     <li className="text-black text-xl font-medium">
                  <span className="font-bold">Create a hook : </span> A tagline, a statement, a word, or a question that gets the attention of the viewers
                    </li>

                    <React.Fragment>
                      <textarea placeholder="write here..." className="text-lg border outline-0 text-black w-full rounded-lg p-2" rows={2}/>
                    </React.Fragment>


                       <li className="text-black text-xl font-medium">
                  <span className="font-bold">Popularise : </span>Ensure it reaches as many people as possible
                    </li>

                    <React.Fragment>
                      <textarea placeholder="write here..." className="text-lg border outline-0 text-black w-full rounded-lg p-2" rows={2}/>
                    </React.Fragment>


                      <li className="text-black text-xl font-medium">
                  <span className="font-bold">Establish USP (unique selling point) : </span>The customers should know within a minute what you’re selling and why, how, when and where they can buy it, and who you’re selling to.
                    </li>

                    <React.Fragment>
                      <textarea placeholder="write here..." className="text-lg border outline-0 text-black w-full rounded-lg p-2" rows={2}/>
                    </React.Fragment>
                  </ul>
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
