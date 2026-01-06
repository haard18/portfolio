import React from 'react';
import achievements from '../data/achievement';
import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

// Helper function to get the correct medal emoji
const getMedalEmoji = (achievement: string) => {
  const lowerAchievement = achievement.toLowerCase();
  if (lowerAchievement.includes('first') || lowerAchievement.includes('grand prize')) {
    return '🥇'; // Gold Medal for first place or grand prize
  } else if (lowerAchievement.includes('second')) {
    return '🥈'; // Silver Medal for second place
  } else if (lowerAchievement.includes('third')) {
    return '🥉'; // Bronze Medal for third place
  } else if (lowerAchievement.includes('research')) {
    return '🔬'; // Research Paper
  } else {
    return '🏅'; // General Medal for others
  }
};

const Achievements: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Subtle Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s', animationDelay: '2s' }} />

      <Container className="py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block mb-2 text-muted-foreground text-xl md:text-2xl font-mono font-normal">
                $ cat achievements.log
              </span>
              <span className="gradient-text-elegant">Achievements</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground"
            >
              <span className="text-neon-cyan font-mono">{achievements.length}</span> milestones and counting
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Separator className="opacity-20" />
          </motion.div>

          {/* Achievements List */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 max-w-5xl mx-auto"
          >
            {achievements.map((item, index) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <div className="glass border-border hover:border-neon-cyan/50 transition-all duration-300 neon-glow-hover rounded-lg p-6">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="text-4xl"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.05, type: 'spring', stiffness: 200 }}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      {getMedalEmoji(item.achievement)}
                    </motion.div>
                    <div className="flex flex-col flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-neon-cyan font-mono text-sm md:text-base">
                          {item.Date}
                        </span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-lg md:text-xl font-bold gradient-text-elegant">
                          {item.event}
                        </span>
                      </div>
                      <span className="text-base text-muted-foreground">
                        {item.Organization}
                      </span>
                      {item.achievement && (
                        <span className="text-sm text-neon-green font-medium">
                          {item.achievement}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="glass rounded-lg border-border hover:border-neon-violet/50 p-8 max-w-2xl mx-auto text-center neon-glow-hover"
            >
              <p className="text-lg text-muted-foreground">
                Driven by curiosity, fueled by{' '}
                <span className="text-neon-cyan font-mono">challenges</span>, and always
                learning.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Achievements;
