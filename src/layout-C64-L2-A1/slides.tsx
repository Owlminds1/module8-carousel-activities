"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C64-L2-A1/pointer.json";
import Slide2Data from "@/layout-C64-L2-A1/pointer2.json";
import Slide3Data from "@/layout-C64-L2-A1/pointer3.json";
import Slide4Data from "@/layout-C64-L2-A1/pointer4.json";

import Welldone from "@/components/wellDone";
import MyImage from "@/components/MyImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);
  const scrollRef4 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [visibleCount3, setVisibleCount3] = useState(1);
  const [visibleCount4, setVisibleCount4] = useState(1);

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
        setVisibleCount3((prev) =>
          prev < Slide3Data.length ? prev + 1 : prev,
        );

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

        if (current === 4) {
        setVisibleCount4((prev) =>
          prev < Slide4Data.length ? prev + 1 : prev,
        );

        scrollRef4.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2, visibleCount3 ,visibleCount4, activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount, visibleCount2, visibleCount3,visibleCount4, activeSlide]);

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
            ? "Gap Filling Technique"
            : activeSlide === 1
              ? "APPLYING THE TECHNIQUE"
              : activeSlide === 2
                ? "SUGGESTIVE RESPONSES"
                : activeSlide === 3
                  ? "SURVEY"
                  : activeSlide === 4 ?"SUGGESTIVE RESPONSES":""}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 0
            ? "Part of being an entrepreneur is thinking attentively to plan ahead. We can apply the Gap Filling Technique to do so."
            : activeSlide === 1
              ? "Let’s say your product is a schoolbag. You have just begun with your first 50 customers. You want to grow your customer base."
              : activeSlide === 3
                ? "Based on this, let’s create a survey to improve the product. But this questionnaire is only geared towards customer feedback i.e. of students who use the schoolbag."
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
                  <p className="text-2xl  font-bold text-black">
                    With this technique:
                  </p>

                  <div className="w-full flex flex-col justify-center items-center gap-5 ">
                    <ul className="list-disc space-y-3 w-full ">
                      {SlideData.slice(0, visibleCount).map((item, index) => (
                        <li key={index} className="text-2xl text-black">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="col-span-12 w-full">
                    {SlideData.length > visibleCount && (
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
                <div className=" col-span-12 w-[60%] flex justify-center items-start flex-col gap-8 ">
                  <p className="text-2xl  font-bold text-black">
                    How will you apply the Gap Filling Technique to envision
                    selling this product?
                  </p>
                  {Slide2Data.slice(0, visibleCount2).map((item, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-col justify-center items-center gap-5 "
                    >
                      <h4 key={index} className="text-2xl text-black">
                        {item.text}
                      </h4>
                      <textarea
                        placeholder="write here..."
                        className="border outline-0 p-2 text-black w-full text-xl rounded-lg "
                        rows={2}
                      />
                    </div>
                  ))}

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
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[60%] flex justify-center items-start flex-col gap-8 ">
                  <p className="text-2xl  font-bold text-black">
                    How will you apply the Gap Filling Technique to envision
                    selling this product?
                  </p>
                  {Slide2Data.map((item, index) => (
                    <div
                      key={index}
                      className="w-full flex flex-col border p-3 rounded-lg bg-violet-50 justify-center items-center gap-5 "
                    >
                      <h4 key={index} className="text-2xl text-black">
                        {item.text}
                      </h4>
                      <ul className="list-disc w-[70%]">
                        {item.suggestion.map((i, ind) => (
                          <li key={ind} className="text-black text-2xl w-full ">
                            {i}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-8 ">
                  <p className="text-2xl  font-bold text-black">
                    Your questions (maximum 15 questions) should center around:
                  </p>
                  <div className="w-full flex flex-col justify-center items-center gap-5 ">
                    <ul className="list-disc space-y-3 w-full">
                      {Slide3Data.slice(0, visibleCount3).map((item, index) => (
                        <li key={index} className="text-2xl w-full text-black">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>


{
  Slide3Data.length-1 < visibleCount3 &&(
     <p className="text-2xl  font-bold text-black">
                  Ensure that you highlight questions that are absolutely essential for your to improve the product and others that can be left blank if time is paramount.
                  </p>
  )
}
                  <div className="col-span-12 w-full">
                    {Slide3Data.length > visibleCount3 && (
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
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-8 ">
                  <p className="text-2xl  font-bold text-black">
                   SURVEY MCQs
                  </p>
                  <div className="w-full flex flex-col justify-center items-center gap-5 ">
                    <ul className="list-disc space-y-3 w-full">
                      {Slide4Data.slice(0, visibleCount4).map((item, index) => (
                        <li key={index} className="text-2xl w-full text-black">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>


                  <div className="col-span-12 w-full">
                    {Slide4Data.length > visibleCount4 && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  </div>
                  <div className="" ref={scrollRef4}></div>
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
