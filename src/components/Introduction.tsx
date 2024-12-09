"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import ProfileImage from "../static/images/jenaide_noBG.png"
import { FaArrowDown, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from './ui/button';


export default function Introduction(){

    // smooth scroll
    const scrollToAbout = () => {
        const aboutSection = document.getElementById('about');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
    }

    const scrollToContact = () => {
        const aboutSection = document.getElementById('contact');
        aboutSection?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className='flex flex-col md:flex-row items-center justify-center px-6 md:px-16 space-y-12 md:space-y-0 min-h-screen py-10 bg-gray-50' >
            {/* Profile Picture with Hover Effect */}
            <div className='flex flex-col w-full md:w-1/2 items-center md:items-end'>
                <div className='w-full flex justify-center md:justify-end'>
                    <Image 
                        src={ProfileImage}
                        alt='profile'
                        width={300}
                        height={300}
                        className='w-32 sm:w-40 md:w-60 lg:w-72 h-auto rounded-full mx-auto md:mx-0'
                    />
                </div>
            </div>

            {/* Introduction */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
                className='w-full md:w-1/2 space-y-6 text-center md:text-left'
                >
                <p className='text-center justify-center text-gray-700 text-xl'>Hello, I&apos;m a</p>
                <h1 className='text-4xl lg:text-5xl md:text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-950'>Software Developer</h1>

                {/* Buttons with Hover Animations */}
                <div className='flex flex-col lg:flex-row items-center justify-center md:justify-start space-y-4 lg:space-y-0 lg:space-x-6'>
                    <Button 
                        onClick={() => window.open("https://docs.google.com/document/d/1NanA2qe9JZhq6P1hGxre2itjbYi4XwAP84_uBPIdrqw/edit?usp=sharing")}
                        className='bg-sky-400 text-white py-2 px-6 rounded-md shadow-lg transform hover:bg-sky-600 hover:scale-105 transition-all duration-300 ease-in-out'>
                        Download CV
                    </Button>
                    <Button onClick={scrollToContact} className='bg-gray-800 text-white py-2 px-6 rounded-md shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out'>
                        Contact Info
                    </Button>
                </div>

                {/* Social Icons with Hover Animations */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className='flex justify-center md:justify-start space-x-7'
                    >
                    <Link 
                        href={"https://discord.com/channels/@me"} 
                        target='_blank' 
                        className='text-gray-600 hover:text-purple-600 transform hover:scale-110 transition-all duration-300 ease-in-out'>
                        <FaDiscord className='w-8 h-8' />
                    </Link>
                    <Link 
                        href={"https://github.com/Jenaide"} 
                        target='_blank' 
                        className="text-gray-600 hover:text-black transform hover:scale-110 transition-all duration-300 ease-in-out">
                        <FaGithub className='w-8 h-8' />
                    </Link>
                    <Link 
                        href={"https://www.linkedin.com/in/jenaide-sibolie-57a340158/"} 
                        target='_blank' 
                        className="text-gray-600 hover:text-sky-600 transform hover:scale-110 transition-all duration-300 ease-in-out">
                        <FaLinkedin className='w-8 h-8' />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Bouncing Down Arrow */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    y: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 1,
                        ease: 'easeInOut'
                    }
                }}
                className='absolute bottom-10 flex justify-center w-full'
            >
                <Button onClick={scrollToAbout} className='bg-sky-400 transform hover:scale-110 hover:bg-sky-700 transition-all duration-300 ease-in-out'>
                    <FaArrowDown className='w-10 h-10' />
                </Button>
            </motion.div>
        </section>    
    )
}