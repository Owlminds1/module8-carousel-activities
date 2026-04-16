"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C64-L3-A4/pointer.json";
import Slide2Data from "@/layout-C64-L3-A4/pointer2.json";
import subSlideData from "@/layout-C64-L3-A4/subPointer1.json";
import sub2SlideData from "@/layout-C64-L3-A4/subPointer2.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";
import Table from "./table";
import Link from "next/link";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef4 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [visibleCount4, setVisibleCount4] = useState(1);
  const [subVisibleCount, setSubVisibleCount] = useState(1);
  const [sub2VisibleCount, setSub2VisibleCount] = useState(1);

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

        if (sub2VisibleCount < sub2SlideData.length) {
          setSub2VisibleCount((prev) => prev + 1);
          return;
        }

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 1) {
        // 1️⃣ First main points
        if (visibleCount2 < Slide2Data.length) {
          setVisibleCount2((prev) => prev + 1);
          return;
        }

        scrollRef2.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 4) {
        // 1️⃣ First main points
        if (visibleCount4 < 11) {
          setVisibleCount4((prev) => prev + 1);
          return;
        }

        scrollRef4.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2, visibleCount4, subVisibleCount]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount, visibleCount2, visibleCount4, subVisibleCount]);

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
              ? "MARKETING CAMPAIGN"
              : activeSlide === 2
                ? "MARKETING CAMPAIGN"
                : activeSlide === 3
                  ? "MARKETING CAMPAIGN"
                  : "MARKETING CAMPAIGN"}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 0
            ? "Draw inspiration from Y Combinator to create a presentation to sum up what our idea is all about. Y Combinator is a start-up accelerator that gives seed funding to emerging entrepreneurs."
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
                  <MyImage path="/C64Images/Marketing.jpg" />
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
                    <div className="flex flex-col gap-5">
                      <h3 className="text-2xl font-bold py-3 text-black">
                        Marketing exists to:
                      </h3>

                      {subSlideData
                        .slice(0, subVisibleCount)
                        .map((item, index) => (
                          <div key={index} className="flex flex-col gap-2">
                            <ul className=" space-y-5 w-full">
                              <li className="text-black text-xl font-medium">
                                {item}
                              </li>
                            </ul>
                          </div>
                        ))}
                    </div>
                  )}

                  {subSlideData.length - 1 < subVisibleCount && (
                    <div className="flex flex-col gap-5">
                      <h3 className="text-2xl font-bold py-3 text-black">
                        Marketing is done to:
                      </h3>

                      {sub2SlideData
                        .slice(0, sub2VisibleCount)
                        .map((item, index) => (
                          <div key={index} className="flex flex-col gap-2">
                            <ul className=" space-y-5 w-full">
                              <li className="text-black text-xl font-medium">
                                <span className="font-bold">
                                  {item.tite} :{" "}
                                </span>
                                {item.text}
                              </li>
                            </ul>
                          </div>
                        ))}
                    </div>
                  )}

                  <div className="col-span-12 w-full">
                    {SlideData.length +
                      subSlideData.length +
                      sub2SlideData.length >
                      visibleCount + subVisibleCount + sub2VisibleCount && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                    <div className="" ref={scrollRef}></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C64Images/Reel.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-1 ">
                  <div>
                    <h3 className="text-2xl font-bold py-3 text-black">
                      Now it’s time to create a reel for your product.
                      <span className="font-normal">
                        Reels are a great way to promote your product on social
                        media to get customers’ attention and traction on
                        sales.The product can be Nike shoes as previously noted
                        or a product of your choice.
                      </span>
                    </h3>

                    <h3 className="text-2xl font-bold py-3 text-black">
                      You’ve to:
                    </h3>

                    <ul className="list-disc space-y-3 w-full">
                      {Slide2Data.slice(0, visibleCount2).map((item, index) => (
                        <li
                          key={index}
                          className="text-black text-xl font-medium"
                        >
                          <span className="font-bold">{item.tite} : </span>
                          {item.text}
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
                    <div className="" ref={scrollRef2}></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <Table />
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <Link
                    className="text-3xl  font-bold text-blue-600"
                    href="https://www.youtube.com/watch?v=C_BZQkU5Cds"
                    target="blank"
                  >
                    Link
                  </Link>
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-1 ">
                  <div>
                    <h4 className="text-xl font-bold">EXAMPLE</h4>
                    <h3 className="text-2xl font-medium py-3 text-black">
                      Let’s discover an example. Then you can go ahead and apply
                      this technique to your own product!
                    </h3>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-1 ">
                  <h3 className="text-2xl text-center w-full font-bold py-3 text-black">
                    ANALYSIS
                  </h3>

                  {visibleCount4 >= 1 && (
                    <div className="w-full">
                      <div className="w-full flex justify-center items-center gap-2">
                        <MyImage path="/C64Images/Beginning.png" width={200} />
                      </div>
                      <ul className="list-disc">
                        <li className="text-xl text-black">
                          <span className="font-bold">Create a hook</span> A
                          tagline, a statement, a word, or a question that gets
                          the attention of the viewers
                        </li>
                      </ul>
                    </div>
                  )}

                  {visibleCount4 >= 2 && (
                    <div>
                      <h4 className="text-xl text-black">
                        <span className="font-bold">➡️</span>The tagline in this
                        ad is: “Want to play? Let’s go!” It’s the only copy that
                        appears at the beginning and the end of the ad.{" "}
                      </h4>
                    </div>
                  )}

                  {visibleCount4 >= 3 && (
                    <div>
                      <h4 className="text-xl text-black">
                        <span className="font-bold">➡️</span>It sums up Nike’s
                        motto of having a can-do attitude.
                      </h4>
                    </div>
                  )}

                  {visibleCount4 >= 4 && (
                    <div>
                      <h4 className="text-xl text-black">
                        <span className="font-bold">➡️</span>A statement that
                        reflects how every opportunity is a welcome invitation
                        to reach one’s full potential.
                      </h4>
                    </div>
                  )}

                  {visibleCount4 >= 5 && (
                    <div className="w-full">
                      <div className="w-full flex justify-center items-center gap-2">
                        <MyImage path="/C64Images/Imagination.png" width={200} />
                        <MyImage path="/C64Images/Playing.png" width={200} />
                      </div>
                      <ul className="list-disc">
                        <li className="text-xl text-black">
                          <span className="font-bold">Popularise</span> Ensure
                          it reaches as many people as possible
                        </li>
                      </ul>
                    </div>
                  )}

                  {visibleCount4 >= 6 && (
                    <div>
                      <h4 className="text-xl text-black">
                        <span className="font-bold">➡️</span>This ad appeals to
                        all the girls who dream of doing things they enjoy, of
                        winning competitions, of playing sports of their choice,
                        of doing something unique.
                      </h4>
                    </div>
                  )}

                  {visibleCount4 >= 7 && (
                    <div>
                      <h4 className="text-xl text-black">
                        <span className="font-bold">➡️</span>It shows that girls
                        can in fact do everything they want if they set their
                        minds to it.
                      </h4>
                    </div>
                  )}

                  {visibleCount4 >= 8 && (
                    <div className="w-full">
                      <div className="w-full flex justify-center items-center gap-2">
                        <MyImage path="/C64Images/Can.png" width={200} />
                        <MyImage path="/C64Images/Ending.png" width={200} />
                        <MyImage path="/C64Images/Cooperation.png" width={200} />
                      </div>
                      <ul className="list-disc">
                        <li className="text-xl text-black">
                          <span className="font-bold">
                            Establish USP (unique selling point)
                          </span>
                          The customers should know within a minute what you’re
                          selling and why, how, when and where they can buy it,
                          and who you’re selling to.
                        </li>
                      </ul>
                    </div>
                  )}

                  {visibleCount4 >= 9 && (
                    <div>
                      <h4 className="text-xl text-black">
                        <span className="font-bold">➡️</span>Nike’s USP has
                        always been to “Just Do It.” That is evident in the ad
                        which uses the tagline to demonstrate the willingness to
                        try and hope to succeed.
                      </h4>
                    </div>
                  )}

                  {visibleCount4 >= 10 && (
                    <div>
                      <h4 className="text-xl text-black">
                        <span className="font-bold">➡️</span>It shows the girl
                        wearing Nike’s shoes to move forward in her personal
                        aspirations. It shows how anything is achievable from
                        school, swimming pool, and football, to skateboarding,
                        gymnastics, and sky diving.
                      </h4>
                    </div>
                  )}

                  {visibleCount4 >= 11 && (
                    <div>
                      <h4 className="text-xl text-black">
                        <span className="font-bold">➡️</span>The only thing she
                        has to do to make the dream a reality is to say yes to
                        the original question: “Want to play? Let’s go!
                      </h4>
                    </div>
                  )}

                  <div className="col-span-12 w-full">
                    {11 > visibleCount4 && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                    <div className="" ref={scrollRef4}></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-full flex justify-center items-start flex-col gap-1 text-center text-2xl font-bold ">
                  Your turn! Create a reel with energy and enthusiasm, with or
                  without words, using Nike shoes or a product of your choice!
                  Note that a reel’s dimensions on Instagram are:
                </div>

                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-1 text-2xl font-bold ">
                  <ul className="list-disc space-y-3">
                    <li className="text-xl text-black font-medium">
                      9:16 aspect ratio
                    </li>
                    <li className="text-xl text-black font-medium">
                      1080 pixels wide by 1920 pixels tall (reel and cover
                      image)
                    </li>
                    <li className="text-xl text-black font-medium">
                      Square thumbnail (3:4 ratio) on profile view
                    </li>
                  </ul>
                </div>

                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-2 text-2xl font-bold ">
                  <ul className="list-disc space-y-3">
                    <li className="text-xl text-black font-medium">
                      {" "}
                      <span className="font-bold ">Create a hook : </span>A
                      tagline, a statement, a word, or a question that gets the
                      attention of the viewers
                    </li>
                  </ul>
                  <textarea
                    placeholder="write here..."
                    className="text-black text-lg p-2 rounded-lg border outline-0 w-full"
                    rows={2}
                  />
                </div>

                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-2 text-2xl font-bold ">
                  <ul className="list-disc space-y-3">
                    <li className="text-xl text-black font-medium">
                      {" "}
                      <span className="font-bold ">Popularise : </span> Ensure
                      it reaches as many people as possible
                    </li>
                  </ul>
                  <textarea
                    placeholder="write here..."
                    className="text-black text-lg p-2 rounded-lg border outline-0 w-full"
                    rows={2}
                  />
                </div>

                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-2 text-2xl font-bold ">
                  <ul className="list-disc space-y-3">
                    <li className="text-xl text-black font-medium">
                      {" "}
                      <span className="font-bold ">
                        Establish USP (unique selling point) :{" "}
                      </span>{" "}
                      The customers should know within a minute what you’re
                      selling and why, how, when and where they can buy it, and
                      who you’re selling to.
                    </li>
                  </ul>
                  <textarea
                    placeholder="write here..."
                    className="text-black text-lg p-2 rounded-lg border outline-0 w-full"
                    rows={2}
                  />
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
