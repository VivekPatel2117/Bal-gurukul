import { CreditCard } from "lucide-react";

const FeeManager = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header Card */}
        <div className="bg-white rounded-[40px] p-8 shadow-sm border flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Left Section */}
          <div className="flex items-center gap-6">
            {/* Green Icon */}
            <div className="bg-green-600 w-20 h-20 rounded-3xl flex items-center justify-center shadow-md">
              <CreditCard className="text-white w-8 h-8" />
            </div>

            {/* Title + Subtitle */}
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                FEE MANAGER
              </h1>
              <p className="text-sm text-slate-400 mt-1 tracking-wide">
                HALF YEARLY CYCLES
              </p>
            </div>
          </div>

          {/* Right Dropdowns */}
          <div className="flex gap-4">
            <select className="bg-slate-100 px-5 py-3 rounded-2xl outline-none shadow-sm">
              <option>2025–26</option>
              <option>2024–25</option>
            </select>

            <select className="bg-slate-100 px-5 py-3 rounded-2xl outline-none shadow-sm">
              <option>H1 (June–Oct)</option>
              <option>H2 (Nov–Mar)</option>
            </select>
          </div>
        </div>

        {/* Table Header Section */}
        <div className="mt-8 bg-white rounded-3xl shadow-sm border p-6">
          <div className="grid grid-cols-3 text-sm uppercase tracking-wider text-slate-400 font-medium">

            <div>Student</div>

            <div className="text-center">
              Status : February (2025–26)
            </div>

            <div className="text-right">Action</div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FeeManager;
