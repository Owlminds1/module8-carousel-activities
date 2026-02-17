"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C59-L3-PCA/pointer.json";
import Slide3Data from "@/layout-C59-L3-PCA/pointer3.json";
import Welldone from "@/components/wellDone";


const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRef3 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
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

      if (current === 1) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 2) {
        setVisibleCount3((prev) =>
          prev < Slide3Data.length * 2 ? prev + 1 : prev,
        );

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

    
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount3,  activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount, visibleCount3,  activeSlide]);

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
          Favourite Product
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          Create a presentation strategy for your product. It can be a product
          you’ve already created or a product you’d like to create.
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
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <p className="text-2xl  text-black w-full">
                  Step 1: Pick your favorite product: it can be sports wear, water bottles, school and art supplies, junk food, refreshing drinks and so on. 
                  </p>
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <h3 className="text-xl text-black/80 font-bold w-full">
                      My favourite product is:
                    </h3>

                    <textarea
                      placeholder="write here..."
                      rows={3}
                      className="text-lg text-black w-[80%] outline-0 border-2 p-2 rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className=" col-span-12   w-[50%] flex justify-center items-center flex-col  gap-4 ">
                  <p className="text-2xl text-black w-full">
                  Step 2: Answer the following question:
                  </p>
                  {SlideData.map((item, index) => {
                    // const stepIndex = index * 2;
                    const showQuestion = visibleCount > index;
                    // const showAnswer = visibleCount7 > stepIndex + 1;

                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-start items-start gap-3 "
                      >
                        {showQuestion && (
                          <h3 className="text-xl  text-black/80 font-bold w-full">
                            {item}
                          </h3>
                        )}

                        {showQuestion && (
                          <textarea
                            placeholder="write here..."
                            rows={3}
                            className="text-lg text-black w-full outline-0 border-2 p-2 rounded-lg "
                          />
                        )}
                      </div>
                    );
                  })}
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
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-[50%] flex justify-center items-start flex-col gap-10 ">

                    <p className="text-2xl  font-bold text-black"> Step 3: Conduct your research and create a 3-slide presentation.</p>
                  {Slide3Data.map((item, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount3 > stepIndex;
                    const showAnswer = visibleCount3 > stepIndex + 1;

                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-center items-center gap-5 "
                      >

                      
                        {showQuestion && (
                          <h3 className="text-2xl text-black/80 font-bold w-full">
                            {item.title}
                          </h3>
                        )}
                        <ul className="list-disc space-y-3 w-full ">
                          {showAnswer &&
                            item.answers.map((i, idx) => (
                              <li key={idx} className="text-xl text-black">
                                {i}
                              </li>
                            ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <div className="col-span-12 w-full">
                  {Slide3Data.length * 2 > visibleCount3 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef3}></div>
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
