import MyImage from "@/components/MyImage";
import dropZone from "@/layout-C64-L3-A4/table.json";
import React from "react";

const Table = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center ">
      <div className="grid grid-cols-12 gap-5 w-full ">
        <div className={`col-span-12  gap-1 w-full grid grid-cols-12 `}>
          <div className="col-span-12 flex justify-center items-center w-full">
               <MyImage path="/C64Images/Rubric.jpg" />
          </div>
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

              <div className="col-span-4 text-xl p-3 w-full h-full flex justify-center items-center border border-black/80 ">
                {drop.des}
              </div>

              <div className="col-span-4 w-full border flex-col flex justify-center items-center text-center p-2 ">
                {drop.list.map((i, idx) => (
                  <div className="flex justify-center items-center gap-3 " key={idx}>
                    <input
                      title="select"
                      type="checkbox"
                      id={`${idx}-`}
                      className="accent-violet-900 w-5 h-5 cursor-pointer"
                    />
                    <label className="min-w-30 text-left text-xl" htmlFor={`${idx}-`}>{i}</label>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Table;
