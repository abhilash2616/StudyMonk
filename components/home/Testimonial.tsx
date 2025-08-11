"use client";

import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

type TestimonialItem = {
  quote: string;
  description: string;
  points: { title: string; text: string }[];
  image: string;
};

const testimonials: TestimonialItem[] = [
  {
    quote: `For the first time, he wasn't just studying. He was understanding.`,
    description:
      "Hear directly from the Sharma family about the impact of the Study Monks approach on their son's confidence and focus.",
    points: [
      { title: "Reduced From Anxiety", text: "From stressful nights to calm preparation." },
      { title: "+40% Conceptual Clarity", text: "He now teaches us the concepts." },
      { title: "A True Partnership", text: "We finally feel like we have an expert on our side." },
    ],
    image: "/assets/testimonial1.png",
  },
  {
    quote: `StudyMonk completely changed my learning habits.`,
    description:
      "Hear directly from the Sharma family about the impact of the Study Monks approach on their son's confidence and focus.",
    points: [
      { title: "Better Time Management", text: "Now I finish my syllabus ahead of time." },
      { title: "Higher Scores", text: "My mock test scores improved by 35%." },
      { title: "Confidence Boost", text: "I feel ready for any challenge." },
    ],
    image: "/assets/testimonial1.png",
  },
];

function Testimonial() {
  return (
    <div className="container mx-auto px-4">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          pauseOnHover: true,
          gap: "1.5rem",
          arrows: true,
          pagination: false,
          speed: 800,
        }}
        aria-label="Testimonials"
      >
        {testimonials.map((item, index) => (
          <SplideSlide key={index}>
            <div className="bg-[#EBF2FF] rounded-xl md:p-8 p-0 shadow-md">
              <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
                <div className="w-full md:w-1/2">
                  <h2 className="text-[30px] text-[#001F3F] font-bold mb-8">&quot;{item.quote}&quot;</h2>
                  <p className="text-[#636363] text-[15px] mb-10">{item.description}</p>
                  <ul className="space-y-2 flex flex-col gap-2">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="text-[#4B4B4B]">
                        <CheckBoxOutlinedIcon className="w-4 h-4" /> <span className="text-[#001F3F]">{point.title}:</span> {point.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <Image
                    src={item.image}
                    alt={item.quote}
                    width={500}
                    height={500}
                    className="w-full max-w-[500px] h-auto rounded-lg object-contain"
                  />
                </div>

              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Testimonial;