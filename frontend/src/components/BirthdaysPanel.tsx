import React, { useState } from "react";
import { CakeIcon } from "@heroicons/react/24/outline";

type Filter = "TODAY" | "WEEK" | "MONTH" | "YEAR";

const BirthdaysPanel: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>("YEAR");

  const filters: Filter[] = ["TODAY", "WEEK", "MONTH", "YEAR"];

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 min-h-45 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CakeIcon className="h-5 w-5 text-pink-500" />
          <h3 className="text-sm font-semibold uppercase text-gray-900">
            Birthdays
          </h3>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition
                ${
                  activeFilter === filter
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center">
        <p className="text-sm italic text-gray-400">
          No Birthdays Found
        </p>
      </div>
    </div>
  );
};

export default BirthdaysPanel;
