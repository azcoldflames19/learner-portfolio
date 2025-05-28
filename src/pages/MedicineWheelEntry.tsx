import { motion } from 'framer-motion';

const MedicineWheelEntry = () => {
  const mentalGoals = [
    "I will improve my analysing skills by interpreting complicated pieces.",
    "I will expand my vocabulary through consistent reading and note taking.",
    "I will strengthen my writing skills by practicing debate."
  ];

  const emotionalGoals = [
    "I will build confidence in sharing my ideas during discussions.",
    "I will practice resilience when receiving constructive feedback.",
    "I will stay open to perspectives that challenge my views."
  ];

  const physicalGoals = [
    "I will maintain healthy screen time habits throughout the school year.",
    "I will stay fit so that my mind can remain sharp.",
    "I will use physical journaling or note taking to help me with focusing and remembering."
  ];

  const spiritualGoals = [
    "I will explore themes of identity and purpose in literature.",
    "I will reflect on how the stories I read connect to my own values or beliefs.",
    "I will seek moments of meaning or inspiration through creative expression."
  ];

  return (
    <div className="space-y-8">
      {/* Mental Goals */}
      <section>
        <h2 className="text-xl font-mono text-nord6 mb-4">Mental Goals</h2>
        <ul className="space-y-3">
          {mentalGoals.map((goal, index) => (
            <li key={index} className="text-nord4 font-mono pl-4 relative">
              <span className="absolute left-0">•</span>
              <span className="block pl-2">{goal}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Emotional Goals */}
      <section>
        <h2 className="text-xl font-mono text-nord6 mb-4">Emotional Goals</h2>
        <ul className="space-y-3">
          {emotionalGoals.map((goal, index) => (
            <li key={index} className="text-nord4 font-mono pl-4 relative">
              <span className="absolute left-0">•</span>
              <span className="block pl-2">{goal}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Physical Goals */}
      <section>
        <h2 className="text-xl font-mono text-nord6 mb-4">Physical Goals</h2>
        <ul className="space-y-3">
          {physicalGoals.map((goal, index) => (
            <li key={index} className="text-nord4 font-mono pl-4 relative">
              <span className="absolute left-0">•</span>
              <span className="block pl-2">{goal}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Spiritual Goals */}
      <section>
        <h2 className="text-xl font-mono text-nord6 mb-4">Spiritual Goals</h2>
        <ul className="space-y-3">
          {spiritualGoals.map((goal, index) => (
            <li key={index} className="text-nord4 font-mono pl-4 relative">
              <span className="absolute left-0">•</span>
              <span className="block pl-2">{goal}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MedicineWheelEntry; 