"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C64-L1-AA/pointer.json";

import Welldone from "@/components/wellDone";
import Table from "./table";
import MyImage from "@/components/MyImage";


const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);



  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);



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
        setVisibleCount((prev) => (prev < SlideData.length *2 ? prev + 1 : prev));

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

   
    
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount,   activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount,   activeSlide]);

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
        CRITERIA
        </h4>

        {/* <p className="text-xl font-medium w-[80%] text-center text-black ">
          Create a presentation strategy for your product. It can be a product
          you’ve already created or a product you’d like to create.
        </p> */}
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

                    <p className="text-2xl  font-bold text-black"> I will evaluate you against the following criteria.</p>
                  {SlideData.map((item, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount > stepIndex;
                    const showAnswer = visibleCount > stepIndex + 1;

                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-center items-center gap-5 "
                      >

                      
                        {showQuestion && (
                          <h3 className="text-2xl text-black/80 font-bold w-full">
                            {item.Question}
                          </h3>
                        )}
                        <ul className="list-disc space-y-3 w-full ">
                          {showAnswer &&
                            item.ans.map((i, idx) => (
                              <li key={idx} className="text-xl text-black">
                                {i}
                              </li>
                            ))}
                        </ul>
                      </div>
                    );
                  })}

                     <div className="col-span-12 w-full">
                  {SlideData.length * 2 > visibleCount && (
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
<Table/>
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
              activeSlide < 1 ? "visible" : "invisible"
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
