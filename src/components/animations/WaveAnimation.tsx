import { motion } from 'framer-motion';

export const WaveAnimation = () => (
  <motion.svg
    className="absolute inset-0 w-full h-full opacity-5 text-cyan-500/20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <motion.path
      fill="currentColor"
      fillOpacity="1"
      d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,138.7C960,117,1056,107,1152,117.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      initial={{ pathLength: 0, pathOffset: 1 }}
      animate={{ pathLength: 1, pathOffset: 0 }}
      transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse' }}
    />
    <motion.path
      fill="currentColor"
      fillOpacity="0.5"
      d="M0,224L48,208C96,192,192,160,288,170.7C384,181,480,235,576,240C672,245,768,203,864,197.3C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      initial={{ pathLength: 1, pathOffset: 0 }}
      animate={{ pathLength: 0, pathOffset: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
    />
  </motion.svg>
);