"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

import Slide2Data from "@/layout-C64-L3-A3/pointer2.json";
import Slide3Data from "@/layout-C64-L3-A3/pointer3.json";
import QuestionData from "@/layout-C64-L3-A3/slideData.json";

import Welldone from "@/components/wellDone";
import MyImage from "@/components/MyImage";
import Table from "./table";
import Table2 from "./table2";
import Table3 from "./table3";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [visibleCount3, setVisibleCount3] = useState(1);

  const [shuffle,setShuffle] =useState(QuestionData)
  const  [bgCorrect,setBgCorrect]=useState<HTMLAudioElement>()

  const [activeBtn, setActiveBtn] = useState<null | number>(null);

useEffect(()=>{
setShuffle((prev)=>[...prev].sort(()=>Math.random() - 0.5 ))
setBgCorrect(()=> new Audio("/sound/correct.mp3"))
},[])

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setActiveBtn(null);
  };

  //   enter to show more points logic

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      if (current === QuestionData.length + 4) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );

        scrollRef2.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === QuestionData.length + 5) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length ? prev + 1 : prev,
        );

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount2, activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount2, activeSlide]);

  // when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (Slide2Data.length === visibleCount2) {
  //     setOpen(true);
  //   }
  // }, [visibleCount2]);

  const handleCheck = (select: string, val: string, index: number) => {
    setActiveBtn(index);
    if(select === val){
bgCorrect?.play()
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "FACTORS"
            : activeSlide === 1
              ? "FACTORS"
              : activeSlide === 2
                ? "FACTORS"
                : activeSlide === 3
                  ? "ACTIVITY"
                  : activeSlide < QuestionData.length + 4
                    ?  "ACTIVITY"
                        :activeSlide === QuestionData.length + 4 ?  "BUSINESS PLAN":activeSlide === QuestionData.length + 5?"BUSINESS PLAN ACTIVITY":activeSlide === QuestionData.length + 6?"BUSINESS PLAN ACTIVITY":activeSlide === QuestionData.length + 7 ?"BUSINESS PLAN SUGGESTIVE RESPONSES":activeSlide === QuestionData.length + 8?"BUSINESS PLAN PRESENTATION":""}
        </h4>
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
                <div className=" col-span-12 w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <p className="text-2xl w-full font-medium text-black">
                    So what do companies do to deal with the changing market
                    because of these factors?
                  </p>
                  <h4 className="font-bold text-2xl w-full">Inflation</h4>

                  <p className="text-2xl w-full  text-black">
                    Companies raise prices of products based on how the overall
                    economy of the country is doing. This is to ensure that the
                    cost of making a product doesn’t exceed the selling price.
                    So it’s a business decision that a company takes not only to
                    protect itself, but also to be fair to the consumers.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <h4 className="font-bold text-2xl w-full">Price Gouging</h4>

                  <p className="text-2xl w-full  text-black">
                    Certain items are essentials while others are not. In times
                    of natural disasters, companies raise prices to unfair
                    levels to meet the unusually high demands of limited
                    supplies. This is done so when the opportunity to take
                    advantage of a volatile market arises, the sellers benefit
                    by tending to consumers without a choice.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <h4 className="font-bold text-2xl w-full">Dynamic Pricing</h4>

                  <p className="text-2xl w-full  text-black">
                    This methodology goes for a win-win situation. It uses data
                    to the advantage of both the seller and the consumer. So
                    when the market is volatile, the sellers analyse market
                    pricing, competitors’ pricing, and the buying window. When
                    this is done, they offer a price that is both fair and
                    beneficial for both the sellers and the consumers.
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <h4 className="font-bold text-2xl w-full">
                    Can you identify which of the following examples are those
                    of inflation, price gouging, and dynamic pricing?
                  </h4>
                </div>
              </div>
            </SwiperSlide>

            {shuffle.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-12 gap-y-5 place-items-center p-2">
                  <div className="col-span-6">
                    <MyImage path={item.img} />
                  </div>

                  <div className="col-span-6 w-full  flex flex-col justify-center items-center gap-5">
                    <h4 className="text-2xl text-black p-2 w-full">
                      {item.text}
                    </h4>
                    <div className="flex justify-center flex-wrap items-center gap-3 w-full">
                      {item.opt.map((btn, btnIndex) => (
                        <button
                          key={btnIndex}
                          onClick={() => handleCheck(item.val, btn, btnIndex)}
                          className={`${activeBtn === btnIndex ? (item.val === btn ? "bg-green-600" : "bg-red-500 shake") : "bg-violet-900"} text-white  rounded-lg cursor-pointer active:scale-95 text-xl min-w-60 py-2 px-3`}
                        >
                          {btn}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-5 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C64Images/Business_Plan3.jpg" />
                </div>

                <div className="col-span-6 w-full  flex flex-col justify-center items-center gap-5">
                  <div className=" w-full flex justify-center flex-col items-start  gap-8 ">
                    <p className="text-2xl ">
                      Do you remember what a business plan is?
                    </p>{" "}
                    <h3 className="text-2xl font-bold">Business Plan </h3>
                    <p className="text-2xl ">
                      A business plan is like a roadmap. It helps us to think
                      and explain the product in a better way. Even big
                      companies make business plans before launching something
                      new!
                    </p>
                    <h3 className="text-2xl font-bold">
                      How does making a plan allow business to grow?
                    </h3>
                    <h3 className="text-2xl font-bold">
                      Making a business plan can allow us to:
                    </h3>
                    <ul className="list-disc space-y-3 w-full">
                      {Slide2Data.slice(0, visibleCount2).map((item, index) => (
                        <li key={index} className="text-2xl text-black">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

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
              <div className="grid grid-cols-12 gap-y-5 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C64Images/Business_Plan_Activity.jpg" />
                </div>

                <div className="col-span-6 w-full  flex flex-col justify-center items-center gap-5">
                  <div className=" w-full flex justify-center flex-col items-start  gap-8 ">
                   <ul className="list-disc space-y-3 w-full">
                        <li  className="text-2xl text-black">
                          Can you enter each description in the correct categories, then check when you’re done?
                        </li>

                         <li  className="text-2xl text-black">
                         Then move on to the example. You’ve to apply this to the example of Nike shoes. How will you convince others of how your shoes are the best?
                        </li>
                        
                         <li  className="text-2xl text-black">
                         Finally, you present your business plan orally. I will check the following items on the list.
                        </li>
                    </ul>
                    <ul className=" space-y-3 w-full">
                      {Slide3Data.slice(0, visibleCount3).map((item, index) => (
                        <li key={index} className="text-2xl text-black">
                           ➡️<span className="font-bold">{item.title} : </span> {item.text}
                        </li>
                      ))}
                    </ul>
                  </div>

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
              <Table swiperRef={swiperRef}/>
            </SwiperSlide> 
            
            <SwiperSlide>
              <Table2 swiperRef={swiperRef}/>
            </SwiperSlide>
            
            <SwiperSlide>
              <Table3/>
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
              activeSlide < QuestionData.length + 8 ? "visible" : "invisible"
            }  cursor-pointer text-black text-4xl border border-black rounded-full p-3  bg-yellow-400`}
          >
            <FaArrowRight />
          </span>
        </div>
      </div>

      {/* <Welldone open={open} setOpen={setOpen} /> */}
    </div>
  );
};

export default Slide;
