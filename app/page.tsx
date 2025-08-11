"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BloomCircle from "@/components/home/BloomCircle";
import ViewMore from "@/components/ui/ViewMore";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import Accordion from "@/components/home/Accordion";
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import StatsSection from "@/components/home/StatsSection";
import Testimonial from "@/components/home/Testimonial";
import Journey from "@/components/home/Journey";
import BottomAccordion from "@/components/home/BottomAccordion";
import PopUpForm from "@/components/PopUpForm";


const layers = [
  { src: "/assets/sc-3.png", width: 820, height: 820, z: "z-10" },
  { src: "/assets/sc-2.png", width: 682, height: 682, z: "z-20" },
  { src: "/assets/sc-1.png", width: 544, height: 544, z: "z-30" },
];

const focus = [
  {
    info: "Assess & Strategize",
    description: "We begin with a Diagnostic Assessment & Strategic Blueprint to understand your child's unique needs, then co-create a personalized learning plan.",
  },
  {
    info: "Engage & Build Concepts",
    description: "Live, interactive 1:8 Micro Classes focus on deep conceptual understanding using curated resources to enable concept clarity and critical thinking.",
  },
  {
    info: "Practice & Master",
    description: "Targeted assignments and continuous feedback by Mentors reinforce application, mastery, and exam readiness for Cambridge Assessments.",
  },
];
const voice = [
  {
    info: "The Cambridge Compass",
    description: "Our proprietary Cambridge aligned framework is designed to provide purpose, direction, and clarity at every stage of your child's academic journey. ",
  },
  {
    info: "The Cambridge Code",
    description: "Get our proprietary Curated content, designed for each Strand, Unit & Objective meticulously offering a clear and coherent pathway to success.",
  },
  {
    info: "The Mastery Method",
    description: "Face your exams with unshakable confidence, powered by our Targeted Progression Test Prep and Comprehensive Checkpoint Prep.",
  },
];
const stage = [
  {
    title: "Cambridge Primary (Stages 4-6)",
    info: "Building a Love for Learning",
    description: "For our youngest learners, we focus on sparking curiosity and building unshakable confidence. Our mentors create a nurturing environment where foundational concepts in English, Maths, and Science are explored in an engaging, interactive way.",
  },
  {
    title: "Cambridge Lower Secondary (Stages 7-9)",
    info: "Deepening Knowledge, Building Skills",
    description: "As students advance, we shift focus to developing critical thinking and analytical skills. We guide them through the increasing rigor of English, Maths, and Science, preparing them for the challenges of IGCSE and beyond.",
  },
];


function Page() {
  return (
    <>
      <section className="relative w-full h-[770px] overflow-hidden">
        <Image
          src="/assets/banner-bg-1.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 top-52 flex items-center justify-center z-10">
          {layers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
              className={`absolute ${layer.z}`}
            >
              <Image
                src={layer.src}
                alt={`Layer ${index + 1}`}
                width={layer.width}
                height={layer.height}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-[45px] font-medium text-[#001F3F] mb-4 capitalize font-[Gilroy]">
            Find Your <span className="font-bold underline underline-offset-8">Focus.</span> Find Your <span className="font-extrabold underline underline-offset-8">Voice.</span>
          </h2>
          <p className="text-lg text-[#484848] max-w-xl mb-6">
            A serene and safe digital sanctuary where students master the Cambridge curriculum through mindful mentorship.
          </p>
          <motion.p
            className="text-lg text-[#484848] border-1 border-black px-8 py-3 rounded-[30px] capitalize"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Experience the difference
          </motion.p>
        </motion.div>
      </section>

      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2
            className="text-[#001F3F] text-center text-2xl md:text-[30px] font-bold mb-5 font-[Gilroy]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Framework for Your Focus & Voice
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <motion.div
              className="w-full md:w-[40%]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <BloomCircle />
            </motion.div>

            <motion.div
              className="w-full md:w-[55%]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h3 className="text-[#001F3F] font-semibold text-lg md:text-[20px] mb-3">The Focus Chamber</h3>
              <div className="w-[20%] h-[3px] bg-[#535151] mb-4"></div>
              <p className="text-sm md:text-[15px] font-normal mb-6">
                The Cambridge curriculum is a journey into a world of deep knowledge and critical thinking, but navigating its rigorous landscape requires a distraction-free environment and a reliable guide. Our <span className="font-semibold">Mentor Guided</span> interactive <span className="font-semibold">Micro-Classes</span> ensure just that.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                {focus.map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-[#F4F4F4] border border-gray-200 rounded-sm shadow-md p-4 transition-colors duration-300 hover:bg-[#EEF7D3]"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-[#001F3F] font-semibold text-base md:text-[17px] mb-1">{item.info}</h4>
                    <p className="text-xs md:text-[14px] text-[#484848]">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-between w-full mt-8 gap-4 md:gap-6">
            {voice.map((voice, Idx) => (
              <motion.div
                key={Idx}
                className="w-full sm:w-[48%] md:w-[30%] mb-4 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Idx * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="p-4 transition-colors duration-300 hover:bg-[#EEF7D3] border border-gray-200 rounded shadow-sm h-full">
                  <h4 className="text-[#001F3F] font-semibold text-base md:text-[17px] mb-1">{voice.info}</h4>
                  <p className="text-xs md:text-[14px] text-[#484848]">{voice.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 py-8 md:p-10 bg-[#D0DEFF] rounded-3xl md:rounded-[50px]">
          <motion.h2
            className="text-[#001F3F] text-center text-2xl md:text-[30px] font-[Gilroy] font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Tailored Guidance for Your Child&apos;s Cambridge Stage
          </motion.h2>

          <motion.div
            className="flex items-center justify-center mb-6 md:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-[#2A2828CF] text-sm md:text-[15px] font-normal mb-4 md:mb-5 text-center max-w-4xl md:max-w-5xl">
              We understand that a student&apos;s needs evolve dramatically as they progress through the Cambridge curriculum. Our methodology is not one-size-fits-all; it is meticulously tailored to the specific developmental and academic goals of each stage.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            {stage.map((stage, Index) => (
              <motion.div
                key={Index}
                className="bg-white px-6 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8 rounded-br-3xl md:rounded-br-[50px] w-full sm:w-[80%] md:w-[40%] lg:w-[30%]
           transition-all duration-300 ease-in-out
           hover:shadow-2xl hover:bg-[#F6F9FF] hover:scale-[1.01]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: Index * 0.2, duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-[#203B57] font-semibold text-lg md:text-[20px] mb-4 md:mb-6">{stage.title}</h2>
                <h3 className="text-[#292D32] font-normal text-base md:text-[17px] mb-3 md:mb-4">{stage.info}</h3>
                <p className="text-[#5D5D5D] font-normal text-sm md:text-[15px] mb-6 md:mb-8 max-w-[95%]">{stage.description}</p>
                <ViewMore />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <span className="hidden sm:block uppercase text-[180px] md:text-[300px] lg:text-[450px] leading-none font-bold absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-10%] z-[1] textMonks">
            monks
          </span>
          <motion.div
            className="relative z-[2] top-16 left-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <Image
              src="/assets/seat.png"
              width={1548}
              height={537}
              alt="Seats"
              className="w-full h-auto"
            />

            <div className="absolute bottom-10 flex flex-col items-start justify-center p-6 md:p-12">
              <h2 className="text-white text-4xl font-bold mb-2">
                Limited Seats. Endless Possibilities.
              </h2>
              <p className="text-white text-[15px] font-normal mb-5">
                Drop your details now and get a call from our expert counsellors!
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="text-[15px] text-[#fff] border-1 border-[#fff] px-8 py-2 rounded-[30px] capitalize bg-gradient-to-r from-[#8A9A5B] to-[#BDCF86] hover:cursor-pointer"
                  >
                    <span>Book a consultation</span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-[#fff] border border-[#001F3F] text-black rounded-2xl w-[90%] max-w-[800px]">
                  <DialogHeader className="border-b border-[#001F3F] px-4 sm:px-6">
                    <DialogTitle className="text-xl font-bold mb-3">
                      Popup form
                    </DialogTitle>
                  </DialogHeader>

                  <div className="py-6 px-4 sm:px-6">
                    <PopUpForm />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </section>


      <section className="py-10 relative">
        <div className="container mx-auto px-4 sm:px-6">

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[#001F3F] text-2xl sm:text-[28px] font-semibold text-center sm:text-left">
              Our Promise
            </h2>
            <Image
              src="/assets/promise-arrow.png"
              width={110}
              height={40}
              alt="arrow"
              className="w-[80px] sm:w-[110px] h-auto"
            />
          </motion.div>

          <motion.div
            className="flex justify-center items-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-center bg-[#91B0FF] text-white px-4 sm:px-8 py-2 mt-2 rounded-md shadow-md text-sm sm:text-base">
              Learning experience built on Four pillars
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">

            <motion.div
              className="w-full md:w-[49%] flex justify-center items-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="max-w-[90%] sm:max-w-[85%]">
                <p className="text-sm sm:text-[15px] text-left mb-6 sm:mb-8">
                  True education is not a race for grades; it is the art of building a confident, curious, and resilient mind. Our entire method is built on three foundational commitments.
                </p>
                <hr className="mb-4 sm:mb-6 border-gray-300" />
                <Accordion />
              </div>
            </motion.div>

            <motion.div
              className="w-full md:w-[49%] flex justify-center items-center mt-6 md:mt-0"
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/assets/promise-img.png"
                width={627}
                height={554}
                alt="Promise"
                className="w-full h-auto shadow-2xl rounded-2xl sm:rounded-[30px] transition-transform duration-300 ease-in-out"
              />
            </motion.div>
            <Image
              src="/assets/bg-promise.png"
              width={338}
              height={452}
              alt="Promise background"
              className="w-auto h-auto absolute -bottom-20 right-0 -z-10 hidden sm:block"
            />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 py-8 sm:py-16 bg-[#172437]">
          <motion.div
            className="flex flex-col items-center gap-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.3,
                }
              }
            }}
          >
            <motion.h2
              className="text-[#FFF] text-2xl sm:text-[28px] font-semibold mb-4 sm:mb-8 text-center"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              The Heart of Our Promise: The Mentors
            </motion.h2>

            <motion.h3
              className="text-[#FFF677] text-6xl sm:text-[100px] font-bold mb-2 sm:mb-3 flex items-center"
              variants={{
                hidden: { opacity: 0, x: -50, scale: 0.8 },
                visible: { opacity: 1, x: 0, scale: 1 },
              }}
              transition={{ duration: 0.8 }}
            >
              <KeyboardArrowLeftOutlinedIcon sx={{ fontSize: { xs: 60, sm: 120 } }} />
              20%
            </motion.h3>

            <motion.p
              className="text-[#FFF] text-lg sm:text-[20px] font-medium mb-2 sm:mb-4 text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6 }}
            >
              Mentor Acceptance Rate
            </motion.p>

            <motion.p
              className="text-sm sm:text-[15px] text-center text-[#FFF] max-w-[90%] sm:max-w-[1000px]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our mentors are the living embodiment of our promise. They are handpicked not only for their deep subject expertise but for their rare ability to guide and nurture young minds. Fewer than 20% of applicants meet our rigorous standards for both academic excellence and empathetic guidance.
            </motion.p>
          </motion.div>
        </div>
      </section>


      <section className="py-10 relative">
        <div className="container mx-auto px-4">
          <span className="hidden sm:block uppercase text-[180px] md:text-[300px] lg:text-[450px] leading-none font-bold absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-10%] z-[1] textMonks">
            monks
          </span>

          <div className="relative z-[2] top-8 sm:top-16 left-0">
            <h2 className="text-[#001F3F] text-center text-2xl sm:text-[28px] font-semibold mb-4 sm:mb-5">
              The Study Monks Impact: A Snapshot
            </h2>
            <StatsSection />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10 mt-0 md:mt-[150px] relative">
        <div className="container mx-auto px-4 sm:px-6">
          <span className="hidden sm:block uppercase text-[180px] md:text-[300px] lg:text-[450px] leading-none font-bold absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-10%] z-[1] textMonks">
            monks
          </span>

          <div className="relative z-[2] top-8 sm:top-16 left-0">
            <h2 className="text-[#001F3F] text-center text-2xl sm:text-[28px] font-semibold mb-4 sm:mb-5">
              Parent Testimonials
            </h2>
            <Testimonial />
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 py-6 md:py-10 bg-[#FAFAFA] rounded-2xl md:rounded-[30px]">
          <motion.h2
            className="text-[#001F3F] text-2xl md:text-[28px] text-center font-semibold mb-3 md:mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Your Guide to the Cambridge Journey
          </motion.h2>

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-[#001F3F] text-sm md:text-[15px] font-normal mb-4 md:mb-5 text-center max-w-[90%] md:max-w-[1000px]">
              The world of Education is complex and you deserve clear, unbiased answers. Our Resources Hub is your library of expert guides, created to empower you to make the best decisions for your child&apos;s future with absolute confidence.
            </p>
          </motion.div>

          <div className="mt-6 md:mt-10">
            <Journey />
          </div>
        </div>
      </section>


      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-6 h-full">
            {/* FAQ Section - Full width on mobile, 48% on desktop */}
            <div className="w-full md:w-[48%] h-full">
              <h2 className="text-[#001F3F] text-2xl md:text-[28px] font-semibold mb-4 md:mb-5">
                Frequently Asked Questions
              </h2>
              <BottomAccordion />
            </div>

            {/* CTA Section - Full width on mobile, 48% on desktop */}
            <div className="w-full md:w-[48%] h-full flex justify-center items-center">
              <div className="bg-gradient-to-t from-[#E4FDFF] to-[#EBF2FF] p-4 sm:p-6 rounded-2xl md:rounded-[30px] flex flex-col gap-4 sm:gap-6 h-full text-center md:text-left w-full">
                <h2 className="text-[#001F3F] text-xl sm:text-2xl md:text-[28px] font-semibold">
                  Ready to Replace Academic Anxiety with Calm Confidence?
                </h2>

                <p className="text-[#001F3F] text-sm sm:text-[15px] font-normal max-w-prose mx-auto md:mx-0">
                  The best way to understand the Study Monks difference is to experience it. Schedule a complimentary, no-obligation Clarity Session to speak with one of our academic counselors. Lets build a personalized learning path for your child, together.
                </p>

                <p className="text-[#001F3F] text-sm sm:text-[15px] font-normal max-w-prose mx-auto md:mx-0 mb-4 sm:mb-5">
                  The best way to understand the Study Monks difference is to experience it. Schedule a complimentary, no-obligation Clarity Session to speak with one of our academic counselors.
                </p>

                <div className="flex justify-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="text-white text-sm sm:text-[15px] px-6 py-4 sm:px-10 sm:py-8 bg-gradient-to-r from-[#8A9A5B] to-[#BDCF86] font-normal text-center rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
                        size="lg"
                      >
                        <span>Schedule Your Free <br /> Clarity Session</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-[#fff] border border-[#001F3F] text-black rounded-2xl w-full">
                    <VisuallyHidden>
                      <DialogHeader className="border-b border-[#001F3F] px-4 sm:px-6">
                        <DialogTitle className="text-lg sm:text-xl font-bold mb-3">
                          Popup Form
                        </DialogTitle>
                      </DialogHeader>
                      </VisuallyHidden>
                        <PopUpForm />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





    </>
  );
}

export default Page;
