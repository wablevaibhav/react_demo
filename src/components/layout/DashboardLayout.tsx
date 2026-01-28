import React from "react";
import {
  Home,
  PieChart,
  CreditCard,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";
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
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-md">
            E
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Xpense
          </span>
        </div>

        <nav className="flex-1 space-y-2">
          <SidebarItem icon={Home} label="Overview" path="/" />
          <SidebarItem icon={PieChart} label="Analytics" path="/analytics" />
          <SidebarItem icon={CreditCard} label="Cards" path="/cards" />
          <SidebarItem icon={Settings} label="Settings" path="/settings" />
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-200">
          <div className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-red-600 cursor-pointer transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 relative">
        {/* Header */}
        <header className="h-20 px-8 flex items-center justify-between sticky top-0 z-10 bg-slate-50/80 backdrop-blur-md border-b border-white/20">
          <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-colors cursor-pointer relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold">
              VW
            </div>
          </div>
        </header>

        <div className="p-8">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
