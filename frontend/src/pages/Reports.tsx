import { useState } from "react";
import { Cake, CreditCard, Award, ClipboardCheck } from "lucide-react";
import ReportDialog from "../components/ReportDialog";

const Reports = () => {
  const [activeReport, setActiveReport] = useState<string | null>(null);

  const reports = [
    {
      title: "Birthdays",
      count: "0 Students",
      icon: Cake,
      color: "bg-pink-500",
      headerColor: "from-blue-600 to-blue-500",
    },
    {
      title: "Unpaid Fees",
      count: "0 Students",
      icon: CreditCard,
      color: "bg-red-500",
      headerColor: "from-red-500 to-red-400",
    },
    {
      title: "Top Points",
      count: "10 Students",
      icon: Award,
      color: "bg-purple-500",
      headerColor: "from-purple-600 to-purple-500",
    },
    {
      title: "Attendance",
      count: "0 Students",
      icon: ClipboardCheck,
      color: "bg-blue-500",
      headerColor: "from-indigo-600 to-indigo-500",
    },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {reports.map((report, index) => {
          const Icon = report.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-[40px] p-8 shadow-sm border flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div
                className={`${report.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-md`}
              >
                <Icon className="text-white w-7 h-7" />
              </div>

              <h2 className="mt-6 text-lg font-bold tracking-tight">
                {report.title.toUpperCase()}
              </h2>

              <p className="text-xs text-slate-400 tracking-wider mt-1">
                {report.count.toUpperCase()}
              </p>

              <button
                onClick={() => setActiveReport(report.title)}
                className="mt-6 bg-slate-100 hover:bg-slate-200 px-8 py-3 rounded-2xl text-sm font-medium transition"
              >
                VIEW LIST
              </button>

              {/* Dialog */}
              <ReportDialog
                open={activeReport === report.title}
                onOpenChange={(open) =>
                  !open && setActiveReport(null)
                }
                title={report.title}
                headerColor={report.headerColor}
              />
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Reports;
