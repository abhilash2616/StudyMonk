"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const stats = [
  {
    value: "94%",
    description:
      "of students report a significant increase in subject confidence.",
    color: "#B8D695",
    size: 200,
    fontSize: "2.5rem",
    zIndex: "z-30",
    arrowStyle: "left-[-120px] top-[50%] translate-y-[-10%] w-[100px]",
    arrowSrc: "/assets/arrow1.png",
    textStyle: "absolute left-[-180px] bottom-[-40%] w-[160px] text-left",
  },
  {
    value: "3X",
    description:
      "more likely to actively participate in class discussions.",
    color: "#94B653",
    size: 220,
    fontSize: "2rem",
    zIndex: "z-20",
    arrowStyle: "top-full mt-2 w-[6px] rotate-360",
    arrowSrc: "/assets/arrow2.png",
    textStyle: "absolute bottom-[-90%] w-[200px] text-center",
  },
  {
    value: "4.8/5",
    description:
      "average satisfaction rating from our parent community.",
    color: "#6E922E",
    size: 240,
    fontSize: "2.25rem",
    zIndex: "z-10",
    arrowStyle: "right-[-110px] top-[50%] translate-y-[-10%] w-[90px] rotate-360",
    arrowSrc: "/assets/arrow3.png",
    textStyle: "absolute right-[-180px] bottom-[-20%] w-[160px] text-right",
  },
];

const circleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (custom: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: custom * 0.25,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export default function StatsSection() {
  return (
    <section className="flex flex-col items-center justify-center py-10">
      <div className="relative flex items-center">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`relative flex flex-col items-center text-center ${
              i > 0 ? "-ml-12" : ""
            } ${stat.zIndex}`}
          >
            <motion.div
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={circleVariants}
              className="relative flex items-center justify-center rounded-full text-white font-bold shadow-md"
              style={{
                width: stat.size,
                height: stat.size,
                backgroundColor: stat.color,
                fontSize: stat.fontSize,
              }}
            >
              {stat.value}

              <div className={`absolute ${stat.arrowStyle} hidden md:block`}>
                <Image
                  src={stat.arrowSrc}
                  alt="arrow"
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
              
              <p
                className={`text-sm text-gray-700 ${stat.textStyle} hidden md:block`}
              >
                {stat.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}