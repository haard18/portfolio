import Container from '@/components/common/Container';
import { projects } from '@/data/projects';
import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { stagger, fadeUp } from '@/lib/motion';

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Container className="py-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="space-y-10"
        >
          {/* Header */}
          <motion.div variants={fadeUp}>
            <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Work
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Projects
            </h1>
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={stagger}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`rounded-lg border border-border/60 bg-surface-raised shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 transition-all duration-300 p-5 flex flex-col gap-3 border-l-2 ${project.org === 'Elcara' ? 'border-l-elcara' : 'border-l-whitebeard'}`}
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-foreground leading-tight">
                    {project.name}
                  </h3>
                  <span className={`font-mono text-[11px] whitespace-nowrap shrink-0 px-1.5 py-0.5 rounded ${project.org === 'Elcara' ? 'text-elcara bg-elcara-subtle' : 'text-whitebeard bg-whitebeard-subtle'}`}>
                    {project.org}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech */}
                {project.tech && (
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-secondary/60 border-0 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                {/* GitHub link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mt-auto pt-1"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Source
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Projects;
