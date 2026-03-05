"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import SlideData from "@/layout-C64-L1-A2/pointer.json";
import Slide3Data from "@/layout-C64-L1-A2/pointer3.json";
import Welldone from "@/components/wellDone";
import MyImage from "@/components/MyImage";


const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRef3 = useRef<HTMLDivElement>(null);
  const scrollRef4= useRef<HTMLDivElement>(null);
  const scrollRef5= useRef<HTMLDivElement>(null);
  const scrollRef6= useRef<HTMLDivElement>(null);
  const scrollRef7= useRef<HTMLDivElement>(null);
  const scrollRef8= useRef<HTMLDivElement>(null);
  const scrollRef9= useRef<HTMLDivElement>(null);
  const scrollRef10= useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [visibleCount3, setVisibleCount3] = useState(1);
  const [visibleCount4, setVisibleCount4] = useState(1);
  const [visibleCount5, setVisibleCount5] = useState(1);
  const [visibleCount6, setVisibleCount6] = useState(1);
  const [visibleCount7, setVisibleCount7] = useState(1);
  const [visibleCount8, setVisibleCount8] = useState(1);
  const [visibleCount9, setVisibleCount9] = useState(1);
  const [visibleCount10, setVisibleCount10] = useState(1);



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
        setVisibleCount((prev) => (prev < SlideData.length *2 ? prev + 1 : prev));

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

       if (current === 3) {
        setVisibleCount4((prev) =>
          prev <  2 ? prev + 1 : prev,
        );

        scrollRef4.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

       if (current === 4) {
        setVisibleCount5((prev) =>
          prev <  2 ? prev + 1 : prev,
        );

        scrollRef5.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

        if (current === 5) {
        setVisibleCount6((prev) =>
          prev <  2 ? prev + 1 : prev,
        );

        scrollRef6.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

        if (current === 6) {
        setVisibleCount7((prev) =>
          prev <  2 ? prev + 1 : prev,
        );

        scrollRef7.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }


        if (current === 7) {
        setVisibleCount8((prev) =>
          prev <  2 ? prev + 1 : prev,
        );

        scrollRef8.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }

       if (current === 8) {
        setVisibleCount9((prev) =>
          prev <  2 ? prev + 1 : prev,
        );

        scrollRef9.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }


       if (current === 9) {
        setVisibleCount10((prev) =>
          prev <  6 ? prev + 1 : prev,
        );

        scrollRef10.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [visibleCount, visibleCount3,visibleCount5,visibleCount4,  activeSlide]);

  // Auto height update
  useEffect(() => {
    const timer = setTimeout(() => {
      swiperRef.current?.updateAutoHeight();
    }, 0);

    return () => clearTimeout(timer);
  }, [visibleCount, visibleCount3,visibleCount5,visibleCount4,  activeSlide]);

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
   {
    activeSlide === 0 ?"QUIZ ON BALANCING MONEY": activeSlide === 1 ?"Waiting on Some Lemonade": activeSlide ===2 ?" Bananas Break-Even": activeSlide === 3 ?"Quick Sale Profit": activeSlide === 4?"Long Waiting Time":activeSlide === 5 ?"Perishable Item Quick Sale": activeSlide ===6 ?"Small Profit First": activeSlide === 7?"Price Too High": activeSlide ===8?"Big Bundle Profit":activeSlide===9?"SUMMARY":""
   }
        </h4>

        {/* <p className="text-xl font-medium w-[80%] text-center text-black ">
          Create a presentation strategy for your product. It can be a product
          you’ve already created or a product you’d like to create.
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
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
                <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6  w-full flex justify-center items-center flex-col gap-5 ">
                  <p className="text-2xl  text-black w-full">
               I’ll list a few scenarios and you tell me: <span className="font-bold"> Did Timothy do the right thing? Did he make a profit or did he lose money?</span>
                  </p>

                </div>
              </div>
            </SwiperSlide>

   

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-4 place-items-center p-2">
 <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>

                <div className=" col-span-6   w-full flex justify-center items-center flex-col  gap-4 ">
                  <p className="text-2xl text-black w-full">
               Timothy made 5 glasses of lemonade on the first day. But only 3 glasses got sold. So he decided to make it on the go to avoid losing. The next day,  all the fresh lemonade got sold and he made a profit.
                  </p>
                  {SlideData.map((item, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount > index;
                    const showAnswer = visibleCount > stepIndex + 1;

                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-start items-start gap-2 "
                      >
                        {showQuestion && (
                          <h3 className="text-xl  text-black font-bold w-full">
                            {item.ques}
                          </h3>
                        )}

                        {showAnswer && (
                         <p className="text-xl font-medium text-black/80">{item.ans}</p>
                        )}
                      </div>
                    );
                  })}

                   <div className="col-span-12 w-full">
                  {SlideData.length *2 > visibleCount && (
                    <p className="text-gray-800 animate_fadeInUp mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="min-h-10 " ref={scrollRef}></div>
                </div>

               
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">

                 <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-3 ">

                    <p className="text-2xl   text-black">Timothy bought a dozen bananas for $5. Then he sold them for the same amount as the shelf life of bananas is some days.</p>
                  {Slide3Data.map((item, index) => {
                    const stepIndex = index * 2;
                    const showQuestion = visibleCount3 > stepIndex;
                    const showAnswer = visibleCount3 > stepIndex + 1;

                    return (
                      <div
                        key={index}
                        className="w-full flex flex-col justify-center items-center gap-2 "
                      >

                      
                        {showQuestion && (
                          <h3 className="text-2xl text-black/80 font-bold w-full">
                            {item.title}
                          </h3>
                        )}
                      
                          {showAnswer &&
                          
                              <p  className="text-xl text-black">
                                {item.answers}
                              </p>
                  }
                 
                      </div>
                    );
                  })}
                <div className="col-span-12 w-full">
                  {Slide3Data.length * 2 > visibleCount3 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef3}></div>
                </div>

              </div>
            </SwiperSlide>

              <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">

                 <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-3 ">

                    <p className="text-2xl   text-black">Timothy bought strawberries for $4 and sold them immediately at $6.</p>
                
                      <div
                      
                        className="w-full flex flex-col justify-center items-center gap-2 "
                      >

                      
                    {
                      visibleCount4 >= 1 &&(
                          <h3 className="text-2xl text-black/80 font-bold w-full">
                         Did he make a good decision?

                          </h3>
                        
                      )
                    }
                
                      
                       {
                         visibleCount4 >= 2 &&(

                              <p  className="text-xl w-full text-black">
                              Yes, he made a quick profit.

                              </p>
                         )
                       }   
                          
              
                 
                      </div>
                    
                <div className="col-span-12 w-full">
                  { 2 > visibleCount4 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef4}></div>
                </div>

              </div>
            </SwiperSlide>


              <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">

                 <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-3 ">

                    <p className="text-2xl   text-black">Timothy bought corn for $2 but didn’t sell for almost 5 days as it was priced at $3. Because of their shelf life, he had to sell at $0.90.</p>
                
                      <div
                      
                        className="w-full flex flex-col justify-center items-center gap-2 "
                      >

                      
                    {
                      visibleCount5 >= 1 &&(
                          <h3 className="text-2xl text-black/80 font-bold w-full">
                       Did he make a good decision?

                          </h3>
                        
                      )
                    }
                
                      
                       {
                         visibleCount5 >= 2 &&(

                              <p  className="text-xl w-full text-black">
                             No, waiting too long led to losing money.

                              </p>
                         )
                       }   
                          
              
                 
                      </div>
                    
                <div className="col-span-12 w-full">
                  { 2 > visibleCount5 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef5}></div>
                </div>

              </div>
            </SwiperSlide>


             <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">

                 <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-3 ">

                    <p className="text-2xl   text-black">Timothy bought some spinach for $3 but some of its leaves got mushy. So he decided to sell it for $2 instead. It got sold.</p>
                
                      <div
                      
                        className="w-full flex flex-col justify-center items-center gap-2 "
                      >

                      
                    {
                      visibleCount6 >= 1 &&(
                          <h3 className="text-2xl text-black/80 font-bold w-full">
                      Did he make a good decision?
                          </h3>
                        
                      )
                    }
                
                      
                       {
                         visibleCount6 >= 2 &&(

                              <p  className="text-xl w-full text-black">
                          Yes, it’s always good to sell perishable items as soon as possible to avoid losing money.

                              </p>
                         )
                       }   
                          
              
                 
                      </div>
                    
                <div className="col-span-12 w-full">
                  { 2 > visibleCount6 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef6}></div>
                </div>

              </div>
            </SwiperSlide>



               <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">

                 <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-3 ">

                    <p className="text-2xl   text-black">Timothy sold a small pack of almonds for $1 even though he bought it for $1. Later, the customer bought a bigger pack too.</p>
                
                      <div
                      
                        className="w-full flex flex-col justify-center items-center gap-2 "
                      >

                      
                    {
                      visibleCount7 >= 1 &&(
                          <h3 className="text-2xl text-black/80 font-bold w-full">
                    Did she make a good decision?
                          </h3>
                        
                      )
                    }
                
                      
                       {
                         visibleCount7 >= 2 &&(

                              <p  className="text-xl w-full text-black">
                        Yes, sometimes selling small amounts can lead to selling larger amounts later.

                              </p>
                         )
                       }   
                          
              
                 
                      </div>
                    
                <div className="col-span-12 w-full">
                  { 2 > visibleCount7 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef7}></div>
                </div>

              </div>
            </SwiperSlide>


             <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">

                 <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-3 ">

                    <p className="text-2xl   text-black">Timothy made pineapple smoothies for $3 each. He tried selling at $6 for 2 days, but without any success. So he changed the price to $4. Customers then bought some smoothies.</p>
                
                      <div
                      
                        className="w-full flex flex-col justify-center items-center gap-2 "
                      >

                      
                    {
                      visibleCount8 >= 1 &&(
                          <h3 className="text-2xl text-black/80 font-bold w-full">
                  Did he make a good decision?
                          </h3>
                        
                      )
                    }
                
                      
                       {
                         visibleCount8 >= 2 &&(

                              <p  className="text-xl w-full text-black">
                      Yes, he made some profit by selling at a reasonable price on time.

                              </p>
                         )
                       }   
                          
              
                 
                      </div>
                    
                <div className="col-span-12 w-full">
                  { 2 > visibleCount8 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef8}></div>
                </div>

              </div>
            </SwiperSlide>
            

             <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">

                 <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-3 ">

                    <p className="text-2xl   text-black">Timothy prepared a main course worth $25, but sold it with a complementary dessert for $30.</p>
                
                      <div
                      
                        className="w-full flex flex-col justify-center items-center gap-2 "
                      >

                      
                    {
                      visibleCount9 >= 1 &&(
                          <h3 className="text-2xl text-black/80 font-bold w-full">
                 Did he make a good decision?
                          </h3>
                        
                      )
                    }
                
                      
                       {
                         visibleCount9 >= 2 &&(

                              <p  className="text-xl w-full text-black">
                    Yes, bundling items can increase profit.

                              </p>
                         )
                       }   
                          
              
                 
                      </div>
                    
                <div className="col-span-12 w-full">
                  { 2 > visibleCount9 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef9}></div>
                </div>

              </div>
            </SwiperSlide>


              <SwiperSlide>
              <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">

                 <div className="col-span-6">
                  <MyImage path="/C64Images" />
                </div>
                <div className=" col-span-6 w-full flex justify-center items-start flex-col gap-3 ">

                      <div
                      
                        className="w-full flex flex-col justify-center items-center gap-2 "
                      >

                      
                    {
                      visibleCount10 >= 1 &&(
                          <h3 className="text-2xl text-black/80 font-bold w-full">
            When is it better to sell, at break-even or by losing a small percentage of money?
                          </h3>
                        
                      )
                    }
                
                      
                       {
                         visibleCount10 >= 2 &&(

                              <p  className="text-xl w-full text-black">
                 When items are perishable, it’s better to sell at break-even or lose a small percentage of money.

                              </p>
                         )
                       }   
                          

                               
                    {
                      visibleCount10 >= 3 &&(
                          <h3 className="text-2xl text-black/80 font-bold w-full">
           Why is it a good idea to sell items together as a bundle?
                          </h3>
                        
                      )
                    }
                
                      
                       {
                         visibleCount10 >= 4 &&(

                              <p  className="text-xl w-full text-black">
               Bundling encourages customers to buy more, makes shopping easier, and can increase total profit.

                              </p>
                         )
                       }   
                          

                                        
                    {
                      visibleCount10 >= 5 &&(
                          <h3 className="text-2xl text-black/80 font-bold w-full">
           What happens if you wait too long for a higher price?
                          </h3>
                        
                      )
                    }
                
                      
                       {
                         visibleCount10 >= 6 &&(

                              <p  className="text-xl w-full text-black">
             Items might not be usable so you might lose.

                              </p>
                         )
                       }   
                          
              
                 
                      </div>
                    
                <div className="col-span-12 w-full">
                  { 6 > visibleCount10 && (
                    <p className="text-gray-800 mt-3 text-center italic font-normal">
                      (Enter to show more points)
                    </p>
                  )}
                </div>
                <div className="" ref={scrollRef10}></div>
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
              activeSlide < 9? "visible" : "invisible"
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
