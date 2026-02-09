import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  centerName: string;
  onUpdate: () => void;
};

const UpdateCenterDialog = ({
  open,
  onOpenChange,
  centerName,
  onUpdate,
}: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="tracking-tight">
            Update Center
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 text-sm text-slate-600">
          Are you sure you want to update the center{" "}
          <span className="font-semibold text-slate-900">
            {centerName}
          </span>
          ?
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>

          <Button onClick={onUpdate}>
            Update
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCenterDialog;
