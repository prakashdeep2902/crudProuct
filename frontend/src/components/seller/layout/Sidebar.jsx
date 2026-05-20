import React from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0F172A] text-white min-h-screen p-5">

      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Shop<span className="text-orange-500">Kart</span>
        </h1>

        <p className="text-gray-400 text-sm">
          Seller Panel
        </p>
      </div>

      {/* Menu */}
      <div className="space-y-3">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-500">
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10">
          <Package size={18} />
          Products
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10">
          <ShoppingCart size={18} />
          Orders
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10">
          <Users size={18} />
          Customers
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10">
          <Settings size={18} />
          Settings
        </button>

      </div>

      {/* Logout */}
      <div className="absolute bottom-5 left-5 right-5">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500 bg-white/10">
          <LogOut size={18} />
          Logout
        </button>
      </div>

    </div>
  );
};

export default Sidebar;