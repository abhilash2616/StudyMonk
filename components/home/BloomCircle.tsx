"use client";

import { motion } from "framer-motion";

const BloomCircle = () => {
  const levels = [
    "Remember",
    "Understand",
    "Evaluate",
    "Analyze",
    "Create",
    "Apply",
  ];

  return (
    <div className="flex items-center justify-center p-4">
      <div className="relative w-96 h-96">
        {levels.map((text, index) => {
          const size = 100 + index * 50;
          const delay = index * 0.15;
          const radius = size / 2;

          return (
            <div
              key={text}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                initial={{
                  scale: 0,
                  opacity: 0,
                  boxShadow: "0 0 0px rgba(139, 199, 255, 0)",
                  background: "radial-gradient(circle, #BEE3FF 0%, #8BC7FF 60%, #004E92 100%)"
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                  boxShadow: [
                    "0 0 10px rgba(139, 199, 255, 0.2)",
                    "0 0 30px rgba(139, 199, 255, 0.6)",
                    "0 0 10px rgba(139, 199, 255, 0.2)"
                  ],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  delay,
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
                className="absolute rounded-full z-0"
                style={{ width: size, height: size }}
              />

              <motion.svg
                width={size + 60}
                height={size + 60}
                className="absolute z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: delay + 0.1 }}
              >
                <defs>
                  <path
                    id={`circlePath-${index}`}
                    d={`
                      M ${30},${size / 2 + 30} 
                      a ${radius},${radius} 0 1,1 ${size},0
                    `}
                  />
                </defs>
                <text
                  fill="#093D6F"
                  fontSize="16"
                  fontWeight="500"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  alignmentBaseline="middle"
                >
                  <textPath href={`#circlePath-${index}`} startOffset="50%">
                    {text}
                  </textPath>
                </text>
              </motion.svg>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BloomCircle;
