import React from "react";
import { Home, PieChart, Bell } from "lucide-react";
import { cn } from "../../utils/cn";
import { Link, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const SidebarItem = ({
  icon: Icon,
  label,
  path,
}: {
  icon: any;
  label: string;
  path: string;
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link to={path}>
      <div
        className={cn(
          "flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer group",
          isActive
            ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
            : "text-slate-500 hover:bg-white hover:text-blue-600",
        )}
      >
        <Icon
          size={20}
          className={cn(
            "transition-transform group-hover:scale-110",
            isActive ? "text-white" : "text-current",
          )}
        />
        <span className="font-medium">{label}</span>
      </div>
    </Link>
  );
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex">
      {/* Sidebar */}
      <aside className="w-64 fixed h-full bg-slate-50/50 backdrop-blur-xl border-r border-slate-200 hidden md:flex flex-col p-6 z-20">
        <div className="flex items-center gap-2 mb-10 px-2">
          <img
            src="/favicon.png"
            alt="Logo"
            className="w-8 h-8 rounded-lg shadow-md"
          />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-indigo-600">
            Xpense
          </span>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem icon={Home} label="Overview" path="/" />
          <SidebarItem icon={PieChart} label="Analytics" path="/analytics" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 relative">
        {/* Header */}
        <header className="h-20 px-8 flex items-center justify-between top-0 z-10 bg-slate-50/80 backdrop-blur-md border-b border-white/20">
          <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
          <Bell />
        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
