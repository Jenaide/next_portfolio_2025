"use client";
import { motion } from "framer-motion"
import { FaAward, FaBrain, FaDatabase, FaGraduationCap, FaLaptopCode, FaPalette } from "react-icons/fa";


export default function About(){

    const cardVariants = {
        hover: {
            scale: 1.05,
            rotateX: 10,
            rotateY: -10,
            transition: { type: "spring", stiffness: 300 }
        },
        rest: { 
            scale: 1,
            rotateX: 0,
            rotateY: 0,
            transition: { type: "spring", stiffness: 300 }
        }
    }
    return (
        <section id="about" className="min-h-screen">
            {/* Header Section */}
            <motion.div
                className="text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-gray-400 text-lg uppercase tracking-widest">Get To Know Me</h2>
                <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
            </motion.div>

            {/* Intro Section */}
            <motion.div
                className="max-w-4xl mx-auto text-center text-gray-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <p className="leading-relaxed">
                Hi, I&apos;m Jenaide Sibolie, a Software Enigineering Alumni with a deep love for tech and a passion for making an
                impact. Ever since I discovered my love for coding, I&apos;ve been excited about building tools and solutions that
                can help people. Whether it&apos;s organizing hackathons or mentoring young girls to code, I strive to create a
                more inclusive tech space.
                </p>
            </motion.div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-6 max-w-6xl mx-auto">
                {/* Experience Card */}
                <motion.div
                    className="p-6 bg-gray-300 shadow-xl rounded-lg text-center"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                >
                    <FaAward className="w-12 h-12 mx-auto text-gray-800" />
                    <h3 className="text-xl font-bold mt-4">Experience</h3>
                    <p className="mt-2">2+ years</p>
                    <p className="text-gray-500">Software Engineering</p>
                </motion.div>

                {/* Education Card */}
                <motion.div
                    className="p-6 bg-indigo-400 shadow-xl rounded-lg text-center"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                >
                    <FaGraduationCap className="w-12 h-12 mx-auto text-gray-800" />
                    <h3 className="text-xl font-bold mt-4">Education</h3>
                    <p className="mt-2">ALX Africa Bootcamp</p>
                    <p className="text-gray-500">Software Engineering</p>
                </motion.div>

                {/* Web Development Card */}
                <motion.div
                    className="p-6 bg-emerald-400 shadow-xl rounded-lg text-center"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                >
                    <FaLaptopCode className="w-12 h-12 mx-auto text-gray-800" />
                    <h3 className="text-xl font-bold mt-4">Web and App Development</h3>
                    <p className="mt-2">Udacity</p>
                </motion.div>

                {/* Database and Visualization Card */}
                <motion.div
                    className="p-6 bg-teal-400 shadow-xl rounded-lg text-center"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                >
                    <FaDatabase className="w-12 h-12 mx-auto text-gray-800" />
                    <h3 className="text-xl font-bold mt-4">Database and Visualization</h3>
                </motion.div>

                {/* UI/UX Design Card */}
                <motion.div
                    className="p-6 bg-cyan-300 shadow-xl rounded-lg text-center"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                >
                    <FaPalette className="w-12 h-12 mx-auto text-gray-800" />
                    <h3 className="text-xl font-bold mt-4">User Interface and Experience Design</h3>
                </motion.div>

                {/* AI and Machine Learning Card */}
                <motion.div
                    className="p-6 bg-sky-300 shadow-xl rounded-lg text-center"
                    variants={cardVariants}
                    initial="rest"
                    whileHover="hover"
                >
                    <FaBrain className="w-12 h-12 mx-auto text-gray-800" />
                    <h3 className="text-xl font-bold mt-4">Prompt Engineering</h3>
                </motion.div>
            </div>
        </section>
    )
}