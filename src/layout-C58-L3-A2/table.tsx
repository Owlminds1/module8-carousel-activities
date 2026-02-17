import Welldone from "@/components/wellDone";
import dragData from "@/layout-C58-L3-A2/dragData.json";
import tableData from "@/layout-C58-L3-A2/tableData.json";
import { RefObject, useEffect, useState } from "react";
import Swiper from "swiper";
interface TableProps {
  swiperRef: RefObject<Swiper | null>;
}

const Table = ({swiperRef }:TableProps) => {
  const [dropItems, setDropItems] = useState<{ [key: number]: string[] }>({});
  const [shuffle, setShuffle] = useState(dragData);
    const [open, setOpen] = useState(false);
    const  [correctBg,setCorrectBg] = useState<HTMLAudioElement>()
    const  [wrongBg,setWrongBg] = useState<HTMLAudioElement>()


  useEffect(() => {
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCorrectBg(()=> new  Audio("/sound/correct.mp3"))
    setWrongBg(()=>new Audio("/sound/wrong_buzzer.mp3"))
  }, []);

  const handleDrop = (e: React.DragEvent, index: number, val: string[]) => {
    const dragItem = e.dataTransfer.getData("drag");

    if (val.includes(dragItem)) {
        correctBg?.play()
      setDropItems((prev) => ({
        ...prev,
        [index]: prev[index] ? [...prev[index], dragItem] : [dragItem],
      }));
      swiperRef.current?.updateAutoHeight()

      setShuffle((prev) => [...prev].filter((i) => i !== dragItem));

    }else{
        wrongBg?.play()
        e.currentTarget.classList.add("shake")
    }
  };

  useEffect(()=>{
    if(shuffle.length === 0 ){
        setOpen(true)
    }
  },[shuffle])



  return (
    <div className="grid grid-cols-12 w-full gap-3  gap-y-10 ">
      <div className="col-span-12 w-full flex justify-center items-center ">
        <h4 className="text-2xl font-medium text-center text-black w-[70%]">
          Your task is to understand from the website the kind of questions
          Managebac would have asked before introducing this product in the
          market.
        </h4>
      </div>
      <div className={`${shuffle.length === 0 ? "col-span-0":"col-span-4"}  w-full flex justify-start items-center flex-col  gap-1 `}>
        {shuffle.map((i, index) => (
          <h4
            draggable
            onDragStart={(e) => e.dataTransfer.setData("drag", i)}
            key={index}
            className="text-lg hover:cursor-grab active:cursor-grabbing active:scale-95 transition-all duration-150 w-full text-center border border-violet-900 rounded-lg p-1"
          >
            {i}
          </h4>
        ))}
      </div>
      <div className={`${shuffle.length === 0 ? "col-span-12":"col-span-8 w-full flex  gap-1 flex-col"} `}>
        <div className="grid grid-cols-12 gap-1 place-items-start ">
          <div className="col-span-6 w-full font-bold text-white text-center bg-violet-900 p-2">
            CATEGORY
          </div>
          <div className="col-span-6 w-full font-bold text-white text-center bg-violet-900 p-2">
            QUESTIONS
          </div>
        </div>

        {tableData.map((i, tIndex) => (
          <div
            key={tIndex}
            className="grid grid-cols-12 gap-1 place-items-start border  border-black "
          >
            <div className="col-span-6 h-full w-full border text-xl font-bold text-black p-3">
              {i.category}
            </div>
            <div
              onDragOver={(e) => {e.preventDefault() ; e.currentTarget.classList.remove("shake")}}
              onDrop={(e) => handleDrop(e, tIndex, i.val)}
              className="col-span-6 row-span-2 h-full w-full border   p-3"
            >
              {dropItems[tIndex]?.map((drop, dIndex) => (
                <h4 key={dIndex} className="text-violet-900 text-xl">
                  {drop}
                </h4>
              ))}
            </div>

            <div className="col-span-6 h-full w-full border text-xl font-normal text-black p-3">
              {i.text}
            </div>
          </div>
        ))}
      </div>

          <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default Table;
