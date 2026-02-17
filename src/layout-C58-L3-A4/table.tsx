import TableData from "@/layout-C58-L3-A4/tableData.json";
import React from "react";
const Table = () => {
  return (
    <div className="flex justify-center items-center w-full p-3 ">
      <div className="grid grid-cols-12 w-[90%] ">
       <div className="col-span-6 w-full p-1 text-lg  text-white bg-violet-900 font-bold text-center border">
            CATEGORY
          </div>
          <div className="col-span-6 w-full p-1 text-lg  text-white bg-violet-900 font-bold text-center border">
            QUESTIONS
          </div>
      {TableData.map((item, index) => (
        <React.Fragment key={index}>
         

          <div className="col-span-6 w-full p-2 flex justify-center items-center text-lg  text-black font-bold text-center border">
            {item.categories}
          </div>

          <div className="col-span-6 w-full p-1 text-xl  text-black  text-center border">
            <textarea
            rows={3}
              placeholder="write here..."
              className="text-lg text-black  p-2  w-full"
            />
          </div>

            <div className="col-span-12 w-full p-2 bg-violet-50  border">
            <p className="text-xl  text-black  ">{item.suggestion}</p>
          </div>
        </React.Fragment>
      ))}
    </div>
    </div>
  );
};

export default Table;
