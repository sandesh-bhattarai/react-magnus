import { Outlet, NavLink } from "react-router";
import { useState } from "react";
import { FaAnglesLeft, FaAnglesRight, FaChartBar, FaFile, FaUsers, FaGear } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className={`bg-teal-900 text-white flex flex-col transition-all duration-300 ${collapsed ? "w-16" : "w-56"} min-h-screen`}>
      <div className="flex items-center justify-between px-4 h-16 border-b border-teal-800">
        <span className={`font-extrabold tracking-wider text-lg ${collapsed && "hidden"}`}>ADMIN</span>
        <button
          className="ml-auto p-1 rounded hover:bg-teal-700 transition"
          onClick={() => setCollapsed((c: boolean) => !c)}
          title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          <span>{collapsed ? <FaAnglesRight /> : <FaAnglesLeft />}</span>
        </button>
      </div>
      <nav className="flex-1 mt-4 flex flex-col gap-2">
        <SidebarLink to="/admin/dashboard" collapsed={collapsed} icon={<FaHome />} label="Dashboard" />
        <SidebarLink to="/admin/user" collapsed={collapsed} icon={<FaUsers />} label="Users" />
        <SidebarLink to="/admin/analytics" collapsed={collapsed} icon={<FaChartBar />} label="Analytics" />
        <SidebarLink to="/admin/reports" collapsed={collapsed} icon={<FaFile />} label="Reports" />
        <SidebarLink to="/admin/settings" collapsed={collapsed} icon={<FaGear />} label="Settings" />
      </nav>
    </div>
  );
}
// SidebarLink component (uses NavLink)
type SidebarLinkProps = {
  to: string;
  icon: React.ReactNode;
  label: string;
  collapsed: boolean;
};

function SidebarLink({ to, icon, label, collapsed }: SidebarLinkProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }: any) =>
        `flex items-center gap-3 px-4 py-2 rounded transition hover:bg-teal-700 font-medium ${isActive ? 'bg-teal-800' : ''} ${collapsed && "justify-center"}`
      }
      title={label}
    >
      <span className="text-xl">{icon}</span>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  );
}

export default function UserLayout() {
  return (
    <>
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main panel */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow h-16 flex items-center px-6 justify-between">
          <div className="text-2xl font-bold text-gray-800">Admin Dashboard</div>
          <div>
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded transition">Settings</button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          

          {/* Render nested route content: */}
          <div className="mt-4">
            
            <Outlet />


          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white text-center text-gray-500 text-sm h-12 flex items-center justify-center shadow-inner">
          © 2024 Admin Dashboard. All rights reserved.
        </footer>
      </div>
    </div>
  </>);
}