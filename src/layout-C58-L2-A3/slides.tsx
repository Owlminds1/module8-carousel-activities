"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";
import SlideData from "@/layout-C58-L2-A3/pointer.json";
import Slide2Data from "@/layout-C58-L2-A3/pointer2.json";
import Welldone from "@/components/wellDone";
const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [open, setOpen] = useState(false);

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

      if (current === 2) {
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));

        scrollRef.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }

        if (current === 3) {
        setVisibleCount2((prev) => (prev < Slide2Data.length ? prev + 1 : prev));

        scrollRef2.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount,visibleCount2, activeSlide]);

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [visibleCount, activeSlide]);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (SlideData2.length * 2 === visibleCount2) {
  //     setOpen(true);
  //   }
  // }, [visibleCount2]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="w-[60%]">
        <h4 className="text-3xl font-bold text-black text-center">
          {activeSlide === 0
            ? "FORMS"
            : activeSlide === 1
              ? " DRAFT YOUR QUESTIONS"
              :activeSlide === 2 ?  "SUGGESTIVE RESPONSES": activeSlide ===3 ?"Google Forms":""}
        </h4>

        {/* <p className="text-center text-black text-xl">
          {activeSlide > 1
            ? "Identify each statement as either a clarification, an ideation, a development, or an implementation."
            : ""}
        </p> */}
      </div>

      <div className="w-[95%] flex justify-center items-center flex-col gap-3  ">
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
                  <MyImage path="/C58Images/Survey2.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-8 ">
                  <p className=" text-lg w-full">
                    You and some friends want to create an app to get players
                    for various sports teams at school. So instead of going
                    class to class with a sign up sheet and spending hours to
                    cover the whole school, you want to simply do it with an
                    app! <br />
                    But before making sure that students know about the app and
                    use it, you have to first figure out how the app should look
                    and feel, and ways it should function. So you’ve to ask the
                    right questions to get the responses to help build this app.
                  </p>

                  <p className=" text-lg w-full">
                    <span className="font-bold ">
                      {" "}
                      You will build a survey on Google Forms.
                    </span>{" "}
                    But before that, let’s create a rough sketch of questions on
                    a piece of paper!
                  </p>

                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
                <div className="col-span-6 w-full flex justify-center items-center ">
                  <MyImage path="/C58Images/Checklist.jpg" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <h3 className="font-bold w-full text-xl">
                    Your questions (maximum 15 questions) should center around:
                  </h3>
                  <ul className="list-disc space-y-2">
                    <li className=" text-lg w-full">
                      Useful information about the students to create app
                    </li>

                    <li className=" text-lg w-full">
                      Challenges you’re trying to solve
                    </li>

                    <li className=" text-lg w-full">
                      What you want to learn about student behavior, habits,
                      usage, preferences, schedules, colors
                    </li>

                    <li className=" text-lg w-full">
                      How they can share this information with other students
                    </li>

                    <li className=" text-lg w-full">
                      Ways to get students involved
                    </li>
                  </ul>

                  <h3 className="w-full font-light italic text-lg">
                    Examples of information on the app:
                  </h3>

                  <ul className="list-disc space-y-2 w-full">
                    <li className=" text-lg w-full">Tryouts</li>

                    <li className=" text-lg w-full">Schedule</li>

                    <li className=" text-lg w-full">Initiation</li>

                    <li className=" text-lg w-full">Competitions</li>

                    <li className=" text-lg w-full">Cheerleading</li>

                    <li className=" text-lg w-full">
                      Inter-school competitions
                    </li>

                    <li className=" text-lg w-full">
                      Inter-state competitions
                    </li>

                    <li className=" text-lg w-full">Scores of each player</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 place-items-center p-2">
               
                <div className=" col-span-12 w-[60%] flex justify-center items-center flex-col gap-8 ">
                  <ul className="list-disc space-y-2 w-full">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li key={index} className=" text-lg w-full">
                        {i}
                      </li>
                    ))}
                  </ul>

                    {SlideData.length > visibleCount && (
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
               
                <div className=" col-span-12 w-[60%] flex justify-center items-center flex-col gap-8 ">
                  <ul className="list-disc space-y-2 w-full">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li key={index} className=" text-lg w-full">
                        {i}
                      </li>
                    ))}
                  </ul>

                    {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef2}></div>
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
