// import dropZone from "@/layout-C57-L1-A2/dropZone.json";
import Welldone from "@/components/wellDone";
import dragData from "@/layout-C57-L1-A2/dragData.json";
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
            className="border p-1 active:scale-95 active:cursor-grabbing hover:cursor-grab hover:border  hover:border-black/60 rounded-lg text-center  transition-all duration-300"
          >
            {i.text}
          </h5>
        ))}
      </div>

      <div
        className={`${
          shuffle.length === 0 ? "col-span-12" : "col-span-8"
        } grid  grid-cols-12 w-full `}
      >
        <div className="col-span-4 border p-1 text-center text-lg w-full bg-violet-900 text-white ">
          {" "}
          Role Play{" "}
        </div>
        <div className="col-span-4 border p-1 text-center text-lg w-full bg-violet-900 text-white ">
          {" "}
          Identify the Problem{" "}
        </div>
        <div className="col-span-4 border p-1 text-center text-lg w-full bg-violet-900 text-white ">
          {" "}
          Suggest a Solution{" "}
        </div>
        <div className="col-span-4 border text-center text-lg w-full text-black ">
          Teacher{" "}
        </div>
        {[...Array("teacher-1", "teacher-2")].map((type, index) => (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("shake");
            }}
            onDrop={(e) => handleDrop(e, type)}
            key={index}
            className="col-span-4 min-h-15 border p-3 flex flex-col gap-1 justify-start items-center text-center text-lg w-full text-black "
          >
            {dropItems[type] &&
              dropItems[type].map((i, idx) => (
                <p
                  key={idx}
                  className="text-black border rounded-lg bg-violet-100 text-md"
                >
                  {i.text}
                </p>
              ))}
          </div>
        ))}

        <div className="col-span-4 border text-center text-lg w-full text-black ">
          Sibling
        </div>

        {[...Array("Sibling-1", "Sibling-2")].map((type, index) => (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              e.currentTarget.classList.remove("shake");
            }}
            onDrop={(e) => handleDrop(e, type)}
            key={index}
            className="col-span-4 min-h-15 border p-3 flex flex-col gap-1 justify-start items-center text-center text-lg w-full text-black "
          >
            {dropItems[type] &&
              dropItems[type].map((i, idx) => (
                <p
                  key={idx}
                  className="text-black border rounded-lg bg-violet-100 text-md"
                >
                  {i.text}
                </p>
              ))}
          </div>
        ))}
      </div>


      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default Table;
