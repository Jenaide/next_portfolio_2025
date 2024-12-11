"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePic from "../static/images/jenaide_noBG.png"
import { Button } from "./ui/button";
import Link from "next/link";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";


const scrollToContact = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
};

export default function Introduction(){
    return (
        <motion.section
            className='flex min-h-screen bg-gray-50 items-center justify-center p-32'
            >
            {/* Profile Picture Section */}
            <motion.div 
                className="w-1/2"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
                <Image 
                    src={ProfilePic}
                    alt="profile"
                    width={300}
                    height={300}
                    className="h-auto rounded-full sm:w-40 md:w-60 lg:w-72 w-32"
                />
            </motion.div>

            {/* Introduction Section */}
            <motion.div
                className="w-1/2 flex-col items-center space-y-10 text-gray-700"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <motion.h2 
                    className="text-center text-xl"
                    >
                        Hello, I am <span>Jenaide Sibolie</span>
                    </motion.h2>
                <motion.h1 
                    className="text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-950"
                    >
                        I&apos;m a Software Developer
                    </motion.h1>

                {/* Buttons Section */}
                <div className="flex space-x-3 justify-center">
                    <Button
                        onClick={() => window.open("https://docs.google.com/document/d/1NanA2qe9JZhq6P1hGxre2itjbYi4XwAP84_uBPIdrqw/edit?usp=sharing")}
                        className="py-2 px-6 rounded-md shadow-lg bg-sky-500 hover:bg-sky-950 transform transition-all duration-300 ease-in-out"
                    >
                        Download CV
                    </Button>

                    <Button
                        onClick={scrollToContact}
                        className="py-2 px-6 rounded-md shadow-lg bg-gray-500 hover:bg-gray-900 transform transition-all duration-300 ease-in-out"
                    >
                        Contact Info
                    </Button>
                </div>

                {/* Social Icons Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 2, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex space-x-9 justify-center"
                >
                    <Link 
                        href="https://discord.com/channels/@me" 
                        target='_blank' 
                        className='text-gray-600 hover:text-purple-600 transform hover:scale-110 transition-all duration-300 ease-in-out'
                    >
                        <FaDiscord className='w-12 h-12' />
                    </Link>

                    <Link 
                        href="https://github.com/Jenaide" 
                        target='_blank' 
                        className="text-gray-600 hover:text-black transform hover:scale-110 transition-all duration-300 ease-in-out"
                    >
                        <FaGithub className='w-12 h-12' />
                    </Link>
                    <Link 
                        href="https://www.linkedin.com/in/jenaide-sibolie-57a340158/" 
                        target='_blank' 
                        className="text-gray-600 hover:text-sky-600 transform hover:scale-110 transition-all duration-300 ease-in-out"
                    >
                        <FaLinkedin className='w-12 h-12' />
                    </Link>
                </motion.div>
            </motion.div>
        </motion.section>
    )
}