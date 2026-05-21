import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname.split("/")[2];
  const [activeMenu, setActiveMenu] = useState(currentPage);

  const menuItems = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={18} />,
      path: "/seller/dashboard",
    },

    {
      name: "Product",
      icon: <Package size={18} />,
      path: "/seller/product",
    },

    {
      name: "Order",
      icon: <ShoppingCart size={18} />,
      path: "/seller/order",
    },

    {
      name: "Customer",
      icon: <Users size={18} />,
      path: "/seller/customer",
    },

    {
      name: "Setting",
      icon: <Settings size={18} />,
      path: "/seller/setting",
    },
  ];

  const handleSidebarClick = (item) => {
    setActiveMenu(item.name);
    navigate(item.path);
  };

  return (
    <div className="w-64 bg-[#0F172A] text-white min-h-screen p-5 relative">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">
          Shop<span className="text-orange-500">Kart</span>
        </h1>

        <p className="text-gray-400 text-sm">Seller Panel</p>
      </div>

      {/* Menu */}
      <div className="space-y-3">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleSidebarClick(item)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-all duration-300
              
              ${activeMenu.toLocaleLowerCase() == item.name.toLocaleLowerCase() ? "bg-orange-500" : "hover:bg-white/10"}
            `}
          >
            {item.icon}

            {item.name}
          </button>
        ))}
      </div>

      {/* Logout */}
      <div className="absolute bottom-5 left-5 right-5">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-500 bg-white/10 transition-all duration-300">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
