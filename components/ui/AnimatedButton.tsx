"use client";
import React from "react";

const SubmitButton = ({ isSubmitting }: { isSubmitting: boolean }) => {
    return (
        <button
            type="submit"
            disabled={isSubmitting}
            className={`group relative inline-block w-48 h-12 cursor-pointer border-0 
                 p-0 rounded-full overflow-hidden transition-all
                 ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-[#172437]"}`}
        >
            {/* Circle with arrow */}
            <span
                className={`circle relative block h-12 w-12 rounded-full bg-white shadow-[0_0_5px_1px_rgba(0,0,0,0.2)] 
        transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)]
        group-hover:w-full group-hover:bg-[#FFF] group-hover:shadow-[0_0_10px_2px_rgba(0,0,0,0.3)]
        group-active:scale-90 group-active:shadow-[0_0_5px_0.5px_rgba(0,0,0,0.2)]`}
            >
                {!isSubmitting && (
                    <span
                        className="icon arrow absolute top-0 bottom-0 left-[0.625rem] my-auto h-[0.125rem] 
                       w-[1.125rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] 
                       bg-[#172437] before:absolute before:content-[''] 
                       before:-top-[0.29rem] before:right-[0.0625rem] before:h-[0.625rem] 
                       before:w-[0.625rem] before:rotate-45 before:border-t-2 before:border-r-2 
                       group-hover:translate-x-[8.7rem] group-hover:bg-[#172437] 
                       group-hover:before:border-[#172437] group-active:translate-x-[9.5rem] 
                       group-active:duration-300"
                    />
                )}

                {/* Loader dikhega jab submitting hoga */}
                {isSubmitting && (
                    <svg
                        className="animate-spin h-6 w-6 text-[#172437] absolute inset-0 m-auto"
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
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                    </svg>
                )}
            </span>

            {/* Button text */}
            <span
                className={`button-text absolute inset-0 ml-[1.85rem] py-3 text-center font-semibold uppercase tracking-wider
        transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)]
        ${isSubmitting ? "text-gray-700" : "text-white group-hover:-translate-x-7 group-hover:text-[#172437] group-active:text-[#172437]"}`}
            >
                {isSubmitting ? "Processing..." : "Submit"}
            </span>
        </button>
    );
};

export default SubmitButton;
