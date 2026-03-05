"use client";

const Table2 = () => {
  return (
    <div className="flex flex-col gap-12 justify-center items-center ">
    <div className={`  gap-1 w-full grid grid-cols-12 `}>
          <div className="col-span-3 w-full text-2xl font-bold border text-black p-2 "></div>

          <div className="col-span-3 w-full text-2xl font-bold border text-black p-2 ">
            1-3
          </div>
          <div className="col-span-3 w-full text-2xl font-bold border text-black p-2 ">
            4-6
          </div>

          <div className="col-span-3 w-full text-2xl font-bold border text-black p-2 ">
            7-10
          </div>

          <div className="col-span-3 w-full text-xl text-black font-bold border flex justify-center items-center text-center p-2 ">
            Clarity
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
            The student’s business plan was somewhat clear
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
            The student’s business plan was mostly clea
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
            The student’s business plan was very clear
          </div>
          {/* ===== */}

          <div className="col-span-3 w-full text-xl text-black font-bold border flex justify-center items-center text-center p-2 ">
            Brevity
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
            The student’s business plan was too long and confusing to understand
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
            The student’s business plan was somewhat long for its purpose and
            was not very precise on some occasions
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
            The student’s business plan was just the right length while covering
            all the essential details
          </div>

          {/* ==== */}

          <div className="col-span-3 w-full text-xl text-black font-bold border flex justify-center items-center text-center p-2 ">
            Content
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
            The student missed two or more main components of a business plan
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
            The student missed up to two main components of a business plan{" "}
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
            The student mentioned all the main components of a business plan
          </div>
          
            <div className="col-span-12 w-full  border flex justify-center items-center text-center p-2 ">
       <h4 className="text-2xl text-black font-normal"><span className="font-bold">Components:</span> Name, Description, Features, Benefits, Tools & Materials</h4>
          </div>



          {/* ==== */}

          <div className="col-span-3 w-full text-xl text-black font-bold border flex justify-center items-center text-center p-2 ">
          Connection
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
         The student was not able to emotionally connect with the instructor through anecdotes, laughter, or personal examples
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
The student was somewhat able to emotionally connect with the instructor through anecdotes, laughter, or personal examples
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
         The student was able to emotionally connect with the instructor through anecdotes, laughter, or personal examples
          </div>



              {/* ==== */}

          <div className="col-span-3 w-full text-xl text-black font-bold border flex justify-center items-center text-center p-2 ">
          Eye Contact
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
       The student was not able to make eye contact with the instructor
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
The student somewhat made eye contact with the instructor
          </div>

          <div className="col-span-3 w-full text-xl text-black font-normal border flex justify-center items-center text-center p-2 ">
       The student made eye contact with the instructor
          </div>
        </div>
    </div>
  );
};

export default Table2;
