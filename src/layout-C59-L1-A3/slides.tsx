"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C59-L1-A3/pointer1.json";
import Slide2Data from "@/layout-C59-L1-A3/pointer2.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);


  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
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
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
        if (!scrollRef.current) return;

        scrollRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < SlideData.length * 2 ? prev + 1 : prev,
        );

        scrollRef2.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 2) {
        setVisibleCount3((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );

      
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2,visibleCount3, activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount2, visibleCount3,visibleCount, activeSlide]);

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
            ? " Lemonade Stall Q&A"
            : activeSlide === 1
              ? "Lemonade Stall Q&A"
              : activeSlide === 2
                ? "Design the AD!"
                : ""}
        </h4>

        <p className="text-xl font-medium text-center text-black ">
          {activeSlide === 2
            ? "PRINT AD"
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
                  <MyImage path="/C59Images/Stall.jpg" />
                </div>
                <div className="col-span-6">
                  <p className="text-black text-2xl ">
                    <span className="font-bold">Product to sell : </span>
                    Lemonade at a lemonade stand as part of the school fair.
                  </p>
                </div>
                {SlideData.slice(0, visibleCount).map((i, index) => {
                  return (
                      <div  key={index} className=" col-span-12 w-[50%]  flex justify-center items-center flex-col gap-5 ">
                          <h3 className="text-2xl text-black font-bold">
                         Q&A
                        </h3>
                        <h3 className="text-xl text-black font-bold w-full">
                          {i.question}
                        </h3>

                        <textarea
                          rows={3}
                          placeholder="write here..."
                          className="border text-lg text-black rounded-lg p-2 w-full"
                        />
                      </div>
                  );
                })}
                <div className="col-span-12 w-full">
                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div ref={scrollRef}></div>
              </div>
            </SwiperSlide>

          
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-12">
                  <MyImage path="/C59Images/Stall.jpg" />
                </div>
               
                <div className="col-span-12 py-8">
                   <h3 className="text-2xl text-black font-bold">
                       Suggestive Responses 
                        </h3>
                </div>
                {SlideData.map((i, index) => {
                  const stepIndex = index * 2;
                  const showQuestion = visibleCount2 > stepIndex;
                  const showAnswer = visibleCount2 > stepIndex + 1;
                  return (
                    <div key={index} className=" col-span-12  w-[50%]  flex justify-center items-center flex-col gap-5 ">
                       
                        {showQuestion && (
                          <h3 className="text-xl  text-black font-bold w-full">
                            {i.question}
                          </h3>
                        )}

                        {showAnswer && (
                          <p className="text-black/80 font-medium text-lg  w-full ">
                            Answer : {i.response}
                          </p>
                        )}
                      </div>
                  );
                })}

                <div className="col-span-12 w-full">
                  {SlideData.length * 2 > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div ref={scrollRef2}></div>
              </div>
            </SwiperSlide>


             <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/" />
                </div>
                <div className="col-span-6 w-full">
                  <ul className="list-disc space-y-3 w-full">
                    {
                      Slide2Data.slice(0,visibleCount3).map((i,index)=>(
                        <li key={index} className="text-black text-xl  ">{i}</li>
                      ))
                    }
                  </ul>

                  {Slide2Data.length > visibleCount3 && (
                    <p className="text-gray-800 mt-5 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
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
              activeSlide < 2 ? "visible" : "invisible"
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
