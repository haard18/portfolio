import Container from '@/components/common/Container';
import { aboutConfig } from '@/config/About';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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
    <div className="min-h-screen relative overflow-hidden bg-background">
      <Container className="py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-6 text-center py-12">
            <motion.h1
              className="text-8xl font-700 tracking-tight text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            >
              About Me
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg text-muted-foreground font-400"
            >
              Get to know me better
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="mx-auto max-w-4xl space-y-24">
            {/* Introduction */}
            <motion.section
              variants={itemVariants}
              className="space-y-6 p-8 rounded-3xl border border-border hover:border-border/50 transition-all duration-300 bg-card shadow-card"
            >
              <h2 className="text-3xl font-700 text-foreground">Hello!</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed font-400">
                <p>
                  I'm Haard, a backend and blockchain engineer. Currently founding engineer at Elcara, building agentic systems and market infrastructure. Also core engineer at WhiteBeard, shipping trading infrastructure and risk management systems.
                </p>
                <p>
                  I specialize in systems architecture, blockchain development, and scalable backend infrastructure. Tech: Rust, TypeScript, Solidity, distributed systems, DeFi protocols, and production DevOps.
                </p>
              </div>
            </motion.section>

            {/* Skills */}
            <motion.section
              variants={itemVariants}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-700 text-foreground text-center">
                Skills & Technologies
              </h2>
              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
              >
                {aboutConfig.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-sm px-4 py-2 border border-border hover:border-border/50 transition-all duration-200 cursor-pointer bg-secondary text-muted-foreground hover:bg-secondary/80 font-500"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Expertise */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              className="space-y-12"
            >
              <h2 className="text-4xl font-700 text-foreground text-center">
                What I Do
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                {[
                  {
                    title: 'Backend Systems',
                    description: 'Building high-performance, scalable backend infrastructure. Core systems that power trading and agentic applications.',
                  },
                  {
                    title: 'Blockchain Engineering',
                    description: 'Smart contract development, DeFi protocols, and on-chain infrastructure. Solidity, Rust (Anchor), and ecosystem integrations.',
                  },
                  {
                    title: 'AI Systems',
                    description: 'Integrating AI agents into production systems. LLM fine-tuning, agentic workflows, and intelligent automation.',
                  },
                  {
                    title: 'DevOps & Infrastructure',
                    description: 'Containerization, CI/CD, cloud platforms, and observability. Making systems reliable and scalable.',
                  },
                ].map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                    whileHover={{ y: -4 }}
                    className="p-8 rounded-3xl border border-border hover:border-border/50 transition-all duration-300 bg-card shadow-card space-y-3"
                  >
                    <h3 className="text-xl font-700 text-foreground">{interest.title}</h3>
                    <p className="text-muted-foreground leading-relaxed font-400">
                      {interest.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Contact CTA */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="pb-24"
            >
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="rounded-3xl border border-border hover:border-border/50 p-8 text-center bg-card shadow-card"
              >
                <p className="text-lg text-muted-foreground leading-relaxed font-400">
                  Let's build something together.{' '}
                  <motion.a
                    href="https://x.com/solanki_haard"
                    target="_blank"
                    rel="noreferrer"
                    className="font-600 text-accent hover:text-accent/80 transition-colors underline underline-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    Twitter
                  </motion.a>{' '}
                  •{' '}
                  <motion.a
                    href="mailto:haardsolanki.itm@gmail.com"
                    className="font-600 text-accent hover:text-accent/80 transition-colors underline underline-offset-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                  >
                    Email
                  </motion.a>
                </p>
              </motion.div>
            </motion.section>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default About;
