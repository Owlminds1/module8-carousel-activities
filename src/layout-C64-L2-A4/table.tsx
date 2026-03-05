import TableData from "@/layout-C64-L2-A4/table.json";
import React from "react";

const Table = () => {
  return (
    <div className={`   gap-2 w-full grid grid-cols-12 `}>
      <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
        ELEMENT
      </div>
      <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
        DESCRIPTION
      </div>

      <div className="col-span-4 w-full text-xl text-white bg-violet-900 text-center p-2 ">
        CHECKLIST
      </div>

      {TableData.map((item, index) => (
        <React.Fragment>
          <div className="col-span-4 w-full border text-xl font-bold flex justify-center items-center text-center p-2 ">
            {item.text}
          </div>

          <div className="col-span-4 w-full border text-xl  flex justify-center items-center text-center p-2 ">
            {item.des}
          </div>

          <div className="col-span-4 w-full border flex flex-col justify-center items-center  text-center p-2 ">
            {item.list.map((list, listIndx) => (
              <div key={listIndx} className="w-full flex gap-3 justify-center items-center">
                <input
                  id={`${listIndx}-`}
                  title="select"
                  type="checkbox"
                  className="accent-violet-900 w-5 h-5 cursor-pointer"
                />
                <label htmlFor={`${listIndx}-`} className="min-w-40 text-left text-xl">{list}</label>
              </div>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Table;
