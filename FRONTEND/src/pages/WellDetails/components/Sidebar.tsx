import React from 'react';
import {
  LayoutDashboard,
  CircleDot,
  Compass,
  BarChart3,
  FileText,
  Bell,
  FolderKanban,
  Settings,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  activeTab?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab = 'Wells' }) => {
  const navigate = useNavigate();

  const navItems = [
    { name: 'Dashboard', icon: LayoutDashboard, path: '/workspace' },
    { name: 'Wells', icon: CircleDot, path: '/wells/OIL-159-F-7' },
    { name: 'Offset Wells', icon: Compass, path: '/workspace' },
    { name: 'Analytics', icon: BarChart3, path: '/workspace' },
    { name: 'Reports', icon: FileText, path: '/workspace' },
    { name: 'Alerts', icon: Bell, path: '/workspace' },
    { name: 'Documents', icon: FolderKanban, path: '/workspace' },
    { name: 'Settings', icon: Settings, path: '/workspace' },
  ];

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between h-screen sticky top-0 shrink-0 select-none z-20">
      <div>
        {/* Logo Section */}
        <div className="p-5 flex items-center gap-3 border-b border-gray-100">
          <div className="w-9 h-9 bg-[#D92D20] rounded-md flex items-center justify-center text-white font-extrabold text-lg shadow-sm">
            <span className="text-[#FDB813]">N</span>
          </div>
          <div>
            <div className="font-extrabold text-xl tracking-tight leading-none text-gray-900">
              NWIS
            </div>
            <div className="text-[9px] text-gray-500 font-semibold tracking-wider uppercase mt-0.5">
              Well Intelligence
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1 mt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.name === activeTab;
            return (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-[#FFF8E6] text-gray-900 border-l-4 border-[#FDB813] font-semibold'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#FDB813]' : 'text-gray-400'}`} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Footer / User Profile Section */}
      <div className="p-3 border-t border-gray-100 space-y-2">
        <button
          onClick={() => navigate('/workspace')}
          className="w-full flex items-center gap-3 px-3 py-2 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
        >
          <HelpCircle className="w-4 h-4 text-gray-400" />
          <span>Help & Support</span>
        </button>

        <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl border border-gray-100 mt-2">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Rituraj Baruah"
            className="w-9 h-9 rounded-full object-cover border border-gray-200"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold text-gray-900 truncate">Rituraj Baruah</p>
            <p className="text-[10px] text-gray-500 truncate">Drilling Engineer</p>
          </div>
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </div>
      </div>
    </aside>
  );
};
