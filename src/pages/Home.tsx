import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { heroConfig, socialLinks } from '@/config/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import haard from '../data/images/hardy.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-white dark:bg-black">
      {/* Clean minimal background - no grids, no glows */}

      <Container className="py-20 relative z-10">
        <div className="space-y-32">
          {/* Hero Section with Physics-Based Animations */}
          <motion.section
            style={{ opacity, scale, y }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-h-[80vh] flex flex-col justify-center space-y-12"
          >
            {/* Profile Image - Clean */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative"
              >
                <img
                  src={haard}
                  alt={heroConfig.name}
                  className="h-40 w-40 rounded-full border border-gray-300 dark:border-gray-700 object-cover shadow-lg"
                />
              </motion.div>
            </motion.div>

            {/* Name and Title - Clean Typography */}
            <motion.div variants={itemVariants} className="space-y-6 text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-black dark:text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Haard Solanki
              </motion.h1>
              
              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                  Backend & Blockchain Engineer
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Founding engineer at Elcara, building agentic systems and market infrastructure. Backend engineer at WhiteBeard, shipping core trading systems. DeFi protocol specialist.
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons - Clean */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 flex-wrap"
            >
              <Link to={heroConfig.resumeLink}>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    size="lg" 
                    className="bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
                  >
                    <span className="text-base">View Resume</span>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/projects">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300"
                  >
                    <span className="text-base">View Projects</span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Social Links - Clean */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-8"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-300"
                  aria-label={link.name}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <FontAwesomeIcon icon={link.icon} className="text-2xl" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-400 text-sm flex flex-col items-center gap-2"
              >
                <span>Scroll to explore</span>
                <div className="w-[1px] h-12 bg-gray-300 dark:bg-gray-700" />
              </motion.div>
            </motion.div>
          </motion.section>

          <Separator className="opacity-20" />

          {/* Featured Projects */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-12"
          >
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white">
                Featured Work
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Building production systems at scale
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Link to="/projects">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group cursor-pointer rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 p-8 transition-all duration-300 bg-white dark:bg-gray-950"
                >
                  <h3 className="font-bold text-xl mb-3 text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    Elcara
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Founding engineer. Building agentic systems, market infrastructure, and AI-powered tools for capital markets.
                  </p>
                </motion.div>
              </Link>
              <Link to="/projects">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group cursor-pointer rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 p-8 transition-all duration-300 bg-white dark:bg-gray-950"
                >
                  <h3 className="font-bold text-xl mb-3 text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">
                    WhiteBeard
                  </h3>
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                    Backend & systems engineer. Core infrastructure, order execution, risk management, and blockchain integration.
                  </p>
                </motion.div>
              </Link>
            </div>
          </motion.section>

          {/* Quick Navigation */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center space-y-3">
              <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white">
                Explore
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <Link to="/projects">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 p-6 transition-all duration-300 bg-white dark:bg-gray-950 text-center"
                >
                  <h3 className="font-semibold text-lg text-black dark:text-white">
                    All Projects
                  </h3>
                </motion.div>
              </Link>
              <Link to="/about">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 p-6 transition-all duration-300 bg-white dark:bg-gray-950 text-center"
                >
                  <h3 className="font-semibold text-lg text-black dark:text-white">
                    About
                  </h3>
                </motion.div>
              </Link>
              <Link to="/resume">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 p-6 transition-all duration-300 bg-white dark:bg-gray-950 text-center"
                >
                  <h3 className="font-semibold text-lg text-black dark:text-white">
                    Resume
                  </h3>
                </motion.div>
              </Link>
            </div>
          </motion.section>
        </div>
      </Container>
    </div>
  );
};

export default Home;

