"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C64-L1-A1/pointer.json";
import Slide2Data from "@/layout-C64-L1-A1/pointer2.json";
import dropZone from "@/layout-C64-L1-A1/dropZone.json";
import Welldone from "@/components/wellDone";
import MyImage from "@/components/MyImage";
import Table from "./table";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [addRow,setAddRow]= useState(Array(2).fill(null))

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
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "SURVEYING"
            : activeSlide === 1
              ? "EXAMPLE"
              : activeSlide === 2
                ? "ACTIVITY"
                : activeSlide === 3
                  ? "SUGGESTIVE RESPONSES"
                  : activeSlide === 4
                    ? "ASK QUESTIONS"
                    : ""}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 4
            ? "Now it’s time to ask two more questions about some lemonade and give the responses too!"
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
                <div className=" col-span-12   w-[50%] flex justify-center items-center flex-col  gap-4 ">
                  <div className="w-full flex flex-col justify-start items-start gap-5 ">
                    <p className="text-2xl text-black w-full">
                      You want to know how the participants felt about the
                      lemonade. So you have asked all the participants to take a
                      survey and answer a few questions.
                    </p>
                    <ul className="list-disc space-y-3">
                      {SlideData.slice(0, visibleCount).map((item, index) => (
                        <li
                          className="text-xl text-black font-medium"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {SlideData.length - 1 < visibleCount && (
                      <p className="text-2xl text-black w-full">
                        Close-ended questions invite responses in the form of a
                        yes or a no, whereas open-ended questions invite
                        multiple answers that contain details. Open-ended
                        questions provide deeper learning.
                      </p>
                    )}
                  </div>
                </div>

                <div className="col-span-12 w-full">
                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="min-h-10 " ref={scrollRef}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className=" col-span-12   w-[50%] flex justify-center items-center flex-col  gap-4 ">
                  <div className="w-full flex flex-col justify-start items-start gap-5 ">
                    <ul className="list-disc space-y-3">
                      {Slide2Data.slice(0, visibleCount2).map((item, index) => (
                        <li
                          className="text-xl text-black font-medium"
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-span-12 w-full">
                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="min-h-10 " ref={scrollRef2}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-8 place-items-center p-2">
                
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col  gap-4 ">
                  <ul className="list-disc space-y-3">
                    <li className="text-xl text-black font-medium">
                      Read each response
                    </li>

                    <li className="text-xl text-black font-medium">
                      Drag and place the relevant question in the table against
                      each response
                    </li>

                    <li className="text-xl text-black font-medium">
                      Respond orally whether each question is open-ended or
                      close-ended.
                    </li>
                  </ul>
                </div>

                <div className="col-span-12 w-full">
                  <Table />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-5 w-full p-5 ">
                <div
                  className={`col-span-12  gap-1 w-full grid grid-cols-12 place-items-start`}
                >
                  <div className="col-span-6 w-full text-xl text-white bg-violet-900 text-center p-2 ">
                    RESPONSES
                  </div>
                  <div className="col-span-6 w-full text-xl text-white bg-violet-900 text-center p-2 ">
                    QUESTIONS
                  </div>
                  {dropZone.map((drop, dropIndex) => (
                    <React.Fragment key={dropIndex}>
                      <div className="col-span-6 w-full p-3 flex flex-col gap-2 justify-center items-center border ">
                        <h3 className="text-black font-bold text-xl text-center ">
                          {drop.text}
                        </h3>
                        <MyImage width={100} height={100} path={drop.img} />
                      </div>

                      <div className="col-span-6 p-3 w-full h-full flex justify-center text-2xl text-center items-center border ">
                        {drop.val}
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-5 w-full place-items-center ">
                <div
                  className={`col-span-12  gap-1 w-[80%] grid grid-cols-12 place-items-start`}
                >
                
                  <div className="col-span-6 w-full text-xl text-white bg-violet-900 text-center p-2 ">
                    QUESTIONS
                  </div>

                    <div className="col-span-6 w-full text-xl text-white bg-violet-900 text-center p-2 ">
                    RESPONSES
                  </div>
                  {addRow.map((_, inx) => (
                    <React.Fragment key={inx}>
                      <div className="col-span-6 w-full p-1 flex flex-col gap-2 justify-center items-center border ">
                        <textarea
                          rows={2}
                          className="border w-full text-xl px-3 outline-0 "
                          placeholder="Write Question here"
                        />
                      </div>

                      <div className="col-span-6 p-1 w-full h-full flex justify-center text-2xl text-center items-center ">
                        <textarea
                          rows={2}
                          className="border w-full text-xl px-3 outline-0 "
                          placeholder="Write Question here"
                        />
                      </div>

                     
                    </React.Fragment>
                  ))}

                   <div className="col-span-12 mt-5 text-center w-full">
                        <button className="text-white bg-violet-900 px-8 py-2 rounded-lg cursor-pointer" onClick={()=>setAddRow((prev)=>[...prev,addRow])} >Add</button>
                      </div>
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
