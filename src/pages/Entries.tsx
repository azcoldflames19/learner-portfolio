import { motion } from 'framer-motion';
import { useState } from 'react';

interface Entry {
  id: number;
  title: string;
  date: string;
  type: 'text' | 'audio';
  preview: string;
}

const sampleEntries: Entry[] = [
  {
    id: 1,
    title: "My First English Essay",
    date: "2024-03-15",
    type: "text",
    preview: "In this essay, I explore the challenges and triumphs of learning English..."
  },
  {
    id: 2,
    title: "Speaking Practice Recording",
    date: "2024-03-20",
    type: "audio",
    preview: "A recording of my speaking practice session..."
  },
  // Add more entries as needed
];

const Entries = () => {
  const [entries] = useState<Entry[]>(sampleEntries);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-serif text-primary-800 mb-8">My Entries</h1>
      
      <div className="grid gap-6 md:grid-cols-2">
        {entries.map((entry) => (
          <motion.div
            key={entry.id}
            whileHover={{ scale: 1.02 }}
            className="entry-card"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-serif text-primary-700">{entry.title}</h2>
              <span className="text-sm text-gray-500">{entry.date}</span>
            </div>
            
            <div className="flex items-center space-x-2 mb-4">
              <span className={`px-2 py-1 rounded-full text-xs ${
                entry.type === 'audio' 
                  ? 'bg-blue-100 text-blue-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                {entry.type}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{entry.preview}</p>
            
            <button className="btn btn-primary">
              {entry.type === 'audio' ? 'Listen' : 'Read More'}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Entries; 