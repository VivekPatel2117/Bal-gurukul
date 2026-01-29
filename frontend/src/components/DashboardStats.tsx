import React from "react";
import {
  UserGroupIcon,
  CheckCircleIcon,
  CreditCardIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

type StatItem = {
  title: string;
  value: number;
  icon: React.ReactNode;
  bgColor: string;
};

const stats: StatItem[] = [
  {
    title: "Total Students",
    value: 0,
    icon: <UserGroupIcon className="h-6 w-6 text-white" />,
    bgColor: "bg-orange-500",
  },
  {
    title: "Present Today",
    value: 0,
    icon: <CheckCircleIcon className="h-6 w-6 text-white" />,
    bgColor: "bg-blue-500",
  },
  {
    title: "Fees Unpaid",
    value: 0,
    icon: <CreditCardIcon className="h-6 w-6 text-white" />,
    bgColor: "bg-red-500",
  },
  {
    title: "Active Leaders",
    value: 0,
    icon: <TrophyIcon className="h-6 w-6 text-white" />,
    bgColor: "bg-purple-500",
  },
];

const DashboardStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-4 hover:transform hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          <div
            className={`h-12 w-12 rounded-full flex items-center justify-center ${stat.bgColor}`}
          >
            {stat.icon}
          </div>
          <div>
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              <b>{stat.title}</b>
            </p>
            <h2 className="text-3xl font-semibold text-gray-900 mt-2">
              {stat.value}
            </h2>
          </div>

        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
