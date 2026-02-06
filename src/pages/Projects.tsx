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
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-black">

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
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-black dark:text-white">
              Projects
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
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
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              >
                <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-400 h-full flex flex-col bg-white dark:bg-gray-950 rounded-2xl shadow-sm hover:shadow-lg">
                  <div className="p-8 space-y-4 flex-1 flex flex-col">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold text-black dark:text-white">
                          {project.name}
                        </CardTitle>
                        <span className="text-xs font-semibold text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full">
                          {project.org}
                        </span>
                      </div>
                      <CardDescription className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </div>

                    {project.highlights && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic border-l-2 border-blue-500 pl-3">
                        {project.highlights}
                      </p>
                    )}

                    {project.tech && (
                      <div className="space-y-2">
                        <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((t, i) => (
                            <span
                              key={i}
                              className="text-xs bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.commits && (
                      <p className="text-xs text-gray-600 dark:text-gray-400">
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
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                        >
                          <Button
                            size="sm"
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 rounded-lg font-medium"
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
            className="text-center pt-12"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 p-8 max-w-2xl mx-auto bg-white dark:bg-gray-950 shadow-sm hover:shadow-md"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Explore more on my{' '}
                <motion.a
                  href="https://github.com/haard18"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500 transition-colors underline"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
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
