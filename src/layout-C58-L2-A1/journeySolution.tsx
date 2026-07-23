"use client";
import React, { useState } from "react";
import Welldone from "@/components/wellDone";

interface SolutionItem {
  text: string;
  category: string;
}

const JourneySolution = () => {
  const stages = ["DEFINE", "COMPARE", "NEGOTIATE", "SELECT"];
  const categories = ["DOING", "THINKING", "SAYING"];

  const [solutionItems, setSolutionItems] = useState<{ [key: string]: SolutionItem[] }>({
    "DEFINE-DOING": [
      { text: "Reviews product currently in use", category: "DOING" },
    ],
    "COMPARE-DOING": [
      { text: "Searches online", category: "DOING" },
      { text: "Reads articles and reviews", category: "DOING" },
      { text: "Asks friends and family for recommendations", category: "DOING" },
      { text: "Watches commercials", category: "DOING" },
      { text: "Reviews product websites", category: "DOING" },
    ],
    "NEGOTIATE-DOING": [
      { text: "Discusses ways to return the existing item for reimbursements or cashback", category: "DOING" },
      { text: "Tries to resell the existing product to add to the budget for the new product", category: "DOING" },
      { text: "Analyses the price points of a range of ipads", category: "DOING" },
    ],
    "SELECT-DOING": [
      { text: "Visits the store or purchases online", category: "DOING" },
    ],
    "DEFINE-THINKING": [
      { text: "Outlines what is missing", category: "THINKING" },
    ],
    "COMPARE-THINKING": [
      { text: "What's functional", category: "THINKING" },
      { text: "What's affordable", category: "THINKING" },
      { text: "What's durable", category: "THINKING" },
      { text: "What's recommended", category: "THINKING" },
    ],
    "NEGOTIATE-THINKING": [
      { text: "What's best to try first", category: "THINKING" },
      { text: "How to sell the existing product", category: "THINKING" },
    ],
    "SELECT-THINKING": [
      { text: "Hope the purchase is worth it", category: "THINKING" },
    ],
    "DEFINE-SAYING": [
      { text: "\"I wonder if I can find a better quality mini computer\"", category: "SAYING" },
    ],
    "COMPARE-SAYING": [
      { text: "\"Wow this product has some great reviews and it's within my budget. My friends seem to love it\"", category: "SAYING" },
    ],
    "NEGOTIATE-SAYING": [
      { text: "\"Done. I'm going to try this IPad model.\"", category: "SAYING" },
    ],
    "SELECT-SAYING": [
      { text: "\"I'm excited to try hoping it's all worth it!\"", category: "SAYING" },
    ],
  });

  return (
    <div className="w-full flex justify-center items-start p-4 overflow-y-auto">
      <div className="w-full">
        {/* Solution Table - Full Width */}
        <div className="w-full">
          {/* Right Side - Solution Table (100%) */}
          <div className="w-full shrink-0 overflow-y-auto" style={{ height: "calc(100vh - 100px)" }}>
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

            {/* Solution Table - Read Only */}
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
                        <td key={key} className="border-2 border-black p-3 min-h-32 bg-blue-50">
                          <div className="space-y-2">
                            {solutionItems[key]?.map((item, i) => (
                              <div key={i} className="text-sm p-2 bg-white rounded border-l-4 border-violet-900">
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

      <Welldone open={false} setOpen={() => {}} />
    </div>
  );
};

export default JourneySolution;
