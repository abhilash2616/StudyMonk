"use client"
import Link from "next/link";
import ViewMore from "../ui/ViewMore";
import Image from "next/image";

function Journey() {
    return (
        <div className="flex flex-wrap justify-between items-center">
            <div className="w-full md:w-[50%] flex flex-wrap justify-between items-center">
                <div
                    className="w-full md:w-[57%] bg-white p-6 relative overflow-hidden hover:bg-[#EBF2FF] transition-all duration-300"
                    style={{
                        WebkitClipPath: `polygon(
                            0 0,
                            calc(100% - 100px) 0,
                            100% 100px,
                            100% 100%,
                            100px 100%,
                            0 calc(100% - 100px)
                            )`,
                        clipPath: `polygon(
                            0 0,
                            calc(100% - 100px) 0,
                            100% 100px,
                            100% 100%,
                            100px 100%,
                            0 calc(100% - 100px)
                            )`,
                        borderRadius: "10px",
                    }}
                >
                    <h2 className="text-[#003C79] text-[20px] font-semibold mb-5">
                        The printing and typesetting<br /> industry ?
                    </h2>
                    <p className="text-[#001F3F] text-[15px] font-normal mb-5">
                        Lorem Ipsum has been the industry’s standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book.
                    </p>
                    <ViewMore />
                    <Image
                        src="/assets/book.png"
                        alt="Journey"
                        width={430}
                        height={300}
                        className="w-full h-auto mt-10"
                    />
                </div>

                <div
                    className="w-full md:w-[40%] bg-white pb-6 relative overflow-hidden rounded-tr-[30px] rounded-tl-[80px] hover:bg-[#EBF2FF] transition-all duration-300"

                >
                    <div className="relative">
                        <Image
                            src="/assets/study.png"
                            alt="Journey"
                            width={430}
                            height={310}
                            className="w-full h-[310px]"
                        />
                        <Image
                            src="/assets/video-btn.png"
                            alt="Journey"
                            width={50}
                            height={50}
                            className="w-auto h-auto absolute bottom-[-30px] right-[50%] translate-x-[50%] z-10"
                        />
                    </div>
                    <div className="p-8">
                        <h2 className="text-[#003C79] text-[20px] font-semibold mb-10 max-w-[85%]">
                            Lorem Ipsum is simply industry. Lorem Ipsum has been the industry&apos;s
                        </h2>
                        <Link href="/" className="text-[#211F1F] text-[15px] font-normal uppercase hover:text-[#003C79] hover:underline">GET STARTED</Link>
                    </div>

                </div>

            </div>
            <div className="w-full md:w-[48%] flex flex-wrap justify-between items-center">
                <div
                    className="w-full bg-white p-8 relative overflow-hidden mb-10 rounded-[20px] hover:bg-[#EBF2FF] transition-all duration-300"
                >
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="w-full md:w-[50%]">
                            <h2 className="text-[#003C79] text-[20px] font-semibold mb-5">
                                The printing and<br /> typesetting industry ?
                            </h2>
                            <p className="text-[#001F3F] text-[15px] font-normal mb-5">
                                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
                            </p>
                            <ViewMore />
                        </div>
                        <div className="w-full md:w-[50%] flex justify-end items-center">
                            <Image
                                src="/assets/child.png"
                                alt="Journey"
                                width={430}
                                height={300}
                                className="w-auto h-auto absolute bottom-0 right-10"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-[48%] bg-white p-8 relative overflow-hidden rounded-[20px] hover:bg-[#EBF2FF] transition-all duration-300">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/assets/google-doc.png"
                                    alt="Google Docs Icon"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <h2 className="text-lg font-semibold">Worksheets</h2>
                            </div>
                            <p className="text-gray-600">
                                Lorem Ipsum has been the industry’s standard dummy text ever since the
                                1500s,
                            </p>
                            <div>
                                <ViewMore />
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-[48%] bg-white p-8 relative overflow-hidden rounded-[20px] hover:bg-[#EBF2FF] transition-all duration-300">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/assets/video-call.png"
                                    alt="Google Docs Icon"
                                    width={40}
                                    height={40}
                                    priority
                                />
                                <h2 className="text-lg font-semibold">Recorded Class</h2>
                            </div>
                            <p className="text-gray-600">
                                Lorem Ipsum has been the industry’s standard dummy text ever since the
                                1500s,
                            </p>
                            <div>
                                <ViewMore />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Journey;