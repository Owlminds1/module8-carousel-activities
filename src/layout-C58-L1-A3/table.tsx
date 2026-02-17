"use client";
import TableData from "@/layout-C58-L1-A3/tableData.json";
import dragData from "@/layout-C58-L1-A3/dragData.json";
import React, { useEffect, useState } from "react";
import Welldone from "@/components/wellDone";
import MyImage from "@/components/MyImage";
const Table = () => {
  const [dragItems, setDragItems] = useState<{ [key: number]: string[] }>({});

  const [shuffle, setShuffle] = useState(dragData);
  const [open, setOpen] = useState(false);
  const [correct, setCorrect] = useState<HTMLAudioElement>();

  useEffect(() => {
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCorrect(() => new Audio("/sound/correct.mp3"));
  }, []);

  const handleDrop = (e: React.DragEvent, index: number, item: string) => {
    const dragItem = JSON.parse(e.dataTransfer.getData("drag"));
    if (dragItem.question === item) {
      setDragItems((prev) => ({
        ...prev,
        [index]: prev[index]
          ? [...prev[index], dragItem.question]
          : [dragItem.question],
      }));

      setShuffle((prev) =>
        prev.filter((item) => item.question != dragItem.question),
      );
      correct?.play();
    } else {
      e.currentTarget.classList.add("shake");
    }
  };

  useEffect(() => {
    if (shuffle.length === 0) {
      setOpen(true);
    }
  }, [shuffle]);

  return (
    <div className="grid grid-cols-12 w-full gap-y-6 ">
      <div className="col-span-4 w-full p-3 ">
        <MyImage path="/C58Images/Survey.jpg" />
      </div>
      <div className="col-span-8 w-full flex justify-center items-center">
        <ul className="list-disc spacey-3 w-[80%] ">
          <li className="text-xl  text-black ">Read each response</li>
          <li className="text-xl  text-black ">
            Drag and place the relevant question in the table against each
            response
          </li>
        </ul>
      </div>

      <div
        className={`${shuffle.length === 0 ? "col-span-0" : "col-span-4 w-full p-2 space-y-1"} `}
      >
        {shuffle.map((i, index) => (
          <h4
            draggable
            onDragStart={(e) =>
              e.dataTransfer.setData("drag", JSON.stringify(i))
            }
            className="text-lg p-1 px-2  w-full  text-black border border-black/30 rounded-lg active:scale-95 hover:cursor-grab active:cursor-grabbing  transition-all duration-300"
          >
            {i.question}
          </h4>
        ))}
      </div>

      <div
        className={`${shuffle.length === 0 ? "col-span-12 " : "col-span-8"}  grid grid-cols-12 w-full p-2 place-items-start`}
      >
        <div className="col-span-6 text-center w-full bg-violet-900 text-white p-2">
          RESPONSES
        </div>
        <div className="col-span-6 text-center w-full bg-violet-900 text-white p-2">
          QUESTIONS
        </div>
        {TableData.map((item, index) => (
          <React.Fragment key={index}>
            <div className="col-span-6 min-h-15 flex justify-start items-center text-lg  h-full text-black border p-3 w-full ">
              {item.response}
            </div>
            <div
              onDragOver={(e) => {
                e.preventDefault();
                e.currentTarget.classList.remove("shake");
              }}
              onDrop={(e) => handleDrop(e, index, item.question)}
              className="col-span-6 min-h-15 flex justify-start items-center h-full text-black border border-dashed border-black/10 p-3 w-full "
            >
              {dragItems[index]?.map((drop, dIndex) => (
                <span key={dIndex} className="text-black  text-lg font-bold">
                  {drop}
                </span>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default Table;
