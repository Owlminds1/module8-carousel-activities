"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C57-L1-A2/pointer1.json";

import Welldone from "@/components/wellDone";
import Table from "./table";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);

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
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount]);

  //   when the student answer the all questions welldone box open
  // useEffect(()=>{
  //   if(SlideData2.length * 2 === visibleCount2){
  //      setOpen(true);
  //   }
  // },[visibleCount2])

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div>
        <h4 className="text-3xl font-bold text-black text-center">
          {activeSlide === 0
            ? "FIGURE STORMING"
            : activeSlide === 1
            ? "PROBLEM"
            : activeSlide === 2
            ? "PROBLEM"
            : ""}
        </h4>

        <p className="text-center text-black text-xl">
          {
            activeSlide===1 ? "Here are two problems we can discuss:":""
          }
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
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C57Images/Technique.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <h3 className="text-black font-bold text-lg">
                    We can using the technique of figure storming so that:
                  </h3>
                  <ul className="list-disc w-full space-y-3 px-2">
                    {SlideData.slice(0, visibleCount).map((item, index) => (
                      <li
                        className="text-black text-lg animate_fadeInUp"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-5 w-full">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C57Images/trash.jpg" />
                </div>

                <div className="col-span-6 w-full flex justify-center items-start flex-col gap-4   ">
                  <h3 className="font-bold text-xl text-black">Problem A</h3>
                  <p className="text-black/95 text-lg ">
                    The school has a trash problem. What can we do?
                  </p>
                  <p className="text-black/95 text-lg ">
                    Let’s put on our thinking hat but as a teacher!
                  </p>
                  <h3 className="font-bold text-xl text-black">
                    How would a teacher approach this problem?
                  </h3>
                  <p className="text-black/95 text-lg ">
                    Drag and place the identified problems and the solutions
                    that a teacher would suggest.
                  </p>
                </div>

                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C57Images/mess.jpg" />
                </div>

                <div className="col-span-6 w-full flex justify-center items-start flex-col gap-4   ">
                  <h3 className="font-bold text-xl text-black">Problem B</h3>
                  <p className="text-black/95 text-lg ">
                    Your home has a mess problem. What can we do?
                  </p>
                  <p className="text-black/95 text-lg ">
                    Let’s put on our thinking hat but as an older sibling who is
                    tidy!
                  </p>
                  <h3 className="font-bold text-xl text-black">
                    How would an older sibling approach this problem?
                  </h3>
                  <p className="text-black/95 text-lg ">
                    Drag and place the identified problems and the solutions
                    that an older sibling would suggest.
                  </p>
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
