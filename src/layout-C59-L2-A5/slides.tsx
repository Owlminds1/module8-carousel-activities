"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import React, { useEffect, useRef, useState } from "react";

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
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount2, setVisibleCount2] = useState(1);
  const [visibleCount3, setVisibleCount3] = useState(1);
  const [visibleCount4, setVisibleCount4] = useState(1);
  const [visibleCount5, setVisibleCount5] = useState(1);
  const [visibleCount6, setVisibleCount6] = useState(1);
  const [visibleCount7, setVisibleCount7] = useState(1);

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

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const current = swiperRef.current?.activeIndex ?? activeSlide;
      if (e.key !== "Enter" && e.code !== "Enter") return;
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
      if (e.shiftKey) return;

      if (current === 0) {
        setVisibleCount((prev) => (prev < 4 ? prev + 1 : prev));
        scrollRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
      }

      if (current === 1) {
        setVisibleCount2((prev) => (prev < 4 ? prev + 1 : prev));
        scrollRef2.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }

      if (current === 2) {
        setVisibleCount3((prev) => (prev < 9 ? prev + 1 : prev));
        scrollRef3.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }

      if (current === 3) {
        setVisibleCount4((prev) => (prev < 4 ? prev + 1 : prev));
        scrollRef4.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }

      if (current === 4) {
        setVisibleCount5((prev) => (prev < 3 ? prev + 1 : prev));
        scrollRef5.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }

      if (current === 5) {
        setVisibleCount6((prev) => (prev < 4 ? prev + 1 : prev));
        scrollRef6.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
        });
      }

      if (current === 6) {
        setVisibleCount7((prev) => (prev < 2 ? prev + 1 : prev));
        scrollRef7.current?.scrollIntoView({
          block: "end",
          behavior: "smooth",
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

  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
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

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-2xl text-center font-bold text-black">
          {activeSlide === 0
            ? " SALES"
            : activeSlide === 1
              ? "SALES"
              : activeSlide === 2
                ? " MAKE A SALE"
                : activeSlide === 3
                  ? " MAKE A SALE"
                  : "MAKE A SALE"}
        </h4>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 0
            ? "There are two kinds of sales."
            : activeSlide === 2
              ? "Let’s say that the ad you made earlier was really appreciated by many customers. So they have come to you to enquire further about Apple Watch."
              : ""}
        </p>

        <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 2
            ? "Your goal is to ensure that this potential customer becomes an actual customer."
            : ""}
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
              <div className="grid grid-cols-12 gap-y-5 place-items-center p-2">
                {visibleCount >= 1 && (
                  <React.Fragment>
                    <div className="col-span-6">
                      <MyImage path="/C59Images/IS.jpg" width={250} height={100} />
                    </div>
                    <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-3 ">
                      <p className="text-xl text-black font-medium">
                        <span className="font-bold">Inbound Sales </span>: This
                        is when the customer comes to you to further enquire
                        about the product with the intention to buy.
                      </p>
                      <p className="text-xl w-full text-black font-medium">
                        This is done through various methods:
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount >= 2 && (
                  <React.Fragment>
                    <div className="col-span-6">
                      <MyImage path="/C59Images/Word_of_Mouth.jpg"   width={250} height={100}/>
                    </div>
                    <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-10 ">
                      <p className="text-xl text-black font-medium">
                        <span className="font-bold">Word of Mouth </span>:
                        People who are aware of or have tried your product let
                        other potential customers know so that they can try as
                        well.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount >= 3 && (
                  <React.Fragment>
                    <div className="col-span-6">
                      <MyImage path="/C59Images/Ads.jpg"  width={250} height={100} />
                    </div>
                    <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-10 ">
                      <p className="text-xl text-black font-medium">
                        <span className="font-bold">Ads </span>: When you run
                        ads on media channels i.e. social media, print media
                        (newspapers, magazines, flyers, brochures), google ads,
                        or even audiovisual campaigns (ads on TV, radio, or even
                        website videos or YouTube), you promote your product so
                        that those who watch your ad become interested in what
                        you’re selling.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount >= 4 && (
                  <React.Fragment>
                    <div className="col-span-6">
                      <MyImage path="/C59Images/Content.jpg"   width={250} height={100}/>
                    </div>
                    <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-10 ">
                      <p className="text-xl text-black font-medium">
                        <span className="font-bold">Content </span>: When you
                        simply post content that reaches more and more people
                        over time, gets shared, and is appreciated, thus
                        increasing the number of customers who reach out to you.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                <div className="col-span-12 w-full ">
                  {4 > visibleCount && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-5 place-items-center p-2">
                {visibleCount2 >= 1 && (
                  <React.Fragment>
                    <div className="col-span-6">
                      <MyImage path="/C59Images/OS.jpg" />
                    </div>
                    <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-3 ">
                      <p className="text-xl text-black font-medium">
                        <span className="font-bold">Outbound Sales </span>: This
                        is when you reach out to the customer to convince them
                        to buy your product.
                      </p>
                      <p className="text-xl w-full text-black font-medium">
                        This is done through various methods as well:
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount2 >= 2 && (
                  <React.Fragment>
                    <div className="col-span-6">
                      <MyImage path="/C59Images/Outreach2.jpg" />
                    </div>
                    <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-10 ">
                      <p className="text-xl text-black font-medium">
                        <span className="font-bold">
                          Outreach through Phone Calls{" "}
                        </span>
                        : This is when you gather data of potential customers
                        through websites, personal references, partner
                        institutions and personally reach out to each and every
                        customer with a sales pitch or a script.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount2 >= 3 && (
                  <React.Fragment>
                    <div className="col-span-6">
                      <MyImage path="/C59Images/Reebok_Flashmob.jpg" />
                    </div>
                    <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-10 ">
                      <p className="text-xl text-black font-medium">
                        <span className="font-bold">Large Gatherings </span>:
                        Events are organised to bring many brands within similar
                        sectors of work under the same roof to sell products.
                        Participating in such an event exposes you to a whole
                        bunch of inbound sales as the customers come to your
                        exhibition. But in itself, this is an outbound sale as
                        you’ve to partner with the event organisers.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount2 >= 4 && (
                  <React.Fragment>
                    <div className="col-span-6">
                      <MyImage path="/C59Images/Socials.jpg" />
                    </div>
                    <div className=" col-span-6 w-full flex justify-center items-center flex-col gap-10 ">
                      <p className="text-xl text-black font-medium">
                        <span className="font-bold">Socials </span>: You can
                        also find people online who are looking for the solution
                        you’re offering. You can find them on community groups,
                        event groups, as well networking groups.
                      </p>

                      <p className="text-xl w-full text-black font-bold">
                        We will focus on inbound sales, especially content.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                <div className="col-span-12 w-full ">
                  {4 > visibleCount2 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef2}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-20 place-items-center p-2">
                {visibleCount3 >= 1 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-center flex-col gap-3 ">
                      <p className="text-2xl text-black font-bold">
                        Here’s the template for the script. Just write as you
                        see fit
                      </p>
                      <MyImage path="/C59Images/AppleWatch.jpeg" />
                    </div>
                  </React.Fragment>
                )}

                {visibleCount3 >= 2 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-center flex-col gap-3 ">
                      <h4 className="font-bold text-violet-900 text-2xl w-full">
                        SCENE{" "}
                      </h4>
                      <p className="text-2xl w-full text-black font-bold">
                        A customer walks into your retail store and approaches
                        you.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount3 >= 3 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-center flex-col gap-3 ">
                      <h4 className="font-bold w-full text-violet-900 text-2xl ">
                        INTRODUCE YOURSELF.
                      </h4>
                      <p className="text-xl text-black font-medium">
                        Hi! My name is{" "}
                        <input
                          type="text"
                          placeholder="write here... "
                          className="outline-0  border-b border-black px-2"
                        />
                        . I am the{" "}
                        <input
                          type="text"
                          placeholder="write here... "
                          className="outline-0  border-b border-black px-2"
                        />{" "}
                        here. How may I help you?
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount3 >= 4 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-start flex-col gap-3 ">
                      <h4 className="font-bold w-full text-violet-900 text-2xl ">
                        UNDERSTAND THE PROBLEM
                      </h4>
                      <p className="text-xl text-black font-medium w-[60%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Customer :</span> I
                        saw your ad on social platforms. I was thinking of
                        buying an Apple Watch. Can you please guide me through
                        this process?
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount3 >= 5 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-end flex-col gap-3 ">
                      <p className="text-xl text-black font-medium w-[60%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Seller :</span>{" "}
                        Sure! First, let me please understand your needs.{" "}
                        <input
                          type="text"
                          placeholder="write here... "
                          className="outline-0  text-lg border-b border-black px-2 min-w-60 "
                        />{" "}
                        (Ask a question to verify whether the customer has a
                        smartwatch already and is looking to switch or is new to
                        smartwatches altogether.)
                      </p>
                    </div>
                  </React.Fragment>
                )}

                <div className="col-span-12 w-full ">
                  {5 > visibleCount3 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>

                <div ref={scrollRef3}></div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-20 place-items-center p-2">
                {visibleCount4 >= 1 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-start flex-col gap-5 ">
                      <h4 className="font-bold w-full text-violet-900 text-2xl ">
                        VERIFY THE BUDGET & EXPLAIN THE FEATURES
                      </h4>
                      <p className="text-xl text-black font-medium w-[60%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Seller :</span>{" "}
                        Alright. Thanks for sharing this with me. What kind of
                        price range do you have in mind?
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount4 >= 2 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-end flex-col gap-5 ">
                      <p className="text-xl text-black font-medium w-[40%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Customer :</span>{" "}
                        I’m looking for a smartwatch between $400 to $700. But
                        I’d like to see what options you’ve for installments.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount4 >= 3 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-start flex-col gap-5 ">
                      <p className="text-xl  text-black font-medium w-[60%]">
                        <span className="font-bold text-2xl">Seller :</span>{" "}
                        That’s perfect. I will definitely guide you through this
                        process.{" "}
                        <input
                          type="text"
                          placeholder="write here... "
                          className="outline-0  text-lg border-b border-black px-2 min-w-100 "
                        />{" "}
                        (mention the features of different Apple Watches in this
                        price range and the differences between each).{" "}
                        <Link
                          href="https://www.apple.com/in/watch/compare/"
                          className="text-blue-400"
                        >
                          Here is a resource to consult.
                        </Link>
                      </p>
                    </div>
                  </React.Fragment>
                )}
                {visibleCount4 >= 4 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-end flex-col gap-5 ">
                      <p className="text-xl text-black font-medium w-[40%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Customer :</span>{" "}
                        Thanks. That’s very helpful.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                <div className="col-span-12 w-full ">
                  {4 > visibleCount4 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef4}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-20 place-items-center p-2">
                {visibleCount5 >= 1 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-start flex-col gap-5 ">
                      <h4 className="font-bold w-full text-violet-900 text-2xl ">
                        GIVE PAYMENT INFORMATION
                      </h4>
                      <p className="text-xl text-black font-medium w-[60%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Seller :</span>{" "}
                        Since you asked about the methods of payment, we have
                        many flexible ways to help you pay for the product you
                        love.{" "}
                        <input
                          type="text"
                          placeholder="write here... "
                          className="outline-0  text-lg border-b border-black px-2 min-w-100 "
                        />{" "}
                        (mention the different ways the customer can make a
                        payment. Let them know the simple conditions of the
                        installments feature).{" "}
                        <Link
                          href="https://www.apple.com/in/shop/ways-to-buy"
                          className="text-blue-400"
                        >
                          Here is a resource to consult.
                        </Link>
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount5 >= 2 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-end flex-col gap-5 ">
                      <p className="text-xl text-black font-medium w-[40%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Customer :</span>{" "}
                        Wow, that makes my life very easy.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount5 >= 3 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-start flex-col gap-5 ">
                      <p className="text-xl  text-black font-medium w-[60%]">
                        <span className="font-bold text-2xl">Seller :</span>
                        That’s what we are here for! We are more than happy to
                        assist you in the process.
                      </p>
                    </div>
                  </React.Fragment>
                )}

                <div className="col-span-12 w-full ">
                  {3 > visibleCount5 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef5}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-20 place-items-center p-2">
                {visibleCount6 >= 1 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-start flex-col gap-5 ">
                      <h4 className="font-bold w-full text-violet-900 text-2xl ">
                        GIVE PAYMENT INFORMATION
                      </h4>
                      <p className="text-xl text-black font-medium w-[60%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Seller :</span>{" "}
                        <input
                          type="text"
                          placeholder="write here... "
                          className="outline-0  text-lg border-b border-black px-2 min-w-100 "
                        />{" "}
                        (ask a question about how they’d like to finally pay.
                        Consult for all personal information if they say yes to
                        immediate payment. If they decide to revisit to
                        purchase, make sure to get at least their email address
                        or phone number for promotional offers and/or updates)
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount6 >= 2 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-end flex-col gap-5 ">
                      <p className="text-xl text-black font-medium w-[40%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Customer :</span>{" "}
                        Well, you’ve been very genuine and helpful. Thanks so
                        much!
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount6 >= 3 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-start flex-col gap-5 ">
                      <h4 className="font-bold w-full text-violet-900 text-2xl ">
                        ADD INFORMATION ABOUT SERVICE
                      </h4>
                      <p className="text-xl  text-black font-medium w-[60%]">
                        <span className="font-bold text-2xl">Seller : </span>
                        Before you go, let me also tell you about our services
                        post purchase.{" "}
                        <input
                          type="text"
                          placeholder="write here... "
                          className="outline-0  text-lg border-b border-black px-2 min-w-100 "
                        />{" "}
                        (add information about who to contact where for any
                        product support. Inform about warranty as well as what's
                        not included). Here are two resources to consult.{" "}
                        <Link
                          href="https://support.apple.com/ "
                          className="text-blue-400"
                        >
                          SUPPORT. COMMUNITY.
                        </Link>
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount6 >= 4 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-end flex-col gap-5 ">
                      <p className="text-xl  text-black font-medium w-[40%]">
                        <span className="font-bold text-2xl">Customer :</span>
                        Oh thanks for giving me that important piece of
                        information without asking!
                      </p>
                    </div>
                  </React.Fragment>
                )}

                <div className="col-span-12 w-full ">
                  {4 > visibleCount6 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef6}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-20 place-items-center p-2">
                {visibleCount7 >= 1 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%] flex justify-center items-start flex-col gap-5 ">
                      <h4 className="font-bold w-full text-violet-900 text-2xl ">
                        ASK FOR TESTIMONIALS
                      </h4>
                      <p className="text-xl text-black font-medium w-[60%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Seller :</span> And
                        finally, while enjoying the watch, we’d be very pleased
                        to know how you’re doing with our product!{" "}
                        <input
                          type="text"
                          placeholder="write here... "
                          className="outline-0  text-lg border-b border-black px-2 min-w-100 "
                        />{" "}
                        (add information about where and how to add reviews,
                        give ratings, or simply let customer service know how
                        you appreciate this product).
                      </p>
                    </div>
                  </React.Fragment>
                )}

                {visibleCount7 >= 2 && (
                  <React.Fragment>
                    <div className=" col-span-12 w-[80%]  flex justify-center items-end flex-col gap-5 ">
                      <p className="text-xl text-black font-medium w-[40%] animate_fadeInUp">
                        <span className="font-bold text-2xl">Customer :</span>{" "}
                        Will do! Thanks!
                      </p>
                    </div>
                  </React.Fragment>
                )}

                <div className="col-span-12 w-full ">
                  {2 > visibleCount7 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                  <div ref={scrollRef7}></div>
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
