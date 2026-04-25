import achievements from '../data/achievement';
import Container from '@/components/common/Container';
import { motion } from 'framer-motion';
import { stagger, fadeUp } from '@/lib/motion';

const isWin = (achievement: string) =>
  /first|winner/i.test(achievement);

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-20 max-w-3xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Header */}
          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Milestones
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Achievements
            </h1>
          </motion.div>

          {/* Cards */}
          <motion.div variants={stagger} className="grid gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-lg border border-border/60 bg-surface-raised p-5 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 ${isWin(item.achievement) ? 'border-l-2 border-l-gold' : ''}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">
                      {item.event}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {item.achievement} &middot; {item.organization}
                    </p>
                  </div>
                  <span className="bg-secondary/60 px-2 py-1 rounded font-mono text-xs text-muted-foreground whitespace-nowrap shrink-0">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Achievements;
