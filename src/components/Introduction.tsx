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
        <section className='flex flex-col md:flex-row items-center justify-center px-8 space-y-8 md:space-y-0 min-h-screen py-10 bg-gray-100' >
            {/* Profile Picture with Hover Effect */}
            <div className='flex flex-col md:w-1/2 items-center md:items-start'>
                <div className='ml-36'>
                    <Image 
                        src={ProfileImage}
                        alt='profile'
                        width={300}
                        height={300}
                        className='rounded-full shadow-lg object-cover'
                    />
                </div>
            </div>

            {/* Introduction */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
                className='space-y-10 mr-24'
                >
                <p className='text-center justify-center text-gray-700 text-xl'>Hello, I&apos;m a</p>
                <h1 className='text-4xl lg:text-5xl font-bold text-gray-500'>Software Developer</h1>

                {/* Buttons with Hover Animations */}
                <div className='flex flex-col justify-center lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6 mt-4'>
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
                    className='flex items-center justify-center space-x-7'
                    >
                    <Link href={"https://discord.com/channels/@me"} target='_blank' className='text-gray-600 hover:text-purple-600 transform hover:scale-110 transition-all duration-300 ease-in-out'>
                        <FaDiscord className='w-8 h-8' />
                    </Link>
                    <Link href={"https://github.com/Jenaide"} target='_blank' className="text-gray-600 hover:text-black transform hover:scale-110 transition-all duration-300 ease-in-out">
                        <FaGithub className='w-8 h-8' />
                    </Link>
                    <Link href={"https://www.linkedin.com/in/jenaide-sibolie-57a340158/"} target='_blank' className="text-gray-600 hover:text-sky-600 transform hover:scale-110 transition-all duration-300 ease-in-out">
                        <FaLinkedin className='w-8 h-8' />
                    </Link>
                </motion.div>
            </motion.div>

            {/* Bouncing Down Arrow */}
            <motion.div
                animate={{ y: [0,10,0] }}
                transition={{
                    y: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 1,
                        ease: 'easeInOut'
                    }
                }}
                className='absolute bottom-6 flex justify-center w-full'
            >
                <Button onClick={scrollToAbout} className='bg-sky-400 transform hover:scale-110 hover:bg-sky-700 transition-all duration-300 ease-in-out'>
                    <FaArrowDown className='w-10 h-10' />
                </Button>
            </motion.div>
        </section>    
    )
}