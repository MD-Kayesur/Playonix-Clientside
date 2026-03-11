import { useState, useEffect } from "react";
import { UserSidebar } from "./UserSidebar";
import { Outlet, Link } from "react-router-dom";
import { Menu } from "lucide-react";

import { SidebarSearch } from "@/components/SidebarSearch";

export default function UserLayout() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);
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

    // Check cookie consent
    const consent = localStorage.getItem("cookie-consent-accepted");
    if (!consent) {
      setShowCookieConsent(true);
    }

    // Event listener to handle window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
//
  const handleAcceptCookies = () => {
    localStorage.setItem("cookie-consent-accepted", "true");
    setShowCookieConsent(false);
  };


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

      {/* Cookie Consent Banner */}
      {showCookieConsent && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[10001]">
          <div className="bg-[#0D0D0D]/90 backdrop-blur-xl border border-[#FACC15]/30 rounded-[2rem] p-5 md:p-7 shadow-2xl flex flex-col gap-5">
            <p className="text-gray-200 text-sm md:text-base font-bold leading-relaxed">
              We use essential cookies to improve your experience. By continuing, you agree to our
              <Link to="/cookies" className="text-[#FACC15] underline underline-offset-4 hover:opacity-80 transition-opacity ml-1">Learn more</Link>
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleAcceptCookies}
                className="flex-1 bg-[#FACC15] text-black font-black uppercase tracking-widest px-6 py-3.5 rounded-2xl hover:bg-[#EAB308] active:scale-95 transition-all shadow-lg shadow-[#FACC15]/20 text-sm"
              >
                Accept Cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
