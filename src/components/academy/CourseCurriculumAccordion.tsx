"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, CheckCircle2 } from "lucide-react";

interface CurriculumModule {
  module: string;
  topics: string[];
}

interface CourseCurriculumAccordionProps {
  curriculum: CurriculumModule[];
}

export default function CourseCurriculumAccordion({
  curriculum,
}: CourseCurriculumAccordionProps) {
  // By default, open the first module
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleModule = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const expandAll = () => {
    setOpenIndexes(curriculum.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndexes([]);
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
          <BookOpen className="w-4 h-4 text-brand-600" />
          Curriculum Modules Breakdown ({curriculum.length} Modules):
        </h4>
        <div className="flex items-center gap-2 text-[11px] font-semibold text-brand-700">
          <button
            type="button"
            onClick={expandAll}
            className="hover:underline cursor-pointer"
          >
            Expand All
          </button>
          <span>·</span>
          <button
            type="button"
            onClick={collapseAll}
            className="hover:underline cursor-pointer"
          >
            Collapse All
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {curriculum.map((mod, mIdx) => {
          const isOpen = openIndexes.includes(mIdx);
          return (
            <div
              key={mIdx}
              className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-xs transition-all"
            >
              <button
                type="button"
                onClick={() => toggleModule(mIdx)}
                className="w-full px-4 py-3.5 flex items-center justify-between text-left hover:bg-gray-50/70 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5 pr-2">
                  <span className="w-6 h-6 rounded-lg bg-brand-100 text-brand-800 text-xs font-bold flex items-center justify-center shrink-0">
                    {mIdx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-navy-950">
                    {mod.module}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[11px] text-gray-400 font-medium hidden sm:inline-block">
                    {mod.topics.length} topics
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  )}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-4 pt-2 border-t border-gray-100 bg-gray-50/40">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                    {mod.topics.map((topic, tIdx) => (
                      <li
                        key={tIdx}
                        className="text-xs text-gray-600 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
