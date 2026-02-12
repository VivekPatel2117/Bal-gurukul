import CenterMasterHeader from "../components/CenterMasterHeader";
import CenterCard from "../components/CenterCard";
import axios from "axios";
import { useEffect, useState } from "react";
import CenterCardSkeletonGrid from "../components/CenterCardSkeletonGrid";
import { useNavigate } from "react-router-dom";
import UpdateCenterDialog from "../components/UpdateCenterDialog";
import { toast } from "sonner";
import DeleteCenterDialog from "../components/DeleteCenterDialog";
const Center = () => {
  interface Center {
    _id: string;
    center_name: string;
    center_address: string;
    center_phone: string;
    center_pincode: string;
    center_admins: string[];
    users: string[];
    createdAt?: string;
    updatedAt?: string;
  }

  const navigate = useNavigate();
  const [centerData, setCenterData] = useState<Center[]>([]);
  const [isLoading, setIsloading] = useState(true);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [updatedName, setUpdatedName] = useState("");
  const [selectedCenter, setSelectedCenter] = useState<Center>();
const [deleteModalOpen, setDeleteModalOpen] = useState(false);
const deleteCenter = async () => {
  try {
    const id = selectedCenter?._id;
    if (!id) return;

    const response = await axios.delete(
      import.meta.env.VITE_BACKEND_URL + `/centers/${id}`
    );

    if (response.status === 200) {
      toast.success("Center deleted successfully");
      setDeleteModalOpen(false);
      fetchCenterData();
    }
  } catch (error) {
    console.log(error);
    toast.error("Failed to delete center");
  }
};

  const copyToClipboard = async (text: string) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  };

  const fetchCenterData = async () => {
    try {
      setIsloading(true);
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/centers",
      );
      if (response.status === 200) {
        console.log(response.data);
        setCenterData(response.data.data);
        setIsloading(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsloading(false);
    }
  };
  const updateCenterName = async () => {
    try{
      const id = selectedCenter?._id;
      if(!id) return;
       const data = {
    center_name: updatedName,
    center_address: "",
    center_phone: "",
    center_pincode: "",
  }
      const response = await axios.put(import.meta.env.VITE_BACKEND_URL + `/centers/${id}`, data);
      if(response.status === 200){
        toast.success("Updated center name successfully");
        setUpdateModalOpen(false);
        fetchCenterData();
      }

    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCenterData();
  }, []);

  return (
    <div className="grid gap-4">
      <CenterMasterHeader
        title="CENTER MASTER"
        subtitle="Create & Manage Centers"
        onSuccessCreate={() => fetchCenterData()}
      />

      {isLoading ? (
        <CenterCardSkeletonGrid />
      ) : centerData.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {centerData.map((center) => (
            <CenterCard
              key={center._id}
              name={center.center_name}
              onLink={() =>
                copyToClipboard(
                  `${window.location.origin}/dashboard/${center._id}`,
                )
              }
              onViewData={() => navigate(`/dashboard/${center._id}`)}
              onDelete={() => {
  setSelectedCenter(center);
  setDeleteModalOpen(true);

              }}
              onEdit={() => {
                setUpdateModalOpen(true);
                setSelectedCenter(center);
                setUpdatedName(center.center_name);
              }}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-slate-500">No centers found</p>
      )}
      <UpdateCenterDialog
        open={updateModalOpen}
        onOpenChange={(e)=> setUpdateModalOpen(e)}
        setCenterName={setUpdatedName}
        centerName={updatedName}
        onUpdate={updateCenterName}
        onClose={()=> setUpdateModalOpen(false)}
      />
      <DeleteCenterDialog
  open={deleteModalOpen}
  onOpenChange={setDeleteModalOpen}
  centerName={selectedCenter?.center_name || ""}
  onConfirm={deleteCenter}
/>

    </div>
  );
};

export default Center;
