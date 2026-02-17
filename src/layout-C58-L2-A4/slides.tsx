"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";

import Welldone from "@/components/wellDone";
import Link from "next/link";
const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [activeSlide, setActiveSlide] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSuggestion2, setShowSuggestion2] = useState(false);

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
      <div className="w-[60%]">
        <h4 className="text-3xl font-bold text-black text-center">
          {activeSlide === 0
            ? " FIRST PROTOTYPE"
            : activeSlide === 1
              ? " USER FEEDBACK"
              : activeSlide === 2
                ? "USER EXPERIENCE PROCESS"
                : activeSlide === 3
                  ? "MODIFY PROTOTYPE"
                  : ""}
        </h4>

        <p className="text-center text-black text-xl">
          {activeSlide === 2
            ? "Chart out the process of how a user would experience the app to attend a sports tournament in school"
            : ""}
        </p>
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
                <div className="col-span-6 w-full">
                  <div className="columns-2   gap-5 w-full">
                    <div className="mb-5 break-inside-avoid w-80 h-50 relative ">
                      <MyImage
                        fill
                        path="/C58Images/Active_App_design.png"
                        className="w-full rounded-lg"
                      />
                    </div>

                    <div className="mb-5 break-inside-avoid w-80 h-50 relative">
                      <MyImage
                        fill={true}
                        path="/C58Images/Active_App_Dashboard.jpg"
                        className="w-full rounded-lg"
                      />
                    </div>

                    <div className="mb-5 break-inside-avoid w-80 h-50 relative">
                      <MyImage
                        fill
                        path="/C58Images/Active_App_Interface.jpg"
                        className="w-full rounded-lg"
                      />
                    </div>

                    <div className="mb-5 break-inside-avoid w-80 h-50 relative">
                      <MyImage
                        fill
                        path="/C58Images/Active_App.png"
                        className="w-full rounded-lg"
                      />
                    </div>
                  </div>
                </div>
                <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-5 ">
                  <p className=" text-xl w-full">
                    Let’s imagine that after the survey, you have created the
                    first prototype of your app.
                  </p>

                  <p className=" text-xl w-full">
                    <span className="font-light">
                      You’ve taken inspiration from the design of a similar app{" "}
                      <Link
                        href="https://www.activenetwork.com/team-sports"
                        target="blank"
                      >
                        (ACTIVE NETWORK)
                      </Link>{" "}
                      “an all-in-one sports management system.”
                    </span>
                  </p>

                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-5 place-items-center p-2">
                <div className=" col-span-12 font-bold  w-full text-center ">
                  <p className=" text-xl w-full">
                    Here’s the first set of feedback from the users.
                  </p>
                </div>

                <div className="col-span-12 gap-0.5 grid  grid-cols-12 w-[90%]">
                  <div className="col-span-6 w-full bg-violet-900 text-white p-1 text-center text-xl">
                    CATEGORY
                  </div>

                  <div className="col-span-6 w-full bg-violet-900 text-white p-1 text-center text-xl">
                    FEEDBACK
                  </div>
                  <div className="col-span-6 w-full border text-black p-2 text-center text-xl">
                    User Experience (way students experience the app)
                  </div>

                  <div className="col-span-6 w-full border text-black p-2 text-center text-xl">
                    The app is easy to use but information can be better
                    organised
                  </div>

                  <div className="col-span-6 w-full border text-black p-2 text-center text-xl">
                    Design (how the app looks and feels)
                  </div>

                  <div className="col-span-6 w-full border text-black p-2 text-center text-xl">
                    It can be more elegant in its look and feel
                  </div>

                  <div className="col-span-6 w-full border text-black p-2 text-center text-xl">
                    Service (how app reps interact with the users)
                  </div>

                  <div className="col-span-6 w-full border text-black p-2 text-center text-xl">
                    The response time for any edits or information can be
                    quicker
                  </div>

                  <div className="col-span-6 w-full border text-black p-2 text-center text-xl">
                    Content (information on the app)
                  </div>

                  <div className="col-span-6 w-full border text-black p-2 text-center text-xl">
                    It would be nice to integrate fitness related blogs on it
                    too and a way to chat with users who are online on the app
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-10 w-full gap-y-3 place-items-center p-2">
                  <div className="col-span-2 min-h-30 w-full  text-center">
                    <h3 className="bg-violet-900 text-white p-1 font-bold">
                      GOAL
                    </h3>
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      (what is the objective of the user?)
                    </h4>
                  </div>

                  <div className="col-span-2 min-h-30 w-full  text-center">
                    <h3 className="bg-violet-900 text-white p-1 font-bold">
                      {" "}
                      BROWSE
                    </h3>
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      (what all steps will the user take to find information?)
                    </h4>
                  </div>

                  <div className="col-span-2 min-h-30 w-full  text-center">
                    <h3 className="bg-violet-900 text-white p-1 font-bold">
                      SELECT
                    </h3>
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      (what all categories will the user choose to attend the
                      tournament?)
                    </h4>
                  </div>

                  <div className="col-span-2 min-h-30 w-full  text-center">
                    <h3 className="bg-violet-900 text-white p-1 font-bold">
                      ADD
                    </h3>
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      (what will the user add to finalise attendance at the
                      tournament?)
                    </h4>
                  </div>

                  <div className="col-span-2 min-h-30 w-full   text-center">
                    <h3 className="text-white font-bold p-1 bg-violet-900 ">
                      {" "}
                      CONFIRM
                    </h3>

                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      (what kind of confirmations will the user get to go to the
                      tournament?)
                    </h4>
                  </div>

                  <div className="col-span-2 w-full  text-black p-1 text-center">
                    <textarea
                      className="w-full text-lg p-2 border "
                      placeholder="write here..."
                    />
                  </div>

                  <div className="col-span-2 w-full  text-black p-1 text-center">
                    <textarea
                      className="w-full text-lg p-2 border "
                      placeholder="write here..."
                    />
                  </div>

                  <div className="col-span-2 w-full  text-black p-1 text-center">
                    <textarea
                      className="w-full text-lg p-2 border "
                      placeholder="write here..."
                    />
                  </div>

                  <div className="col-span-2 w-full  text-black p-1 text-center">
                    <textarea
                      className="w-full text-lg p-2 border "
                      placeholder="write here..."
                    />
                  </div>

                  <div className="col-span-2 w-full  text-black p-1 text-center">
                    <textarea
                      className="w-full text-lg p-2 border "
                      placeholder="write here..."
                    />
                  </div>
                </div>

                {!showSuggestion ? (
                  <div className="w-full text-center">
                    <button
                      onClick={() => setShowSuggestion(true)}
                      className="px-5 py-2 bg-violet-900  text-white rounded-lg cursor-pointer"
                    >
                      Suggestive Response
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-10 w-full gap-y-3 place-items-center p-2">
                    <div className="col-span-10 text-xl font-bold text-center py-5">
                      SUGGESTIVE RESPONSES
                    </div>
                    <div className="col-span-2 min-h-30 w-full  text-center">
                      <h3 className="bg-violet-900 text-white p-1 font-bold">
                        GOAL
                      </h3>
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        (what is the objective of the user?)
                      </h4>
                    </div>

                    <div className="col-span-2 min-h-30 w-full  text-center">
                      <h3 className="bg-violet-900 text-white p-1 font-bold">
                        {" "}
                        BROWSE
                      </h3>
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        (what all steps will the user take to find information?)
                      </h4>
                    </div>

                    <div className="col-span-2 min-h-30 w-full  text-center">
                      <h3 className="bg-violet-900 text-white p-1 font-bold">
                        SELECT
                      </h3>
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        (what all categories will the user choose to attend the
                        tournament?)
                      </h4>
                    </div>

                    <div className="col-span-2 min-h-30 w-full  text-center">
                      <h3 className="bg-violet-900 text-white p-1 font-bold">
                        ADD
                      </h3>
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        (what will the user add to finalise attendance at the
                        tournament?)
                      </h4>
                    </div>

                    <div className="col-span-2 min-h-30 w-full   text-center">
                      <h3 className="text-white font-bold p-1 bg-violet-900 ">
                        {" "}
                        CONFIRM
                      </h3>

                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        (what kind of confirmations will the user get to go to
                        the tournament?)
                      </h4>
                    </div>

                    <div className="col-span-2 w-full  text-black p-1 text-center border h-full">
                      <h3 className="w-full text-lg p-2 text-violet-900 ">
                        Book seats for a sports tournament
                      </h3>
                    </div>

                    <div className="col-span-2 w-full  text-black p-1 text-center border h-full">
                      <h3 className="w-full text-lg p-2 text-violet-900 ">
                        -go to app -browse sports category
                      </h3>
                    </div>

                    <div className="col-span-2 w-full  text-black p-1 text-center border h-full">
                      <h3 className="w-full text-lg p-2 text-violet-900 ">
                        -select sports category -select tournament to attend
                        -select date & time -select city (if multiple)
                      </h3>
                    </div>

                    <div className="col-span-2 w-full  text-black p-1 text-center border h-full">
                      <h3 className="w-full text-lg p-2 text-violet-900 ">
                        -add the number of participants -add personal details
                        (name/class/type/email address)
                      </h3>
                    </div>

                    <div className="col-span-2 w-full  text-black p-1 text-center border h-full">
                      <h3 className="w-full text-lg p-2 text-violet-900 ">
                        -review summary -edit details if required -confirm
                        booking -get email confirmation
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex flex-col gap-8">
                <div className="grid grid-cols-12 w-full gap-1  gap-y-5 place-items-center p-2">
                  <div className=" col-span-6 flex justify-center items-center  w-full ">
                   <MyImage path="/C58Images/Sketch.jpg"/>
                  </div>

                  <div className=" col-span-6 font-bold py-5 w-full ">
                    <ul className="list-disc px-8 space-y-2 w-full ">
                      <li className="text-black text-xl ">
                        Draw an improved prototype (by hand) of how the app can
                        look and feel based on the feedback.
                      </li>

                      <li className="text-black text-xl ">
                        Make a list of improved features.
                      </li>
                    </ul>
                  </div>

                  <div className="col-span-4 min-h-30 w-full  text-center">
                    <h3 className="bg-violet-900 text-white p-1 font-bold">
                      CATEGORY
                    </h3>
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      (different facets of the app)
                    </h4>
                  </div>

                  <div className="col-span-4 min-h-30 w-full  text-center">
                    <h3 className="bg-violet-900 text-white p-1 font-bold">
                      FEEDBACK
                    </h3>
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      (what the users have to say about the app)
                    </h4>
                  </div>

                  <div className="col-span-4 min-h-30 w-full  text-center">
                    <h3 className="bg-violet-900 text-white p-1 font-bold">
                      MODIFICATIONS
                    </h3>
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      (what and how will you modify based on the feedback?)
                    </h4>
                  </div>

                  <div className="col-span-4 w-full  text-center">
                    <h3 className=" text-violet-900 text-xl  p-1 font-bold">
                      User Experience
                    </h3>
                  </div>

                  <div className="col-span-4  w-full   text-center">
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      The app is easy to use but the information can be better
                      organised
                    </h4>
                  </div>

                  <div className="col-span-4 w-full  text-black p-1 text-center">
                    <textarea
                      className="w-full text-lg p-2 border "
                      placeholder="write here..."
                    />
                  </div>

                  <div className="col-span-4 w-full  text-center">
                    <h3 className=" text-violet-900 text-xl  p-1 font-bold">
                      Design
                    </h3>
                  </div>

                  <div className="col-span-4  w-full   text-center">
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      It can be more elegant in its look and feel
                    </h4>
                  </div>

                  <div className="col-span-4 w-full  text-black p-1 text-center">
                    <textarea
                      className="w-full text-lg p-2 border "
                      placeholder="write here..."
                    />
                  </div>

                  <div className="col-span-4 w-full  text-center">
                    <h3 className=" text-violet-900 text-xl  p-1 font-bold">
                      Service
                    </h3>
                  </div>

                  <div className="col-span-4  w-full   text-center">
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      The response time for any edits or information can be
                      quicker
                    </h4>
                  </div>

                  <div className="col-span-4 w-full  text-black p-1 text-center">
                    <textarea
                      className="w-full text-lg p-2 border "
                      placeholder="write here..."
                    />
                  </div>

                  <div className="col-span-4 w-full  text-center">
                    <h3 className=" text-violet-900 text-xl  p-1 font-bold">
                      Content
                    </h3>
                  </div>

                  <div className="col-span-4  w-full   text-center">
                    <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                      It would be nice to integrate fitness related blogs on it
                      too and a way to chat with users who are online on the app
                    </h4>
                  </div>

                  <div className="col-span-4 w-full  text-black p-1 text-center">
                    <textarea
                      className="w-full text-lg p-2 border "
                      placeholder="write here..."
                    />
                  </div>
                </div>

                {!showSuggestion2 ? (
                  <div className="w-full text-center">
                    <button
                      onClick={() => setShowSuggestion2(true)}
                      className="px-5 py-2 bg-violet-900  text-white rounded-lg cursor-pointer"
                    >
                      Suggestive Response
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-12 w-full gap-1 place-items-center p-2">
                    <div className="col-span-12 text-xl font-bold text-center py-5">
                      SUGGESTIVE RESPONSES
                    </div>
                    <div className="col-span-4 min-h-30 w-full  text-center">
                      <h3 className="bg-violet-900 text-white p-1 font-bold">
                        CATEGORY
                      </h3>
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        (different facets of the app)
                      </h4>
                    </div>

                    <div className="col-span-4 min-h-30 w-full  text-center">
                      <h3 className="bg-violet-900 text-white p-1 font-bold">
                        FEEDBACK
                      </h3>
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        (what the users have to say about the app)
                      </h4>
                    </div>

                    <div className="col-span-4 min-h-30 w-full  text-center">
                      <h3 className="bg-violet-900 text-white p-1 font-bold">
                        MODIFICATIONS
                      </h3>
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        (what and how will you modify based on the feedback?)
                      </h4>
                    </div>

                    <div className="col-span-4 w-full  text-center">
                      <h3 className=" text-violet-900 text-xl  p-1 font-bold">
                        User Experience
                      </h3>
                    </div>

                    <div className="col-span-4  w-full   text-center">
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        The app is easy to use but the information can be better
                        organised
                      </h4>
                    </div>

                    <div className="col-span-4 w-full  text-black p-1 text-center">
                      <h4 className="text-violet-900  text-lg">
                        - start with sports category on the dashboard -have an
                        accessible profile icon on the same dashboard (shows
                        user details when selected) -have a display bar of
                        popular events at the top -incorporate a search bar to
                        look for specific information with hashtags
                      </h4>
                    </div>

                    <div className="col-span-4 w-full  text-center">
                      <h3 className=" text-violet-900 text-xl  p-1 font-bold">
                        Design
                      </h3>
                    </div>

                    <div className="col-span-4  w-full   text-center">
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        It can be more elegant in its look and feel
                      </h4>
                    </div>

                    <div className="col-span-4 w-full  text-black p-1 text-center">
                      <h4 className="text-violet-900  text-lg">
                        -minimalist design -simple colors -more images less text
                      </h4>
                    </div>

                    <div className="col-span-4 w-full  text-center">
                      <h3 className=" text-violet-900 text-xl  p-1 font-bold">
                        Service
                      </h3>
                    </div>

                    <div className="col-span-4  w-full   text-center">
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        The response time for any edits or information can be
                        quicker
                      </h4>
                    </div>

                    <div className="col-span-4 w-full  text-black p-1 text-center">
                      <h4 className="text-violet-900  text-lg">
                        -Incorporate a chatbot for immediate responses
                      </h4>
                    </div>

                    <div className="col-span-4 w-full  text-center">
                      <h3 className=" text-violet-900 text-xl  p-1 font-bold">
                        Content
                      </h3>
                    </div>

                    <div className="col-span-4  w-full   text-center">
                      <h4 className="text-black font-medium text-lg min-h-20 flex justify-center items-center">
                        It would be nice to integrate fitness related blogs on
                        it too and a way to chat with users who are online on
                        the app
                      </h4>
                    </div>

                    <div className="col-span-4 w-full  text-black p-1 text-center">
                      <h4 className="text-violet-900  text-lg">
                        -add a category for fitness and code to incorporate
                        verified content for tips and guidance -embed a chat
                        window on the dashboard showing online users
                      </h4>
                    </div>
                  </div>
                )}
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
