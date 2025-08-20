import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();

  // click handler
  const handleRedirect = () => {
    navigate("/"); // home page redirect
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-full bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated Text with Click */}
      <motion.h1
        onClick={handleRedirect}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="text-5xl md:text-7xl font-bold text-[#FFA100] z-10 tracking-wide cursor-pointer hover:scale-105 transition-transform"
      >
        Coming Soon
      </motion.h1>

      {/* Subtext with Fade Animation */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.2 }}
        className="absolute bottom-16 text-gray-300 text-lg md:text-xl z-10"
      >
        Stay tuned for something amazing 🚀
      </motion.p>

      {/* Glow Animation */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute w-60 h-60 bg-[#FFA100] rounded-full opacity-20 blur-3xl"
      />
    </div>
  );
};

export default ComingSoon;
