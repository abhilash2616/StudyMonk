"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "@/components/ui/button";
import PopUpForm from "@/components/PopUpForm";

interface Layer {
  src: string;
  width: number;
  height: number;
  alt: string;
  delay: number;
}

const layers: Layer[] = [
  { src: "/assets/sc-4.png", width: 677, height: 677, alt: "sc-4", delay: 0.2 },
  { src: "/assets/sc-5.png", width: 516, height: 516, alt: "sc-5", delay: 0.4 },
];

interface sageData {
  title: string;
  subtitle: string;
  description: string;
}

const sageData: sageData[] = [
  {
    title: "The Sage",
    subtitle: "Your Expert Guide",
    description:
      "The Sage represents our unwavering commitment to intellectual honesty and expertise. It is our promise to provide factually impeccable knowledge, to demystify the complexities of the Cambridge curriculum with calm authority, and to guide students with the wisdom that comes from true mastery of a subject.",
  },
  {
    title: "The Caregiver",
    subtitle: "Your Trusted Protector",
    description:
      "The Caregiver represents our profound commitment to your child's wellbeing. It is our promise to create a safe, nurturing, and empathetic environment, to shield students from digital distractions and academic anxiety, and to support them with the patience and understanding needed for genuine, confident growth.",
  },
];

interface actionData {
  title: string;
  description: string;
}

const actionData: actionData[] = [
  {
    title: "An Unwavering Focus on Cambridge",
    description:
      "We specialize exclusively in the Cambridge curriculum. This singular focus allows our mentors to achieve a level of expertise and curriculum alignment that generalist platforms simply cannot match.",
  },
  {
    title: "A Commitment to True Expertise",
    description:
      "Every mentor is rigorously trained in Cambridge pedagogy. We believe so strongly in the 'Wise Guardian' model that fewer than 20% of applicants meet our standards for both academic excellence and empathetic guidance.",
  },
  {
    title: "A Nurturing, Confidence-Building Environment",
    description:
      "We keep our online classes small to ensure every student feels seen and heard. Our interactive sessions encourage students to find their voice and build confidence alongside a supportive community of peers.",
  },

];

function Page() {
  return (
    <>
      <section className="relative w-full h-[770px] overflow-hidden">
        <Image
          src="/assets/banner-bg-2.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-0 right-0 z-10 flex items-center justify-center gap-4 p-4">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: layer.delay,
                ease: "easeOut",
              }}
            >
              <Image
                src={layer.src}
                alt={layer.alt}
                width={layer.width}
                height={layer.height}
                className="object-contain"
                priority
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="absolute inset-0 flex flex-col items-start justify-center text-left z-20 px-4 md:px-8 max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-[45px] font-bold text-[#001F3F] mb-2 capitalize font-[Gilroy]">
            It Started with a Simple Observation.
          </h2>
          <p className="text-lg text-[#484848] mb-6">
            An Educator’s Concern. A Parent’s Dilemma. A Child’s Potential.
          </p>
          <motion.p
            className="text-lg text-[#484848] border border-black px-8 py-3 rounded-[30px] capitalize"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Experience the difference
          </motion.p>
        </motion.div>
      </section>

      <section className="py-10 relative">
        <div className="absolute top-0 left-0 hidden lg:block">
          <Image
            src="/assets/observation.png"
            alt="Observation"
            width={355}
            height={700}
            className="object-contain h-[650px]"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col items-start lg:items-center gap-8">
            <div className="flex-1 space-y-4">
              <h2 className="text-[32px] md:text-[40px] font-bold text-center lg:text-center text-[#001F3F] leading-snug">
                It Started with a Simple Observation.
              </h2>
              <p className="text-lg text-[#484848] text-center lg:text-center leading-relaxed mx-auto lg:mx-0 max-w-[900px]">
                Our founder, a Cambridge Curriculum Educator, saw Cambridge students with great potential
                struggling. Not from lack of effort, but from a lack of the right support. She saw the gap
                between a world-class curriculum and the local, expert guidance needed to truly master it.
                Study Monks was born from that observation—not as a business, but as the answer.
              </p>
            </div>
          </div>
        </div>
        <span className="hidden sm:block uppercase text-[180px] md:text-[300px] lg:text-[450px] leading-none font-bold absolute bottom-[0%] left-[50%] translate-x-[-50%] translate-y-[60%] z-[-1] textMonks">
          monks
        </span>
      </section>

      <section className="py-10 lg:mt-[150px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center mb-5">
            <h2 className="text-[32px] md:text-[40px] font-bold text-center lg:text-center text-[#001F3F] leading-snug">Our Guiding Principle: The Wise Guardian</h2>
            <p className="text-lg text-[#484848] text-center lg:text-center leading-relaxed mx-auto lg:mx-0 max-w-[900px]">Every decision we make is guided by our powerful archetype, a synthesis of two essential roles that every child needs to thrive. A single, powerful idea: The Wise Guardian.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6">
            {sageData.map((item, index) => (
              <div
                key={index}
                className="w-full md:w-[45%] p-[2px] rounded-md bg-gradient-to-r from-[#000000] to-[#66666660] transition-all duration-500 ease-out hover:shadow-xl hover:scale-[1.02]">
                <div className="space-y-4 text-center rounded-md bg-white px-10 py-10 flex flex-col justify-center items-center">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#001F3F] leading-snug mb-5">
                    {item.title}:
                    <br />
                    <span className="text-[#001F3F]">{item.subtitle}</span>
                  </h2>
                  <div className="w-[80%] border-t border-dashed border-gray-400 mb-5"></div>
                  <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-[1800px] mx-auto bg-[#FBFFF6] rounded-[40px] p-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col justify-center items-center mb-5">
              <h2 className="text-[#001F3F] text-center text-2xl md:text-[30px] font-[Gilroy] font-bold mb-3">More Than an Academy</h2>
              <p className="text-[#2A2828CF] text-sm md:text-[15px] font-normal mb-4 md:mb-5 text-center max-w-4xl md:max-w-5xl">We believe true learning happens when academic rigor meets psychological safety. Our entire approach is built on the philosophy of the Wise Guardian – a blend of expert guidance and nurturing support.</p>
            </div>
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-[25%]">
                <Image src="/assets/accedm.png" width={458} height={700} alt="Academic excellence illustration" className="shadow-2xl rounded-4xl" />
              </div>
              <div className="w-full md:w-[72%] flex flex-wrap gap-x-6 justify-center">
                <div className="w-full md:w-[35%]">
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-[#5C795E] p-10 rounded-[20px] text-left ">
                      <h2 className="text-[#DBFFD6] font-bold text-[25px] mb-5">Mindful Mastery</h2>
                      <p className="text-[#FFF] mb-3">We believe that true confidence comes from deep conceptual clarity, not memorisation. Our mentors guide students to build a foundational understanding of every topic, fostering a calm, focused approach that reduces academic anxiety and builds knowledge that lasts a lifetime.</p>
                    </div>
                    <div className="bg-[#FBFDFF] p-10 rounded-[20px] text-left  mt-[-30px]">
                      <h2 className="text-[#172437] font-bold text-[25px] mb-5">Mindful Mastery</h2>
                      <p className="text-[#525252]">We believe that true confidence comes from deep conceptual clarity, not memorisation. Our mentors guide students to build a foundational understanding of every topic, fostering a calm, focused approach that reduces academic anxiety and builds knowledge that lasts a lifetime.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-[35%]">
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-[#FBFDFF] p-10 rounded-[20px] text-left ">
                      <h2 className="text-[#172437] font-bold text-[25px] mb-5">Guided Curiosity</h2>
                      <p className="text-[#525252] mb-3">We believe that true confidence comes from deep conceptual clarity, not memorisation. Our mentors guide students to build a foundational understanding of every topic, fostering a calm, focused approach that reduces academic anxiety and builds knowledge that lasts a lifetime.</p>
                    </div>
                    <div className="bg-[#5C795E] p-10 rounded-[20px] text-left  mt-[-30px]">
                      <h2 className="text-[#DBFFD6] font-bold text-[25px] mb-5">Expressive Confidence</h2>
                      <p className="text-[#FFFFFF]">We believe that true confidence comes from deep conceptual clarity, not memorisation. Our mentors guide students to build a foundational understanding of every topic, fostering a calm, focused approach that reduces academic anxiety and builds knowledge that lasts a lifetime.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 relative overflow-hidden">
        <div className="absolute top-0 left-0">
          <Image
            src="/assets/action-bg-dec.png"
            width={757}
            height={500}
            alt="background element"
            className="h-full"
          />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col justify-center items-center mb-8 text-center">
            <h2 className="text-[#001F3F] text-2xl md:text-[30px] font-[Gilroy] font-bold mb-3">
              Our Beliefs in Action
            </h2>
            <p className="text-[#2A2828CF] text-sm md:text-[15px] font-normal max-w-5xl">
              A philosophy is only as strong as the commitments it inspires. Here is how the principles of the Wise Guardian are woven into the very fabric of Study Monks.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-between">
            <div className="w-full md:w-[68%] flex flex-col justify-center items-center gap-6">
              {actionData.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#F6FAF3] rounded-[30px] px-6 py-10 shadow-sm hover:shadow-md transition max-w-[80%]"
                >
                  <h2 className="text-[#001F3F] font-bold text-[22px] mb-2">
                    {item.title}
                  </h2>
                  <p className="text-[#2A2828CF] text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="w-full md:w-[30%] flex items-center justify-center">
              <Image src="/assets/action-img.png" width={371} height={815} alt="Academic excellence illustration" className="shadow-2xl rounded-4xl h-[700px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-evenly items-center">
            <div className="w-full md:w-[50%] flex justify-center items-center">
              <Image src="/assets/mind.png" width={372} height={372} alt="Academic excellence illustration" className="" />
            </div>
            <div className="w-full md:w-[50%]">
              <h2 className="text-[#001F3F] text-left text-2xl md:text-[28px] font-[Gilroy] font-bold mb-5">Raising a Generation of Confident <span className="text-[#91B0FF]">Mindful Learners</span></h2>
              <p className="text-[#2A2828CF] text-sm md:text-[15px] font-normal mb-3">Our vision is to become India’s most trusted partner for Cambridge families, bridging the gap between a world-class education and local, accessible expertise.</p>
              <p className="text-[#2A2828CF] text-sm md:text-[15px] font-normal">We are committed to cultivating students who are not only academically successful but are also focused, curious, and confident global citizens. Because when students feel understood, they don’t just improve—they excel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 z-0 hidden lg:block">
          <Image
            src="/assets/m-l.png"
            width={397}
            height={296}
            alt="mentor left background"
          />
        </div>
        <div className="absolute top-0 right-0 z-0 hidden lg:block">
          <Image
            src="/assets/m-r.png"
            width={397}
            height={296}
            alt="mentor right background"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Experience the Difference a Philosophy Makes
            </h2>
            <p className="mb-6 text-gray-700">
              Reading about our philosophy is one thing. Seeing it in action is another.
              Take the next step and meet the Wise Guardians who bring our commitment
              to life every day.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  className="text-white text-sm sm:text-[15px] px-6 py-4 sm:px-10 sm:py-6 bg-gradient-to-r from-[#8A9A5B] to-[#BDCF86] font-normal text-center rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
                  size="lg"
                >
                  <span>
                    Meet Our Mentors
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white text-black w-full">
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
      </section>



    </>
  );
}

export default Page;
