"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C57-L2-A3/pointer1.json";
import Slide2Data from "@/layout-C57-L2-A3/pointer2.json";

import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

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

      if (current === 2) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );

        window.scroll(0, 500);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount2, activeSlide]);

    // when the student answer the all questions welldone box open
  useEffect(() => {
    if (Slide2Data.length  === visibleCount2) {
      setOpen(true);
    }
  }, [visibleCount2]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "Time Machine"
            : activeSlide === 1
              ? "Suggestive Responses"
              : activeSlide === 2
                ? "BUILD YOUR PRODUCT"
                : ""}
        </h4>

        <p className="text-xl w-[80%] text-center text-black ">
          {activeSlide === 0
            ? "Let’s play a game called the time machine. A time machine lets us travel in time. We can either go in the past or go forward in the future."
            : activeSlide === 2
              ? "Now use your understanding to go forward in time to build a product of your own! Think about:"
              : ""}
        </p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3  ">
        <div className="w-full shadow-md p-3 min-h-50 bg-white">
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
              <div className="grid grid-cols-12 place-items-center p-2 gap-y-5">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage
                    path="/C57Images/Time_Machine.jpg"
                    width={300}
                    height={100}
                  />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <ul className="list-disc w-full space-y-3 px-2">
                    <li className="text-black text-xl animate_fadeInUp">
                      You know where BabyToon is (now)
                    </li>
                    <li className="text-black text-xl animate_fadeInUp">
                      You know where BabyToon wants to be (later)
                    </li>
                    <li className="text-black text-xl animate_fadeInUp">
                      This time machine lets you reflect on the time already
                      past.{" "}
                    </li>
                  </ul>
                </div>

                <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-5 ">
                  <h4 className="text-black/90 w-full px-5 text-xl animate_fadeInUp">
                    So you can reflect on:
                  </h4>

                  <div className="grid grid-cols-12 gap-2 w-full p-5 place-items-center">
                    {SlideData.map((item, index) => (
                      <div
                        key={index}
                        className="col-span-4 flex flex-col gap-3 justify-center items-center w-full p-3 rounded-lg border border-black min-h-100 "
                      >
                        <MyImage path={item.img} width={200} height={100} />
                        <h3 className="text-xl font-bold text-black ">
                          {item.question}
                        </h3>
                        <textarea
                          placeholder="write here..."
                          rows={3}
                          className="w-full outline-0 border p-2 text-black text-lg focus:border-black/50 rounded-lg  "
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-5 ">
                  {/* <h4 className="text-black/90 w-full px-5 text-xl animate_fadeInUp">
                    So you can reflect on:
                  </h4> */}

                  <div className="grid grid-cols-12 gap-2 w-full p-5 place-items-center">
                    {SlideData.map((item, index) => (
                      <div
                        key={index}
                        className="col-span-4 flex flex-col gap-3 justify-start items-center w-full p-3 rounded-lg border border-black min-h-120 "
                      >
                        <MyImage path={item.img} width={200} height={100} />
                        <h3 className="text-xl font-bold text-black ">
                          {item.question}
                        </h3>
                        <p className="w-full text-black/60 text-xl  p-2  rounded-lg  ">
                          {item.answers}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                {/* <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C57Images/" />
                </div> */}
                <div className=" col-span-12 w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <ul className="list-disc w-full space-y-3 px-2">
                    {Slide2Data.slice(0, visibleCount2).map((item, index) => (
                      <li
                        className="text-black text-xl animate_fadeInUp"
                        key={index}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {Slide2Data.length - 1 < visibleCount2 && (
                    <div className="flex flex-col gap-3 animate_fadeInUp">
                      <p className="text-black/80 text-xl  w-full ">
                        Examples:
                      </p>
                      <ul className="list-disc space-y-4">
                        <li className="text-black/70  text-lg">
                          What if there are 100 more competitive brands making
                          the same product?
                        </li>

                        <li className="text-black/70  text-lg">
                          What if someone steals your idea and sells it under
                          another brand name?
                        </li>

                        <li className="text-black/70  text-lg">
                          What if the profit margins are not as high because
                          other items are cheaper and so are preferred by the
                          customers given economic changes.
                        </li>
                      </ul>
                    </div>
                  )}
                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
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
