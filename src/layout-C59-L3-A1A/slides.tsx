"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Slide7Data from "@/layout-C59-L3-A1A/pointer7.json";
import Welldone from "@/components/wellDone";
import MyImage from "@/components/MyImage";
import Link from "next/link";
import Table from "./table";
import Table2 from "./table2";
import SuggestionsData from "@/layout-C59-L3-A1A/suggestiveRes.json";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);
  const scrollRef4 = useRef<HTMLDivElement>(null);
  const scrollRef5 = useRef<HTMLDivElement>(null);
  const scrollRef6 = useRef<HTMLDivElement>(null);
  const scrollRef7 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  const [visibleCount3, setVisibleCount3] = useState(1);
  const [visibleCount4, setVisibleCount4] = useState(1);
  const [visibleCount5, setVisibleCount5] = useState(1);
  const [visibleCount6, setVisibleCount6] = useState(0);
  const [visibleCount7, setVisibleCount7] = useState(1);

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
        setVisibleCount((prev) => (prev < 3 ? prev + 1 : prev));

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 2) {
        setVisibleCount3((prev) => (prev < 4 ? prev + 1 : prev));

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 3) {
        setVisibleCount4((prev) => (prev < 4 ? prev + 1 : prev));

        scrollRef4.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 4) {
        setVisibleCount5((prev) => (prev < 5 ? prev + 1 : prev));

        scrollRef5.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 5) {
        setVisibleCount6((prev) => (prev < 4 ? prev + 1 : prev));

        scrollRef6.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 6) {
        setVisibleCount7((prev) =>
          prev < Slide7Data.length * 2 ? prev + 1 : prev,
        );

        scrollRef7.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    visibleCount,
    visibleCount3,
    visibleCount4,
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
    visibleCount3,
    visibleCount4,
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
            ? "PRINCIPLES OF MARKETING"
            : activeSlide === 1
              ? "PRINCIPLES OF MARKETING"
              : activeSlide === 2
                ? "PRINCIPLES OF MARKETING Q&A"
                : activeSlide === 3
                  ? "THE WHY OF MARKETING"
                  : activeSlide === 4
                    ? "THE WHY OF MARKETING"
                    : activeSlide === 5
                      ? "APPLE (AIRTAG) MARKETING"
                      : activeSlide === 6
                        ? "APPLE (AIRTAG) MARKETING Q&A"
                        : activeSlide === 7
                          ? "BRAND SYNERGY"
                          : activeSlide === 8
                            ? "BRAND SYNERGY"
                            : "SUGGESTIVE RESPONSES"}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 7
            ? "Let’s answer some questions about branding to be able to create a marketing campaign."
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
                <div className="col-span-6">
                  <MyImage path="/C59Images/Marketing.jpg" />
                </div>
                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  {visibleCount >= 1 && (
                    <ul className="list-disc space-y-3">
                      <li className="text-black text-xl ">
                        We will watch a video to understand the principles and
                        purpose of marketing, and the importance of authenticity
                        in marketing campaigns.
                      </li>

                      <li className="text-black text-xl ">
                        Pay attention because I will ask you the following
                        questions afterwards.
                      </li>
                    </ul>
                  )}

                  {visibleCount >= 2 && (
                    <div className="w-full">
                      <h4 className="text-xl font-bold text-black w-full">
                        Video Q&A
                      </h4>

                      <ul className="list-disc space-y-3">
                        <li className="text-black text-xl ">
                          What is marketing? Why does marketing exist?
                        </li>
                      </ul>
                    </div>
                  )}

                  {visibleCount >= 3 && (
                    <ul className="list-disc space-y-3">
                      <li className="text-black text-xl ">
                        What, besides profit, is the driving factor of doing
                        marketing in a company?
                      </li>
                    </ul>
                  )}

                  {3 > visibleCount && (
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
                  <video
                    src="/C59Images/Principles_of_Marketing.mp4"
                    className="
                            max-w-200 h-auto"
                    controls
                    autoPlay={false}
                  ></video>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  {visibleCount3 >= 1 && (
                    <div className="w-full">
                      <h4 className="text-xl font-bold">
                        What is marketing? Why does marketing exist?
                      </h4>
                      <ul className="list-disc space-y-3">
                        <li className="text-xl">
                          Marketing is the manifestation of company’s values
                          i.e. brand building, nurturing the brand, protecting
                          the brand
                        </li>
                      </ul>
                    </div>
                  )}

                  {visibleCount3 >= 2 && (
                    <div className="w-full">
                      <h4 className="text-xl font-bold">
                        Marketing exists to:
                      </h4>
                      <ul className="list-disc space-y-3">
                        <li className="text-xl">Advance the business</li>
                        <li className="text-xl">
                          Establish platforms that will differentiate your
                          brand, your company, and keep you ahead in the game
                        </li>
                      </ul>
                    </div>
                  )}

                  {visibleCount3 >= 3 && (
                    <div className="w-full">
                      <h4 className="text-xl font-bold">
                        What, besides profit, is the driving factor of doing
                        marketing in a company?
                      </h4>
                    </div>
                  )}

                  {visibleCount3 >= 4 && (
                    <ul className="list-disc space-y-3">
                      <li className="text-xl">
                        Marketing is the manifestation of company’s values i.e.
                        brand building, nurturing the brand, protecting the
                        brand
                      </li>
                    </ul>
                  )}

                  {4 > visibleCount3 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef3}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6 ">
                  <MyImage path="/C59Images/Posters.jpg" />
                </div>
                <div className="w-full col-span-6 flex flex-col gap-3">
                  <h4 className="text-xl font-bold text-black w-full">
                    What is marketing? Why does marketing exist?
                  </h4>

                  <ul className="list-disc space-y-3">
                    <li className="text-black text-xl ">
                      Marketing is the manifestation of company’s values i.e.
                      brand building, nurturing the brand, protecting the brand
                    </li>
                  </ul>

                  {visibleCount4 >= 2 && (
                    <div className="w-full">
                      <h4 className="text-xl font-bold text-black w-full">
                        Marketing exists to:
                      </h4>

                      <ul className="list-disc space-y-3">
                        <li className="text-black text-xl ">
                          Advance the business
                        </li>

                        <li className="text-black text-xl ">
                          Establish platforms that will differentiate your
                          brand, your company, and keep you ahead in the game
                        </li>
                      </ul>
                    </div>
                  )}

                  {visibleCount4 >= 3 && (
                    <ul className="list-disc space-y-3">
                      <li className="text-black text-xl ">
                        What, besides profit, is the driving factor of doing
                        marketing in a company?
                      </li>
                    </ul>
                  )}

                  {visibleCount4 >= 4 && (
                    <ul className="list-disc space-y-3">
                      <li className="text-black text-xl ">
                        Marketing is done so that a company can do well to do
                        good. The goal is to use marketing as a force not only
                        for growth, but also as a force for good.
                      </li>
                    </ul>
                  )}

                  {4 > visibleCount4 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef4}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage
                    path="/C59Images/Airtag.png"
                    width={500}
                    height={400}
                  />
                </div>
                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="w-full text-xl text-black">
                    Marketing is like telling a story about something so people
                    will like it and want it.
                  </p>
                  <h4 className="w-full  text-xl font-bold">
                    Marketing is done to:{" "}
                  </h4>
                  <ul className="list-disc space-y-3">
                    {visibleCount5 >= 1 && (
                      <li className="text-black text-xl ">
                        <span className="font-bold "> Inform :</span> Let people
                        know about a product (phone) or a service (kids’ salon)
                        that a company promotes
                      </li>
                    )}

                    {visibleCount5 >= 2 && (
                      <li className="text-black text-xl ">
                        <span className="font-bold "> Persuade :</span> Show why
                        a company’s product or service is better than others
                      </li>
                    )}

                    {visibleCount5 >= 3 && (
                      <li className="text-black text-xl ">
                        <span className="font-bold "> Remind :</span>Keep the
                        product or service of the company in people’s minds so
                        they don’t forget
                      </li>
                    )}

                    {visibleCount5 >= 4 && (
                      <li className="text-black text-xl ">
                        <span className="font-bold "> Build Trust :</span>Make
                        people believe in the company’s values through branding
                      </li>
                    )}

                    {visibleCount5 >= 5 && (
                      <li className="text-black text-xl ">
                        <span className="font-bold "> Increase Sales :</span>{" "}
                        More people buying means the business and a company earn
                        more money
                      </li>
                    )}
                  </ul>

                  {5 > visibleCount5 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef5}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Airtag.jpeg" />
                </div>
                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="w-full text-xl text-black">
                    Let’s practice! Go through this website of{" "}
                    <Link
                      href="https://www.apple.com/in/airtag/"
                      target="blank"
                      className="text-blue-400"
                    >
                      https://www.apple.com/in/airtag/
                    </Link>{" "}
                    to identify the principles of marketing of AirTag.
                  </p>
                  <h4 className="w-full  text-xl font-bold">
                    Please answer the following questions:
                  </h4>

                  {visibleCount6 >= 1 && (
                    <div className="flex flex-col gap-2 w-full">
                      <ul className="list-disc space-y-3">
                        <li className="text-black text-xl ">
                          How does Apple differentiate its AirTags from other
                          brands?
                        </li>
                      </ul>

                      <textarea
                        placeholder="write here..."
                        className="text-lg placeholder:font-normal font-medium p-2 rounded-lg border-2 outline-0 w-full"
                        rows={3}
                      />
                    </div>
                  )}

                  {visibleCount6 >= 2 && (
                    <div className="flex flex-col gap-2 w-full">
                      <ul className="list-disc space-y-3">
                        <li className="text-black text-xl ">
                          How does AirTag reflect Apple’s brand values?
                        </li>
                      </ul>

                      <textarea
                        placeholder="write here..."
                        className="text-lg placeholder:font-normal font-medium p-2 rounded-lg border-2 outline-0 w-full"
                        rows={3}
                      />
                    </div>
                  )}

                  {visibleCount6 >= 3 && (
                    <div className="flex flex-col gap-2 w-full">
                      <ul className="list-disc space-y-3">
                        <li className="text-black text-xl ">
                          What is similar (visually) between AirTag and other
                          Apple products?
                        </li>
                      </ul>

                      <textarea
                        placeholder="write here..."
                        className="text-lg placeholder:font-normal font-medium p-2 rounded-lg border-2 outline-0 w-full"
                        rows={3}
                      />
                    </div>
                  )}

                  {visibleCount6 >= 4 && (
                    <div className="flex flex-col gap-2 w-full">
                      <ul className="list-disc space-y-3">
                        <li className="text-black text-xl ">
                          How does AirTag as a product advance Apple’s line up
                          of products?
                        </li>
                      </ul>

                      <textarea
                        placeholder="write here..."
                        className="text-lg placeholder:font-normal font-medium p-2 rounded-lg border-2 outline-0 w-full"
                        rows={3}
                      />
                    </div>
                  )}

                  {4 > visibleCount6 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef6}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/Airtag.jpeg" />
                </div>
                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  {Slide7Data.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestion = visibleCount7 > stepIndex;
                    const showAnswer = visibleCount7 > stepIndex + 1;
                    return (
                      <div key={index} className="w-full flex flex-col gap-2">
                        {showQuestion && (
                          <h4 className="text-xl w-full font-bold text-black">
                            {item.question}
                          </h4>
                        )}

                        {showAnswer && (
                          <p className="text-xl w-full text-black/90 font-normal">
                            {item.answer}
                          </p>
                        )}
                      </div>
                    );
                  })}
                  {Slide7Data.length * 2 > visibleCount7 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef7}></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-8 w-full place-items-center ">
                <div className="col-span-6 w-full">
                  <MyImage
                    path="/C59Images/Airtag.png"
                    width={500}
                    height={400}
                  />
                </div>

                <div className="col-span-6 w-full">
                  <ul className="list-disc space-y-3 w-[80%]">
                    <li className="text-xl text-black">
                      Here are four quadrants that define Apple’s approach to
                      branding and marketing.
                    </li>

                    <li className="text-xl text-black">
                      Each quadrant has details from Apple’s{" "}
                      <Link
                        href="https://www.apple.com/in/sitemap/"
                        target="blank"
                      >
                        Sitemap
                      </Link>
                      .
                    </li>

                    <li className="text-xl text-black">
                      Drag and place the appropriate responses from the
                      Masterlist.
                    </li>
                  </ul>
                </div>
                <div className="col-span-12 w-full">
                  <Table />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-8 w-full place-items-center ">
                <div className="col-span-6 ">
                  <MyImage
                    path="/C59Images/Airtag.png"
                    width={500}
                    height={400}
                  />
                </div>

                <div className="col-span-6 w-full">
                  <ul className="list-disc space-y-3 w-[80%]">
                    <li className="text-xl text-black">
                      Let’s give concrete examples that are part of each of
                      these categories of branding and marketing.{" "}
                    </li>

                    <li className="text-xl text-black">
                      Drag and place each item from the masterlist into the
                      correct category.
                    </li>

                    <li className="text-xl text-black">
                      Each example and category fuels the overarching marketing
                      campaign of Apple.
                    </li>
                  </ul>
                </div>
                <div className="col-span-12 w-full">
                  <Table2 swiperRef={swiperRef} />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 w-full gap-1 ">
                {SuggestionsData.map((item, index) => (
                  <div key={index} className="col-span-3 p-2 border border-black flex justify-start items-center flex-col gap-5 ">
                    <h4 className="font-bold text-2xl text-center ">{item.titel}</h4>
                    <ul className="list-disc space-y-3 w-[80%] ">
                      {
                        item.list.map((list,listIndex)=>(
<li key={listIndex} className="text-xl font-medium ">{list}</li>
                        ))
                      }
                    </ul>
                  </div>
                ))}
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
              activeSlide < 9 ? "visible" : "invisible"
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
