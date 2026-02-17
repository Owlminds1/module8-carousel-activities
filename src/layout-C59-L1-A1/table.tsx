import MyImage from "@/components/MyImage";
import Welldone from "@/components/wellDone";
import MasterList from "@/layout-C59-L1-A1/masterList.json";
import TableData from "@/layout-C59-L1-A1/tableData.json";
import React, { useEffect, useState } from "react";

const Table = () => {
  const [dropItems, setDropItems] = useState<{ [key: number]: string }>({});
  const [correct, setCorrect] = useState<HTMLAudioElement>();
  const [shuffel ,setShuffel]=useState(MasterList)
  const [open,setOpen]=useState(false)

  useEffect(() => {
    setCorrect(() => new Audio("/sound/correct.mp3"));
    setShuffel((prev)=>[...prev].sort(()=>Math.random() - 0.5))
  }, []);

  const handleDrop = (e: React.DragEvent, value: string, index: number) => {
    const dragData = e.dataTransfer.getData("drag");
    if (dragData === value) {
      setDropItems((prev) => ({
        ...prev,
        [index]: dragData,
      }));
      correct?.play();
      setShuffel((prev)=>prev.filter((i)=>i !== dragData))
    }else{
      e.currentTarget.classList.add("shake")
    }
  };

  useEffect(()=>{
if(shuffel.length === 0){
setOpen(true)
}
  },[shuffel])
  return (
    <div className="grid grid-cols-12 gap-3 w-full place-items-start ">
      <div className={`${shuffel.length === 0 ? "col-span-0":"col-span-4 w-full flex justify-center items-center gap-1 flex-col"}  `}>
        {shuffel.map((i, index) => (
          <h4
            onDragStart={(e) => e.dataTransfer.setData("drag", i)}
            draggable
            className="w-full text-lg border p-1 rounded-lg active:scale-95 hover:cursor-grab active:cursor-grabbing transition-all duration-300"
            key={index}
          >
            {i}
          </h4>
        ))}
      </div>
      <div className={ `${shuffel.length === 0 ? "col-span-12":"col-span-8"}  w-full grid grid-cols-12 `}>
        <div className="col-span-6 w-full bg-violet-900 text-white p-1 text-center">
          Method
        </div>

        <div className="col-span-6 w-full bg-violet-900 text-white p-1 text-center">
          Description
        </div>
        {TableData.map((item, dropIndex) => (
          <React.Fragment key={dropIndex}>
            <div className="col-span-6 border flex flex-col gap-1 p-1 justify-center items-center">
              <h4 className="text-black text-lg font-bold">{item.method}</h4>
              <MyImage width={100} height={100} path={item.img} />
            </div>

            <div
              onDragOver={(e) => {e.preventDefault();e.currentTarget.classList.remove("shake")}}
              onDrop={(e) => handleDrop(e, item.description, dropIndex)}
              className="col-span-6 border p-3 flex flex-col gap-2 justify-center items-center"
            >
              {dropItems[dropIndex] ? (
                <p className="text-black text-lg ">{dropItems[dropIndex]}</p>
              ) : (
                <p className="text-black/60">drop here...</p>
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
      <Welldone open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Table;
