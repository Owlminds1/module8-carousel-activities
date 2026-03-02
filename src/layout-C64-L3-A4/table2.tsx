"use client";

import DragData from "@/layout-C64-L1-A3/dragList.json";
import dropZone from "@/layout-C64-L1-A3/dropZone.json";
import React, { RefObject, useEffect, useState } from "react";
import Swiper from "swiper";



type myProps = {
  swiperRef:RefObject<Swiper | null> 
}

const Table = ({swiperRef}:myProps) => {
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>({});
  const [shuffle, setShuffle] = useState(DragData);

  useEffect(() => {
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  const handleDrop = (e: React.DragEvent, val: string, index: number) => {
    const dragItem = e.dataTransfer.getData("drag");

    if (dragItem === val) {
      swiperRef.current?.updateAutoHeight()
      setDropItems((prev) => ({
        ...prev,
        [index]: prev[index] ? [...prev[index], dragItem] : [dragItem],
      }));

      setShuffle((prev) => prev.filter((i) => i !== dragItem));
    }
  };
  return (
   <div className="flex flex-col gap-12 justify-center items-center ">
     <div className="grid grid-cols-12 gap-5 w-full ">
      <div
        className={`${shuffle.length === 0 ? "col-span-0" : "col-span-4 w-full flex flex-col gap-1"} `}
      >
        {shuffle.map((i, index) => (
          <h5
            onDragStart={(e) => e.dataTransfer.setData("drag", i)}
            draggable
            key={index}
            className="text-xl text-black rounded-lg border hover:border-black active:scale-95 transition-all duration-200 p-2 hover:cursor-grab active:cursor-grabbing"
          >
            {i}
          </h5>
        ))}
      </div>
      <div
        className={`${shuffle.length === 0 ? "col-span-12" : "col-span-8"}  gap-1 w-full grid grid-cols-12 `}
      >
        <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          Element
        </div>
        <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          Description
        </div>

        <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          Checklist
        </div>

        {dropZone.map((drop, dropIndex) => (
          <React.Fragment key={dropIndex}>
            <div className="col-span-4 w-full text-xl text-black font-bold border flex justify-center items-center text-center p-2 ">
              {drop.text}
            </div>

            <div
              className="col-span-4 p-3 w-full h-full flex justify-center items-center border-2 border-black/80 border-dashed "
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, drop.des, dropIndex)}
            >
              {dropItems[dropIndex]?.map((item, index) => (
                <h5
                  className="text-black text-xl  text-center font-medium"
                  key={index}
                >
                  {item}
                </h5>
              ))}
            </div>

            <div className="col-span-4 w-full border flex justify-center items-center text-center p-2 ">
              <input
                title="select"
                type="checkbox"
                className="accent-violet-900 w-5 h-5 cursor-pointer"
              />
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>



     {/* <div className="grid grid-cols-12 gap-5 w-full ">

      <div className="col-span-12 w-full font-bold text-black text-2xl px-5 ">
Example
      </div>
     
      <div
        className={`col-span-12  gap-1 w-full grid grid-cols-12 `}
      >
        <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          Element
        </div>
        <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          Description
        </div>

        <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          Checklist
        </div>

        {dropZone.map((drop, dropIndex) => (
          <React.Fragment key={dropIndex}>
            <div className="col-span-4 w-full text-xl text-black font-bold border flex justify-center items-center text-center p-2 ">
              {drop.text}
            </div>

            <div
              className="col-span-4 p-3 w-full h-full flex justify-center items-center border "
             
            >
              <textarea  placeholder="write here..." className="border outline-0 rounded-lg w-full text-black text-xl p-2 " rows={2}/>
            </div>

            <div className="col-span-4 w-full border flex justify-center items-center text-center p-2 ">
              <input
                title="select"
                type="checkbox"
                className="accent-violet-900 w-5 h-5 cursor-pointer"
              />
            </div>
          </React.Fragment>
        ))}
      </div>



      
    </div>

     <div className="grid grid-cols-12 gap-5 w-full ">

      <div className="col-span-12 w-full font-bold text-black text-2xl px-5 ">
Presentation
      </div>
     
      <div
        className={`col-span-12  gap-1 w-full grid grid-cols-12 `}
      >
        <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          Element
        </div>
        <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          Description
        </div>

        <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          Checklist
        </div>

        {dropZone.map((drop, dropIndex) => (
          <React.Fragment key={dropIndex}>
            <div className="col-span-4 w-full text-xl text-black font-bold border flex justify-center items-center text-center p-2 ">
              {drop.text}
            </div>

            <div
              className="col-span-4 p-3 w-full h-full flex justify-center items-center border "
             
            >
              <textarea  placeholder="write here..." className="border outline-0 rounded-lg w-full text-black text-xl p-2 " rows={2}/>
            </div>

            <div className="col-span-4 w-full border flex justify-center items-center text-center p-2 ">
              <input
                title="select"
                type="checkbox"
                className="accent-violet-900 w-5 h-5 cursor-pointer"
              />
            </div>
          </React.Fragment>
        ))}
      </div>



      
    </div> */}
   </div>
  );
};

export default Table;
