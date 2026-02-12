import { useState } from "react";
import { Bus, Plus, Pencil, Download, UserPlus } from "lucide-react";
import AddStudentToBusModal from "../components/AddStudentToBusModal";

const BusManagement = () => {
  const [selectedBus, setSelectedBus] = useState("Bus 1");
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Header Card */}
        <div className="bg-white rounded-[40px] p-8 shadow-sm border flex justify-between items-center">

          {/* Left */}
          <div className="flex items-center gap-6">
            <div className="bg-blue-600 w-20 h-20 rounded-3xl flex items-center justify-center shadow-md">
              <Bus className="text-white w-8 h-8" />
            </div>

            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                BUS ROUTES
              </h1>
              <p className="text-sm text-slate-400 tracking-wide mt-1">
                MANAGE ROUTES & STUDENTS
              </p>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">
            <select
              value={selectedBus}
              onChange={(e) => setSelectedBus(e.target.value)}
              className="bg-slate-100 px-6 py-3 rounded-2xl outline-none shadow-sm"
            >
              <option>Bus 1</option>
              <option>Bus 2</option>
              <option>Bus 3</option>
            </select>

            <button className="bg-slate-100 p-4 rounded-2xl hover:bg-slate-200">
              <Plus />
            </button>

            <button className="bg-slate-100 p-4 rounded-2xl hover:bg-slate-200">
              <Pencil />
            </button>
          </div>
        </div>

        {/* Students Card */}
        <div className="bg-white rounded-[40px] shadow-sm border overflow-hidden">

          {/* Top Section */}
          <div className="p-8 flex justify-between items-center">
            <h2 className="text-lg font-bold tracking-wide">
              STUDENTS ON {selectedBus.toUpperCase()}
            </h2>

            <div className="flex gap-4">
              <button className="bg-green-100 text-green-700 px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:bg-green-200 transition">
                <Download size={18} />
                DOWNLOAD
              </button>

              <button
                onClick={() => setOpen(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <UserPlus size={18} />
                ADD STUDENT
              </button>
            </div>
          </div>

          {/* Table Header */}
          <div className="border-t p-8 grid grid-cols-4 text-sm text-slate-400 uppercase tracking-wider font-medium">
            <div>Student</div>
            <div>Zone</div>
            <div>Contact</div>
            <div className="text-right">Action</div>
          </div>

        </div>
      </div>

      {/* Modal */}
      <AddStudentToBusModal
        open={open}
        onOpenChange={setOpen}
        busName={selectedBus}
      />
    </div>
  );
};

export default BusManagement;
