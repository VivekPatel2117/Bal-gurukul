import { Search, Upload, Download, Database } from "lucide-react";

const MasterDatabase = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="bg-white rounded-3xl shadow-sm border p-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          
          {/* Left */}
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">
              MASTER DATABASE
            </h1>

            <div className="bg-green-100 p-2 rounded-xl">
              <Download className="text-green-600 w-5 h-5" />
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search Name / ID..."
                className="pl-9 pr-4 py-2 rounded-full bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>

            {/* Register Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium shadow-md transition">
              REGISTER
            </button>

            {/* Import CSV */}
            <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium shadow-md transition">
              <Upload size={16} />
              IMPORT CSV
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mt-6">
          {["All Std", "All Zones", "All Ages", "All Birthdays"].map(
            (filter, index) => (
              <select
                key={index}
                className="px-4 py-2 bg-slate-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>{filter}</option>
              </select>
            )
          )}
        </div>

        {/* Empty State */}
        <div className="mt-8 border-2 border-dashed border-slate-200 rounded-3xl p-16 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-5 rounded-2xl">
              <Database className="text-blue-600 w-8 h-8" />
            </div>
          </div>

          <h2 className="text-lg font-semibold mb-2">
            Start with Sample Data
          </h2>

          <p className="text-sm text-slate-500 mb-6">
            DATABASE IS EMPTY. LOAD 10 SAMPLE STUDENTS & LEADERS?
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition">
            LOAD 10 SAMPLES
          </button>
        </div>

        {/* Table Header (Below Empty State Section) */}
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-slate-500 uppercase text-xs tracking-wider border-b">
              <tr>
                <th className="py-3">ID</th>
                <th>Student</th>
                <th>Father</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Zone</th>
                <th>STD</th>
                <th>Age</th>
                <th>Bus</th>
                <th>Leader</th>
                <th>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MasterDatabase;
