import { motion } from 'framer-motion';

const Spark = ({ top, left, duration, delay }: { top: string, left: string, duration: number, delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-primary/50"
    style={{ top, left }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
    transition={{ duration, delay, repeat: Infinity, repeatDelay: 5 }}
  />
);

export const SparkAnimation = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden">
    <Spark top="20%" left="15%" duration={1.5} delay={0.5} />
    <Spark top="80%" left="30%" duration={1.2} delay={1.5} />
    <Spark top="50%" left="80%" duration={1.8} delay={2.0} />
    <Spark top="30%" left="90%" duration={1.0} delay={3.5} />
    <Spark top="90%" left="10%" duration={1.6} delay={4.0} />
  </div>
);