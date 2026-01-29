import DashboardStats from "../components/DashboardStats";
import DashboardPanels from "../components/DashboardPanels";
import BirthdaysPanel from "../components/BirthdaysPanel";
const Dashboard = () => {
  return (
    <div className="grid gap-4">
     <DashboardStats />
     <DashboardPanels />
     <BirthdaysPanel/>
    </div>
  );
};

export default Dashboard;
