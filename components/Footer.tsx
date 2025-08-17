"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

// Interfaces / Types

interface LinkItem {
    label: string;
    href: string;
}

interface ContactItem {
    icon: React.JSX.Element;
    text: string;
    href?: string; // optional, kyunki location wale mein nahi hai
}

interface SocialItem {
    icon: React.JSX.Element;
    href: string;
}

// Arrays with Types

const usefulLinks: LinkItem[] = [
    { label: "Cambridge Pathway", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Our Mentors", href: "#" },
    { label: "Our Philosophy", href: "#" },
];

const legalLinks: LinkItem[] = [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Content Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Cancellation Policy", href: "#" },
];

const contactInfo: ContactItem[] = [
    { icon: <MdPhone />, text: "+91 7003810162", href: "#" },
    { icon: <MdEmail />, text: "info@studymonks.com", href: "#" },
    { icon: <MdLocationOn />, text: "Bangalore, India" },
];

const socialLinks: SocialItem[] = [
    { icon: <FaFacebookF />, href: "#" },
    { icon: <FaWhatsapp />, href: "#" },
    { icon: <FaInstagram />, href: "#" },
    { icon: <FaXTwitter />, href: "#" },
];

// Footer Component

function Footer(): React.JSX.Element {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-b from-[#033A73] to-[#012C57] text-white pt-12 pb-6"
        >
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-8">
                {/* Logo & About */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Image
                            src="/assets/footer-logo.png"
                            alt="Study Monks"
                            width={345}
                            height={60}
                        />
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-300 leading-relaxed"
                    >
                        Lorem Ipsum has been the industry&apos;s standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </motion.p>
                </div>

                {/* Useful Links */}
                <div>
                    <motion.h3 whileHover={{ scale: 1.05 }} className="font-bold mb-4">
                        Useful Links
                    </motion.h3>
                    <ul className="space-y-2 text-sm">
                        {usefulLinks.map((link, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                viewport={{ once: true }}
                            >
                                <a href={link.href} className="hover:underline">
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <motion.h3 whileHover={{ scale: 1.05 }} className="font-bold mb-4">
                        Legal
                    </motion.h3>
                    <ul className="space-y-2 text-sm">
                        {legalLinks.map((link, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                viewport={{ once: true }}
                            >
                                <a href={link.href} className="hover:underline">
                                    {link.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                {/* Contact & Social Links */}
                <div>
                    <motion.h3 whileHover={{ scale: 1.05 }} className="font-bold mb-4">
                        Contact Us
                    </motion.h3>
                    <ul className="space-y-2 text-sm">
                        {contactInfo.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * i }}
                                viewport={{ once: true }}
                                className="flex items-center gap-2"
                            >
                                {item.icon}
                                {item.href ? (
                                    <a href={item.href} className="hover:underline">
                                        {item.text}
                                    </a>
                                ) : (
                                    <span>{item.text}</span> // fallback if no href
                                )}
                            </motion.li>
                        ))}
                    </ul>

                    <motion.h4 whileHover={{ scale: 1.05 }} className="font-bold mt-6 mb-3">
                        Social Media Links
                    </motion.h4>
                    <div className="flex gap-4 text-lg">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                className="hover:text-gray-300"
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <motion.div
                className="container mx-auto px-4 mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                <p>Copyright © {new Date().getFullYear()} - All Rights Reserved</p>
                {/* <p>Designed & Developed By Digital Wolf</p> */}
            </motion.div>
        </motion.footer>
    );
}

export default Footer;
