"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import Slide2Data from "@/layout-C57-L1-A3/pointer2.json";

import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef2 = useRef<HTMLDivElement | null>(null);
  // const [visibleCount, setVisibleCount] = useState(1);
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

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < Slide2Data.length ? prev + 1 : prev,
        );

        scrollRef2.current?.scrollIntoView({
  behavior: "smooth",
  block: "end",
});
      }

      if (current === 2) {
        setVisibleCount3((prev) => (prev < 4 ? prev + 1 : prev));
      }

       if (current === 3) {
        setVisibleCount4((prev) => (prev < 6 ? prev + 1 : prev));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount2,visibleCount3,visibleCount4, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount2,visibleCount3,visibleCount4]);

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
            ? "STARBURSTING TECHNIQUE"
            : activeSlide === 1
              ? "STARBURSTING TECHNIQUE"
              : activeSlide === 2
                ? "STARBURSTING EXAMPLE"
                : activeSlide === 3
                  ? "BUILD A PRODUCT"
                  : activeSlide === 4 ?"SUGGESTIVE RESPONSES": ""}
        </h4>

        {/* <p className="text-center text-black text-xl">
          {activeSlide === 1 ? "Here are two problems we can discuss:" : ""}
        </p> */}
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
                  <MyImage path="/C57Images/digram.png" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <ul className="list-disc w-full space-y-3 px-2">
                    <li className="text-black text-lg animate_fadeInUp">
                      We have to ask ourselves a lot of questions about building
                      the product through observations.
                    </li>

                    <li className="text-black text-lg animate_fadeInUp">
                      We must think like the users of the products to have
                      empathy to understand their requirements.
                    </li>

                    <li className="text-black text-lg animate_fadeInUp">
                      This will ensure that all the potential obstacles are
                      already solved in our head!
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-5 place-items-center p-2">
                {Slide2Data.map((item, index) => {
                  const stepIndex = index ;
                  const showQuestion = visibleCount2 > stepIndex;
                  return (
                    <div
                      key={index}
                      className="col-span-12 w-full flex justify-center items-center gap-5  border p-1 rounded-lg"
                    >
                      <div className="w-full">
                        {showQuestion && <MyImage path={item.image} />}
                      </div>
                      <div className=" w-full flex justify-center items-start flex-col gap-8 ">
                        {showQuestion && (
                          <h4 className="text-3xl text-black">
                           
                            {item.text}
                          </h4>
                        )}
                      </div>
                    </div>
                  );
                })}

                <div className="col-span-12 w-full">
                  {Slide2Data.length  > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef2}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-5 ">
                  <ul className="list-disc w-[50%] space-y-3 px-2">
                    {visibleCount3 >= 1 && (
                      <li className="text-black text-2xl animate_fadeInUp">
                        So this is how waterproof diapers came about!
                      </li>
                    )}

                    {visibleCount3 >= 2 && (
                      <li className="text-black text-2xl animate_fadeInUp">
                        But was the first diaper all good?!
                      </li>
                    )}

                    {visibleCount3 >= 3 && (
                      <li className="text-black text-2xl animate_fadeInUp">
                        NO
                      </li>
                    )}

                    {visibleCount3 >= 4 && (
                      <li className="text-black text-2xl animate_fadeInUp">
                        The product had to be constantly improved to make the
                        best diapers later on!
                      </li>
                    )}
                  </ul>

                  <div className="col-span-12 w-full">
                    {4 > visibleCount3 && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-5 place-items-center p-2">
                <div className="col-span-12">
                  <MyImage path="/C57Images/build_Product.png" />
                </div>
                <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-5  ">
                  <h4 className="font-bold text-2xl ">
                    Now let’s make a product asking the right questions using
                    the starbursting technique
                  </h4>
                  <p className="font-medium text-xl ">
                    You’ve to make a toy organiser because right now all your
                    toys are all over the place!
                  </p>

                  <ul className="list-disc w-[50%] space-y-3 px-2">
                    <li className="text-black text-2xl animate_fadeInUp">
                      You would like to neatly arrange them and keep them safe
                      from dust and wind.
                    </li>

                    <li className="text-black text-2xl animate_fadeInUp">
                      You also would like to label each category so you know
                      where to find each variety of your toys like vehicles,
                      LEGO bricks, utensils, and soft toys.
                    </li>

                    <li className="text-black text-2xl animate_fadeInUp">
                      The organizer has to be compact so you’ve space in the
                      room to play
                    </li>
                  </ul>

                  <h4 className="font-bold text-2xl ">Can you do it? </h4>

                  <ul className="list-disc w-[50%] space-y-3 px-2">
                    <li className="text-black text-2xl animate_fadeInUp">
                      Fill up the circles with the answers from the LHS.
                    </li>

                    <li className="text-black text-2xl animate_fadeInUp">
                      The questions are based on what you’ve to design!
                    </li>
                  </ul>
                </div>
                <div className="col-span-12">
                  <MyImage path="/C57Images/circel.png" />
                </div>
                <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-5 ">
                  <ul className="list-disc w-[50%] space-y-3 px-2">
                    {visibleCount4 >= 1 && (
                      <li className="text-black text-2xl animate_fadeInUp">
                        What is the problem you’re trying to solve?
                      </li>
                    )}

                    {visibleCount4 >= 2 && (
                      <li className="text-black text-2xl animate_fadeInUp">
                        Why is it important to solve this problem?
                      </li>
                    )}

                    {visibleCount4 >= 3 && (
                      <li className="text-black text-2xl animate_fadeInUp">
                        Who will this solution benefit?
                      </li>
                    )}

                    {visibleCount4 >= 4 && (
                      <li className="text-black text-2xl animate_fadeInUp">
Where can this solution be implemented?
                      </li>
                    )}


                    {visibleCount4 >= 5 && (
                      <li className="text-black text-2xl animate_fadeInUp">
How long will it take to build the solution?                      </li>
                    )}

                    {visibleCount4 >= 6 && (
                      <li className="text-black text-2xl animate_fadeInUp">
How will this solution have a positive impact?                     </li>
                    )}
                  </ul>

                  <div className="col-span-12 w-full">
                    {6 > visibleCount4 && (
                      <p className="text-gray-800 mt-3 text-center italic font-normal">
                        (Enter to show more points)
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center">
                  <MyImage path="/C57Images/suggestion.png" />
                </div>
                
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <div className="w-full">
                    <h3 className="text-black text-2xl font-bold">What is the problem you’re trying to solve?</h3>
                    <p className="text-black text-xl font-medium">The toys are all over the place so have to be organised!</p>
                  </div>


                   <div className="w-full">
                    <h3 className="text-black text-2xl font-bold">Why is it important to solve this problem?</h3>
                    <p className="text-black text-xl font-medium">So we can efficiently play and neatly arrange toys for everyone to be happy!</p>
                  </div>


                  <div className="w-full">
                    <h3 className="text-black text-2xl font-bold">Who will this solution benefit?</h3>
                    <p className="text-black text-xl font-medium">All the kids who play with toys. All the parents are tired of the mess.</p>
                  </div>


                   <div className="w-full">
                    <h3 className="text-black text-2xl font-bold">Where can this solution be implemented?</h3>
                    <p className="text-black text-xl font-medium">Anywhere kids play such as living room, bedroom, dining room, and outdoor spaces.</p>
                  </div>

                    <div className="w-full">
                    <h3 className="text-black text-2xl font-bold">How long will it take to build the solution?</h3>
                    <p className="text-black text-xl font-medium">The first prototype can take anywhere from a couple of months of design and reinventing to a couple of years of making!</p>
                  </div>
                  <div className="w-full">
                    <h3 className="text-black text-2xl font-bold">How will this solution have a positive impact?</h3>
                    <p className="text-black text-xl font-medium">Kids will learn how to organise and be tidy. Parents will be happy to see a neat home without having to scold their kids to keep things tidy. Kids can easily find their toys.</p>
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
