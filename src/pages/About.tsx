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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />

      {/* Subtle Gradient Orbs */}
      <div className="fixed top-0 right-1/4 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="fixed bottom-0 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s', animationDelay: '3s' }} />

      <Container className="py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4 text-center">
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block mb-2 text-muted-foreground text-xl md:text-2xl font-mono font-normal">
                $ cat about.md
              </span>
              <span className="gradient-text-elegant">About Me</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground"
            >
              Get to know me better
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Separator className="opacity-20" />
          </motion.div>

          {/* Main Content */}
          <div className="mx-auto max-w-4xl space-y-16">
            {/* Introduction */}
            <motion.section
              variants={itemVariants}
              className="space-y-6 glass p-8 rounded-lg border-border hover:border-neon-cyan/30 transition-all duration-300"
            >
              <h2 className="text-3xl font-semibold gradient-text-elegant">Hello!</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hey there! I'm <span className="text-neon-cyan font-medium">Haard</span>, a passionate full-stack web developer with a knack for
                  building modern web applications that merge <span className="text-neon-green font-mono">Web3</span> and <span className="text-neon-violet font-mono">AI</span> technology. I love
                  crafting seamless user experiences and delving into the world of decentralized apps.
                </p>
                <p>
                  I specialize in full-stack web development, primarily using technologies like
                  React, Node.js, TypeScript, and Tailwind CSS. I'm also deeply interested in
                  blockchain development and the rapidly evolving world of decentralized applications.
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
              <h2 className="text-3xl font-semibold gradient-text-elegant text-center">
                <span className="block text-sm text-muted-foreground font-mono mb-2">
                  $ ls -la ./skills
                </span>
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
                      className="text-sm px-4 py-2 glass border-border hover:border-neon-cyan/50 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* Interests */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-semibold gradient-text-elegant text-center">
                <span className="block text-sm text-muted-foreground font-mono mb-2">
                  $ cat interests.log
                </span>
                What I Do
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: 'Web3 & AI Integration',
                    description: 'Merging Web3 with AI is one of my passions. I constantly explore new ways to integrate decentralized technologies with AI-driven solutions to create innovative and secure applications for the future.',
                    color: 'neon-cyan',
                  },
                  {
                    title: 'Open Source',
                    description: 'I actively contribute to open-source projects, helping the community and staying updated with the latest trends in the tech world. I love collaborating with other developers and sharing my knowledge.',
                    color: 'neon-green',
                  },
                  {
                    title: 'Full Stack Development',
                    description: 'Building complete web applications from frontend to backend, with a focus on modern frameworks, responsive design, and optimal user experience.',
                    color: 'neon-violet',
                  },
                  {
                    title: 'Beyond Coding',
                    description: "When I'm not coding, you can find me exploring new tech gadgets, playing sports, or enjoying a good meal while on a hike. Reading books is my favourite hobby while I can produce full-fledged music in FL Studio.",
                    color: 'neon-cyan',
                  },
                ].map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`glass p-6 rounded-lg border-border hover:border-${interest.color}/50 transition-all duration-300 neon-glow-hover space-y-3`}
                  >
                    <h3 className={`text-xl font-medium text-${interest.color}`}>{interest.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
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
                className="glass rounded-lg border-border hover:border-neon-violet/50 p-8 text-center neon-glow-hover"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Want to collaborate or just say hello? Feel free to{' '}
                  <motion.a
                    href="https://x.com/solanki_haard"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-neon-cyan hover:text-neon-green transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    reach out on Twitter
                  </motion.a>{' '}
                  or email me at{' '}
                  <motion.a
                    href="mailto:haardsolanki.itm@gmail.com"
                    className="font-medium text-neon-violet hover:text-neon-cyan transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    haardsolanki.itm@gmail.com
                  </motion.a>
                  !
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
