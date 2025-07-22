"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SliderProps {
  value: number;
  label?: string;
  delay?: number;
}

export const Slider = ({ value, label, delay }: SliderProps) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setAnimationStarted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full p-2 select-none">
      {label && (
        <div className="flex justify-between mb-1 font-semibold text-white">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
      )}
      <div
        className="relative h-3 bg-gray-400 rounded-full"
        aria-label={`${label ?? "Skill"} level`}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
      >
        <motion.div
          className="absolute left-0 top-0 h-3 bg-blue-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: animationStarted ? `${value}%` : 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: delay }}
        />
      </div>
    </div>
  );
};
