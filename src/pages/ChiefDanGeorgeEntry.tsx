import { motion } from 'framer-motion';

const ChiefDanGeorgeEntry = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 text-nord4 font-mono"
    >
      <p>
        I chose Chief Dan George's speech "Lament for Confederation" because of its importance in Canadian history. It was delivered during Canada's centennial in 1967 and it stood out to me as a bold and courageous message that challenged the dominant narrative of celebration.
      </p>
      <p>
        Instead of joining in the narrative and message of national pride, Chief Dan George used the rare opportunity to express the pain, loss, and marginalization Indigenous peoples have experienced since Confederation.
      </p>
      <p>
        Chief Dan George used several effective persuasive strategies in his speech. He began by reflecting on the past and comparing it with the hardships faced under colonization. He also used repetition effectively, such as repeating the phrase "When I was a boy" to emphasize the drastic changes over his lifetime. Near the end of his speech, he called for a future based on mutual respect, peace, and understanding.
      </p>
    </motion.div>
  );
};

export default ChiefDanGeorgeEntry; 