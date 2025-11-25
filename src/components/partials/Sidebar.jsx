import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SecurityIcon from "@mui/icons-material/Security";
import TimelineIcon from "@mui/icons-material/Timeline";
import ScienceIcon from "@mui/icons-material/Science";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div
      className={`h-full bg-[#1f2937] text-white transition-all duration-300
        ${collapsed ? "w-20" : "w-64"} shadow-lg flex flex-col`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <h1 className="text-xl font-bold">SafeLanka</h1>}
        <button onClick={() => setCollapsed(!collapsed)}>
          <MenuIcon />
        </button>
      </div>

      <nav className="flex flex-col gap-1 mt-4">
        <Link
          to="/dashboard/admin"
          className={`px-5 py-3 flex items-center gap-3 rounded-md text-sm 
            ${
              location.pathname.includes("/admin")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }
          `}
        >
          <DashboardIcon />
          {!collapsed && "Admin Dashboard"}
        </Link>

        <Link
          to="/dashboard/officer"
          className={`px-5 py-3 flex items-center gap-3 rounded-md text-sm 
            ${
              location.pathname.includes("/officer")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }
          `}
        >
          <SecurityIcon />
          {!collapsed && "Officer Dashboard"}
        </Link>

        <Link
          to="/dashboard/analyst"
          className={`px-5 py-3 flex items-center gap-3 rounded-md text-sm 
            ${
              location.pathname.includes("/analyst")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }
          `}
        >
          <TimelineIcon />
          {!collapsed && "Analyst Dashboard"}
        </Link>

        <Link
          to="/dashboard/researcher"
          className={`px-5 py-3 flex items-center gap-3 rounded-md text-sm 
            ${
              location.pathname.includes("/researcher")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }
          `}
        >
          <ScienceIcon />
          {!collapsed && "Researcher Dashboard"}
        </Link>

        <Link
          to="/dashboard/supervisor"
          className={`px-5 py-3 flex items-center gap-3 rounded-md text-sm 
            ${
              location.pathname.includes("/supervisor")
                ? "bg-gray-700"
                : "hover:bg-gray-700"
            }
          `}
        >
          <SupervisorAccountIcon />
          {!collapsed && "Supervisor Dashboard"}
        </Link>
      </nav>

      <div className="flex-1"></div>
    </div>
  );
};

export default Sidebar;
