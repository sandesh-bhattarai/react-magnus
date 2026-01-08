import { Outlet, NavLink, Navigate } from "react-router";
import { useState, type ReactNode } from "react";
import { FaAnglesLeft, FaAnglesRight, FaBold, FaImages, FaMessage, FaNewspaper, FaUser, FaUsers } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../lib/hooks/useAuth";

interface IMenuSingleItem{label: string, icon: ReactNode, url: string}

function Sidebar({menu}: Readonly<{menu: Array<IMenuSingleItem>}>) {
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
        {
          menu && menu.map((item: IMenuSingleItem, index: number) => (
            <SidebarLink 
              key={index} 
              to={item.url} 
              collapsed={collapsed}
              icon={item.icon} 
              label={item.label} />
          ))
        }
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
  // 
  const {loggedInUser} = useAuth()

  if(Object.keys(loggedInUser).length) {
    // loggedInuser => permission => db
    let sidebarMenu: Array<IMenuSingleItem> = [];

    // permission ['dashboard-access': ['admin','seller','cusomer']]
    // route access ['/admin': ['dashboard-access']]
    
    if(loggedInUser.role === 'admin') {
      sidebarMenu = [
        { label: "Dashboard", icon: <FaHome />, url: "/admin" },
        { label: "User", icon: <FaUsers />, url: "/admin/users" },
        { label: "Blogs", icon: <FaNewspaper />, url: "/admin/blogs" },
        { label: "Messages", icon: <FaMessage />, url: "/admin/chats" },
      ];
    } else if(loggedInUser.role=== 'seller') {
      sidebarMenu = [
        { label: "Dashboard", icon: <FaHome />, url: "/seller" },
        { label: "Brand", icon: <FaBold />, url: "/seller/brand" },
      ];
    } else if(loggedInUser.role === 'customer') {
      sidebarMenu = [
        { label: "Dashboard", icon: <FaHome />, url: "/customer" }
      ];
    }

    return (
      <>
        <div className="flex h-screen bg-gray-100">
          {/* Sidebar */}
          <Sidebar menu={sidebarMenu} />
          {/* Main panel */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow h-16 flex items-center px-6 justify-between">
              <div className="text-2xl font-bold text-gray-800">
                Admin Dashboard
              </div>
              <div className="flex gap-3 items-center">
                <span className="size-8 bg-gray-800 flex items-center justify-center rounded-full">
                  <FaUser className="size-5 text-white" />
                </span>{" "}
                {loggedInUser?.name}
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
      </>
    );
  } else {
    return <Navigate to={'/'} />
  }
  
}