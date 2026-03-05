import { useEffect, useState, useRef } from "react";

const Table = () => {
  const totalFields = 14;

  const [values, setValues] = useState<string[]>(
    Array(totalFields).fill("")
  );

  const [hasAlerted, setHasAlerted] = useState(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (index: number, value: string) => {
    const updated = [...values];
    updated[index] = value;
    setValues(updated);
  };

  useEffect(() => {
    // clear previous timer
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // set new timer (user stop typing after 800ms)
    timeoutRef.current = setTimeout(() => {
      const allFilled = values.every((val) => val.trim() !== "");

      if (allFilled && !hasAlerted) {
        alert("All fields are filled ✅");
        setHasAlerted(true); // prevent multiple alerts
      }
    }, 800);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [values, hasAlerted]);

  const getTextarea = (index: number) => {
    return (
      <textarea
        placeholder="write here..."
        className="text-lg text-black p-2 w-full"
        value={values[index]}
        onChange={(e) => handleChange(index, e.target.value)}
      />
    );
  };

  return (
    <div className="grid grid-cols-10 w-full ">
      {/* YOUR UI SAME AS BEFORE */}
      {/* (No changes needed below this) */}

      <div className="col-span-2 border"></div>
      <div className="col-span-4 border text-center font-bold p-2 text-xl">Scenario</div>
      <div className="col-span-2 border text-center font-bold p-2 text-xl">Person</div>
      <div className="col-span-2 border text-center font-bold p-2 text-xl">Expectations</div>

      <div className="col-span-2 border"></div>
      <div className="col-span-2 border text-center font-bold p-2 text-xl">Define</div>
      <div className="col-span-2 border text-center font-bold p-2 text-xl">Compare</div>
      <div className="col-span-2 border text-center font-bold p-2 text-xl">Negotiate</div>
      <div className="col-span-2 border text-center font-bold p-2 text-xl">Select</div>

      <div className="col-span-2 border font-bold text-center text-xl">Doing</div>
      <div className="col-span-2 border">{getTextarea(0)}</div>
      <div className="col-span-2 border">{getTextarea(1)}</div>
      <div className="col-span-2 border">{getTextarea(2)}</div>
      <div className="col-span-2 border">{getTextarea(3)}</div>

      <div className="col-span-2 border font-bold text-center text-xl">Thinking</div>
      <div className="col-span-2 border">{getTextarea(4)}</div>
      <div className="col-span-2 border">{getTextarea(5)}</div>
      <div className="col-span-2 border">{getTextarea(6)}</div>
      <div className="col-span-2 border">{getTextarea(7)}</div>

      <div className="col-span-2 border font-bold text-center text-xl">Saying</div>
      <div className="col-span-2 border">{getTextarea(8)}</div>
      <div className="col-span-2 border">{getTextarea(9)}</div>
      <div className="col-span-2 border">{getTextarea(10)}</div>
      <div className="col-span-2 border">{getTextarea(11)}</div>

      <div className="col-span-2 border font-bold text-center text-xl">Insights</div>
      <div className="col-span-8 border">{getTextarea(12)}</div>

      <div className="col-span-2 border font-bold text-center text-xl">Internal Ownership</div>
      <div className="col-span-8 border">{getTextarea(13)}</div>
    </div>
  );
};

export default Table;