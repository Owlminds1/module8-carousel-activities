"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

import Welldone from "@/components/wellDone";
import Slide3Data from "@/layout-C58-L3-A3/slide3data.json"

import Link from "next/link";
import Table from "./table";
import Suggestion from "./suggestion";
import MyImage from "@/components/MyImage";
const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);
const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

const [bgcorrect, setBgCorrect] = useState<HTMLAudioElement>();


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
        // 1️⃣ First main points
        if (visibleCount < 8) {
          setVisibleCount((prev) => prev + 1);
          return;
        }

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 1) {
        // 1️⃣ First main points
        if (visibleCount2 < 7) {
          setVisibleCount2((prev) => prev + 1);
          return;
        }

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



 useEffect(() => {
    setBgCorrect(() => new Audio("/sound/correct.mp3"));
  }, []);

  const handleCheck = (qIndex: number, ansIdx: number, correct: string, selected: string) => {
  setSelectedAnswers((prev) => ({
    ...prev,
    [qIndex]: ansIdx,
  }));

  if (selected === correct) {
    bgcorrect?.play();
  }
};
  
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">

          {activeSlide === 0 ? "NPS": activeSlide === 1 ?" SURVEY MONKEY EXAMPLE": activeSlide === 2 ?"MANAGEBAC SCORECARD": activeSlide === 3 ?"MANAGEBAC FINAL SCORES":activeSlide ===4 ? "SUGGESTIVE RESPONSES":""}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black "></p>
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
                <div className="col-span-12">
                  <MyImage path="/C58Images/slide1.png"/>
                </div>
                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-1 ">
                  <div className="flex justify-center items-start flex-col gap-3">
                   

                    {visibleCount >= 1 && (
                      <h3 className="text-2xl text-black ">
                        <span className="font-bold">Net Promoter Score (NPS)</span>  helps to determine just that. It is a measure of how much a product is appreciated by users and how likely they are to recommend the same product to their circle of family and friends. To do this, companies ask customers to rate their product on a scale from 1 to 10, with 1 being the least satisfied customer and 10 being the most satisfied customer. They then categorise customers as:

                      </h3>
                    )}


{visibleCount >= 2 && (
                      <h3 className="text-2xl text-black ">
                        <span className="font-bold"> Promoters (9, 10):</span>  These customers love the product or service, and are likely to share the same with their circle.

                      </h3>
                    )}


                    
{visibleCount >= 3 && (
                      <h3 className="text-2xl text-black ">
                        <span className="font-bold"> Passives (7, 8):</span> These are satisfied with the product but are not as loyal to the brand given multiple options in the market.
                      </h3>
                    )}


{visibleCount >= 4 && (
                      <h3 className="text-2xl text-black ">
                        <span className="font-bold">Detractors (0-6):</span>  These customers do not like the product, and are likely to give it negative reviews to detract others from buying the same.

                      </h3>
                    )}
                   

                   {visibleCount >= 5 && (
                      <h3 className="text-2xl font-bold text-black ">
                        So how do you calculate the score?


                      </h3>
                    )}


                    <ul className="list-disc space-y-3 w-full">
                       {visibleCount >= 6 && (
                      <li className="text-2xl  text-black ">
                        The easiest way is to go to a  <Link href="https://www.surveymonkey.com/mp/nps-calculator/" target="blank" className="text-blue-400">website like this</Link> and enter the numbers in each category to calculate the score.


                      </li>
                    )}

                       {visibleCount >= 7 && (
                      <li className="text-2xl  text-black ">
                        Companies often use a project management tool to enter the responses so that the score can get generated by the input.

                      </li>
                    )}

                     {visibleCount >= 8 && (
                      <li className="text-2xl  text-black ">
You can also calculate it yourself. NPS = % Promoters − % Detractors.

                      </li>
                    )}
                    </ul>
                   
                  </div>

                  <div className="col-span-12 w-full">
                    {8 > visibleCount && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                    <div className="" ref={scrollRef}></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-1 ">
                  <div className="flex justify-center items-start flex-col gap-3">
                    <h3 className="text-2xl font-bold py-3 text-black">
                      Here’s a simple example directly quoted from Survey Monkey: 
                    </h3>
                    
                     <h3 className="text-2xl  py-3 text-black">
                      “Say you’ve collected 150 responses to your NPS question. The distribution of the scores looks like this:
                    </h3>

                    {visibleCount2 >= 1 && (
                      <ul className="list-disc">
                        <li className="text-2xl text-black ">
                          80 customers gave either a 9 or 10 rating
                        </li>
                      </ul>
                    )}

                    {visibleCount2 >= 2 && (
                      <ul className="list-disc">
                        <li className="text-2xl text-black ">
30 customers gave either a 7 or 8 rating
                        </li>
                      </ul>
                    )}

                    {visibleCount2 >= 3 && (
                      
                        <ul className="list-disc">
                          <li className="text-xl text-black ">
                            40 customers gave between a 0 and 6 rating
                          </li>


                         
                        </ul>
                      
                    )}

                    {visibleCount2 >= 4 && (
                       <p className="text-2xl text-black ">
                          This means you have 80 promoters, 30 passives, and 40 detractors. To calculate the percentage of promoters, use the following formula:
% of promoters = (# of promoters / # of respondents) x 100

                        </p>
                    )}

                    {visibleCount2 >= 5 && (
                       <p className="text-2xl text-black ">
                          To find the percentage of detractors, use the same formula. Just substitute the total number of promoters for detractors. 


                        </p>
                    )}

                     {visibleCount2 >= 6 && (
                       <p className="text-2xl text-black ">
                          This means you have 80 / 150 * 100% = 53% promoters, while your percentage of detractors is 40 / 150 * 100% = 27%.


                        </p>
                    )}


                     {visibleCount2 >= 7 && (
                       <p className="text-2xl text-black ">
                          Subtracting the percentage of promoters from the percentage of detractors gives you the Net 

Promoter Score: 
53% – 27% = 26 “



                        </p>
                    )}
                  </div>

                  <div className="col-span-12 w-full">
                    {7 > visibleCount2 && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                    <div className="" ref={scrollRef2}></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

<SwiperSlide>
  <div className="grid grid-cols-12 w-full ">

    <div className="col-span-12 w-full flex justify-center items-center p-2">
                  <MyImage path="/C58Images/slide2.png"/>
                </div>
    <div className="col-span-12 w-full flex flex-col gap-5 justify-center items-center">
{
  Slide3Data.map((item,index)=>(
   <div key={index} className="border  w-[70%] p-5 flex flex-col gap-5 justify-center items-center ">
    <h4 className=" text-xl font-medium text-black" >{item.text}</h4>
    <div className="flex gap-5">
                      {item.options.map((ans, ansIdx) => (
                        <button
                         onClick={() => handleCheck(index, ansIdx, item.answer, ans)}
                          key={ansIdx}
                          className={`${
                            selectedAnswers[index] === ansIdx
                              ? item.answer === ans
                                ? "bg-green-600 "
                                : "bg-red-600 shake "
                              : "bg-violet-900"
                          } text-white  px-5 py-2 min-w-40 rounded-lg cursor-pointer active:scale-95 transition-all duration-200`}
                        >
                          {ans}
                        </button>
                      ))}
                    </div>
   </div>
  ))
}
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <Table/>
</SwiperSlide>
<SwiperSlide>
  <Suggestion/>
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
