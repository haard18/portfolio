import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Code, Award } from 'lucide-react';

interface TimelineEvent {
  year: string;
  title: string;
  company?: string;
  description: string;
  type: 'work' | 'education' | 'project' | 'achievement';
  icon: any;
  color: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: '2025',
    title: 'Full Stack Engineer',
    company: 'goldPesa',
    description: 'Building DeFi solutions and tokenomics infrastructure. Leading backend architecture and Web3 integrations.',
    type: 'work',
    icon: Briefcase,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2024',
    title: 'SENTIO Platform',
    description: 'Built end-to-end pipeline with security, audit, and monitoring capabilities. Deployed on Arweave network.',
    type: 'project',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2024',
    title: 'Multiple Hackathon Wins',
    description: 'Won several blockchain and AI hackathons including prizes for innovative DeFi and Web3 solutions.',
    type: 'achievement',
    icon: Award,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    year: '2023',
    title: 'Open Source Contributions',
    description: 'Active contributor to Web3 and developer tools ecosystem. Built deployment tools and infrastructure.',
    type: 'project',
    icon: Code,
    color: 'from-green-500 to-emerald-500',
  },
  {
    year: '2022',
    title: 'Computer Engineering',
    company: 'University',
    description: 'Focused on distributed systems, blockchain technology, and full-stack development.',
    type: 'education',
    icon: GraduationCap,
    color: 'from-indigo-500 to-violet-500',
  },
];

export const InteractiveTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const centerY = window.innerHeight / 2;

      const events = container.querySelectorAll('.timeline-event');
      let closestIndex = 0;
      let closestDistance = Infinity;

      events.forEach((event, index) => {
        const rect = event.getBoundingClientRect();
        const eventCenter = rect.top + rect.height / 2;
        const distance = Math.abs(eventCenter - centerY);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative py-20">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">My Journey</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From student to engineer, building the future of Web3
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
            />
          </div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;
              const isActive = activeIndex === index;

              return (
                <div key={index} className="timeline-event relative">
                  <div className={`flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
                    {/* Content Card */}
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}
                    >
                      <motion.div
                        animate={{
                          scale: isActive ? 1.05 : 1,
                          boxShadow: isActive
                            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                            : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        }}
                        transition={{ duration: 0.3 }}
                        className="bg-card border rounded-lg p-6 hover:border-foreground/20 transition-colors cursor-pointer"
                      >
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${event.color} text-white`}>
                          {event.year}
                        </div>
                        <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                        {event.company && (
                          <p className="text-sm text-muted-foreground font-medium mb-2">
                            {event.company}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {event.description}
                        </p>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Center Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="absolute left-1/2 top-0 transform -translate-x-1/2"
                  >
                    <motion.div
                      animate={{
                        scale: isActive ? 1.2 : 1,
                        boxShadow: isActive
                          ? '0 0 20px rgba(59, 130, 246, 0.5)'
                          : '0 0 0 rgba(59, 130, 246, 0)',
                      }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${event.color} flex items-center justify-center shadow-lg border-4 border-background`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* End Marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-12"
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
