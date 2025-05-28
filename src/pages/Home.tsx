import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Tilt from '../components/Tilt';

const Home = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-8"
  >
    <section className="text-center space-y-4">
      <h1 className="text-4xl font-mono text-[#ECEFF4]">
        Learner Portfolio
      </h1>
      <p className="text-lg font-mono text-[#D8DEE9] max-w-2xl mx-auto">
        This portfolio documents my journey of learning about Indigenous perspectives, their rich cultural heritage,
        and unique storytelling traditions. Each entry represents a step in my exploration of Indigenous voices,
        history, and contemporary experiences.
      </p>
    </section>

    <section className="grid md:grid-cols-2 gap-6 mt-12">
      <Tilt className="w-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="entry-card bg-[#3B4252] p-6 rounded-lg shadow-lg font-mono"
        >
          <h2 className="text-2xl font-mono text-[#ECEFF4] mb-4">Latest Entries</h2>
          <p className="text-[#D8DEE9] font-mono mb-4">
            Explore my reflections and insights from engaging with Indigenous literature and perspectives.
          </p>
          <Link to="/entries" className="btn-primary inline-block font-mono">
            View Entries
          </Link>
        </motion.div>
      </Tilt>

      <Tilt className="w-full">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="entry-card bg-[#3B4252] p-6 rounded-lg shadow-lg font-mono"
        >
          <h2 className="text-2xl font-mono text-[#ECEFF4] mb-4">About Me</h2>
          <p className="text-[#D8DEE9] font-mono mb-4">
            Learn more about my journey and experiences with Indigenous literature and perspectives.
          </p>
          <Link to="/about" className="btn-primary inline-block font-mono">
            Learn More
          </Link>
        </motion.div>
      </Tilt>
    </section>
  </motion.div>
);

export default Home; 