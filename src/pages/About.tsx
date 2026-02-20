import Container from '@/components/common/Container';
import { aboutConfig } from '@/config/About';
import { motion } from 'framer-motion';
import { stagger, fadeUp, sectionReveal } from '@/lib/motion';

const expertise = [
  {
    title: 'Backend Systems',
    description:
      'High-performance, scalable backend infrastructure powering trading and agentic applications.',
  },
  {
    title: 'Blockchain Engineering',
    description:
      'Smart contracts, DeFi protocols, on-chain infrastructure. Solidity, Rust (Anchor), and ecosystem integrations.',
  },
  {
    title: 'AI Systems',
    description:
      'Integrating AI agents into production systems. LLM fine-tuning, agentic workflows, and intelligent automation.',
  },
  {
    title: 'DevOps & Infrastructure',
    description:
      'Containerization, CI/CD, cloud platforms, and observability. Reliable and scalable systems.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-20 max-w-2xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              About
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground mb-6">
              Hello!
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              {aboutConfig.description}
            </p>
          </motion.div>

          {/* Technologies */}
          <motion.section {...sectionReveal}>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {aboutConfig.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 rounded border border-border bg-secondary text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.section>

          {/* What I Do */}
          <motion.section {...sectionReveal}>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              What I Do
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {expertise.map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-lg border border-border space-y-2"
                >
                  <h3 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Contact */}
          <motion.p {...sectionReveal} className="text-sm text-muted-foreground">
            Let's build something together.{' '}
            <a
              href="https://x.com/solanki_haard"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-accent hover:text-accent/80 underline underline-offset-2"
            >
              Twitter
            </a>
            {' \u2022 '}
            <a
              href="mailto:haardsolanki.itm@gmail.com"
              className="font-medium text-accent hover:text-accent/80 underline underline-offset-2"
            >
              Email
            </a>
          </motion.p>
        </motion.div>
      </Container>
    </div>
  );
};

export default About;
