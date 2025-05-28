import { motion } from 'framer-motion';

const PoliticalCartoonEntry = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4 text-nord4 font-mono"
    >
      <p>
        Cartoonist Steave Nease created the cartoon as a satirical piece that was intended to criticize the inadequacy of the Pope's apology for the Catholic Church's role in the abuse of Indigenous peoples. He attempted to highlight how words alone are not enough to address decades of harm.
      </p>
      <p>
        But the cartoon faced severe backlash after it was published for painting a negative picture of Indigenous people. The majority of the public felt that the cartoon had severely misrepresented Indigenous perspectives and was also not historically accurate.
      </p>
      <p>
        Grand Council Chief Reg Niganobe of the Anishinabek Nation stated that the cartoon was "misleading" because it implied that Indigenous peoples were only focused on financial compensation instead of on healing from past abuses. He explained that this portrayal was harmful because it portrayed Indigenous people as "money-minded", which is not the case.
      </p>
      <p>
        I think the intended message of the satirical piece was acceptable, because the Pope's apology was and should be seen as a starting point to reconciliation, but the cartoon overstepped the boundaries by introducing money and greed into the equation.
      </p>
    </motion.div>
  );
};

export default PoliticalCartoonEntry; 