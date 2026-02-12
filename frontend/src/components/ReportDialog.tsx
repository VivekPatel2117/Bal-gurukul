import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { X, Download } from "lucide-react";
import { useState } from "react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  headerColor: string;
};

const filters = ["TODAY", "WEEK", "MONTH", "YEAR"];

const ReportDialog = ({
  open,
  onOpenChange,
  title,
  headerColor,
}: Props) => {
  const [activeFilter, setActiveFilter] = useState("MONTH");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none bg-transparent shadow-none max-w-md">

        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl relative">

          {/* Header */}
          <div className={`h-40 bg-gradient-to-r ${headerColor} relative`}>
            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-6 right-6 bg-white/20 backdrop-blur-md text-white w-12 h-16 rounded-2xl flex items-center justify-center hover:bg-white/30 transition"
            >
              <X />
            </button>
          </div>

          {/* Floating Icon */}
          <div className="flex justify-center -mt-14">
            <div className="w-28 h-28 bg-slate-200 rounded-3xl shadow-md flex items-center justify-center text-4xl font-bold text-slate-700">
              {title.charAt(0)}
            </div>
          </div>

          {/* Content */}
          <div className="px-8 pb-10 pt-6 text-center">

            <h2 className="text-xl font-bold tracking-tight">
              {title.toUpperCase()}
            </h2>

            {/* Filters */}
            <div className="flex justify-center gap-3 mt-5">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                    activeFilter === filter
                      ? "bg-pink-500 text-white"
                      : "bg-slate-100 text-slate-500 hover:bg-slate-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Download */}
            <button className="mt-6 w-full bg-green-100 text-green-700 font-semibold py-3 rounded-2xl flex items-center justify-center gap-2 hover:bg-green-200 transition">
              <Download size={18} />
              DOWNLOAD REPORT
            </button>

            <div className="mt-10 text-sm text-slate-400 italic font-medium">
              NO {title.toUpperCase()} FOUND
            </div>

          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReportDialog;
