"use client"

import Image from "next/image"
import { motion } from "framer-motion";
import { useState } from "react";
import PageForm from "@/components/PageForm";

const cardData = [
  {
    title: "Answering Without Understanding",
    description:
      "They can recite facts but struggle to explain the 'why' or apply knowledge to new problems.",
  },
  {
    title: "Confidence Tied to Grades",
    description:
      "Self-worth is linked to report cards, not genuine ability to tackle challenges and persevere.",
  },
  {
    title: "Hesitation to Speak Up",
    description:
      "Reluctant to voice opinions, challenge ideas, or defend reasoning.",
  },
  {
    title: "Caught Between Two Failed Models",
    description:
      "Lost in large online classes or isolated in one-on-one tuition, missing vital collaborative skills.",
  },
  {
    title: "Memorization Over Application",
    description:
      "Focus is on remembering answers for exams instead of applying concepts to real-world scenarios.",
  },
  {
    title: "Fear of Making Mistakes",
    description:
      "Students avoid taking risks or experimenting, worried that errors define their intelligence.",
  },
];


function Page() {

  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <section className="relative w-full h-[770px] overflow-hidden">
        {!isPlaying ? (
          <Image
            src="/assets/primary-bg.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        ) : (
          <video
            src="/assets/hero-video.mp4"
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover z-10"
          />
        )}

        <motion.div
          className="absolute inset-0 flex flex-col md:flex-row items-center justify-end text-left z-20 w-full mx-auto gap-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div className="md:w-[60%] relative text-[#000] pl-[200px]">
            <h2 className="text-[45px] font-bold mb-4 capitalize font-[Gilroy] leading-tight">
              Your Child is Learning What to Think.<br /> We Teach Them How to Think.
            </h2>
            <p className="text-lg mb-8 max-w-[70%] leading-relaxed">
              In exclusive, mentor-led micro-classes, we transform Cambridge Primary students from passive learners into confident, collaborative thinkers. We are Cambridge specialists—it&apos;s all we do. We build the minds that will lead tomorrow.
            </p>
            <motion.p
              className="text-lg border border-[#000] text-[#2F2F2F] px-8 py-3 rounded-[30px] capitalize inline-block cursor-pointer mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Book Free Diagnostic & 7-Day Trial
            </motion.p>
            <p>See the difference in one conversation. No credit card required.</p>
          </div>
          {!isPlaying && (
            <div className="md:w-[37%] relative h-full z-30">
              <Image
                src="/assets/primary-vdo-poster.png"
                alt="Video Poster"
                fill
                className="object-cover"
                priority
              />
              <button
                onClick={() => setIsPlaying(true)}
                className="absolute left-[-30px] top-1/2 flex items-center justify-center"
              >
                <div className="w-16 h-16  rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition hover:cursor-pointer">
                  <Image src="/assets/ban-play-btn.png" width={100} height={100} alt="Video BTN" />
                </div>
              </button>
            </div>
          )}
        </motion.div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-[40%]">
              <PageForm />
            </div>
            <div className="w-full md:w-[58%]">
              <h2 className="text-[32px] font-bold text-left text-[#001F3F] leading-tight mb-6">The Silent Crisis in Today&apos;s Education:<br />The Illusion of Learning</h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-6">
                  {cardData.map((card, index) => (
                    <div
                      key={index}
                      className="w-[28%] p-[1px] rounded-xl bg-[#000000] hover:bg-gradient-to-b hover:from-[#91B0FF] hover:to-[#1F45A7] 
                       hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="h-full w-full bg-white rounded-xl px-6 py-10 hover:text-white transition-all duration-300">
                        <h2 className="text-[#1F45A7] font-semibold text-lg mb-2 leading-tight">
                          {card.title}
                        </h2>
                        <div className="w-[80%] h-[1px] bg-[#000] mb-3"></div>
                        <p className="text-gray-600 text-sm">{card.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default Page