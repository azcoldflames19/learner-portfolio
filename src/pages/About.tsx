import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto"
    >
      <h1 className="text-3xl font-serif text-primary-800 mb-8">About My Journey</h1>
      
      <section className="space-y-6">
        <div className="entry-card">
          <h2 className="text-2xl font-serif text-primary-700 mb-4">My Learning Goals</h2>
          <p className="text-gray-600">
            My primary goal is to achieve fluency in English, focusing on both written and spoken communication.
            Through this portfolio, I document my progress, challenges, and achievements in this journey.
          </p>
        </div>

        <div className="entry-card">
          <h2 className="text-2xl font-serif text-primary-700 mb-4">Learning Methods</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Regular writing practice through essays and reflections</li>
            <li>Speaking practice with audio recordings</li>
            <li>Reading English literature and articles</li>
            <li>Engaging in conversations with native speakers</li>
          </ul>
        </div>

        <div className="entry-card">
          <h2 className="text-2xl font-serif text-primary-700 mb-4">Progress Tracking</h2>
          <p className="text-gray-600">
            This portfolio serves as a living document of my English learning journey. Each entry
            represents a milestone in my progress, from basic writing exercises to more complex
            compositions and speaking practice.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default About; 