import React from 'react';
import { ArrowLeft, Search, Bell, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderNavProps {
  wellId: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({ wellId }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/wells/OIL-159-F-7');
    }
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 z-10 shadow-2xs">
      {/* Top Left Navigation: Back Button + Breadcrumbs + Page Title */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
          {/* Back Button */}
          <button
            onClick={handleGoBack}
            className="flex items-center gap-1 text-gray-700 hover:text-black font-semibold bg-gray-100 hover:bg-gray-200 px-2.5 py-1 rounded-md transition-colors mr-2 cursor-pointer shadow-2xs"
            title="Go to previous page"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back</span>
          </button>

          <span
            onClick={() => navigate('/wells/OIL-159-F-7')}
            className="hover:underline cursor-pointer"
          >
            Dashboard
          </span>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="hover:underline cursor-pointer">Well Overview</span>
          <ChevronRight className="w-3 h-3 text-gray-400" />
          <span className="text-gray-900 font-semibold">Well ID: {wellId}</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight mt-0.5 leading-tight">
            Well Overview
          </h1>
          <p className="text-[11px] text-[#D92D20] font-bold uppercase tracking-wider mt-0.5">
            Dashboard
          </p>
        </div>
      </div>

      {/* Top Right: Search and Notifications */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="relative w-64 md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search wells, reports..."
            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#FDB813] focus:border-transparent transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Notification Bell */}
        <button
          className="relative p-2 text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-4 h-4 bg-[#FDB813] text-gray-900 font-bold text-[10px] rounded-full flex items-center justify-center border border-white">
            1
          </span>
        </button>
      </div>
    </header>
  );
};
