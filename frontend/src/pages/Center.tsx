import CenterMasterHeader from "../components/CenterMasterHeader";
import CenterCard from "../components/CenterCard";
import axios from "axios";
import { useEffect, useState } from "react";
import CenterCardSkeletonGrid from "../components/CenterCardSkeletonGrid";
import { useNavigate } from "react-router-dom";
import UpdateCenterDialog from "../components/UpdateCenterDialog";

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
  const [isLoading, setIsloading] = useState(false);
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
        import.meta.env.VITE_BACKEND_URL + "/centers"
      );
      if (response.status === 200) {
        console.log(response.data);
        setCenterData(response.data.data);
        setIsloading(false);
      }
    } catch (error) {
      console.log(error);
    }finally{
      setIsloading(false);
    }
  };
  useEffect(() => {
    fetchCenterData();
  }, [])
  
  return (
    <div className="grid gap-4">
       <CenterMasterHeader
        title="CENTER MASTER"
        subtitle="Create & Manage Centers"
      />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
       {isLoading ? (
  <CenterCardSkeletonGrid />
) : centerData.length > 0 ? (
  <>
    {centerData.map((center) => (
      <CenterCard
        key={center._id}
        name={center.center_name}
        onLink={() =>
          copyToClipboard(
            `${window.location.origin}/dashboard/${center._id}`
          )
        }
        onViewData={() => navigate(`/dashboard/${center._id}`)}
        onDelete={() => {
          // TODO: open delete confirmation dialog
          console.log("Delete center:", center._id);
        }}
        onEdit={() => {
          // TODO: open edit dialog
          console.log("Edit center:", center._id);
        }}
      />
    ))}
  </>
) : (
  <p className="text-center text-sm text-slate-500">
    No centers found
  </p>
)}
     
      </div>
<UpdateCenterDialog open={false} onOpenChange={() => {}} centerName="" onUpdate={() => {}}  />
    </div>
  );
};

export default Center;
