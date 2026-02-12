import { useState } from "react";
import { Calendar } from "lucide-react";

const buses = [
  "ALL",
  "BUS 1",
  "BUS 2",
  "BUS 3",
  "BUS 4",
  "BUS 5",
  "BUS 6",
  "BUS 7",
  "BUS 8",
  "BUS 9",
  "BUS 10",
  "DIRECT",
];

const Attendance = () => {
  const [activeBus, setActiveBus] = useState("ALL");

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Main Card */}
        <div className="bg-white rounded-[40px] p-8 shadow-sm border flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Left Section */}
          <div className="flex items-center gap-6">

            {/* Orange Icon */}
            <div className="bg-orange-600 w-20 h-20 rounded-3xl flex items-center justify-center shadow-md">
              <Calendar className="text-white w-8 h-8" />
            </div>

            {/* Title + Stats */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                ATTENDANCE
              </h1>

              <div className="flex gap-4 mt-3 text-sm font-medium">

                <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-xl">
                  TOTAL: 0
                </div>

                <div className="bg-green-50 text-green-600 px-4 py-2 rounded-xl">
                  PRESENT: 0
                </div>

                <div className="bg-red-50 text-red-600 px-4 py-2 rounded-xl">
                  ABSENT: 0
                </div>

              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4">

            {/* Bus Filters */}
            <div className="bg-slate-100 p-4 rounded-3xl flex flex-wrap gap-3 max-w-3xl">
              {buses.map((bus) => (
                <button
                  key={bus}
                  onClick={() => setActiveBus(bus)}
                  className={`px-5 py-2 rounded-2xl text-sm font-medium transition ${
                    activeBus === bus
                      ? "bg-orange-600 text-white shadow"
                      : "bg-white text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {bus}
                </button>
              ))}
            </div>

            {/* Dropdowns */}
            <div className="flex gap-4 justify-end">
              <select className="bg-slate-100 px-4 py-3 rounded-2xl outline-none">
                <option>2026</option>
                <option>2025</option>
              </select>

              <select className="bg-slate-100 px-4 py-3 rounded-2xl outline-none">
                <option>February</option>
                <option>January</option>
              </select>

              <select className="bg-slate-100 px-4 py-3 rounded-2xl outline-none">
                <option>Sabha 1</option>
                <option>Sabha 2</option>
              </select>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Attendance;
