import TableData from "@/layout-C58-L3-A4/tableData.json";
import React from "react";
const SuggestionTable = () => {
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

          <div className="col-span-6 w-full flex justify-center items-center p-1 border">
           <ul className="list-disc space-y-1  w-[80%]">
            {
                item.ans.map((i,index)=>(
                    <li key={index} className="text-lg text-black/80">{i}</li>
                ))
            }
           </ul>
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

export default SuggestionTable;
