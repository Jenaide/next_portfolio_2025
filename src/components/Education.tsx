"use client";

import { motion } from "framer-motion";

// Education milestones data
const educationMilestones = [
  {
    title: "Software Engineering Bootcamp",
    institution: "ALX Africa",
    year: "2022 - 2023",
    description: "Focused on Full-stack development, Systems engineering, and Cloud technologies.",
  },
  {
    title: "Certification in Business Analysis",
    institution: "Capitec School of business",
    year: "2022",
    description: "an introduction to business analysis course.",
  },
  {
    title: "Certification in Web Development",
    institution: "Udacity",
    year: "2022",
    description: "Learned advanced Python, Flask, Ionic, and backend systems.",
  },
  {
    title: "High School Diploma",
    institution: "High School Breeriver",
    year: "2002 - 2007",
    description: "Graduated.",
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  whileHover: {
    scale: 1.05,
    rotate: 2,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.3 },
  },
};


export default function Education() {
    
  return (
    <section id="contact" className="flex flex-col bg-gray-50 items-center py-12">
      <motion.div
        id="education"
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          {/* Heading */}
          
          <motion.h1
            className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-slate-500 to-stone-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
          >
            Education
          </motion.h1>
          <motion.h2 className="text-gray-400 text-lg uppercase tracking-widest">get to know me more</motion.h2>

          {/* Timeline */}
          <div className="w-full max-w-4xl">
            {educationMilestones.map((milestone, key) => (
              <motion.div
                key={key}
                className={`relative bg-white rounded-xl shadow-lg p-6 mb-10 flex flex-col sm:flex-row sm:items-center ${
                  key % 2 === 0 ? "animate-left" : "animate-right"
                }`}
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                whileHover="whileHover"
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* 3D Icon */}
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg mb-4 sm:mb-0 sm:mr-6"
                  whileHover={{ rotateY: 360 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  🎓
                </motion.div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.institution}</p>
                  <p className="text-gray-500 italic">{milestone.year}</p>
                  <p className="mt-2 text-gray-700">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
      </motion.div>
    </section>
  );
}
