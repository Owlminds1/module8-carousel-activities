"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import Welldone from "@/components/wellDone";

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
        setVisibleCount((prev) => (prev < 4 ? prev + 1 : prev));

        scrollRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      if (current === 1) {
        setVisibleCount2((prev) => (prev < 6 ? prev + 1 : prev));

        scrollRef2.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 2) {
        setVisibleCount3((prev) => (prev < 4 ? prev + 1 : prev));

        scrollRef3.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 3) {
        setVisibleCount4((prev) => (prev < 3 ? prev + 1 : prev));

        scrollRef4.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 4) {
        setVisibleCount5((prev) => (prev < 13 ? prev + 1 : prev));

        scrollRef5.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

      if (current === 5) {
        setVisibleCount6((prev) => (prev < 6 ? prev + 1 : prev));

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
            ? "SALES CALL"
            : activeSlide === 1
              ? "SALES SITUATION"
              : activeSlide === 2
                ? "SALES SITUATION"
                : activeSlide === 3
                  ? "SALES SITUATION"
                  : activeSlide === 4
                    ? "SALES SITUATION"
                    : "SALES SITUATION"}
        </h4>

        {/* <p className="text-xl font-medium w-[80%] text-center text-black ">
          {activeSlide === 1
            ? "Let’s watch the video!"
            : activeSlide === 4
              ? "Fill in your pitch in the blanks."
              : ""}
        </p> */}
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
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  {visibleCount >= 1 && (
                    <p className="text-xl font-bold text-black w-full">
                      What is a sales call?
                    </p>
                  )}

                  {visibleCount >= 2 && (
                    <p className="text-xl text-black w-full">
                      It’s a form of communication between the seller and the
                      buyer to promote a product to be sold.
                    </p>
                  )}

                  {visibleCount >= 3 && (
                    <p className="text-xl font-bold text-black w-full">
                      We have already written a sales script. Let’s modify it to
                      make it fit a phone conversation (outbound sale)!
                    </p>
                  )}

                  {visibleCount >= 4 && (
                    <p className="text-xl font-bold text-black w-full">
                      I will be the buyer (instructor). You can be the seller
                      (student)
                    </p>
                  )}

                  {4 > visibleCount && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  {visibleCount2 >= 1 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> SCENE : </span> You have to
                      make an outbound call to convince a customer to buy your
                      AirTag. You’ve their details because they browsed your
                      products on the website. You’re calling to “make the sale.
                    </p>
                  )}

                  {visibleCount2 >= 2 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl"> ATTENTION </span>
                      <p className="text-xl text-black w-full">
                        (Grab the buyer's attention immediately with a
                        personalized comment, a question about a recent trend,
                        or a brief statement of the company's USP and values)
                      </p>

                      <textarea
                        placeholder="write here..."
                        rows={3}
                        className="text-lg text-black w-[90%] outline-0 border-2 p-2 rounded-lg "
                      />
                    </div>
                  )}

                  {visibleCount2 >= 3 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl">
                        {" "}
                        INTRODUCE YOURSELF{" "}
                      </span>
                      <p className="text-xl text-black w-full">
                        (Hi! My name is{" "}
                        <input
                          placeholder="write here..."
                          className="text-lg text-black outline-0 border-b border-black px-2 placeholder:font-normal   "
                        />
                        . I am the{" "}
                        <input
                          placeholder="write here..."
                          className="text-lg text-black outline-0 border-b border-black px-2  placeholder:font-normal  "
                        />{" "}
                        here. Am I speaking with (salutation){" "}
                        <input
                          placeholder="write here..."
                          className="text-lg text-black outline-0 border-b border-black px-2  placeholder:font-normal  "
                        />
                        ?)
                      </p>

                      <textarea
                        placeholder="write here..."
                        rows={3}
                        className="text-lg text-black w-[90%] outline-0 border-2 p-2 rounded-lg "
                      />
                    </div>
                  )}

                  {visibleCount2 >= 4 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Customer : </span> Sure. Who
                      is this?
                    </p>
                  )}

                  {visibleCount2 >= 5 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl">
                        {" "}
                        INTRODUCE THE BRAND.{" "}
                      </span>
                      <p className="text-xl text-black w-full">
                        (Make a statement about the product's USP or unique
                        features. Mention that you noticed the customer wanting
                        to buy the product on the website)
                      </p>

                      <textarea
                        placeholder="write here..."
                        rows={3}
                        className="text-lg text-black w-[90%] outline-0 border-2 p-2 rounded-lg "
                      />
                    </div>
                  )}

                  {visibleCount2 >= 6 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Customer : </span> Yeah. I
                      wasn’t sure about the budget since the pricing was too
                      high compared to some other tags on the internet.
                    </p>
                  )}

                  {6 > visibleCount2 && (
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
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  {visibleCount3 >= 1 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl"> INTEREST</span>
                      <p className="text-xl text-black w-full">
                        (Spark their interest by relating your product or
                        service to their precise requirements and problems)
                      </p>
                    </div>
                  )}

                  {visibleCount3 >= 2 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl">
                        {" "}
                        UNDERSTAND THE PROBLEM
                      </span>
                      <p className="text-xl text-black w-full">
                        (Ask a question to verify whether the customer has an
                        RFID tag already and is looking to switch or is new to
                        tags altogether. Mention how you genuinely understand
                        the challenge of choosing when so many products are out
                        in the market)
                      </p>
                    </div>
                  )}

                  {visibleCount3 >= 3 && (
                    <div className="flex flex-col gap-2 w-full">
                      <span className="font-bold text-xl">
                        {" "}
                        INTRODUCE YOURSELF{" "}
                      </span>

                      <p className="text-xl text-black w-full">
                        <span className="font-bold">Seller:</span> I can
                        understand!.{" "}
                        <input
                          placeholder="write here..."
                          className="text-lg w-full text-black outline-0 border-b border-black px-2  placeholder:font-normal  "
                        />
                      </p>
                    </div>
                  )}

                  {visibleCount3 >= 4 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Customer : </span> I’m
                      looking for a tag for up to $50. But I want a quality tag,
                      not something that’s not durable.
                    </p>
                  )}

                  {4 > visibleCount3 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef3}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  {visibleCount4 >= 1 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl"> DESIRE</span>
                      <h3 className="font-bold text-xl">
                        {" "}
                        EXPLAIN THE FEATURES WITHIN THIS BUDGET
                      </h3>
                      <p className="text-xl text-black w-full">
                        (Instigate interest by showcasing the benefits and
                        returns your product or service provides, focusing on
                        concrete results that solve their problems. Whenever
                        possible, use data points to add authenticity. Mention
                        the features of different tags in this price range and
                        the differences between each, but emphasize on the best
                        fit)
                      </p>
                    </div>
                  )}

                  {visibleCount4 >= 2 && (
                    <div className="flex flex-col gap-2">
                      <p className="text-xl text-black w-full">
                        <span className="font-bold">Seller:</span> Alright.
                        Thanks for sharing this with me. I will definitely guide
                        you through this process.{" "}
                        <input
                          placeholder="write here..."
                          className="text-lg w-[90%] text-black outline-0 border-b border-black px-2  placeholder:font-normal  "
                        />{" "}
                        .{" "}
                        <Link
                          href="https://www.apple.com/in/airtag/"
                          target="blank"
                          className="text-blue-400"
                        >
                          I can share a resource to consult for any further
                          information.
                        </Link>
                      </p>
                    </div>
                  )}

                  {visibleCount4 >= 3 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Customer : </span> Thanks.
                      That’s very helpful. But perhaps I will contact you again
                      as I really have to go pick someone up!
                    </p>
                  )}

                  {3 > visibleCount4 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef4}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  {visibleCount5 >= 1 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl"> ACTION</span>

                      <p className="text-xl text-black w-full">
                        (Encourage the buyer to take the next action for
                        continued engagement. This includes scheduling a demo, a
                        follow-up conversation, or downloading resources.
                        “Please go through our website to join the community
                        where you will find many of your product-related
                        questions answered. Ask if you can follow up after the
                        pick up”)
                      </p>
                    </div>
                  )}

                  {visibleCount5 >= 2 && (
                    <div className="flex flex-col gap-2">
                      <p className="text-xl text-black w-full">
                        <span className="font-bold">Seller:</span> Oh I totally
                        understand! Can I give you a call later if you’re in the
                        middle of things? I would just like to let you know
                        though that we have a promotional offer that’s
                        applicable to incoming calls!
                      </p>
                    </div>
                  )}

                  {visibleCount5 >= 3 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Customer : </span> Ah. What’s
                      that?
                    </p>
                  )}

                  {visibleCount5 >= 4 && (
                    <p className="text-xl text-black w-full">
                      (Come up with a promotional offer: a discount,extended
                      warranty, another product and so on)
                    </p>
                  )}

                  {visibleCount5 >= 5 && (
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-xl text-black w-full">
                        <span className="font-bold">Seller:</span>{" "}
                        <input
                          placeholder="write here..."
                          className="text-lg w-[90%] text-black outline-0 border-b border-black px-2  placeholder:font-normal  "
                        />
                      </p>
                    </div>
                  )}

                  {visibleCount5 >= 6 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Customer : </span> Oh! I
                      won’t want to miss that!
                    </p>
                  )}

                  {visibleCount5 >= 7 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl">
                        {" "}
                        GIVE PAYMENT INFORMATION
                      </span>

                      <p className="text-xl text-black w-full">
                        (mention the different ways the customer can make a
                        payment).{" "}
                        <Link
                          href="https://www.apple.com/in/shop/buy-airtag/airtag/1-pack"
                          target="blank"
                          className="text-blue-300"
                        ></Link>{" "}
                        (Here is a resource to consult)
                      </p>
                    </div>
                  )}

                  {visibleCount5 >= 8 && (
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-xl text-black w-full">
                        <span className="font-bold">Seller:</span> Amazing! I
                        will just take another minute then you can be on your
                        way to pick up! Since you asked about the methods of
                        payment, we have many flexible ways to help you pay for
                        the product you love.{" "}
                        <input
                          placeholder="write here..."
                          className="text-lg w-[90%] text-black outline-0 border-b border-black px-2  placeholder:font-normal  "
                        />
                      </p>
                    </div>
                  )}

                  {visibleCount5 >= 9 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Customer : </span> Wow, that
                      makes my life very easy.
                    </p>
                  )}

                  {visibleCount5 >= 10 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Seller : </span> That’s what
                      we are here for! We are more than happy to assist you in
                      the process.
                    </p>
                  )}

                  {visibleCount5 >= 11 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl"> MAKE A SALE</span>

                      <p className="text-xl text-black w-full">
                        (ask a question about how they’d like to finally pay.
                        Consult for all personal information if they say yes to
                        immediate payment. If they decide to revisit to
                        purchase, make sure to get at least their email address
                        or phone number for promotional offers and/or updates)
                      </p>
                    </div>
                  )}

                  {visibleCount5 >= 12 && (
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-xl text-black w-full">
                        <span className="font-bold">Seller:</span>{" "}
                        <input
                          placeholder="write here..."
                          className="text-lg w-[70%] text-black outline-0 border-b border-black px-2  placeholder:font-normal  "
                        />
                      </p>
                    </div>
                  )}

                  {visibleCount5 >= 13 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Customer : </span> Well,
                      you’ve been very genuine and helpful. Thanks so much!
                    </p>
                  )}

                  {13 > visibleCount5 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef5}></div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className=" col-span-12  w-[50%] flex justify-center items-center flex-col gap-5 ">
                  {visibleCount6 >= 1 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl">
                        {" "}
                        ADD INFORMATION ABOUT SERVICE
                      </span>

                      <p className="text-xl text-black w-full">
                        (add information about who to contact where for any
                        product support. Inform about warranty as well as what's
                        not included).{" "}
                        <Link
                          href="https://www.apple.com/in/contact/"
                          target="blank"
                          className="text-blue-300"
                        >
                          Here are two resources to consult. SUPPORT. COMMUNITY.
                        </Link>
                      </p>
                    </div>
                  )}

                  {visibleCount6 >= 2 && (
                    <div className="flex flex-col gap-2">
                      <p className="text-xl text-black w-full">
                        <span className="font-bold">Seller:</span> Before you
                        go, let me also tell you about our services post
                        purchase.
                        <input
                          placeholder="write here..."
                          className="text-lg w-[90%] text-black outline-0 border-b border-black px-2  placeholder:font-normal  "
                        />
                      </p>
                    </div>
                  )}

                  {visibleCount6 >= 3 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Customer : </span> Oh thanks
                      but I really have to go pick someone up now! (Note: If the
                      customer has to go, don’t insist on staying. Just make
                      sure to close with a brief statement about testimonials
                      and contact information.)
                    </p>
                  )}

                 {visibleCount6 >= 4 && (
                    <div className="flex flex-col gap-2">
                      <span className="font-bold text-xl">
                        {" "}
                      CONCLUDE
                      </span>

                      <p className="text-xl text-black w-full">
                        (conclude the call by thanking the customer for their time and making sure they know you can be contacted for any post purchase questions. Add a line about reviewing the product).

                      </p>
                    </div>
                  )}

                  {visibleCount6 >= 5 && (
                    <div className="flex flex-col gap-2 w-full">
                      <p className="text-xl text-black w-full">
                        <span className="font-bold">Seller:</span>{" "}
                        <input
                          placeholder="write here..."
                          className="text-lg w-[90%] text-black outline-0 border-b border-black px-2  placeholder:font-normal  "
                        />
                      </p>
                    </div>
                  )}

                  {visibleCount6 >= 6 && (
                    <p className="text-xl text-black w-full">
                      <span className="font-bold"> Customer : </span> Will do! Thanks!
                    </p>
                  )}

                  

                  {6 > visibleCount6 && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}

                  <div className="" ref={scrollRef6}></div>
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
              activeSlide < 5 ? "visible" : "invisible"
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
