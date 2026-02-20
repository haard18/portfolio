import achievements from '../data/achievement';
import Container from '@/components/common/Container';
import { motion } from 'framer-motion';
import { stagger, fadeUp } from '@/lib/motion';

const Achievements = () => {
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-20 max-w-2xl">
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

          {/* List */}
          <motion.ul variants={stagger} className="divide-y divide-border">
            {achievements.map((item, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="py-4 flex gap-6 items-start"
              >
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-0.5 w-24 shrink-0">
                  {item.date}
                </span>
                <div className="space-y-0.5">
                  <p className="text-sm font-medium text-foreground">
                    {item.event}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.achievement} &middot; {item.organization}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Container>
    </div>
  );
};

export default Achievements;
