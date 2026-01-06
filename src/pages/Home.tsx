import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { heroConfig, socialLinks } from '@/config/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import haard from '../data/images/hardy.png';
import { GitHubTerminal } from '@/components/GitHubTerminal';
import { SystemMonitor } from '@/components/SystemMonitor';
import { InteractiveTimeline } from '@/components/InteractiveTimeline';
import { FeatureShowcase } from '@/components/FeatureShowcase';
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
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      
      {/* Subtle Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

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
            {/* Profile Image with Neon Glow */}
            <motion.div variants={itemVariants} className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-green to-neon-violet opacity-30 blur-xl" />
                <img
                  src={haard}
                  alt={heroConfig.name}
                  className="relative h-36 w-36 rounded-full border-2 border-neon-cyan/30 object-cover shadow-2xl ring-4 ring-background"
                />
              </motion.div>
            </motion.div>

            {/* Name and Title with Elegant Typography */}
            <motion.div variants={itemVariants} className="space-y-6 text-center max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="block mb-2 text-muted-foreground text-2xl md:text-3xl font-mono font-normal tracking-wide">
                  $ whoami
                </span>
                <span className="gradient-text-elegant">Haard Solanki</span>
              </motion.h1>
              
              <motion.div
                variants={itemVariants}
                className="space-y-3"
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-foreground/90 font-medium">
                  Full Stack Engineer
                </p>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Building scalable <span className="text-neon-cyan font-mono">backend systems</span>,{' '}
                  <span className="text-neon-green font-mono">onchain tools</span>, and{' '}
                  <span className="text-neon-violet font-mono">DeFi infrastructure</span>
                </p>
                <p className="text-base md:text-lg text-muted-foreground/80 font-mono">
                  Currently shipping at <span className="text-neon-cyan">goldPesa</span>
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons with Micro-interactions */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-4 flex-wrap"
            >
              <Link to={heroConfig.resumeLink}>
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="glass text-white hover:text-black border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300 group"
                  >
                    <span className="text-base ">View Resume</span>
                    <motion.span
                      className="ml-2 inline-block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/about">
                <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-border hover:border-neon-violet/60 transition-all duration-300"
                  >
                    <span className="text-base">Get in touch</span>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Social Links with Hover Effects */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-6"
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-neon-cyan transition-all duration-300"
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
                className="text-muted-foreground/50 text-sm font-mono flex flex-col items-center gap-2"
              >
                <span>scroll to explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan/50 to-transparent" />
              </motion.div>
            </motion.div>
          </motion.section>

          <Separator className="opacity-20" />

          {/* GitHub Terminal Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl gradient-text-elegant">
                <span className="block text-sm text-muted-foreground font-mono mb-2">
                  $ git log --oneline
                </span>
                Live GitHub Activity
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real-time feed from my GitHub — because code speaks louder than words
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <GitHubTerminal />
            </motion.div>
          </motion.section>

          <Separator className="opacity-20" />

          {/* System Monitor Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl gradient-text-elegant">
                <span className="block text-sm text-muted-foreground font-mono mb-2">
                  $ htop --system-stats
                </span>
                System Monitor
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                DevOps-inspired dashboard with live metrics
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <SystemMonitor />
            </motion.div>
          </motion.section>

          <Separator className="opacity-20" />

          {/* Interactive Timeline Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl gradient-text-elegant">
                <span className="block text-sm text-muted-foreground font-mono mb-2">
                  $ cat timeline.log
                </span>
                My Journey
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Scroll through my career path and milestones
              </p>
            </div>
            <InteractiveTimeline />
          </motion.section>

          <Separator className="opacity-20" />

          {/* Feature Showcase */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl gradient-text-elegant">
                <span className="block text-sm text-muted-foreground font-mono mb-2">
                  $ ls -la ./features
                </span>
                What Makes This Unique
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Interactive features that showcase technical depth
              </p>
            </div>
            <FeatureShowcase />
          </motion.section>

          <Separator className="opacity-20" />

          {/* Quick Links */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tight lg:text-4xl gradient-text-elegant">
                <span className="block text-sm text-muted-foreground font-mono mb-2">
                  $ cd ../explore
                </span>
                Explore More
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <Link to="/projects">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group cursor-pointer rounded-lg glass border-border hover:border-neon-cyan/50 p-8 transition-all duration-300 neon-glow-hover"
                >
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-neon-cyan transition-colors">
                    Projects
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Check out my latest work and side projects
                  </p>
                </motion.div>
              </Link>
              <Link to="/achievements">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group cursor-pointer rounded-lg glass border-border hover:border-neon-green/50 p-8 transition-all duration-300 neon-glow-hover"
                >
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-neon-green transition-colors">
                    Achievements
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Honors, certifications, and milestones
                  </p>
                </motion.div>
              </Link>
              <Link to="/about">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group cursor-pointer rounded-lg glass border-border hover:border-neon-violet/50 p-8 transition-all duration-300 neon-glow-hover"
                >
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-neon-violet transition-colors">
                    About
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Learn more about my journey and interests
                  </p>
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

