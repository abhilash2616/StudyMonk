"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

function ContactForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        className: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(formData);
            router.push("/thank-you");
        } catch (error) {
            console.error("Submission error:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="w-full md:w-1/2 hidden md:block relative overflow-hidden">
                <Image
                    src="/assets/popup.png"
                    alt="Enrollment Banner"
                    width={500}
                    height={700}
                    className="object-cover h-[470px]"
                />
                <div className="absolute bottom-0 left-0 w-full bg-[#012042] pt-3 pb-4 px-4 text-white clip-banner2">
                    <h2 className="text-[20px] font-semibold mb-1">
                        Dont Just Study. Conquer It!
                    </h2>
                    <div className="flex items-center gap-2 w-fit">
                        <h3 className="font-semibold text-[15px]">Join Us Today.</h3>
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <TrendingFlatIcon fontSize="small" />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-1/2">
                <form onSubmit={handleSubmit} className="space-y-6 pb-6 px-0 md:px-6">
                    <h2 className="text-[#012041] text-2xl font-bold text-center font-[Gilroy]">
                        Book A FREE Trial Now!
                    </h2>

                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-[#001F3F] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#012042] transition-all"
                    />

                    <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-[#001F3F] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#012042] transition-all"
                    />

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                            +91
                        </span>
                        <input
                            id="mobile"
                            type="tel"
                            pattern="\d*"
                            maxLength={10}
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            placeholder="Phone Number"
                            className="w-full pl-14 px-4 py-3 rounded-lg border border-gray-300 text-[#001F3F] placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#012042] transition-all"
                        />
                    </div>

                    <select
                        id="className"
                        value={formData.className}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-[#001F3F] focus:outline-none focus:ring-2 focus:ring-[#012042] cursor-pointer"
                    >
                        <option value="" disabled>
                            Stage
                        </option>
                        <option value="batch-a">Batch A (9AM-11AM)</option>
                        <option value="batch-b">Batch B (11AM-1PM)</option>
                        <option value="batch-c">Batch C (2PM-4PM)</option>
                        <option value="morning">Morning Class (7AM-9AM)</option>
                        <option value="evening">Evening Class (5PM-7PM)</option>
                    </select>

                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Write your message here..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-[#001F3F] focus:outline-none focus:ring-2 focus:ring-[#012042] cursor-text"
                    />

                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 bg-gradient-to-t from-[#001F3F] to-[#003D7C] text-white font-medium rounded-full transition-all transform hover:scale-101 shadow-md"
                    >
                        {isSubmitting ? (
                            <>
                                <svg
                                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                    />
                                </svg>
                                Processing...
                            </>
                        ) : (
                            "Submit"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
