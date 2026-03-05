import TableData from "@/layout-C57-L3-A4/tableData.json";
import React from "react";
type TableMode = {
  mode: "input" | "sol";
};
const Table = ({ mode }: TableMode) => {
  return (
    <div className="flex justify-center items-center ">
      <div className="grid grid-cols-12 gap-1 w-[90%] place-items-start  p-2">
        {mode == "sol" &&  <div className="col-span-12 font-bold text-xl text-center w-full p-2">SUGGESTIVE RESPONSES</div>}
       
        <div className="col-span-6 w-full text-white p-2 text-center bg-violet-900 ">
          Questions
        </div>
        <div className="col-span-6 w-full text-white p-2 text-center bg-violet-900 ">
          Responses
        </div>

        <div className="col-span-6  text-xl font-bold w-full min-h-15 text-black p-2 text-center border  ">
          What is driving [the distribution problem]?
        </div>

        <div className="col-span-6 text-xl  w-full min-h-15 text-black p-2 text-center border  ">
          We have more products but fewer customers.
        </div>

        {TableData.map((i, index) => (
          <React.Fragment key={index}>
            <div className="col-span-6 text-xl font-bold  h-full w-full min-h-15 text-black p-2 text-center border  ">
              {i.qus}
            </div>
            <div className="col-span-6 text-xl w-full min-h-15 text-black p-2 text-center border  ">
              {mode == "input" && (
                <textarea
                  placeholder="write here..."
                  className="text-lg text-black rounded-lg p-2 border focus:border-black w-full "
                  rows={2}
                />
              )}
              {mode == "sol" && i.res}
            </div>
          </React.Fragment>
        ))}
        <div className="col-span-12 w-full min-h-15 text-black p-2 text-center border  ">
          <h4 className="w-full font-bold text-left p-2 text-xl"> SOLUTION:</h4>
          {mode == "input" && (
            <textarea
              placeholder="write here..."
              className="text-lg text-black rounded-lg p-2 border focus:border-black w-full "
              rows={2}
            />
          )}

            {mode == "sol" && (
            <p className="text-black text-xl text-left px-2">
              Find influencer partners who can help advertise at no cost. Share with close networks to get the word of mouth to try the product. Create on-demand products to avoid supplies without demand. 
Try ads when the revenue is
higher to reach more customers who can see existing positive reviews.

            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Table;
