import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { heroConfig, socialLinks } from '@/config/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import haard from '../data/images/hardy.png';
import { motion } from 'framer-motion';
import { stagger, fadeUp, sectionReveal } from '@/lib/motion';
import { projects } from '@/data/projects';
import achievements from '@/data/achievement';
import { Github, ArrowRight } from 'lucide-react';

const featured = projects.filter((p) =>
  ['Email Engine', 'Quantum Backend', 'Poly Ranker', 'Quantum Control Plane'].includes(p.name)
);

const recentAchievements = achievements.slice(-4).reverse();

const roles = [
  {
    company: 'Elcara',
    role: 'Founding Engineer',
    description: 'Agentic systems, market infrastructure, and AI-powered tools for capital markets.',
  },
  {
    company: 'WhiteBeard',
    role: 'Backend Engineer',
    description: 'Core trading systems, risk management, blockchain integration, and order execution.',
  },
];

const techHighlights = ['Rust', 'TypeScript', 'Solidity', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'AWS'];

const Home = () => {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="min-h-[calc(100vh-3.5rem)] flex items-center">
        <Container>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-8 py-20 text-center"
          >
            <motion.img
              variants={fadeUp}
              src={haard}
              alt={heroConfig.name}
              className="h-28 w-28 rounded-full border border-border object-cover"
            />

            <motion.div variants={fadeUp} className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
                {heroConfig.name}
              </h1>
              <p className="font-mono text-accent text-sm">
                {heroConfig.title}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-lg text-muted-foreground leading-relaxed"
            >
              {heroConfig.description}
            </motion.p>

            <motion.div variants={fadeUp} className="flex gap-3">
              <Link to={heroConfig.resumeLink}>
                <Button className="bg-accent hover:bg-accent/90 text-white">
                  View Resume
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline">View Projects</Button>
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex gap-4 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <FontAwesomeIcon icon={link.icon} className="text-lg" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Current Roles */}
      <section className="border-t border-border">
        <Container className="py-20">
          <motion.div {...sectionReveal} className="space-y-8">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Currently
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {roles.map((r) => (
                <div key={r.company} className="p-5 rounded-lg border border-border space-y-2">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-sm font-semibold text-foreground">{r.company}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{r.role}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Tech */}
      <section className="border-t border-border">
        <Container className="py-20">
          <motion.div {...sectionReveal} className="space-y-6">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              Core Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techHighlights.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs px-3 py-1.5 rounded border border-border text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Selected Projects */}
      <section className="border-t border-border">
        <Container className="py-20">
          <motion.div {...sectionReveal} className="space-y-8">
            <div className="flex items-baseline justify-between">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Selected Work
              </p>
              <Link
                to="/projects"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                All projects <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {featured.map((project, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border p-5 flex flex-col gap-3 hover:border-muted-foreground/25 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-sm font-semibold text-foreground leading-tight">
                      {project.name}
                    </h3>
                    <span className="font-mono text-[11px] text-accent whitespace-nowrap shrink-0">
                      {project.org}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech?.slice(0, 4).map((t, j) => (
                      <span
                        key={j}
                        className="font-mono text-[11px] px-2 py-0.5 rounded border border-border text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-auto"
                    >
                      <Github className="h-3.5 w-3.5" />
                      Source
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Recent Achievements */}
      <section className="border-t border-border">
        <Container className="py-20">
          <motion.div {...sectionReveal} className="space-y-8">
            <div className="flex items-baseline justify-between">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                Recent
              </p>
              <Link
                to="/achievements"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              >
                All achievements <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <ul className="divide-y divide-border">
              {recentAchievements.map((item, i) => (
                <li key={i} className="py-3 flex gap-6 items-start">
                  <span className="font-mono text-xs text-muted-foreground whitespace-nowrap pt-0.5 w-24 shrink-0">
                    {item.date}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.event}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.achievement} &middot; {item.organization}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </Container>
      </section>

      {/* Contact footer */}
      <section className="border-t border-border">
        <Container className="py-16">
          <motion.div {...sectionReveal} className="text-center space-y-3">
            <p className="text-sm text-muted-foreground">
              Interested in working together?
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:haardsolanki.itm@gmail.com"
                className="font-mono text-xs text-accent hover:text-accent/80 underline underline-offset-2"
              >
                haardsolanki.itm@gmail.com
              </a>
              <a
                href="https://x.com/solanki_haard"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-accent hover:text-accent/80 underline underline-offset-2"
              >
                @solanki_haard
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
