import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonWrapper from "@/common/CommonWrapper";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/bgremovelogo.png";
import bgImage from "@/assets/home.jpg";
// import { X } from 'lucide-react';
import { useTranslation } from "react-i18next";

const Home = () => {
  const { } = useTranslation();
  const [showWelcome, setShowWelcome] = useState(false);
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has already accepted the disclosure
    const hasAccepted = localStorage.getItem("age-verification-accepted");
    if (hasAccepted) {
      navigate("/user/all");
      return;
    }
  }, [navigate]);

  const handleContinue = () => {
    localStorage.setItem("age-verification-accepted", "true");
    navigate("/user/all");
  };

  return (
    <CommonWrapper
      className="bg-cover bg-center overflow-hidden min-h-screen flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability if needed */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 w-full flex justify-center">
        <AnimatePresence mode="wait">
          {!showWelcome ? (
            <motion.div
              key="logo"
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1.5, 20] // Zoom in excessively at the end to "vanish"
              }}
              transition={{
                duration: 2.5,
                times: [0, 0.2, 0.8, 1], // Defines the timing for each keyframe
                ease: "easeInOut"
              }}
              onAnimationComplete={() => setShowWelcome(true)}
              exit={{ opacity: 0 }}
            >
              <img src={logo} alt="Logo" className="w-64 md:w-96 h-auto object-contain" />
            </motion.div>
          ) : (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative max-w-lg w-full bg-[#0D0D0D]/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl border border-[#FACC15]/20 p-8 md:p-12 transition-colors duration-300"
              >
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-black text-[#FACC15] text-left mb-6 leading-tight tracking-tighter uppercase">
                  Age Verification
                </h2>

                {/* Description */}
                <p className="text-[14px] md:text-[15px] text-gray-400 text-left leading-relaxed mb-10 opacity-90 font-medium">
                  This Service contains adult-oriented content and advertising, including casino/gambling-related
                  promotions. Access is strictly restricted to <span className="text-[#FACC15] font-bold">18+</span> individuals.
                  By proceeding, you certify that you meet the age requirements and agree to our Terms and Privacy Policy.
                </p>

                {/* Checkboxes */}
                <div className="space-y-5 mb-12">
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={isAgeConfirmed}
                        onChange={(e) => setIsAgeConfirmed(e.target.checked)}
                        className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-[#FACC15]/30 bg-transparent transition-all checked:bg-[#FACC15] checked:border-[#FACC15]"
                      />
                      <svg
                        className="absolute h-4 w-4 pointer-events-none hidden peer-checked:block text-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-[15px] md:text-[16px] text-gray-300 font-bold group-hover:text-white transition-colors">
                      I confirm I am 18 or older.
                    </span>
                  </label>

                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input
                        type="checkbox"
                        checked={isTermsAccepted}
                        onChange={(e) => setIsTermsAccepted(e.target.checked)}
                        className="peer h-6 w-6 cursor-pointer appearance-none rounded-lg border-2 border-[#FACC15]/30 bg-transparent transition-all checked:bg-[#FACC15] checked:border-[#FACC15]"
                      />
                      <svg
                        className="absolute h-4 w-4 pointer-events-none hidden peer-checked:block text-black left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-[15px] md:text-[16px] text-gray-300 font-bold group-hover:text-white transition-colors">
                      I accept the <span className="text-[#FACC15] underline underline-offset-4 decoration-[#FACC15]/40 hover:decoration-[#FACC15]">Terms & Privacy Policy</span>.
                    </span>
                  </label>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => window.history.back()}
                    className="flex-1 h-14 rounded-2xl border-2 border-white/10 text-white font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all active:scale-95"
                  >
                    Exit Site
                  </button>
                  <button
                    disabled={!isAgeConfirmed || !isTermsAccepted}
                    onClick={handleContinue}
                    className={`flex-1 h-14 rounded-2xl font-black text-sm uppercase tracking-widest transition-all active:scale-95 ${isAgeConfirmed && isTermsAccepted
                        ? "bg-[#FACC15] text-black hover:bg-[#EAB308] shadow-xl shadow-[#FACC15]/20"
                        : "bg-white/5 text-white/20 cursor-not-allowed"
                      }`}
                  >
                    Enter App
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CommonWrapper>
  );
};

export default Home;




