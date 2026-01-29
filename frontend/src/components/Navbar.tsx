import { Menu } from "lucide-react";

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
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

        <h1 className="text-lg font-bold text-gray-900">
          CENTERS
        </h1>
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
