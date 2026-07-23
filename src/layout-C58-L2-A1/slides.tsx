"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C58-L2-A1/pointer1.json";

import Welldone from "@/components/wellDone";
import JourneyActivity from "./journeyActivity";
import JourneySolution from "./journeySolution";
import Link from "next/link";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const innerSwiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [response, setResponse] = useState(Array(1).fill(""));
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeInnerSlide, setActiveInnerSlide] = useState(0);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

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

  const handleAdd = () => {
    setResponse((prev) => [...prev, response]);
  };

  const sectionTitles = ["PERSONA", "SCENARIO", "EXPECTATIONS", "PHASES"];

  const handleInnerPrev = () => {
    innerSwiperRef?.current?.slidePrev();
  };

  const handleInnerNext = () => {
    innerSwiperRef?.current?.slideNext();
  };

  const handleInnerSlideChange = (swiper: SwiperClass) => {
    setActiveInnerSlide(swiper.activeIndex);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="w-[70%] flex  justify-center items-center gap-2 flex-col">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "WHAT IS A USER JOURNEY?"
            : activeSlide === 1
              ? "USER JOURNEY EXAMPLE"
              : activeSlide === 2
                ? "USER JOURNEY ACTIVITY"
                : activeSlide === 3
                  ? "USER JOURNEY SOLUTION"
                  : ""}
        </h4>
        <p className="text-center text-xl text-black">
          {activeSlide === 2
            ? "Apply the Framework of User Journey: Example of iPad"
            : activeSlide === 3
              ? "Solution: User Journey Map for iPad Purchase"
              : ""}
        </p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3  ">
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
                <div className="col-span-6 w-full flex justify-center items-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setZoomedImage("/C58Images/journey_map_template.png")}>
                  <MyImage path="/C58Images/journey_map_template.png" />
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-3 px-5">
                  <ul className="list-disc space-y-3">
                    <li className="text-black text-lg animate_fadeInUp">
                      A user journey allows companies to visually understand how a user (customer) goes about accomplishing a goal. That goal can be anything from seeking information to choosing a product.
                    </li>
                    <li className="text-black text-lg animate_fadeInUp">
                      To do this, companies create personalities for different users based on surveys and interviews.
                    </li>
                    <li className="text-black text-lg animate_fadeInUp">
                      For example: some users may be classified as "switching users" because they want to switch to a new product.
                    </li>
                    <li className="text-black text-lg animate_fadeInUp">
                      Based on this, companies are able to identify the essential functions of their platforms as per the users' needs.
                    </li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-4">
                    Source: https://usability.yale.edu/understanding-your-user/user-journey-maps
                  </p>
                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center flex-col gap-2">
                  <div className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setZoomedImage("/C58Images/journey_map_example2.jpg")}>
                    <MyImage path="/C58Images/journey_map_example2.jpg" />
                  </div>
                  <p className="text-gray-600 text-xs">
                    Source: https://www.nngroup.com/articles/journey-mapping-101/
                  </p>
                </div>
                <div className=" col-span-6 w-full flex justify-start items-start flex-col gap-4 px-5">
                  <Swiper
                    loop={false}
                    autoHeight
                    slidesPerView={1}
                    allowTouchMove={false}
                    onSwiper={(swiper) => (innerSwiperRef.current = swiper)}
                    onSlideChange={handleInnerSlideChange}
                    className="w-full"
                  >
                    <SwiperSlide>
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-3 animate_fadeInUp">PERSONA</h3>
                        <p className="text-black text-lg animate_fadeInUp leading-relaxed">
                          Persona is the category of user defined by needs and expectations. To define a persona, we can ask questions such as:
                        </p>
                        <ul className="list-disc space-y-2 mt-3 ml-5">
                          <li className="text-black text-lg animate_fadeInUp">Who is my user?</li>
                          <li className="text-black text-lg animate_fadeInUp">What are their typical behaviours or actions?</li>
                          <li className="text-black text-lg animate_fadeInUp">What do they like or dislike?</li>
                          <li className="text-black text-lg animate_fadeInUp">Where do they live?</li>
                          <li className="text-black text-lg animate_fadeInUp">What do they buy?</li>
                          <li className="text-black text-lg animate_fadeInUp">How old are they?</li>
                        </ul>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-3 animate_fadeInUp">SCENARIO</h3>
                        <p className="text-black text-lg animate_fadeInUp leading-relaxed">
                          The scenario defines Jamie&apos;s dilemma. Here it&apos;s listed as wanting to try a new service provider for a better price with plenty of usage.
                        </p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-3 animate_fadeInUp">EXPECTATIONS</h3>
                        <p className="text-black text-lg animate_fadeInUp leading-relaxed">
                          This is related to what the customer expects from the new service provider. Here, Jamie expects information to be clearly presented along with easy comparisons as well as effective customer service.
                        </p>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div>
                        <h3 className="text-2xl font-bold text-black mb-3 animate_fadeInUp">PHASES</h3>
                        <ol className="list-decimal space-y-2 ml-5">
                          <li className="text-black text-lg animate_fadeInUp">Jamie defines exactly what she needs.</li>
                          <li className="text-black text-lg animate_fadeInUp">She figures out a way to compare products by accessing various channels of product communication</li>
                          <li className="text-black text-lg animate_fadeInUp">She negotiates with her current service provider to switch without cost implication and discuss alternatives while comparing pricing</li>
                          <li className="text-black text-lg animate_fadeInUp">She selects a new service provider that fulfills all her expectations.</li>
                        </ol>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div className="flex justify-between gap-4 w-full mt-6">
                    {activeInnerSlide > 0 && (
                      <button
                        onClick={handleInnerPrev}
                        className="flex items-center gap-2 px-4 py-2 bg-violet-900 text-white rounded-lg hover:bg-violet-800 active:scale-95 transition-all duration-150"
                      >
                        <FaArrowLeft className="text-lg" />
                        <div className="flex flex-col items-start">
                          <span className="text-xs font-light">Previous</span>
                          <span className="font-semibold text-sm">{sectionTitles[activeInnerSlide - 1]}</span>
                        </div>
                      </button>
                    )}
                    {activeInnerSlide < 3 && (
                      <button
                        onClick={handleInnerNext}
                        className="flex items-center gap-2 px-4 py-2 bg-violet-900 text-white rounded-lg hover:bg-violet-800 active:scale-95 transition-all duration-150 ml-auto"
                      >
                        <div className="flex flex-col items-end">
                          <span className="text-xs font-light">Next</span>
                          <span className="font-semibold text-sm">{sectionTitles[activeInnerSlide + 1]}</span>
                        </div>
                        <FaArrowRight className="text-lg" />
                      </button>
                    )}
                  </div>

                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <JourneyActivity />
            </SwiperSlide>

            <SwiperSlide>
              <JourneySolution />
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
            } cursor-pointer text-black text-4xl border border-black rounded-full p-3 bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>

      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 text-black text-3xl hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ×
            </button>
            <img
              src={zoomedImage}
              alt="Zoomed"
              className="w-full h-auto"
            />
          </div>
        </div>
      )}

      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default Slide;
