import { Routes, Route } from "react-router-dom";
import AppLayout from "../layout/AppLayout";

import Login from "../pages/login";
import Center from "../pages/Center";
import Dashboard from "../pages/Dashboard";
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />

      {/* Protected / App Layout */}
      <Route element={<AppLayout />}>
        <Route path="/centers" element={<Center />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
