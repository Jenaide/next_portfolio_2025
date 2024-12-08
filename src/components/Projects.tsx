"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

// Define the Project interface
interface Project {
    title: string;
    description: string;
    detailedDescription: string;
    image: string;
    link: string;
  }

export default function Projects(){

    const projects: Project[] = [
        {
            title: "Weather App",
            description: "A modern weather forecasting app built with React.",
            detailedDescription:
              "This app fetches live weather data using OpenWeatherMap API. Features include weather forecasts, temperature conversion, and dynamic backgrounds based on conditions.",
            image: "/path/to/weather-app.png", // Update with actual path
            link: "https://github.com/username/weather-app", // Replace with your link
          },
          {
            title: "Photoelectric Effect Simulation",
            description: "Interactive simulation of the photoelectric effect.",
            detailedDescription:
              "A physics-based simulation that visualizes how light interacts with materials. Built using JavaScript and Three.js for real-time rendering.",
            image: "/path/to/photoelectric-effect.png", // Update with actual path
            link: "https://github.com/username/photoelectric-effect", // Replace with your link
          },
          {
            title: "Projectile Motion Simulation",
            description: "Physics-based projectile motion simulator.",
            detailedDescription:
              "A comprehensive simulator for projectile motion that calculates trajectory, velocity, and impact points. Ideal for students and physics enthusiasts.",
            image: "/path/to/projectile-motion.png", // Update with actual path
            link: "https://github.com/username/projectile-motion", // Replace with your link
          },
    ];


    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const modalVariants = {
        hidden: { opacity: 0, y: "-50%" },
        visible: { opacity: 1, y: "0%", transition: { duration: 0.5 } },
        exit: { opacity: 0, y: "-50%", transition: { duration: 0.5 } },
    };

    return (
        <section id="projects" className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    >
                    <h2 className="text-gray-400 text-lg uppercase tracking-widest">Look At My</h2>
                    <h1 className="text-4xl font-bold bg-clip-text bg-gradient-to-r from-gray-100 to-stone-800">Projects</h1>
                    <p className="mt-4 text-gray-600 ">A collection of my favourite projects.</p>
                </motion.div>

                {/* project grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-8 mt-4"
                    
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, staggerChildren: 0.2 }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="relative">
                                <Image 
                                    src={project.image}
                                    alt={project.title}
                                    width={200}
                                    height={200}
                                    className="w-full object-cover"
                                />
                            </div>
                            <div className="p-6 text-center">
                                <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                                <p className="text-gray-600 mt-2">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Modal Popup */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
                                {/* Close Button */}
                                <Button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl">
                                    &times;
                                </Button>

                                {/* Modal Content */}
                                <div className="text-center">
                                    <Image 
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        width={300}
                                        height={300}
                                        className="mx-auto rounded"
                                    />
                                    <h2 className="text-2xl font-semibold text-gray-800 mt-4">{selectedProject.title}</h2>
                                    <p className="text-gray-600 mt-2">{selectedProject.detailedDescription}</p>
                                    <Link 
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-block bg-gray-400 text-black px-6 py-2 rounded-full font-medium hover:bg-gray-600 transition-all"
                                        >
                                        View
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    )
}