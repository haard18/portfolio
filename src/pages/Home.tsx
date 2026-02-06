import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
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
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-background">
      <Container className="relative z-10">
        <div className="space-y-96">
          {/* Hero Section with Physics-Based Animations */}
          <motion.section
            style={{ opacity, scale, y }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="min-h-[80vh] flex flex-col justify-center space-y-16 py-24"
          >
            {/* Profile Image - Clean */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative"
              >
                <img
                  src={haard}
                  alt={heroConfig.name}
                  className="h-40 w-40 rounded-full border border-border object-cover shadow-card"
                />
              </motion.div>
            </motion.div>

            {/* Name and Title - Premium Typography */}
            <motion.div variants={itemVariants} className="space-y-8 text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-8xl font-700 tracking-tight leading-tight text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
              >
                Haard Solanki
              </motion.h1>
              
              <motion.div
                variants={itemVariants}
                className="space-y-6"
              >
                <p className="text-2xl font-600 text-foreground/90">
                  Backend & Blockchain Engineer
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-400">
                  Founding engineer at Elcara, building agentic systems and market infrastructure. Backend engineer at WhiteBeard, shipping core trading systems. DeFi protocol specialist.
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons - Premium styling */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 flex-wrap"
            >
              <Link to={heroConfig.resumeLink}>
                <motion.div 
                  whileHover={{ y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 text-white transition-all duration-300 px-8 py-3 rounded-lg font-600 shadow-sm hover:shadow-md"
                  >
                    <span className="text-base">View Resume</span>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/projects">
                <motion.div 
                  whileHover={{ y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-border hover:bg-secondary transition-all duration-300 px-8 py-3 rounded-lg font-600"
                  >
                    <span className="text-base">View Projects</span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Social Links - Clean */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-3"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-all duration-200"
                  aria-label={link.name}
                  whileHover={{ y: -2, scale: 1.08 }}
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

          <div className="divider-subtle opacity-30" />

          {/* Featured Projects */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            className="space-y-16"
          >
            <div className="text-center space-y-4">
              <h2 className="text-6xl font-700 tracking-tight text-foreground">
                Featured Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-400">
                Building production systems at scale
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <Link to="/projects">
                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="group cursor-pointer rounded-3xl border border-border hover:border-border/50 p-8 transition-all duration-300 bg-card shadow-card"
                >
                  <h3 className="font-700 text-2xl mb-4 text-foreground">
                    Elcara
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-400">
                    Founding engineer. Building agentic systems, market infrastructure, and AI-powered tools for capital markets.
                  </p>
                </motion.div>
              </Link>
              <Link to="/projects">
                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="group cursor-pointer rounded-3xl border border-border hover:border-border/50 p-8 transition-all duration-300 bg-card shadow-card"
                >
                  <h3 className="font-700 text-2xl mb-4 text-foreground">
                    WhiteBeard
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-400">
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
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            className="space-y-12 pb-24"
          >
            <div className="text-center">
              <h2 className="text-5xl font-700 tracking-tight text-foreground">
                Explore
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Link to="/projects">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="group cursor-pointer rounded-3xl border border-border hover:border-border/50 p-8 transition-all duration-300 bg-card shadow-card text-center"
                >
                  <h3 className="font-600 text-lg text-foreground">
                    All Projects
                  </h3>
                </motion.div>
              </Link>
              <Link to="/about">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="group cursor-pointer rounded-3xl border border-border hover:border-border/50 p-8 transition-all duration-300 bg-card shadow-card text-center"
                >
                  <h3 className="font-600 text-lg text-foreground">
                    About
                  </h3>
                </motion.div>
              </Link>
              <Link to="/resume">
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="group cursor-pointer rounded-3xl border border-border hover:border-border/50 p-8 transition-all duration-300 bg-card shadow-card text-center"
                >
                  <h3 className="font-600 text-lg text-foreground">
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

