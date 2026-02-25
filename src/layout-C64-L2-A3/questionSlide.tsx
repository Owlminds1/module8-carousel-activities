import MyImage from "@/components/MyImage";
import Welldone from "@/components/wellDone";
import SlideData from "@/layout-C64-L2-A3/slideData.json";
import { useEffect, useState } from "react";

const QuestionSlide = () => {
  const [shuffle, setShuffle] = useState(SlideData);
 const [selectedOption, setSelectedOption] = useState<{
  [key: number]: string;
}>({});
  const [correctQuestions, setCorrectQuestions] = useState<number[]>([]);
  const [correctBg, setCorrectBg] = useState<HTMLAudioElement>();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCorrectBg(() => new Audio("/sound/correct.mp3"));
  }, []);

 const handleCheck = (
  val: string,
  correct: string,
  btnId: string,
  questionIndex: number,
) => {
  // 🟢 Only one selection per question
  setSelectedOption((prev) => ({
    ...prev,
    [questionIndex]: btnId,
  }));

  if (correct === val) {
    correctBg?.play();

    setCorrectQuestions((prev) =>
      prev.includes(questionIndex) ? prev : [...prev, questionIndex],
    );
  }
};

  useEffect(() => {
    if (shuffle.length === correctQuestions.length) {
      setOpen(true);
    }
  }, [correctQuestions, shuffle.length]);
  return (
    <div className="flex flex-col gap-3 w-full">
      {shuffle.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-12 place-items-center border  w-[90%] p-5"
        >
          <div className="col-span-6">
            <MyImage path={item.image} width={200} height={100} />
          </div>
          <div className="col-span-6 w-full flex justify-center items-center flex-col gap-5">
            <h3 className="text-2xl w-full font-bold text-black text-center ">
              {item.text}
            </h3>
            <div className="flex justify-center items-center flex-wrap gap-3">
              {item.opt.map((i, idx) => (
                <button
                  onClick={() =>
                    handleCheck(i, item.val, `${index}-${idx}`, index)
                  }
                  key={idx}
                  className={`${selectedOption[index] === `${index}-${idx}` ? (item.val === i ? "bg-green-600" : "bg-red-500 shake") : "bg-violet-900"} min-w-30 text-white text-xl rounded-lg cursor-pointer px-5 py-2 active:scale-95 transition-all duration-150 `}
                >
                  {i}
                </button>
              ))}
            </div>
            <Welldone open={open} setOpen={setOpen} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuestionSlide;
