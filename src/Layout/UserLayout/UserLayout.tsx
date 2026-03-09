import { useState, useEffect } from "react";
import { UserSidebar } from "./UserSidebar";
import { Outlet } from "react-router-dom";
import { Menu } from "lucide-react";

import { SidebarSearch } from "@/components/SidebarSearch";

export default function UserLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const iconStroke = isMobile ? 3 : 2;

  // Function to check if the screen is mobile or desktop
  const checkIfMobile = () => {
    const mobile = window.innerWidth < 768; // md breakpoint
    setIsMobile(mobile);
    // On desktop, sidebar should be open by default
    if (!mobile) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Check on initial load
    checkIfMobile();

    // Event listener to handle window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);


  return (
    <div className="flex h-[100dvh] relative overflow-hidden bg-transparent">
      {/* Sidebar Container */}
      <div
        className={`fixed md:relative inset-0 md:inset-auto z-[10000] md:z-auto transition-all duration-300 flex-shrink-0 
          ${isMobile ? (sidebarOpen ? "w-70" : "w-0 overflow-hidden pointer-events-none") : (isCollapsed ? "md:w-20" : "md:w-70")}
        `}
      >
        {/* Mobile Overlay backdrop */}
        {isMobile && sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 md:hidden pointer-events-auto"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* The actual sidebar content */}
        <div className={`relative h-full transition-all duration-300 
          ${isMobile ? (sidebarOpen ? "translate-x-0" : "-translate-x-full") : "translate-x-0"}
        `}>
          <div className={`h-full bg-white dark:bg-black border-r border-black/10 dark:border-white/5 shadow-2xl pointer-events-auto transition-all duration-300 ${isCollapsed ? "w-20" : "w-70"}`}>
            <UserSidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              isCollapsed={isCollapsed}
              setIsCollapsed={setIsCollapsed}
            />
          </div>
        </div>
      </div>

      {/* Menu Toggle Button - Mobile only */}
      {isMobile && !sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-0 right-1 z-[203] w-14 h-14 text-white rounded-full flex items-center justify-center active:scale-95 transition-all hover:bg-white/10 md:hidden"
          aria-label="Open menu"
        >
          <Menu strokeWidth={iconStroke} className="w-7 h-7 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]" />
        </button>

      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden relative w-full">


        {/* Main Content */}
        <div className="flex-1 overflow-auto no-scrollbar">
          <Outlet />
        </div>
      </div>
      <SidebarSearch
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        disableTrigger={true}
      />
    </div>
  );
}
