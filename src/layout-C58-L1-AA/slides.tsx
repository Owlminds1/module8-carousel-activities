"use client";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import MyImage from "@/components/MyImage";

import Welldone from "@/components/wellDone";

const Slide = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const [activeSlide, setActiveSlide] = useState(0);

  const [bgCorrect, setBgCorrect] = useState<HTMLAudioElement>();
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

  // Auto height update
  useEffect(() => {
    swiperRef.current?.updateAutoHeight();
  }, [activeSlide]);

  useEffect(() => {
    setBgCorrect(() => new Audio("/sound/correct.mp3"));
  }, []);

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
          SUPERHEROES AS PROBLEM-SOLVERS
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
                <div className=" col-span-12 w-[50%] flex justify-center items-center flex-col gap-8 ">
                  <ul className="list-disc w-full space-y-3 px-2">
                    <li className="text-black text-xl animate_fadeInUp">
                      I will give you two superheroes you might know.
                    </li>

                    <li className="text-black text-xl animate_fadeInUp">
                      I will read out their characteristics.
                    </li>

                    <li className="text-black text-xl animate_fadeInUp">
                      You have to make a superprofile profile detailing: what
                      their superpower is, what they do with it, why they do it,
                      how they do it.
                    </li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="grid grid-cols-12 gap-5 place-items-center p-2">
                <div className=" col-span-12 border border-black  w-[60%] flex justify-center items-center flex-col gap-5 p-2 rounded-lg ">
                  <h4 className="font-bold text-2xl text-center">SPIDERMAN</h4>
                  <MyImage path="/C58Images/Spiderman.jpg" />
                  <ul className="list-disc w-[90%] space-y-3 px-2">
                    <li className="text-black text-xl animate_fadeInUp">
                      Arachnid abilities: can lift 10 tons, leap and move at
                      incredible speeds with high accuracy. Has an inner spider
                      sense to detect danger in advance.
                    </li>

                    <li className="text-black text-xl animate_fadeInUp">
                      Lives and fights to help others with the wisdom of “with
                      great power comes great responsibility”
                    </li>
                  </ul>
                </div> 
                
                <div className=" col-span-12 w-[55%] flex justify-center items-center flex-col gap-5 ">
                 <p className="text-lg w-full text-black/80">Note to the instructor: Please read out the characteristics slowly for students to take notes.</p>
                 
                   <p className="text-xl w-full text-black">“With spider-like abilities, science genius Peter Parker swings above it all as Spider-Man, costumed champion of the innocent who lives and fights with the wisdom of “With Great Power Comes Great Responsibility!” Like his namesake, Spider-Man’s strength and agility stand far above those of the average human, allowing him to lift nearly 10 tons and to leap and move at incredible speeds with high accuracy. An inner “spider-sense” allows him a high degree of awareness of impending danger and to gauge not only its level of threat to him personally, but also the general direction of its approach.”</p>
                </div>
              </div>
            </SwiperSlide> 
            
            
             <SwiperSlide>
              <div className="grid grid-cols-12 gap-5 place-items-center p-2">
               
                <div className=" col-span-12 border border-black  w-[60%] flex justify-center items-center flex-col gap-5 p-2 rounded-lg ">
                  <h4 className="font-bold text-2xl text-center">BATMAN</h4>
                  <MyImage path="/C58Images/Batman.png" />
                  <ul className="list-disc w-[90%] space-y-3 px-2">
                    <li className="text-black text-xl animate_fadeInUp">
                     Is a self-made super hero with a sharp mind and a disciplined body. Is a master of martial arts, has assembled teams of fellow superheroes, a tactician (strategic), and a forensic scientist.
                    </li>

                    <li className="text-black text-xl animate_fadeInUp">
                    Uses advanced technology to fight criminals and keep the city safe.
                    </li>
                  </ul>
                </div> 
                
                <div className=" col-span-12 w-[55%] flex justify-center items-center flex-col gap-5 ">
                 <p className="text-lg w-full text-black/80">Note to the Note to the instructor: Please read out the characteristics slowly for students to take notes.</p>
                 
                   <p className="text-xl w-full text-black">“With “Batman has trained his body and mind to near physical perfection to be a self-made Super Hero. He's developed an arsenal of technology that would put most armies to shame. And he's assembled teams of his fellow DC Super Heroes, like the Justice League, the Outsiders and Batman Incorporated. Batman does not have any metahuman abilities. Instead, he relies on his sharp mind and disciplined body, as well as his extensive combat and detective training. A master of virtually every form of martial arts, a brilliant tactician and a genius-level forensic scientist, Bruce also has access to his family’s fortune, which he’s used to create a near-limitless supply of advanced technology for his war on crime. Batman is ready to strike fear into the hearts of criminals everywhere.”</p>
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
