"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import  React, {  useRef, useState } from "react";
import SlideData from "@/layout-C59-L1-AA/slideData.json";

import Welldone from "@/components/wellDone";

import MyImage from "@/components/MyImage";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  const [show,setShow]= useState(false)

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
    setShow(false)
  };

  const  handleRevel = ()=>{
    setShow(true)
    if(activeSlide === SlideData.length-1){
      setTimeout(()=>{
setOpen(true)
      },3000)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center p-5 flex-col gap-5">
      <div className="flex justify-center items-center p-5 flex-col gap-3">
        <h4 className="text-3xl text-center font-bold text-black">
          GUESS THE PRODUCT
        </h4>

        <p className="text-xl font-medium text-center text-black ">
          So now you get to look at images of brands you know and see if you can
          guess the product!
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
            {SlideData.map((item, index) => (
              <SwiperSlide>
                <div className="grid grid-cols-12 gap-y-10 place-items-center p-2">
                  <div className="col-span-12 flex justify-center items-center w-full">
                    <MyImage path={item.image} />
                  </div>

{
  show ? 
  <React.Fragment>
    <div className="col-span-12 w-full text-center text-xl font-bold"> BRAND REVEAL </div>
    <div className="col-span-6 flex justify-center items-center w-full">
                    <MyImage path={item.Revealimage} />
                  </div>
                  <div className="col-span-6 w-full">
                    <p className="text-black text-xl animate_fadeInUp ">
                      {item.text}
                    </p>
                  </div>
  </React.Fragment>
  :
 <div className="w-full text-center  col-span-12">
   <button onClick={handleRevel} className="bg-violet-900 cursor-pointer active:scale-95 transition-all duration-300 text-white px-5 py-2 rounded-lg text-lg">
    BRAND REVEAL 
  </button>
 </div>
}

              
                </div>
              </SwiperSlide>
            ))}
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
              activeSlide < SlideData.length-1 ? "visible" : "invisible"
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
