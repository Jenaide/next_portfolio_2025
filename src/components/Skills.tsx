"use client";
import { motion } from "framer-motion";
import Nextjs from "./SVG/Next";
import React from "./SVG/React";
import Python from "./SVG/Python";
import PostgreSQL from "./SVG/Postgres";
import C from "./SVG/C";
import TailwindCSS from "./SVG/Tailwind";


const skills = [
    { name: "Python", icon: <Python />, description: "General purpose programming language" },
    { name: "C#", icon: <C />, description: "a modern, open-source, cross-platform language that's part of the C family of languages, which also includes C and C++" },
    { name: "NextJS", icon: <Nextjs />, description: "Server-rendered React framework" },
    { name: "ReactJS", icon: <React />, description: "Popular UI library" },
    { name: "PostgreSQL", icon: <PostgreSQL />, description: "a free, open-source relational database management system (RDBMS) that's used to store structured data" },
    { name: "TailwindCSS", icon: <TailwindCSS />, description: "a CSS framework that allows users to quickly build custom user interfaces" }
  ];

const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    whileHover: { scale: 1.05, rotate: 2, transition: { duration: 0.2 } },
};

export default function Skills(){
    return (
        <motion.section
            id="skills"
            className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-16 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
        >
            {/* Heading */}
            <h2 className="text-gray-400 text-lg uppercase tracking-widest">Here are some of my</h2>
            <motion.h1
                className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-slate-500 to-stone-800"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            >
                Skills
            </motion.h1>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {skills.map((skill, key) => (
                    <motion.div
                        key={key}
                        className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center cursor-pointer transform transition-transform duration-300"
                        variants={cardVariants}
                        initial="initial"
                        whileInView="animate"
                        whileHover="whileHover"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                    {/* 3D Icon */}
                    <motion.div
                        className="text-6xl mb-4"
                        style={{
                            textShadow: "1px 1px 10px rgba(0, 0, 0, 0.2)",
                        }}
                        whileHover={{ rotateY: 360 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                        {skill.icon}
                    </motion.div>

                    {/* Skill Name */}
                    <motion.h2
                        className="text-lg font-semibold text-gray-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.3 } }}
                    >
                       {skill.name}
                    </motion.h2>
                    <motion.p
                         className="text-sm text-gray-600 mt-2"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1, transition: { delay: 0.5 } }}
                    >
                        {skill.description}
                    </motion.p>
                </motion.div>
                ))}
            </div>
        </motion.section>
    )
}