"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C57-L3-A4/pointer1.json";
import SlideData2 from "@/layout-C57-L3-A4/pointer3.json";
import Welldone from "@/components/wellDone";
import Table from "./table";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
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
      const target = e.target as HTMLElement;
      if (target.tagName === "TEXTAREA" || target.tagName === "INPUT") return;
      if (e.key !== "Enter" && e.code !== "Enter") return;

      const current = swiperRef.current?.activeIndex ?? activeSlide;

      if (current === 0) {
        setVisibleCount((prev) =>
          prev < SlideData.length * 2 ? prev + 1 : prev,
        );

        scrollRef.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }

      if (current === 1) {
        setVisibleCount2((prev) =>
          prev < SlideData2.length * 2 ? prev + 1 : prev,
        );

        scrollRef2.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount2, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, visibleCount2, activeSlide]);

  //   when the student answer the all questions welldone box open
  useEffect(() => {
    if (activeSlide === 3) {
     const  time=  setTimeout(()=>{
        setOpen(true);
      },3000)

      return ()=> clearTimeout(time) 
    }
  }, [activeSlide]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="w-[60%]">
        <h4 className="text-3xl font-bold text-black text-center">
          {activeSlide === 0
            ? "ROLE PLAY"
            : "SOLVING WITH DRIVERS’ ANALYSIS"}
        </h4>

        <p className="text-center text-black text-xl">
          {activeSlide === 0
            ? "We are going to do a role playing technique for you to get in your customers’ shoes. Read the following questions with examples to answer responses for your product."
            : activeSlide === 2
              ? "Ready? We can use the same example to expand it further. Fill in the blanks by applying the technique."
              : ""}
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
                  <MyImage path="/C57Images/Technique3.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-8 ">
                  {SlideData.map((item, index) => {
                    const stepIndex = index * 2;
                    const showQuestions = visibleCount > stepIndex;
                    const showAnswers = visibleCount > stepIndex + 1;
                    return (
                      <div className="flex flex-col gap-2 w-full">
                        {showQuestions && (
                          <h4 className="text-black text-xl font-bold animate_fadeInUp">
                            {item.qus}
                          </h4>
                        )}

                        {showAnswers && (
                          <h4 className="text-black/70 text-lg animate_fadeInUp">
                            {item.ans}
                          </h4>
                        )}

                        {showAnswers && (
                          <textarea
                            placeholder="write here..."
                            className="text-lg text-black rounded-lg p-2 border focus:border-black w-full "
                            rows={3}
                          />
                        )}
                      </div>
                    );
                  })}

                  {SlideData.length * 2 > visibleCount && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C57Images/distribution.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-8 ">
                  <div>
                    <p className="font-bold text-xl w-full">
                      Now let’s dive into the drivers’ analysis that allows us
                      to think through challenges in an effective manner.{" "}
                      <span className="font-light">
                        This technique will be especially useful when you think
                        of scaling your product i.e. reach out to more
                        customers.{" "}
                      </span>
                    </p>

                    <p className=" text-lg w-full">
                      Let’s say that like Kobee, you’ve a distribution problem.
                      To think of this in a constructive manner, you can ask
                      questions such as:
                    </p>
                  </div>

                  {SlideData2.map((item, index) => {
                    const stepIndex = index * 2;

                    const showQuestions = visibleCount2 > stepIndex;
                    const showAnswers = visibleCount2 > stepIndex + 1;

                    return (
                      <div key={index} className=" w-full">
                        {showQuestions && (
                          <h3 className="text-black font-bold text-xl animate_fadeInUp ">
                            {item.Question}
                          </h3>
                        )}
                        {showAnswers && (
                          <p className="text-black/80 text-xl animate_fadeInUp ">
                            {item.Answer}
                          </p>
                        )}
                      </div>
                    );
                  })}

                  {SlideData2.length * 2 > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center w-full italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef2}></div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Table  mode="input"/>
            </SwiperSlide>
            
             <SwiperSlide>
              <Table mode="sol" />
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
              activeSlide < 3 ? "visible" : "invisible"
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
