import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
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
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-white dark:bg-black">

      <Container className="py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-6 text-center py-12">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              About Me
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400"
            >
              Get to know me better
            </motion.p>
          </motion.div>

          {/* Main Content */}
          <div className="mx-auto max-w-4xl space-y-16">
            {/* Introduction */}
            <motion.section
              variants={itemVariants}
              className="space-y-6 p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-white dark:bg-gray-950"
            >
              <h2 className="text-3xl font-semibold text-black dark:text-white">Hello!</h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
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
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-semibold text-black dark:text-white text-center">
                Skills & Technologies
              </h2>
              <motion.div
                className="flex flex-wrap gap-3 justify-center"
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
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Badge
                      variant="secondary"
                      className="text-sm px-4 py-2 border border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer bg-white dark:bg-gray-950 text-black dark:text-white"
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
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold text-black dark:text-white text-center">
                What I Do
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
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
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 bg-white dark:bg-gray-950 space-y-3"
                  >
                    <h3 className="text-xl font-medium text-black dark:text-white">{interest.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 p-8 text-center bg-white dark:bg-gray-950"
              >
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Let's build something together.{' '}
                  <motion.a
                    href="https://x.com/solanki_haard"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Twitter
                  </motion.a>{' '}
                  •{' '}
                  <motion.a
                    href="mailto:haardsolanki.itm@gmail.com"
                    className="font-medium text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
