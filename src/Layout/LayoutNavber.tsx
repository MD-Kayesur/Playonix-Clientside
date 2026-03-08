"use client"
// import { ModeToggle } from "@/components/ThemeToggle/mode-toggle"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"



// Helper function to get initials from name
// const getInitials = (name: string) => {
//   if (!name) return 'U';
//   return name
//     .split(' ')
//     .map(word => word[0])
//     .join('')
//     .toUpperCase()
//     .slice(0, 2);
// };

import { useTranslation } from "react-i18next";

export const LayoutNavber: React.FC = () => {
  const { t } = useTranslation();
  const [showLogout] = useState(false)
  const navigate = useNavigate()
  const [_user, setUser] = useState<{ name: string, role: string, avatar: string } | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse user data", e);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  return (
    <div className="md:px-10 px-5 relative z-[9999] py-5 flex items-center justify-between  ">
      <div>

      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-2 mt-1.5 md:mt-2">
      </div>
      {showLogout && (
        <div className="absolute top-5 left-70 transform -translate-x-1/2 w-full flex justify-center">
          <button
            onClick={handleLogout}
            className="text-sm bg-[#FACC15] text-black font-semibold px-4 py-2 rounded-md"
          >
            {t('common.logout', 'Logout')}
          </button>
        </div>
      )}
    </div>
  )
}
