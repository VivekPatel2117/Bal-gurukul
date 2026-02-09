import { Menu } from "lucide-react";
import { useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
  centerName?: string;
  onBackToCenterClick?: () => void;
}

const Navbar = ({ onMenuClick, centerName, onBackToCenterClick }: NavbarProps) => {
  const location = useLocation(); 
  return (
    <header className="w-full bg-white border-b border-gray-200 px-4 py-4 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-center gap-3">
        {/* Hamburger (mobile only) */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-xl tracking-tight font-bold text-gray-900">
            {location.pathname.split("/")[1].toUpperCase()}
        </h1>
        {centerName && (
          <div className="flex items-center gap-3">
        {/* Badge */}
        <span className="rounded-full bg-orange-100 px-4 py-1 text-sm font-semibold tracking-tight text-orange-600">
          {centerName}
        </span>

        {/* Back Button */}
        <button
          onClick={onBackToCenterClick}
          className="flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-sm font-medium tracking-tight text-slate-700 hover:bg-slate-200"
        >
          <ArrowLeft size={16} />
          Back to Centers
        </button>
      </div>
        )}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="text-right leading-tight hidden sm:block">
          <p className="text-sm font-semibold text-gray-900">
            Super Admin
          </p>
          <p className="text-xs font-bold text-orange-500">
            ONLINE
          </p>
        </div>

        <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
          <span className="text-orange-500 font-bold text-sm">
            S
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
