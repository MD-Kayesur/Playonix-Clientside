import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonWrapper from "@/common/CommonWrapper";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/playonix/icon-light.png";
import bgImage from "@/assets/home.jpg";

const Home = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const navigate = useNavigate();

  return (
    <CommonWrapper
      className="bg-cover bg-center overflow-hidden min-h-screen flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 w-full flex justify-center">
        <AnimatePresence mode="wait">
          {!showWelcome && (
            <motion.div
              key="logo"
              className="flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1.5, 20]
              }}
              transition={{
                duration: 2.5,
                times: [0, 0.2, 0.8, 1],
                ease: "easeInOut"
              }}
              onAnimationComplete={() => {
                setShowWelcome(true);
                navigate("/user/all", { replace: true });
              }}
              exit={{ opacity: 0 }}
            >
              <img src={logo} alt="Logo" className="w-64 md:w-96 h-auto object-contain" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </CommonWrapper>
  );
};

export default Home;





