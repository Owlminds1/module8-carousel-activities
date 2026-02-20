// import dropZone from "@/layout-C57-L1-A2/dropZone.json";
import Welldone from "@/components/wellDone";
import dragData from "@/layout-C59-L3-A1A/dragData.json";
import { useEffect, useState } from "react";

type dragType = {
  text: string;
  val: string;
};

const Table = () => {
  const [dropItems, setDropItems] = useState<{
    [key: string]: dragType[];
  }>({});

  const [shuffle, setShuffle] = useState(dragData);
  const [correct, setCorrect] = useState<HTMLAudioElement>();
  const [wrong, setWrong] = useState<HTMLAudioElement>();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCorrect(new Audio("/sound/correct.mp3"));
    setWrong(new Audio("/sound/wrong_buzzer.mp3"));
  }, []);

  const handleDrag = (
    e: React.DragEvent<HTMLHeadingElement>,
    item: dragType
  ) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(item));
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropKey: string) => {
    const item: dragType = JSON.parse(e.dataTransfer.getData("text/plain"));

    if (item.val === dropKey) {
      setDropItems((prev) => ({
        ...prev,
        [dropKey]: prev[dropKey] ? [...prev[dropKey], item] : [item],
      }));

      setShuffle((prev) => prev.filter((i) => i.text !== item.text));
      correct?.play();
    } else {
      e.currentTarget.classList.add("shake");
      wrong?.play();
      
    }
  };

  useEffect(() => {
    // Check if all items have been correctly placed
    if (shuffle.length === 0) {
      setOpen(true);
    }
  }, [shuffle]);

  return (
    <div className="grid grid-cols-12 w-full place-items-start gap-3">
      <div
        className={`${
          shuffle.length === 0
            ? "col-span-0"
            : "col-span-4 w-full flex flex-col gap-1"
        }  `}
      >
        {shuffle.map((i, index) => (
          <h5
            key={index}
            onDragStart={(e) => handleDrag(e, i)}
            draggable
            className="border text-xl p-1 active:scale-95 active:cursor-grabbing hover:cursor-grab hover:border  hover:border-black/60 rounded-lg text-center  transition-all duration-300"
          >
            {i.text}
          </h5>
        ))}
      </div>

      <div
        className={`${
          shuffle.length === 0 ? "col-span-12" : "col-span-8"
        } grid  grid-cols-12 gap-1 w-full `}
      >
       
       
        {[...Array("BRAND VALUES", "GOALS & OBJECTIVES","AUDIENCE & MARKET SEGMENTS","PROMOTIONAL CHANNELS")].map((type, index) => (
          <div
           
            key={index}
            className="col-span-3 h-full flex items-center justify-center flex-col  "
          >
            <h3 className="text-lg w-full h-full text-center bg-violet-900 flex items-center justify-center text-white p-1">{type}</h3>

            <div
             onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("shake");
            }}
            onDrop={(e) => handleDrop(e, type)}
            className="border min-h-50 w-full p-2"
            >

            {dropItems[type] &&
              dropItems[type].map((i, idx) => (
                <p
                  key={idx}
                  className="text-black p-1  text-xl"
                >
                  {i.text}
                </p>
              ))}
            </div>
          </div>
        ))}

       
      </div>


      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default Table;
