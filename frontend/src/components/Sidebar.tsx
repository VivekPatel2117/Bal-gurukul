import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  Building2,
  Users,
  Trophy,
  Crown,
  CalendarCheck,
  Wallet,
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem = ({
  icon,
  label,
  active = false,
  onClick,
}: SidebarItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 px-5 py-3 rounded-full font-semibold text-sm transition w-full text-left
        ${
          active
            ? "bg-orange-500 text-white shadow-lg"
            : "text-gray-400 hover:bg-orange-50 hover:text-orange-500"
        }
      `}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

/* ---------------- Menu Config ---------------- */

const menuItems = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <LayoutGrid size={20} />,
  },
  {
    label: "Manage Centers",
    path: "/centers",
    icon: <Building2 size={20} />,
  },
  {
    label: "Master List",
    path: "/users",
    icon: <Users size={20} />,
  },
  {
    label: "Event Manager",
    path: "/events",
    icon: <Trophy size={20} />,
  },
  {
    label: "Leaderboard",
    path: "/leaderboard",
    icon: <Crown size={20} />,
  },
  {
    label: "Attendance",
    path: "/attendance",
    icon: <CalendarCheck size={20} />,
  },
  {
    label: "Fee Manager",
    path: "/fees",
    icon: <Wallet size={20} />,
  },
];

/* ---------------- Sidebar ---------------- */

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
    onClose(); // close sidebar on mobile
  };

  return (
    <>
      {/* Overlay (mobile) */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 z-40 lg:hidden transition-opacity
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Sidebar */}
      <aside
        className={`p-4 fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Brand */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center shadow">
            <span className="text-white font-bold text-xl">B</span>
          </div>
          <div>
            <h2 className="font-bold text-gray-900 text-lg">
              Bal Gurukul
            </h2>
            <p className="text-xs font-semibold text-orange-500 tracking-wide">
              GLOBAL ADMIN
            </p>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              active={location.pathname === item.path}
              onClick={() => handleNavigate(item.path)}
            />
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
