import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  busName: string;
};

const AddStudentToBusModal = ({
  open,
  onOpenChange,
  busName,
}: Props) => {
  const [search, setSearch] = useState("");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0 border-none bg-transparent shadow-none max-w-md">

        <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl">

          {/* Top Section */}
          <div className="bg-slate-200 p-8 relative">

            <button
              onClick={() => onOpenChange(false)}
              className="absolute top-6 right-6 bg-white p-3 rounded-2xl hover:bg-slate-100"
            >
              <X />
            </button>

            <p className="text-blue-600 font-semibold tracking-wide">
              ADD TO BUS
            </p>

            <h2 className="text-2xl font-bold mt-1">
              {busName}
            </h2>

            <input
              type="text"
              placeholder="Search Students..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mt-6 w-full px-6 py-4 rounded-2xl bg-white outline-none shadow-sm"
            />
          </div>

          {/* Empty State */}
          <div className="p-16 text-center text-slate-300 font-semibold">
            No students found
          </div>

        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddStudentToBusModal;
