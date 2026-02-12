import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void; // NEW
  centerName: string;
  setCenterName: (name: string) => void;  
  onUpdate: (updatedName: string) => void;
};

const UpdateCenterDialog = ({
  open,
  onOpenChange,
  onClose,
  centerName,
  setCenterName,
  onUpdate,
}: Props) => {


  const handleClose = () => {
    onOpenChange(false);
    onClose(); // call extra close logic
  };

  const handleUpdate = () => {
    onUpdate(centerName);
    handleClose();
  };

  return (
    <Dialog open={open} onOpenChange={(value) => {
      if (!value) handleClose();
      else onOpenChange(value);
    }}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="tracking-tight">
            Update Center
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          <div className="space-y-1">
            <Label>Center Name</Label>
            <Input
              value={centerName}
              onChange={(e) => setCenterName(e.target.value)}
              placeholder="Enter center name"
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={handleClose}
          >
            Cancel
          </Button>

          <Button onClick={handleUpdate}>
            Update
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateCenterDialog;
