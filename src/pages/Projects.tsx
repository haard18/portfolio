import Container from '@/components/common/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { projects } from '@/data/projects';
import { ExternalLink, Github } from 'lucide-react';
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
      <div className="fixed top-0 left-1/3 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }} />
      <div className="fixed bottom-0 right-1/3 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '16s', animationDelay: '4s' }} />

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
                $ ls -la ./projects
              </span>
              <span className="gradient-text-elegant">Projects</span>
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground"
            >
              My projects and work across different technologies and domains.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Separator className="opacity-20" />
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Card className="overflow-hidden glass border-border hover:border-neon-cyan/50 transition-all duration-300 neon-glow-hover h-full flex flex-col">
                  <motion.div
                    className="aspect-video overflow-hidden relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <CardHeader>
                    <CardTitle className="text-xl gradient-text-elegant">
                      {project.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto">
                    <div className="flex gap-2">
                      {project.url && (
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="default"
                            size="sm"
                            className="w-full glass border-neon-cyan/30 hover:border-neon-cyan/60 transition-all duration-300"
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Button>
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full border-border hover:border-neon-green/60 transition-all duration-300"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Button>
                        </motion.a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center pt-8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="glass rounded-lg border-border hover:border-neon-violet/50 p-8 max-w-2xl mx-auto neon-glow-hover"
            >
              <p className="text-lg text-muted-foreground">
                More projects on my{' '}
                <motion.a
                  href="https://github.com/haard18"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-neon-cyan hover:text-neon-green transition-colors font-mono"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
