"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const AnimatedLogo = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    // Reset animation after it completes
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="fixed bottom-2 left-2.5 cursor-pointer z-50"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        animate={isAnimating ? {
          y: [-10, -20, -10, 0],
          rotate: [0, -5, 5, 0],
          scale: [1, 1.1, 1.05, 1]
        } : {}}
        transition={{
          duration: 0.6,
          ease: "easeInOut",
          times: [0, 0.3, 0.7, 1]
        }}
      >
        <Image
          src="/camporee-logo-orion.png"
          alt="Logo Camporee"
          width={100}
          height={100}
          className="w-[60px] h-[70px] sm:w-[70px] sm:h-[85px] lg:w-[85px] lg:h-[100px] animate-slide-from-bottom"
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedLogo;
