"use client";
import MyImage from "@/components/MyImage";
import DragData from "@/layout-C64-L1-A1/dragList.json";
import dropZone from "@/layout-C64-L1-A1/dropZone.json";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>({});
  const [shuffle,setShuffle]=useState(DragData)

  useEffect(()=>{
    setShuffle((prev)=>[...prev].sort(()=>Math.random() - 0.5))
  },[])

  const handleDrop = (e: React.DragEvent, val: string, index: number) => {
    const dragItem = e.dataTransfer.getData("drag");

    
    if (dragItem === val) {
      setDropItems((prev) => ({
        ...prev,
        [index]: prev[index] ? [...prev[index], dragItem] : [dragItem],
      }));

      setShuffle((prev)=> prev.filter((i)=> i !== dragItem))
    }
  };
  return (
    <div className="grid grid-cols-12 gap-5 w-full ">
      <div className={`${shuffle.length === 0 ?"col-span-0":"col-span-4 w-full flex flex-col gap-1"} `}>
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
      <div className={`${shuffle.length === 0 ?"col-span-12":"col-span-8"}  gap-1 w-full grid grid-cols-12 place-items-start`}>
        <div className="col-span-6 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          RESPONSES
        </div>
        <div className="col-span-6 w-full text-xl text-white bg-violet-900 text-center p-2 ">
          QUESTIONS
        </div>
        {dropZone.map((drop, dropIndex) => (
          <React.Fragment key={dropIndex}>
            <div className="col-span-6 w-full p-3 flex flex-col gap-2 justify-center items-center border ">
              <h3 className="text-black font-bold text-xl text-center ">
                {drop.text}
              </h3>
              <MyImage width={100} height={100} path={drop.img} />
            </div>

            <div
              className="col-span-6 p-3 w-full h-full flex justify-center items-center border-2 border-black/80 border-dashed "
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => handleDrop(e, drop.val, dropIndex)}
            >
              {dropItems[dropIndex]?.map((item, index) => (
                <h5 className="text-black text-xl  text-center font-medium" key={index}>
                  {item}
                </h5>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Table;
