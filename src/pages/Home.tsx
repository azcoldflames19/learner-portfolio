import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-serif text-primary-800">
          Welcome to My English Learning Journey
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          This portfolio showcases my progress in English language learning through various entries,
          reflections, and achievements. Each piece represents a step in my journey towards
          mastering the English language.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-12">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="entry-card bg-primary-50"
        >
          <h2 className="text-2xl font-serif text-primary-700 mb-4">Latest Entries</h2>
          <p className="text-gray-600 mb-4">
            Explore my most recent reflections and learning experiences in English.
          </p>
          <Link to="/entries" className="btn btn-primary inline-block">
            View Entries
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="entry-card bg-primary-50"
        >
          <h2 className="text-2xl font-serif text-primary-700 mb-4">About Me</h2>
          <p className="text-gray-600 mb-4">
            Learn more about my language learning journey and goals.
          </p>
          <Link to="/about" className="btn btn-primary inline-block">
            Learn More
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home; 