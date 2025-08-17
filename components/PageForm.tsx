"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SubmitButton from "./ui/AnimatedButton";

// Form data ka type define karte hain
interface FormData {
    name: string;
    email: string;
    mobile: string;
    className: string;
    message: string;
}

function PageForm(): React.JSX.Element {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        mobile: "",
        className: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    // Input / textarea / select ke liye handleChange
    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ): void {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Dummy API call ke jagah console log
            /*
            const response = await fetch("/api/submit-form", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(formData),
            });
        
            if (!response.ok) throw new Error("Submission failed");
            */
            console.log("Form submitted data:", formData);

            alert("Form submitted successfully ✅");
            router.push("/thank-you");

            // Reset form
            setFormData({
                name: "",
                email: "",
                mobile: "",
                className: "",
                message: "",
            });
        } catch (error) {
            console.error(error);
            alert("Failed to submit ❌");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-8">
                <h2 className="text-center text-2xl font-bold text-[#0D1B2A] mb-6">
                    Book A FREE Trial Now!
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    />

                    <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    />

                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500">
                            +91
                        </span>
                        <input
                            id="mobile"
                            type="tel"
                            inputMode="numeric"
                            maxLength={10}
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            placeholder="Phone Number"
                            className="w-full pl-14 px-4 py-3 rounded-lg border border-gray-300"
                        />
                    </div>

                    <select
                        id="className"
                        value={formData.className}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300"
                    />

                    {/* Submit button with TS prop */}
                    <SubmitButton isSubmitting={isSubmitting} />
                </form>
            </div>
        </div>
    );
}

export default PageForm;
