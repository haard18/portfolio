import Container from '@/components/common/Container';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { projects } from '@/data/projects';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Projects = () => {
  // Animation variants
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-6 text-center py-12"
          >
            <h1 className="text-8xl font-700 tracking-tight text-foreground">
              Projects
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg text-muted-foreground font-400"
            >
              Featured work from Elcara, WhiteBeard, and personal projects.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card className="overflow-hidden border border-border hover:border-border/50 transition-all duration-300 h-full flex flex-col bg-card rounded-3xl shadow-card">
                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-700 text-foreground">
                          {project.name}
                        </CardTitle>
                        <span className="text-xs font-600 text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {project.org}
                        </span>
                      </div>
                      <CardDescription className="text-muted-foreground text-sm leading-relaxed font-400">
                        {project.description}
                      </CardDescription>
                    </div>

                    {project.highlights && (
                      <p className="text-sm text-muted-foreground italic border-l-2 border-accent pl-3 font-400">
                        {project.highlights}
                      </p>
                    )}

                    {project.tech && (
                      <div className="space-y-2">
                        <p className="text-xs font-600 text-foreground/70 uppercase tracking-wide">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="text-xs bg-secondary text-muted-foreground px-3 py-1.5 rounded-lg font-500 border border-border"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.commits && (
                      <p className="text-xs text-muted-foreground font-400">
                        <strong>{project.commits}</strong> commits
                      </p>
                    )}

                    <div className="mt-auto pt-4 flex gap-3">
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <Button
                            size="sm"
                            className="w-full bg-accent hover:bg-accent/90 text-white transition-all duration-300 rounded-lg font-600"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Button>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="text-center pt-12 pb-24"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-3xl border border-border hover:border-border/50 p-8 max-w-2xl mx-auto bg-card shadow-card"
            >
              <p className="text-lg text-muted-foreground font-400">
                Explore more on my{' '}
                <motion.a
                  href="https://github.com/haard18"
                  target="_blank"
                  rel="noreferrer"
                  className="font-600 text-accent hover:text-accent/80 transition-colors underline underline-offset-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                >
                  GitHub
                </motion.a>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Projects;
