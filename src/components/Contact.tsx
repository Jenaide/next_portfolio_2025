"use client";
import { motion } from "framer-motion";
import Gmail from "./SVG/Gmail";
import LinkedIn from "./SVG/LinkedIn";


export default function Contact(){

    return (
        <section id="contact" className="flex flex-col min-h-screen bg-gray-50 items-center justify-between py-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-center"
            >
                <h2 className="text-gray-400 text-lg uppercase tracking-widest">Let&apos;s Get In-Touch</h2>
                <motion.h1
                    className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-slate-500 to-stone-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Contact Me
                </motion.h1>
            </motion.div>

            {/* Center Links */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mt-12"
                initial={{ opacity:0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                <motion.a
                    href="mailto:jenaidesibolie@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 w-full sm:w-auto bg-white border rounded-full shadow-md text-gray-800 hover:shadow-lg transition"
                    whileHover={{ scaleX: 1.1 }}
                >
                    <Gmail className="text-lg mr3" />
                    jenaidesibolie@gmail.com
                </motion.a>

                <motion.a
                    href="https://www.linkedin.com/in/jenaide-sibolie-57a340158/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 w-full sm:w-auto bg-white border rounded-full shadow-md text-gray-800 hover:shadow-lg transition"
                    whileHover={{ scale: 1.1 }}
                >
                    <LinkedIn className="text-lg"/>
                    LinkedIn
                </motion.a>
            </motion.div>
            
            {/* Footer */}
            <motion.div
                className="mt-16 text-sm text-gray-500 w-full text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                <div className="mt-32 flex justify-center space-x-6">
                    <motion.a
                        id="about"
                        href="#about"
                        className="hover:text-gray-800 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        About
                    </motion.a>

                    <motion.a
                        id="experience"
                        href="#experience"
                        className="hover:text-gray-800 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        Experience
                    </motion.a>

                    <motion.a
                        id="projects"
                        href="#projects"
                        className="hover:text-gray-800 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        Projects
                    </motion.a>

                    <motion.a
                        id="contact"
                        href="#contact"
                        className="hover:text-gray-800 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        Contact
                    </motion.a>
                </div>

                <p className="mt-6">Copyright © 2025 Jenaide Sibolie. All Rights Reserved.</p>
            </motion.div>
        </section>
    )
}