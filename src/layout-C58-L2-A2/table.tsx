"use client";
import TableData from "@/layout-C58-L2-A2/tableData.json";
import dragData from "@/layout-C58-L2-A2/before.json";
import React, { useEffect, useState } from "react";
import Welldone from "@/components/wellDone";
import MyImage from "@/components/MyImage";
const Table = () => {
const [beforeItems, setBeforeItems] = useState<{ [key: number]: string[] }>({});
const [afterItems, setAfterItems] = useState<{ [key: number]: string[] }>({});
  const [shuffle, setShuffle] = useState(dragData);
  const [open, setOpen] = useState(false);
  const [correct, setCorrect] = useState<HTMLAudioElement>();

  useEffect(() => {
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCorrect(() => new Audio("/sound/correct.mp3"));
  }, []);

const handleDrop = (
  e: React.DragEvent,
  rowIndex: number,
  category: string,
  type: "before" | "after"
) => {
  e.preventDefault();

  const droppedItem = JSON.parse(e.dataTransfer.getData("text/plain"));

  // ❌ category mismatch
  if (droppedItem.category !== category) return;

  // ❌ wrong column
  if (type === "before" && droppedItem.id > 6) return;
  if (type === "after" && droppedItem.id <= 6) return;

  // ✅ set table data
  if (type === "before") {
    setBeforeItems((prev) => ({
      ...prev,
      [rowIndex]: [droppedItem.text],
    }));
    correct?.play()
  } else {
    setAfterItems((prev) => ({
      ...prev,
      [rowIndex]: [droppedItem.text],
    }));
    correct?.play()
  }

  // ✅ REMOVE from drag list
  setShuffle((prev) => prev.filter((item) => item.id !== droppedItem.id));
};

  useEffect(() => {
    if (shuffle.length === 0) {
      setOpen(true);
    }
  }, [shuffle]);

  return (

    <div className="flex justify-center items-center flex-col ">
      <div className="grid grid-cols-12 w-full gap-y-6">
          <div className="col-span-4 w-full p-3 ">
        <MyImage path="/C58Images/Apple_Products.jpg" />
      </div>
      <div className="col-span-8 w-full flex flex-col gap-5 px-10 justify-center items-center">
        <p className="text-xl  text-black ">
          Now I’d like you to identify a series of questions within diverse
          categories that would help Apple understand its customers before
          purchasing products and after purchasing products.{" "}
        </p>

        <p className="text-xl  text-black ">
          Drag and place the questions from the masterlist into their relevant
          categories of before and after the purchase.{" "}
        </p>
      </div>
      </div>

    <div className="grid grid-cols-12 w-full gap-y-6 place-items-start ">
    

      <div
        className={`${shuffle.length === 0 ? "col-span-0" : "col-span-4 w-full p-2 space-y-1"} `}
      >
       {shuffle.map((q) => (
  <div
    key={q.id}
    draggable
    onDragStart={(e) =>
      e.dataTransfer.setData("text/plain", JSON.stringify(q))
    }
    className="p-3 border hover:cursor-grab active:cursor-grabbing active:scale-95 transition-all duration-300 bg-gray-100 mb-2"
  >
    {q.text}
  </div>
))}
      </div>

      <div
        className={`${shuffle.length === 0 ? "col-span-12 " : "col-span-8"} grid grid-cols-12  w-full p-2 place-items-start`}
      >
          <div className="col-span-6 text-center w-full bg-violet-900 text-white p-2">
            BEFORE
          </div>
          <div className="col-span-6 text-center w-full bg-violet-900 text-white p-2">
            AFTER
          </div>
       <div className=" grid grid-cols-12 w-full col-span-6">
            <div className="col-span-6 border text-center w-full  text-black font-bold text-xl p-2">
            Category
          </div>
          <div className="col-span-6 border text-center w-full  text-black font-bold text-xl p-2">
            Questions
          </div>

          {TableData.map((row, index) => (
            <React.Fragment key={index}>
              {/* CATEGORY */}
              <div className="col-span-6 w-full border p-3 font-bold">
                {row.category}
              </div>

              {/* DROP ZONE */}
            <div
  className="col-span-6 border border-dashed p-3 min-h-15"
  onDragOver={(e) => e.preventDefault()}
  onDrop={(e) => handleDrop(e, index, row.category, "before")}
>
  {beforeItems[index]?.map((item, i) => (
    <div key={i} className="font-semibold">
      {item}
    </div>
  ))}
</div>
            </React.Fragment>
          ))}
        </div>

         <div className=" grid grid-cols-12 col-span-6 w-full">
            <div className="col-span-6 border text-center w-full  text-black font-bold text-xl p-2">
            Category
          </div>
          <div className="col-span-6 border text-center w-full  text-black font-bold text-xl p-2">
            Questions
          </div>

          {TableData.map((row, index) => (
            <React.Fragment key={index}>
              {/* CATEGORY */}
              <div className="col-span-6 border p-3 font-bold">
                {row.category}
              </div>

              {/* DROP ZONE */}
             <div
  className="col-span-6 border border-dashed p-3 min-h-15"
  onDragOver={(e) => e.preventDefault()}
  onDrop={(e) => handleDrop(e, index, row.category, "after")}
>
  {afterItems[index]?.map((item, i) => (
    <div key={i} className="font-semibold">
      {item}
    </div>
  ))}
</div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <Welldone open={open} setOpen={setOpen} />
    </div>
    </div>
  );
};

export default Table;
