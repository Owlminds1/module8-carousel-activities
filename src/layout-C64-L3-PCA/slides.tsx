"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import Welldone from "@/components/wellDone";

import Table from "./table";
import Link from "next/link";
import VideoRecorder from "@/components/vedioRecorder";
const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [recording, setRecording] = useState(false);

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

      if (current === 1) {
        // 1️⃣ First main points
        if (visibleCount < 13) {
          setVisibleCount((prev) => prev + 1);
          return;
        }

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 2) {
        // 1️⃣ First main points
        if (visibleCount2 < 9) {
          setVisibleCount2((prev) => prev + 1);
          return;
        }

        scrollRef2.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2, activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount, visibleCount2, activeSlide]);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (Slide3Data.length * 2 === visibleCount3) {
  //     setOpen(true);
  //   }
  // }, [visibleCount3]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black"></h4>

        <p className="text-xl font-medium w-[80%] text-center text-black "></p>
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
              <div className="flex wfull  justify-start gap-8 items-center flex-col p-5">
                <h3 className="text-2xl text-black font-bold">
                  Here are some videos to get some inspiration:
                </h3>
                <Link
                  href="https://www.instagram.com/reel/DMIWQxfRtrs/?hl=en"
                  target="blank"
                  className="px-5 py-2 rounded-lg cursor-pointer text-white bg-violet-900"
                >
                  VRBO
                </Link>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/4nxrkPtR348?si=DLsyAtZY41F6jCuM"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>

                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/TZoprxGzzMM?si=Zy-ysH7ZCMcusIL1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-1 ">
                  <div className="flex justify-center items-start flex-col gap-3">
                    <h3 className="text-2xl font-bold py-3 text-black">
                      You’ve to create three videos:
                    </h3>

                    {visibleCount >= 1 && (
                      <h3 className="text-2xl text-black ">
                        <span className="font-bold">Video 1:</span> Introduce
                        myself
                      </h3>
                    )}

                    {visibleCount >= 2 && (
                      <p className="text-2xl my-2 text-black ">
                        The first video (up to 1 min) will be your introduction.
                        Answer questions such as:
                      </p>
                    )}

                    {visibleCount >= 3 && (
                      <h3 className="text-xl font-bold text-black ">
                        ➡️Who are you?
                      </h3>
                    )}

                    {visibleCount >= 4 && (
                      <h3 className="text-xl font-bold text-black ">
                        ➡️What makes you a great founder?
                      </h3>
                    )}

                    {visibleCount >= 5 && (
                      <h3 className="text-xl font-bold text-black ">
                        ➡️How are your teambuilding abilities?
                      </h3>
                    )}

                    {visibleCount >= 6 && (
                      <h3 className="text-xl font-bold text-black ">
                        ➡️What’s unique about your experiences that will make
                        you a great success?
                      </h3>
                    )}

                    {visibleCount >= 7 && (
                      <h3 className="text-2xl text-black mt-2 ">
                        <span className="font-bold">Video 2:</span>Introduce the
                        Product
                      </h3>
                    )}

                    {visibleCount >= 8 && (
                      <p className="text-2xl my-2 text-black ">
                        The second video (up to 3 min) on what we just prepared
                        in class i.e. your product. Please answer all the
                        questions previously discussed.
                      </p>
                    )}

                    {visibleCount >= 9 && (
                      <h3 className="text-2xl text-black ">
                        <span className="font-bold">Video 3:</span> Competitor
                        analysis
                      </h3>
                    )}

                    {visibleCount >= 10 && (
                      <p className="text-2xl my-2 text-black ">
                        The third video (up to 1 min) will be your competitor
                        analysis to show why your product is better than others.
                        Answer questions such as:
                      </p>
                    )}

                    {visibleCount >= 11 && (
                      <h3 className="text-xl font-bold text-black ">
                        ➡️What do you offer that your competitors don’t?
                      </h3>
                    )}

                    {visibleCount >= 12 && (
                      <h3 className="text-xl font-bold text-black ">
                        ➡️How is your pricing structure better than your
                        competitors?
                      </h3>
                    )}

                    {visibleCount >= 13 && (
                      <h3 className="text-xl font-bold text-black ">
                        ➡️What about the quality of your product makes you stand
                        out amidst your competitors?
                      </h3>
                    )}
                  </div>

                  <div className="col-span-12 w-full">
                    {13 > visibleCount && (
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
                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-1 ">
                  <div className="flex justify-center items-start flex-col gap-3">
                    <h3 className="text-2xl font-bold py-3 text-black">
                      Your presentation will be evaluated on its content as well
                      as etiquettes
                    </h3>

                    {visibleCount2 >= 1 && (
                      <ul className="list-disc">
                        <li className="text-2xl text-black ">
                          <span className="font-bold">
                            Be Polite and Confident
                          </span>{" "}
                          Start with a smile! Greet politely: ‘Hello, my name
                          is…’ Speak clearly and not too fast. Confidence shows
                          that you believe in your idea.
                        </li>
                      </ul>
                    )}

                    {visibleCount2 >= 2 && (
                      <ul className="list-disc">
                        <li className="text-2xl text-black ">
                          <span className="font-bold">
                            Keep It Brief and Simple
                          </span>{" "}
                          Stick to the duration!
                        </li>
                      </ul>
                    )}

                    {visibleCount2 >= 3 && (
                      <div>
                        <h4 className="font-bold text-xl">Focus on:</h4>
                        <ul className="list-disc">
                          <li className="text-xl text-black ">
                            What your idea is
                          </li>

                          <li className="text-xl text-black ">
                            Why it’s special
                          </li>

                          <li className="text-xl text-black ">
                            What you want (e.g., people to try it, or support
                            it)
                          </li>
                        </ul>
                      </div>
                    )}

                    {visibleCount2 >= 4 && (
                      <ul className="list-disc">
                        <li className="text-2xl text-black ">
                          <span className="font-bold">Use Positive Energy</span>{" "}
                          Show enthusiasm! If you’re excited about your idea,
                          others will be too.
                        </li>
                      </ul>
                    )}

                    {visibleCount2 >= 5 && (
                      <ul className="list-disc">
                        <li className="text-2xl text-black ">
                          <span className="font-bold">Make Eye Contact</span>{" "}
                          See the person when you speak as it shows confidence
                          and respect.
                        </li>
                      </ul>
                    )}

                    {visibleCount2 >= 6 && (
                      <ul className="list-disc">
                        <li className="text-2xl text-black ">
                          <span className="font-bold">
                            Mind Your Body Language
                          </span>{" "}
                          Stand tall, don’t slouch. Use small, natural hand
                          gestures. Avoid fidgeting.
                        </li>
                      </ul>
                    )}

                    {visibleCount2 >= 7 && (
                      <ul className="list-disc">
                        <li className="text-2xl text-black ">
                          <span className="font-bold">
                            Don’t Memorize Like a Robot
                          </span>{" "}
                          Practice your pitch, but make it sound like you’re
                          telling a story to a friend.
                        </li>
                      </ul>
                    )}

                    {visibleCount2 >= 8 && (
                      <ul className="list-disc">
                        <li className="text-2xl text-black ">
                          <span className="font-bold">End with Gratitude</span>{" "}
                          Say “Thank you for listening!” You can add: “Would you
                          like to know more?” or “Can I show you how it works?”
                        </li>
                      </ul>
                    )}

                    {visibleCount2 >= 9 && (
                      <ul className="list-disc">
                        <li className="text-2xl text-black ">
                          <span className="font-bold">
                            Practice, Practice, Practice!
                          </span>{" "}
                          Rehearse your pitch. The more you practice, the more
                          confident you’ll become!
                        </li>
                      </ul>
                    )}
                  </div>

                  <div className="col-span-12 w-full">
                    {9 > visibleCount2 && (
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
              <div className="grid grid-cols-12 gap-8 place-items-center w-full p-5">
                <div className="col-span-12 flex flex-col justify-center items-center  w-[50%]">
                  <h3 className="text-2xl text-black font-bold ">
                    Video 1 - Introduce myself
                  </h3>
                  <VideoRecorder
                    onStart={() => swiperRef.current?.updateAutoHeight()}
                    recording={recording}
                    setRecording={setRecording}
                  />
                </div>

                <div className="col-span-12 flex flex-col justify-center items-center  w-[50%]">
                  <h3 className="text-2xl text-black font-bold ">
                    Video 2 - Introduce Product
                  </h3>
                  <VideoRecorder
                    onStart={() => swiperRef.current?.updateAutoHeight()}
                    recording={recording}
                    setRecording={setRecording}
                  />
                </div>

                <div className="col-span-12 flex flex-col justify-center items-center  w-[50%]">
                  <h3 className="text-2xl text-black font-bold ">
                    Video 3 - Competitor analysis
                  </h3>
                  <VideoRecorder
                    onStart={() => swiperRef.current?.updateAutoHeight()}
                    recording={recording}
                    setRecording={setRecording}
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
              activeSlide < 4 ? "visible" : "invisible"
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
