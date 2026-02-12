import { useState } from "react";
import { toast } from "sonner";

const Leaderboard = () => {
  const [leaderName, setLeaderName] = useState("");

  const handleAdd = () => {
    if (!leaderName.trim()) {
      toast.error("Leader name is required");
      return;
    }

    console.log("New Leader:", leaderName);

    toast.success("Leader added successfully");
    setLeaderName("");
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header Card */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-[40px] px-10 py-8 flex items-center justify-between shadow-lg">

          {/* Left */}
          <div>
            <h1 className="text-3xl font-bold text-white">
              LEADERBOARD
            </h1>
            <p className="text-purple-100 text-sm mt-1">
              MANAGE LEADERS & GROUPS
            </p>
          </div>

          {/* Right Input + Button */}
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="New Leader Name"
              value={leaderName}
              onChange={(e) => setLeaderName(e.target.value)}
              className="bg-white px-5 py-3 rounded-2xl outline-none w-64 shadow-sm"
            />

            <button
              onClick={handleAdd}
              className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-2xl shadow hover:scale-105 transition"
            >
              ADD
            </button>
          </div>
        </div>

        {/* Empty State Area */}
        <div className="mt-16 text-center text-slate-400 font-medium">
          No leaders created yet.
        </div>

      </div>
    </div>
  );
};

export default Leaderboard;
