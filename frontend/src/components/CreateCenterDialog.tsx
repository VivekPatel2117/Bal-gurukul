import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type CreateCenterFormData = {
  center_name: string;
  center_address: string;
  center_phone: string;
  center_pincode: string;

  name: string;
  username: string;
  email: string;
  password: string;
  dob?: string;
  address?: string;
  phone?: string;
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: CreateCenterFormData) => Promise<void>;
};

const CreateCenterDialog = ({
  open,
  onOpenChange,
  onSubmit,
}: Props) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<CreateCenterFormData>({
    center_name: "",
    center_address: "",
    center_phone: "",
    center_pincode: "",
    name: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    address: "",
    phone: "",
  });

  const handleChange = (
    key: keyof CreateCenterFormData,
    value: string
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await onSubmit(form);
      onOpenChange(false); // close dialog
      setForm({
        center_name: "",
        center_address: "",
        center_phone: "",
        center_pincode: "",
        name: "",
        username: "",
        email: "",
        password: "",
        dob: "",
        address: "",
        phone: "",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="tracking-tight">
            Create New Center
          </DialogTitle>
        </DialogHeader>

        {/* FORM */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Center Info */}
          <div className="md:col-span-2 font-semibold text-slate-600">
            Center Details
          </div>

          <div>
            <Label>Center Name</Label>
            <Input
              value={form.center_name}
              onChange={(e) =>
                handleChange("center_name", e.target.value)
              }
            />
          </div>

          <div>
            <Label>Center Phone</Label>
            <Input
              value={form.center_phone}
              onChange={(e) =>
                handleChange("center_phone", e.target.value)
              }
            />
          </div>

          <div className="md:col-span-2">
            <Label>Center Address</Label>
            <Input
              value={form.center_address}
              onChange={(e) =>
                handleChange("center_address", e.target.value)
              }
            />
          </div>

          <div>
            <Label>Pincode</Label>
            <Input
              value={form.center_pincode}
              onChange={(e) =>
                handleChange("center_pincode", e.target.value)
              }
            />
          </div>

          {/* Admin Info */}
          <div className="md:col-span-2 mt-4 font-semibold text-slate-600">
            Center Admin Details
          </div>

          <div>
            <Label>Name</Label>
            <Input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>

          <div>
            <Label>Username</Label>
            <Input
              value={form.username}
              onChange={(e) =>
                handleChange("username", e.target.value)
              }
            />
          </div>

          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={form.email}
              onChange={(e) =>
                handleChange("email", e.target.value)
              }
            />
          </div>

          <div>
            <Label>Password</Label>
            <Input
              type="password"
              value={form.password}
              onChange={(e) =>
                handleChange("password", e.target.value)
              }
            />
          </div>

          <div>
            <Label>Date of Birth</Label>
            <Input
              type="date"
              value={form.dob}
              onChange={(e) => handleChange("dob", e.target.value)}
            />
          </div>

          <div>
            <Label>Phone</Label>
            <Input
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <Label>Address</Label>
            <Input
              value={form.address}
              onChange={(e) =>
                handleChange("address", e.target.value)
              }
            />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={loading}
          >
            Cancel
          </Button>
          <Button onClick={handleSubmit} disabled={loading}>
            {loading ? "Creating..." : "Create Center"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCenterDialog;
