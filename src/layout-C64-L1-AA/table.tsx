import TableData from "@/layout-C64-L1-AA/table.json";
import React from "react";

const Table = () => {
  return (
    <div
      className="grid
     grid-cols-12 w-full border border-black"
    >
      <div className="col-span-6 w-full bg-violet-900 text-white p-2 text-xl font-bold text-center">
        Criteria
      </div>
      <div className="col-span-6 w-full bg-violet-900 text-white p-2 text-xl font-bold text-center">
        Evaluation
      </div>


      {
        TableData.map((item,index)=>(
            <React.Fragment>
  <div className="col-span-6 border w-full p-5">
        <h4 className="text-xl font-medium text-black text-center ">{
item.text}</h4>
      </div>
      <div className="col-span-6 border w-full p-5">
        {
            item.list.map((i,idx)=>(

        <div key={idx} className="w-full flex justify-center items-center gap-2">
            <input
            type="checkbox"
            title="select"
            className="accent-violet-900 w-5 h-5 cursor-pointer"
            id={`index${idx}`}
          />
          <label className="min-w-25" htmlFor={`index${idx}`} >{i}</label>
          
        </div>
            ))
        }
      </div>

            </React.Fragment>
        ))
      }
    
    </div>
  );
};

export default Table;
