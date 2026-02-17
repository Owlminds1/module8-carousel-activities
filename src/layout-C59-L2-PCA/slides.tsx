"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef, useState } from "react";

import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    swiperRef?.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef?.current?.slideNext();
  };
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    window.scrollTo(0, 0);
  };

  //   enter to show more points logic

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (Slide3Data.length * 2 === visibleCount3) {
  //     setOpen(true);
  //   }
  // }, [visibleCount3]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-2xl text-center font-bold text-black">
          {activeSlide <= 2
            ? " Watch these ads to identify their USP (unique selling point) and CTA (call to action)"
            : "BONUS ACTIVITY"}
        </h4>

        {/* <p className="text-xl font-medium w-[80%] text-center text-black ">
         
        </p> */}
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
                <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-10 ">
                  <iframe
                    className="rounded-lg"
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/WswHFpnIGB8?si=ZZqnAOX7gn1rVi7C"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>

                  <div className="w-[60%]  flex flex-col justify-center items-center gap-3">
                    <label
                      htmlFor="USP"
                      className=" text-black text-xl font-medium"
                    >
                      USP (unique selling point)
                    </label>
                    <textarea
                      placeholder="write here..."
                      rows={3}
                      id="USP"
                      className="text-lg text-black w-[80%] outline-0 border-2 p-2 rounded-lg "
                    />
                  </div>

                  <div className="w-[60%]  flex flex-col justify-center items-center gap-3">
                    <label
                      htmlFor="CTA"
                      className=" text-black text-xl font-medium"
                    >
                      {" "}
                      CTA (call to action).
                    </label>
                    <textarea
                      placeholder="write here..."
                      rows={3}
                      id="CTA"
                      className="text-lg text-black w-[80%] outline-0 border-2 p-2 rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-10 ">
                  <iframe
                    className="rounded-lg"
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/Q4Tintbg0lo?si=-zaXiaRIF-_0Ye3W"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>

                  <div className="w-[60%]  flex flex-col justify-center items-center gap-3">
                    <label
                      htmlFor="USP"
                      className=" text-black text-xl font-medium"
                    >
                      USP (unique selling point)
                    </label>
                    <textarea
                      placeholder="write here..."
                      rows={3}
                      id="USP"
                      className="text-lg text-black w-[80%] outline-0 border-2 p-2 rounded-lg "
                    />
                  </div>

                  <div className="w-[60%]  flex flex-col justify-center items-center gap-3">
                    <label
                      htmlFor="CTA"
                      className=" text-black text-xl font-medium"
                    >
                      {" "}
                      CTA (call to action).
                    </label>
                    <textarea
                      placeholder="write here..."
                      rows={3}
                      id="CTA"
                      className="text-lg text-black w-[80%] outline-0 border-2 p-2 rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12 w-full flex justify-center items-center flex-col gap-10 ">
                  <iframe
                    className="rounded-lg"
                    width="600"
                    height="400"
                    src="https://www.youtube.com/embed/yqorn7q3cz4?si=RryyxS_muBgXt_Wy"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>

                  <div className="w-[60%]  flex flex-col justify-center items-center gap-3">
                    <label
                      htmlFor="USP"
                      className=" text-black text-xl font-medium"
                    >
                      USP (unique selling point)
                    </label>
                    <textarea
                      placeholder="write here..."
                      rows={3}
                      id="USP"
                      className="text-lg text-black w-[80%] outline-0 border-2 p-2 rounded-lg "
                    />
                  </div>

                  <div className="w-[60%]  flex flex-col justify-center items-center gap-3">
                    <label
                      htmlFor="CTA"
                      className=" text-black text-xl font-medium"
                    >
                      {" "}
                      CTA (call to action).
                    </label>
                    <textarea
                      placeholder="write here..."
                      rows={3}
                      id="CTA"
                      className="text-lg text-black w-[80%] outline-0 border-2 p-2 rounded-lg "
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 p-10 place-items-center">
                <div className=" col-span-12 w-full flex justify-center items-center   ">
                  <ul className="list-disc space-y-4  w-[50%]">
                    <li className="text-black text-xl font-medium">
                      Request your parents to let you accompany them to a store
                      selling electronic devices [e.g. phone, television] or big
                      appliances [dish washer, washing machine].
                    </li>

                    <li className="text-black text-xl font-medium">
                      Observe how sales people explain product features to
                      encourage you to buy a particular brand.
                    </li>
                  </ul>
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
