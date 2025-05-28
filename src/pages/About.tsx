import { motion } from 'framer-motion';
import Tilt from '../components/Tilt';

const About = () => (
  <div className="min-h-screen bg-[#2E3440] text-[#ECEFF4] p-8">
    <div className="max-w-4xl mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-8 text-[#ECEFF4] font-mono"
      >
        About Me
      </motion.h1>

      <div className="space-y-6">
        <Tilt className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#3B4252] rounded-lg p-6 shadow-lg font-mono"
          >
            <h2 className="text-xl font-semibold mb-4 text-[#ECEFF4]">My Journey</h2>
            <p className="text-[#D8DEE9] mb-4">
              Throughout this course, I've embarked on a journey to understand and appreciate Indigenous perspectives,
              their rich cultural heritage, and unique storytelling traditions. Each entry in my portfolio represents
              a step in my exploration of Indigenous voices, history, and contemporary experiences.
            </p>
          </motion.div>
        </Tilt>

        <Tilt className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#3B4252] rounded-lg p-6 shadow-lg font-mono"
          >
            <h2 className="text-xl font-semibold mb-4 text-[#ECEFF4]">Learning Goals</h2>
            <p className="text-[#D8DEE9] mb-4">
              My goal is to develop a deeper understanding of Indigenous cultures and perspectives through
              literature, art, and personal reflections. I aim to challenge my preconceptions and build
              meaningful connections with Indigenous knowledge and ways of knowing.
            </p>
          </motion.div>
        </Tilt>

        <Tilt className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-[#3B4252] rounded-lg p-6 shadow-lg font-mono"
          >
            <h2 className="text-xl font-semibold mb-4 text-[#ECEFF4]">Interests</h2>
            <p className="text-[#D8DEE9]">
              I'm particularly interested in Indigenous storytelling traditions, contemporary Indigenous
              literature, and the ways in which Indigenous perspectives can enrich our understanding of
              history, culture, and identity.
            </p>
          </motion.div>
        </Tilt>

        <Tilt className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#3B4252] rounded-lg p-6 shadow-lg font-mono"
          >
            <h2 className="text-xl font-semibold mb-4 text-[#ECEFF4]">About This Site</h2>
            <p className="text-[#D8DEE9]">
              This portfolio website was built from scratch using Vite + React, featuring a modern tech stack including TypeScript, Tailwind CSS, and Framer Motion for smooth animations. The site is designed to be responsive, accessible, and performant, with a focus on user experience and clean code architecture.
            </p>
          </motion.div>
        </Tilt>
      </div>
    </div>
  </div>
);

export default About; 