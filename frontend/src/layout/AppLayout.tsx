import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";
interface CenterHeaderData {
  center_name?: string;
}
const AppLayout = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { centerId } = useParams();
  const [centerHeaderData, setCenterHeaderData] = useState<CenterHeaderData>();
  const handleCenterDataFetch = async () => {
    try {
      if(!centerId) return;
      console.log(centerId);
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + `/centers/${centerId}`
      );
      if(response.status === 200){
        setCenterHeaderData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleCenterDataFetch();
  }, [centerId])
  
  return (
    <>
      <div className="flex h-screen bg-gray-50 overflow-hidden">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        {/* Main Section */}
        <div className="flex flex-col flex-1">
          {/* Navbar */}
          <Navbar centerName={centerHeaderData?.center_name} onBackToCenterClick={()=> navigate("/centers")} onMenuClick={() => setSidebarOpen(true)} />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto p-4 sm:p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
