import { motion } from 'framer-motion';

const WaubgeshigRiceEntry = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 text-nord4 font-mono"
    >
      <div className="mt-6 p-4 bg-nord1 rounded-lg">
        <h3 className="text-nord6 font-mono mb-3">Audio Recording</h3>
        <audio 
          controls 
          className="w-full"
          src="/audio/waubgeshig-rice.mp3"
        >
          Your browser does not support the audio element.
        </audio>
      </div>
    </motion.div>
  );
};

export default WaubgeshigRiceEntry; 