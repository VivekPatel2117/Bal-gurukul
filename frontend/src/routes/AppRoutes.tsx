import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

import Login from "../pages/login";
import Center from "../pages/Center";
import Dashboard from "../pages/Dashboard";
import MasterDatabase from "../pages/MasterDatabase";
import EventManager from "../pages/EventManager";
import Leaderboard from "../pages/Leaderboard";
import Attendance from "../pages/Attendance";
import FeeManager from "../pages/FeeManager";
import RatingBoard from "../pages/Ratingboard";
import Reports from "../pages/Reports";
import BusManagement from "../pages/BusManagement";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />

      {/* Protected / App Layout */}
      <Route element={<AppLayout />}>
        <Route path="/centers" element={<Center />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/dashboard/:centerId" element={<Dashboard />} /> 
        <Route path="/users" element={<MasterDatabase />} />
        <Route path="/events" element={<EventManager/>} />
        <Route path="/leaderboard" element={<Leaderboard/>} />
        <Route path="/attendance" element={<Attendance/>} />
        <Route path="/fees" element={<FeeManager/>} />
        <Route path="/rating" element={<RatingBoard/>} />
        <Route path="/reports" element={<Reports/>} />
        <Route path="/busManagement" element={<BusManagement/>}/>
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
