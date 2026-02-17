"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C59-L3-A3/pointer.json";
import Slide2Data from "@/layout-C59-L3-A3/pointer2.json";
import Slide3Data from "@/layout-C59-L3-A3/pointer3.json";
import Slide4Data from "@/layout-C59-L3-A3/pointer4.json";
import Slide5Data from "@/layout-C59-L3-A3/pointer5.json";
import Welldone from "@/components/wellDone";
import MyImage from "@/components/MyImage";
import Link from "next/link";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const scrollRef3 = useRef<HTMLDivElement>(null);
  const scrollRef4 = useRef<HTMLDivElement>(null);
  const scrollRef5 = useRef<HTMLDivElement>(null);
  const scrollRef6 = useRef<HTMLDivElement>(null);
  const scrollRef7 = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [visibleCount2, setVisibleCount2] = useState(0);
  const [visibleCount3, setVisibleCount3] = useState(1);
  const [visibleCount4, setVisibleCount4] = useState(0);
  const [visibleCount5, setVisibleCount5] = useState(0);
  const [visibleCount6, setVisibleCount6] = useState(0);
  const [visibleCount7, setVisibleCount7] = useState(0);

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
        setVisibleCount((prev) => (prev < SlideData.length ? prev + 1 : prev));

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

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
        setVisibleCount3((prev) =>
          prev < Slide3Data.length ? prev + 1 : prev,
        );

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 3) {
        setVisibleCount4((prev) => (prev < 5 ? prev + 1 : prev));

        scrollRef4.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 4) {
        setVisibleCount5((prev) => (prev < 4 ? prev + 1 : prev));

        scrollRef5.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 5) {
        setVisibleCount6((prev) => (prev < 4 ? prev + 1 : prev));

        scrollRef6.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      } 
      
      if (current === 6) {
        setVisibleCount7((prev) => (prev < 13 ? prev + 1 : prev));

        scrollRef7.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [
    visibleCount,
    visibleCount2,
    visibleCount3,
    visibleCount4,
    visibleCount5,
    visibleCount6,
    visibleCount7,

    activeSlide,
  ]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [
    visibleCount,
    visibleCount2,
    visibleCount3,
    visibleCount4,
    visibleCount5,
    visibleCount6,
    visibleCount7,

    activeSlide,
  ]);

  //   when the student answer the all questions welldone box open
  // useEffect(() => {
  //   if (Slide3Data.length * 2 === visibleCount3) {
  //     setOpen(true);
  //   }
  // }, [visibleCount3]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setTimeout(() => {
        swiperRef.current?.updateAutoHeight();
        swiperRef.current?.update();
      }, 300);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          {activeSlide === 0
            ? "SALES"
            : activeSlide === 1
              ? "SALES"
              : activeSlide === 2
                ? "AIDA Framework"
                : activeSlide === 3
                  ? "SALES SCRIPT"
                  : activeSlide === 4
                    ? "SALES SCRIPT"
                    : activeSlide === 5
                      ? "SALES SCRIPT"
                      : activeSlide
                        ? "SALES SCRIPT"
                        : ""}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 1
            ? "Let’s watch the video!"
            : activeSlide === 4
              ? "Fill in your pitch in the blanks."
              : ""}
        </p>
      </div>

      <div className="w-[90%] flex justify-center items-center flex-col gap-3  ">
        <div className="w-full shadow-md p-3 min-h-30 bg-white">
          <Swiper
            observer={true}
            observeParents={true}
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
                <div className="col-span-6">
                  <MyImage path="/C59Images/IS.jpg" />
                </div>
                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl text-black w-full">
                    There are two kinds of sales.
                  </p>
                  <p className="text-xl text-black w-full">
                    <span className="font-bold"> Inbound Sales : </span> This is
                    when the customer comes to you to further enquire about the
                    product with the intention to buy.
                  </p>

                  <p className="text-lg text-black w-full">
                    This is done through various methods:
                  </p>
                  <ul className="list-disc space-y-3 w-full">
                    {SlideData.slice(0, visibleCount).map((i, index) => (
                      <li
                        key={index}
                        className="text-black text-xl font-medium"
                      >
                        <span className="font-bold ">{i.title} : </span>
                        {i.text}
                      </li>
                    ))}
                  </ul>

                  {SlideData.length > visibleCount && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/OS.jpg" />
                </div>
                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl text-black w-full">
                    <span className="font-bold"> Outbound Sales : </span> This
                    is when you reach out to customers to convince them to buy
                    your product.
                  </p>

                  <p className="text-xl text-black w-full">
                    This is done through various methods as well:
                  </p>
                  <ul className="list-disc space-y-3 w-full">
                    {Slide2Data.slice(0, visibleCount2).map((i, index) => (
                      <li
                        key={index}
                        className="text-black text-xl font-medium"
                      >
                        <span className="font-bold ">{i.title} : </span>
                        {i.text}
                      </li>
                    ))}
                  </ul>

                  {Slide2Data.length - 1 < visibleCount2 && (
                    <p className="text-black text-xl animate_fadeInUp mt-3  font-normal">
                      In this class, we will focus on inbound sales, especially
                      content.
                    </p>
                  )}

                  {Slide2Data.length > visibleCount2 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef2}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C59Images/AIDA_Framework.png" />
                </div>
                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl text-black w-full">
                    <span className="font-bold">
                      {" "}
                      Let’s use the AIDA (Attention, Interest, Desire, Action)
                      framework to create a sales script.{" "}
                    </span>{" "}
                    With this method, you can apply the following ways to
                    persuade the customer.
                  </p>

                  <ul className="list-disc space-y-3 w-full">
                    {Slide3Data.slice(0, visibleCount3).map((i, index) => (
                      <li
                        key={index}
                        className="text-black text-xl font-medium"
                      >
                        <span className="font-bold ">{i.title} : </span>
                        {i.text}
                      </li>
                    ))}
                  </ul>

                  {Slide3Data.length > visibleCount3 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef3}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className="col-span-12 w-[50%]">
                  <ul className="list-disc space-y-3 ">
                    <li className="text-xl text-black">
                      Let’s say that the ad you made earlier was really
                      appreciated by many customers.
                    </li>

                    <li className="text-xl text-black">
                      So they have come to you to enquire further about AirTag.
                    </li>

                    <li className="text-xl text-black">
                      Your goal is to ensure that this potential customer
                      becomes an actual customer.
                    </li>
                  </ul>
                </div>

                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl font-bold text-black w-full">
                    Here’s the template for the script. Just write as you see
                    fit.
                  </p>

                  {visibleCount4 >= 1 && (
                    <p className="text-xl  text-black w-full">
                      <span className="font-bold">SCENE : </span> A customer
                      walks into your electronics retail store and approaches
                      your brand area.
                    </p>
                  )}
                </div>
                {visibleCount4 >= 1 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <MyImage path="/C59Images/Retail_Store.jpg" />
                  </div>
                )}
                {visibleCount4 >= 2 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-2">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">ATTENTION : </span>(Grab the
                        buyer's attention immediately with a personalized
                        comment, a question about a recent trend, or a brief
                        statement of the company's USP and values)
                      </p>

                      <textarea
                        placeholder="write here..."
                        rows={3}
                        className="text-lg text-black w-[90%] outline-0 border-2 p-2 rounded-lg "
                      />
                    </div>
                  </div>
                )}

                {visibleCount4 >= 3 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <p className="text-xl font-bold text-black w-full">
                      INTRODUCE YOURSELF.
                    </p>
                    <div className="flex flex-col gap-3">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">ATTENTION : </span>(Grab the
                        buyer's attention immediately with a personalized
                        comment, a question about a recent trend, or a brief
                        statement of the company's USP and values)
                      </p>

                      <p className="text-xl  text-black w-full">
                        ( Hi! My name is{" "}
                        <input
                          placeholder="write here..."
                          className="text-lg text-black outline-0 border-b border-black px-1 font-medium placeholder:font-normal "
                        />
                        . I am the{" "}
                        <input
                          placeholder="write here..."
                          className="text-lg text-black outline-0 border-b border-black px-1 font-medium placeholder:font-normal "
                        />
                        . here. How may I help you? )
                      </p>

                      <textarea
                        placeholder="write here..."
                        rows={3}
                        className="text-lg text-black w-[90%] outline-0 border-2 p-2 rounded-lg "
                      />
                    </div>
                  </div>
                )}

                {visibleCount4 >= 4 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Customer : </span>I saw your
                        ad on social platforms. I was thinking of buying an
                        AirTag. Can you please guide me through this process?
                      </p>
                    </div>
                  </div>
                )}

                {visibleCount4 >= 5 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl font-bold  text-black w-full">
                        INTRODUCE THE BRAND.{" "}
                      </p>

                      <p className="text-xl   text-black w-full">
                        (Make a statement about the product USP or unique
                        features){" "}
                      </p>

                      <textarea
                        placeholder="write here..."
                        rows={3}
                        className="text-lg text-black w-[90%] outline-0 border-2 p-2 rounded-lg "
                      />
                    </div>
                  </div>
                )}

                <div className="col-span-12 w-full">
                  {5 > visibleCount4 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef4}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl text-black w-full">
                    <span className="font-bold">INTEREST : </span> (Spark their
                    interest by relating your product or service to their
                    precise requirements and problems)
                  </p>

                  {visibleCount5 >= 1 && (
                    <div>
                      <p className="text-xl font-bold  text-black w-full">
                        UNDERSTAND THE PROBLEM
                      </p>
                      <p className="text-xl   text-black w-full">
                        (Ask a question to verify whether the customer has an
                        AirTag already and is looking to switch or is new to
                        tags altogether)
                      </p>
                    </div>
                  )}
                </div>

                {visibleCount5 >= 2 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Seller : </span>Sure! First,
                        let me please understand your needs.
                      </p>

                      <input
                        placeholder="write here..."
                        className="text-lg text-black w-full outline-0 border-b border-black p-2  "
                      />
                    </div>
                  </div>
                )}

                {visibleCount5 >= 3 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <p className="text-xl font-bold text-black w-full">
                      VERIFY THE BUDGET & EXPLAIN THE FEATURES
                    </p>
                    <div className="flex flex-col gap-3">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Seller : </span>Alright.
                        Thanks for sharing this with me. What kind of price
                        range do you have in mind?
                      </p>
                    </div>
                  </div>
                )}

                {visibleCount5 >= 4 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Customer : </span> I’m
                        looking for a tag for up to $50.
                      </p>
                    </div>
                  </div>
                )}

                <div className="col-span-12 w-full">
                  {4 > visibleCount5 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef5}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl text-black w-full">
                    <span className="font-bold">DESIRE : </span>(Instigate
                    interest by showcasing the benefits and returns your product
                    or service provides, focusing on concrete results that solve
                    their problems. Whenever possible, use data points to add
                    authenticity)
                  </p>

                  {visibleCount6 >= 1 && (
                    <div>
                      <p className="text-xl font-bold  text-black w-full">
                        UNDERSTAND THE PROBLEM
                      </p>
                      <p className="text-xl   text-black w-full">
                        (mention the features of an AirTag along with the
                        possibility of buying four tags for your family at a
                        discounted price. Also mention free engraving.)
                      </p>
                    </div>
                  )}
                </div>

                {visibleCount6 >= 2 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Seller : </span> That’s
                        perfect. I will definitely guide you through this
                        process.
                      </p>

                      <input
                        placeholder="write here..."
                        className="text-lg text-black w-full outline-0 border-b border-black p-2  "
                      />
                      <p className="text-xl  text-black w-full">
                        <Link
                          href="https://www.apple.com/in/airtag/"
                          target="blanck"
                        >
                          {" "}
                          Here is a resource to consult.
                        </Link>
                      </p>
                    </div>
                  </div>
                )}

                {visibleCount6 >= 3 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Customer : </span> Thanks.
                        That’s very helpful.
                      </p>
                    </div>
                  </div>
                )}

                <div className="col-span-12 w-full">
                  {3 > visibleCount6 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef6}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  <p className="text-xl text-black w-full">
                    <span className="font-bold">ACTION : </span>(Encourage the
                    buyer to take the next action for continued engagement. This
                    includes scheduling a demo, a follow-up conversation, or
                    downloading resources. “Please go through our website to
                    join the community where you will find many of your
                    product-related questions answered.”)
                  </p>

                  {visibleCount7 >= 1 && (
                    <div>
                      <p className="text-xl font-bold  text-black w-full">
                        GIVE PAYMENT INFORMATION
                      </p>
                      <p className="text-xl   text-black w-full">
                        (mention the different ways the customer can make a
                        payment).{" "}
                        <Link
                          href="https://www.apple.com/in/shop/buy-airtag/airtag/1-pack"
                          target="blanck"
                        >
                          {" "}
                          Here is a resource to consult.
                        </Link>
                      </p>
                    </div>
                  )}
                </div>

                {visibleCount7 >= 2 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Seller : </span>Since you
                        asked about the methods of payment, we have many
                        flexible ways to help you pay for the product you love.
                      </p>

                      <input
                        placeholder="write here..."
                        className="text-lg text-black w-full outline-0 border-b border-black p-2  "
                      />
                    </div>
                  </div>
                )}

                {visibleCount7 >= 3 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Customer : </span> Wow, that
                        makes my life very easy.
                      </p>
                    </div>
                  </div>
                )}

                {visibleCount7 >= 4 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Seller : </span> That’s what
                        we are here for! We are more than happy to assist you in
                        the process.
                      </p>
                    </div>
                  </div>
                )}

                {visibleCount7 >= 5 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="font-bold text-xl w-full">MAKE A SALE</p>
                      <p className="text-xl  text-black w-full">
                        (ask a question about how they’d like to finally pay.
                        Consult for all personal information if they say yes to
                        immediate payment. If they decide to revisit to
                        purchase, make sure to get at least their email address
                        or phone number for promotional offers and/or updates)
                      </p>
                    </div>
                  </div>
                )}

                {visibleCount7 >= 6 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <div className="flex flex-col gap-2 w-full">
                        <p className="text-xl  text-black w-full">
                          <span className="font-bold">Seller : </span>
                        </p>

                        <input
                          placeholder="write here..."
                          className="text-lg text-black w-full outline-0 border-b border-black p-2  "
                        />
                      </div>
                    </div>
                  </div>
                )}

                {visibleCount7 >= 7 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Customer : </span> Well,
                        you’ve been very genuine and helpful. Thanks so much!
                      </p>
                    </div>
                  </div>
                )}

                {visibleCount7 >= 8 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl font-bold text-black w-full">
                        ADD INFORMATION ABOUT SERVICE
                      </p>

                      <p className="text-xl  text-black w-full">
                        (add information about who to contact where for any
                        product support. Inform about warranty as well as what's
                        not included).{" "}
                        <Link
                          href="https://discussions.apple.com/welcome"
                          target="blank"
                        >
                          Here are two resources to consult. SUPPORT. COMMUNITY.
                        </Link>
                      </p>
                    </div>
                  </div>
                )}

                {visibleCount7 >= 9 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Seller : </span>Before you
                        go, let me also tell you about our services post
                        purchase.
                      </p>
                      <input
                        placeholder="write here..."
                        className="text-lg text-black w-full outline-0 border-b border-black p-2  "
                      />
                    </div>
                  </div>
                )}

                {visibleCount7 >= 10 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Customer : </span> I have to
                        run for a meeting now but thanks!
                      </p>
                      <p className="text-xl  text-black w-full">
                        (Note: If the customer has to go, don’t insist on
                        staying. Just make sure to close with a brief statement
                        about testimonials and contact information.)
                      </p>
                    </div>
                  </div>
                )}

                {visibleCount7 >= 11 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl font-bold text-black w-full">
                        ASK FOR TESTIMONIALS
                      </p>
                      <p className="text-xl  text-black w-full">
                        (add information about where and how to add reviews,
                        give ratings, or simply let customer service know how
                        you appreciate this product).
                      </p>
                    </div>
                  </div>
                )}

                {visibleCount7 >= 12 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Seller</span> And finally,
                        while enjoying the tag, we’d be very pleased to know how
                        you’re doing with our product!
                      </p>
                      <input
                        placeholder="write here..."
                        className="text-lg text-black w-full outline-0 border-b border-black p-2  "
                      />
                    </div>
                  </div>
                )}

                {visibleCount7 >= 13 && (
                  <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                    <div className="flex flex-col gap-3 w-full">
                      <p className="text-xl  text-black w-full">
                        <span className="font-bold">Customer</span> Will do!
                        Thanks!
                      </p>
                    </div>
                  </div>
                )}
                <div className="col-span-12 w-full">
                  {13 > visibleCount7 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef7}></div>
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
              activeSlide < 6 ? "visible" : "invisible"
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
