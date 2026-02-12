import { useState } from "react";

const RatingBoard = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Time");

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header Card */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-[40px] px-10 py-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 shadow-lg">

          {/* Left Section */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              RATING BOARD
            </h1>
            <p className="text-purple-100 text-sm mt-1 tracking-wide">
              FILTER POINTS BY MONTH/YEAR
            </p>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search Student..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white px-5 py-3 rounded-2xl outline-none w-64 shadow-sm"
            />

            {/* Filter Dropdown */}
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white px-5 py-3 rounded-2xl outline-none shadow-sm"
            >
              <option>All Time</option>
              <option>This Year</option>
              <option>This Month</option>
            </select>

          </div>
        </div>

        {/* Empty State / Content Area */}
        <div className="mt-16 text-center text-slate-400 font-medium">
          No ratings available yet.
        </div>

      </div>
    </div>
  );
};

export default RatingBoard;
