"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";


export default function NavBar(){

    const [activeSection, setActiveSection] = useState<string>("jenaide");
    const [scrollProgress, setScrollProgress] = useState<number>(0);

    // for hamburger
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

    const mobileMenuVariants = {
        hidden: { x: "100%", opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
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

            {/* Navbar (only visible on larger screens) */}
            <motion.nav 
                className="fixed justify-between items-center w-full z-50 py-4 px-6 hidden md:flex"
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
                    
                    {/* Desktop Links */}
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


            {/* Hamburger Button for small screens */}
            <Button
            variant={"outline"}
                className="block md:hidden z-50"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <motion.div
                className="w-8 h-1 bg-gray-900 mb-1"
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                />
                <motion.div
                className="w-8 h-1 bg-gray-900"
                animate={{ opacity: menuOpen ? 0 : 1 }}
                />
                <motion.div
                className="w-8 h-1 bg-gray-900 mt-1"
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                />
            </Button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="fixed top-0 right-0 w-2/3 h-screen bg-white shadow-md flex flex-col items-center pt-20 space-y-6 z-40"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={mobileMenuVariants}
                    >
                        {[
                            { label: "About", href: "#about" },
                            { label: "Education", href: "#education" },
                            { label: "Skills", href: "#skills" },
                            { label: "Projects", href: "#projects" },
                            { label: "Contact", href: "#contact" },
                            ].map(({ label, href }) => (
                        <Link
                            key={label}
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            className="text-xl text-gray-800 hover:text-sky-500"
                        >
                            {label}
                        </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}