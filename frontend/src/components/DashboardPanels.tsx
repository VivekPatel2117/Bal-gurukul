import React, { useState } from "react";
import {
  CheckCircleIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

type FilterType = "All Time" | "Month" | "Year";

const DashboardPanels: React.FC = () => {
  const [performerFilter, setPerformerFilter] = useState<FilterType>("All Time");
  const [attendanceFilter, setAttendanceFilter] = useState<FilterType>("All Time");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Top Performers */}
      <Panel
        title="Top Performers"
        icon={<TrophyIcon className="h-5 w-5 text-yellow-500" />}
        filter={performerFilter}
        onChange={setPerformerFilter}
      />

      {/* Attendance */}
      <Panel
        title="Attendance"
        icon={<CheckCircleIcon className="h-5 w-5 text-green-500" />}
        filter={attendanceFilter}
        onChange={setAttendanceFilter}
      />
    </div>
  );
};

export default DashboardPanels;

/* ---------- Reusable Panel Component ---------- */

interface PanelProps {
  title: string;
  icon: React.ReactNode;
  filter: FilterType;
  onChange: (value: FilterType) => void;
}

const Panel: React.FC<PanelProps> = ({
  title,
  icon,
  filter,
  onChange,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 min-h-45 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="font-bold text-gray-900 uppercase text-lg">
            {title}
          </h3>
        </div>

        <select
          value={filter}
          onChange={(e) => onChange(e.target.value as FilterType)}
          className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option>All Time</option>
          <option>Month</option>
          <option>Year</option>
        </select>
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center justify-center">
        <p className="text-sm text-gray-400">No data</p>
      </div>
    </div>
  );
};
