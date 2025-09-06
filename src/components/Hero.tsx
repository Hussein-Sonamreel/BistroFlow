import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// RESTORED: These animation variants were accidentally removed.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      role="region"
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center w-full h-screen overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.img
          src="/images/hero-background.jpg"
          alt="Elegant beachside dining setup at sunset"
          className="object-cover w-full h-full"
          width="1920"
          height="1080"
          loading="eager"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 15, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <motion.div
        className="relative z-10 text-center p-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          id="hero-heading"
          className="text-4xl font-bold text-white font-serif md:text-6xl lg:text-7xl"
          variants={itemVariants}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto md:text-xl"
          variants={itemVariants}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div variants={itemVariants}>
          <a
            href="#menu"
            className="inline-block px-8 py-3 mt-8 font-semibold text-white transition-transform duration-300 bg-primary rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background hover:scale-105"
          >
            {t('hero.cta')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;