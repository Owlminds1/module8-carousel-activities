"use client";
import dragData from "@/layout-C58-L2-A1/iPadMasterList.json";
import React, { useEffect, useState } from "react";
import Welldone from "@/components/wellDone";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface DroppedItem {
  text: string;
  category: string;
}

const JourneyActivity = () => {
  const stages = ["DEFINE", "COMPARE", "NEGOTIATE", "SELECT"];
  const categories = ["DOING", "THINKING", "SAYING"];

  const [stageItems, setStageItems] = useState<{ [key: string]: DroppedItem[] }>({});
  const [shuffle, setShuffle] = useState(dragData);
  const [open, setOpen] = useState(false);
  const [correct, setCorrect] = useState<HTMLAudioElement>();
  const [expandedCategories, setExpandedCategories] = useState({
    DOING: true,
    THINKING: true,
    SAYING: true,
  });

  useEffect(() => {
    setShuffle((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCorrect(() => new Audio("/sound/correct.mp3"));
  }, []);

  const handleDrop = (
    e: React.DragEvent,
    stage: string | null,
    category: string | null
  ) => {
    e.preventDefault();

    const data = e.dataTransfer.getData("text/plain");
    if (!data) return;

    const droppedItem = JSON.parse(data);

    // Dropping back to master list
    if (!stage && !category) {
      setShuffle((prev) => [...prev, droppedItem]);
      setStageItems((prev) => {
        const newItems = { ...prev };
        Object.keys(newItems).forEach((key) => {
          newItems[key] = newItems[key].filter((item) => item.text !== droppedItem.text);
        });
        return newItems;
      });
      correct?.play();
      return;
    }

    // ❌ category mismatch
    if (droppedItem.category !== category) return;

    const key = `${stage}-${category}`;

    // If coming from master list, remove it from there
    if (!droppedItem.id) {
      setStageItems((prev) => ({
        ...prev,
        [key]: [...(prev[key] || []), droppedItem],
      }));
    } else {
      // If coming from table, remove from old location and add to new
      setStageItems((prev) => {
        const newItems = { ...prev };
        Object.keys(newItems).forEach((k) => {
          newItems[k] = newItems[k].filter((item) => item.text !== droppedItem.text);
        });
        newItems[key] = [...(newItems[key] || []), droppedItem];
        return newItems;
      });
      setShuffle((prev) => prev.filter((item) => item.id !== droppedItem.id));
    }

    correct?.play();
  };

  const handleMasterListDrop = (e: React.DragEvent) => {
    handleDrop(e, null, null);
  };

  useEffect(() => {
    if (shuffle.length === 0) {
      setOpen(true);
    }
  }, [shuffle]);

  return (
    <div className="w-full flex justify-center items-start p-4 overflow-y-auto">
      <div className="w-full">
        {/* Main Layout - Left Master List (25%), Right Table (75%) */}
        <div className="flex gap-4">
          {/* Left Side - Master List (25%) */}
          <div className="w-1/4 shrink-0 flex flex-col">
            <div
              className="border-2 border-black p-3 bg-blue-50 rounded-lg flex flex-col"
              style={{ height: "calc(100vh - 100px)" }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleMasterListDrop}
            >
              <h3 className="font-bold text-sm mb-3 text-center shrink-0">Master List</h3>
              <div className="space-y-2 overflow-y-auto flex-1">
                {categories.map((category) => {
                  const categoryItems = shuffle.filter((item) => item.category === category);
                  return (
                    <div key={category} className="border border-gray-300 rounded bg-white">
                      <button
                        onClick={() =>
                          setExpandedCategories((prev) => ({
                            ...prev,
                            [category]: !prev[category as keyof typeof expandedCategories],
                          }))
                        }
                        className="w-full flex items-center justify-between p-2 hover:bg-gray-50 font-bold text-xs"
                      >
                        <span>{category}</span>
                        {expandedCategories[category as keyof typeof expandedCategories] ? (
                          <FaChevronUp className="text-xs" />
                        ) : (
                          <FaChevronDown className="text-xs" />
                        )}
                      </button>
                      {expandedCategories[category as keyof typeof expandedCategories] && (
                        <div className="space-y-2 p-2 border-t border-gray-300">
                          {categoryItems.map((item) => (
                            <div
                              key={item.id}
                              draggable
                              onDragStart={(e) =>
                                e.dataTransfer.setData("text/plain", JSON.stringify(item))
                              }
                              className="p-2 text-sm border border-gray-300 hover:cursor-grab active:cursor-grabbing active:scale-95 transition-all duration-300 bg-white rounded hover:bg-blue-100"
                            >
                              {item.text}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Main Table (75%) */}
          <div className="w-3/4 shrink-0 overflow-y-auto" style={{ height: "calc(100vh - 100px)" }}>
            {/* Header Row with SCENARIO, PERSONA, USER EXPECTATIONS */}
            <div className="grid gap-0 mb-0" style={{ gridTemplateColumns: "50% 25% 25%" }}>
              <div className="border-2 border-black bg-gray-100 p-3">
                <p className="font-bold text-sm mb-2">SCENARIO:</p>
                <p className="text-xs">Steve wants to switch to a product (mini computer) with improved functionality and seamless experience</p>
              </div>
              <div className="border-2 border-black bg-gray-100 p-3">
                <p className="font-bold text-sm mb-2">PERSONA</p>
                <p className="text-xs font-semibold">Switching Steve</p>
              </div>
              <div className="border-2 border-black bg-gray-100 p-3">
                <p className="font-bold text-sm mb-2">USER EXPECTATIONS</p>
                <ul className="text-xs space-y-1">
                  <li>- Easy to use</li>
                  <li>- Elegant design</li>
                  <li>- Durable & efficient</li>
                  <li>- Excellent customer service</li>
                </ul>
              </div>
            </div>

            {/* Main Drag-and-Drop Table */}
            <table className="w-full border-collapse border-2 border-black">
              <thead>
                <tr>
                  <th className="border-2 border-black bg-black text-white p-2 font-bold text-sm">Category</th>
                  {stages.map((stage) => (
                    <th key={stage} className="border-2 border-black bg-black text-white p-2 font-bold text-sm">
                      {stage}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category}>
                    <td className="border-2 border-black bg-gray-200 p-2 font-bold text-sm">{category}</td>
                    {stages.map((stage) => {
                      const key = `${stage}-${category}`;
                      return (
                        <td
                          key={key}
                          className="border-2 border-black p-3 min-h-32 bg-blue-50"
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={(e) => handleDrop(e, stage, category)}
                        >
                          <div className="space-y-2">
                            {stageItems[key]?.map((item, i) => (
                              <div
                                key={i}
                                draggable
                                onDragStart={(e) =>
                                  e.dataTransfer.setData("text/plain", JSON.stringify(item))
                                }
                                className="text-sm p-2 bg-white rounded border-l-4 border-violet-900 hover:cursor-grab active:cursor-grabbing active:scale-95 transition-all duration-300"
                              >
                                <span className="text-xs bg-violet-100 text-violet-900 px-1 py-0.5 rounded mr-1">{item.category}</span>
                                <span className="text-sm">{item.text}</span>
                              </div>
                            ))}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

            {/* INSIGHTS Section */}
            <div className="border-2 border-t-0 border-black bg-gray-50 p-3">
              <p className="font-bold text-sm mb-2">INSIGHTS</p>
              <p className="text-xs mb-2">Make it <span className="font-bold">easy for the customer</span> to purchase by giving:</p>
              <ul className="text-xs space-y-1 ml-3">
                <li>- Product information</li>
                <li>- Any offers</li>
                <li>- Follow-up by email or chat</li>
                <li>- Suggest why the product is better</li>
              </ul>
            </div>

            {/* INTERNAL OWNERSHIP Section */}
            <div className="border-2 border-black bg-gray-50 p-3">
              <p className="font-bold text-sm mb-2">INTERNAL OWNERSHIP</p>
              <p className="text-xs mb-2">Make it <span className="font-bold">convenient for Steve to select</span></p>
              <ul className="text-xs space-y-1 ml-3">
                <li>- Allow comparisons between ipads based on price points</li>
                <li>- Give a detailed explanation of functionality and efficiency</li>
                <li>- Show a visual display of all integrated features</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Welldone open={open} setOpen={setOpen} />
    </div>
  );
};

export default JourneyActivity;
