import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import BackToTop from '../components/BackToTop';
import SearchBar from '../components/SearchBar';
import Tilt from '../components/Tilt';
import MedicineWheelEntry from './MedicineWheelEntry';
import IndigenousWritesEntry from './IndigenousWritesEntry';
import BlanketExerciseEntry from './BlanketExerciseEntry';
import TruthAndBrightWaterEntry from './TruthAndBrightWaterEntry';
import ILoveCanadaEntry from './ILoveCanadaEntry';
import PoliticalCartoonEntry from './PoliticalCartoonEntry';
import ChiefDanGeorgeEntry from './ChiefDanGeorgeEntry';
import WaubgeshigRiceEntry from './WaubgeshigRiceEntry';

interface Entry {
  id: string;
  title: string;
  types: ('reflection' | 'activity' | 'discussion')[];
  preview: string;
  component: React.ReactNode;
  hasAudio?: boolean;
}

const entries: Entry[] = [
  {
    id: 'blanket-exercise',
    title: 'Blanket Exercise Reflection',
    types: ['reflection', 'activity'],
    preview: 'A reflection on the KAIROS Blanket Exercise and its impact on understanding colonization.',
    component: <BlanketExerciseEntry />,
  },
  {
    id: 'goal-setting',
    title: 'Goal Setting Activity',
    types: ['activity'],
    preview: 'Setting personal and academic goals using the Medicine Wheel framework.',
    component: <MedicineWheelEntry />,
  },
  {
    id: 'indigenous-writes',
    title: 'Indigenous Writes',
    types: ['reflection'],
    preview: 'Reflecting on the significance of language in representing Indigenous cultures.',
    component: <IndigenousWritesEntry />,
  },
  {
    id: 'truth-and-bright-water',
    title: 'Truth and Bright Water Reflection',
    types: ['reflection'],
    preview: 'A reflection on the novel Truth and Bright Water by Thomas King.',
    component: <TruthAndBrightWaterEntry />,
  },
  {
    id: 'i-love-canada',
    title: 'I Love Canada Because...',
    types: ['reflection'],
    preview: 'A personal reflection on Canadian identity and values.',
    component: <ILoveCanadaEntry />,
  },
  {
    id: 'political-cartoon',
    title: 'Political Cartoon Activity Response',
    types: ['reflection'],
    preview: 'Analysis and reflection on Steave Nease\'s political cartoon.',
    component: <PoliticalCartoonEntry />,
  },
  {
    id: 'chief-dan-george',
    title: 'Chief Dan George, "Lament for Confederation"',
    types: ['reflection'],
    preview: 'A reflection on Chief Dan George\'s powerful speech.',
    component: <ChiefDanGeorgeEntry />,
  },
  {
    id: 'waubgeshig-rice',
    title: 'Waubgeshig Rice Speech Discussion',
    types: ['reflection'],
    preview: 'A reflection on Waubgeshig Rice\'s speech about Indigenous literature.',
    component: <WaubgeshigRiceEntry />,
    hasAudio: true,
  },
];

const Entries = () => {
  const [selectedEntry, setSelectedEntry] = useState<Entry | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEntries = entries.filter(entry =>
    entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    entry.preview.toLowerCase().includes(searchQuery.toLowerCase()) ||
    entry.types.some(type => type.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-[#2E3440] text-[#ECEFF4] p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 text-[#ECEFF4]"
        >
          Entries
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SearchBar onSearch={setSearchQuery} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <AnimatePresence>
            {filteredEntries.map((entry) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Tilt className="w-full">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#3B4252] rounded-lg p-6 shadow-lg cursor-pointer font-mono"
                    onClick={() => setSelectedEntry(entry)}
                  >
                    <h2 className="text-xl font-semibold mb-2 text-[#ECEFF4]">{entry.title}</h2>
                    <p className="text-[#D8DEE9] mb-4">{entry.preview}</p>
                    <div className="flex flex-wrap gap-2">
                      {entry.types.map((type) => (
                        <motion.span
                          key={type}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 rounded-full text-sm ${
                            type === 'reflection' ? 'bg-[#88C0D0]' :
                            type === 'activity' ? 'bg-[#EBCB8B]' :
                            'bg-[#81A1C1]'
                          } text-[#2E3440]`}
                        >
                          {type}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </Tilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <BackToTop />
      
      {selectedEntry && (
        <Modal 
          isOpen={true}
          onClose={() => setSelectedEntry(null)}
          title={selectedEntry.title}
        >
          {selectedEntry.component}
        </Modal>
      )}
    </div>
  );
};

export default Entries; 