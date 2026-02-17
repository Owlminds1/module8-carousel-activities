"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  // const [visibleCount, setVisibleCount] = useState(1);
  // const [visibleCount2, setVisibleCount2] = useState(1);

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

  // useEffect(() => {
  //   const handleKeyPress = (e: KeyboardEvent) => {
  //     if (e.key !== "Enter" && e.code !== "Enter") return;

  //     const current = swiperRef.current?.activeIndex ?? activeSlide;

  //     if (current === 0) {
  //       setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));
  //     }

  //     if (current === 2) {
  //       setVisibleCount2((prev) =>
  //         prev < SlideData2.length * 2 ? prev + 1 : prev,
  //       );

  //       window.scroll(0, 500);
  //     }
  //   };

  //   window.addEventListener("keydown", handleKeyPress);
  //   return () => window.removeEventListener("keydown", handleKeyPress);
  // }, [visibleCount, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [activeSlide]);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (SlideData2.length * 2 === visibleCount2) {
  //     setOpen(true);
  //   }
  // }, [visibleCount2]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center  flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "DESIGN THINKING"
            : activeSlide === 1
              ? "HOW, NOW, WOW TECHNIQUE"
              : "HOW, NOW, WOW TECHNIQUE"}
        </h4>

        <p className="text-black text-center text-lg w-[80%] ">
          {activeSlide === 0
            ? "Fill the template with each of your ideas (IDEA A/ IDEA B/ IDEA C) under the category of IDEA/PROBLEM/ACTION/RESULT/TEST. Make sure to read the definitions with examples to ensure you understand."
            : activeSlide === 1
              ? "Apply the “how, now, wow” technique to each idea to pick the best one."
              : "Ideally, you should pick a wow idea."}
        </p>
      </div>

      <div className="w-full flex justify-center items-center flex-col gap-3  ">
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
              <div className="grid grid-cols-12 gap-0.2 place-items-center p-2">
                <div className="col-span-2 w-full bg-yellow-500 text-center text-lg  text-white p-1">
                  IDEA
                </div>
                <div className="col-span-2 w-full border bg-red-400 text-center text-lg  text-white p-1">
                  PROBLEM
                </div>
                <div className="col-span-2 w-full border bg-violet-900 text-center text-lg  text-white p-1">
                  ACTION
                </div>
                <div className="col-span-2 w-full border bg-blue-400 text-center text-lg  text-white p-1">
                  RESULT
                </div>
                <div className="col-span-2 w-full border bg-pink-400 text-center text-lg  text-white p-1">
                  TEST
                </div>
                <div className="col-span-2 w-full border bg-green-400 text-center text-lg  text-white p-1">
                  SCALE
                </div>
                <div className="col-span-2 w-full border flex justify-start h-full items-center p-3 flex-col gap-2 ">
                  <ul className="list-disc space-y-2 w-[80%]">
                    <li className="text-black text- font-medium ">
                      What is your product?
                    </li>
                  </ul>
                  <p className="text-black/80  ">
                    Example: Kobee’s product is all-natural lip balms.
                  </p>
                </div>

                <div className="col-span-2 w-full border flex justify-start h-full  items-center p-3 flex-col gap-2 ">
                  <ul className="list-disc space-y-2 w-[80%]">
                    <li className="text-black  font-medium ">
                      What problem does it solve?
                    </li>

                    <li className="text-black  font-medium ">
                      Why do you want to make this product?
                    </li>

                    <li className="text-black  font-medium ">
                      Who is going to benefit from this product?
                    </li>
                  </ul>
                  <p className="text-black/80  ">
                    Example: Kobee’s product shines over the plastic lip balms
                    sold in the market ensuring people live a healthy,
                    sustainable, and plastic-free lifestyle.
                  </p>
                </div>

                <div className="col-span-2 w-full border flex justify-start h-full  items-center p-3 flex-col gap-2 ">
                  <ul className="list-disc space-y-2 w-[80%]">
                    <li className="text-black  font-medium ">
                      What is its benefit?
                    </li>
                  </ul>
                  <p className="text-black/80  ">
                    Example: Using natural lip balms protects your skin to keep
                    it radiant and natural.
                  </p>
                </div>

                <div className="col-span-2 w-full border flex justify-start h-full  items-center p-3 flex-col gap-2 ">
                  <ul className="list-disc space-y-2 w-[80%]">
                    <li className="text-black  font-medium ">
                      How do you know you’ve made a successful prototype?
                    </li>
                  </ul>
                  <p className="text-black/80  ">
                    Example: Kobee made his first product out of formulating
                    with basic ingredients and then sold it to customers at his
                    pool job.
                  </p>
                </div>

                <div className="col-span-2 w-full border flex justify-start h-full  items-center p-3 flex-col gap-2 ">
                  <ul className="list-disc space-y-2 w-[80%]">
                    <li className="text-black  font-medium ">
                      How much money do you need to build this product?
                    </li>

                    <li className="text-black  font-medium ">
                      Who’s going to give you that money?
                    </li>
                  </ul>
                  <p className="text-black/80  ">
                    Example: Kobee asked $200 from his mother for the prototype
                    then had a larger investment from the money he made selling
                    the product. Then he approached Shark Tank’s investors for
                    higher volume distribution.
                  </p>
                </div>

                <div className="col-span-2 w-full border flex justify-start h-full  items-center p-3 flex-col gap-2 ">
                  <ul className="list-disc space-y-2 w-[80%]">
                    <li className="text-black  font-medium ">
                      What are your plans with this product?
                    </li>

                    <li className="text-black  font-medium ">
                      Where are you going to sell this product?
                    </li>

                    <li className="text-black  font-medium ">
                      What is the scale: does it impact 10s, 100s, 1000s,
                      millions or more (customers)?
                    </li>
                  </ul>
                  <p className="text-black/80  ">
                    Example: Kobee’s product has already made $1.5 million since
                    2019. Now he wants a $300K investment to increase sales.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex justify-center items-center p-2">
                <div className="grid grid-cols-12 w-[60%] gap-0.5">
                  <div className="col-span-6 w-full border border-black"></div>

                  <div className="col-span-6 w-full flex justify-start items-center flex-col gap-3 border border-black p-2 bg-[#FEEF20]">
                    <h4 className="text-xl font-bold text-black text-center w-full">WOW</h4>
                    <p className="text-black/80 text-lg ">
                      {" "}
                      Ideas that are original but difficult to implement given
                      existing resources, are high risk, never tested,
                      “challenging ideas” For example, Kobee might want to sell
                      Kobee’s products globally by making higher sales of lips
                      balms and increasing the products of personal essentials.
                      But his company doesn’t have the time or the resources to
                      get to that stage yet.
                    </p>
                  </div>


                   <div className="col-span-6 w-full flex justify-start items-center flex-col gap-3 border border-black p-2 bg-blue-400">
                    <h4 className="text-xl font-bold text-black text-center w-full">NOW</h4>
                    <p className="text-black/80 text-lg ">
                     ideas that are easy to implement, are low risk, tried and tested examples, “normal ideas.” For example, the judges might see Kobee’s idea as a now idea as there are many other people who are making lip balms. And a lip balm can be made for 26 cents (low risk) to be sold for $5 (high yield).
                    </p>
                  </div>


                    <div className="col-span-6 w-full flex justify-start items-center flex-col gap-3 border border-black p-2 bg-lime-500">
                    <h4 className="text-xl font-bold text-black text-center w-full">Wow</h4>
                    <p className="text-black/80 text-lg ">
                   Ideas that are easy to implement and are medium-risk, original, and innovative.
For example, Kobee decided to add personal essentials to his fleet of natural products. But he made sure that the cost isn’t too high given the lip balms account for 75% of the sales. At the moment, the personal essentials only account for 25%. Despite the difference, he is still making profit.

                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

             <SwiperSlide>
              <div className="flex justify-center items-center gap-5 flex-col p-2">
                <ul className="list-disc space-y-2 w-[50%] ">
                    <li className="text-black text-lg ">Assign a square to each of your ideas</li>
                    <li className="text-black text-lg ">Pick the WoW Idea for development</li>

                    <li className="text-black text-lg ">
                      Whichever idea seems to be the best fit for your goals and
                      aspirations at this point wins this round.
                    </li>
                  </ul>
                <div className="grid grid-cols-12 w-[60%] gap-0.5">
                  <div className="col-span-6 w-full border border-black"></div>

                  <div className="col-span-6 w-full flex justify-start items-center flex-col gap-3 border border-black p-2 bg-[#FEEF20]">
                    <h4 className="text-xl font-bold text-black text-center w-full">WOW</h4>
                    <textarea placeholder="write here..." className="text-lg text-black border border-black rounded-lg p-2 w-full" rows={3}/>
                  </div>


                   <div className="col-span-6 w-full flex justify-start items-center flex-col gap-3 border border-black p-2 bg-blue-400">
                    <h4 className="text-xl font-bold text-black text-center w-full">NOW</h4>
                      <textarea placeholder="write here..." className="text-lg text-black border border-black rounded-lg p-2 w-full" rows={3}/>
                  </div>


                    <div className="col-span-6 w-full flex justify-start items-center flex-col gap-3 border border-black p-2 bg-lime-500">
                    <h4 className="text-xl font-bold text-black text-center w-full">Wow</h4>
                    <textarea placeholder="write here..." className="text-lg text-black border border-black rounded-lg p-2 w-full" rows={3}/>
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
