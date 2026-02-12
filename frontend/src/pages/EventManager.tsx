import { useState } from "react";
import CreateEventDialog from "../components/CreateEventDialog";

const EventManager = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Orange Header Card */}
        <div className="bg-orange-600 rounded-[40px] px-10 py-8 flex items-center justify-between shadow-lg">
          
          {/* Left */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              EVENT MANAGER
            </h1>
            <p className="text-orange-100 text-sm mt-1">
              MANAGE COMPETITIONS & ACTIVITIES
            </p>
          </div>

          {/* Right */}
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-2xl shadow hover:scale-105 transition"
          >
            CREATE EVENT
          </button>
        </div>

        {/* Empty State */}
        <div className="mt-16 text-center text-slate-400 font-medium">
          No events created yet.
        </div>

        {/* Dialog */}
        <CreateEventDialog open={open} onOpenChange={setOpen} />
      </div>
    </div>
  );
};

export default EventManager;
