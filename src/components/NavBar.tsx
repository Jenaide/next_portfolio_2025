"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function NavBar(){

    const [activeSection, setActiveSection] = useState<string>("jenaide");
    const [scrollProgress, setScrollProgress] = useState<number>(0);

    // Observe sections and update the active section
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.6, // 60% visibility triggers the observer
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, observerOptions);

        sections.forEach((sections) => observer.observe(sections));

        return () => observer.disconnect();
    }, []);

    // Scroll progress bar logic
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const totalHeight = document.body.scrollHeight - window.innerHeight;
            const progress = (scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
    
      const underlineVariants = {
        initial: { width: "0%", opacity: 0 },
        animate: { width: "100%", opacity: 1, transition: { duration: 0.3 } },
      };

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div 
                className="fixed top-0 left-0 h-1 bg-sky-500 z-50"
                style={{ width: `${scrollProgress}` }}
                initial={{ width: 0 }}
                animate={{ width: `${scrollProgress}` }}
            />

            {/* Navbar */}
            <motion.nav 
                className="fixed flex justify-between w-full z-50 py-2 px-4"
                initial="hidden"
                animate="visible"
                variants={menuVariants}
                >
                    <div className="">
                        {/* Left-aligned */}
                        <motion.div className="flex items-center space-x-4">
                            <Link href={"#jenaide"}>
                                <motion.h1
                                    className={`text-3xl font-audiowide text-gray-900 cursor-pointer transition-all duration-300 ease-in-out ${
                                        activeSection === "about" ? "underline" : ""
                                      }`}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    JS
                                </motion.h1>
                            </Link>
                        </motion.div>
                    </div>
                    
                    <ul className="flex space-x-6 text-lg">
                        {[
                            { label: "About", href: "#about" },
                            { label: "Education", href: "#education" },
                            { label: "Skills", href: "#skills" },
                            { label: "Projects", href: "#projects" },
                            { label: "Contact", href: "#contact" },
                        ].map(({ label, href }) => (
                            <motion.li
                                key={label}
                                className="relative group cursor-pointer transition-all duration-300 ease-in-out"
                            >
                                <Link
                                    href={href}
                                    scroll={false} // Prevents default jump-scroll behavior
                                    className={`${
                                            activeSection == href.substring(1)
                                            ? "text-sky-500 font-semibold"
                                            : "text-gray-700 hover:text-sky-500"
                                        }`}
                                >
                                    {label}
                                </Link>

                                {/* Animated Underline */}
                                {activeSection === href.substring(1) && (
                                    <motion.span
                                        className="absolute bottom-0 left-0 h-1 bg-sky-500 rounded"
                                        variants={underlineVariants}
                                        initial="initial"
                                        animate="animate"
                                    />
                                )}
                            </motion.li>
                        ))}
                    </ul>
            </motion.nav>
        </>
    )
}