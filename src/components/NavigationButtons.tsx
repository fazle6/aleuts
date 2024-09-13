// components/NavigationButtons.tsx
"use client";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

interface NavigationButtonsProps {
  onPrev: () => void;
  onNext: () => void;
}

const NavigationButtons = ({ onPrev, onNext }: NavigationButtonsProps) => {
  return (
    <div className="flex items-center justify-center mt-4">
      <motion.button
        title="Previous"
        onClick={onPrev}
        className="p-2 text-primary"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <FaArrowLeftLong />
      </motion.button>
      <motion.button
        title="Next"
        onClick={onNext}
        className="p-2 text-primary"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        <FaArrowRightLong />
      </motion.button>
    </div>
  );
};

export default NavigationButtons;
